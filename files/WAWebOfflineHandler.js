__d(
  "WAWebOfflineHandler",
  [
    "invariant",
    "WALogger",
    "WASmaxOfflineBatchRPC",
    "WAWebAppTracker",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleOfflineAbProps",
    "WAWebOfflineResumeUtils",
    "WAWebPageLoadLogging",
    "WAWebQplFlowWrapper",
    "asyncToGeneratorRuntime",
    "qpl",
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
      y = r("qpl")._(891431279, "3267"),
      C = 200,
      b = 10,
      v = 200,
      S = 100,
      R = new Map([
        [0, 200],
        [1, 100],
        [2, 50],
        [3, 10],
      ]),
      L = I(),
      E = (function () {
        function t() {
          ((this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.$7 = C),
            (this.$8 = 0),
            (this.$9 = !1),
            (this.$10 = 0));
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
            if (
              (o("WAWebPageLoadLogging").addPageLoadQplPoint(
                "offline_preview_received",
              ),
              o("WAWebQplFlowWrapper").QPL.markerPoint(
                y,
                "OfflinePreviewReceived",
              ),
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.OfflineResume,
              ),
              this.$12(),
              (this.$9 = o(
                "WAWebHandleOfflineAbProps",
              ).isOfflineDynamicBatchSizeEnabled()),
              this.$1 != null)
            ) {
              var e = this.$1;
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              this.isResumeFromRestartComplete()
                ? T(t.message)
                  ? (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[resume-from-open-tab][non-blocking] resume from current state of app",
                        ])),
                    ),
                    (this.offlineResumeManager = e({ mainScreenLoaded: !0 })))
                  : (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[resume-from-open-tab] restart client due to exceed the LIMIT, message: ",
                          "",
                        ])),
                      t.message,
                    ),
                    o("WAWebOfflineResumeUtils").refreshWindow())
                : !this.$2 &&
                  !this.isResumeFromRestartComplete() &&
                  T(t.message) &&
                  (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                    blocking_resume: !1,
                  }),
                  (this.offlineResumeManager = e()));
            }
            ((this.$2 = !0),
              this.offlineResumeManager.processOfflinePreview(t));
          }),
          (r.processMessageDecryptResult = function (t) {
            (this.offlineResumeManager.processDecryptResult(t),
              (this.$3 -= 1),
              this.$13());
          }),
          (r.addOfflinePendingMessage = function () {
            this.isResumeFromRestartComplete() || (this.$3 += 1);
          }),
          (r.newOfflineStanza = function (t, n, r) {
            var e = this;
            return (
              (this.$4 = !1),
              (this.$8 = Math.max(this.$8, r)),
              this.$6 == null &&
                (this.$6 = self.setTimeout(function () {
                  (e.$13(),
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
              o("WAWebQplFlowWrapper").QPL.markerPoint(y, "OfflineIbReceived"),
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
          (r.$12 = function () {
            ((this.$4 = !1), (this.$5 = !1), (this.$10 = 0));
          }),
          (r.$14 = function (t, n) {
            var e = this;
            n === void 0 && (n = !1);
            var r = n === !0 || this.$10 === 0;
            (this.$11 != null && self.clearTimeout(this.$11),
              r
                ? (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive][debounced] _maybeRequestMoreStanza: request next batch, pending message ",
                        "",
                      ])),
                    this.$3,
                  ),
                  o("WASmaxOfflineBatchRPC").sendBatchRPC({
                    offlineBatchCount: t,
                  }),
                  (this.$10 = Date.now()),
                  (this.$8 = 0),
                  (this.$4 = !0),
                  (this.$5 = !1))
                : (this.$11 = self.setTimeout(function () {
                    e.$15();
                  }, S)));
          }),
          (r.$15 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e === void 0 && (e = !1);
                var t = Date.now() - this.$10,
                  n =
                    e ||
                    (!this.isResumeComplete() &&
                      this.$3 <= C &&
                      t >= S &&
                      this.$4 === !1 &&
                      this.$5 === !0);
                if (
                  !(
                    (this.isResumeComplete() || this.$4 || this.$5) &&
                    (this.isResumeComplete() ||
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  this.$3 <= C
                ) {
                  (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive][debounced] _maybeRequestMoreStanzaDebounced: start request next batch",
                      ])),
                  ),
                    (this.$5 = !0),
                    yield o(
                      "WAWebEventsWaitForReadyForOffline",
                    ).waitForOfflineProcessReady());
                  var r = C;
                  ((r = L(this.$8, this.$7)), (this.$7 = r), this.$14(r, n));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$13 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if ((e === void 0 && (e = !1), this.$9)) return this.$15(e);
                if (this.isResumeComplete() || this.$4 || this.$5) {
                  this.isResumeComplete() ||
                    o("WALogger").LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
                this.$3 <= C &&
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive] _maybeRequestMoreStanza: start request next batch",
                      ])),
                  ),
                  (this.$5 = !0),
                  yield o(
                    "WAWebEventsWaitForReadyForOffline",
                  ).waitForOfflineProcessReady(),
                  o("WASmaxOfflineBatchRPC").sendBatchRPC({
                    offlineBatchCount: C,
                  }),
                  (this.$5 = !1),
                  (this.$4 = !0),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive] _maybeRequestMoreStanza: request next batch, pending message ",
                        "",
                      ])),
                    this.$3,
                  ));
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
    function k(e, t, n, r) {
      if ((r === void 0 && (r = 0.2), e === 0)) return v;
      if (e > 3) return b;
      var o = null,
        a = e - (t != null ? t : 0);
      if (a === 0) {
        var i;
        ((o = Math.floor(n * r) + n),
          ((i = R.get(e - 1)) != null ? i : v) <= o && (o = n));
      } else o = R.get(e);
      return (
        o != null || s(0, 75725, e, t != null ? t : "N/A", n),
        o != null ? o : v
      );
    }
    function I() {
      var e = null;
      return function (t, n) {
        var r = o("WAWebHandleOfflineAbProps").getOfflineDynamicBatchConfig(),
          a = r.multiplier,
          i = r.version,
          l = e;
        return ((e = t), i === "progressive" ? k(t, l, n, a) : v);
      };
    }
    function T(e) {
      return !(
        e >=
        o(
          "WAWebHandleOfflineAbProps",
        ).getNonBlockingOfflineResumeMaxMessageCount()
      );
    }
    var D = new E();
    ((l.DEFAULT_MAX_BATCH_SIZE = v),
      (l.OfflineMessageHandlerImpl = E),
      (l.OfflineMessageHandler = D));
  },
  98,
);
