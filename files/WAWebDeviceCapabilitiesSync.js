__d(
  "WAWebDeviceCapabilitiesSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebUserPrefsDeviceCapabilities",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "0",
      d = 1;
    function m(e) {
      var t = e.indexOf(":"),
        n = e.indexOf("@");
      return t === -1 || n === -1 || t >= n ? null : e.substring(t + 1, n);
    }
    var p = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.DeviceCapabilities;
          }),
          (a.getJidIndex = function () {
            return o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .toString({ legacy: !0 });
          }),
          (a.capabilitiesHaveChanged = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSyncdDb").getSyncActionsRows(
                    ["index"],
                    [e.index],
                  ),
                  n = t.reduce(function (e, t) {
                    if (
                      t.actionState ===
                      o("WAWebSyncdConst").SyncActionState.Success
                    ) {
                      var n = o("decodeProtobuf").decodeProtobuf(
                          o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                          t.binarySyncData,
                        ),
                        r = n.value;
                      if (r != null && r.deviceCapabilities)
                        return r.deviceCapabilities;
                    }
                  }, {}),
                  r = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                    e.binarySyncAction,
                  ),
                  a = r.deviceCapabilities;
                return {
                  hasChanged: JSON.stringify(n) !== JSON.stringify(a),
                  currentCapabilities: n,
                  newCapabilities: a,
                };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = 0,
                  r = t.map(function (e) {
                    if (e.operation === "set") {
                      var t,
                        r =
                          (t = e.value) == null ? void 0 : t.deviceCapabilities;
                      if (r != null) {
                        var a = e.indexParts[d],
                          i = a != null ? m(a) : null;
                        if (i === c) {
                          var l,
                            s = o(
                              "WAWebUserPrefsDeviceCapabilities",
                            ).mapProtobufToAllDeviceCapabilities(r);
                          (o(
                            "WAWebUserPrefsDeviceCapabilities",
                          ).mergeDeviceCapabilitiesToStorage(s, "primary"),
                            n++);
                          var u =
                            (l = s.aiThread) == null ? void 0 : l.supportLevel;
                          if (
                            ((u ===
                              o("WAWebProtobufsDeviceCapabilities.pb")
                                .DeviceCapabilities$AiThread$SupportLevel
                                .INFRA ||
                              u ===
                                o("WAWebProtobufsDeviceCapabilities.pb")
                                  .DeviceCapabilities$AiThread$SupportLevel
                                  .FULL) &&
                              o("WAWebBackendApi").frontendFireAndForget(
                                "initializeMetaAiBotAiThreads",
                                {},
                              ),
                            o("WAWebMobilePlatforms").isSMB())
                          ) {
                            var p = r.businessBroadcast,
                              _ =
                                !!(p != null && p.companionSupportEnabled) &&
                                !!(p != null && p.campaignSyncEnabled),
                              f = o(
                                "WAWebBizBroadcastDeviceCapabilityCommon",
                              ).getPrimarySupportsBusinessBroadcast();
                            (_ !== f &&
                              (o(
                                "WAWebBizBroadcastDeviceCapabilityCommon",
                              ).saveBizBroadcastCapabilityToStorage(_),
                              _ &&
                                o(
                                  "WAWebWorkerSafeBackendApi",
                                ).workerSafeFireAndForget(
                                  "loadQuickPromotions",
                                  { trigger: "prefetch" },
                                )),
                              o(
                                "WAWebBizBroadcastDeviceCapabilityCommon",
                              ).saveBizBroadcastRecipientLimitToStorage(
                                p == null ? void 0 : p.recipientLimit,
                              ));
                          }
                        }
                      }
                    }
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    };
                  });
                return (
                  n > 0 &&
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[DeviceCapabilitiesSync] primary caps updated ",
                          "x",
                        ])),
                      n,
                    ),
                  r
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getMutation = function (t, n) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [this.getJidIndex()],
              value: { deviceCapabilities: babelHelpers.extends({}, n) },
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: t,
              action: this.getAction(),
            });
          }),
          (a.sendMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.getMutation(o("WATimeUtils").unixTimeMs(), e),
                  r = yield this.capabilitiesHaveChanged(t);
                if (!r.hasChanged) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[DeviceCapabilitiesSync] skip sync, no change",
                      ])),
                  );
                  return;
                }
                yield o("WAWebSyncdCoreApi").lockForSync([], [t], function () {
                  return (u || (u = n("Promise"))).resolve();
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
