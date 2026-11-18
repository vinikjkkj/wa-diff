__d(
  "WAWebOfflineHandler",
  [
    "invariant",
    "WAComms",
    "WALogger",
    "WASmaxOfflineBatchRPC",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebBackgroundPauseGating",
    "WAWebBackgroundPauseState",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleOfflineAbProps",
    "WAWebMessageQueueImpl",
    "WAWebOfflineResumePrimarySnapshotGating",
    "WAWebOfflineResumeUtils",
    "WAWebOfflineSyncQplSession",
    "WAWebOneQueue",
    "WAWebPageLoadLogging",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebStorageCrashAnnotations",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
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
      v = 200,
      S = 10,
      R = 200,
      L = 100,
      E = new Map([
        [0, 200],
        [1, 100],
        [2, 50],
        [3, 10],
      ]),
      k = S,
      I = M(),
      T = (function () {
        function t() {
          ((this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.$7 = v),
            (this.$8 = 0),
            (this.$9 = !1),
            (this.$10 = 0),
            (this.$11 = null));
        }
        var r = t.prototype;
        return (
          (r.initState = function (n) {
            (this.offlineResumeManager != null &&
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] initState called more than once",
                  ])),
              ),
              (this.offlineResumeManager = n.getBlockingStageManager()),
              o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                blocking_resume: !0,
              }),
              (this.$1 = n.getNonblockingStageManager));
          }),
          (r.processOfflinePreviewIb = function (t) {
            (o("WAWebPageLoadLogging").addPageLoadQplPoint(
              "offline_preview_received",
            ),
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.OfflineResume,
              ),
              o(
                "WAWebStorageCrashAnnotations",
              ).annotateCrashWithOfflineResumeMessages(t));
            var e = !this.isResumeFromRestartComplete();
            if (
              (this.$13(),
              (this.$9 = !o("WAWebRuntimeEnvironmentUtils").isServiceWorker()),
              this.$1 != null)
            ) {
              var n = this.$1;
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              this.isResumeFromRestartComplete()
                ? A(t.message)
                  ? (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[resume-from-open-tab][non-blocking] resume from current state of app",
                        ])),
                    ),
                    (this.offlineResumeManager = n({ mainScreenLoaded: !0 })))
                  : (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[resume-from-open-tab] restart client due to exceed the LIMIT, message: ",
                          "",
                        ])),
                      t.message,
                    ),
                    o("WAWebOfflineResumeUtils").refreshWindow(
                      "open_tab_limit",
                      { msg: t.message },
                    ))
                : !this.$2 &&
                  !this.isResumeFromRestartComplete() &&
                  A(t.message) &&
                  (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                    blocking_resume: !1,
                  }),
                  (this.offlineResumeManager = n()));
            }
            ((this.$2 = !0),
              w(),
              o("WAWebOneQueue").handleOneQueueOfflineStart(t),
              this.offlineResumeManager.processOfflinePreview(t),
              this.$14(e, t.count));
          }),
          (r.processMessageDecryptResult = function (t) {
            (this.offlineResumeManager.processDecryptResult(t),
              (this.$3 -= 1),
              this.$15());
          }),
          (r.addOfflinePendingMessage = function () {
            this.isResumeFromRestartComplete() || (this.$3 += 1);
          }),
          (r.newOfflineStanza = function (t, n, r) {
            var e = this;
            return (
              this.$16(),
              (this.$4 = !1),
              (this.$8 = Math.max(this.$8, r)),
              this.$6 == null &&
                (this.$6 = self.setTimeout(function () {
                  (e.$15(),
                    (e.$6 = null),
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][adaptive] _endBatchCheck: done",
                        ])),
                    ));
                }, 0)),
              this.offlineResumeManager.newOfflineStanza(t, n, r)
            );
          }),
          (r.offlineStanzaReceivedAfterComplete = function () {
            return this.offlineResumeManager.offlineStanzaReceivedAfterComplete();
          }),
          (r.getOfflineDeliveryProgress = function () {
            return this.offlineResumeManager.getOfflineDeliveryProgress();
          }),
          (r.getProcessedOfflineMessageCount = function () {
            return this.offlineResumeManager.getProcessedOfflineMessageCount();
          }),
          (r.getOfflineMessageCount = function () {
            return Math.max(
              this.offlineResumeManager.offlineMessagePreviewCounter,
              0,
            );
          }),
          (r.isResumeOnSocketDisconnectInProgress = function () {
            return this.offlineResumeManager.isResumeOnSocketDisconnectInProgress();
          }),
          (r.isResumeFromRestartComplete = function () {
            return this.offlineResumeManager.isResumeFromRestartComplete();
          }),
          (r.isResumeComplete = function () {
            return this.offlineResumeManager.isResumeComplete();
          }),
          (r.getHasMessagesToDownload = function () {
            return this.offlineResumeManager.getHasMessagesToDownload();
          }),
          (r.getFinishedDownloading = function () {
            return this.getOfflineDeliveryProgress() === 100;
          }),
          (r.processOfflineIb = function (t) {
            return (
              o("WAWebPageLoadLogging").addPageLoadQplPoint("offline_received"),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.mark(
                o("WAWebOfflineSyncQplSession").OfflineSyncPoint
                  .OfflineIbReceived,
              ),
              o("WAWebOneQueue").handleOneQueueOfflineIb(),
              this.offlineResumeManager
                .processOfflineSessionComplete(t)
                .finally(function () {
                  o("WAWebAppTracker").AppTracker.stop(
                    o("WAWebAppTracker").AppTrackerType.OfflineResume,
                  );
                })
            );
          }),
          (r.shouldUseOfflineResumeScreen = function () {
            return this.offlineResumeManager.shouldUseOfflineResumeScreen();
          }),
          (r.getResumeUIProgressBarType = function () {
            return this.offlineResumeManager.getResumeUIProgressBarType();
          }),
          (r.hasReceivedOfflinePreviewIb = function () {
            return this.$2;
          }),
          (r.hasInitOfflineResumeManager = function () {
            return this.offlineResumeManager != null;
          }),
          (r.getResumeType = function () {
            return this.offlineResumeManager.resumeType;
          }),
          (r.$13 = function () {
            ((this.$4 = !1), (this.$5 = !1), (this.$10 = 0));
            var e = this.$11;
            e != null &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchAbandoned(
                e,
              ));
          }),
          (r.$17 = function () {
            var e = o(
              "WAWebOfflineSyncQplSession",
            ).OfflineSyncQpl.markBatchRequest();
            return ((this.$11 = e), e);
          }),
          (r.$18 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$17(),
                  n = yield $(e);
                n === "sent"
                  ? o(
                      "WAWebOfflineSyncQplSession",
                    ).OfflineSyncQpl.markBatchSent(t)
                  : this.$19(t, n);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$19 = function (t, n) {
            this.$11 === t &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchAbandoned(
                t,
              ),
              n === "failed" && ((this.$4 = !1), (this.$10 = 0)));
          }),
          (r.$14 = function (t, n) {
            this.$20(t, n) &&
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][primary-snapshot] requesting the whole backlog: ",
                    "",
                  ])),
                n,
              ),
              this.$21(D(n), !0));
          }),
          (r.$20 = function (t, n) {
            return (
              t &&
              n > 0 &&
              !o("WAWebRuntimeEnvironmentUtils").isServiceWorker() &&
              !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
              o(
                "WAWebOfflineResumePrimarySnapshotGating",
              ).isOfflineResumePrimarySnapshotEnabled()
            );
          }),
          (r.$16 = function () {
            var e = this.$11;
            e != null &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchArrived(
                e,
              ));
          }),
          (r.$22 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o(
                "WAWebOfflineSyncQplSession",
              ).OfflineSyncQpl.markReadyWaitStart();
              (yield o(
                "WAWebEventsWaitForReadyForOffline",
              ).waitForOfflineProcessReady(),
                e &&
                  o(
                    "WAWebOfflineSyncQplSession",
                  ).OfflineSyncQpl.markReadyWaitEnd());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$21 = function (t, n) {
            var e = this;
            n === void 0 && (n = !1);
            var r = n === !0 || this.$10 === 0;
            (this.$12 != null && self.clearTimeout(this.$12),
              r
                ? (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive][debounced] _maybeRequestMoreStanza: request next batch, pending message ",
                        "",
                      ])),
                    this.$3,
                  ),
                  this.$18(t),
                  (this.$10 = Date.now()),
                  (this.$8 = 0),
                  (this.$4 = !0),
                  (this.$5 = !1))
                : (this.$12 = self.setTimeout(function () {
                    e.$23();
                  }, L)));
          }),
          (r.$23 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e === void 0 && (e = !1);
                var t = Date.now() - this.$10,
                  n =
                    e ||
                    (!this.isResumeComplete() &&
                      this.$3 <= v &&
                      t >= L &&
                      this.$4 === !1 &&
                      this.$5 === !0);
                if (
                  !(
                    (this.isResumeComplete() || this.$4 || this.$5) &&
                    (this.isResumeComplete() ||
                      o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][adaptive][debounced] _maybeRequestMoreStanzaDebounced: skipDebouncing: ",
                            ", prevPending: ",
                            ", currentPending: ",
                            ", complete: ",
                            "",
                          ])),
                        n,
                        this.$4,
                        this.$5,
                        this.isResumeComplete(),
                      ),
                    n === !1)
                  ) &&
                  this.$3 <= v
                ) {
                  (o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive][debounced] _maybeRequestMoreStanzaDebounced: start request next batch",
                      ])),
                  ),
                    (this.$5 = !0),
                    yield this.$22());
                  var r = v;
                  ((r = I(this.$8, this.$7)), (this.$7 = r), this.$21(D(r), n));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  (e === void 0 && (e = !1),
                  !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled())
                ) {
                  if (this.$9) return this.$23(e);
                  if (this.isResumeComplete() || this.$4 || this.$5) {
                    this.isResumeComplete() ||
                      o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume][adaptive] _maybeRequestMoreStanza: skip, prevPending: ",
                            ", currentPending: ",
                            ", complete: ",
                            "",
                          ])),
                        this.$4,
                        this.$5,
                        this.isResumeComplete(),
                      );
                    return;
                  }
                  this.$3 <= v &&
                    (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][adaptive] _maybeRequestMoreStanza: start request next batch",
                        ])),
                    ),
                    (this.$5 = !0),
                    yield this.$22(),
                    this.$18(v),
                    (this.$5 = !1),
                    (this.$4 = !0),
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume][adaptive] _maybeRequestMoreStanza: request next batch, pending message ",
                          "",
                        ])),
                      this.$3,
                    ));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    function D(e) {
      return o("WAWebBackgroundPauseState").backgroundPauseState.get() && x()
        ? Math.min(e, k)
        : e;
    }
    function x() {
      return (
        !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
        o("WAWebBackgroundPauseGating").isVoipDeprioritizeOfflineResumeEnabled()
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (
            ((t = o("WAComms").getComms()) == null
              ? void 0
              : t.isSocketConnected()) !== !0
          )
            return (
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] offline batch not sent: no connected socket",
                  ])),
              ),
              "not_connected"
            );
          try {
            return (
              yield o("WASmaxOfflineBatchRPC").sendBatchRPC({
                offlineBatchCount: e,
              }),
              "sent"
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume] offline batch request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("offline-batch-request-failed"),
              "failed"
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      var t = e.currentSize,
        n = e.multiplier,
        r = n === void 0 ? 0.2 : n,
        o = e.prevRetryCount,
        a = e.retryCount;
      if (a === 0) return R;
      if (a > 3) return S;
      var i = null,
        l = a - (o != null ? o : 0);
      if (l === 0) {
        var u;
        ((i = Math.floor(t * r) + t),
          ((u = E.get(a - 1)) != null ? u : R) <= i && (i = t));
      } else i = E.get(a);
      return (
        i != null || s(0, 75725, a, o != null ? o : "N/A", t),
        i != null ? i : R
      );
    }
    function M() {
      var e = null;
      return function (t, n) {
        var r = o("WAWebHandleOfflineAbProps").getOfflineDynamicBatchConfig(),
          a = r.multiplier,
          i = r.version,
          l = e;
        return (
          (e = t),
          i === "progressive"
            ? N({
                currentSize: n,
                multiplier: a,
                prevRetryCount: l,
                retryCount: t,
              })
            : R
        );
      };
    }
    function w() {
      var e = o("WAWebMessageQueueImpl").getMessageQueueImpl();
      (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
        message_queue_impl: e,
      }),
        o("WAWebOfflineSyncQplSession").OfflineSyncQpl.addAnnotations({
          string: { message_queue_impl: e },
        }));
    }
    function A(e) {
      return !(
        e >=
        o("WAWebABProps").getABPropConfigValue(
          "web_non_blocking_offline_resume_max_message_count",
        )
      );
    }
    var F = new T();
    ((l.DEFAULT_MAX_BATCH_SIZE = R),
      (l.OfflineMessageHandlerImpl = T),
      (l.capBatchSizeForActiveCall = D),
      (l.OfflineMessageHandler = F));
  },
  98,
);
