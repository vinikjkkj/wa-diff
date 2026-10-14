__d(
  "WAWebStartBackend",
  [
    "JSResourceForInteraction",
    "Promise",
    "WABase64",
    "WAComms",
    "WAGzip",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABPropsCache",
    "WAWebABPropsWamGlobals",
    "WAWebAdvDeviceInfoCheckJob",
    "WAWebAfterReadSendingRollbackListener",
    "WAWebApiContact",
    "WAWebAuthAgentFeatureControlLifecycle",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendWorkerClient",
    "WAWebBackendWorkerInitState",
    "WAWebBackgroundSyncReporter",
    "WAWebBootstrapBizBroadcastCampaigns",
    "WAWebBootstrapPremiumMessages",
    "WAWebBuildConstants",
    "WAWebCallsOnlyGating",
    "WAWebCartDbLidMigration",
    "WAWebClientPayload",
    "WAWebCommonCTWADataSharing",
    "WAWebCommsConfig",
    "WAWebCommsGating",
    "WAWebCommsHandleStanza",
    "WAWebCommsWorkerProxy",
    "WAWebCrashlog",
    "WAWebCryptoEncKeyHelper",
    "WAWebDBAfterReadSendingRollbackMigration",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBFavoriteDatabaseMigrationToLid",
    "WAWebDBLabelAssociationDatabaseMigrationToLid",
    "WAWebDBPnhThreadMigrationToGeneralLid",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebEventsWaitForMain",
    "WAWebFeatureDetectionSwSupport",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebFtsClient",
    "WAWebGetMessageCache",
    "WAWebGetReachoutTimelockJob",
    "WAWebHandleSingleMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebIdentityChangeApi",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebInboxFiltersGatingUtils",
    "WAWebInitBotGatingHelpers",
    "WAWebInitChatThreadLogging",
    "WAWebInitFavoritesFromStorage",
    "WAWebInitFromStorage",
    "WAWebInitWaitForEvents",
    "WAWebInitializeBots",
    "WAWebL10NCountryCodes",
    "WAWebL10NHelpers",
    "WAWebLazyPersistedQueue",
    "WAWebLid1x1MigrationManager",
    "WAWebLocalStorage",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "WAWebMediaHosts",
    "WAWebMessageInsertDebugPlaceholder",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCache",
    "WAWebMetaAiBotSessionCleanupJob",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorage",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterRestoreMetadataWithLoadingStage",
    "WAWebOffdStorage",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeMainThread",
    "WAWebOfflineResumeMsgProcessReporter",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeUtils",
    "WAWebOrgGatingUtils",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPrimaryFeatures",
    "WAWebPrimaryVersion",
    "WAWebPushNotificationsGatingUtils",
    "WAWebRegisterPassiveTasks",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSignalSessionCleanupJob",
    "WAWebSignalStoreApi",
    "WAWebSocketModel",
    "WAWebStartBackendLoginListeners",
    "WAWebStartBackendWorker",
    "WAWebStoreSpecialAbProps",
    "WAWebSubscriptions",
    "WAWebSyncBootstrap",
    "WAWebSyncContactsJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdOrphan",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebTasksDefinitions",
    "WAWebTos",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocales",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsWorkerCompatibleMainThread",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWamGlobals",
    "WAWebWamOfflineResumeReporter",
    "WAWebWamProcessWorkerData",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10195",
    "cr:10196",
    "cr:17219",
    "cr:37961",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I = !1;
    function T() {
      (o("WAWebBackendEventBus").BackendEventBus.onStorageInitializationError(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (!o("WAWebUserPrefsMultiDevice").isRegistered() &&
            o("WAWebLogoutReason").getPrevLogoutReasonCode() ===
              o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE
                .CLIENT_FATAL) ||
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "storage initialization error, logging out",
                ])),
            ),
            yield o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(
              o("WAWebLogoutReasonConstants").LogoutReason
                .WebFailStorageInitialization,
            ),
            o("WAWebStartBackendLoginListeners").handleStorageInitError());
        }),
      ),
        o("WAWebBackendEventBus").BackendEventBus.onOpenSocketStream(
          function () {
            (o("WAWebUserPrefsGeneral").incrementLoginCounter(),
              o("WAWebClientPayload").incrementSuccessfulLoginCounter(),
              o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.resetEvent(),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logSocketConnectT());
          },
        ),
        o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[StartBackend]: start initial setup",
                  ])),
              ),
                yield W(),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[StartBackend]: complete initial setup",
                    ])),
                ));
            } catch (e) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[StartBackend] initial setup failed:",
                  ])),
              );
            }
          }),
        ),
        o(
          "WAWebMetaAiBotSessionCleanupJob",
        ).registerMetaAiBotSessionCleanupOnResume(),
        (I = !0));
    }
    function D() {
      o("WAWebCommonCTWADataSharing").fetchDataSharingSettingAndUpdateModel();
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebPageLoadLogging").startPageLoadQplMeasure("startBackend");
          var e = yield P();
          return (
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startBackend"),
            e
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o(
            "WAWebUserPrefsWorkerCompatibleMainThread",
          ).initializeUserPrefsWorkerCompatibleMainThread(),
            r("gkx")("27242") ||
              o("WAWebStartBackendWorker").startBackendWorker(),
            I || T());
          var e = yield o(
            "WAWebSignalStoreApi",
          ).waSignalStore.getRegistrationInfo();
          if (!e) {
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "startBackendRegistered: chatd user not registered",
                ])),
            );
            return;
          }
          if (
            (o("WAWebBackendWorkerInitState").startWorkerInitDataTimeout(),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[startBackend]: connected as ",
                  "",
                ])),
              o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            ),
            r("WAWebEnvironment").isWindows)
          ) {
            var t =
              r("WAWebLocalStorage") == null
                ? void 0
                : r("WAWebLocalStorage").getItem(
                    o("WAWebUserPrefsKeys").KEYS
                      .WINDOWS_PENDING_CLIENT_KEY_SETUP,
                  );
            if (t != null) {
              var a,
                i,
                l = o("WAWebUserPrefsMultiDevice").getNoiseInfo(),
                s =
                  l == null || (a = l.staticKeyPair) == null
                    ? void 0
                    : a.privKey,
                u = s != null ? o("WABase64").encodeB64(s) : "";
              (yield n("cr:17219") == null ||
              (i = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator").WAWebStartBackend,
              )) == null ||
              (i = i.getClientKeyBridge()) == null
                ? void 0
                : i.setClientKey(u),
                yield o("WAWebFtsClient").ftsClient.initExternalStorage(),
                r("WAWebLocalStorage") == null ||
                  r("WAWebLocalStorage").removeItem(
                    o("WAWebUserPrefsKeys").KEYS
                      .WINDOWS_PENDING_CLIENT_KEY_SETUP,
                  ));
            }
          }
          try {
            (yield o("WAWebApiContact").warmUpAllLidPnMappings(),
              yield o("WAPromiseTimeout").promiseTimeout(
                o("WAWebModelStorage").initialize(),
                20 * 1e3,
              ),
              yield o("WAPromiseTimeout").promiseTimeout(
                o("WAWebOffdStorage").initialize(),
                20 * 1e3,
              ),
              o(
                "WAWebCrashlog",
              ).registerCrashlogUploadIsUserInExternalBetaFunction(
                o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb,
              ));
          } catch (e) {
            o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerStorageInitializationError(e);
          }
          (o("WAWebInitWaitForEvents").initOfflineResumeWaitForEvents(),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.setLastPushCompleteTimestamp(),
            U(),
            o("WAWebPrimaryFeatures").loadPrimaryFeatures(),
            o("WAWebPrimaryVersion")
              .maybeBackfillStoredPrimaryCurrentVersion()
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "primary version: failed to backfill the stored primary version",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("primary-version-backfill-failed");
              }),
            o("WAWebMediaHosts").mediaHosts.maybeLoadMediaConnFromStorage());
          var c = o(
            "WAWebUserPrefsHistorySync",
          ).getInitialHistorySyncComplete();
          if (
            (!c &&
              !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() &&
              (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "initial chats not synced, will delay processing non-peer stanzas",
                  ])),
              ),
              o(
                "WAWebWaitForInitialChatsSynced",
              ).initWaitForInitialChatsSynced()),
            yield H(),
            F(),
            o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes(),
            !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() &&
              o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() &&
              o("WAWebBackendApi").frontendFireAndForget(
                "bootstrapOrgDirectory",
                {},
              ),
            o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled() &&
              (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER,
                o("WAWebUserPrefsLocales").getUserLangPref() || "en",
              )),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").KEYS.LANG_FROM_PHONE,
              o("WAWebUserPrefsLocales").getPhoneLangPref() || "en",
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "restoreTimeSpentSession",
              {},
            ),
            o("WAWebMobilePlatforms").isSMB() &&
              o("WAWebBootstrapBizBroadcastCampaigns")
                .bootstrapBizBroadcastCampaigns()
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[bb:bootstrap] failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("bb-bootstrap-failed");
                }),
            o("WAWebMobilePlatforms").isSMB() &&
              o(
                "WAWebAuthAgentFeatureControlLifecycle",
              ).startAuthAgentFeatureControlLifecycle(),
            yield o("WAWebInitChatThreadLogging").initChatThreadLogging(),
            yield o("WAWebPersistedJobManager").startWebPersistedJobManager(),
            o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
              o("WAWebPersistedJobManager").getJobManager(),
            ),
            o("WAWebOfflineResumeMainThread").setupMainThreadResume(
              o("WAWebOfflineHandler").OfflineMessageHandler,
            ),
            o("WAWebBuildConstants").WINDOWS_OFFLINE)
          ) {
            var C,
              b = yield n("cr:17219") == null ||
              (C = n("cr:17219").getWindowsBridge(
                r("WAWebWindowsHybridBridgeInitiator").WAWebStartBackend,
              )) == null ||
              (C = C.serverEncKeySaltBridge) == null
                ? void 0
                : C.getServerEncKeySalt();
            if (b == null)
              o("WALogger").ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[_startBackend] encodedServerEncKeySalt is not available",
                  ])),
              );
            else {
              var v = new TextDecoder(),
                S = o("WABase64").decodeB64(b),
                R = v.decode(S);
              (yield o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(R),
                yield o(
                  "WAWebCryptoEncKeyHelper",
                ).generateFinalDbEncryptionAndFtsKeyForInvoker(R));
            }
            (o(
              "WAWebBackendEventBus",
            ).BackendEventBus.triggerOfflineDeliveryEnd(),
              yield o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
              o("WAWebOfflineResumeUtils").loadMainScreen({}));
          } else
            (yield o("WAComms").startHandlingRequests(),
              self.setTimeout(function () {
                !o("WAWebBackendEventBus").BackendEventBus
                  .isOfflineDeliveryEnd &&
                  !o(
                    "WAWebOfflineHandler",
                  ).OfflineMessageHandler.hasReceivedOfflinePreviewIb() &&
                  o("WALogger")
                    .WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[startBackend] no offline preview IB within 10s (socketState=",
                          ", commsInWorker=",
                          ", hasResumeManager=",
                          ")",
                        ])),
                      o("WAWebBackendEventBus").BackendEventBus.socketState,
                      o("WAWebCommsGating").isCommsInWorker(),
                      o(
                        "WAWebOfflineHandler",
                      ).OfflineMessageHandler.hasInitOfflineResumeManager(),
                    )
                    .sendLogs("offline-delivery-end-fallback-timer");
              }, 1e4),
              yield o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey());
          (M() && o("WAWebLazyPersistedQueue").schedulePersistedQueuesPreload(),
            o(
              "WAWebLid1x1MigrationManager",
            ).ThreadMigrationManager.addDependentMigrationTask(
              o("WAWebDBFavoriteDatabaseMigrationToLid")
                .migrateFavoritesDatabaseToLid,
            ),
            o(
              "WAWebLid1x1MigrationManager",
            ).ThreadMigrationManager.addDependentMigrationTask(
              o("WAWebDBLabelAssociationDatabaseMigrationToLid")
                .migrateLabelAssociationsDatabaseToLid,
            ),
            o(
              "WAWebLid1x1MigrationManager",
            ).ThreadMigrationManager.addDependentMigrationTask(
              o("WAWebCartDbLidMigration").migrateCartDbLid,
            ),
            o(
              "WAWebLid1x1MigrationManager",
            ).ThreadMigrationManager.addDependentMigrationTask(
              o("WAWebDBPnhThreadMigrationToGeneralLid")
                .migratePhoneNumberHidingThreadsToGeneralLid,
            ),
            o(
              "WAWebLid1x1MigrationManager",
            ).ThreadMigrationManager.addDependentMigrationTask(
              o("WAWebDBAfterReadSendingRollbackMigration")
                .migrateAfterReadSendingRollback,
            ),
            o(
              "WAWebAfterReadSendingRollbackListener",
            ).registerAfterReadSendingRollbackListener(),
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              "WAReceivedBlocklistMigrationBefore1x1Migration",
            ) &&
              o(
                "WAWebLid1x1MigrationManager",
              ).ThreadMigrationManager.addDependentMigrationTask(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield o(
                    "WAWebFetchAndUpdateBlocklistJob",
                  ).fetchAndUpdateBlocklist("post-migration");
                }),
              ),
            yield o(
              "WAWebLid1x1MigrationManager",
            ).ThreadMigrationManager.executeMigrationIfNeeded(),
            yield o(
              "WAWebPassiveModeManager",
            ).PassiveTaskManager.waitForPassiveTaskEnd(),
            yield o("WAWebSyncdCoreApi").initialize());
          var L = !(yield r("WAWebSyncBootstrap").isCriticalDataSynced());
          (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
            syncd_critical_bootstrap_needed: L,
          }),
            L
              ? yield r("WAWebSyncBootstrap").syncCriticalData()
              : o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap] need to sync critical data: false",
                    ])),
                ),
            o("WAWebBackendApi").frontendFireAndForget(
              "handleDeferredMessages",
              {},
            ),
            o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() || (yield O()),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "initializePME",
              {},
            ),
            o("WAWebSubscriptions").runSubscriptionsManager(),
            o("WAWebBackendApi").frontendFireAndForget("updatePushManager", {}),
            o("WAWebBackendApi").frontendFireAndForget(
              "updatePeriodicBackgroundSyncRegistration",
              {},
            ),
            D(),
            o("WAWebInitBotGatingHelpers")
              .initBotGatingHelpers()
              .then(o("WAWebInitializeBots").initializeBots)
              .finally(function () {
                return o("WAWebTos").TosManager.run();
              }),
            o("WAWebStoreSpecialAbProps").storeSpecialAbProps(),
            o("WAComms").startHandlingRequests());
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      var e = o("WAWebUserPrefsHistorySync").getHistorySyncStatus(),
        t =
          (e == null ? void 0 : e.fullCompleted) === !0 ||
          (e == null ? void 0 : e.recentCompleted) === !0;
      return o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced() && t;
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, a, i;
          (e === void 0 && (e = { passive: !1, pull: !0 }),
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("startWebComms"));
          var l = o("WAWebCommsConfig").getCommsConfig(e);
          (o("WAWebPageLoadLogging").startPageLoadQplMeasure("waitForMain"),
            yield o("WAWebEventsWaitForMain").waitForMain(),
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("waitForMain"));
          var s = !o("WAWebBuildConstants").WINDOWS_OFFLINE;
          o("WAWebCommsWorkerProxy").setStartCommsArgs({
            passive: (t = e) == null ? void 0 : t.passive,
            pull: (a = e) == null ? void 0 : a.pull,
          });
          var u = o("WAWebCommsGating").isCommsInWorker();
          if (
            (o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
              comms_in_worker: u,
              comms_in_worker_expo_key:
                (i = o("WAWebABPropsCache").getABPropExpoKey(
                  "waweb_comms_in_backend_worker",
                )) != null
                  ? i
                  : void 0,
            }),
            u)
          ) {
            o("WAWebPageLoadLogging").startPageLoadQplMeasure(
              "getBackendWorkerBridge",
            );
            var c = yield o(
              "WAWebBackendWorkerClient",
            ).getBackendWorkerBridge();
            (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
              "getBackendWorkerBridge",
            ),
              o("WAComms").setCommsFactory(function () {
                return o("WAWebCommsWorkerProxy").createCommsWorkerProxy(c);
              }));
          }
          (o("WAComms").startComms(
            r("WAWebCommsHandleStanza"),
            l,
            function (e) {
              return (k || (k = n("Promise"))).resolve(o("WAGzip").inflate(e));
            },
            s,
          ),
            s &&
              (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "waitForConnection",
              ),
              yield o("WAComms").waitForConnection(),
              o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                "waitForConnection",
              )),
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startWebComms"));
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      t != null &&
        o("WAWebWamGlobals").Global.set({
          psCountryCode: o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
            t,
          ),
        });
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          ((e = o("WAWebBackendApi")).frontendFireAndForget(
            "applyContactBusinessProps",
            {},
          ),
            e.frontendFireAndForget("restoreLabels", {}),
            e.frontendFireAndForget("restoreQuickReplies", {}),
            e.frontendFireAndForget("restoreLabelAssociations", {}),
            e.frontendFireAndForget("restoreCarts", {}),
            o("WAWebBootstrapPremiumMessages").restorePremiumMessages(),
            o("WAWebBootstrapPremiumMessages").bindPremiumMessageListeners(),
            e.frontendFireAndForget("restoreDataSharing3pdLid", {}),
            yield e.frontendSendAndReceive("restoreArchiveV2Settings", {}),
            yield e.frontendSendAndReceive("initializeAgentLog", {}),
            e.frontendFireAndForget("checkOrphanAssignments", {}),
            e.frontendFireAndForget("restoreChatAssignments", {}));
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
            o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())
          ) {
            (o("WAWebTasksDefinitions").registerTasks(),
              yield o("WAWebSyncContactsJob").runSyncDirtyContactsJob(),
              o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled() &&
                o("WAWebInitFavoritesFromStorage").restoreFavorites(),
              o("WAWebSyncd").markCollectionsForSync([
                o("WAWebSyncdConst").CollectionName.Regular,
                o("WAWebSyncdConst").CollectionName.RegularLow,
                o("WAWebSyncdConst").CollectionName.RegularHigh,
              ]));
            return;
          }
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][continueProgressiveHistorySyncProcessingV2] start backend",
              ])),
          ),
            r("WAWebSyncBootstrap").continueProgressiveHistorySyncProcessingV2(
              o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                .BackendStart,
            ),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "init worker: startIndexer from initialSetup",
                ])),
            ),
            o("WAWebFtsClient")
              .ftsClient.startIndexer()
              .catch(function (e) {
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "init worker: error while calling startIndexer from initialSetup: ",
                      "",
                    ])),
                  e,
                );
              }),
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
              ? o("WAWebNewsletterRestoreMetadataWithLoadingStage")
                  .restoreNewsletterMetadataWithLoadingStage()
                  .finally(function () {
                    (o("WAWebBackendApi").frontendFireAndForget(
                      "clearStatusForRemovedContact",
                      {},
                    ),
                      o(
                        "WAWebUserPrefsMultiDevice",
                      ).getNewsletterWasBootstrapped() &&
                        o(
                          "WAWebNewsletterGatingUtils",
                        ).isNewsletterStatusReceiverEnabled() &&
                        o("WAWebBackendApi").frontendFireAndForget(
                          "fillSubscribedStatusGaps",
                          {},
                        ));
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "restoreNewsletterMetadata failed: ",
                          "",
                        ])),
                      e,
                    );
                  })
              : o("WAWebBackendApi").frontendFireAndForget(
                  "clearStatusForRemovedContact",
                  {},
                ),
            o("WAWebTasksDefinitions").registerTasks(),
            o("WAWebSignalSessionCleanupJob").cleanupCorruptedSignalSessions(),
            o(
              "WAWebPushNotificationsGatingUtils",
            ).canSupportOfflineNotifications() &&
              (o(
                "WAWebBackgroundSyncReporter",
              ).setPushNotificationInteractionStatus(),
              o("WAWebWamProcessWorkerData").processWorkerWamData(!0)),
            yield o("WAWebSyncContactsJob").runSyncDirtyContactsJob(),
            o("WAWebBackendApi").frontendFireAndForget(
              "restoreRecentStickers",
              {},
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "restoreFavoriteStickers",
              {},
            ),
            o("WAWebAdvDeviceInfoCheckJob").scheduleAdvDeviceInfoCheck(),
            o("WAWebBackendApi").frontendFireAndForget(
              "restoreCommunityActivity",
              {},
            ),
            o("WAWebHistorySyncProgress").updateHistorySyncProgressModel(),
            o("WAWebInitFromStorage").restoreMediaUploadResult(),
            o("WAWebBackendApi").frontendFireAndForget(
              "restoreCustomerData",
              {},
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "restoreUnjoinedSubgroups",
              {},
            ),
            o("WAWebInitFromStorage").restoreAccountLinkingSettings(),
            o("WAWebInitFromStorage").restoreCrosspostAutoShareSettings(),
            o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled() &&
              o("WAWebInitFavoritesFromStorage").restoreFavorites(),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "restoreCTWASuggestions",
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "loadQuickPromotions",
              { trigger: "app-launch" },
            ),
            o("WAWebMobilePlatforms").isSMB() &&
              r("JSResourceForInteraction")(
                "WAWebPrefetchBizBroadcastEntrypointEligibility",
              )
                .__setRef("WAWebStartBackend")
                .load()
                .then(function (e) {
                  var t = e.prefetchBizBroadcastEntrypointEligibility;
                  return t();
                })
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[BB Pro] Eligibility prefetch module failed to load",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("bb-pro-eligibility-prefetch-load-failed");
                }),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "fetchBizAiLargeScreensGate",
              { trigger: "app-launch" },
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "fetchBizAiWebSmartComposerAiListsGate",
              { trigger: "app-launch" },
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "fetchBizAiResponseSettingsV2Gate",
              { trigger: "app-launch" },
            ),
            o("WAWebGetReachoutTimelockJob").fetchReachoutTimelock());
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebPushNotificationsGatingUtils",
            ).canSupportOfflineNotifications() &&
            r("WAWebFeatureDetectionSwSupport").supported
          ) {
            var e, t;
            ((e = window.navigator.serviceWorker) != null &&
              e.controller &&
              (yield r("WAWebSWBus")
                .request(
                  window.navigator.serviceWorker.controller,
                  r("WAWebSWBusActions").STOP_COMMS,
                )
                .catch(function (e) {
                  o("WALogger").WARN(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[push-notification] Failed to request stopComms for service worker, error: ",
                        "",
                      ])),
                    e,
                  );
                })),
              (t = window.navigator.serviceWorker) == null ||
                (t = t.ready) == null ||
                t
                  .then(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var t,
                            n =
                              (t = yield e == null || e.getNotifications == null
                                ? void 0
                                : e.getNotifications()) != null
                                ? t
                                : [];
                          n.forEach(function (e) {
                            return e.close();
                          });
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  )
                  .catch(function (e) {
                    o("WALogger").WARN(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "[push-notification] Failed to close existing notifications, error: ",
                          "",
                        ])),
                      e,
                    );
                  }));
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = { pull: !0 };
          (o("WAWebGetMessageCache").setMessageCache(
            o("WAWebMessageProcessorCache").messageProcessorCache,
          ),
            yield o(
              "WAWebRegisterPassiveTasks",
            ).registerPassiveTaskForStartUp(),
            o("WAWebHandleSingleMsgWorkerCompatible").setInstance(
              o("WAWebHandleSingleMsg").handleSingleMsgImpl,
            ),
            o(
              "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
            ).setInstance(
              o("WAWebMmSignalSharingExpirationWindowUtils")
                .updateMmSignalSharingExpirationWindowImpl,
            ),
            o("WAWebSyncdOrphanWorkerCompatible").setInstance(
              o("WAWebSyncdOrphan").checkOrphanMutations,
            ),
            o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").setInstance(
              o("WAWebMessageInsertDebugPlaceholder")
                .maybeInsertDebugPlaceholder,
            ),
            o("WAWebIdentityChangeApiWorkerCompatible").setInstance({
              handleNewIdentity: o("WAWebIdentityChangeApi")
                .handleNewIdentityImpl,
              clearDeviceRecordForIdentityChange: o("WAWebIdentityChangeApi")
                .clearDeviceRecordForIdentityChangeImpl,
            }),
            o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).setInstance(
              o("WAWebOfflineResumeMsgProcessReporter").msgProcessReporter,
            ),
            yield w(e));
        })),
        G.apply(this, arguments)
      );
    }
    ((l.setupStartBackendListeners = T),
      (l.startBackend = x),
      (l.startWebComms = w));
  },
  98,
);
