__d(
  "WAWebDeviceCapabilitiesSyncBase",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
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
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
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
      function a() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.getVersion = function () {
          return 7;
        }),
        (i.getAction = function () {
          throw r("err")(
            "DeviceCapabilitiesSyncBase.getAction must be overridden by a subclass",
          );
        }),
        (i.getJidIndex = function () {
          throw r("err")(
            "DeviceCapabilitiesSyncBase.getJidIndex must be overridden by a subclass",
          );
        }),
        (i.getValueField = function () {
          return "deviceCapabilities";
        }),
        (i.getCapabilitiesFromValue = function (t) {
          return this.getValueField() === "deviceCapabilitiesV2"
            ? t == null
              ? void 0
              : t.deviceCapabilitiesV2
            : t == null
              ? void 0
              : t.deviceCapabilities;
        }),
        (i.capabilitiesHaveChanged = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = yield o("WAWebSyncdDb").getSyncActionsRows(
                ["index"],
                [e.index],
              ),
              r = n.reduce(function (e, n) {
                if (
                  n.actionState === o("WAWebSyncdConst").SyncActionState.Success
                ) {
                  var r = o("decodeProtobuf").decodeProtobuf(
                      o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                      n.binarySyncData,
                    ),
                    a = r.value,
                    i = t.getCapabilitiesFromValue(a);
                  if (i) return i;
                }
              }, {}),
              a = this.getCapabilitiesFromValue(
                o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  e.binarySyncAction,
                ),
              );
            return {
              hasChanged: JSON.stringify(r) !== JSON.stringify(a),
              currentCapabilities: r,
              newCapabilities: a,
            };
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.applyMutations = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = this,
              r = 0,
              a = t.map(function (e) {
                if (e.operation === "set") {
                  var t = n.getCapabilitiesFromValue(e.value);
                  if (t != null) {
                    var a = e.indexParts[d],
                      i = a != null ? m(a) : null;
                    if (i === c) {
                      var l,
                        s = o(
                          "WAWebUserPrefsDeviceCapabilities",
                        ).mapProtobufToAllDeviceCapabilities(t);
                      (o(
                        "WAWebUserPrefsDeviceCapabilities",
                      ).mergeDeviceCapabilitiesToStorage(s, "primary"),
                        r++);
                      var u =
                        (l = s.aiThread) == null ? void 0 : l.supportLevel;
                      if (
                        ((u ===
                          o("WAWebProtobufsDeviceCapabilities.pb")
                            .DeviceCapabilities$AiThread$SupportLevel.INFRA ||
                          u ===
                            o("WAWebProtobufsDeviceCapabilities.pb")
                              .DeviceCapabilities$AiThread$SupportLevel.FULL) &&
                          o("WAWebBackendApi").frontendFireAndForget(
                            "initializeMetaAiBotAiThreads",
                            {},
                          ),
                        o("WAWebMobilePlatforms").isSMB())
                      ) {
                        var p,
                          _ = t.businessBroadcast,
                          f =
                            !!(_ != null && _.companionSupportEnabled) &&
                            !!(_ != null && _.campaignSyncEnabled),
                          g = o(
                            "WAWebBizBroadcastDeviceCapabilityCommon",
                          ).getPrimarySupportsBusinessBroadcast();
                        (f !== g &&
                          (o(
                            "WAWebBizBroadcastDeviceCapabilityCommon",
                          ).saveBizBroadcastCapabilityToStorage(f),
                          f &&
                            o(
                              "WAWebWorkerSafeBackendApi",
                            ).workerSafeFireAndForget("loadQuickPromotions", {
                              trigger: "prefetch",
                            })),
                          o(
                            "WAWebBizBroadcastDeviceCapabilityCommon",
                          ).saveBizBroadcastProCapabilityToStorage(
                            _ == null ? void 0 : _.proCompanionSupportEnabled,
                          ),
                          o(
                            "WAWebBizBroadcastDeviceCapabilityCommon",
                          ).saveBizBroadcastRecipientLimitToStorage(
                            _ == null ? void 0 : _.recipientLimit,
                          ),
                          o(
                            "WAWebBizAiSettingsSyncDeviceCapabilityCommon",
                          ).saveBizAiSettingsSyncCapabilityToStorage(
                            !!(
                              (p = t.bizAiSettingsSync) != null &&
                              p.handoffRemovalTimingEnabled
                            ),
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
              r > 0 &&
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[DeviceCapabilitiesSync] primary caps updated ",
                      "x",
                    ])),
                  r,
                ),
              a
            );
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (i.getMutation = function (t, n) {
          return o("WAWebSyncdActionUtils").buildPendingMutation({
            collection: this.collectionName,
            indexArgs: [this.getJidIndex()],
            value:
              this.getValueField() === "deviceCapabilitiesV2"
                ? { deviceCapabilitiesV2: babelHelpers.extends({}, n) }
                : { deviceCapabilities: babelHelpers.extends({}, n) },
            version: this.getVersion(),
            operation: o("WAWebProtobufsServerSync.pb")
              .SyncdMutation$SyncdOperation.SET,
            timestamp: t,
            action: this.getAction(),
          });
        }),
        (i.sendMutation = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        a
      );
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    l.default = p;
  },
  98,
);
