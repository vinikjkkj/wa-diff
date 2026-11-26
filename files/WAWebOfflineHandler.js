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
    "WAWebHandleMsgCommon",
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
      x = 60 * 1e3,
      $ = B(),
      P = (function () {
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
            (this.$23 = null),
            (this.$24 = 0),
            (this.$25 = 0));
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
              (this.$21 = n.maybeRequestPrimarySnapshot),
              (this.$22 = n.rcodChunkFinder));
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
              (this.$26(),
              (this.$9 = !o("WAWebRuntimeEnvironmentUtils").isServiceWorker()),
              this.$1 != null)
            ) {
              var n = this.$1;
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              this.isResumeFromRestartComplete()
                ? q(t.message)
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
                  q(t.message) &&
                  (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                    blocking_resume: !1,
                  }),
                  (this.offlineResumeManager = n()));
            }
            ((this.$2 = !0),
              W(),
              o("WAWebOneQueue").handleOneQueueOfflineStart(t),
              this.offlineResumeManager.processOfflinePreview(t),
              this.$27(t),
              this.$28(e),
              this.$29(e));
          }),
          (n.processMessageDecryptResult = function (t) {
            (this.offlineResumeManager.processDecryptResult(t),
              (this.$3 -= 1),
              this.$30(),
              this.$31());
          }),
          (n.addOfflinePendingMessage = function () {
            this.isResumeFromRestartComplete() || (this.$3 += 1);
          }),
          (n.newOfflineStanza = function (t, n, r) {
            var e = this;
            return (
              (this.$19 = Math.max(this.$19 - 1, 0)),
              this.$32(),
              (this.$4 = !1),
              (this.$8 = Math.max(this.$8, r)),
              this.$6 == null &&
                (this.$6 = self.setTimeout(function () {
                  (e.$31(),
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
              M(t) ||
              !o(
                "WAWebOfflineResumePrimarySnapshotGating",
              ).isOfflineResumePrimarySnapshotEnabled()
              ? r("WAWebNoop")
              : ((this.$20 += 1),
                function () {
                  ((e.$20 -= 1), e.$33() && e.$31());
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
            var e = this;
            return (
              o("WAWebPageLoadLogging").addPageLoadQplPoint("offline_received"),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.mark(
                o("WAWebOfflineSyncQplSession").OfflineSyncPoint
                  .OfflineIbReceived,
              ),
              (this.$16 = !1),
              this.$34(),
              o("WAWebOneQueue").handleOneQueueOfflineIb(),
              this.offlineResumeManager
                .processOfflineSessionComplete(t)
                .finally(function () {
                  (o("WAWebAppTracker").AppTracker.stop(
                    o("WAWebAppTracker").AppTrackerType.OfflineResume,
                  ),
                    e.$35());
                })
            );
          }),
          (n.queueOfflineMessage = function (t) {
            t !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
              (this.$24 += 1);
          }),
          (n.startOfflineMessage = function (t) {
            t !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
              (this.$24 = Math.max(this.$24 - 1, 0));
          }),
          (n.checkForRcodChunk = function (t) {
            if (this.$36()) {
              var e;
              (e = this.$22) == null || e.check(t, this.$24);
            }
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
          (n.$26 = function () {
            ((this.$4 = !1), (this.$5 = !1), (this.$10 = 0));
            var e = this.$11;
            e != null &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchAbandoned(
                e,
              ));
          }),
          (n.$37 = function () {
            var e = o(
              "WAWebOfflineSyncQplSession",
            ).OfflineSyncQpl.markBatchRequest();
            return ((this.$11 = e), e);
          }),
          (n.$38 = async function (t, n) {
            n === void 0 && (n = !1);
            var e = this.$37(),
              r = this.$14;
            this.$39(t, n);
            var a = await F(t);
            a === "sent"
              ? o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchSent(e)
              : (this.$40(r, t, n), this.$41(e, a));
          }),
          (n.$39 = function (t, n) {
            o(
              "WAWebOfflineResumePrimarySnapshotGating",
            ).isOfflineResumePrimarySnapshotEnabled() &&
              ((this.$19 += t),
              n || ((this.$18 -= t), this.$16 && (this.$16 = this.$18 > 0)));
          }),
          (n.$40 = function (t, n, r) {
            t === this.$14 &&
              ((this.$19 = Math.max(this.$19 - n, 0)),
              r ? ((this.$16 = !1), (this.$17 = !0)) : (this.$18 += n));
          }),
          (n.$41 = function (t, n) {
            this.$11 === t &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchAbandoned(
                t,
              ),
              n === "failed" && ((this.$4 = !1), (this.$10 = 0)));
          }),
          (n.$27 = function (t) {
            var e,
              n = (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
            (n !== this.$13 && this.$42(n),
              (this.$15 += t.message),
              (this.$18 += t.count));
          }),
          (n.$42 = function (t) {
            ((this.$13 = t),
              (this.$14 += 1),
              (this.$15 = 0),
              (this.$16 = !1),
              (this.$17 = !1),
              (this.$18 = 0),
              (this.$19 = 0),
              (this.$24 = 0),
              this.$35());
          }),
          (n.$28 = function (t) {
            this.$17 ||
              !this.$43(t) ||
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume][rcod] receiving the backlog ahead of processing: ",
                    "",
                  ])),
                this.$18,
              ),
              (this.$16 = this.$18 > 0),
              this.$44());
          }),
          (n.$43 = function (t) {
            return !q(this.$15) && this.$45(t);
          }),
          (n.$45 = function (t) {
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
          (n.$29 = function (t) {
            var e, n;
            if (!(this.$25 === this.$14 || q(this.$15) || !this.$45(t))) {
              ((this.$25 = this.$14),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][rcod] requesting recent conversations at ",
                      " offline messages",
                    ])),
                  this.$15,
                ));
              var r = this.$13;
              ((e = this.$22) == null ||
                e.start(function () {
                  return U(r);
                }),
                (n = this.$21) == null || n.call(this));
            }
          }),
          (n.$34 = function () {
            var e,
              t = this;
            ((e = this.$22) == null ? void 0 : e.isSearching()) === !0 &&
              this.$23 == null &&
              (this.$23 = self.setTimeout(function () {
                return t.$35();
              }, x));
          }),
          (n.$30 = function () {
            if (this.$36()) {
              var e;
              (e = this.$22) == null || e.onMessageProcessed(this.$24);
            }
          }),
          (n.$36 = function () {
            var e;
            return ((e = this.$22) == null ? void 0 : e.isSearching()) !== !0
              ? !1
              : this.isResumeComplete() && this.$23 == null
                ? (this.$35(), !1)
                : !0;
          }),
          (n.$35 = function () {
            var e;
            (this.$23 != null &&
              (self.clearTimeout(this.$23), (this.$23 = null)),
              (e = this.$22) == null || e.stop());
          }),
          (n.$33 = function () {
            return this.$16 && !this.isResumeComplete();
          }),
          (n.$46 = function () {
            return this.$33() && !w();
          }),
          (n.$31 = function () {
            this.$46() ? this.$44() : this.$47() && this.$48();
          }),
          (n.$47 = function () {
            return !this.$33() || this.$49() >= N(L);
          }),
          (n.$49 = function () {
            return T - this.$19 - this.$20;
          }),
          (n.$44 = function () {
            var e = this.$18,
              t = Math.min(this.$49(), e);
            t > 0 && t >= Math.min(L, e) && this.$50(t);
          }),
          (n.$50 = function (t) {
            var e = N(t);
            ((this.$18 -= e), (this.$16 = this.$18 > 0), this.$51(e, !0, !0));
          }),
          (n.$32 = function () {
            var e = this.$11;
            e != null &&
              ((this.$11 = null),
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.markBatchArrived(
                e,
              ));
          }),
          (n.$52 = async function () {
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
          (n.$51 = function (t, n, r) {
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
                  this.$38(t, r),
                  (this.$10 = Date.now()),
                  (this.$8 = 0),
                  (this.$4 = !0),
                  (this.$5 = !1))
                : (this.$12 = self.setTimeout(function () {
                    e.$53();
                  }, E)));
          }),
          (n.$53 = async function (t) {
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
                await this.$52());
              var r = S;
              ((r = $(this.$8, this.$7)), (this.$7 = r), this.$54(r, n));
            }
          }),
          (n.$54 = function (t, n) {
            var e = N(t);
            if (!this.$33() || this.$55(e)) {
              this.$51(e, n);
              return;
            }
            ((this.$5 = !1), this.$31());
          }),
          (n.$55 = function (t) {
            return w() && this.$49() >= t;
          }),
          (n.$48 = async function (t) {
            if (
              (t === void 0 && (t = !1),
              !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled())
            ) {
              if (this.$9) return this.$53(t);
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
                await this.$52(),
                this.$38(S),
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
    function N(e) {
      return w() ? Math.min(e, I) : e;
    }
    function M(e) {
      var t = e.attrs.type;
      return e.tag === "receipt" && (t === "retry" || t === "enc_rekey_retry");
    }
    function w() {
      return o("WAWebBackgroundPauseState").backgroundPauseState.get() && A();
    }
    function A() {
      return (
        !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
        o("WAWebBackgroundPauseGating").isVoipDeprioritizeOfflineResumeEnabled()
      );
    }
    async function F(e) {
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
    function O(e) {
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
    function B() {
      var e = null;
      return function (t, n) {
        var r = o("WAWebHandleOfflineAbProps").getOfflineDynamicBatchConfig(),
          a = r.multiplier,
          i = r.version,
          l = e;
        return (
          (e = t),
          i === "progressive"
            ? O({
                currentSize: n,
                multiplier: a,
                prevRetryCount: l,
                retryCount: t,
              })
            : L
        );
      };
    }
    function W() {
      var e = o("WAWebMessageQueueImpl").getMessageQueueImpl();
      (o("WAWebPageLoadLogging").addPageLoadQplAnnotation({
        message_queue_impl: e,
      }),
        o("WAWebOfflineSyncQplSession").OfflineSyncQpl.addAnnotations({
          string: { message_queue_impl: e },
        }));
    }
    function q(e) {
      return !(
        e >=
        o("WAWebABProps").getABPropConfigValue(
          "web_non_blocking_offline_resume_max_message_count",
        )
      );
    }
    function U(e) {
      var t = o("WAComms").getComms();
      return (
        (t == null ? void 0 : t.socketId) === e &&
        (t == null ? void 0 : t.isSocketConnected()) === !0
      );
    }
    var V = new P();
    ((l.DEFAULT_MAX_BATCH_SIZE = L),
      (l.OfflineMessageHandlerImpl = P),
      (l.capBatchSizeForActiveCall = N),
      (l.OfflineMessageHandler = V));
  },
  98,
);
