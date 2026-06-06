__d(
  "WAWebBroadcastCampaignSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
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
            return o("WASyncdConst").Actions.BusinessBroadcastCampaign;
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
              a = new Set(),
              i = [],
              l = [],
              s = await Promise.all(
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
                        var c = u.value,
                          d = u.timestamp,
                          m = c.businessBroadcastCampaignAction;
                        if (
                          !m ||
                          m.broadcastJid == null ||
                          m.deviceId == null ||
                          m.status == null
                        )
                          return (
                            r++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        await o(
                          "WAWebBizBroadcastCampaignStorageUtils",
                        ).upsertCampaignStorage(s, m, d);
                        var p = m.broadcastJid;
                        return (
                          p != null && a.add(p),
                          i.push(s),
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
                        var _ = await o("WAWebSchemaBusinessBroadcastCampaign")
                          .getBusinessBroadcastCampaignTable()
                          .get(s);
                        return (
                          (_ == null ? void 0 : _.broadcastJid) != null &&
                            a.add(_.broadcastJid),
                          await o(
                            "WAWebBizBroadcastCampaignStorageUtils",
                          ).removeCampaignStorage(s),
                          l.push(s),
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
              r > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "broadcast campaign sync: ",
                      " malformed mutations",
                    ])),
                  r,
                ),
              a.size > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "refreshBroadcastCampaignState",
                  { broadcastJids: Array.from(a) },
                ),
              (i.length > 0 || l.length > 0) &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "syncBroadcastCampaignsToCollection",
                  { upsertedCampaignIds: i, removedCampaignIds: l },
                ),
              s
            );
          }),
          (r.getCampaignMutation = function (t, n, r) {
            var e = { businessBroadcastCampaignAction: n };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              action: this.getAction(),
              indexArgs: [t],
              collection: this.collectionName,
              value: e,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: r,
            });
          }),
          (r.getDeleteCampaignMutation = function (t, n) {
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
