__d(
  "WAWebDeviceCapabilitiesSync",
  [
    "WAAsyncSleep",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid11MigrationLifecycleWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLid1x1MigrationTimeout",
    "WAWebMessageQueue",
    "WAWebMobilePlatforms",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebUserPrefsDeviceCapabilities",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMigrationStageEnum",
    "WAWebWorkerSafeBackendApi",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "0",
      c = 1;
    function d(e) {
      var t = e.indexOf(":"),
        n = e.indexOf("@");
      return t === -1 || n === -1 || t >= n ? null : e.substring(t + 1, n);
    }
    var m = !1,
      p = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.DeviceCapabilities;
          }),
          (r.getJidIndex = function () {
            return o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .toString({ legacy: !0 });
          }),
          (r.capabilitiesHaveChanged = async function (t) {
            var e = await o("WAWebSyncdDb").getSyncActionsRows(
                ["index"],
                [t.index],
              ),
              n = e.reduce(function (e, t) {
                if (
                  t.actionState === o("WASyncdConst").SyncActionState.Success
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
                t.binarySyncAction,
              ),
              a = r.deviceCapabilities;
            return {
              hasChanged: JSON.stringify(n) !== JSON.stringify(a),
              currentCapabilities: n,
              newCapabilities: a,
            };
          }),
          (r.checkLidTimeout = function () {
            var e = this;
            m ||
              (o(
                "WAWebBackendEventBus",
              ).BackendEventBus.onAppStateSyncCompleted(function (t) {
                t.some(function (t) {
                  return t.name === e.collectionName;
                }) &&
                  o(
                    "WAWebEventsWaitForOfflineDeliveryEnd",
                  ).isOfflineDeliveryEnd() &&
                  o("WAWebMessageQueue")
                    .waitForOnlineMessageQueue()
                    .then(async function () {
                      (await o(
                        "WAWebEventsWaitForOfflineDeliveryEnd",
                      ).waitForOfflineDeliveryEnd(),
                        await o(
                          "WAWebMessageQueue",
                        ).waitForOnlineMessageQueue(),
                        await o("WAAsyncSleep").asyncSleep(1e4),
                        o("WAWebLid1x1MigrationTimeout").scheduleLogoutIfNeeded(
                          "syncd",
                        ));
                    });
              }),
              (m = !0));
          }),
          (r.applyMutations = async function (n) {
            this.checkLidTimeout();
            var t = 0,
              r = n.map(function (e) {
                if (e.operation === "set") {
                  var n, r;
                  ((n = e.value) == null ||
                  (n = n.deviceCapabilities) == null ||
                  (n = n.lidMigration) == null
                    ? void 0
                    : n.chatDbMigrationTimestamp) != null &&
                    !o(
                      "WAWebLid1X1MigrationGating",
                    ).Lid1X1MigrationUtils.isLidMigrated() &&
                    new (o(
                      "WAWebLid11MigrationLifecycleWamEvent",
                    ).Lid11MigrationLifecycleWamEvent)({
                      migrationStage: o("WAWebWamEnumMigrationStageEnum")
                        .MIGRATION_STAGE_ENUM
                        .COMPANION_RECEIVED_DEVICE_CAPABILITY,
                      isLocally1x1MigratedFromDb: o(
                        "WAWebLid1X1MigrationGating",
                      ).Lid1X1MigrationUtils.isLidMigrated(),
                    }).commit();
                  var a = (r = e.value) == null ? void 0 : r.deviceCapabilities;
                  if (a != null) {
                    var i = e.indexParts[c],
                      l = i != null ? d(i) : null;
                    if (l === u) {
                      var s,
                        m = o(
                          "WAWebUserPrefsDeviceCapabilities",
                        ).mapProtobufToAllDeviceCapabilities(a);
                      (o(
                        "WAWebUserPrefsDeviceCapabilities",
                      ).mergeDeviceCapabilitiesToStorage(m, "primary"),
                        t++);
                      var p =
                        (s = m.aiThread) == null ? void 0 : s.supportLevel;
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
                          ).saveBizBroadcastRecipientLimitToStorage(
                            _ == null ? void 0 : _.recipientLimit,
                          ));
                      }
                    }
                  }
                }
                return {
                  actionState: o("WASyncdConst").SyncActionState.Success,
                };
              });
            return (
              t > 0 &&
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[DeviceCapabilitiesSync] primary caps updated ",
                      "x",
                    ])),
                  t,
                ),
              r
            );
          }),
          (r.getMutation = function (t, n) {
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
          (r.sendMutation = async function (t) {
            var e = this.getMutation(o("WATimeUtils").unixTimeMs(), t),
              n = await this.capabilitiesHaveChanged(e);
            if (!n.hasChanged) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[DeviceCapabilitiesSync] skip sync, no change",
                  ])),
              );
              return;
            }
            await o("WAWebSyncdCoreApi").lockForSync([], [e], function () {
              return Promise.resolve();
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
