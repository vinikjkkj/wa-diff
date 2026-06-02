__d(
  "WAWebStartBackend",
  [
    "WAAsyncSleep",
    "WABase64",
    "WAComms",
    "WAGzip",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABPropsWamGlobals",
    "WAWebAdvDeviceInfoCheckJob",
    "WAWebApiContact",
    "WAWebAuthAgentFeatureControlLifecycle",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackgroundSyncReporter",
    "WAWebBootstrapPremiumMessages",
    "WAWebBuildConstants",
    "WAWebCartDbLidMigration",
    "WAWebChatThreadLogging",
    "WAWebClientPayload",
    "WAWebCommonCTWADataSharing",
    "WAWebCommsConfig",
    "WAWebCommsHandleStanza",
    "WAWebCrashlog",
    "WAWebCryptoEncKeyHelper",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBFavoriteDatabaseMigrationToLid",
    "WAWebDBLabelAssociationDatabaseMigrationToLid",
    "WAWebDBPnhThreadMigrationToGeneralLid",
    "WAWebDbEncryptionKey",
    "WAWebEnvironment",
    "WAWebEventsWaitForMain",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFeatureDetectionSwSupport",
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
    "WAWebInitFavoritesFromStorage",
    "WAWebInitFromStorage",
    "WAWebInitWaitForEvents",
    "WAWebInitializeBots",
    "WAWebL10NCountryCodes",
    "WAWebL10NHelpers",
    "WAWebLid1X1ThreadAccountMigrations",
    "WAWebLid1x1MigrationManager",
    "WAWebLid1x1MigrationTimeout",
    "WAWebLocalStorage",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants",
    "WAWebMediaHosts",
    "WAWebMessageInsertDebugPlaceholder",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMobilePlatforms",
    "WAWebModelStorage",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataInitFromStorage",
    "WAWebOffdStorage",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeMainThread",
    "WAWebOfflineResumeMsgProcessReporter",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeUtils",
    "WAWebPageLoadLogging",
    "WAWebPassiveModeManager",
    "WAWebPersistedJobManager",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPrimaryFeatures",
    "WAWebPushNotificationsGatingUtils",
    "WAWebQueryBlockListJob",
    "WAWebRegisterPassiveTasks",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSignalStoreApi",
    "WAWebSocketModel",
    "WAWebStartBackendLoginListeners",
    "WAWebStoreSpecialAbProps",
    "WAWebSubscriptions",
    "WAWebSyncBootstrap",
    "WAWebSyncContactsJob",
    "WAWebSyncdCoreApi",
    "WAWebSyncdOrphan",
    "WAWebSyncdOrphanWorkerCompatible",
    "WAWebTasksDefinitions",
    "WAWebTos",
    "WAWebUpdateMmSignalSharingExpirationWindowWorkerCompatible",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocales",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWamGlobals",
    "WAWebWamOfflineResumeReporter",
    "WAWebWamProcessWorkerData",
    "WAWebWorkerSafeBackendApi",
    "cr:10195",
    "cr:10196",
    "cr:17219",
    "cr:37961",
    "justknobx",
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
      R = !1;
    function L() {
      (o("WAWebBackendEventBus").BackendEventBus.onStorageInitializationError(
        async function () {
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
        },
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
          async function () {
            try {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[StartBackend]: start initial setup",
                  ])),
              ),
                await $(),
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
          },
        ),
        (R = !0));
    }
    var E = function () {
      r("WAWebCommonCTWADataSharing").fetchDataSharingSettingAndUpdateModel();
    };
    async function k() {
      o("WAWebPageLoadLogging").startPageLoadQplMeasure("startBackend");
      var e = await I();
      return (
        o("WAWebPageLoadLogging").endPageLoadQplMeasure("startBackend"),
        e
      );
    }
    async function I() {
      R || L();
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
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[startBackend]: connected as ",
              "",
            ])),
          o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
        ),
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
          (i = n("cr:17219").getWindowsBridge()) == null ||
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
      (o("WAWebLid1X1ThreadAccountMigrations").checkIfMigrationEnabled(),
        o("WAWebInitWaitForEvents").initOfflineResumeWaitForEvents(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.setLastPushCompleteTimestamp(),
        P(),
        await o("WAWebPrimaryFeatures").loadPrimaryFeatures(),
        o("WAWebMediaHosts").mediaHosts.maybeLoadMediaConnFromStorage());
      var c = o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete();
      if (
        (c ||
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "initial chats not synced, will delay processing non-peer stanzas",
              ])),
          ),
          o("WAWebWaitForInitialChatsSynced").initWaitForInitialChatsSynced()),
        await N(),
        D(),
        o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes(),
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
          r("justknobx")._("3103") &&
          o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "prefetchBBEligibilityAndReloadQPs",
          ),
        o("WAWebMobilePlatforms").isSMB() &&
          o(
            "WAWebAuthAgentFeatureControlLifecycle",
          ).startAuthAgentFeatureControlLifecycle(),
        await o("WAWebChatThreadLogging").initChatThreadLogging(),
        await o("WAWebPersistedJobManager").startWebPersistedJobManager(),
        o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
          o("WAWebPersistedJobManager").getJobManager(),
        ),
        o("WAWebOfflineResumeMainThread").setupMainThreadResume(
          o("WAWebOfflineHandler").OfflineMessageHandler,
        ),
        o("WAWebBuildConstants").WINDOWS_OFFLINE)
      ) {
        var h,
          y = await (n("cr:17219") == null ||
          (h = n("cr:17219").getWindowsBridge()) == null ||
          (h = h.serverEncKeySaltBridge) == null
            ? void 0
            : h.getServerEncKeySalt());
        if (y == null)
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[_startBackend] encodedServerEncKeySalt is not available",
              ])),
          );
        else {
          var C = new TextDecoder(),
            b = o("WABase64").decodeB64(y),
            v = C.decode(b);
          (await o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(v),
            await o(
              "WAWebCryptoEncKeyHelper",
            ).generateFinalDbEncryptionAndFtsKeyForInvoker(v));
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[startBackend] no offline preview IB within 10s",
                    ])),
                )
                .sendLogs("offline-delivery-end-fallback-timer");
          }, 1e4),
          await o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.waitForFinalDbMsgEncKey());
      (o(
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
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          "WAReceivedBlocklistMigrationBefore1x1Migration",
        ) &&
          o(
            "WAWebLid1x1MigrationManager",
          ).ThreadMigrationManager.addDependentMigrationTask(async function () {
            await o("WAWebQueryBlockListJob").fetchAndUpdateBlocklist(
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
      var S = !(await r("WAWebSyncBootstrap").isCriticalDataSynced());
      (S
        ? await r("WAWebSyncBootstrap").syncCriticalData()
        : o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[bootstrap] need to sync critical data: false",
              ])),
          ),
        o("WAWebBackendApi").frontendFireAndForget(
          "handleDeferredMessages",
          {},
        ),
        await x(),
        await o("WAWebBackendApi").frontendSendAndReceive("initializePME", {}),
        o("WAWebSubscriptions").runSubscriptionsManager(),
        o("WAWebBackendApi").frontendFireAndForget("updatePushManager", {}),
        o("WAWebBackendApi").frontendFireAndForget(
          "updatePeriodicBackgroundSyncRegistration",
          {},
        ),
        E(),
        o("WAWebInitBotGatingHelpers")
          .initBotGatingHelpers()
          .then(o("WAWebInitializeBots").initializeBots)
          .finally(function () {
            return o("WAWebTos").TosManager.run();
          }),
        o("WAWebStoreSpecialAbProps").storeSpecialAbProps(),
        o("WAComms").startHandlingRequests());
    }
    async function T(e) {
      (e === void 0 && (e = { passive: !1, pull: !0 }),
        o("WAWebPageLoadLogging").startPageLoadQplMeasure("startWebComms"));
      var t = o("WAWebCommsConfig").getCommsConfig(e);
      await o("WAWebEventsWaitForMain").waitForMain();
      var n = !o("WAWebBuildConstants").WINDOWS_OFFLINE;
      (o("WAComms").startComms(
        r("WAWebCommsHandleStanza"),
        t,
        function (e) {
          return Promise.resolve(o("WAGzip").inflate(e));
        },
        n,
      ),
        n && (await o("WAComms").waitForConnection()),
        o("WAWebPageLoadLogging").endPageLoadQplMeasure("startWebComms"));
    }
    function D() {
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
    async function x() {
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
        await e.frontendSendAndReceive("restoreArchiveV2Settings", {}),
        await e.frontendSendAndReceive("initializeAgentLog", {}),
        e.frontendFireAndForget("checkOrphanAssignments", {}),
        e.frontendFireAndForget("restoreChatAssignments", {}));
    }
    async function $() {
      (o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync][continueProgressiveHistorySyncProcessingV2] start backend",
            ])),
        ),
        r("WAWebSyncBootstrap").continueProgressiveHistorySyncProcessingV2(
          o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
            .BackendStart,
        ),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "init worker: startIndexer from initialSetup",
            ])),
        ),
        o("WAWebFtsClient")
          .ftsClient.startIndexer()
          .catch(function (e) {
            o("WALogger").WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "init worker: error while calling startIndexer from initialSetup: ",
                  "",
                ])),
              e,
            );
          }),
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
          ? o("WAWebNewsletterMetadataInitFromStorage")
              .restoreNewsletterMetadata()
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
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
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canSupportOfflineNotifications() &&
          (o(
            "WAWebBackgroundSyncReporter",
          ).setPushNotificationInteractionStatus(),
          o("WAWebWamProcessWorkerData").processWorkerWamData(!0)),
        o("WAWebMessageQueue")
          .waitForOnlineMessageQueue()
          .then(async function () {
            (await o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
              await o("WAWebMessageQueue").waitForOnlineMessageQueue(),
              await o("WAAsyncSleep").asyncSleep(1e4),
              o("WAWebLid1x1MigrationTimeout").scheduleLogoutIfNeeded(
                "offline",
              ));
          }),
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
          "restoreNewMessageCappingData",
        ),
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "loadQuickPromotions",
          { trigger: "app-launch" },
        ),
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "fetchAdEntryPointsConfiguration",
          { trigger: "app-launch" },
        ),
        o("WAWebGetReachoutTimelockJob").fetchReachoutTimelock());
    }
    async function P() {
      if (
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canSupportOfflineNotifications() &&
        r("WAWebFeatureDetectionSwSupport").supported
      ) {
        var e, t;
        ((e = window.navigator.serviceWorker) != null &&
          e.controller &&
          (await r("WAWebSWBus")
            .request(
              window.navigator.serviceWorker.controller,
              r("WAWebSWBusActions").STOP_COMMS,
            )
            .catch(function (e) {
              o("WALogger").WARN(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[push-notification] Failed to request stopComms for service worker, error: ",
                    "",
                  ])),
                e,
              );
            })),
          (t = window.navigator.serviceWorker) == null ||
            (t = t.ready) == null ||
            t
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
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[push-notification] Failed to close existing notifications, error: ",
                      "",
                    ])),
                  e,
                );
              }));
      }
    }
    async function N() {
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
        await T(e));
    }
    ((l.setupStartBackendListeners = L),
      (l.startBackend = k),
      (l.startWebComms = T));
  },
  98,
);
