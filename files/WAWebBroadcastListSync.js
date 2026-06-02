__d(
  "WAWebBroadcastListSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastListStorageUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 1;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.BusinessBroadcastList;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = await Promise.all(
                n.map(async function (e) {
                  try {
                    var n = e.indexParts,
                      a = n[1];
                    if (!a) return t.malformedActionIndex();
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
                            r++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
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
                          f = (p != null ? p : []).filter(function (e) {
                            return e.lidJid !== _;
                          }),
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
                          await o(
                            "WAWebBroadcastListStorageUtils",
                          ).updateBroadcastListStorage({
                            audienceExpression: h,
                            id: a,
                            listName: m != null ? m : "",
                          }),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
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
                          await o(
                            "WAWebBroadcastListStorageUtils",
                          ).removeBroadcastListStorage(a),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
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
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              r > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "broadcast list sync: ",
                      " malformed mutations",
                    ])),
                  r,
                ),
              a
            );
          }),
          (r.getBroadcastListMutation = function (t, n, r, a, i) {
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
          (r.getDeleteBroadcastListMutation = function (t, n) {
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
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
