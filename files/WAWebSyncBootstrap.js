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
    "WAWebBrokerGlobalAppState",
    "WAWebClientFeatureFlags",
    "WAWebCoreActionsODS",
    "WAWebDbEncryptionKey",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebFetchOwnUsernameOnPairing",
    "WAWebForceFlushWamBuffers",
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
    "requireDeferred",
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
      ae,
      ie,
      le,
      se,
      ue,
      ce = r("requireDeferred")("WAWebBootstrapNewsletter").__setRef(
        "WAWebSyncBootstrap",
      ),
      de = r("qpl")._(891423540, "2533"),
      me =
        n("cr:17219") == null
          ? void 0
          : n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator").WAWebSyncBootstrap,
            ),
      pe = 40,
      _e = 20,
      fe = 180,
      ge = n("$InternalEnum").Mirrored([
        "NotStarted",
        "InProcess",
        "Completed",
      ]),
      he = { initialChatHistory: !1, readReceipts: !1, syncdCritical: !1 },
      ye = { initialChatHistoryTotalMsg: -1, initialChatHistoryTotalChats: -1 },
      Ce = 20,
      be = (function () {
        function t() {
          ((this.$1 = {}),
            (this.$2 = ye),
            (this.$6 = !1),
            (this.$7 = null),
            (this.$8 = ve()),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = !1),
            this.initState());
        }
        var a = t.prototype;
        return (
          (a.initState = function () {
            ((this.$1 = babelHelpers.extends({}, he)),
              (this.$2 = babelHelpers.extends({}, ye)),
              (this.$3 = ge.NotStarted),
              (this.$4 = ge.NotStarted),
              (this.$5 = ge.NotStarted),
              this.resetPushNameMutationTrace());
          }),
          (a.resetPushNameMutationTrace = function () {
            this.$8 = ve();
          }),
          (a.recordPushNameMutationTrace = function (t, n, r, o, a) {
            var e = this.$8;
            ((e.criticalBlockMutations += t),
              (e.criticalUnblockLowMutations += n),
              (e.handlerStarted += r),
              (e.handlerSuccess += o),
              (e.handlerFailed += a));
          }),
          (a.logPushNameMutationTrace = function (n) {
            var t = this.$8;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[bootstrap][syncd] critical collection trace: check=",
                  ", criticalBlockMutations=",
                  ", criticalUnblockLowMutations=",
                  ", pushNameHandlerStarted=",
                  ", pushNameHandlerSuccess=",
                  ", pushNameHandlerFailed=",
                  "",
                ])),
              n,
              t.criticalBlockMutations,
              t.criticalUnblockLowMutations,
              t.handlerStarted,
              t.handlerSuccess,
              t.handlerFailed,
            );
          }),
          (a.$12 = function () {
            for (var e in this.$1) if (!this.$1[e]) return !1;
            return !0;
          }),
          (a.$13 = (function () {
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
                  this.$12() &&
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
          (a.$14 = (function () {
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
                  (yield o("WAPromiseDelays").delayMs(_e * 1e3),
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
          (a.$15 = function (t) {
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
                (ue || (ue = n("Promise"))).resolve()
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
          (a.setReadReceiptsSynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield this.$13("readReceipts");
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setInitialChatHistorySynced = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield this.$13("initialChatHistory"),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] initial chat history synced.",
                    ])),
                ),
                o("WAWebSyncdGetChat").logLidPnChatDistribution({}),
                Se.continueProgressiveHistorySyncProcessingV2(
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
              ((this.$3 = ge.Completed),
                !this.$1.syncdCritical && (yield this.$13("syncdCritical")));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.syncNonCriticalData = function () {
            var e = this,
              t = [];
            ((this.$5 = ge.InProcess),
              o("WAWebQueryAndUpdateGroupMetadataJob")
                .queryAndUpdateAllGroupMetadata({ isHistorySyncInProgress: !0 })
                .then(function () {
                  ((t = o(
                    "WAWebNonAddressBookContactsJob",
                  ).getAllContactsFromChatCollectionIntoChunks()),
                    e.$15(t[0]).catch(function (e) {
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
                    e.$14(t[0], t.slice(1, t.length));
                  }, pe * 1e3);
                })
                .finally(function () {
                  e.$5 = ge.Completed;
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
              o("WAWebFetchAndUpdateBlocklistJob").fetchAndUpdateBlocklist(
                "bootstrap",
              ),
              o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                "updateOptOutList",
              ),
              ce.load().then(function (e) {
                var t = e.bootstrapNewsletterBackend;
                return t();
              }),
              o(
                "WAWebFetchOwnUsernameOnPairing",
              ).initOwnUsernameFetchOnPairing(),
              (this.$4 = ge.InProcess),
              o("WAWebSyncd")
                .markCollectionsForSync([
                  o("WAWebSyncdConst").CollectionName.Regular,
                  o("WAWebSyncdConst").CollectionName.RegularLow,
                  o("WAWebSyncdConst").CollectionName.RegularHigh,
                ])
                .then(function () {
                  var t;
                  ((e.$4 = ge.Completed),
                    me == null || (t = me.contacts) == null || t.initialize());
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
            return this.$3 === ge.InProcess;
          }),
          (a.isSyncDBootstrapInProcess = function () {
            return this.$3 === ge.InProcess || this.$4 === ge.InProcess;
          }),
          (a.isSyncDBootstrapGroupMetadataQueryInProcess = function () {
            return this.$5 === ge.InProcess;
          }),
          (a.$16 = function () {
            var e = this;
            this.$7 == null &&
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] setting critical data syncd timeout (",
                    ")",
                  ])),
                fe,
              ),
              (this.$7 = self.setTimeout(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  e.logPushNameMutationTrace("timeout");
                  var t = yield e.$17("timeout");
                  if (!t) {
                    try {
                      var n = yield e.getCriticalSyncDebugSummary();
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
                        n,
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
                  var r = yield o(
                    "WAWebUserPrefsHistorySync",
                  ).getInitialHistorySyncComplete();
                  if (r !== !0) {
                    try {
                      var a = yield e.getCriticalSyncDebugSummary();
                      (o("WALogger").LOG(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[bootstrap][history-sync] history sync debug summary: ",
                            "",
                          ])),
                        a,
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
                fe * 1e3,
              )));
          }),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield o("WAWebSyncdDb").getSyncActionsRows(
                    ["action"],
                    [o("WAWebSyncdConst").Actions.SettingPushName],
                  ),
                  n = t.filter(function (e) {
                    return (
                      e.actionState ===
                      o("WAWebSyncdConst").SyncActionState.Success
                    );
                  }).length,
                  r = t
                    .map(function (e) {
                      var t;
                      return (t = e.actionState) != null ? t : "null";
                    })
                    .join(","),
                  a = n > 0;
                return (
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][syncd] push name persistence check: source=",
                        ", complete=",
                        ", actionRows=",
                        ", successRows=",
                        ", actionStates=",
                        "",
                      ])),
                    e,
                    a,
                    t.length,
                    n,
                    r || "none",
                  ),
                  a
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setSyncDCriticalDataSyncCompleted = function () {
            this.$7 != null &&
              (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][syncd] critical data completion WAM: session ID lookup start",
                  ])),
              ),
              o("WAWebSyncdMdSyncFieldstatMeta")
                .MdSyncFieldStatsMeta.getMdSessionId()
                .then(function (e) {
                  (o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap][syncd] critical data completion WAM: session ID lookup end",
                      ])),
                  ),
                    new (o(
                      "WAWebMdBootstrapDataAppliedWamEvent",
                    ).MdBootstrapDataAppliedWamEvent)({
                      mdBootstrapPayloadType: o(
                        "WAWebWamEnumMdBootstrapPayloadType",
                      ).MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL,
                      mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource")
                        .MD_BOOTSTRAP_SOURCE.APP_STATE,
                      mdSessionId: e,
                      mdTimestamp: o("WATimeUtils").unixTimeMs(),
                    }).commit(),
                    o("WALogger").LOG(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap][syncd] critical data completion WAM: commit scheduled",
                        ])),
                    ));
                })
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap][syncd] critical data completion WAM: commit failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }));
          }),
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
              (this.resetPushNameMutationTrace(),
                r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                    .INITIAL_PAIRING,
                ),
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap][history sync] need to sync critical data: true",
                    ])),
                ));
              var t = yield this.getCriticalSyncDebugSummary();
              (o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] ",
                    "",
                  ])),
                t,
              ),
                o("WALogger")
                  .LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "[bootstrap] syncing my device list",
                      ])),
                  )
                  .tags("history-sync"));
              var a = o(
                  "WAWebSyncDeviceAdvDeviceListJob",
                ).syncMyDeviceListJob(),
                i = new (ue || (ue = n("Promise")))(function (t, n) {
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
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
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
              (this.$16(), (this.$3 = ge.InProcess));
              var l = a
                  .then(function () {
                    return o("WAWebSyncd").markCollectionsForSync([
                      o("WAWebSyncdConst").CollectionName.CriticalBlock,
                      o("WAWebSyncdConst").CollectionName.CriticalUnblockLow,
                    ]);
                  })
                  .then(
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      if (
                        (o("WALogger").LOG(
                          A ||
                            (A = babelHelpers.taggedTemplateLiteralLoose([
                              "[bootstrap][syncd] critical collection processing completed: state=",
                              ", syncdCritical=",
                              "",
                            ])),
                          e.$3,
                          e.$1.syncdCritical,
                        ),
                        e.logPushNameMutationTrace("post_collection"),
                        !e.$1.syncdCritical)
                      ) {
                        var t = yield e.$17("post_collection");
                        t &&
                          (yield e.setSyncDCriticalSynced(),
                          e.setSyncDCriticalDataSyncCompleted());
                      }
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
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "failed to sync default disappearing mode",
                        ])),
                    )
                    .catching(t)
                    .verbose()
                    .sendLogs(
                      "failed initial sync of default disappearing mode",
                    );
                });
              yield ue.all([i, l, u]);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
              ) {
                o("WALogger")
                  .LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] no chunk found",
                      ])),
                  )
                  .tags("history-sync");
                return;
              }
              var t = o("QPLFlow").startQPLFlow(de, {
                annotations: { int: { syncType: e.syncType } },
                timeoutInMs: 12e4,
              });
              try {
                if (
                  (o("WALogger").LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
                        .recentSyncChunkHandlingTriedCount[n] > Ce &&
                        o("WALogger")
                          .ERROR(
                            q ||
                              (q = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              o("WALogger").LOG(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] job starts",
                  ])),
              );
              try {
                (yield o(
                  "WAWebDbEncryptionKey",
                ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                  yield this.$18());
              } catch (t) {
                var e = r("getErrorSafe")(t);
                o("WALogger")
                  .ERROR(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] _progressiveHistorySyncRun failed",
                      ])),
                  )
                  .catching(e);
              }
              o("WALogger").LOG(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] finish main flow",
                  ])),
              );
              var t = yield o(
                "WAWebUserPrefsHistorySync",
              ).getHistorySyncStatus();
              if ((t == null ? void 0 : t.recentCompleted) === !0) {
                var n = !0;
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
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
                        z ||
                          (z = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on demand notifications",
                          ])),
                      ),
                  o("WAWebClientFeatureFlags").isFeatureEnabled(
                    "debug_1_year_history_sync",
                  ))
                ) {
                  o("WALogger").LOG(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
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
                        K ||
                          (K = babelHelpers.taggedTemplateLiteralLoose([
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
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync is incompleted, check remaining recent sync notifications",
                  ])),
              );
              var l = yield o(
                "WAWebHistorySyncNotificationUtils",
              ).getUnprocessedRecentSyncNotifications();
              if (l.length === 0) {
                o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications",
                    ])),
                );
                return;
              }
              var s = l[0].chunkOrder;
              if (s == null) {
                o("WALogger").LOG(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
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
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications with correct chunk order",
                    ])),
                );
                return;
              }
              if (
                (u == null ? void 0 : u.chunkOrder) === this.$9 &&
                s === this.$10
              ) {
                (this.$11 ||
                  ((this.$11 = !0),
                  o("WALogger")
                    .ERROR(
                      ee ||
                        (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                ((this.$9 = u == null ? void 0 : u.chunkOrder),
                (this.$10 = s),
                o("WAWebApiHistorySyncNotification")
                  .recentSyncChunkHandlingTriedCount[l[0].msgKey] > Ce)
              ) {
                o("WALogger").LOG(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as recent notification with order ",
                      " fails too many times",
                    ])),
                  s,
                );
                return;
              }
              (o("WALogger").LOG(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
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
                      re ||
                        (re = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as initial chat sync is incomplete",
                        ])),
                    ),
                    (ue || (ue = n("Promise"))).resolve()
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
                        oe ||
                          (oe = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as recent sync is complete when starting backend",
                          ])),
                      ),
                      (ue || (ue = n("Promise"))).resolve()
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
                              ae ||
                                (ae = babelHelpers.taggedTemplateLiteralLoose([
                                  "[history sync][continueProgressiveHistorySyncProcessingV2] job is scheduled, source: ",
                                  "",
                                ])),
                              e,
                            ),
                            t.$19()
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
                        ie ||
                          (ie = babelHelpers.taggedTemplateLiteralLoose([
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
      })();
    function ve() {
      return {
        criticalBlockMutations: 0,
        criticalUnblockLowMutations: 0,
        handlerStarted: 0,
        handlerSuccess: 0,
        handlerFailed: 0,
      };
    }
    var Se = new be();
    (o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        (o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.CriticalSync,
        ),
          yield Se.setInitialChatHistorySynced());
      }),
    ),
      o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
        Se.initState();
      }),
      o("WAWebBackendEventBus").BackendEventBus.onRecentChatHistorySynced(
        function () {
          var e = o("WAWebJobOrchestrator").getInstance();
          (o("WALogger").LOG(
            le ||
              (le = babelHelpers.taggedTemplateLiteralLoose([
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
            se ||
              (se = babelHelpers.taggedTemplateLiteralLoose([
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
    var Re = Se;
    l.default = Re;
  },
  98,
);
