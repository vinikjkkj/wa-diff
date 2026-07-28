__d(
  "WAWebBroadcastCampaignSync",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizBroadcastCampaignStorageUtils",
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
            return o("WAWebSyncdConst").Actions.BusinessBroadcastCampaign;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this;
                if (
                  !o(
                    "WAWebBusinessBroadcastsGatingUtils",
                  ).isBizBroadcastSendWebEnabledNoExposure()
                )
                  return t.map(function () {
                    return {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    };
                  });
                var a = 0,
                  i = new Set(),
                  l = [],
                  u = [],
                  c = yield (s || (s = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1];
                              if (!n) return r.malformedActionIndex();
                              e: {
                                var s = e;
                                if (
                                  ((typeof s == "object" && s !== null) ||
                                    typeof s == "function") &&
                                  s.operation === "set" &&
                                  "value" in s &&
                                  "timestamp" in s
                                ) {
                                  var c = s.value,
                                    d = s.timestamp,
                                    m = c.businessBroadcastCampaignAction;
                                  if (
                                    !m ||
                                    m.broadcastJid == null ||
                                    m.deviceId == null ||
                                    m.status == null
                                  )
                                    return (
                                      a++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  yield o(
                                    "WAWebBizBroadcastCampaignStorageUtils",
                                  ).upsertCampaignStorage(n, m, d);
                                  var p = m.broadcastJid;
                                  return (
                                    p != null && i.add(p),
                                    l.push(n),
                                    {
                                      actionState:
                                        o("WAWebSyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                if (
                                  ((typeof s == "object" && s !== null) ||
                                    typeof s == "function") &&
                                  s.operation === "remove"
                                ) {
                                  var _ = yield o(
                                    "WAWebSchemaBusinessBroadcastCampaign",
                                  )
                                    .getBusinessBroadcastCampaignTable()
                                    .get(n);
                                  return (
                                    (_ == null ? void 0 : _.broadcastJid) !=
                                      null && i.add(_.broadcastJid),
                                    yield o(
                                      "WAWebBizBroadcastCampaignStorageUtils",
                                    ).removeCampaignStorage(n),
                                    u.push(n),
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
                                    s,
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
                          "broadcast campaign sync: ",
                          " malformed mutations",
                        ])),
                      a,
                    ),
                  i.size > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "refreshBroadcastCampaignState",
                      { broadcastJids: Array.from(i) },
                    ),
                  (l.length > 0 || u.length > 0) &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "syncBroadcastCampaignsToCollection",
                      { upsertedCampaignIds: l, removedCampaignIds: u },
                    ),
                  c
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
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
