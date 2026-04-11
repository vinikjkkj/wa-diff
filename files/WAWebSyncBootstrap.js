__d(
  "WAWebSyncBootstrap",
  [
    "$InternalEnum",
    "Promise",
    "QPLFlow",
    "WAAsyncSleep",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseDelays",
    "WASyncdConst",
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
    "WAWebQueryBlockListJob",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSocketLogoutJob",
    "WAWebSyncContactJob",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebSyncd",
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
    "WAWebWamUtils",
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
      oe,
      ae = r("qpl")._(891423540, "2533"),
      ie = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge(),
      le = 40,
      se = 20,
      ue = 180,
      ce = n("$InternalEnum").Mirrored([
        "NotStarted",
        "InProcess",
        "Completed",
      ]),
      de = { initialChatHistory: !1, readReceipts: !1, syncdCritical: !1 },
      me = { initialChatHistoryTotalMsg: -1, initialChatHistoryTotalChats: -1 },
      pe = 20,
      _e = (function () {
        function e() {
          ((this.$1 = {}),
            (this.$2 = me),
            (this.$6 = !1),
            (this.$7 = null),
            (this.$8 = null),
            (this.$9 = null),
            (this.$10 = !1),
            this.initState());
        }
        var t = e.prototype;
        return (
          (t.initState = function () {
            ((this.$1 = babelHelpers.extends({}, de)),
              (this.$2 = babelHelpers.extends({}, me)),
              (this.$3 = ce.NotStarted),
              (this.$4 = ce.NotStarted),
              (this.$5 = ce.NotStarted));
          }),
          (t.$11 = function () {
            for (var e in this.$1) if (!this.$1[e]) return !1;
            return !0;
          }),
          (t.$12 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap][history sync] completed sync for ",
                      "",
                    ])),
                  e,
                ),
                  (this.$1[e] = !0),
                  this.$11() &&
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  (yield o("WAPromiseDelays").delayMs(se * 1e3),
                    yield o("WAWebSyncContactJob").syncContactListJob(
                      r,
                      !0,
                      "query",
                    ));
                }
                o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.$14 = function (t) {
            if (t == null)
              return (
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "syncMostRecentDevices has no contact to sync during bootstrap",
                      ])),
                  )
                  .tags("contact-sync"),
                (oe || (oe = n("Promise"))).resolve()
              );
            o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Sync device failed",
                      ])),
                  )
                  .verbose()
                  .sendLogs("Sync device failed: " + String(e));
              });
          }),
          (t.setReadReceiptsSynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield this.$12("readReceipts");
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.setInitialChatHistorySynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield this.$12("initialChatHistory"),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] initial chat history synced.",
                    ])),
                ),
                o("WAWebSyncdGetChat").logLidPnChatDistribution({}),
                fe.continueProgressiveHistorySyncProcessingV2(
                  o("WAWebHistorySyncNotificationUtils")
                    .HistorySyncScheduleSource.InitialSyncComplete,
                ));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.setSyncDCriticalSynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((this.$3 = ce.Completed),
                !this.$1.syncdCritical && (yield this.$12("syncdCritical")));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.syncNonCriticalData = function () {
            var e = this,
              t = [];
            ((this.$5 = ce.InProcess),
              o("WAWebQueryAndUpdateGroupMetadataJob")
                .queryAndUpdateAllGroupMetadata({ isHistorySyncInProgress: !0 })
                .then(function () {
                  ((t = o(
                    "WAWebNonAddressBookContactsJob",
                  ).getAllContactsFromChatCollectionIntoChunks()),
                    e.$14(t[0]).catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
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
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
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
                  }, le * 1e3);
                })
                .finally(function () {
                  e.$5 = ce.Completed;
                }),
              o("WAWebHandleAccountSyncNotification")
                .getAndUpdateStatus()
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
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
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap] profile picture sync failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("bootstrap-profile-picture-sync-failed", {
                      sampling: 0.01,
                    });
                }),
              o("WAWebQueryBlockListJob").fetchAndUpdateBlocklist("bootstrap"),
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "updateOptOutList",
              ),
              o("WAWebBootstrapNewsletter").bootstrapNewsletterBackend(),
              o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).usernameCreationOrReservationEnabled()
                ? o("WAWebGetUsernameQueryJob").getUsernameJob()
                : o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][history sync] username disabled, skipping get username query",
                      ])),
                  ),
              (this.$4 = ce.InProcess),
              o("WAWebSyncd")
                .markCollectionsForSync([
                  o("WASyncdConst").CollectionName.Regular,
                  o("WASyncdConst").CollectionName.RegularLow,
                  o("WASyncdConst").CollectionName.RegularHigh,
                ])
                .then(function () {
                  var t;
                  ((e.$4 = ce.Completed),
                    ie == null || (t = ie.contacts) == null || t.initialize());
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap] mark collection for sync failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("bootstrap-mark-collection-for-sync-failed", {
                      sampling: 0.01,
                    });
                }));
          }),
          (t.markInitialHistorySyncCountDebugStats = function (t, n) {
            this.$2 = {
              initialChatHistoryTotalMsg: t,
              initialChatHistoryTotalChats: n,
            };
          }),
          (t.isSyncDCriticalDataSyncInProcess = function () {
            return this.$3 === ce.InProcess;
          }),
          (t.isSyncDBootstrapInProcess = function () {
            return this.$3 === ce.InProcess || this.$4 === ce.InProcess;
          }),
          (t.isSyncDBootstrapGroupMetadataQueryInProcess = function () {
            return this.$5 === ce.InProcess;
          }),
          (t.$15 = function () {
            var e = this;
            this.$7 == null &&
              (o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] setting critical data syncd timeout (",
                    ")",
                  ])),
                ue,
              ),
              (this.$7 = self.setTimeout(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  if (!(yield e.$16())) {
                    try {
                      var t = yield e.getCriticalSyncDebugSummary();
                      (o("WALogger").LOG(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose(
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
                            L ||
                              (L = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][syncd] syncd critical data timeout exceeded, logging out.",
                              ])),
                          )
                          .tags("bootstrap", "syncd", "logout")
                          .sendLogs("bootstrap-syncd-timeout-logout", {
                            sampling: 0.1,
                          }),
                        yield o("WAAsyncSleep").asyncSleep(5e3));
                    } catch (e) {}
                    (o(
                      "WAWebMetricsAttributionActions",
                    ).stopAllHistorySyncAttributionTracking(),
                      o("WAWebWamUtils").forceFlushAllWamAndQplBuffers(),
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
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "[bootstrap][history-sync] history sync debug summary: ",
                            "",
                          ])),
                        r,
                      ),
                        o("WALogger")
                          .ERROR(
                            k ||
                              (k = babelHelpers.taggedTemplateLiteralLoose([
                                "[bootstrap][history-sync] history sync critical data timeout exceeded, logging out.",
                              ])),
                          )
                          .tags("bootstrap", "history-sync", "logout")
                          .sendLogs("bootstrap-history-sync-timeout-logout", {
                            sampling: 0.1,
                          }),
                        yield o("WAAsyncSleep").asyncSleep(5e3));
                    } catch (e) {}
                    (o("WAWebWamUtils").forceFlushAllWamAndQplBuffers(),
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
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][history sync] all critical data synced within timeout period",
                      ])),
                  );
                }),
                ue * 1e3,
              )));
          }),
          (t.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAWebSyncdDb").getSyncActionsRows(
                ["action"],
                [o("WASyncdConst").Actions.SettingPushName],
              );
              return (
                e.length > 0 &&
                e.find(function (e) {
                  return (
                    e.actionState === o("WASyncdConst").SyncActionState.Success
                  );
                }) != null
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.setSyncDCriticalDataSyncCompleted = (function () {
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
          (t.getCriticalSyncDebugSummary = (function () {
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
          (t.isCriticalDataSynced = (function () {
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
          (t.syncCriticalData = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              (r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                  .INITIAL_PAIRING,
              ),
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap][history sync] need to sync critical data: true",
                    ])),
                ));
              var t = yield this.getCriticalSyncDebugSummary();
              (o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] ",
                    "",
                  ])),
                t,
              ),
                o("WALogger")
                  .LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap] syncing my device list",
                      ])),
                  )
                  .tags("history-sync"));
              var a = o(
                  "WAWebSyncDeviceAdvDeviceListJob",
                ).syncMyDeviceListJob(),
                i = new (oe || (oe = n("Promise")))(function (t, n) {
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
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
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
              (this.$15(), (this.$3 = ce.InProcess));
              var l = a
                  .then(function () {
                    return o("WAWebSyncd").markCollectionsForSync([
                      o("WASyncdConst").CollectionName.CriticalBlock,
                      o("WASyncdConst").CollectionName.CriticalUnblockLow,
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
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "failed to sync default disappearing mode",
                        ])),
                    )
                    .catching(t)
                    .verbose()
                    .sendLogs(
                      "failed initial sync of default disappearing mode",
                    );
                });
              yield oe.all([i, l, u]);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  (e.addPoint("fetch_chunk_start"),
                  !o("WAWebBackendEventBus").BackendEventBus
                    .isMainStreamReadyMd)
                ) {
                  o("WALogger")
                    .LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] Skip processLoop, until main is loaded",
                        ])),
                    )
                    .tags("history-sync");
                  return;
                }
                var t = yield o(
                  "WAWebApiHistorySyncNotification",
                ).fetchNextHistorySyncChunkForProcessing();
                if (!t) {
                  o("WALogger")
                    .LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] no chunk found",
                        ])),
                    )
                    .tags("history-sync");
                  return;
                }
                if (
                  (o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] processLoop picked up chunk",
                      ])),
                  ),
                  t.syncType ===
                    o("WAWebProtobufsHistorySync.pb")
                      .HistorySync$HistorySyncType.RECENT &&
                    t.chunkOrder != null)
                ) {
                  var n = t.msgKey;
                  o("WAWebApiHistorySyncNotification")
                    .recentSyncChunkHandlingTriedCount[n] != null
                    ? (o("WAWebApiHistorySyncNotification")
                        .recentSyncChunkHandlingTriedCount[n]++,
                      o("WAWebApiHistorySyncNotification")
                        .recentSyncChunkHandlingTriedCount[n] > pe &&
                        o("WALogger")
                          .ERROR(
                            A ||
                              (A = babelHelpers.taggedTemplateLiteralLoose([
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
                (e.addPoint("fetch_chunk_end", {
                  int: { syncType: t.syncType },
                }),
                  t.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .RECENT
                    ? yield o(
                        "WAWebHandleWorkerCompatibleRecentSyncChunk",
                      ).handleWorkerCompatibleRecentSyncChunk(t, e)
                    : yield o(
                        "WAWebHandleHistorySyncChunk",
                      ).handleHistorySyncChunk(t));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.$18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] job starts",
                  ])),
              );
              var e = o("QPLFlow").startQPLFlow(ae, { timeoutInMs: 6e5 });
              try {
                (yield o(
                  "WAWebDbEncryptionKey",
                ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                  yield this.$17(e),
                  e.endSuccess());
              } catch (n) {
                var t = r("getErrorSafe")(n);
                (e.endFail(
                  o("getSafeQplErrorMessage").getSafeQPLErrorMessage(n),
                ),
                  o("WALogger")
                    .ERROR(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] _progressiveHistorySyncRun failed",
                        ])),
                    )
                    .catching(t));
              }
              o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] finish main flow",
                  ])),
              );
              var n = yield o(
                "WAWebUserPrefsHistorySync",
              ).getHistorySyncStatus();
              if ((n == null ? void 0 : n.recentCompleted) === !0) {
                var a = !0;
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining on demand sync notifications",
                    ])),
                );
                var i = yield o("WAWebSchemaHistorySyncNotification")
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
                  (i.length > 0
                    ? ((a = !1),
                      this.continueProgressiveHistorySyncProcessingV2(
                        o("WAWebHistorySyncNotificationUtils")
                          .HistorySyncScheduleSource.LastProcessedNotification,
                      ))
                    : o("WALogger").LOG(
                        q ||
                          (q = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on demand notifications",
                          ])),
                      ),
                  o("WAWebClientFeatureFlags").isFeatureEnabled(
                    "debug_1_year_history_sync",
                  ))
                ) {
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining full sync notifications",
                      ])),
                  );
                  var l = yield o("WAWebSchemaHistorySyncNotification")
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
                  l.length > 0
                    ? ((a = !1),
                      this.continueProgressiveHistorySyncProcessingV2(
                        o("WAWebHistorySyncNotificationUtils")
                          .HistorySyncScheduleSource.LastProcessedNotification,
                      ))
                    : o("WALogger").LOG(
                        V ||
                          (V = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on full sync notifications",
                          ])),
                      );
                }
                a &&
                  o(
                    "WAWebMetricsAttributionActions",
                  ).stopAllHistorySyncAttributionTracking();
                return;
              }
              o("WALogger").LOG(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync is incompleted, check remaining recent sync notifications",
                  ])),
              );
              var s = yield o(
                "WAWebHistorySyncNotificationUtils",
              ).getUnprocessedRecentSyncNotifications();
              if (s.length === 0) {
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications",
                    ])),
                );
                return;
              }
              var u = s[0].chunkOrder;
              if (u == null) {
                o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as first recent notification doesn't have chunk order",
                    ])),
                );
                return;
              }
              var c = yield o(
                "WAWebUserPrefsHistorySync",
              ).getLastHistoryRecentSyncedChunk();
              if (
                (o("WALogger").LOG(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] next unprocessed recent notification has chunk order: ",
                      ", last chunk order: ",
                      "",
                    ])),
                  u,
                  c == null ? void 0 : c.chunkOrder,
                ),
                c != null && c.chunkOrder + 1 !== u && u !== 1)
              ) {
                o("WALogger").LOG(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications with correct chunk order",
                    ])),
                );
                return;
              }
              if (
                (c == null ? void 0 : c.chunkOrder) === this.$8 &&
                u === this.$9
              ) {
                (this.$10 ||
                  ((this.$10 = !0),
                  o("WALogger")
                    .ERROR(
                      Q ||
                        (Q = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync] loop detected, unexpected last chunk order",
                        ])),
                    )
                    .sendLogs("history-sync-unexpected-chunk-order", {
                      sampling: 0.01,
                    })),
                  yield o("WAAsyncSleep").asyncSleep(5e3));
                return;
              }
              if (
                ((this.$8 = c == null ? void 0 : c.chunkOrder),
                (this.$9 = u),
                o("WAWebApiHistorySyncNotification")
                  .recentSyncChunkHandlingTriedCount[s[0].msgKey] > pe)
              ) {
                o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as recent notification with order ",
                      " fails too many times",
                    ])),
                  u,
                );
                return;
              }
              (o("WALogger").LOG(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.continueProgressiveHistorySyncProcessingV2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (!this.$6 && this.$1.initialChatHistory !== !0)
                  return (
                    o("WALogger").LOG(
                      J ||
                        (J = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as initial chat sync is incomplete",
                        ])),
                    ),
                    (oe || (oe = n("Promise"))).resolve()
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
                        Z ||
                          (Z = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as recent sync is complete when starting backend",
                          ])),
                      ),
                      (oe || (oe = n("Promise"))).resolve()
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
                              ee ||
                                (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                        te ||
                          (te = babelHelpers.taggedTemplateLiteralLoose([
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
          (t.getIsHistorySyncRunning = function () {
            var e = o("WAWebJobOrchestrator").getInstance(),
              t = e.getSnapshot(
                o("WAJobOrchestratorTypes").JOB_PRIORITY.HISTORY_SYNC,
              );
            return t != null &&
              t.continueProgressiveHistorySyncProcessingV2 != null
              ? t.continueProgressiveHistorySyncProcessingV2 > 0
              : !1;
          }),
          e
        );
      })(),
      fe = new _e();
    (o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        (o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.CriticalSync,
        ),
          yield fe.setInitialChatHistorySynced());
      }),
    ),
      o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
        fe.initState();
      }),
      o("WAWebBackendEventBus").BackendEventBus.onRecentChatHistorySynced(
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
      ),
      o("WAWebBackendEventBus").BackendEventBus.onFullChatHistorySynced(
        function () {
          var e = o("WAWebJobOrchestrator").getInstance();
          (o("WALogger").LOG(
            re ||
              (re = babelHelpers.taggedTemplateLiteralLoose([
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
    var ge = fe;
    l.default = ge;
  },
  98,
);
