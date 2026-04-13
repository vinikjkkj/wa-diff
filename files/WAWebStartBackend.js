__d(
  "WAWebStartBackend",
  [
    "Promise",
    "WAAsyncSleep",
    "WABase64",
    "WAComms",
    "WAGzip",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABPropsWamGlobals",
    "WAWebAdvDeviceInfoCheckJob",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackgroundSyncReporter",
    "WAWebBootstrapPremiumMessages",
    "WAWebBuildConstants",
    "WAWebCartDbLidMigration",
    "WAWebChatThreadLogging",
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
    "WAWebHandleSingleMsgFactory",
    "WAWebHistorySyncNotificationUtils",
    "WAWebHistorySyncProgress",
    "WAWebIdentityChangeApi",
    "WAWebIdentityChangeApiFactory",
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
    "WAWebMessageInsertDebugPlaceholderFactory",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebModelStorage",
    "WAWebNewsletterCommonGatingUtils",
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
    "WAWebSyncdOrphanFactory",
    "WAWebTasksDefinitions",
    "WAWebTos",
    "WAWebUpdateMmSignalSharingExpirationWindowFactory",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsHistorySync",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocales",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWamDeviceLinkReporter",
    "WAWebWamGlobals",
    "WAWebWamOfflineResumeReporter",
    "WAWebWamProcessWorkerData",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10195",
    "cr:10196",
    "cr:17219",
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
      R = !1;
    function L() {
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
                yield w(),
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
        (R = !0));
    }
    var E = function () {
      r("WAWebCommonCTWADataSharing").fetchDataSharingSettingAndUpdateModel();
    };
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebPageLoadLogging").startPageLoadQplMeasure("startBackend");
          var e = yield T();
          return (
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startBackend"),
            e
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          R || L();
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
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[startBackend]: connected as ",
                  "",
                ])),
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            ),
            o("WAWebWamDeviceLinkReporter").resumeDeviceLinkReporting(),
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
              (i = n("cr:17219").getWindowsBridge()) == null ||
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
          if (
            (o("WAWebLid1X1ThreadAccountMigrations").checkIfMigrationEnabled(),
            o("WAWebInitWaitForEvents").initOfflineResumeWaitForEvents(),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.setLastPushCompleteTimestamp(),
            F(),
            yield o("WAWebPrimaryFeatures").loadPrimaryFeatures(),
            o("WAWebMediaHosts").mediaHosts.maybeLoadMediaConnFromStorage(),
            r("gkx")("20906"))
          ) {
            var c = o(
              "WAWebUserPrefsHistorySync",
            ).getInitialHistorySyncComplete();
            c ||
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "initial chats not synced, will delay processing non-peer stanzas",
                  ])),
              ),
              o(
                "WAWebWaitForInitialChatsSynced",
              ).initWaitForInitialChatsSynced());
          }
          if (
            (yield B(),
            P(),
            o("WAWebABPropsWamGlobals").setAbPropDependingGlobalWamAttributes(),
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
            yield o("WAWebChatThreadLogging").initChatThreadLogging(),
            o("WAWebPersistedJobManagerWorkerCompatible").setHandler(
              o("WAWebPersistedJobManager")
                .mainThreadPersistedJobManagerHandler,
            ),
            yield o("WAWebPersistedJobManager").startWebPersistedJobManager(),
            o("WAWebOfflineResumeMainThread").setupMainThreadResume(
              o("WAWebOfflineHandler").OfflineMessageHandler,
            ),
            o("WAWebBuildConstants").WINDOWS_OFFLINE)
          ) {
            var g,
              h = yield n("cr:17219") == null ||
              (g = n("cr:17219").getWindowsBridge()) == null ||
              (g = g.serverEncKeySaltBridge) == null
                ? void 0
                : g.getServerEncKeySalt();
            if (h == null)
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[_startBackend] encodedServerEncKeySalt is not available",
                  ])),
              );
            else {
              var y = new TextDecoder(),
                C = o("WABase64").decodeB64(h),
                b = y.decode(C);
              (yield o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(b),
                yield o(
                  "WAWebCryptoEncKeyHelper",
                ).generateFinalDbEncryptionAndFtsKeyForInvoker(b));
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
              yield o(
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
              ).ThreadMigrationManager.addDependentMigrationTask(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield o("WAWebQueryBlockListJob").fetchAndUpdateBlocklist(
                    "post-migration",
                  );
                }),
              ),
            yield o(
              "WAWebLid1x1MigrationManager",
            ).ThreadMigrationManager.executeMigrationIfNeeded(),
            yield o(
              "WAWebPassiveModeManager",
            ).PassiveTaskManager.waitForPassiveTaskEnd(),
            yield o("WAWebSyncdCoreApi").initialize());
          var v = !(yield r("WAWebSyncBootstrap").isCriticalDataSynced());
          (v
            ? yield r("WAWebSyncBootstrap").syncCriticalData()
            : o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap] need to sync critical data: false",
                  ])),
              ),
            o("WAWebBackendApi").frontendFireAndForget(
              "handleDeferredMessages",
              {},
            ),
            yield N(),
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
            E(),
            o("WAWebInitBotGatingHelpers")
              .initBotGatingHelpers()
              .then(o("WAWebInitializeBots").initializeBots)
              .finally(function () {
                return o("WAWebTos").TosManager.run();
              }),
            o("WAWebStoreSpecialAbProps").storeSpecialAbProps(),
            o("WAComms").startHandlingRequests());
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e === void 0 && (e = { passive: !1, pull: !0 }),
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("startWebComms"));
          var t = o("WAWebCommsConfig").getCommsConfig(e);
          yield o("WAWebEventsWaitForMain").waitForMain();
          var a = !o("WAWebBuildConstants").WINDOWS_OFFLINE;
          (o("WAComms").startComms(
            r("WAWebCommsHandleStanza"),
            t,
            function (e) {
              return (S || (S = n("Promise"))).resolve(o("WAGzip").inflate(e));
            },
            a,
          ),
            a && (yield o("WAComms").waitForConnection()),
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startWebComms"));
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
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
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] start backend",
                ])),
            ),
            r("WAWebSyncBootstrap").continueProgressiveHistorySyncProcessingV2(
              o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                .BackendStart,
            ),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "init worker: startIndexer from initialSetup",
                ])),
            ),
            o("WAWebFtsClient")
              .ftsClient.startIndexer()
              .catch(function (e) {
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
                      o("WAWebBackendApi").frontendFireAndForget(
                        "fillSubscribedStatusGaps",
                        {},
                      ));
                  })
                  .catch(function (e) {
                    o("WALogger").WARN(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
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
              .then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (yield o(
                    "WAWebEventsWaitForOfflineDeliveryEnd",
                  ).waitForOfflineDeliveryEnd(),
                    yield o("WAWebMessageQueue").waitForOnlineMessageQueue(),
                    yield o("WAAsyncSleep").asyncSleep(1e4),
                    o("WAWebLid1x1MigrationTimeout").scheduleLogoutIfNeeded(
                      "offline",
                    ));
                }),
              ),
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
              "restoreNewMessageCappingData",
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "loadQuickPromotions",
              { trigger: "app-launch", shouldPrefetchEligibility: !0 },
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "fetchAdEntryPointsConfiguration",
              { trigger: "app-launch" },
            ),
            o("WAWebGetReachoutTimelockJob").fetchReachoutTimelock());
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[push-notification] Failed to close existing notifications, error: ",
                          "",
                        ])),
                      e,
                    );
                  }));
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = { pull: !0 };
          (o("WAWebGetMessageCache").setMessageCache(
            o("WAWebMessageProcessorCache").messageProcessorCache,
          ),
            yield o(
              "WAWebRegisterPassiveTasks",
            ).registerPassiveTaskForStartUp(),
            o("WAWebHandleSingleMsgFactory").setHandler(
              o("WAWebHandleSingleMsg").handleSingleMsgImpl,
            ),
            o("WAWebUpdateMmSignalSharingExpirationWindowFactory").setHandler(
              o("WAWebMmSignalSharingExpirationWindowUtils")
                .updateMmSignalSharingExpirationWindowImpl,
            ),
            o("WAWebSyncdOrphanFactory").setHandler(
              o("WAWebSyncdOrphan").checkOrphanMutations,
            ),
            o("WAWebMessageInsertDebugPlaceholderFactory").setHandler(
              o("WAWebMessageInsertDebugPlaceholder")
                .maybeInsertDebugPlaceholder,
            ),
            o("WAWebIdentityChangeApiFactory").setHandlers(
              o("WAWebIdentityChangeApi").handleNewIdentityImpl,
              o("WAWebIdentityChangeApi")
                .clearDeviceRecordForIdentityChangeImpl,
            ),
            o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).setHandler(
              o("WAWebOfflineResumeMsgProcessReporter").msgProcessReporter,
            ),
            yield x(e));
        })),
        W.apply(this, arguments)
      );
    }
    ((l.setupStartBackendListeners = L),
      (l.startBackend = k),
      (l.startWebComms = x));
  },
  98,
);
