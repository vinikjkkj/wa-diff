__d(
  "WAWebNonBlockingOfflineResumeManager",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebApiPendingDeviceSync",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBrokerGlobalAppState",
    "WAWebChatThreadLogging",
    "WAWebHandleMsgTypes.flow",
    "WAWebJSHaltDetector",
    "WAWebMessageQueue",
    "WAWebOffdStorageUpdateOfflinePeerReceipts",
    "WAWebOfflineResumeConst",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebOfflineResumeTypes.flow",
    "WAWebOfflineResumeUtils",
    "WAWebSignalProtocolStore",
    "WAWebThreadMetadata",
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
      b = 100,
      v = (function () {
        function t(e) {
          var t = this;
          ((this.$9 = null),
            (this.$11 = new (o("WAShiftTimer").ShiftTimer)(function () {
              (o("WAWebBackendApi").frontendFireAndForget(
                "triggerOfflineProgressUpdateFromBridge",
                {},
              ),
                t.$11.onOrAfter(
                  o("WAWebOfflineResumeConst").UI_UPDATE_TIME_MS,
                ));
            })),
            (this.$12 = 95),
            (this.resumeType = o(
              "WAWebOfflineResumeTypes.flow",
            ).ResumeType.NonBlocking),
            e != null && e.mainScreenLoaded && (this.$6 = !0),
            this.$13());
        }
        var a = t.prototype;
        return (
          (a.updateOptions = function (t) {
            var e;
            this.$6 =
              (e = t == null ? void 0 : t.mainScreenLoaded) != null ? e : !1;
          }),
          (a.$13 = function () {
            ((this.offlineMessagePreviewCounter = -1),
              (this.$2 = 0),
              (this.$3 = 0),
              (this.$4 = !1),
              (this.$5 = null),
              (this.$1 = o("WAWebOfflineResumeConst").ResumeStatus.INIT));
          }),
          (a.$14 = function (n) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][non-blocking] offline resume stage: ",
                  " -> ",
                  "",
                ])),
              this.$1,
              n,
            ),
              (this.$1 = n));
          }),
          (a.processOfflinePreview = function (t) {
            if (
              (o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logOfflinePreviewT(),
              this.$6 &&
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[resume-from-open-tab] reset offline delivery end to false",
                    ])),
                ),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineDeliveryStateReset()),
              this.isResumeFromRestartComplete())
            )
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][non-blocking] Offline session is complete when receiving offline preview ib.",
                  ])),
              ),
                o("WAWebOfflineResumeUtils").exceedResumeWithOpenTabLimit(
                  t.message,
                  t.receipt,
                ) &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][non-blocking] restart client due to exceed the LIMIT, message: ",
                        ", receipt: ",
                        "",
                      ])),
                    t.message,
                    t.receipt,
                  ),
                  o("WAWebOfflineResumeUtils").refreshWindow()),
                o("WAWebJSHaltDetector").jsHaltDetector.restartDetection(),
                this.$14(
                  o("WAWebOfflineResumeConst").ResumeStatus
                    .RESUME_WITH_OPEN_TAB,
                ),
                this.$15(t.message, t.receipt),
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
              (r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE
                  .OFFLINE_RESUME,
              ),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.logOfflineCount(t),
                o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.activate(t),
                (this.offlineMessagePreviewCounter = t.message),
                (this.$5 = !1),
                (this.$4 = !0),
                (this.$2 = 0),
                (this.$10 = Date.now()),
                o("WAWebSignalProtocolStore").enableMemSignalStore(),
                o("WAWebBackendApi").frontendFireAndForget(
                  "triggerOfflineProgressUpdateFromBridge",
                  {},
                ),
                o("WAWebJSHaltDetector").jsHaltDetector.restartDetection(),
                this.$11.onOrAfter(
                  o("WAWebOfflineResumeConst").UI_UPDATE_TIME_MS,
                ),
                this.$14(
                  o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART,
                ),
                this.$15(t.message, t.receipt),
                this.$6
                  ? o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[resume-from-open-tab] Main screen is loaded",
                        ])),
                    )
                  : (this.$7 = o("WAWebOfflineResumeUtils").loadMainScreen(
                      {},
                    )));
            else {
              var e = this.$10;
              if (e != null) {
                var n = Date.now() - e;
                n < o("WAWebOfflineResumeConst").OFFLINE_PREVIEW_PERIOD_MS
                  ? (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][non-blocking] Accept multiple offline preview ibs during offline resume, delay ",
                          ".",
                        ])),
                      n,
                    ),
                    (this.offlineMessagePreviewCounter += t.message),
                    (this.$5 = !1),
                    (this.$4 = !0),
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.logOfflineCount(t))
                  : r("gkx")("26258")
                    ? o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][non-blocking] Reject multiple offline preview ib during offline resume, delay ",
                            ".",
                          ])),
                        n,
                      )
                    : o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume][non-blocking] Reject multiple offline preview ibs during offline resume, delay ",
                              "",
                            ])),
                          n,
                        )
                        .sendLogs("offline-multiple-preview");
              }
              this.$16();
            }
          }),
          (a.getOfflineDeliveryProgress = function () {
            return this.offlineMessagePreviewCounter === 0
              ? this.$12
              : Math.min(
                  Math.ceil(
                    (100 * this.$2) / this.offlineMessagePreviewCounter,
                  ),
                  this.$12,
                );
          }),
          (a.processOfflineSessionComplete = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = this;
                if (
                  (self.setTimeout(function () {
                    o("WAWebBackendApi").frontendFireAndForget(
                      "updateChatSortListener",
                      { enable: !0 },
                    );
                  }, 3e3),
                  (t = this.$9) == null || t.cancel(),
                  (this.$9 = null),
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
                    this.$14(
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
                } else
                  this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT &&
                    ((this.$5 = !1),
                    (this.$4 = !0),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "triggerOfflineProgressUpdateFromBridge",
                      {},
                    ),
                    !this.$6 &&
                      !this.$7 &&
                      (this.$7 = o("WAWebOfflineResumeUtils").loadMainScreen(
                        {},
                      )));
                return (
                  yield this.$7,
                  (this.$8 = 0),
                  self.setTimeout(function () {
                    n.$8 >
                      o("WAWebOfflineResumeConst").OFFLINE_STANZA_COUNT_LIMIT &&
                      (o("WALogger").WARN(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][non-blocking] ",
                            " received after offline completion marker. Refreshing window due to potential server issue.",
                          ])),
                        n.$8,
                      ),
                      o("WAWebOfflineResumeUtils").refreshWindow());
                  }, o("WAWebOfflineResumeConst").OFFLINE_STANZA_COUNT_CHECK_TIMEOUT_MS),
                  this.$14(o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE),
                  this.$17()
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
          (a.isResumeFromRestartInProgress = function () {
            return (
              this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT &&
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
            );
          }),
          (a.isResumeOnSocketDisconnectInProgress = function () {
            return (
              this.$1 ===
              o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB
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
            (this.$16(),
              (this.$2 += 1),
              t === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY &&
                (this.$3 += 1));
          }),
          (a.offlineStanzaReceivedAfterComplete = function () {
            this.isResumeFromRestartComplete() && (this.$8 += 1);
          }),
          (a.newOfflineStanza = function (t, n) {
            (o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.logAddOfflineSizeBytes(n),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logOldestStanzaTime(t),
              this.$16());
          }),
          (a.getResumeUIProgressBarType = function () {
            return !o("WAWebBackendEventBus").BackendEventBus
              .isOfflineDeliveryEnd && this.offlineMessagePreviewCounter >= b
              ? o("WAWebOfflineResumeTypes.flow").ResumeUIProgressBarType
                  .Toastbar
              : o("WAWebOfflineResumeTypes.flow").ResumeUIProgressBarType.None;
          }),
          (a.$16 = function () {
            this.$9 &&
              this.$9.onOrAfter(
                o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS,
              );
          }),
          (a.$15 = function (t, n) {
            var e,
              r = this;
            ((e = this.$9) == null || e.cancel(),
              (this.$9 = new (o("WAShiftTimer").ShiftTimer)(function () {
                r.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE &&
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][non-blocking]: offline session completed by timeout",
                      ])),
                  ),
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][non-blocking] offline resume finished by timeout",
                        ])),
                    )
                    .sendLogs("non-blocking-offline-resume-timeout", {
                      sampling: 0.01,
                    }),
                  r.processOfflineSessionComplete(t + n),
                  (r.$9 = null),
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.logMissedOfflineComplete());
              })),
              this.$9.onOrAfter(
                o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS,
              ));
          }),
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield o("WAWebMessageQueue").waitForOfflineMessageQueue(),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.logOfflineDecryptionErrorCount(this.$3),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.logLastStanzaT(),
                o("WAWebThreadMetadata").resetThreadMeta(),
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][non-blocking] _onOfflineComplete: waitForOfflineMsgThread done, total decryption error: ",
                      "",
                    ])),
                  this.$3,
                ),
                (this.$3 = 0),
                yield o("WAWebOfflineResumeUtils").clearOfflineSnapShot(),
                (this.$12 = 97),
                yield this.$7,
                yield o(
                  "WAWebOffdStorageUpdateOfflinePeerReceipts",
                ).updatePeerReceipts(),
                (this.$12 = 99),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][non-blocking] _onOfflineComplete: clearOfflineSnapShot done.",
                    ])),
                ),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineDeliveryEnd(),
                o("WAWebUserPrefsGeneral").setOfflinePushCount(0),
                this.$11.forceRunNow(),
                this.$11.cancel(),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.commit(),
                o("WAWebSignalProtocolStore").enablePersistSignalStore(),
                o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop(),
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                  "processAllOrphanPaymentNotifications",
                ),
                o("WAWebChatThreadLogging").uploadChatThreadLoggingEvents(),
                r("WAWebBrokerGlobalAppState").initOrUpdateTracking(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
                ),
                o("WAWebWamMemoryStat").setCurrentMemoryScenario(
                  o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE,
                ),
                self.setTimeout(function () {
                  o("WAWebApiPendingDeviceSync").doPendingDeviceSync();
                }, o("WAWebOfflineResumeConst").OFFLINE_DEVICE_SYNC_DELAY));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.OfflineNonBlockingResumeStageManager = v;
  },
  98,
);
