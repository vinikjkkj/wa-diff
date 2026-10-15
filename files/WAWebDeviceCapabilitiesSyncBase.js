__d(
  "WAWebDeviceCapabilitiesSyncBase",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebNewsletterChatsMigrationCapability",
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
    var e = ["newsletterChatsMigration"],
      s,
      u,
      c,
      d = "0",
      m = 1;
    function p(e) {
      var t = e.indexOf(":"),
        n = e.indexOf("@");
      return t === -1 || n === -1 || t >= n ? null : e.substring(t + 1, n);
    }
    var _ = (function (t) {
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
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this,
              n = 0,
              r = e.map(function (e) {
                if (e.operation === "set") {
                  var r = t.getCapabilitiesFromValue(e.value);
                  if (r != null) {
                    var a = e.indexParts[m],
                      i = a != null ? p(a) : null;
                    if (i === d) {
                      var l,
                        s = o(
                          "WAWebUserPrefsDeviceCapabilities",
                        ).mapProtobufToAllDeviceCapabilities(r);
                      (o(
                        "WAWebUserPrefsDeviceCapabilities",
                      ).mergeDeviceCapabilitiesToStorage(s, "primary"),
                        o("WAWebBackendApi").frontendFireAndForget(
                          "updatePrimaryNewsletterChatsMigration",
                          {
                            migration: o(
                              "WAWebNewsletterChatsMigrationCapability",
                            ).getNewsletterChatsMigrationFromCapabilities(r),
                          },
                        ),
                        n++);
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
                        var c = r.businessBroadcast,
                          _ =
                            !!(c != null && c.companionSupportEnabled) &&
                            !!(c != null && c.campaignSyncEnabled),
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
                            ).workerSafeFireAndForget("loadQuickPromotions", {
                              trigger: "prefetch",
                            })),
                          o(
                            "WAWebBizBroadcastDeviceCapabilityCommon",
                          ).saveBizBroadcastProCapabilityToStorage(
                            c == null ? void 0 : c.proCompanionSupportEnabled,
                          ),
                          o("WAWebBackendApi").frontendFireAndForget(
                            "refreshBizBroadcastProEligibility",
                            {},
                          ),
                          o(
                            "WAWebBizBroadcastDeviceCapabilityCommon",
                          ).saveBizBroadcastRecipientLimitToStorage(
                            c == null ? void 0 : c.recipientLimit,
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
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[DeviceCapabilitiesSync] primary caps updated ",
                      "x",
                    ])),
                  n,
                ),
              r
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
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
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r = t.newsletterChatsMigration,
              a = babelHelpers.objectWithoutPropertiesLoose(t, e),
              i = this.getMutation(o("WATimeUtils").unixTimeMs(), a),
              l = yield this.capabilitiesHaveChanged(i);
            if (!l.hasChanged) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[DeviceCapabilitiesSync] skip sync, no change",
                  ])),
              );
              return;
            }
            yield o("WAWebSyncdCoreApi").lockForSync([], [i], function () {
              return (c || (c = n("Promise"))).resolve();
            });
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        a
      );
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    l.default = _;
  },
  98,
);
