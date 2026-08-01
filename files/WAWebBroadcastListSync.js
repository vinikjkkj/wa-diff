__d(
  "WAWebBroadcastListSync",
  [
    "Promise",
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastListStorageUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.BusinessBroadcastList;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = yield (s || (s = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1];
                              if (!n) return r.malformedActionIndex();
                              e: {
                                var i = e;
                                if (
                                  ((typeof i == "object" && i !== null) ||
                                    typeof i == "function") &&
                                  i.operation === "set" &&
                                  "value" in i
                                ) {
                                  var l = i.value,
                                    s = l.businessBroadcastListAction;
                                  if (!s)
                                    return (
                                      a++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  var u = s.audienceExpression,
                                    c = s.labelIds,
                                    d = s.listName,
                                    m = s.participants,
                                    p = o("WAWebUserPrefsMeUser")
                                      .getMeLidUserOrThrow()
                                      .toString(),
                                    _ = (m != null ? m : []).filter(
                                      function (e) {
                                        return e.lidJid !== p;
                                      },
                                    ),
                                    f =
                                      u != null
                                        ? o(
                                            "WAWebAudienceExpressionTypes",
                                          ).parseAudienceExpressionJson(u)
                                        : null,
                                    g =
                                      f != null
                                        ? f
                                        : (c != null ? c : []).length > 0
                                          ? o(
                                              "WAWebAudienceExpressionTypes",
                                            ).createLabelPredicateExpression(
                                              c != null ? c : [],
                                            )
                                          : o(
                                              "WAWebAudienceExpressionTypes",
                                            ).createExplicitExpression(
                                              _.map(function (e) {
                                                return e.lidJid;
                                              }),
                                            );
                                  return (
                                    yield o(
                                      "WAWebBroadcastListStorageUtils",
                                    ).updateBroadcastListStorage({
                                      audienceExpression: g,
                                      id: n,
                                      listName: d != null ? d : "",
                                    }),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                if (
                                  ((typeof i == "object" && i !== null) ||
                                    typeof i == "function") &&
                                  i.operation === "remove"
                                ) {
                                  return (
                                    yield o(
                                      "WAWebBroadcastListStorageUtils",
                                    ).removeBroadcastListStorage(n),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    i,
                                );
                              }
                            } catch (e) {
                              return {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Failed,
                              };
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "broadcast list sync: ",
                          " malformed mutations",
                        ])),
                      a,
                    ),
                  i
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getBroadcastListMutation = function (t) {
            var e = t.expression,
              n = t.id,
              r = t.listName,
              a = t.participants,
              i = t.timestamp,
              l = {
                businessBroadcastListAction: {
                  participants: a,
                  listName: r,
                  labelIds: [],
                  audienceExpression: o(
                    "WAWebAudienceExpressionTypes",
                  ).serializeAudienceExpression(e),
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              action: this.getAction(),
              indexArgs: [n],
              collection: this.collectionName,
              value: l,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: i,
            });
          }),
          (a.getDeleteBroadcastListMutation = function (t, n) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              action: this.getAction(),
              indexArgs: [t],
              collection: this.collectionName,
              value: {},
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.REMOVE,
              timestamp: n,
            });
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
