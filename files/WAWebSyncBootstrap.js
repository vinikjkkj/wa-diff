__d(
  "WAWebSyncBootstrap",
  [
    "$InternalEnum",
    "Promise",
    "QPLFlow",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAccountSyncJob",
    "WAWebApiHistorySyncNotification",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebBootstrapNewsletter",
    "WAWebBrokerGlobalAppState",
    "WAWebClientFeatureFlags",
    "WAWebCoreActionsODS",
    "WAWebDbEncryptionKey",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebForceFlushWamBuffers",
    "WAWebGetUsernameQueryJob",
    "WAWebHandleAccountSyncNotification",
    "WAWebHandleHistorySyncChunk",
    "WAWebHandleWorkerCompatibleRecentSyncChunk",
    "WAWebHistorySyncNotificationUtils",
    "WAWebJestE2ELogUtils",
    "WAWebJobOrchestrator",
    "WAWebLogoutReasonConstants",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebMetricsAttributionActions",
    "WAWebNonAddressBookContactsJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsHistorySync.pb",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSocketLogoutJob",
    "WAWebSyncContactJob",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebSyncd",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsHistorySync",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapSource",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWamMemoryStat",
    "WAWebWindowsHybridBridgeInitiator",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "getErrorSafe",
    "getSafeQplErrorMessage",
    "qpl",
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
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      oe = r("qpl")._(891423540, "2533"),
      ae =
        n("cr:17219") == null
          ? void 0
          : n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator").WAWebSyncBootstrap,
            ),
      ie = 40,
      le = 20,
      se = 180,
      ue = n("$InternalEnum").Mirrored([
        "NotStarted",
        "InProcess",
        "Completed",
      ]),
      ce = { initialChatHistory: !1, readReceipts: !1, syncdCritical: !1 },
      de = { initialChatHistoryTotalMsg: -1, initialChatHistoryTotalChats: -1 },
      me = 20,
      pe = (function () {
        function t() {
          ((this.$1 = {}),
            (this.$2 = de),
            (this.$6 = !1),
            (this.$7 = null),
            (this.$8 = null),
            (this.$9 = null),
            (this.$10 = !1),
            this.initState());
        }
        var a = t.prototype;
        return (
          (a.initState = function () {
            ((this.$1 = babelHelpers.extends({}, ce)),
              (this.$2 = babelHelpers.extends({}, de)),
              (this.$3 = ue.NotStarted),
              (this.$4 = ue.NotStarted),
              (this.$5 = ue.NotStarted));
          }),
          (a.$11 = function () {
            for (var e in this.$1) if (!this.$1[e]) return !1;
            return !0;
          }),
          (a.$12 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap][history sync] completed sync for ",
                      "",
                    ])),
                  t,
                ),
                  (this.$1[t] = !0),
                  this.$11() &&
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap][history sync] critical sync done",
                        ])),
                    ),
                    yield o(
                      "WAWebUserPrefsAppStateSync",
                    ).setAllCriticalDataSynced(),
                    o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerCriticalSyncDone(),
                    r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                      o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                        .INITIAL_PAIRING,
                    ),
                    o("WAWebWamMemoryStat").setCurrentMemoryScenario(
                      o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
                    ),
                    this.syncNonCriticalData()));
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "start contact sync for ",
                        " chunks of contacts during the initial sync",
                      ])),
                    e ? t.length + 1 : 0,
                  )
                  .tags("contact-sync"),
                  e != null &&
                    (yield o("WAWebSyncContactJob").syncContactListJob(
                      Array.from(e),
                      !1,
                      "query",
                    )));
                for (var n = 0; n < t.length; n++) {
                  var r = Array.from(t[n]);
                  (yield o("WAPromiseDelays").delayMs(le * 1e3),
                    yield o("WAWebSyncContactJob").syncContactListJob(
                      r,
                      !0,
                      "query",
                    ));
                }
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "initial contact sync completes",
                      ])),
                  )
                  .tags("contact-sync");
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$14 = function (t) {
            if (t == null)
              return (
                o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "syncMostRecentDevices has no contact to sync during bootstrap",
                      ])),
                  )
                  .tags("contact-sync"),
                (re || (re = n("Promise"))).resolve()
              );
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sync ",
                    " contacts for device info during the initial sync",
                  ])),
                t.size,
              )
              .tags("contact-sync");
            var e = Array.from(t);
            return o("WAWebSyncDeviceAdvDeviceListJob")
              .syncDeviceListJob(e, null, null)
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Sync device failed",
                      ])),
                  )
                  .verbose()
                  .sendLogs("Sync device failed: " + String(e));
              });
          }),
          (a.setReadReceiptsSynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield this.$12("readReceipts");
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setInitialChatHistorySynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield this.$12("initialChatHistory"),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] initial chat history synced.",
                    ])),
                ),
                o("WAWebSyncdGetChat").logLidPnChatDistribution({}),
                _e.continueProgressiveHistorySyncProcessingV2(
                  o("WAWebHistorySyncNotificationUtils")
                    .HistorySyncScheduleSource.InitialSyncComplete,
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setSyncDCriticalSynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((this.$3 = ue.Completed),
                !this.$1.syncdCritical && (yield this.$12("syncdCritical")));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.syncNonCriticalData = function () {
            var e = this,
              t = [];
            ((this.$5 = ue.InProcess),
              o("WAWebQueryAndUpdateGroupMetadataJob")
                .queryAndUpdateAllGroupMetadata({ isHistorySyncInProgress: !0 })
                .then(function () {
                  ((t = o(
                    "WAWebNonAddressBookContactsJob",
                  ).getAllContactsFromChatCollectionIntoChunks()),
                    e.$14(t[0]).catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[bootstrap] initial device list sync failed",
                            ])),
                        )
                        .catching(e)
                        .sendLogs("bootstrap-initial-device-list-sync-failed", {
                          sampling: 0.01,
                        });
                    }),
                    o("WAWebNonAddressBookContactsJob")
                      .getAndUpdateNonAddressBookContacts()
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap] non-address book contacts sync failed",
                              ])),
                          )
                          .catching(e)
                          .sendLogs(
                            "bootstrap-non-address-book-contacts-sync-failed",
                            { sampling: 0.01 },
                          );
                      }));
                })
                .then(function () {
                  self.setTimeout(function () {
                    e.$13(t[0], t.slice(1, t.length));
                  }, ie * 1e3);
                })
                .finally(function () {
                  e.$5 = ue.Completed;
                }),
              o("WAWebHandleAccountSyncNotification")
                .getAndUpdateStatus()
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap] status sync failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("bootstrap-status-sync-failed", {
                      sampling: 0.01,
                    });
                }),
              o("WAWebAccountSyncJob")
                .getAndUpdateProfilePicture()
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap] profile picture sync failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("bootstrap-profile-picture-sync-failed", {
                      sampling: 0.01,
                    });
                }),
              o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist(
                "bootstrap",
              ),
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "updateOptOutList",
              ),
              o("WAWebBootstrapNewsletter").bootstrapNewsletterBackend(),
              o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).usernameCreationOrReservationEnabled()
                ? o("WAWebGetUsernameQueryJob").getUsernameJob()
                : o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][history sync] username disabled, skipping get username query",
                      ])),
                  ),
              (this.$4 = ue.InProcess),
              o("WAWebSyncd")
                .markCollectionsForSync([
                  o("WAWebSyncdConst").CollectionName.Regular,
                  o("WAWebSyncdConst").CollectionName.RegularLow,
                  o("WAWebSyncdConst").CollectionName.RegularHigh,
                ])
                .then(function () {
                  var t;
                  ((e.$4 = ue.Completed),
                    ae == null || (t = ae.contacts) == null || t.initialize());
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap] mark collection for sync failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("bootstrap-mark-collection-for-sync-failed", {
                      sampling: 0.01,
                    });
                }));
          }),
          (a.markInitialHistorySyncCountDebugStats = function (t, n) {
            this.$2 = {
              initialChatHistoryTotalMsg: t,
              initialChatHistoryTotalChats: n,
            };
          }),
          (a.isSyncDCriticalDataSyncInProcess = function () {
            return this.$3 === ue.InProcess;
          }),
          (a.isSyncDBootstrapInProcess = function () {
            return this.$3 === ue.InProcess || this.$4 === ue.InProcess;
          }),
          (a.isSyncDBootstrapGroupMetadataQueryInProcess = function () {
            return this.$5 === ue.InProcess;
          }),
          (a.$15 = function () {
            var e = this;
            this.$7 == null &&
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] setting critical data syncd timeout (",
                    ")",
                  ])),
                se,
              ),
              (this.$7 = self.setTimeout(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(yield e.$16())) {
                    try {
                      var t = yield e.getCriticalSyncDebugSummary();
                      (o("WALogger").LOG(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose(
                            [
                              "[bootstrap][syncd] syncDCriticalDataState: ",
                              "\nsyncDNonCriticalDataState: ",
                              "\ndebugSummary: ",
                              "",
                            ],
                            [
                              "[bootstrap][syncd] syncDCriticalDataState: ",
                              "\\nsyncDNonCriticalDataState: ",
                              "\\ndebugSummary: ",
                              "",
                            ],
                          )),
                        e.$3,
                        e.$4,
                        t,
                      ),
                        o("WALogger")
                          .ERROR(
                            R ||
                              (R = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][syncd] syncd critical data timeout exceeded, logging out.",
                              ])),
                          )
                          .tags("bootstrap", "syncd", "logout")
                          .sendLogs("bootstrap-syncd-timeout-logout", {
                            sampling: 0.1,
                          }),
                        yield o("WAPromiseDelays").delayMs(5e3));
                    } catch (e) {}
                    (o(
                      "WAWebMetricsAttributionActions",
                    ).stopAllHistorySyncAttributionTracking(),
                      o(
                        "WAWebForceFlushWamBuffers",
                      ).forceFlushAllWamAndQplBuffers(),
                      o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                        "syncd critical data timeout exceeded, logging out",
                      ),
                      o("WAWebCoreActionsODS").logSessionForcedLogout(),
                      yield o("WAWebSocketLogoutJob").socketLogout(
                        o("WAWebLogoutReasonConstants").LogoutReason
                          .SyncdTimeout,
                      ));
                  }
                  var n = yield o(
                    "WAWebUserPrefsHistorySync",
                  ).getInitialHistorySyncComplete();
                  if (n !== !0) {
                    try {
                      var r = yield e.getCriticalSyncDebugSummary();
                      (o("WALogger").LOG(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[bootstrap][history-sync] history sync debug summary: ",
                            "",
                          ])),
                        r,
                      ),
                        o("WALogger")
                          .ERROR(
                            E ||
                              (E = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][history-sync] history sync critical data timeout exceeded, logging out.",
                              ])),
                          )
                          .tags("bootstrap", "history-sync", "logout")
                          .sendLogs("bootstrap-history-sync-timeout-logout", {
                            sampling: 0.1,
                          }),
                        yield o("WAPromiseDelays").delayMs(5e3));
                    } catch (e) {}
                    (o(
                      "WAWebForceFlushWamBuffers",
                    ).forceFlushAllWamAndQplBuffers(),
                      o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                        "history sync critical data timeout exceeded, logging out",
                      ),
                      o("WAWebCoreActionsODS").logSessionForcedLogout(),
                      yield o("WAWebSocketLogoutJob").socketLogout(
                        o("WAWebLogoutReasonConstants").LogoutReason
                          .HistorySyncTimeout,
                      ));
                  }
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][history sync] all critical data synced within timeout period",
                      ])),
                  );
                }),
                se * 1e3,
              )));
          }),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebSyncdDb").getSyncActionsRows(
                ["action"],
                [o("WAWebSyncdConst").Actions.SettingPushName],
              );
              return (
                e.length > 0 &&
                e.find(function (e) {
                  return (
                    e.actionState ===
                    o("WAWebSyncdConst").SyncActionState.Success
                  );
                }) != null
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setSyncDCriticalDataSyncCompleted = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              this.$7 != null &&
                (yield new (o(
                  "WAWebMdBootstrapDataAppliedWamEvent",
                ).MdBootstrapDataAppliedWamEvent)({
                  mdBootstrapPayloadType: o(
                    "WAWebWamEnumMdBootstrapPayloadType",
                  ).MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL,
                  mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource")
                    .MD_BOOTSTRAP_SOURCE.APP_STATE,
                  mdSessionId: yield o(
                    "WAWebSyncdMdSyncFieldstatMeta",
                  ).MdSyncFieldStatsMeta.getMdSessionId(),
                  mdTimestamp: o("WATimeUtils").unixTimeMs(),
                }).commitAndWaitForFlush(!0));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getCriticalSyncDebugSummary = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (yield this.isCriticalDataSynced())
                return "-------\nAll critical data synced\n-------\n\n";
              var e = yield o(
                "WAWebUserPrefsHistorySync",
              ).getHistorySyncStatus();
              return (
                "-------\n Initial history sync complete: " +
                (e ? "true" : this.$1.initialChatHistory.toString()) +
                "\n Initial msgs: " +
                this.$2.initialChatHistoryTotalMsg +
                ", initial chats: " +
                this.$2.initialChatHistoryTotalChats +
                "\n Receipt sync complete: " +
                this.$1.readReceipts.toString() +
                " \n " +
                ("Critical collection sync complete: " +
                  this.$1.syncdCritical.toString() +
                  " \n-------\n")
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.isCriticalDataSynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                (this.$6 =
                  this.$6 ||
                  (yield o(
                    "WAWebUserPrefsAppStateSync",
                  ).getAllCriticalDataSynced())),
                this.$6
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.syncCriticalData = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              (r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                  .INITIAL_PAIRING,
              ),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap][history sync] need to sync critical data: true",
                    ])),
                ));
              var t = yield this.getCriticalSyncDebugSummary();
              (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] ",
                    "",
                  ])),
                t,
              ),
                o("WALogger")
                  .LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap] syncing my device list",
                      ])),
                  )
                  .tags("history-sync"));
              var a = o(
                  "WAWebSyncDeviceAdvDeviceListJob",
                ).syncMyDeviceListJob(),
                i = new (re || (re = n("Promise")))(function (t, n) {
                  o("WAWebAccountSyncJob")
                    .updatePrivacySettings()
                    .then(function () {
                      return e.setReadReceiptsSynced();
                    })
                    .then(t)
                    .catch(n);
                }).catch(function (e) {
                  var t = r("getErrorSafe")(e);
                  (o("WALogger")
                    .ERROR(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "failed to sync privacy settings",
                        ])),
                    )
                    .catching(t)
                    .verbose()
                    .sendLogs(
                      "failed to update privacy settings from privacy request to server",
                    ),
                    o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                      "failed to sync privacy settings, logging out",
                    ),
                    o("WAWebCoreActionsODS").logSessionForcedLogout(),
                    o("WAWebSocketLogoutJob").socketLogout(
                      o("WAWebLogoutReasonConstants").LogoutReason
                        .AccountSyncError,
                    ));
                });
              (this.$15(), (this.$3 = ue.InProcess));
              var l = a
                  .then(function () {
                    return o("WAWebSyncd").markCollectionsForSync([
                      o("WAWebSyncdConst").CollectionName.CriticalBlock,
                      o("WAWebSyncdConst").CollectionName.CriticalUnblockLow,
                    ]);
                  })
                  .then(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      e.$1.syncdCritical ||
                        ((yield e.$16()) &&
                          (yield e.setSyncDCriticalSynced(),
                          yield e.setSyncDCriticalDataSyncCompleted()));
                    }),
                  ),
                s = yield o(
                  "WAWebUserPrefsHistorySync",
                ).getInitialHistorySyncComplete();
              s === !0 && (yield this.setInitialChatHistorySynced());
              var u = o("WAWebAccountSyncJob")
                .updateDefaultDisappearingMode()
                .catch(function (e) {
                  var t = r("getErrorSafe")(e);
                  o("WALogger")
                    .ERROR(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "failed to sync default disappearing mode",
                        ])),
                    )
                    .catching(t)
                    .verbose()
                    .sendLogs(
                      "failed initial sync of default disappearing mode",
                    );
                });
              yield re.all([i, l, u]);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
              ) {
                o("WALogger")
                  .LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] Skip processLoop, until main is loaded",
                      ])),
                  )
                  .tags("history-sync");
                return;
              }
              var e = yield o(
                "WAWebApiHistorySyncNotification",
              ).fetchNextHistorySyncChunkForProcessing();
              if (!e) {
                o("WALogger")
                  .LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] no chunk found",
                      ])),
                  )
                  .tags("history-sync");
                return;
              }
              var t = o("QPLFlow").startQPLFlow(oe, {
                annotations: { int: { syncType: e.syncType } },
                timeoutInMs: 12e4,
              });
              try {
                if (
                  (o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] processLoop picked up chunk",
                      ])),
                  ),
                  e.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT &&
                    e.chunkOrder != null)
                ) {
                  var n = e.msgKey;
                  o("WAWebApiHistorySyncNotification")
                    .recentSyncChunkHandlingTriedCount[n] != null
                    ? (o("WAWebApiHistorySyncNotification")
                        .recentSyncChunkHandlingTriedCount[n]++,
                      o("WAWebApiHistorySyncNotification")
                        .recentSyncChunkHandlingTriedCount[n] > me &&
                        o("WALogger")
                          .ERROR(
                            w ||
                              (w = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync chunk handling retry limit reached",
                              ])),
                          )
                          .sendLogs(
                            "history-sync-recent-sync-chunk-handling-retry-limit",
                          ))
                    : (o(
                        "WAWebApiHistorySyncNotification",
                      ).recentSyncChunkHandlingTriedCount[n] = 1);
                }
                (e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT
                  ? yield o(
                      "WAWebHandleWorkerCompatibleRecentSyncChunk",
                    ).handleWorkerCompatibleRecentSyncChunk(e, t)
                  : yield o(
                      "WAWebHandleHistorySyncChunk",
                    ).handleHistorySyncChunk(e),
                  t.endSuccess());
              } catch (e) {
                throw (
                  t.endFail(
                    o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
                  ),
                  e
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] job starts",
                  ])),
              );
              try {
                (yield o(
                  "WAWebDbEncryptionKey",
                ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                  yield this.$17());
              } catch (t) {
                var e = r("getErrorSafe")(t);
                o("WALogger")
                  .ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] _progressiveHistorySyncRun failed",
                      ])),
                  )
                  .catching(e);
              }
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] finish main flow",
                  ])),
              );
              var t = yield o(
                "WAWebUserPrefsHistorySync",
              ).getHistorySyncStatus();
              if ((t == null ? void 0 : t.recentCompleted) === !0) {
                var n = !0;
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining on demand sync notifications",
                    ])),
                );
                var a = yield o("WAWebSchemaHistorySyncNotification")
                  .getHistorySyncNotificationTable()
                  .equals(
                    ["processed", "syncType"],
                    [
                      0,
                      o("WAWebProtobufsHistorySync.pb")
                        .HistorySync$HistorySyncType.ON_DEMAND,
                    ],
                    { shouldDecrypt: !1 },
                  );
                if (
                  (a.length > 0
                    ? ((n = !1),
                      this.continueProgressiveHistorySyncProcessingV2(
                        o("WAWebHistorySyncNotificationUtils")
                          .HistorySyncScheduleSource.LastProcessedNotification,
                      ))
                    : o("WALogger").LOG(
                        W ||
                          (W = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on demand notifications",
                          ])),
                      ),
                  o("WAWebClientFeatureFlags").isFeatureEnabled(
                    "debug_1_year_history_sync",
                  ))
                ) {
                  o("WALogger").LOG(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining full sync notifications",
                      ])),
                  );
                  var i = yield o("WAWebSchemaHistorySyncNotification")
                    .getHistorySyncNotificationTable()
                    .equals(
                      ["processed", "syncType"],
                      [
                        0,
                        o("WAWebProtobufsHistorySync.pb")
                          .HistorySync$HistorySyncType.FULL,
                      ],
                      { shouldDecrypt: !1 },
                    );
                  i.length > 0
                    ? ((n = !1),
                      this.continueProgressiveHistorySyncProcessingV2(
                        o("WAWebHistorySyncNotificationUtils")
                          .HistorySyncScheduleSource.LastProcessedNotification,
                      ))
                    : o("WALogger").LOG(
                        U ||
                          (U = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on full sync notifications",
                          ])),
                      );
                }
                n &&
                  o(
                    "WAWebMetricsAttributionActions",
                  ).stopAllHistorySyncAttributionTracking();
                return;
              }
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync is incompleted, check remaining recent sync notifications",
                  ])),
              );
              var l = yield o(
                "WAWebHistorySyncNotificationUtils",
              ).getUnprocessedRecentSyncNotifications();
              if (l.length === 0) {
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications",
                    ])),
                );
                return;
              }
              var s = l[0].chunkOrder;
              if (s == null) {
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as first recent notification doesn't have chunk order",
                    ])),
                );
                return;
              }
              var u = yield o(
                "WAWebUserPrefsHistorySync",
              ).getLastHistoryRecentSyncedChunk();
              if (
                (o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] next unprocessed recent notification has chunk order: ",
                      ", last chunk order: ",
                      "",
                    ])),
                  s,
                  u == null ? void 0 : u.chunkOrder,
                ),
                u != null && u.chunkOrder + 1 !== s && s !== 1)
              ) {
                o("WALogger").LOG(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications with correct chunk order",
                    ])),
                );
                return;
              }
              if (
                (u == null ? void 0 : u.chunkOrder) === this.$8 &&
                s === this.$9
              ) {
                (this.$10 ||
                  ((this.$10 = !0),
                  o("WALogger")
                    .ERROR(
                      K ||
                        (K = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] loop detected, unexpected last chunk order",
                        ])),
                    )
                    .sendLogs("history-sync-unexpected-chunk-order", {
                      sampling: 0.01,
                    })),
                  yield o("WAPromiseDelays").delayMs(5e3));
                return;
              }
              if (
                ((this.$8 = u == null ? void 0 : u.chunkOrder),
                (this.$9 = s),
                o("WAWebApiHistorySyncNotification")
                  .recentSyncChunkHandlingTriedCount[l[0].msgKey] > me)
              ) {
                o("WALogger").LOG(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as recent notification with order ",
                      " fails too many times",
                    ])),
                  s,
                );
                return;
              }
              (o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] init next run",
                  ])),
              ),
                this.continueProgressiveHistorySyncProcessingV2(
                  o("WAWebHistorySyncNotificationUtils")
                    .HistorySyncScheduleSource.LastProcessedNotification,
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.continueProgressiveHistorySyncProcessingV2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (!this.$6 && this.$1.initialChatHistory !== !0)
                  return (
                    o("WALogger").LOG(
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as initial chat sync is incomplete",
                        ])),
                    ),
                    (re || (re = n("Promise"))).resolve()
                  );
                if (
                  e ===
                  o("WAWebHistorySyncNotificationUtils")
                    .HistorySyncScheduleSource.BackendStart
                ) {
                  var a = yield o(
                    "WAWebUserPrefsHistorySync",
                  ).getHistorySyncStatus();
                  if ((a == null ? void 0 : a.recentCompleted) === !0)
                    return (
                      o("WALogger").LOG(
                        J ||
                          (J = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as recent sync is complete when starting backend",
                          ])),
                      ),
                      (re || (re = n("Promise"))).resolve()
                    );
                }
                return o("WAWebOrchestratorNonPersistedJob")
                  .createNonPersistedJob(
                    "continueProgressiveHistorySyncProcessingV2",
                    (function () {
                      var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n) {
                          return (
                            o("WALogger").LOG(
                              Z ||
                                (Z = babelHelpers.taggedTemplateLiteralLoose([
                                  "[history sync][continueProgressiveHistorySyncProcessingV2] job is scheduled, source: ",
                                  "",
                                ])),
                              e,
                            ),
                            t.$18()
                          );
                        },
                      );
                      return function (e) {
                        return r.apply(this, arguments);
                      };
                    })(),
                    {
                      priority: o("WAJobOrchestratorTypes").JOB_PRIORITY
                        .HISTORY_SYNC,
                      maxTimeoutMs: 12e4,
                    },
                  )
                  .waitUntilCompleted()
                  .catch(function (e) {
                    var t = r("getErrorSafe")(e);
                    o("WALogger")
                      .ERROR(
                        ee ||
                          (ee = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] error while running job",
                          ])),
                      )
                      .catching(t);
                  });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getIsHistorySyncRunning = function () {
            var e = o("WAWebJobOrchestrator").getInstance(),
              t = e.getSnapshot(
                o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
              );
            return t != null &&
              t.continueProgressiveHistorySyncProcessingV2 != null
              ? t.continueProgressiveHistorySyncProcessingV2 > 0
              : !1;
          }),
          t
        );
      })(),
      _e = new pe();
    (o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        (o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.CriticalSync,
        ),
          yield _e.setInitialChatHistorySynced());
      }),
    ),
      o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
        _e.initState();
      }),
      o("WAWebBackendEventBus").BackendEventBus.onRecentChatHistorySynced(
        function () {
          var e = o("WAWebJobOrchestrator").getInstance();
          (o("WALogger").LOG(
            te ||
              (te = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][continueProgressiveHistorySyncProcessingV2] clearing bucket queue for type ",
                "",
              ])),
            o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
          ),
            e.clearQueueByPriority(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
            ));
        },
      ),
      o("WAWebBackendEventBus").BackendEventBus.onFullChatHistorySynced(
        function () {
          var e = o("WAWebJobOrchestrator").getInstance();
          (o("WALogger").LOG(
            ne ||
              (ne = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][continueProgressiveHistorySyncProcessingV2] clearing bucket queue for type ",
                "",
              ])),
            o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
          ),
            e.clearQueueByPriority(
              o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
            ));
        },
      ));
    var fe = _e;
    l.default = fe;
  },
  98,
);
