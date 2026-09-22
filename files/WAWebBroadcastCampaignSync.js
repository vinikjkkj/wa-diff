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
                  i =
                    o(
                      "WAWebBusinessBroadcastsGatingUtils",
                    ).isBizBroadcastProEnabled() &&
                    o(
                      "WAWebBizBroadcastDeviceCapabilityCommon",
                    ).getPrimarySupportsBusinessBroadcastPro(),
                  l = 0,
                  s = new Set(),
                  c = [],
                  p = [],
                  _ = [],
                  f = yield (u || (u = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1];
                              if (!n) return r.malformedActionIndex();
                              e: {
                                var u = e;
                                if (
                                  ((typeof u == "object" && u !== null) ||
                                    typeof u == "function") &&
                                  u.operation === "set" &&
                                  "value" in u &&
                                  "timestamp" in u
                                ) {
                                  var f = u.value,
                                    g = u.timestamp,
                                    h = f.businessBroadcastCampaignAction,
                                    y = d(h, r.collectionName);
                                  if (y != null) {
                                    l += y.malformedMutationCount;
                                    var C = y.affectedBroadcastJid,
                                      b = y.campaignTimestamp;
                                    return (
                                      i &&
                                        C != null &&
                                        b != null &&
                                        (m(s, C),
                                        c.push({
                                          broadcastJid: C,
                                          campaignId: n,
                                          campaignTimestamp: b,
                                          messageId: y.messageId,
                                        })),
                                      y.result
                                    );
                                  }
                                  if (!a)
                                    return {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Unsupported,
                                    };
                                  if (
                                    !h ||
                                    h.broadcastJid == null ||
                                    h.deviceId == null ||
                                    h.status == null
                                  )
                                    return (
                                      l++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  yield o(
                                    "WAWebBizBroadcastCampaignStorageUtils",
                                  ).upsertCampaignStorage(n, h, g);
                                  var v = h.broadcastJid;
                                  return (
                                    v != null && s.add(v),
                                    p.push(n),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                if (
                                  ((typeof u == "object" && u !== null) ||
                                    typeof u == "function") &&
                                  u.operation === "remove"
                                ) {
                                  if (!a)
                                    return {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Unsupported,
                                    };
                                  var S = yield o(
                                    "WAWebSchemaBusinessBroadcastCampaign",
                                  )
                                    .getBusinessBroadcastCampaignTable()
                                    .get(n);
                                  return (
                                    (S == null ? void 0 : S.broadcastJid) !=
                                      null && s.add(S.broadcastJid),
                                    yield o(
                                      "WAWebBizBroadcastCampaignStorageUtils",
                                    ).removeCampaignStorage(n),
                                    _.push(n),
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
                                    u,
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
                  l > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "broadcast campaign sync: ",
                          " malformed mutations",
                        ])),
                      l,
                    ),
                  s.size > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "refreshBroadcastCampaignState",
                      { broadcastJids: Array.from(s) },
                    ),
                  c.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "createBizBroadcastProLocalCampaignCards",
                      { campaigns: c },
                    ),
                  (p.length > 0 || _.length > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "syncBroadcastCampaignsToCollection",
                      { upsertedCampaignIds: p, removedCampaignIds: _ },
                    ),
                  f
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
        r = n != null && n.length > 0;
      if (!r && (e == null ? void 0 : e.bbProStatus) == null) return null;
      if (
        !r ||
        (e == null ? void 0 : e.broadcastJid) == null ||
        e.broadcastJid.length === 0 ||
        (e == null ? void 0 : e.deviceId) == null
      )
        return {
          malformedMutationCount: 1,
          result: o("WAWebSyncdIndexUtils").malformedActionValue(t),
        };
      var a = o("WALongInt").maybeNumber(
        e == null ? void 0 : e.createTimestamp,
      );
      return a == null || !Number.isFinite(a) || a <= 0
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
            campaignTimestamp: a,
            malformedMutationCount: 0,
            messageId: e.msgId,
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
