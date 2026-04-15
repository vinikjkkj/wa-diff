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
      R,
      L = !1;
    function E() {
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
                yield A(),
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
        (L = !0));
    }
    var k = function () {
      r("WAWebCommonCTWADataSharing").fetchDataSharingSettingAndUpdateModel();
    };
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebPageLoadLogging").startPageLoadQplMeasure("startBackend");
          var e = yield D();
          return (
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startBackend"),
            e
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          L || E();
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
            O(),
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
            (yield W(),
            N(),
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
            yield o("WAWebPersistedJobManager").startWebPersistedJobManager(),
            o("WAWebPersistedJobManagerWorkerCompatible").setInstance(
              o("WAWebPersistedJobManager").getJobManager(),
            ),
            o("WAWebOfflineResumeMainThread").setupMainThreadResume(
              o("WAWebOfflineHandler").OfflineMessageHandler,
            ),
            o("WAWebBuildConstants").WINDOWS_OFFLINE)
          ) {
            var h,
              y = yield n("cr:17219") == null ||
              (h = n("cr:17219").getWindowsBridge()) == null ||
              (h = h.serverEncKeySaltBridge) == null
                ? void 0
                : h.getServerEncKeySalt();
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
              (yield o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.generateFinalDbEncryptionAndFtsKey(v),
                yield o(
                  "WAWebCryptoEncKeyHelper",
                ).generateFinalDbEncryptionAndFtsKeyForInvoker(v));
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
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[startBackend] no offline preview IB within 10s",
                        ])),
                    )
                    .sendLogs("offline-delivery-end-fallback-timer");
              }, 1e4),
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
          var S = !(yield r("WAWebSyncBootstrap").isCriticalDataSynced());
          (S
            ? yield r("WAWebSyncBootstrap").syncCriticalData()
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
            yield M(),
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
            k(),
            o("WAWebInitBotGatingHelpers")
              .initBotGatingHelpers()
              .then(o("WAWebInitializeBots").initializeBots)
              .finally(function () {
                return o("WAWebTos").TosManager.run();
              }),
            o("WAWebStoreSpecialAbProps").storeSpecialAbProps(),
            o("WAComms").startHandlingRequests());
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e === void 0 && (e = { passive: !1, pull: !0 }),
            o("WAWebPageLoadLogging").startPageLoadQplMeasure("startWebComms"));
          var t = o("WAWebCommsConfig").getCommsConfig(e);
          yield o("WAWebEventsWaitForMain").waitForMain();
          var a = !o("WAWebBuildConstants").WINDOWS_OFFLINE;
          (o("WAComms").startComms(
            r("WAWebCommsHandleStanza"),
            t,
            function (e) {
              return (R || (R = n("Promise"))).resolve(o("WAGzip").inflate(e));
            },
            a,
          ),
            a && (yield o("WAComms").waitForConnection()),
            o("WAWebPageLoadLogging").endPageLoadQplMeasure("startWebComms"));
        })),
        P.apply(this, arguments)
      );
    }
    function N() {
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
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              { trigger: "app-launch" },
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "prefetchBBEligibilityAndReloadQPs",
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "fetchAdEntryPointsConfiguration",
              { trigger: "app-launch" },
            ),
            o("WAWebGetReachoutTimelockJob").fetchReachoutTimelock());
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[push-notification] Failed to close existing notifications, error: ",
                          "",
                        ])),
                      e,
                    );
                  }));
          }
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
            yield $(e));
        })),
        q.apply(this, arguments)
      );
    }
    ((l.setupStartBackendListeners = E),
      (l.startBackend = I),
      (l.startWebComms = $));
  },
  98,
);
