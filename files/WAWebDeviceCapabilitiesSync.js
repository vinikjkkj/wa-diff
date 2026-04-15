__d(
  "WAWebDeviceCapabilitiesSync",
  [
    "Promise",
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
    var p = !1,
      _ = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.DeviceCapabilities;
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
                      o("WASyncdConst").SyncActionState.Success
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
          (a.checkLidTimeout = function () {
            var e = this;
            p ||
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
                    .then(
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          (yield o(
                            "WAWebEventsWaitForOfflineDeliveryEnd",
                          ).waitForOfflineDeliveryEnd(),
                            yield o(
                              "WAWebMessageQueue",
                            ).waitForOnlineMessageQueue(),
                            yield o("WAAsyncSleep").asyncSleep(1e4),
                            o(
                              "WAWebLid1x1MigrationTimeout",
                            ).scheduleLogoutIfNeeded("syncd"));
                        },
                      ),
                    );
              }),
              (p = !0));
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                this.checkLidTimeout();
                var n = 0,
                  r = t.map(function (e) {
                    if (e.operation === "set") {
                      var t, r;
                      ((t = e.value) == null ||
                      (t = t.deviceCapabilities) == null ||
                      (t = t.lidMigration) == null
                        ? void 0
                        : t.chatDbMigrationTimestamp) != null &&
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
                      var a =
                        (r = e.value) == null ? void 0 : r.deviceCapabilities;
                      if (a != null) {
                        var i = e.indexParts[d],
                          l = i != null ? m(i) : null;
                        if (l === c) {
                          var s,
                            u = o(
                              "WAWebUserPrefsDeviceCapabilities",
                            ).mapProtobufToAllDeviceCapabilities(a);
                          (o(
                            "WAWebUserPrefsDeviceCapabilities",
                          ).mergeDeviceCapabilitiesToStorage(u, "primary"),
                            n++);
                          var p =
                            (s = u.aiThread) == null ? void 0 : s.supportLevel;
                          if (
                            ((p ===
                              o("WAWebProtobufsDeviceCapabilities.pb")
                                .DeviceCapabilities$AiThread$SupportLevel
                                .INFRA ||
                              p ===
                                o("WAWebProtobufsDeviceCapabilities.pb")
                                  .DeviceCapabilities$AiThread$SupportLevel
                                  .FULL) &&
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
                            f !== g &&
                              (o(
                                "WAWebBizBroadcastDeviceCapabilityCommon",
                              ).saveBizBroadcastCapabilityToStorage(f),
                              f &&
                                o(
                                  "WAWebWorkerSafeBackendApi",
                                ).workerSafeFireAndForget(
                                  "loadQuickPromotions",
                                  { trigger: "prefetch" },
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
      f = new _();
    l.default = f;
  },
  98,
);
