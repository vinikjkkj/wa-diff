__d(
  "WAWebBroadcastCampaignSync",
  [
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebRemoveCampaignStorage",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUpsertCampaignStorage",
    "WAWebUserPrefsHistorySync",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
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
            return o("WAWebSyncdConst").Actions.BusinessBroadcastCampaign;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastSendWebEnabledNoExposure(),
              a = o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastProEnabled(),
              i = o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).getPrimarySupportsBusinessBroadcastPro(),
              l = a && i,
              s =
                l &&
                o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete(),
              u = 0,
              m = 0,
              p = new Set(),
              _ = [],
              f = [],
              g = [],
              h = await Promise.all(
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
                        "value" in i &&
                        "timestamp" in i
                      ) {
                        var l = i.value,
                          h = i.timestamp,
                          y = l.businessBroadcastCampaignAction,
                          C = c(y, t.collectionName);
                        if (C != null) {
                          (m++, (u += C.malformedMutationCount));
                          var b = C.affectedBroadcastJid,
                            v = C.campaignTimestamp,
                            S = C.messageId;
                          return (
                            s &&
                              b != null &&
                              v != null &&
                              S != null &&
                              (d(p, b),
                              _.push({
                                broadcastJid: b,
                                campaignId: a,
                                campaignTimestamp: v,
                                messageId: S,
                              })),
                            C.result
                          );
                        }
                        if (!r)
                          return {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Unsupported,
                          };
                        if (
                          !y ||
                          y.broadcastJid == null ||
                          y.deviceId == null ||
                          y.status == null
                        )
                          return (
                            u++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        await o(
                          "WAWebUpsertCampaignStorage",
                        ).upsertCampaignStorage(a, y, h);
                        var R = y.broadcastJid;
                        return (
                          R != null && p.add(R),
                          f.push(a),
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
                        if (!r)
                          return {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Unsupported,
                          };
                        var L = await o("WAWebSchemaBusinessBroadcastCampaign")
                          .getBusinessBroadcastCampaignTable()
                          .get(a);
                        return (
                          (L == null ? void 0 : L.broadcastJid) != null &&
                            p.add(L.broadcastJid),
                          await o(
                            "WAWebRemoveCampaignStorage",
                          ).removeCampaignStorage(a),
                          g.push(a),
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
              u > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "broadcast campaign sync: ",
                      " malformed mutations",
                    ])),
                  u,
                ),
              p.size > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "refreshBroadcastCampaignState",
                  { broadcastJids: Array.from(p) },
                ),
              _.length > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "createBizBroadcastProLocalCampaignCards",
                  { campaigns: _ },
                ),
              (f.length > 0 || g.length > 0) &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "syncBroadcastCampaignsToCollection",
                  { upsertedCampaignIds: f, removedCampaignIds: g },
                ),
              h
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
      })(o("WAWebSyncdAction").AccountSyncdActionBase);
    function c(e, t) {
      var n = e == null ? void 0 : e.customAudienceFbid,
        r = e == null ? void 0 : e.msgId,
        a = n != null && n.length > 0;
      if (!a && (e == null ? void 0 : e.bbProStatus) == null) return null;
      if (
        !a ||
        (e == null ? void 0 : e.broadcastJid) == null ||
        e.broadcastJid.length === 0 ||
        (e == null ? void 0 : e.deviceId) == null ||
        r == null ||
        r.length === 0
      )
        return {
          malformedMutationCount: 1,
          result: o("WAWebSyncdIndexUtils").malformedActionValue(t),
        };
      var i = o("WALongInt").maybeNumber(
        e == null ? void 0 : e.createTimestamp,
      );
      return i == null || !Number.isFinite(i) || i <= 0
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Business broadcast Pro mutation has an invalid createTimestamp",
                ])),
            )
            .sendLogs("bb-pro-campaign-sync-timestamp-invalid"),
          {
            malformedMutationCount: 1,
            result: o("WAWebSyncdIndexUtils").malformedActionValue(t),
          })
        : {
            affectedBroadcastJid: e.broadcastJid,
            campaignTimestamp: i,
            malformedMutationCount: 0,
            messageId: r,
            result: {
              actionState: o("WAWebSyncdConst").SyncActionState.Unsupported,
            },
          };
    }
    function d(e, t) {
      t != null && e.add(t);
    }
    var m = new u();
    l.default = m;
  },
  98,
);
