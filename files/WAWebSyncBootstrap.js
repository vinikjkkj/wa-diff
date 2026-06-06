__d(
  "WAWebSyncBootstrap",
  [
    "$InternalEnum",
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
      ae = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge(),
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
        function e() {
          ((this.$1 = {}),
            (this.$2 = de),
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
            ((this.$1 = babelHelpers.extends({}, ce)),
              (this.$2 = babelHelpers.extends({}, de)),
              (this.$3 = ue.NotStarted),
              (this.$4 = ue.NotStarted),
              (this.$5 = ue.NotStarted));
          }),
          (t.$11 = function () {
            for (var e in this.$1) if (!this.$1[e]) return !1;
            return !0;
          }),
          (t.$12 = async function (t) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bootstrap][history sync] completed sync for ",
                  "",
                ])),
              t,
            ),
              (this.$1[t] = !0),
              this.$11() &&
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap][history sync] critical sync done",
                    ])),
                ),
                await o(
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
          }),
          (t.$13 = async function (t, n) {
            (o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "start contact sync for ",
                    " chunks of contacts during the initial sync",
                  ])),
                t ? n.length + 1 : 0,
              )
              .tags("contact-sync"),
              t != null &&
                (await o("WAWebSyncContactJob").syncContactListJob(
                  Array.from(t),
                  !1,
                  "query",
                )));
            for (var e = 0; e < n.length; e++) {
              var r = Array.from(n[e]);
              (await o("WAPromiseDelays").delayMs(le * 1e3),
                await o("WAWebSyncContactJob").syncContactListJob(
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
          }),
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
                Promise.resolve()
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
          (t.setReadReceiptsSynced = async function () {
            await this.$12("readReceipts");
          }),
          (t.setInitialChatHistorySynced = async function () {
            (await this.$12("initialChatHistory"),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] initial chat history synced.",
                  ])),
              ),
              o("WAWebSyncdGetChat").logLidPnChatDistribution({}),
              _e.continueProgressiveHistorySyncProcessingV2(
                o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                  .InitialSyncComplete,
              ));
          }),
          (t.setSyncDCriticalSynced = async function () {
            ((this.$3 = ue.Completed),
              !this.$1.syncdCritical && (await this.$12("syncdCritical")));
          }),
          (t.syncNonCriticalData = function () {
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
              (this.$4 = ue.InProcess),
              o("WAWebSyncd")
                .markCollectionsForSync([
                  o("WASyncdConst").CollectionName.Regular,
                  o("WASyncdConst").CollectionName.RegularLow,
                  o("WASyncdConst").CollectionName.RegularHigh,
                ])
                .then(function () {
                  var t;
                  ((e.$4 = ue.Completed),
                    ae == null || (t = ae.contacts) == null || t.initialize());
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
            return this.$3 === ue.InProcess;
          }),
          (t.isSyncDBootstrapInProcess = function () {
            return this.$3 === ue.InProcess || this.$4 === ue.InProcess;
          }),
          (t.isSyncDBootstrapGroupMetadataQueryInProcess = function () {
            return this.$5 === ue.InProcess;
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
                se,
              ),
              (this.$7 = self.setTimeout(async function () {
                if (!(await e.$16())) {
                  try {
                    var t = await e.getCriticalSyncDebugSummary();
                    (o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "[bootstrap][syncd] syncDCriticalDataState: ",
                            `
syncDNonCriticalDataState: `,
                            `
debugSummary: `,
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
                      await o("WAAsyncSleep").asyncSleep(5e3));
                  } catch (e) {}
                  (o(
                    "WAWebMetricsAttributionActions",
                  ).stopAllHistorySyncAttributionTracking(),
                    o("WAWebWamUtils").forceFlushAllWamAndQplBuffers(),
                    o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                      "syncd critical data timeout exceeded, logging out",
                    ),
                    o("WAWebCoreActionsODS").logSessionForcedLogout(),
                    await o("WAWebSocketLogoutJob").socketLogout(
                      o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout,
                    ));
                }
                var n = await o(
                  "WAWebUserPrefsHistorySync",
                ).getInitialHistorySyncComplete();
                if (n !== !0) {
                  try {
                    var r = await e.getCriticalSyncDebugSummary();
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
                      await o("WAAsyncSleep").asyncSleep(5e3));
                  } catch (e) {}
                  (o("WAWebWamUtils").forceFlushAllWamAndQplBuffers(),
                    o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                      "history sync critical data timeout exceeded, logging out",
                    ),
                    o("WAWebCoreActionsODS").logSessionForcedLogout(),
                    await o("WAWebSocketLogoutJob").socketLogout(
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
              }, se * 1e3)));
          }),
          (t.$16 = async function () {
            var e = await o("WAWebSyncdDb").getSyncActionsRows(
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
          }),
          (t.setSyncDCriticalDataSyncCompleted = async function () {
            this.$7 != null &&
              (await new (o(
                "WAWebMdBootstrapDataAppliedWamEvent",
              ).MdBootstrapDataAppliedWamEvent)({
                mdBootstrapPayloadType: o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL,
                mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource")
                  .MD_BOOTSTRAP_SOURCE.APP_STATE,
                mdSessionId: await o(
                  "WAWebSyncdMdSyncFieldstatMeta",
                ).MdSyncFieldStatsMeta.getMdSessionId(),
                mdTimestamp: o("WATimeUtils").unixTimeMs(),
              }).commitAndWaitForFlush(!0));
          }),
          (t.getCriticalSyncDebugSummary = async function () {
            if (await this.isCriticalDataSynced())
              return `-------
All critical data synced
-------

`;
            var e = await o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            return (
              `-------
 Initial history sync complete: ` +
              (e ? "true" : this.$1.initialChatHistory.toString()) +
              `
 Initial msgs: ` +
              this.$2.initialChatHistoryTotalMsg +
              ", initial chats: " +
              this.$2.initialChatHistoryTotalChats +
              `
 Receipt sync complete: ` +
              this.$1.readReceipts.toString() +
              ` 
 ` +
              ("Critical collection sync complete: " +
                this.$1.syncdCritical.toString() +
                ` 
-------
`)
            );
          }),
          (t.isCriticalDataSynced = async function () {
            return (
              (this.$6 =
                this.$6 ||
                (await o(
                  "WAWebUserPrefsAppStateSync",
                ).getAllCriticalDataSynced())),
              this.$6
            );
          }),
          (t.syncCriticalData = async function () {
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
            var t = await this.getCriticalSyncDebugSummary();
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
            var n = o("WAWebSyncDeviceAdvDeviceListJob").syncMyDeviceListJob(),
              a = new Promise(function (t, n) {
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
            (this.$15(), (this.$3 = ue.InProcess));
            var i = n
                .then(function () {
                  return o("WAWebSyncd").markCollectionsForSync([
                    o("WASyncdConst").CollectionName.CriticalBlock,
                    o("WASyncdConst").CollectionName.CriticalUnblockLow,
                  ]);
                })
                .then(async function () {
                  e.$1.syncdCritical ||
                    ((await e.$16()) &&
                      (await e.setSyncDCriticalSynced(),
                      await e.setSyncDCriticalDataSyncCompleted()));
                }),
              l = await o(
                "WAWebUserPrefsHistorySync",
              ).getInitialHistorySyncComplete();
            l === !0 && (await this.setInitialChatHistorySynced());
            var s = o("WAWebAccountSyncJob")
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
                  .sendLogs("failed initial sync of default disappearing mode");
              });
            await Promise.all([a, i, s]);
          }),
          (t.$17 = async function () {
            if (
              !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
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
            var e = await o(
              "WAWebApiHistorySyncNotification",
            ).fetchNextHistorySyncChunkForProcessing();
            if (!e) {
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
            var t = o("QPLFlow").startQPLFlow(oe, {
              annotations: { int: { syncType: e.syncType } },
              timeoutInMs: 12e4,
            });
            try {
              if (
                (o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] processLoop picked up chunk",
                    ])),
                ),
                e.syncType ===
                  o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                    .RECENT && e.chunkOrder != null)
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
              (e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .RECENT
                ? await o(
                    "WAWebHandleWorkerCompatibleRecentSyncChunk",
                  ).handleWorkerCompatibleRecentSyncChunk(e, t)
                : await o("WAWebHandleHistorySyncChunk").handleHistorySyncChunk(
                    e,
                  ),
                t.endSuccess());
            } catch (e) {
              throw (
                t.endFail(
                  o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
                ),
                e
              );
            }
          }),
          (t.$18 = async function () {
            o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] job starts",
                ])),
            );
            try {
              (await o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                await this.$17());
            } catch (t) {
              var e = r("getErrorSafe")(t);
              o("WALogger")
                .ERROR(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] _progressiveHistorySyncRun failed",
                    ])),
                )
                .catching(e);
            }
            o("WALogger").LOG(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] finish main flow",
                ])),
            );
            var t = await o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            if ((t == null ? void 0 : t.recentCompleted) === !0) {
              var n = !0;
              o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync finishes, check remaining on demand sync notifications",
                  ])),
              );
              var a = await o("WAWebSchemaHistorySyncNotification")
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
                var i = await o("WAWebSchemaHistorySyncNotification")
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
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
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
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync is incompleted, check remaining recent sync notifications",
                ])),
            );
            var l = await o(
              "WAWebHistorySyncNotificationUtils",
            ).getUnprocessedRecentSyncNotifications();
            if (l.length === 0) {
              o("WALogger").LOG(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications",
                  ])),
              );
              return;
            }
            var s = l[0].chunkOrder;
            if (s == null) {
              o("WALogger").LOG(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as first recent notification doesn't have chunk order",
                  ])),
              );
              return;
            }
            var u = await o(
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
                s,
                u == null ? void 0 : u.chunkOrder,
              ),
              u != null && u.chunkOrder + 1 !== s && s !== 1)
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
              (u == null ? void 0 : u.chunkOrder) === this.$8 &&
              s === this.$9
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
                await o("WAAsyncSleep").asyncSleep(5e3));
              return;
            }
            if (
              ((this.$8 = u == null ? void 0 : u.chunkOrder),
              (this.$9 = s),
              o("WAWebApiHistorySyncNotification")
                .recentSyncChunkHandlingTriedCount[l[0].msgKey] > me)
            ) {
              o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as recent notification with order ",
                    " fails too many times",
                  ])),
                s,
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
                o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                  .LastProcessedNotification,
              ));
          }),
          (t.continueProgressiveHistorySyncProcessingV2 = async function (t) {
            var e = this;
            if (!this.$6 && this.$1.initialChatHistory !== !0)
              return (
                o("WALogger").LOG(
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as initial chat sync is incomplete",
                    ])),
                ),
                Promise.resolve()
              );
            if (
              t ===
              o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                .BackendStart
            ) {
              var n = await o(
                "WAWebUserPrefsHistorySync",
              ).getHistorySyncStatus();
              if ((n == null ? void 0 : n.recentCompleted) === !0)
                return (
                  o("WALogger").LOG(
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as recent sync is complete when starting backend",
                      ])),
                  ),
                  Promise.resolve()
                );
            }
            return o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "continueProgressiveHistorySyncProcessingV2",
                async function (n) {
                  return (
                    o("WALogger").LOG(
                      ee ||
                        (ee = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] job is scheduled, source: ",
                          "",
                        ])),
                      t,
                    ),
                    e.$18()
                  );
                },
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY
                    .HISTORY_SYNC,
                  maxTimeoutMs: 1e3 * 120,
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
          }),
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
      _e = new pe();
    (o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
      async function () {
        (o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.CriticalSync,
        ),
          await _e.setInitialChatHistorySynced());
      },
    ),
      o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
        _e.initState();
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
    var fe = _e;
    l.default = fe;
  },
  98,
);
