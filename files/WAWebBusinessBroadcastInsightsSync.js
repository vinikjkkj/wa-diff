__d(
  "WAWebBusinessBroadcastInsightsSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebBizBroadcastInsightsStorageUtils",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
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
            return o("WASyncdConst").Actions.BusinessBroadcastInsights;
          }),
          (r.applyMutations = async function (n) {
            var t = this;
            if (
              !o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastSendWebEnabledNoExposure()
            )
              return n.map(function () {
                return {
                  actionState: o("WASyncdConst").SyncActionState.Unsupported,
                };
              });
            var r = 0,
              a = 0,
              i = [],
              l = 0,
              c = [],
              d = [],
              m = [],
              p = await Promise.all(
                n.map(async function (e) {
                  try {
                    var n = e.indexParts,
                      s = n[1];
                    if (!s) return t.malformedActionIndex();
                    e: {
                      var u = e;
                      if (
                        ((typeof u == "object" && u !== null) ||
                          typeof u == "function") &&
                        u.operation === "set" &&
                        "value" in u &&
                        "timestamp" in u
                      ) {
                        var p = u.value,
                          _ = u.timestamp,
                          f = p.businessBroadcastInsightsAction;
                        if (!f)
                          return (
                            r++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        var g = f.deliveredCount,
                          h = f.quickReplyCount,
                          y = f.readCount,
                          C = f.recipientCount,
                          b = f.repliedCount;
                        return (
                          a++,
                          i.length < 3 &&
                            i.push(
                              "campaign=" +
                                s +
                                " recipients=" +
                                (C != null ? C : 0) +
                                " delivered=" +
                                (g != null ? g : 0) +
                                " read=" +
                                (y != null ? y : 0) +
                                " replied=" +
                                (b != null ? b : 0) +
                                " quickReply=" +
                                (h != null ? h : 0),
                            ),
                          await o(
                            "WAWebBizBroadcastInsightsStorageUtils",
                          ).upsertInsightsStorage(
                            s,
                            {
                              deliveredCount: g,
                              quickReplyCount: h,
                              readCount: y,
                              recipientCount: C,
                              repliedCount: b,
                            },
                            _,
                          ),
                          d.push({
                            campaignId: s,
                            deliveredCount: g,
                            quickReplyCount: h,
                            readCount: y,
                            recipientCount: C,
                            repliedCount: b,
                            lastUpdatedTimestampMs: _,
                          }),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      if (
                        ((typeof u == "object" && u !== null) ||
                          typeof u == "function") &&
                        u.operation === "remove"
                      ) {
                        return (
                          l++,
                          c.length < 3 && c.push(s),
                          await o(
                            "WAWebBizBroadcastInsightsStorageUtils",
                          ).removeInsightsStorage(s),
                          m.push(s),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          u,
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
              a > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "BBI SyncD received ",
                      " SET operations => ",
                      "",
                    ])),
                  a,
                  i,
                ),
              l > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "BBI SyncD received ",
                      " REMOVE operations for campaigns => ",
                      "",
                    ])),
                  l,
                  c,
                ),
              r > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "BBI sync: ",
                      " malformed mutations",
                    ])),
                  r,
                ),
              (a > 0 || l > 0) &&
                (o("WAWebBackendApi").frontendFireAndForget(
                  "refreshBroadcastCampaignState",
                  { broadcastJids: [] },
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "syncBroadcastInsightsToCollection",
                  { upserts: d, removedCampaignIds: m },
                )),
              p
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
