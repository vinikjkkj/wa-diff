__d(
  "WAWebDeviceCapabilitiesSyncBase",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebNewsletterChatsMigrationForwarder",
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
              r = 0,
              a = [],
              i = e.map(function (e) {
                if (e.operation === "set") {
                  var n = t.getCapabilitiesFromValue(e.value);
                  if (n != null) {
                    var i = e.indexParts[m],
                      l = i != null ? p(i) : null;
                    if (l === d) {
                      var s,
                        u = o(
                          "WAWebUserPrefsDeviceCapabilities",
                        ).mapProtobufToAllDeviceCapabilities(n);
                      (o(
                        "WAWebUserPrefsDeviceCapabilities",
                      ).mergeDeviceCapabilitiesToStorage(u, "primary"),
                        a.push(
                          o(
                            "WAWebNewsletterChatsMigrationForwarder",
                          ).forwardPrimaryNewsletterChatsMigration(n),
                        ),
                        r++);
                      var c =
                        (s = u.aiThread) == null ? void 0 : s.supportLevel;
                      if (
                        ((c ===
                          o("WAWebProtobufsDeviceCapabilities.pb")
                            .DeviceCapabilities$AiThread$SupportLevel.INFRA ||
                          c ===
                            o("WAWebProtobufsDeviceCapabilities.pb")
                              .DeviceCapabilities$AiThread$SupportLevel.FULL) &&
                          o("WAWebBackendApi").frontendFireAndForget(
                            "initializeMetaAiBotAiThreads",
                            {},
                          ),
                        o("WAWebMobilePlatforms").isSMB())
                      ) {
                        var _ = n.businessBroadcast,
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
                          o("WAWebBackendApi").frontendFireAndForget(
                            "refreshBizBroadcastProEligibility",
                            {},
                          ),
                          o(
                            "WAWebBizBroadcastDeviceCapabilityCommon",
                          ).saveBizBroadcastRecipientLimitToStorage(
                            _ == null ? void 0 : _.recipientLimit,
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
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[DeviceCapabilitiesSync] primary caps updated ",
                      "x",
                    ])),
                  r,
                ),
              yield (c || (c = n("Promise"))).all(a),
              i
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
