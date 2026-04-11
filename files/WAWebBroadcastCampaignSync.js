__d(
  "WAWebBroadcastCampaignSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebBizGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
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
            return o("WASyncdConst").Actions.BusinessBroadcastCampaign;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this;
                if (
                  !o(
                    "WAWebBizGatingUtils",
                  ).isBizBroadcastSendWebEnabledNoExposure()
                )
                  return t.map(function () {
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  });
                var a = 0,
                  i = new Set(),
                  l = yield (s || (s = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              var t = e.indexParts,
                                n = t[1];
                              if (!n) return r.malformedActionIndex();
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
                                      a++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  yield o(
                                    "WAWebBizBroadcastCampaignStorageUtils",
                                  ).upsertCampaignStorage(n, c, u);
                                  var d = c.broadcastJid;
                                  return (
                                    d != null && i.add(d),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                if (
                                  ((typeof l == "object" && l !== null) ||
                                    typeof l == "function") &&
                                  l.operation === "remove"
                                ) {
                                  var m = yield o(
                                    "WAWebSchemaBusinessBroadcastCampaign",
                                  )
                                    .getBusinessBroadcastCampaignTable()
                                    .get(n);
                                  return (
                                    (m == null ? void 0 : m.broadcastJid) !=
                                      null && i.add(m.broadcastJid),
                                    yield o(
                                      "WAWebBizBroadcastCampaignStorageUtils",
                                    ).removeCampaignStorage(n),
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
                                    l,
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
                  l
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
