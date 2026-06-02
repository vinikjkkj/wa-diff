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
              i = await Promise.all(
                n.map(async function (e) {
                  try {
                    var n = e.indexParts,
                      i = n[1];
                    if (!i) return t.malformedActionIndex();
                    e: {
                      var l = e;
                      if (
                        ((typeof l == "object" && l !== null) ||
                          typeof l == "function") &&
                        l.operation === "set" &&
                        "value" in l &&
                        "timestamp" in l
                      ) {
                        var s = l.value,
                          u = l.timestamp,
                          c = s.businessBroadcastCampaignAction;
                        if (
                          !c ||
                          c.broadcastJid == null ||
                          c.deviceId == null ||
                          c.status == null
                        )
                          return (
                            r++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        await o(
                          "WAWebBizBroadcastCampaignStorageUtils",
                        ).upsertCampaignStorage(i, c, u);
                        var d = c.broadcastJid;
                        return (
                          d != null && a.add(d),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      if (
                        ((typeof l == "object" && l !== null) ||
                          typeof l == "function") &&
                        l.operation === "remove"
                      ) {
                        var m = await o("WAWebSchemaBusinessBroadcastCampaign")
                          .getBusinessBroadcastCampaignTable()
                          .get(i);
                        return (
                          (m == null ? void 0 : m.broadcastJid) != null &&
                            a.add(m.broadcastJid),
                          await o(
                            "WAWebBizBroadcastCampaignStorageUtils",
                          ).removeCampaignStorage(i),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          l,
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
              i
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
