__d(
  "WAWebBroadcastListSync",
  [
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastProListUtils",
    "WAWebBroadcastListStorageUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsHistorySync",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
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
            return o("WAWebSyncdConst").Actions.BusinessBroadcastList;
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
                        var l = i.value,
                          s = l.businessBroadcastListAction;
                        if (!s)
                          return (
                            r++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        var u = s.audienceExpression,
                          c = s.customAudienceFbid,
                          d = s.labelIds,
                          m = s.listName,
                          p = s.participants,
                          _ = c == null ? void 0 : c.trim(),
                          f = _ != null && _.length > 0 ? _ : void 0,
                          g = o("WAWebUserUtils")
                            .getMeLidUserOrThrow()
                            .toString(),
                          h = (p != null ? p : []).filter(function (e) {
                            return e.lidJid !== g;
                          }),
                          y =
                            u != null
                              ? o(
                                  "WAWebAudienceExpressionTypes",
                                ).parseAudienceExpressionJson(u)
                              : null,
                          C =
                            y != null
                              ? y
                              : (d != null ? d : []).length > 0
                                ? o(
                                    "WAWebAudienceExpressionTypes",
                                  ).createLabelPredicateExpression(
                                    d != null ? d : [],
                                  )
                                : o(
                                    "WAWebAudienceExpressionTypes",
                                  ).createExplicitExpression(
                                    h.map(function (e) {
                                      return e.lidJid;
                                    }),
                                  );
                        return (
                          await o(
                            "WAWebBroadcastListStorageUtils",
                          ).updateBroadcastListStorage({
                            audienceExpression: C,
                            customAudienceFbid: f,
                            id: a,
                            isBizBroadcastPro: o(
                              "WAWebBizBroadcastProListUtils",
                            ).isBizBroadcastProList(f),
                            listName: m != null ? m : "",
                            shouldInsertInitialSystemMessages: o(
                              "WAWebUserPrefsHistorySync",
                            ).getInitialHistorySyncComplete(),
                          }),
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
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
                              o("WAWebSyncdConst").SyncActionState.Success,
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
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
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
          (r.getBroadcastListMutation = function (t) {
            var e = t.customAudienceFbid,
              n = t.expression,
              r = t.id,
              a = t.listName,
              i = t.participants,
              l = t.timestamp,
              s = {
                businessBroadcastListAction: babelHelpers.extends(
                  {},
                  e != null ? { customAudienceFbid: e } : {},
                  {
                    participants: i,
                    listName: a,
                    labelIds: [],
                    audienceExpression: o(
                      "WAWebAudienceExpressionTypes",
                    ).serializeAudienceExpression(n),
                  },
                ),
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              action: this.getAction(),
              indexArgs: [r],
              collection: this.collectionName,
              value: s,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: l,
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
