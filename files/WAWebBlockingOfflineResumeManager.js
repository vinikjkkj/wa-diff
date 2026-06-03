__d(
  "WAWebBlockingOfflineResumeManager",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebApiPendingDeviceSync",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBrokerGlobalAppState",
    "WAWebChatThreadLogging",
    "WAWebHandleMsgTypes.flow",
    "WAWebJSHaltDetector",
    "WAWebMessageQueue",
    "WAWebOfflineResumeConst",
    "WAWebOfflineResumeTypes.flow",
    "WAWebOfflineResumeUtils",
    "WAWebPageLoadLogging",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
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
      I,
      T = (function () {
        function t() {
          var e = this;
          ((this.$7 = null),
            (this.$8 = new (o("WAShiftTimer").ShiftTimer)(function () {
              (o("WAWebBackendApi").frontendFireAndForget(
                "triggerOfflineProgressUpdateFromBridge",
                {},
              ),
                e.$8.onOrAfter(o("WAWebOfflineResumeConst").UI_UPDATE_TIME_MS));
            })),
            (this.resumeType = o(
              "WAWebOfflineResumeTypes.flow",
            ).ResumeType.Blocking),
            this.$10());
        }
        var a = t.prototype;
        return (
          (a.$10 = function () {
            ((this.offlineMessagePreviewCounter = -1),
              (this.$2 = 0),
              (this.$3 = 0),
              (this.$4 = !1),
              (this.$5 = null),
              (this.$1 = o("WAWebOfflineResumeConst").ResumeStatus.INIT));
          }),
          (a.$11 = function (n) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][blocking] offline resume stage: ",
                  " -> ",
                  "",
                ])),
              this.$1,
              n,
            ),
              (this.$1 = n));
          }),
          (a.setStatus_TESTONLY = function (t) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][blocking] offline resume stage: ",
                  " -> ",
                  "",
                ])),
              this.$1,
              t,
            ),
              (this.$1 = t));
          }),
          (a.processOfflinePreview = function (t) {
            if (
              (o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logOfflinePreviewT(),
              this.isResumeFromRestartComplete())
            )
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][blocking] Offline session is complete when receiving offline preview ib.",
                  ])),
              ),
                o("WAWebOfflineResumeUtils").exceedResumeWithOpenTabLimit(
                  t.message,
                  t.receipt,
                ) &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][blocking] restart client due to exceed the LIMIT, message: ",
                        ", receipt: ",
                        "",
                      ])),
                    t.message,
                    t.receipt,
                  ),
                  o("WAWebOfflineResumeUtils").refreshWindow()),
                o("WAWebJSHaltDetector").jsHaltDetector.restartDetection(),
                this.$11(
                  o("WAWebOfflineResumeConst").ResumeStatus
                    .RESUME_WITH_OPEN_TAB,
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateChatSortListener",
                  { enable: !1 },
                ),
                self.setTimeout(function () {
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateChatSortListener",
                    { enable: !0 },
                  );
                }, 7e3));
            else if (this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT)
              (o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.BlockingOR,
              ),
                r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                    .OFFLINE_RESUME,
                ),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.logOfflineCount(t),
                (this.$5 = t.message > 0),
                (this.$4 = t.message === 0),
                (this.offlineMessagePreviewCounter = t.message),
                (this.$2 = 0),
                (this.$9 = Date.now()),
                o("WAWebSignalProtocolStore").enableMemSignalStore(),
                o("WAWebBackendApi").frontendFireAndForget(
                  "triggerOfflineProgressUpdateFromBridge",
                  {},
                ),
                o("WAWebJSHaltDetector").jsHaltDetector.restartDetection(),
                this.$11(
                  o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART,
                ),
                this.$12(t.message, t.receipt),
                this.$8.onOrAfter(
                  o("WAWebOfflineResumeConst").UI_UPDATE_TIME_MS,
                ),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineProcessReady(),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][blocking] start handling offline stanza",
                    ])),
                ));
            else {
              var e = this.$9;
              if (e != null) {
                var n = Date.now() - e;
                n < o("WAWebOfflineResumeConst").OFFLINE_PREVIEW_PERIOD_MS
                  ? (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][blocking] Accept multiple offline preview ibs during offline resume, delay ",
                          ".",
                        ])),
                      n,
                    ),
                    (this.offlineMessagePreviewCounter += t.message),
                    (this.$5 = this.offlineMessagePreviewCounter > 0),
                    (this.$4 = this.offlineMessagePreviewCounter === 0),
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.logOfflineCount(t),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "triggerOfflineProgressUpdateFromBridge",
                      {},
                    ))
                  : r("gkx")("26258")
                    ? o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] Reject multiple offline preview ib during offline resume, delay ",
                            ".",
                          ])),
                        n,
                      )
                    : o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume][blocking] Reject multiple offline preview ibs during offline resume, delay ",
                              "",
                            ])),
                          n,
                        )
                        .sendLogs("offline-multiple-preview");
              }
              this.$13();
            }
          }),
          (a.getOfflineDeliveryProgress = function () {
            return this.$4
              ? 100
              : this.offlineMessagePreviewCounter === -1
                ? 0
                : this.offlineMessagePreviewCounter === 0
                  ? 100
                  : Math.min(
                      Math.ceil(
                        (100 * this.$2) / this.offlineMessagePreviewCounter,
                      ),
                      100,
                    );
          }),
          (a.processOfflineSessionComplete = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = this,
                  r = e;
                if (
                  (self.setTimeout(function () {
                    o("WAWebBackendApi").frontendFireAndForget(
                      "updateChatSortListener",
                      { enable: !0 },
                    );
                  }, 3e3),
                  (t = this.$7) == null || t.cancel(),
                  (this.$7 = null),
                  o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerOfflineProcessReady(),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][blocking] start handling offline stanza",
                      ])),
                  ),
                  this.$1 ===
                    o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE)
                ) {
                  (o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.logLastStanzaT(),
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.commit());
                  return;
                } else if (
                  this.$1 ===
                  o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB
                ) {
                  (yield o("WAWebMessageQueue").waitForOnlineMessageQueue(),
                    yield o("WAWebApiPendingDeviceSync").doPendingDeviceSync(),
                    this.$11(
                      o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE,
                    ),
                    o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerOfflineDeliveryEnd(),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "updateChatSortListener",
                      { enable: !0 },
                    ));
                  return;
                }
                return (
                  (this.$5 = r > 0),
                  (this.$4 = r === 0),
                  (this.$6 = 0),
                  self.setTimeout(function () {
                    n.$6 >
                      o("WAWebOfflineResumeConst").OFFLINE_STANZA_COUNT_LIMIT &&
                      (o("WALogger").WARN(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] ",
                            " received after offline completion marker. Refreshing window due to potential server issue.",
                          ])),
                        n.$6,
                      ),
                      o("WAWebOfflineResumeUtils").refreshWindow());
                  }, o("WAWebOfflineResumeConst").OFFLINE_STANZA_COUNT_CHECK_TIMEOUT_MS),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "triggerOfflineProgressUpdateFromBridge",
                    {},
                  ),
                  this.$11(o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE),
                  this.$14()
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.isResumeFromRestartComplete = function () {
            return (
              this.$1 !==
                o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART &&
              this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT
            );
          }),
          (a.isResumeOnSocketDisconnectInProgress = function () {
            return (
              this.$1 ===
              o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB
            );
          }),
          (a.isResumeFromRestartInProgress = function () {
            return (
              this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT &&
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
            );
          }),
          (a.isResumeComplete = function () {
            return (
              this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE
            );
          }),
          (a.getHasMessagesToDownload = function () {
            return this.$5;
          }),
          (a.getFinishedDownloading = function () {
            return this.getOfflineDeliveryProgress() === 100;
          }),
          (a.shouldUseOfflineResumeScreen = function () {
            return this.offlineMessagePreviewCounter > this.$2;
          }),
          (a.processDecryptResult = function (t) {
            (this.$13(),
              (this.$2 += 1),
              t === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY &&
                (this.$3 += 1));
          }),
          (a.offlineStanzaReceivedAfterComplete = function () {
            this.isResumeFromRestartComplete() && (this.$6 += 1);
          }),
          (a.newOfflineStanza = function (t, n) {
            (this.$13(),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logAddOfflineSizeBytes(n),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logOldestStanzaTime(t));
          }),
          (a.getResumeUIProgressBarType = function () {
            return o("WAWebOfflineResumeTypes.flow").ResumeUIProgressBarType
              .None;
          }),
          (a.$13 = function () {
            this.$7 &&
              this.$7.onOrAfter(
                o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS,
              );
          }),
          (a.$12 = function (t, n) {
            var e,
              r = this;
            ((e = this.$7) == null || e.cancel(),
              (this.$7 = new (o("WAShiftTimer").ShiftTimer)(function () {
                r.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE &&
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][blocking]: offline session completed by timeout",
                      ])),
                  ),
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][blocking]offline resume finished by timeout",
                        ])),
                    )
                    .sendLogs("blocking-offline-resume-timeout", {
                      sampling: 0.01,
                    }),
                  r.processOfflineSessionComplete(t + n).catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] processOfflineSessionComplete failed in timeout handler: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("blocking-offline-resume-timeout-handler", {
                        sampling: 0.01,
                      });
                  }),
                  (r.$7 = null),
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.logMissedOfflineComplete());
              })),
              this.$7.onOrAfter(
                o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS,
              ));
          }),
          (a.$14 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                "waitForOfflineMessageQueue",
              ),
                yield o("WAWebMessageQueue").waitForOfflineMessageQueue(),
                o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "waitForOfflineMessageQueue",
                ),
                (this.$4 = !0),
                o("WAWebBackendApi").frontendFireAndForget(
                  "triggerOfflineProgressUpdateFromBridge",
                  {},
                ),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.logOfflineDecryptionErrorCount(this.$3),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][blocking] _onOfflineComplete: waitForOfflineMsgThread done, total decryption error: ",
                      "",
                    ])),
                  this.$3,
                ),
                (this.$3 = 0),
                o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                  "clearOfflineSnapShot",
                ),
                yield o("WAWebOfflineResumeUtils").clearOfflineSnapShot(),
                o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "clearOfflineSnapShot",
                ),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][blocking] _onOfflineComplete: clearOfflineSnapShot done.",
                    ])),
                ),
                o("WAWebSignalProtocolStore").enablePersistSignalStore(),
                o("WAWebOfflineResumeUtils")
                  .runReceiptCleanUpLoop()
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] runReceiptCleanUpLoop failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("blocking-offline-resume-receipt-cleanup", {
                        sampling: 0.01,
                      });
                  }),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.logLastStanzaT(),
                o("WAWebPageLoadLogging").startPageLoadQplMeasure(
                  "loadMainScreen",
                ),
                yield o("WAWebOfflineResumeUtils").loadMainScreen({
                  shouldUpdateReceipts: !0,
                }),
                o("WAWebPageLoadLogging").endPageLoadQplMeasure(
                  "loadMainScreen",
                ),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineDeliveryEnd(),
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.BlockingOR,
                ),
                o("WAWebUserPrefsGeneral")
                  .setOfflinePushCount(0)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        R ||
                          (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] setOfflinePushCount failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("blocking-offline-resume-push-count", {
                        sampling: 0.01,
                      });
                  }),
                o("WAWebWamOfflineResumeReporter")
                  .OfflineResumeReporter.commit()
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] OfflineResumeReporter.commit failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("blocking-offline-resume-reporter-commit", {
                        sampling: 0.01,
                      });
                  }),
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                  "processAllOrphanPaymentNotifications",
                ),
                o("WAWebChatThreadLogging")
                  .uploadChatThreadLoggingEvents()
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][blocking] uploadChatThreadLoggingEvents failed: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("blocking-offline-resume-upload-ctl", {
                        sampling: 0.01,
                      });
                  }),
                r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
                ),
                o("WAWebWamMemoryStat").setCurrentMemoryScenario(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
                ),
                self.setTimeout(function () {
                  o("WAWebApiPendingDeviceSync")
                    .doPendingDeviceSync()
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          k ||
                            (k = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume][blocking] doPendingDeviceSync failed: ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs("blocking-offline-resume-device-sync", {
                          sampling: 0.01,
                        });
                    });
                }, o("WAWebOfflineResumeConst").OFFLINE_DEVICE_SYNC_DELAY),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][blocking] cancel progress bar timer",
                    ])),
                ),
                this.$8.forceRunNow(),
                this.$8.cancel());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.OfflineBlockingResumeStageManager = T;
  },
  98,
);
