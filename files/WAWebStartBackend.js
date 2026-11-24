__d(
  "WAWebStartBackend",
  [
    "JSResourceForInteraction",
    "WABase64",
    "WAComms",
    "WACustomError",
    "WAGzip",
    "WALogger",
    "WAPromiseTimeout",
    "WASocketCloseReason",
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
    "WAWebBootstrapOrgsWhenEnabled",
    "WAWebBootstrapPremiumMessages",
    "WAWebBuildConstants",
    "WAWebCallsOnlyGating",
    "WAWebCartDbLidMigration",
    "WAWebClientPayloadLoginShared",
    "WAWebCoexStateSyncStartup",
    "WAWebCommonCTWADataSharing",
    "WAWebCommsConfig",
    "WAWebCommsGating",
    "WAWebCommsHandleStanza",
    "WAWebCommsWorkerProxy",
    "WAWebCrashlog",
    "WAWebCryptoEncKeyHelper",
    "WAWebCustomerManagerGating",
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
    "WAWebFtsBackgroundPauseBridge",
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
    "WAWebIncompatibleAgentRequestsRejectTriggers",
    "WAWebInitBotGatingHelpers",
    "WAWebInitChatThreadLogging",
    "WAWebInitFavoritesFromStorage",
    "WAWebInitFromStorage",
    "WAWebInitWaitForEvents",
    "WAWebInitializeBots",
    "WAWebL10NCountryCodes",
    "WAWebL10NHelpers",
    "WAWebLabyrinthAddPeerPayloadCopy",
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
    "WAWebOfflineSyncQplSession",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebPrefetchMetaOnePromoEligibility",
    "WAWebPrimaryFeatures",
    "WAWebPrimaryVersion",
    "WAWebPushNotificationsGatingUtils",
    "WAWebRegisterPassiveTasks",
    "WAWebRestoreSharableEventsWhenEnabled",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSignalSessionCleanupJob",
    "WAWebSignalStoreApi",
    "WAWebSocketModel",
    "WAWebStartBackendLoginListeners",
    "WAWebStartPersistedJobs",
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
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsWorkerCompatibleMainThread",
    "WAWebUserUtils",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWamGlobals",
    "WAWebWamOfflineResumeReporter",
    "WAWebWamProcessWorkerData",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWorkerSafeBackendApi",
    "WAWebWorkerStorage",
    "cr:10195",
    "cr:10196",
    "cr:17219",
    "cr:19083",
    "cr:21431",
    "cr:37961",
    "getErrorSafe",
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
      I,
      T,
      D,
      x,
      $ = !1;
    function P() {
      var t;
      (r("WAWebSyncBootstrap").setupHistorySyncJobQuotaOverride(),
        (t = o(
          "WAWebBackendEventBus",
        )).BackendEventBus.onStorageInitializationError(async function () {
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
            await o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(
              o("WAWebLogoutReasonConstants").LogoutReason
                .WebFailStorageInitialization,
            ),
            o("WAWebStartBackendLoginListeners").handleStorageInitError());
        }),
        t.BackendEventBus.onOpenSocketStream(function () {
          (o("WAWebUserPrefsGeneral").incrementLoginCounter(),
            o(
              "WAWebClientPayloadLoginShared",
            ).incrementSuccessfulLoginCounter(),
            o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.resetEvent(),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.logSocketConnectT());
        }),
        t.BackendEventBus.onSocketStreamDisconnected(function (e) {
          o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markSocketClosed(
            e != null ? e : o("WASocketCloseReason").CommsCloseReason.Unknown,
          );
        }),
        t.BackendEventBus.onceOfflineDeliveryEnd(async function () {
          try {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[StartBackend]: start initial setup",
                ])),
            ),
              await U(),
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
        o(
          "WAWebMetaAiBotSessionCleanupJob",
        ).registerMetaAiBotSessionCleanupOnResume(),
        o(
          "WAWebIncompatibleAgentRequestsRejectTriggers",
        ).registerIncompatibleAgentRequestRejectsOnResume(),
        t.BackendEventBus.onOpenSocketStream(function () {
          var e;
          (o(
            "WAWebLabyrinthAddPeerPayloadCopy",
          ).deleteAddPeerPayloadCopyWhileOnboardingOff(),
            (e = N()) == null || e.runLabyrinthCompanionOnboarding());
        }),
        ($ = !0));
    }
    function N() {
      return n("cr:19083");
    }
    function M() {
      o("WAWebCommonCTWADataSharing").fetchDataSharingSettingAndUpdateModel();
    }
    async function w() {
      o("WAWebPageLoadLogging").startPageLoadQplMeasure("startBackend");
      var e = await A();
      return (
        o("WAWebPageLoadLogging").endPageLoadQplMeasure("startBackend"),
        e
      );
    }
    async function A() {
      (o(
        "WAWebUserPrefsWorkerCompatibleMainThread",
      ).initializeUserPrefsWorkerCompatibleMainThread(),
        $ || P());
      var e = await o(
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
          o("WAWebUserUtils").getMeDeviceLidOrThrow(),
        ),
        n("cr:21431") == null || n("cr:21431").startLabyrinthShadowTriggers(),
        r("WAWebEnvironment").isWindows)
      ) {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(
                o("WAWebUserPrefsKeys").KEYS.WINDOWS_PENDING_CLIENT_KEY_SETUP,
              );
        if (t != null) {
          var a,
            i,
            l = o("WAWebUserPrefsMultiDevice").getNoiseInfo(),
            s = l == null || (a = l.staticKeyPair) == null ? void 0 : a.privKey,
            u = s != null ? o("WABase64").encodeB64(s) : "";
          (await (n("cr:17219") == null ||
          (i = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator").WAWebStartBackend,
          )) == null ||
          (i = i.getClientKeyBridge()) == null
            ? void 0
            : i.setClientKey(u)),
            await o("WAWebFtsClient").ftsClient.initExternalStorage(),
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").removeItem(
                o("WAWebUserPrefsKeys").KEYS.WINDOWS_PENDING_CLIENT_KEY_SETUP,
              ));
        }
      }
      try {
        (await o("WAWebApiContact").warmUpAllLidPnMappings(),
          await o("WAPromiseTimeout").promiseTimeout(
            o("WAWebModelStorage").initialize(),
            20 * 1e3,
          ),
          await o("WAPromiseTimeout").promiseTimeout(
            o("WAWebOffdStorage").initialize(),
            20 * 1e3,
          ),
          o("WAWebCrashlog").registerCrashlogUploadIsUserInExternalBetaFunction(
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
        ).OfflineResumeReporter.setLastPushCompleteTimestamp());
      var c = V();
      (o("WAWebPrimaryFeatures").loadPrimaryFeatures(),
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
      var C = o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
      if (
        (!C &&
          !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() &&
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "initial chats not synced, will delay processing non-peer stanzas",
              ])),
          ),
          o("WAWebWaitForInitialChatsSynced").initWaitForInitialChatsSynced()),
        await H(c),
        await j(),
        W(),
        o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes(),
        o("WAWebBootstrapOrgsWhenEnabled").bootstrapOrgsWhenEnabled(),
        o(
          "WAWebRestoreSharableEventsWhenEnabled",
        ).restoreSharableEventsWhenEnabled(),
        o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled() &&
          (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER,
            o("WAWebUserPrefsLocales").getUserLangPref() || "en",
          )),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
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
        await o("WAWebInitChatThreadLogging").initChatThreadLogging(),
        await o("WAWebStartPersistedJobs").startPersistedJobs(),
        o("WAWebOfflineResumeMainThread").setupMainThreadResume(
          o("WAWebOfflineHandler").OfflineMessageHandler,
        ),
        o("WAWebBuildConstants").WINDOWS_OFFLINE)
      ) {
        var b,
          v = await (n("cr:17219") == null ||
          (b = n("cr:17219").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator").WAWebStartBackend,
          )) == null ||
          (b = b.serverEncKeySaltBridge) == null
            ? void 0
            : b.getServerEncKeySalt());
        if (v == null)
          o("WALogger").ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[_startBackend] encodedServerEncKeySalt is not available",
              ])),
          );
        else {
          var S = new TextDecoder(),
            R = o("WABase64").decodeB64(v),
            L = S.decode(R);
          (await o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(L),
            await o(
              "WAWebCryptoEncKeyHelper",
            ).generateFinalDbEncryptionAndFtsKeyForInvoker(L));
        }
        (o("WAWebBackendEventBus").BackendEventBus.triggerOfflineDeliveryEnd(),
          await o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
          o("WAWebOfflineResumeUtils").loadMainScreen({}));
      } else
        (await o("WAComms").startHandlingRequests(),
          self.setTimeout(function () {
            !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
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
          await o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.waitForFinalDbMsgEncKey());
      (O() && o("WAWebLazyPersistedQueue").schedulePersistedQueuesPreload(),
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
          ).ThreadMigrationManager.addDependentMigrationTask(async function () {
            await o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist(
              "post-migration",
            );
          }),
        await o(
          "WAWebLid1x1MigrationManager",
        ).ThreadMigrationManager.executeMigrationIfNeeded(),
        await o(
          "WAWebPassiveModeManager",
        ).PassiveTaskManager.waitForPassiveTaskEnd(),
        await o("WAWebSyncdCoreApi").initialize());
      var E = !(await r("WAWebSyncBootstrap").isCriticalDataSynced());
      (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
        syncd_critical_bootstrap_needed: E,
      }),
        E
          ? await r("WAWebSyncBootstrap").syncCriticalData()
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
        o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ||
          (await q(),
          o("WAWebCustomerManagerGating").customerManagerEnabled() &&
            o("WAWebBackendApi").frontendFireAndForget(
              "startServerLeadStageRepull",
              {},
            )),
        await o("WAWebBackendApi").frontendSendAndReceive("initializePME", {}),
        o("WAWebSubscriptions").runSubscriptionsManager(),
        F(),
        o(
          "WAWebPrefetchMetaOnePromoEligibility",
        ).prefetchMetaOnePromoEligibility(),
        o("WAWebBackendApi").frontendFireAndForget("updatePushManager", {}),
        o("WAWebBackendApi").frontendFireAndForget(
          "updatePeriodicBackgroundSyncRegistration",
          {},
        ),
        M(),
        o("WAWebInitBotGatingHelpers")
          .initBotGatingHelpers()
          .then(o("WAWebInitializeBots").initializeBots)
          .finally(function () {
            return o("WAWebTos").TosManager.run();
          }),
        o("WAWebStoreSpecialAbProps").storeSpecialAbProps(),
        o("WAComms").startHandlingRequests());
    }
    async function F() {
      if (o("WAWebMobilePlatforms").isSMB())
        try {
          var e = await r("JSResourceForInteraction")(
              "WAWebFetchSubscriptionEntryPoints",
            )
              .__setRef("WAWebStartBackend")
              .load(),
            t = e.fetchSubscriptionEntryPoints;
          await t();
        } catch (e) {
          o("WALogger")
            .WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "Subscription entry point prefetch failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("subscription-entry-points-prefetch-failed");
        }
    }
    function O() {
      var e = o("WAWebUserPrefsHistorySync").getHistorySyncStatus(),
        t =
          (e == null ? void 0 : e.fullCompleted) === !0 ||
          (e == null ? void 0 : e.recentCompleted) === !0;
      return o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced() && t;
    }
    async function B(e) {
      var t, n;
      (e === void 0 && (e = { passive: !1, pull: !0 }),
        o("WAWebPageLoadLogging").startPageLoadQplMeasure("startWebComms"));
      var a = o("WAWebCommsConfig").getCommsConfig(e);
      (o("WAWebPageLoadLogging").startPageLoadQplMeasure("waitForMain"),
        await o("WAWebEventsWaitForMain").waitForMain(),
        o("WAWebPageLoadLogging").endPageLoadQplMeasure("waitForMain"));
      var i = !o("WAWebBuildConstants").WINDOWS_OFFLINE;
      o("WAWebCommsWorkerProxy").setStartCommsArgs({
        passive: (t = e) == null ? void 0 : t.passive,
        pull: (n = e) == null ? void 0 : n.pull,
      });
      var l = o("WAWebCommsGating").isCommsInWorker(),
        s = o("WAWebABPropsCache").getABPropExpoKey(
          "waweb_comms_in_backend_worker",
        );
      if (
        (o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
          comms_in_worker: l,
          comms_in_worker_expo_key: s != null ? s : void 0,
        }),
        o("WAWebOfflineSyncQplSession").OfflineSyncQpl.setCommsInWorkerExpoKey(
          s,
        ),
        l)
      ) {
        o("WAWebPageLoadLogging").startPageLoadQplMeasure(
          "getBackendWorkerBridge",
        );
        var u = await o("WAWebBackendWorkerClient").getBackendWorkerBridge();
        (o("WAWebPageLoadLogging").endPageLoadQplMeasure(
          "getBackendWorkerBridge",
        ),
          o("WAComms").setCommsFactory(function () {
            return o("WAWebCommsWorkerProxy").createCommsWorkerProxy(u);
          }));
      }
      (o("WAComms").startComms(
        r("WAWebCommsHandleStanza"),
        a,
        function (e) {
          return Promise.resolve(o("WAGzip").inflate(e));
        },
        i,
      ),
        i &&
          (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
            "waitForConnection",
          ),
          await o("WAComms").waitForConnection(),
          o("WAWebPageLoadLogging").endPageLoadQplMeasure("waitForConnection")),
        o("WAWebPageLoadLogging").endPageLoadQplMeasure("startWebComms"));
    }
    function W() {
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
    async function q() {
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
        o("WAWebCoexStateSyncStartup")
          .startCoexStateSyncIfHosted()
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "startCoexStateSyncIfHosted: failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("coex-state-sync-startup-failed");
          }),
        await e.frontendSendAndReceive("restoreArchiveV2Settings", {}),
        await e.frontendSendAndReceive("initializeAgentLog", {}),
        e.frontendFireAndForget("checkOrphanAssignments", {}),
        e.frontendFireAndForget("restoreChatAssignments", {}));
    }
    async function U() {
      if (
        (o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
        o("WAWebUserPrefsNotifications").migrateNotificationClickedOnce(),
        o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())
      ) {
        (o("WAWebTasksDefinitions").registerTasks(),
          await o("WAWebSyncContactsJob").runSyncDirtyContactsJob(),
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
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync][continueProgressiveHistorySyncProcessingV2] start backend",
          ])),
      ),
        r("WAWebSyncBootstrap").continueProgressiveHistorySyncProcessingV2(
          o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
            .BackendStart,
        ),
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "init worker: startIndexer from initialSetup",
            ])),
        ),
        o("WAWebFtsClient")
          .ftsClient.startIndexer()
          .catch(function (e) {
            o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "init worker: error while calling startIndexer from initialSetup: ",
                  "",
                ])),
              e,
            );
          }),
        o("WAWebFtsBackgroundPauseBridge").setupFtsBackgroundPause(),
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
          ? o("WAWebNewsletterRestoreMetadataWithLoadingStage")
              .restoreNewsletterMetadataWithLoadingStage()
              .finally(function () {
                (o("WAWebBackendApi").frontendFireAndForget(
                  "clearStatusForRemovedContact",
                  { isStartupSync: !0 },
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "restoreNewsletterMetadata failed: ",
                      "",
                    ])),
                  e,
                );
              })
          : o("WAWebBackendApi").frontendFireAndForget(
              "clearStatusForRemovedContact",
              { isStartupSync: !0 },
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
        await o("WAWebSyncContactsJob").runSyncDirtyContactsJob(),
        o("WAWebBackendApi").frontendFireAndForget("restoreRecentStickers", {}),
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
        o("WAWebBackendApi").frontendFireAndForget("restoreCustomerData", {}),
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[BB Pro] Eligibility prefetch module failed to load",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bb-pro-eligibility-prefetch-load-failed");
            }),
        o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "fetchBizAiWebDataDownloadsGate",
            { trigger: "app-launch" },
          ),
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "fetchBizAiResponseSettingsV2Gate",
          { trigger: "app-launch" },
        ),
        o("WAWebGetReachoutTimelockJob").fetchReachoutTimelock());
    }
    async function V() {
      var e = null;
      if (
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canSupportOfflineNotifications() &&
        r("WAWebFeatureDetectionSwSupport").supported
      ) {
        var t, n;
        if ((t = window.navigator.serviceWorker) != null && t.controller)
          try {
            await r("WAWebSWBus").request(
              window.navigator.serviceWorker.controller,
              r("WAWebSWBusActions").STOP_COMMS,
            );
          } catch (t) {
            (o("WALogger").WARN(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] Failed to request stopComms for service worker, error: ",
                  "",
                ])),
              t,
            ),
              (e = r("getErrorSafe")(t)));
          }
        (n = window.navigator.serviceWorker) == null ||
          (n = n.ready) == null ||
          n
            .then(async function (e) {
              var t,
                n =
                  (t = await (e == null || e.getNotifications == null
                    ? void 0
                    : e.getNotifications())) != null
                    ? t
                    : [];
              n.forEach(function (e) {
                return e.close();
              });
            })
            .catch(function (e) {
              o("WALogger").WARN(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] Failed to close existing notifications, error: ",
                    "",
                  ])),
                e,
              );
            });
      }
      return e;
    }
    async function H(e) {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          G(e),
          r("WAWebSWBus").REQUEST_REPLY_WAIT_MS,
        );
      } catch (e) {
        if (e instanceof o("WACustomError").TimeoutError) {
          o("WALogger").WARN(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] start comms before the service worker push treatment handoff finished",
              ])),
          );
          return;
        }
        o("WALogger")
          .ERROR(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[push-notification] stopping the service worker push handler failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sw-push-treatment-handoff-failed");
      }
    }
    async function G(e) {
      var t;
      if (
        !(
          ((t = window.navigator.serviceWorker) == null
            ? void 0
            : t.controller) == null || !(await z())
        )
      ) {
        var n = await e;
        if (n != null) throw n;
      }
    }
    async function z() {
      try {
        return await o("WAWebWorkerStorage").hasPushOfflineResumeTreatment();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[push-notification] failed to read the offline resume treatment",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sw-push-treatment-marker-read-failed"),
          !1
        );
      }
    }
    async function j() {
      var e = { pull: !0 };
      (o("WAWebGetMessageCache").setMessageCache(
        o("WAWebMessageProcessorCache").messageProcessorCache,
      ),
        await o("WAWebRegisterPassiveTasks").registerPassiveTaskForStartUp(),
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
          o("WAWebMessageInsertDebugPlaceholder").maybeInsertDebugPlaceholder,
        ),
        o("WAWebIdentityChangeApiWorkerCompatible").setInstance({
          handleNewIdentity: o("WAWebIdentityChangeApi").handleNewIdentityImpl,
          clearDeviceRecordForIdentityChange: o("WAWebIdentityChangeApi")
            .clearDeviceRecordForIdentityChangeImpl,
        }),
        o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").setInstance(
          o("WAWebOfflineResumeMsgProcessReporter").msgProcessReporter,
        ),
        await B(e));
    }
    ((l.setupStartBackendListeners = P),
      (l.startBackend = w),
      (l.startWebComms = B));
  },
  98,
);
