__d(
  "WAWebSyncBootstrap",
  [
    "$InternalEnum",
    "QPLFlow",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAccountSyncJob",
    "WAWebApiHistorySyncNotification",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebBackgroundPauseGating",
    "WAWebBackgroundPauseState",
    "WAWebBrokerGlobalAppState",
    "WAWebClientFeatureFlags",
    "WAWebCoreActionsODS",
    "WAWebDbEncryptionKey",
    "WAWebFetchAndUpdateBlocklistJob",
    "WAWebFetchOwnUsernameOnPairing",
    "WAWebForceFlushWamBuffers",
    "WAWebHandleWorkerCompatibleRecentSyncChunk",
    "WAWebHistorySyncNotificationUtils",
    "WAWebJestE2ELogUtils",
    "WAWebJobOrchestrator",
    "WAWebLogoutReasonConstants",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebMetricsAttributionActions",
    "WAWebNonAddressBookContactsJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPhoneNumberSharingSettingsBootstrap",
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
      ce,
      de,
      me,
      pe = r("requireDeferred")("WAWebBootstrapNewsletter").__setRef(
        "WAWebSyncBootstrap",
      ),
      _e = r("requireDeferred")("WAWebHandleHistorySyncChunk").__setRef(
        "WAWebSyncBootstrap",
      ),
      fe = r("qpl")._(891423540, "2533"),
      ge =
        n("cr:17219") == null
          ? void 0
          : n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator").WAWebSyncBootstrap,
            ),
      he = 40,
      ye = 20,
      Ce = 180,
      be = n("$InternalEnum").Mirrored([
        "NotStarted",
        "InProcess",
        "Completed",
      ]),
      ve = { initialChatHistory: !1, readReceipts: !1, syncdCritical: !1 },
      Se = { initialChatHistoryTotalMsg: -1, initialChatHistoryTotalChats: -1 },
      Re = 20,
      Le = (function () {
        function t() {
          ((this.$1 = {}),
            (this.$2 = Se),
            (this.$6 = !1),
            (this.$7 = null),
            (this.$8 = ke()),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = !1),
            (this.$12 = !1),
            (this.$13 = !1),
            (this.$14 = !1),
            this.initState());
        }
        var n = t.prototype;
        return (
          (n.setupHistorySyncJobQuotaOverride = function () {
            var e = this;
            if (!this.$14) {
              this.$14 = !0;
              var t = function () {
                  return e.$15() &&
                    !o(
                      "WAWebBackgroundPauseState",
                    ).onDemandHistorySyncPendingState.get()
                    ? 0
                    : null;
                },
                n = function () {
                  o("WAWebJobOrchestrator").setPriorityQuotaOverride(
                    o("WAJobOrchestratorTypes").JobPriority.HISTORY_SYNC,
                    t,
                  );
                };
              (o("WAWebBackgroundPauseState").backgroundPauseState.onSet(n),
                o(
                  "WAWebBackgroundPauseState",
                ).onDemandHistorySyncPendingState.onSet(n),
                o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(n),
                o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(n),
                n());
            }
          }),
          (n.initState = function () {
            ((this.$1 = babelHelpers.extends({}, ve)),
              (this.$2 = babelHelpers.extends({}, Se)),
              (this.$3 = be.NotStarted),
              (this.$4 = be.NotStarted),
              (this.$5 = be.NotStarted),
              this.resetPushNameMutationTrace());
          }),
          (n.resetPushNameMutationTrace = function () {
            this.$8 = ke();
          }),
          (n.recordPushNameMutationTrace = function (t, n, r, o, a) {
            var e = this.$8;
            ((e.criticalBlockMutations += t),
              (e.criticalUnblockLowMutations += n),
              (e.handlerStarted += r),
              (e.handlerSuccess += o),
              (e.handlerFailed += a));
          }),
          (n.logPushNameMutationTrace = function (n) {
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
          (n.$16 = function () {
            for (var e in this.$1) if (!this.$1[e]) return !1;
            return !0;
          }),
          (n.$17 = async function (t) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bootstrap][history sync] completed sync for ",
                  "",
                ])),
              t,
            ),
              (this.$1[t] = !0),
              this.$16() &&
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
          (n.$18 = async function (t, n) {
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
              (await o("WAPromiseDelays").delayMs(ye * 1e3),
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
          (n.$19 = function (t) {
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
          (n.setReadReceiptsSynced = async function () {
            await this.$17("readReceipts");
          }),
          (n.setInitialChatHistorySynced = async function () {
            (await this.$17("initialChatHistory"),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] initial chat history synced.",
                  ])),
              ),
              o("WAWebSyncdGetChat").logLidPnChatDistribution({}),
              Ie.continueProgressiveHistorySyncProcessingV2(
                o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                  .InitialSyncComplete,
              ));
          }),
          (n.setSyncDCriticalSynced = async function () {
            ((this.$3 = be.Completed),
              !this.$1.syncdCritical && (await this.$17("syncdCritical")));
          }),
          (n.syncNonCriticalData = function () {
            var e = this,
              t = [];
            ((this.$5 = be.InProcess),
              o("WAWebQueryAndUpdateGroupMetadataJob")
                .queryAndUpdateAllGroupMetadata({ isHistorySyncInProgress: !0 })
                .then(function () {
                  ((t = o(
                    "WAWebNonAddressBookContactsJob",
                  ).getAllContactsFromChatCollectionIntoChunks()),
                    e.$19(t[0]).catch(function (e) {
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
                    e.$18(t[0], t.slice(1, t.length));
                  }, he * 1e3);
                })
                .finally(function () {
                  e.$5 = be.Completed;
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
              pe.load().then(function (e) {
                var t = e.bootstrapNewsletterBackend;
                return t();
              }),
              o(
                "WAWebFetchOwnUsernameOnPairing",
              ).initOwnUsernameFetchOnPairing(),
              (this.$4 = be.InProcess),
              o("WAWebSyncd")
                .markCollectionsForSync([
                  o("WAWebSyncdConst").CollectionName.Regular,
                  o("WAWebSyncdConst").CollectionName.RegularLow,
                  o("WAWebSyncdConst").CollectionName.RegularHigh,
                ])
                .then(function () {
                  var t;
                  ((e.$4 = be.Completed),
                    ge == null || (t = ge.contacts) == null || t.initialize());
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap] mark collection for sync failed",
                        ])),
                    )
                    .catching(e)
                    .sendLogs("bootstrap-mark-collection-for-sync-failed", {
                      sampling: 0.01,
                    });
                }));
          }),
          (n.markInitialHistorySyncCountDebugStats = function (t, n) {
            this.$2 = {
              initialChatHistoryTotalMsg: t,
              initialChatHistoryTotalChats: n,
            };
          }),
          (n.isSyncDCriticalDataSyncInProcess = function () {
            return this.$3 === be.InProcess;
          }),
          (n.isSyncDBootstrapInProcess = function () {
            return this.$3 === be.InProcess || this.$4 === be.InProcess;
          }),
          (n.$20 = function () {
            var e = this;
            this.$7 == null &&
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] setting critical data syncd timeout (",
                    ")",
                  ])),
                Ce,
              ),
              (this.$7 = self.setTimeout(async function () {
                e.logPushNameMutationTrace("timeout");
                var t = await e.$21("timeout");
                if (!t) {
                  try {
                    var n = await e.getCriticalSyncDebugSummary();
                    (o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose(
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
                      n,
                    ),
                      o("WALogger")
                        .ERROR(
                          S ||
                            (S = babelHelpers.taggedTemplateLiteralLoose([
                              "[bootstrap][syncd] syncd critical data timeout exceeded, logging out.",
                            ])),
                        )
                        .tags("bootstrap", "syncd", "logout")
                        .sendLogs("bootstrap-syncd-timeout-logout", {
                          sampling: 0.1,
                        }),
                      await o("WAPromiseDelays").delayMs(5e3));
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
                    await o("WAWebSocketLogoutJob").socketLogout(
                      o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout,
                    ));
                }
                var r = await o(
                  "WAWebUserPrefsHistorySync",
                ).getInitialHistorySyncComplete();
                if (r !== !0) {
                  try {
                    var a = await e.getCriticalSyncDebugSummary();
                    (o("WALogger").LOG(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap][history-sync] history sync debug summary: ",
                          "",
                        ])),
                      a,
                    ),
                      o("WALogger")
                        .ERROR(
                          L ||
                            (L = babelHelpers.taggedTemplateLiteralLoose([
                              "[bootstrap][history-sync] history sync critical data timeout exceeded, logging out.",
                            ])),
                        )
                        .tags("bootstrap", "history-sync", "logout")
                        .sendLogs("bootstrap-history-sync-timeout-logout", {
                          sampling: 0.1,
                        }),
                      await o("WAPromiseDelays").delayMs(5e3));
                  } catch (e) {}
                  (o(
                    "WAWebForceFlushWamBuffers",
                  ).forceFlushAllWamAndQplBuffers(),
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap][history sync] all critical data synced within timeout period",
                    ])),
                );
              }, Ce * 1e3)));
          }),
          (n.$21 = async function (t) {
            var e = await o("WAWebSyncdDb").getSyncActionsRows(
                ["action"],
                [o("WAWebSyncdConst").Actions.SettingPushName],
              ),
              n = e.filter(function (e) {
                return (
                  e.actionState === o("WAWebSyncdConst").SyncActionState.Success
                );
              }).length,
              r = e
                .map(function (e) {
                  var t;
                  return (t = e.actionState) != null ? t : "null";
                })
                .join(","),
              a = n > 0;
            return (
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][syncd] push name persistence check: source=",
                    ", complete=",
                    ", actionRows=",
                    ", successRows=",
                    ", actionStates=",
                    "",
                  ])),
                t,
                a,
                e.length,
                n,
                r || "none",
              ),
              a
            );
          }),
          (n.setSyncDCriticalDataSyncCompleted = function () {
            this.$7 != null &&
              (o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][syncd] critical data completion WAM: session ID lookup start",
                  ])),
              ),
              o("WAWebSyncdMdSyncFieldstatMeta")
                .MdSyncFieldStatsMeta.getMdSessionId()
                .then(function (e) {
                  (o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap][syncd] critical data completion WAM: commit scheduled",
                        ])),
                    ));
                })
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
                          "[bootstrap][syncd] critical data completion WAM: commit failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }));
          }),
          (n.getCriticalSyncDebugSummary = async function () {
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
          (n.isCriticalDataSynced = async function () {
            return (
              (this.$6 =
                this.$6 ||
                (await o(
                  "WAWebUserPrefsAppStateSync",
                ).getAllCriticalDataSynced())),
              this.$6
            );
          }),
          (n.syncCriticalData = async function () {
            var e = this;
            (this.resetPushNameMutationTrace(),
              r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                  .INITIAL_PAIRING,
              ),
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[bootstrap][history sync] need to sync critical data: true",
                  ])),
              ));
            var t = await this.getCriticalSyncDebugSummary();
            (o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[bootstrap][history sync] ",
                  "",
                ])),
              t,
            ),
              o("WALogger")
                .LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "[bootstrap] syncing my device list",
                    ])),
                )
                .tags("history-sync"));
            var n = o("WAWebSyncDeviceAdvDeviceListJob").syncMyDeviceListJob(),
              a = this.$22();
            (this.$20(), (this.$3 = be.InProcess));
            var i = n
                .then(function () {
                  return o("WAWebSyncd").markCollectionsForSync([
                    o("WAWebSyncdConst").CollectionName.CriticalBlock,
                    o("WAWebSyncdConst").CollectionName.CriticalUnblockLow,
                  ]);
                })
                .then(async function () {
                  if (
                    (o("WALogger").LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
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
                    var t = await e.$21("post_collection");
                    t &&
                      (await e.setSyncDCriticalSynced(),
                      e.setSyncDCriticalDataSyncCompleted());
                  }
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "failed to sync default disappearing mode",
                      ])),
                  )
                  .catching(t)
                  .verbose()
                  .sendLogs("failed initial sync of default disappearing mode");
              });
            await Promise.all([a, i, s]);
          }),
          (n.$22 = async function () {
            try {
              (await o("WAWebAccountSyncJob").updatePrivacySettings(),
                o(
                  "WAWebPhoneNumberSharingSettingsBootstrap",
                ).bootstrapPhoneNumberSharingSettings(),
                await this.setReadReceiptsSynced());
            } catch (t) {
              var e = r("getErrorSafe")(t);
              (o("WALogger")
                .ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "failed to sync privacy settings",
                    ])),
                )
                .catching(e)
                .verbose()
                .sendLogs(
                  "failed to update privacy settings from privacy request to server",
                ),
                o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
                  "failed to sync privacy settings, logging out",
                ),
                o("WAWebCoreActionsODS").logSessionForcedLogout(),
                o("WAWebSocketLogoutJob").socketLogout(
                  o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncError,
                ));
            }
          }),
          (n.$23 = async function () {
            if (
              !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
            ) {
              o("WALogger")
                .LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] no chunk found",
                    ])),
                )
                .tags("history-sync");
              return;
            }
            var t = o("QPLFlow").startQPLFlow(fe, {
              annotations: { int: { syncType: e.syncType } },
              timeoutInMs: 12e4,
            });
            try {
              if (
                (o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
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
                      .recentSyncChunkHandlingTriedCount[n] > Re &&
                      o("WALogger")
                        .ERROR(
                          W ||
                            (W = babelHelpers.taggedTemplateLiteralLoose([
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
              if (
                e.syncType ===
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT
              )
                await o(
                  "WAWebHandleWorkerCompatibleRecentSyncChunk",
                ).handleWorkerCompatibleRecentSyncChunk(e, t);
              else {
                var r = await _e.load(),
                  a = r.handleHistorySyncChunk;
                await a(e);
              }
              t.endSuccess();
            } catch (e) {
              throw (
                t.endFail(
                  o("getSafeQplErrorMessage").getSafeQPLErrorMessage(e),
                ),
                e
              );
            }
          }),
          (n.$24 = async function () {
            o("WALogger").LOG(
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] job starts",
                ])),
            );
            try {
              (await o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                await this.$23());
            } catch (t) {
              var e = r("getErrorSafe")(t);
              o("WALogger")
                .ERROR(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync][continueProgressiveHistorySyncProcessingV2] _progressiveHistorySyncRun failed",
                    ])),
                )
                .catching(e);
            }
            (o("WALogger").LOG(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] finish main flow",
                ])),
            ),
              this.$25());
            var t = await o("WAWebUserPrefsHistorySync").getHistorySyncStatus();
            if ((t == null ? void 0 : t.recentCompleted) === !0) {
              var n = !0;
              o("WALogger").LOG(
                H ||
                  (H = babelHelpers.taggedTemplateLiteralLoose([
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
                      G ||
                        (G = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no on demand notifications",
                        ])),
                    ),
                o("WAWebClientFeatureFlags").isFeatureEnabled(
                  "debug_1_year_history_sync",
                ))
              ) {
                o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
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
                      j ||
                        (j = babelHelpers.taggedTemplateLiteralLoose([
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
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] recent sync is incompleted, check remaining recent sync notifications",
                ])),
            );
            var l = await o(
              "WAWebHistorySyncNotificationUtils",
            ).getUnprocessedRecentSyncNotifications();
            if (l.length === 0) {
              o("WALogger").LOG(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as no recent notifications",
                  ])),
              );
              return;
            }
            var s = l[0].chunkOrder;
            if (s == null) {
              o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
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
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
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
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] loop detected, unexpected last chunk order",
                      ])),
                  )
                  .sendLogs("history-sync-unexpected-chunk-order", {
                    sampling: 0.01,
                  })),
                await o("WAPromiseDelays").delayMs(5e3));
              return;
            }
            if (
              ((this.$9 = u == null ? void 0 : u.chunkOrder),
              (this.$10 = s),
              o("WAWebApiHistorySyncNotification")
                .recentSyncChunkHandlingTriedCount[l[0].msgKey] > Re)
            ) {
              o("WALogger").LOG(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync][continueProgressiveHistorySyncProcessingV2] skip scheduling the next run as recent notification with order ",
                    " fails too many times",
                  ])),
                s,
              );
              return;
            }
            (o("WALogger").LOG(
              te ||
                (te = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync][continueProgressiveHistorySyncProcessingV2] init next run",
                ])),
            ),
              this.continueProgressiveHistorySyncProcessingV2(
                o("WAWebHistorySyncNotificationUtils").HistorySyncScheduleSource
                  .LastProcessedNotification,
              ));
          }),
          (n.$15 = function () {
            return (
              o("WAWebBackgroundPauseState").backgroundPauseState.get() &&
              o("WAWebBackgroundPauseGating").isVoipPauseHistorySyncEnabled()
            );
          }),
          (n.$26 = function () {
            var e = this.$15();
            return (e && (this.$12 = !0), e);
          }),
          (n.$27 = async function () {
            try {
              var e = await o("WAWebSchemaHistorySyncNotification")
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
              return e.some(function (e) {
                return (
                  e.reuploadPending !== !0 &&
                  !o("WAWebApiHistorySyncNotification").inFlightChunk.has(
                    e.msgKey,
                  )
                );
              });
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] on-demand lookup failed; allowing this drain decision",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("history-sync-on-demand-carve-out-failed"),
                !0
              );
            }
          }),
          (n.$28 = function () {
            return this.$6 || this.$1.initialChatHistory === !0;
          }),
          (n.$29 = function () {
            var e = this;
            if (!this.$28() || !this.getIsHistorySyncRunning()) {
              Ee(!1);
              return;
            }
            this.$27()
              .then(function (t) {
                return e.$30(t && e.getIsHistorySyncRunning());
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    re ||
                      (re = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] failed to publish the on-demand carve-out",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("history-sync-on-demand-carve-out-failed");
              });
          }),
          (n.$25 = function () {
            this.$15() && this.$29();
          }),
          (n.$30 = function (t) {
            var e = this.$15(),
              n = t && this.$28();
            return (Ee(e && n), e && !n);
          }),
          (n.$31 = function () {
            var e = this;
            if ((this.setupHistorySyncJobQuotaOverride(), !this.$13)) {
              ((this.$13 = !0), (this.$12 = this.$15()));
              var t = function () {
                var t = e.$15(),
                  n = e.$12 && !t;
                ((e.$12 = t),
                  t ? e.$29() : Ee(!1),
                  n &&
                    (o("WALogger")
                      .LOG(
                        oe ||
                          (oe = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync][continueProgressiveHistorySyncProcessingV2] resuming processing after call",
                          ])),
                      )
                      .tags("history-sync"),
                    e
                      .continueProgressiveHistorySyncProcessingV2(
                        o("WAWebHistorySyncNotificationUtils")
                          .HistorySyncScheduleSource.ManualRestart,
                      )
                      .catch(function (e) {
                        o("WALogger")
                          .ERROR(
                            ae ||
                              (ae = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync][continueProgressiveHistorySyncProcessingV2] failed to resume processing after call",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("history-sync-call-resume-failed");
                      })));
              };
              (o("WAWebBackgroundPauseState").backgroundPauseState.onSet(t),
                o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(t),
                o("WAWebBackendEventBus").BackendEventBus.onAbPropsLoaded(t));
            }
          }),
          (n.continueProgressiveHistorySyncProcessingV2 = async function (t) {
            var e = this;
            if ((this.$31(), !this.$28()))
              return (
                Ee(!1),
                o("WALogger").LOG(
                  ie ||
                    (ie = babelHelpers.taggedTemplateLiteralLoose([
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
                  this.$25(),
                  o("WALogger").LOG(
                    le ||
                      (le = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling as recent sync is complete when starting backend",
                      ])),
                  ),
                  Promise.resolve()
                );
            }
            if (this.$26()) {
              var a = await this.$27();
              if (this.$30(a))
                return (
                  o("WALogger")
                    .LOG(
                      se ||
                        (se = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] Skip job scheduling while a call is active",
                        ])),
                    )
                    .tags("history-sync"),
                  Promise.resolve()
                );
            }
            return o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "continueProgressiveHistorySyncProcessingV2",
                async function (n) {
                  return (
                    o("WALogger").LOG(
                      ue ||
                        (ue = babelHelpers.taggedTemplateLiteralLoose([
                          "[history sync][continueProgressiveHistorySyncProcessingV2] job is scheduled, source: ",
                          "",
                        ])),
                      t,
                    ),
                    e.$24()
                  );
                },
                {
                  priority: o("WAJobOrchestratorTypes").JobPriority
                    .HISTORY_SYNC,
                  maxTimeoutMs: 1e3 * 120,
                },
              )
              .waitUntilCompleted()
              .catch(function (e) {
                var t = r("getErrorSafe")(e);
                o("WALogger")
                  .ERROR(
                    ce ||
                      (ce = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync][continueProgressiveHistorySyncProcessingV2] error while running job",
                      ])),
                  )
                  .catching(t);
              });
          }),
          (n.getIsHistorySyncRunning = function () {
            var e = o("WAWebJobOrchestrator").getInstance(),
              t = e.getSnapshot(
                o("WAJobOrchestratorTypes").JobPriority.HISTORY_SYNC,
              );
            return t != null &&
              t.continueProgressiveHistorySyncProcessingV2 != null
              ? t.continueProgressiveHistorySyncProcessingV2 > 0
              : !1;
          }),
          t
        );
      })();
    function Ee(e) {
      o("WAWebBackgroundPauseState").onDemandHistorySyncPendingState.get() !==
        e &&
        o("WAWebBackgroundPauseState").onDemandHistorySyncPendingState.set(e);
    }
    function ke() {
      return {
        criticalBlockMutations: 0,
        criticalUnblockLowMutations: 0,
        handlerStarted: 0,
        handlerSuccess: 0,
        handlerFailed: 0,
      };
    }
    var Ie = new Le();
    (o("WAWebBackendEventBus").BackendEventBus.onInitialChatHistorySynced(
      async function () {
        (o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.CriticalSync,
        ),
          await Ie.setInitialChatHistorySynced());
      },
    ),
      o("WAWebBackendEventBus").BackendEventBus.onLogout(function () {
        Ie.initState();
      }),
      o("WAWebBackendEventBus").BackendEventBus.onRecentChatHistorySynced(
        function () {
          var e = o("WAWebJobOrchestrator").getInstance();
          (o("WALogger").LOG(
            de ||
              (de = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][continueProgressiveHistorySyncProcessingV2] clearing bucket queue for type ",
                "",
              ])),
            o("WAJobOrchestratorTypes").JobPriority.HISTORY_SYNC,
          ),
            e.clearQueueByPriority(
              o("WAJobOrchestratorTypes").JobPriority.HISTORY_SYNC,
            ));
        },
      ),
      o("WAWebBackendEventBus").BackendEventBus.onFullChatHistorySynced(
        function () {
          var e = o("WAWebJobOrchestrator").getInstance();
          (o("WALogger").LOG(
            me ||
              (me = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync][continueProgressiveHistorySyncProcessingV2] clearing bucket queue for type ",
                "",
              ])),
            o("WAJobOrchestratorTypes").JobPriority.HISTORY_SYNC,
          ),
            e.clearQueueByPriority(
              o("WAJobOrchestratorTypes").JobPriority.HISTORY_SYNC,
            ));
        },
      ));
    var Te = Ie;
    l.default = Te;
  },
  98,
);
