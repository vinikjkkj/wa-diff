__d(
  "WAWebBroadcastCampaignSync",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
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
            return o("WAWebSyncdConst").Actions.BusinessBroadcastCampaign;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = o(
                    "WAWebBusinessBroadcastsGatingUtils",
                  ).isBizBroadcastSendWebEnabledNoExposure(),
                  i = o(
                    "WAWebBusinessBroadcastsGatingUtils",
                  ).isBizBroadcastProEnabled(),
                  l = o(
                    "WAWebBizBroadcastDeviceCapabilityCommon",
                  ).getPrimarySupportsBusinessBroadcastPro(),
                  s = i && l,
                  c =
                    s &&
                    o(
                      "WAWebUserPrefsHistorySync",
                    ).getInitialHistorySyncComplete(),
                  p = 0,
                  _ = 0,
                  f = new Set(),
                  g = [],
                  h = [],
                  y = [],
                  C = yield (u || (u = n("Promise"))).all(
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
                                  "value" in i &&
                                  "timestamp" in i
                                ) {
                                  var l = i.value,
                                    s = i.timestamp,
                                    u = l.businessBroadcastCampaignAction,
                                    C = d(u, r.collectionName);
                                  if (C != null) {
                                    (_++, (p += C.malformedMutationCount));
                                    var b = C.affectedBroadcastJid,
                                      v = C.campaignTimestamp,
                                      S = C.messageId;
                                    return (
                                      c &&
                                        b != null &&
                                        v != null &&
                                        S != null &&
                                        (m(f, b),
                                        g.push({
                                          broadcastJid: b,
                                          campaignId: n,
                                          campaignTimestamp: v,
                                          messageId: S,
                                        })),
                                      C.result
                                    );
                                  }
                                  if (!a)
                                    return {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Unsupported,
                                    };
                                  if (
                                    !u ||
                                    u.broadcastJid == null ||
                                    u.deviceId == null ||
                                    u.status == null
                                  )
                                    return (
                                      p++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  yield o(
                                    "WAWebBizBroadcastCampaignStorageUtils",
                                  ).upsertCampaignStorage(n, u, s);
                                  var R = u.broadcastJid;
                                  return (
                                    R != null && f.add(R),
                                    h.push(n),
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
                                  if (!a)
                                    return {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Unsupported,
                                    };
                                  var L = yield o(
                                    "WAWebSchemaBusinessBroadcastCampaign",
                                  )
                                    .getBusinessBroadcastCampaignTable()
                                    .get(n);
                                  return (
                                    (L == null ? void 0 : L.broadcastJid) !=
                                      null && f.add(L.broadcastJid),
                                    yield o(
                                      "WAWebBizBroadcastCampaignStorageUtils",
                                    ).removeCampaignStorage(n),
                                    y.push(n),
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
                  p > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "broadcast campaign sync: ",
                          " malformed mutations",
                        ])),
                      p,
                    ),
                  f.size > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "refreshBroadcastCampaignState",
                      { broadcastJids: Array.from(f) },
                    ),
                  g.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "createBizBroadcastProLocalCampaignCards",
                      { campaigns: g },
                    ),
                  (h.length > 0 || y.length > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "syncBroadcastCampaignsToCollection",
                      { upsertedCampaignIds: h, removedCampaignIds: y },
                    ),
                  C
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getCampaignMutation = function (t, n, r) {
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
          (a.getDeleteCampaignMutation = function (t, n) {
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
      })(o("WAWebSyncdAction").AccountSyncdActionBase);
    function d(e, t) {
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
    function m(e, t) {
      t != null && e.add(t);
    }
    var p = new c();
    l.default = p;
  },
  98,
);
