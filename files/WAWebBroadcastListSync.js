__d(
  "WAWebBroadcastListSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastListStorageUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
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
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
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
            return o("WASyncdConst").Actions.BusinessBroadcastList;
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
                                  var l,
                                    s = i.value,
                                    u = s.businessBroadcastListAction;
                                  if (!u)
                                    return (
                                      a++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  var c = u.audienceExpression,
                                    d = u.labelIds,
                                    m = u.listName,
                                    p = u.participants,
                                    _ =
                                      (l = o(
                                        "WAWebUserPrefsMeUser",
                                      ).getMaybeMeLidUser()) == null
                                        ? void 0
                                        : l.toString(),
                                    f = (p != null ? p : []).filter(
                                      function (e) {
                                        return e.lidJid !== _;
                                      },
                                    ),
                                    g =
                                      c != null
                                        ? o(
                                            "WAWebAudienceExpressionTypes",
                                          ).parseAudienceExpressionJson(c)
                                        : null,
                                    h =
                                      g != null
                                        ? g
                                        : (d != null ? d : []).length > 0
                                          ? o(
                                              "WAWebAudienceExpressionTypes",
                                            ).createLabelPredicateExpression(
                                              d != null ? d : [],
                                            )
                                          : o(
                                              "WAWebAudienceExpressionTypes",
                                            ).createExplicitExpression(
                                              f.map(function (e) {
                                                return e.lidJid;
                                              }),
                                            );
                                  return (
                                    yield o(
                                      "WAWebBroadcastListStorageUtils",
                                    ).updateBroadcastListStorage({
                                      audienceExpression: h,
                                      id: n,
                                      listName: m != null ? m : "",
                                    }),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
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
                                        o("WASyncdConst").SyncActionState
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
                                  o("WASyncdConst").SyncActionState.Failed,
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
          (a.getBroadcastListMutation = function (t, n, r, a, i) {
            var e = {
              businessBroadcastListAction: {
                participants: n,
                listName: r,
                labelIds: [],
                audienceExpression: o(
                  "WAWebAudienceExpressionTypes",
                ).serializeAudienceExpression(i),
              },
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              action: this.getAction(),
              indexArgs: [t],
              collection: this.collectionName,
              value: e,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: a,
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
