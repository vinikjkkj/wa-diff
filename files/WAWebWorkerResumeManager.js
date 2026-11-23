__d(
  "WAWebWorkerResumeManager",
  [
    "WAComms",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAShiftTimer",
    "WASmaxInPingsClientResponseServerResponse",
    "WASmaxOutPingsClientRequest",
    "WAWebABProps",
    "WAWebBackendEventBus",
    "WAWebClearDanglingReceipts",
    "WAWebDanglingReceiptQueue",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes",
    "WAWebJSHaltDetector",
    "WAWebMessageQueue",
    "WAWebMessageQueueImpl",
    "WAWebNoop",
    "WAWebNotificationWorkerBackend",
    "WAWebOfflineResumeConst",
    "WAWebOfflineResumeTypes",
    "WAWebOfflineResumeUtils",
    "WAWebOneQueue",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaDanglingReceipt",
    "WAWebSignalProtocolStore",
    "WAWebWamWorkerOfflineProcessReporter",
    "getErrorSafe",
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
      R = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      L = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      E = null,
      k = (function () {
        function t() {
          var t = this;
          ((this.$6 = null),
            (this.$7 = new (o("WAResolvable").Resolvable)()),
            (this.$8 = !1),
            (this.$9 = !1),
            (this.$11 = 100),
            (this.resumeType = o("WAWebOfflineResumeTypes").ResumeType.Worker),
            this.$12(),
            this.$7.promise.catch(function (n) {
              t.$9 ||
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][worker] completion failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("offline-resume-worker-completion-failed");
            }));
        }
        var n = t.prototype;
        return (
          (n.waitForCompletion = function () {
            return this.$7.promise;
          }),
          (n.isCompletionSettled = function () {
            return this.$7.isSettled;
          }),
          (n.completeWithoutOfflineResume = function () {
            if (!this.$7.isSettled) {
              var e;
              ((e = this.$6) == null || e.cancel(),
                (this.$6 = null),
                this.$13(o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE),
                this.$7.resolve());
            }
          }),
          (n.interruptCompletion = function (t) {
            var e;
            return this.$7.isSettled
              ? !1
              : ((e = this.$6) == null || e.cancel(),
                (this.$6 = null),
                (this.$9 = !0),
                this.$7.reject(t),
                !0);
          }),
          (n.$12 = function () {
            ((this.offlineMessagePreviewCounter = -1),
              (this.$2 = 0),
              (this.$3 = 0),
              (this.$4 = !1),
              (this.$5 = null),
              (this.$1 = o("WAWebOfflineResumeConst").ResumeStatus.INIT));
          }),
          (n.$13 = function (t) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][worker] offline resume stage: ",
                  " -> ",
                  "",
                ])),
              this.$1,
              t,
            ),
              (this.$1 = t));
          }),
          (n.processOfflinePreview = function (t) {
            if (
              (o(
                "WAWebWamWorkerOfflineProcessReporter",
              ).WorkerOfflineResumeReporter.logOfflinePreview(),
              this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.INIT)
            )
              (o(
                "WAWebWamWorkerOfflineProcessReporter",
              ).WorkerOfflineResumeReporter.updateOfflineCount(t),
                (this.offlineMessagePreviewCounter = t.message),
                (this.$5 = !1),
                (this.$4 = !0),
                (this.$2 = 0),
                (this.$10 = Date.now()),
                o("WAWebSignalProtocolStore").enableMemSignalStore(),
                o("WAWebJSHaltDetector").jsHaltDetector.restartDetection(),
                this.$13(
                  o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART,
                ),
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerOfflineProcessReady(),
                this.$14(t.message, t.receipt));
            else {
              var e = this.$10;
              if (e != null) {
                var n = Date.now() - e;
                n < o("WAWebOfflineResumeConst").OFFLINE_PREVIEW_PERIOD_MS
                  ? (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][worker] accept extra preview ibs, delay ",
                          "",
                        ])),
                      n,
                    ),
                    (this.offlineMessagePreviewCounter += t.message),
                    (this.$5 = !1),
                    (this.$4 = !0),
                    o(
                      "WAWebWamWorkerOfflineProcessReporter",
                    ).WorkerOfflineResumeReporter.updateOfflineCount(t))
                  : r("gkx")("9092")
                    ? o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume][worker] reject extra preview ibs, delay ",
                              "",
                            ])),
                          n,
                        )
                        .sendLogs("offline-multiple-preview")
                    : o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][worker] reject extra preview ibs, delay ",
                            "",
                          ])),
                        n,
                      );
              }
              this.$15();
            }
          }),
          (n.processOfflineThreadMeta = function (t) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][worker] processOfflineThreadMeta n/a",
                ])),
            );
          }),
          (n.getOfflineDeliveryProgress = function () {
            return this.offlineMessagePreviewCounter === 0
              ? this.$11
              : Math.min(
                  Math.ceil(
                    (100 * this.$2) / this.offlineMessagePreviewCounter,
                  ),
                  this.$11,
                );
          }),
          (n.getProcessedOfflineMessageCount = function () {
            return Math.min(
              this.$2,
              Math.max(this.offlineMessagePreviewCounter, 0),
            );
          }),
          (n.processOfflineSessionComplete = function (t) {
            var e,
              n = this;
            return (
              (e = this.$6) == null || e.cancel(),
              (this.$6 = null),
              this.$7.isSettled || this.$8
                ? Promise.resolve()
                : this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE
                  ? (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][worker] processOfflineSessionComplete done",
                        ])),
                    ),
                    Promise.resolve())
                  : this.$1 ===
                      o("WAWebOfflineResumeConst").ResumeStatus
                        .RESUME_WITH_OPEN_TAB
                    ? (o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][worker] RESUME_WITH_OPEN_TAB n/a",
                          ])),
                      ),
                      this.$7.resolve(),
                      Promise.resolve())
                    : (this.$1 ===
                        o("WAWebOfflineResumeConst").ResumeStatus.INIT &&
                        ((this.$5 = !1), (this.$4 = !0)),
                      this.$13(
                        o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE,
                      ),
                      (this.$8 = !0),
                      this.$16().then(
                        function () {
                          ((n.$8 = !1), n.$7.isSettled || n.$7.resolve());
                        },
                        function (e) {
                          ((n.$8 = !1),
                            n.$7.isSettled
                              ? o("WALogger")
                                  .ERROR(
                                    f ||
                                      (f =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[offline-resume][worker] finalization failed after completion settled",
                                          ],
                                        )),
                                  )
                                  .catching(r("getErrorSafe")(e))
                                  .sendLogs(
                                    "offline-resume-worker-finalization-after-settlement-failed",
                                  )
                              : n.$7.reject(e));
                        },
                      ))
            );
          }),
          (n.isResumeFromRestartComplete = function () {
            return (
              this.$1 !==
                o("WAWebOfflineResumeConst").ResumeStatus.RESUME_ON_RESTART &&
              this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT
            );
          }),
          (n.isResumeFromRestartInProgress = function () {
            return (
              this.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.INIT &&
              !this.$7.isSettled &&
              !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
            );
          }),
          (n.isResumeOnSocketDisconnectInProgress = function () {
            return (
              this.$1 ===
              o("WAWebOfflineResumeConst").ResumeStatus.RESUME_WITH_OPEN_TAB
            );
          }),
          (n.isResumeComplete = function () {
            return (
              this.$1 === o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE
            );
          }),
          (n.getHasMessagesToDownload = function () {
            return this.$5;
          }),
          (n.getFinishedDownloading = function () {
            return this.getOfflineDeliveryProgress() === 100;
          }),
          (n.shouldUseOfflineResumeScreen = function () {
            return this.offlineMessagePreviewCounter > this.$2;
          }),
          (n.processDecryptResult = function (t) {
            ((this.$2 += 1),
              t === o("WAWebHandleMsgTypes").E2EProcessResult.RETRY &&
                (this.$3 += 1));
          }),
          (n.offlineStanzaReceivedAfterComplete = function () {
            if (this.isResumeFromRestartComplete()) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][worker] offlineStanzaReceivedAfterComplete n/a",
                  ])),
              );
              return;
            }
          }),
          (n.newOfflineStanza = function (t, n) {
            (o(
              "WAWebWamWorkerOfflineProcessReporter",
            ).WorkerOfflineResumeReporter.updateOldestStanzaTime(t),
              this.$15());
          }),
          (n.getResumeUIProgressBarType = function () {
            return o("WAWebOfflineResumeTypes").ResumeUIProgressBarType.None;
          }),
          (n.$15 = function () {
            this.$6 &&
              this.$6.onOrAfter(
                o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS,
              );
          }),
          (n.$14 = function (t, n) {
            var e,
              a = this;
            ((e = this.$6) == null || e.cancel(),
              (this.$6 = new (o("WAShiftTimer").ShiftTimer)(function () {
                a.$1 !== o("WAWebOfflineResumeConst").ResumeStatus.COMPLETE &&
                  (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][worker] session completed by timeout",
                      ])),
                  ),
                  r("gkx")("9092") &&
                    o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][worker] offline resume finished by timeout",
                          ])),
                      )
                      .sendLogs("offline-resume-timeout"),
                  o("WAWebOneQueue").handleOneQueueOfflineEnd(),
                  a.processOfflineSessionComplete(t + n).catch(r("WAWebNoop")),
                  (a.$6 = null));
              })),
              this.$6.onOrAfter(
                o("WAWebOfflineResumeConst").OFFLINE_STANZA_TIMEOUT_MS,
              ));
          }),
          (n.$16 = async function () {
            if (
              (await (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()
                ? o("WAWebOneQueue").waitForOneQueueOfflineWorkDrained()
                : o("WAWebMessageQueue").waitForLegacyOfflineMessageQueue()),
              !this.$7.isSettled &&
                (o(
                  "WAWebWamWorkerOfflineProcessReporter",
                ).WorkerOfflineResumeReporter.updateOfflineDecryptionErrorCount(
                  this.$3,
                ),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][worker] msgQueue drained, decryptErrs ",
                      "",
                    ])),
                  this.$3,
                ),
                await o("WAWebOfflineResumeUtils").clearOfflineSnapShot(),
                (this.$3 = 0),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][worker] clearOfflineSnapShot done",
                    ])),
                ),
                !this.$7.isSettled))
            ) {
              try {
                await o(
                  "WAWebWamWorkerOfflineProcessReporter",
                ).WorkerOfflineResumeReporter.logProcessComplete();
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][worker] reporter completion failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("offline-resume-worker-reporter-completion-failed");
              }
              if (!this.$7.isSettled)
                if (o("WAWebRuntimeEnvironmentUtils").isServiceWorker()) {
                  var e =
                    o(
                      "WAWebMessageQueue",
                    ).isWorkerOnlineMessageQueueTrackingEnabled();
                  if (
                    (e &&
                      !o("WAWebBackendEventBus").BackendEventBus
                        .isOfflineDeliveryEnd &&
                      o(
                        "WAWebBackendEventBus",
                      ).BackendEventBus.triggerOfflineDeliveryEnd(),
                    o(
                      "WAWebNotificationWorkerBackend",
                    ).showPushNotificationSyncCompleteMessage(),
                    !e)
                  ) {
                    await o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop();
                    return;
                  }
                  if (
                    (await o(
                      "WAWebMessageQueue",
                    ).waitForWorkerOnlineMessageAdmission(),
                    await (o(
                      "WAWebMessageQueueImpl",
                    ).isOneQueueAdoptionEnabled()
                      ? o("WAWebOneQueue").waitForOneQueueOfflineWorkDrained()
                      : o(
                          "WAWebMessageQueue",
                        ).waitForLegacyOnlineMessageQueue()),
                    this.$7.isSettled)
                  )
                    return;
                  (await o("WAWebGetMessageCache")
                    .getMessageCache()
                    .checkpointQueueWait(),
                    await o(
                      "WAWebDanglingReceiptQueue",
                    ).clearConfirmedDanglingReceipts(I));
                } else
                  (o(
                    "WAWebBackendEventBus",
                  ).BackendEventBus.triggerOfflineDeliveryEnd(),
                    o("WAWebOfflineResumeUtils").runReceiptCleanUpLoop());
            }
          }),
          t
        );
      })();
    async function I(e) {
      var t,
        n,
        a = (
          await o("WAWebSchemaDanglingReceipt").getTable().bulkGet(e)
        ).flatMap(function (e) {
          return e != null ? [e] : [];
        }),
        i = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId;
      if (
        i == null ||
        (await o("WAWebClearDanglingReceipts").sendDanglingReceipts(a, {
          senderReceiptsForOwnChat: !0,
        }),
        ((n = o("WAComms").getComms()) == null ? void 0 : n.socketId) !== i)
      )
        return !1;
      var l = o("WAWebABProps").getABPropConfigValue(
          "web_offline_resume_wait_for_ping_timeout_seconds",
        ),
        s = o("WASmaxOutPingsClientRequest").makeClientRequest();
      try {
        var u = await o("WAPromiseTimeout").promiseTimeout(
          o("WAComms").sendSmaxStanza(s, { withoutRetry: !0 }),
          l * 1e3,
        );
        return o(
          "WASmaxInPingsClientResponseServerResponse",
        ).parseClientResponseServerResponse(u, s).success;
      } catch (e) {
        return (
          o("WALogger")
            .LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] pingCurrentSocket: no answer",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    function T(e) {
      if (E != null) throw new L("Offline resume is already active");
      E = e;
    }
    function D(e) {
      return E === e;
    }
    function x(e) {
      var t;
      (t = E) == null || t.interruptCompletion(e);
    }
    function $(e) {
      E === e && (E = null);
    }
    ((l.OfflineWorkerResumeInterruptedError = R),
      (l.OfflineWorkerResumeRegistrationError = L),
      (l.OfflineWorkerResumeStageManager = k),
      (l.setActiveOfflineWorkerResumeManager = T),
      (l.isActiveOfflineWorkerResumeManager = D),
      (l.interruptActiveOfflineWorkerResume = x),
      (l.clearActiveOfflineWorkerResumeManager = $));
  },
  98,
);
