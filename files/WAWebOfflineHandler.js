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
    "WAWebNoop",
    "WAWebOfflineResumePrimarySnapshotGating",
    "WAWebOfflineResumeUtils",
    "WAWebOfflineSyncQplSession",
    "WAWebOneQueue",
    "WAWebPageLoadLogging",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebStorageCrashAnnotations",
    "WAWebWaitForInitialChatsSynced",
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
      v,
      S = 200,
      R = 10,
      L = 200,
      E = 100,
      k = new Map([
        [0, 200],
        [1, 100],
        [2, 50],
        [3, 10],
      ]),
      I = R,
      T = 5e3,
      D = new Set(["message", "receipt", "status"]),
      x = O(),
      $ = (function () {
        function t() {
          ((this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.$7 = S),
            (this.$8 = 0),
            (this.$9 = !1),
            (this.$10 = 0),
            (this.$11 = null),
            (this.$13 = null),
            (this.$14 = 0),
            (this.$15 = 0),
            (this.$16 = !1),
            (this.$17 = !1),
            (this.$18 = 0),
            (this.$19 = 0),
            (this.$20 = 0),
            (this.$22 = 0));
        }
        var n = t.prototype;
        return (
          (n.initState = function (n) {
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
              (this.$1 = n.getNonblockingStageManager),
              (this.$21 = n.maybeRequestPrimarySnapshot));
          }),
          (n.processOfflinePreviewIb = function (t) {
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
              (this.$23(),
              (this.$9 = !o("WAWebRuntimeEnvironmentUtils").isServiceWorker()),
              this.$1 != null)
            ) {
              var n = this.$1;
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              this.isResumeFromRestartComplete()
                ? W(t.message)
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
                  W(t.message) &&
                  (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                    blocking_resume: !1,
                  }),
                  (this.offlineResumeManager = n()));
            }
            ((this.$2 = !0),
              B(),
              o("WAWebOneQueue").handleOneQueueOfflineStart(t),
              this.offlineResumeManager.processOfflinePreview(t),
              this.$24(t),
              this.$25(e),
              this.$26(e));
          }),
          (n.processMessageDecryptResult = function (t) {
            (this.offlineResumeManager.processDecryptResult(t),
              (this.$3 -= 1),
              this.$27());
          }),
          (n.addOfflinePendingMessage = function () {
            this.isResumeFromRestartComplete() || (this.$3 += 1);
          }),
          (n.newOfflineStanza = function (t, n, r) {
            var e = this;
            return (
              (this.$19 = Math.max(this.$19 - 1, 0)),
              this.$28(),
              (this.$4 = !1),
              (this.$8 = Math.max(this.$8, r)),
              this.$6 == null &&
                (this.$6 = self.setTimeout(function () {
                  (e.$27(),
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
          (n.countOfflineEnvelope = function (t) {
            var e = this;
            return !t.attrs.offline ||
              !D.has(t.tag) ||
              N(t) ||
              !o(
                "WAWebOfflineResumePrimarySnapshotGating",
              ).isOfflineResumePrimarySnapshotEnabled()
              ? r("WAWebNoop")
              : ((this.$20 += 1),
                function () {
                  ((e.$20 -= 1), e.$29() && e.$27());
                });
          }),
          (n.offlineStanzaReceivedAfterComplete = function () {
            return this.offlineResumeManager.offlineStanzaReceivedAfterComplete();
          }),
          (n.getOfflineDeliveryProgress = function () {
            return this.offlineResumeManager.getOfflineDeliveryProgress();
          }),
          (n.getProcessedOfflineMessageCount = function () {
            return this.offlineResumeManager.getProcessedOfflineMessageCount();
          }),
          (n.getOfflineMessageCount = function () {
            return Math.max(
              this.offlineResumeManager.offlineMessagePreviewCounter,
              0,
            );
          }),
          (n.isResumeOnSocketDisconnectInProgress = function () {
            return this.offlineResumeManager.isResumeOnSocketDisconnectInProgress();
          }),
          (n.isResumeFromRestartComplete = function () {
            return this.offlineResumeManager.isResumeFromRestartComplete();
          }),
          (n.isResumeComplete = function () {
            return this.offlineResumeManager.isResumeComplete();
          }),
          (n.getHasMessagesToDownload = function () {
            return this.offlineResumeManager.getHasMessagesToDownload();
          }),
          (n.getFinishedDownloading = function () {
            return this.getOfflineDeliveryProgress() === 100;
          }),
          (n.processOfflineIb = function (t) {
            return (
              o("WAWebPageLoadLogging").addPageLoadQplPoint("offline_received"),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.mark(
                o("WAWebOfflineSyncQplSession").OfflineSyncPoint
                  .OfflineIbReceived,
              ),
              (this.$16 = !1),
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
          (n.shouldUseOfflineResumeScreen = function () {
            return this.offlineResumeManager.shouldUseOfflineResumeScreen();
          }),
          (n.getResumeUIProgressBarType = function () {
            return this.offlineResumeManager.getResumeUIProgressBarType();
          }),
          (n.hasReceivedOfflinePreviewIb = function () {
            return this.$2;
          }),
          (n.hasInitOfflineResumeManager = function () {
            return this.offlineResumeManager != null;
          }),
          (n.getResumeType = function () {
            return this.offlineResumeManager.resumeType;
          }),
          (n.$23 = function () {
            ((this.$4 = !1), (this.$5 = !1), (this.$10 = 0));
            var e = this.$11;
            e != null &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchAbandoned(
                e,
              ));
          }),
          (n.$30 = function () {
            var e = o(
              "WAWebOfflineSyncQplSession",
            ).OfflineSyncQpl.markBatchRequest();
            return ((this.$11 = e), e);
          }),
          (n.$31 = async function (t, n) {
            n === void 0 && (n = !1);
            var e = this.$30(),
              r = this.$14;
            this.$32(t, n);
            var a = await A(t);
            a === "sent"
              ? o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchSent(e)
              : (this.$33(r, t, n), this.$34(e, a));
          }),
          (n.$32 = function (t, n) {
            o(
              "WAWebOfflineResumePrimarySnapshotGating",
            ).isOfflineResumePrimarySnapshotEnabled() &&
              ((this.$19 += t),
              n || ((this.$18 -= t), this.$16 && (this.$16 = this.$18 > 0)));
          }),
          (n.$33 = function (t, n, r) {
            t === this.$14 &&
              ((this.$19 = Math.max(this.$19 - n, 0)),
              r ? ((this.$16 = !1), (this.$17 = !0)) : (this.$18 += n));
          }),
          (n.$34 = function (t, n) {
            this.$11 === t &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchAbandoned(
                t,
              ),
              n === "failed" && ((this.$4 = !1), (this.$10 = 0)));
          }),
          (n.$24 = function (t) {
            var e,
              n = (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
            (n !== this.$13 && this.$35(n),
              (this.$15 += t.message),
              (this.$18 += t.count));
          }),
          (n.$35 = function (t) {
            ((this.$13 = t),
              (this.$14 += 1),
              (this.$15 = 0),
              (this.$16 = !1),
              (this.$17 = !1),
              (this.$18 = 0),
              (this.$19 = 0));
          }),
          (n.$25 = function (t) {
            this.$17 ||
              !this.$36(t) ||
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][rcod] receiving the backlog ahead of processing: ",
                    "",
                  ])),
                this.$18,
              ),
              (this.$16 = this.$18 > 0),
              this.$37());
          }),
          (n.$36 = function (t) {
            return !W(this.$15) && this.$38(t);
          }),
          (n.$38 = function (t) {
            return (
              t &&
              !o(
                "WAWebWaitForInitialChatsSynced",
              ).isWaitForInitialChatsSyncedPending() &&
              !o("WAWebRuntimeEnvironmentUtils").isServiceWorker() &&
              !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
              o(
                "WAWebOfflineResumePrimarySnapshotGating",
              ).isOfflineResumePrimarySnapshotEnabled()
            );
          }),
          (n.$26 = function (t) {
            var e;
            this.$22 === this.$14 ||
              W(this.$15) ||
              !this.$38(t) ||
              ((this.$22 = this.$14),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][rcod] requesting recent conversations at ",
                    " offline messages",
                  ])),
                this.$15,
              ),
              (e = this.$21) == null || e.call(this));
          }),
          (n.$29 = function () {
            return this.$16 && !this.isResumeComplete();
          }),
          (n.$39 = function () {
            return this.$29() && !M();
          }),
          (n.$27 = function () {
            this.$39() ? this.$37() : this.$40() && this.$41();
          }),
          (n.$40 = function () {
            return !this.$29() || this.$42() >= P(L);
          }),
          (n.$42 = function () {
            return T - this.$19 - this.$20;
          }),
          (n.$37 = function () {
            var e = this.$18,
              t = Math.min(this.$42(), e);
            t > 0 && t >= Math.min(L, e) && this.$43(t);
          }),
          (n.$43 = function (t) {
            var e = P(t);
            ((this.$18 -= e), (this.$16 = this.$18 > 0), this.$44(e, !0, !0));
          }),
          (n.$28 = function () {
            var e = this.$11;
            e != null &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchArrived(
                e,
              ));
          }),
          (n.$45 = async function () {
            var e = o(
              "WAWebOfflineSyncQplSession",
            ).OfflineSyncQpl.markReadyWaitStart();
            (await o(
              "WAWebEventsWaitForReadyForOffline",
            ).waitForOfflineProcessReady(),
              e &&
                o(
                  "WAWebOfflineSyncQplSession",
                ).OfflineSyncQpl.markReadyWaitEnd());
          }),
          (n.$44 = function (t, n, r) {
            var e = this;
            (n === void 0 && (n = !1), r === void 0 && (r = !1));
            var a = n === !0 || this.$10 === 0;
            (this.$12 != null && self.clearTimeout(this.$12),
              a
                ? (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume][adaptive][debounced] _maybeRequestMoreStanza: request next batch, pending message ",
                        "",
                      ])),
                    this.$3,
                  ),
                  this.$31(t, r),
                  (this.$10 = Date.now()),
                  (this.$8 = 0),
                  (this.$4 = !0),
                  (this.$5 = !1))
                : (this.$12 = self.setTimeout(function () {
                    e.$46();
                  }, E)));
          }),
          (n.$46 = async function (t) {
            t === void 0 && (t = !1);
            var e = Date.now() - this.$10,
              n =
                t ||
                (!this.isResumeComplete() &&
                  this.$3 <= S &&
                  e >= E &&
                  this.$4 === !1 &&
                  this.$5 === !0);
            if (
              !(
                (this.isResumeComplete() || this.$4 || this.$5) &&
                (this.isResumeComplete() ||
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
              this.$3 <= S
            ) {
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][adaptive][debounced] _maybeRequestMoreStanzaDebounced: start request next batch",
                  ])),
              ),
                (this.$5 = !0),
                await this.$45());
              var r = S;
              ((r = x(this.$8, this.$7)), (this.$7 = r), this.$47(r, n));
            }
          }),
          (n.$47 = function (t, n) {
            var e = P(t);
            if (!this.$29() || this.$48(e)) {
              this.$44(e, n);
              return;
            }
            ((this.$5 = !1), this.$27());
          }),
          (n.$48 = function (t) {
            return M() && this.$42() >= t;
          }),
          (n.$41 = async function (t) {
            if (
              (t === void 0 && (t = !1),
              !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled())
            ) {
              if (this.$9) return this.$46(t);
              if (this.isResumeComplete() || this.$4 || this.$5) {
                this.isResumeComplete() ||
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
              this.$3 <= S &&
                (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][adaptive] _maybeRequestMoreStanza: start request next batch",
                    ])),
                ),
                (this.$5 = !0),
                await this.$45(),
                this.$31(S),
                (this.$5 = !1),
                (this.$4 = !0),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][adaptive] _maybeRequestMoreStanza: request next batch, pending message ",
                      "",
                    ])),
                  this.$3,
                ));
            }
          }),
          t
        );
      })();
    function P(e) {
      return M() ? Math.min(e, I) : e;
    }
    function N(e) {
      var t = e.attrs.type;
      return e.tag === "receipt" && (t === "retry" || t === "enc_rekey_retry");
    }
    function M() {
      return o("WAWebBackgroundPauseState").backgroundPauseState.get() && w();
    }
    function w() {
      return (
        !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
        o("WAWebBackgroundPauseGating").isVoipDeprioritizeOfflineResumeEnabled()
      );
    }
    async function A(e) {
      var t;
      if (
        ((t = o("WAComms").getComms()) == null
          ? void 0
          : t.isSocketConnected()) !== !0
      )
        return (
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] offline batch not sent: no connected socket",
              ])),
          ),
          "not_connected"
        );
      try {
        return (
          await o("WASmaxOfflineBatchRPC").sendBatchRPC({
            offlineBatchCount: e,
          }),
          "sent"
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] offline batch request failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("offline-batch-request-failed"),
          "failed"
        );
      }
    }
    function F(e) {
      var t = e.currentSize,
        n = e.multiplier,
        r = n === void 0 ? 0.2 : n,
        o = e.prevRetryCount,
        a = e.retryCount;
      if (a === 0) return L;
      if (a > 3) return R;
      var i = null,
        l = a - (o != null ? o : 0);
      if (l === 0) {
        var u;
        ((i = Math.floor(t * r) + t),
          ((u = k.get(a - 1)) != null ? u : L) <= i && (i = t));
      } else i = k.get(a);
      return (
        i != null || s(0, 75725, a, o != null ? o : "N/A", t),
        i != null ? i : L
      );
    }
    function O() {
      var e = null;
      return function (t, n) {
        var r = o("WAWebHandleOfflineAbProps").getOfflineDynamicBatchConfig(),
          a = r.multiplier,
          i = r.version,
          l = e;
        return (
          (e = t),
          i === "progressive"
            ? F({
                currentSize: n,
                multiplier: a,
                prevRetryCount: l,
                retryCount: t,
              })
            : L
        );
      };
    }
    function B() {
      var e = o("WAWebMessageQueueImpl").getMessageQueueImpl();
      (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
        message_queue_impl: e,
      }),
        o("WAWebOfflineSyncQplSession").OfflineSyncQpl.addAnnotations({
          string: { message_queue_impl: e },
        }));
    }
    function W(e) {
      return !(
        e >=
        o("WAWebABProps").getABPropConfigValue(
          "web_non_blocking_offline_resume_max_message_count",
        )
      );
    }
    var q = new $();
    ((l.DEFAULT_MAX_BATCH_SIZE = L),
      (l.OfflineMessageHandlerImpl = $),
      (l.capBatchSizeForActiveCall = P),
      (l.OfflineMessageHandler = q));
  },
  98,
);
