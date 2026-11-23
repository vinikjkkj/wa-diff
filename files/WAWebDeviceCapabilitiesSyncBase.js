__d(
  "WAWebDeviceCapabilitiesSyncBase",
  [
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
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["bizAiWebOnboarding", "newsletterChatsMigration"],
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
      function n() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.getVersion = function () {
          return 7;
        }),
        (a.getAction = function () {
          throw r("err")(
            "DeviceCapabilitiesSyncBase.getAction must be overridden by a subclass",
          );
        }),
        (a.getJidIndex = function () {
          throw r("err")(
            "DeviceCapabilitiesSyncBase.getJidIndex must be overridden by a subclass",
          );
        }),
        (a.getValueField = function () {
          return "deviceCapabilities";
        }),
        (a.getCapabilitiesFromValue = function (t) {
          return this.getValueField() === "deviceCapabilitiesV2"
            ? t == null
              ? void 0
              : t.deviceCapabilitiesV2
            : t == null
              ? void 0
              : t.deviceCapabilities;
        }),
        (a.capabilitiesHaveChanged = async function (t) {
          var e = this,
            n = await o("WAWebSyncdDb").getSyncActionsRows(
              ["index"],
              [t.index],
            ),
            r = n.reduce(function (t, n) {
              if (
                n.actionState === o("WAWebSyncdConst").SyncActionState.Success
              ) {
                var r = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    n.binarySyncData,
                  ),
                  a = r.value,
                  i = e.getCapabilitiesFromValue(a);
                if (i) return i;
              }
            }, {}),
            a = this.getCapabilitiesFromValue(
              o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                t.binarySyncAction,
              ),
            );
          return {
            hasChanged: JSON.stringify(r) !== JSON.stringify(a),
            currentCapabilities: r,
            newCapabilities: a,
          };
        }),
        (a.applyMutations = async function (t) {
          var e = this,
            n = 0,
            r = [],
            a = t.map(function (t) {
              if (t.operation === "set") {
                var a = e.getCapabilitiesFromValue(t.value);
                if (a != null) {
                  var i = t.indexParts[d],
                    l = i != null ? m(i) : null;
                  if (l === c) {
                    var s,
                      u = o(
                        "WAWebUserPrefsDeviceCapabilities",
                      ).mapProtobufToAllDeviceCapabilities(a);
                    (o(
                      "WAWebUserPrefsDeviceCapabilities",
                    ).mergeDeviceCapabilitiesToStorage(u, "primary"),
                      r.push(
                        o(
                          "WAWebNewsletterChatsMigrationForwarder",
                        ).forwardPrimaryNewsletterChatsMigration(a),
                      ),
                      n++);
                    var p = (s = u.aiThread) == null ? void 0 : s.supportLevel;
                    if (
                      ((p ===
                        o("WAWebProtobufsDeviceCapabilities.pb")
                          .DeviceCapabilities$AiThread$SupportLevel.INFRA ||
                        p ===
                          o("WAWebProtobufsDeviceCapabilities.pb")
                            .DeviceCapabilities$AiThread$SupportLevel.FULL) &&
                        o("WAWebBackendApi").frontendFireAndForget(
                          "initializeMetaAiBotAiThreads",
                          {},
                        ),
                      o("WAWebMobilePlatforms").isSMB())
                    ) {
                      var _ = a.businessBroadcast,
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
            n > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[DeviceCapabilitiesSync] primary caps updated ",
                    "x",
                  ])),
                n,
              ),
            await Promise.all(r),
            a
          );
        }),
        (a.getMutation = function (t, n) {
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
        (a.sendMutation = async function (n) {
          var t = n.bizAiWebOnboarding,
            r = n.newsletterChatsMigration,
            a = babelHelpers.objectWithoutPropertiesLoose(n, e),
            i = this.getMutation(o("WATimeUtils").unixTimeMs(), a),
            l = await this.capabilitiesHaveChanged(i);
          if (!l.hasChanged) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[DeviceCapabilitiesSync] skip sync, no change",
                ])),
            );
            return;
          }
          await o("WAWebSyncdCoreApi").lockForSync([], [i], function () {
            return Promise.resolve();
          });
        }),
        n
      );
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    l.default = p;
  },
  98,
);
