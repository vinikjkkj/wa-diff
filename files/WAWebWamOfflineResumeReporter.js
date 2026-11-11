__d(
  "WAWebWamOfflineResumeReporter",
  [
    "$InternalEnum",
    "WALogger",
    "WARandomHex",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebDBTableUsage",
    "WAWebGetAllModelStorageTableNames",
    "WAWebNullFunc",
    "WAWebOfflineResumeStageWamEvent",
    "WAWebOfflineResumeWamEvent",
    "WAWebOfflineSyncQplSession",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumOfflineResumeModes",
    "WAWebWamEnumOfflineResumeStages",
    "WAWebWamEnumWebScenarioCode",
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
      f = 0.01,
      g = n("$InternalEnum").Mirrored([
        "ResumeFromRestart",
        "ResumeFromOpentab",
      ]),
      h = (function () {
        function e(e, t) {
          ((this._sessionId = t),
            (this._offlineStartT = self.performance.now()),
            (this._resumeMode = e),
            globalThis.document != null &&
              (this._isStartedInForeground = !globalThis.document.hidden));
        }
        var t = e.prototype;
        return (
          (t._commitOfflineStage = function (t) {
            var e = {
              offlineSessionId: this._sessionId,
              offlineResumeMode:
                this._resumeMode === g.ResumeFromOpentab
                  ? o("WAWebWamEnumOfflineResumeModes").OFFLINE_RESUME_MODES
                      .RESUME_FROM_OPEN_TAB
                  : o("WAWebWamEnumOfflineResumeModes").OFFLINE_RESUME_MODES
                      .RESUME_FROM_RESTART,
              offlineStageTimestampMs: Math.floor(
                self.performance.now() - this._offlineStartT,
              ),
              currentOfflineStage: t,
            };
            (globalThis.document != null &&
              (e.isResumeInForeground = !globalThis.document.hidden),
              this._isStartedInForeground != null &&
                (e.isResumeStartedInForeground = this._isStartedInForeground));
            var n = new (o(
              "WAWebOfflineResumeStageWamEvent",
            ).OfflineResumeStageWamEvent)(e);
            (this._addOfflineMetadata(n), n.commit());
          }),
          (t.logOfflineStart = function () {
            this._offlineStartT = self.performance.now();
          }),
          (t.logSocketConnect = function () {
            this._commitOfflineStage(
              o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES
                .SOCKET_CONNECT,
            );
          }),
          (t.logProcessComplete = function () {
            this._commitOfflineStage(
              o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES
                .PROCESS_COMPLETE,
            );
          }),
          (t.logScreenLoad = function () {
            this._commitOfflineStage(
              o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES
                .SCREEN_LOAD,
            );
          }),
          (t.logOfflinePreview = function () {
            this._commitOfflineStage(
              o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES
                .OFFLINE_PREVIEW,
            );
          }),
          (t.logOfflineCount = function (t) {
            var e, n, r, o;
            (((e = this._offlineMessageCount) != null ? e : 0) === 0 &&
              (this._offlineMessageCount = t.message),
              ((n = this._offlineReceiptCount) != null ? n : 0) === 0 &&
                (this._offlineReceiptCount = t.receipt),
              ((r = this._offlineNotificationCount) != null ? r : 0) === 0 &&
                (this._offlineNotificationCount = t.notification),
              ((o = this._offlineCallCount) != null ? o : 0) === 0 &&
                (this._offlineCallCount = t.call));
          }),
          (t.logOfflineDecryptionErrorCount = function (t) {
            this._offlineDecryptErrorCount = t;
          }),
          (t.logOfflineChatThreadCount = function (t) {
            this._chatThreadCount = t;
          }),
          (t.logOldestStanzaTime = function (t) {
            (this._oldestStanzaTs == null || this._oldestStanzaTs > t) &&
              (this._oldestStanzaTs = t);
          }),
          (t.setLastPushCompleteTimestamp = function () {
            this._lastPushCompleteTimestampMs = o(
              "WAWebUserPrefsGeneral",
            ).getLastPushCompleteTimestamp();
          }),
          (t._addOfflineMetadata = function (t) {
            (this._offlineMessageCount != null &&
              (t.offlineMessageCount = this._offlineMessageCount),
              this._offlineReceiptCount != null &&
                (t.offlineReceiptCount = this._offlineReceiptCount),
              this._offlineNotificationCount != null &&
                (t.offlineNotificationCount = this._offlineNotificationCount),
              this._offlineCallCount != null &&
                (t.offlineCallCount = this._offlineCallCount),
              this._oldestStanzaTs != null &&
                (t.mailboxAge = v(this._oldestStanzaTs)),
              this._offlineDecryptErrorCount != null &&
                (t.offlineDecryptErrorCount = this._offlineDecryptErrorCount),
              this._chatThreadCount != null &&
                (t.chatThreadCount = b(this._chatThreadCount, 10)),
              this._lastPushCompleteTimestampMs != null &&
                t.currentOfflineStage ===
                  o("WAWebWamEnumOfflineResumeStages").OFFLINE_RESUME_STAGES
                    .SOCKET_CONNECT &&
                ((t.lastPushTimestampMs = this._lastPushCompleteTimestampMs),
                o("WAWebUserPrefsGeneral").clearLastPushCompleteTimestamp(),
                (this._lastPushCompleteTimestampMs = null)));
          }),
          e
        );
      })(),
      y = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.offlinePreviewCount = 0),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebOfflineResumeWamEvent").OfflineResumeWamEvent),
      C = (function () {
        function t() {
          ((this.$1 = null),
            (this.qpl = o("WAWebOfflineSyncQplSession").OfflineSyncQpl),
            (this.getPageLoadId = o("WAWebNullFunc").returnNull),
            (this.$2 = g.ResumeFromRestart),
            (this.$3 = o(
              "WAWebOfflineSyncQplSession",
            ).OfflineSyncEntryPoint.WhatsApp),
            (this.$4 = null),
            this._initEvents(g.ResumeFromRestart));
        }
        var r = t.prototype;
        return (
          (r._initEvents = function (t) {
            ((this.isInitialSync = !1),
              (this.oldestStanzaTs = 0),
              (this.offlineResume = new y()),
              (this.offlineResume.offlineMessageCount = 0),
              (this.offlineResume.offlineReceiptCount = 0),
              (this.offlineResume.offlineNotificationCount = 0),
              (this.offlineResume.offlineCallCount = 0),
              (this.offlineResume.offlineDecryptErrorCount = 0),
              (this.offlineResume.offlineSizeBytes = 0),
              (this.offlineResume.chatThreadCount = 0),
              (this.offlineResume.preackMessageCount = 0),
              (this.offlineResume.preackReceiptCount = 0),
              (this.offlineResume.isOfflineCompleteMissed = !1),
              this.$1 != null &&
                ((this.offlineResume.preacksCount = this.$1), (this.$1 = null)),
              (this.$2 = t));
            var e = this._generateOfflineSessionId();
            ((this.offlineSessionId = e),
              (this.offlineStage = new h(t, e)),
              (this.endTableUsageMetric = o(
                "WAWebDBTableUsage",
              ).beginDBTableUsage({
                webScenario: o("WAWebWamEnumWebScenarioCode").WEB_SCENARIO_CODE
                  .OFFLINE_RESUME,
                tablesToLog: new Set(
                  o("WAWebGetAllModelStorageTableNames")
                    .allModelStorageTableNames,
                ),
                offlineSessionId: e,
              })));
          }),
          (r.logOldestStanzaTime = function (t) {
            (this.offlineStage.logOldestStanzaTime(t),
              this.offlineResume != null &&
                (this.oldestStanzaTs === 0 || this.oldestStanzaTs > t) &&
                (this.oldestStanzaTs = t));
          }),
          (r.logOfflineCount = function (t) {
            var e, n, r, a;
            (this.offlineStage.logOfflineCount(t),
              this.offlineStage.logOfflinePreview(),
              this.offlineResume &&
                ((this.offlineResume.offlinePreviewCount = t.count),
                ((e = this.offlineResume.offlineMessageCount) != null
                  ? e
                  : 0) === 0 &&
                  (this.offlineResume.offlineMessageCount = t.message),
                ((n = this.offlineResume.offlineReceiptCount) != null
                  ? n
                  : 0) === 0 &&
                  (this.offlineResume.offlineReceiptCount = t.receipt),
                ((r = this.offlineResume.offlineNotificationCount) != null
                  ? r
                  : 0) === 0 &&
                  (this.offlineResume.offlineNotificationCount =
                    t.notification),
                ((a = this.offlineResume.offlineCallCount) != null ? a : 0) ===
                  0 && (this.offlineResume.offlineCallCount = t.call),
                o("WAWebOfflineSyncQplSession").OfflineSyncQpl.addAnnotations({
                  int: { offlinePreviewCount: t.count },
                })));
          }),
          (r.logOfflineDecryptionErrorCount = function (t) {
            (this.offlineStage.logOfflineDecryptionErrorCount(t),
              this.offlineResume &&
                (this.offlineResume.offlineDecryptErrorCount = t));
          }),
          (r.logAddOfflineSizeBytes = function (t) {
            this.offlineResume && (this.offlineResume.offlineSizeBytes += t);
          }),
          (r.logOfflineChatThreadCount = function (t) {
            this.offlineStage.logOfflineChatThreadCount(t);
            var e = b(t, 10);
            this.offlineResume && (this.offlineResume.chatThreadCount = e);
          }),
          (r.logOfflinePreackCount = function (t, n) {
            (n === void 0 && (n = !1),
              this.offlineResume &&
                (n === !0
                  ? (this.offlineResume.preackMessageCount += t)
                  : (this.offlineResume.preackReceiptCount += t)));
          }),
          (r.logPendingPreackCount = function (t) {
            if (this.offlineResume) {
              this.offlineResume.preacksCount = t;
              return;
            }
            this.$1 = t;
          }),
          (r.getPendingPreackCount = function () {
            var e, t;
            return (e =
              (t = this.offlineResume) == null ? void 0 : t.preacksCount) !=
              null
              ? e
              : this.$1;
          }),
          (r.logOfflinePassiveT = function () {
            var e;
            ((e = this.offlineResume) == null ? void 0 : e.passiveModeT) ==
              null && this._logPerformanceT("passiveModeT");
          }),
          (r._logPerformanceT = function (t) {
            var e = Math.floor(self.performance.now());
            this.offlineResume != null && (this.offlineResume[t] = e);
          }),
          (r.logLastStanzaT = function () {
            var e;
            ((e = this.offlineResume) == null ? void 0 : e.lastStanzaT) ==
              null &&
              (this._logPerformanceT("lastStanzaT"),
              this.isInitialSync ||
                (this.offlineStage.logProcessComplete(),
                o("WAWebOfflineSyncQplSession").OfflineSyncQpl.mark(
                  o("WAWebOfflineSyncQplSession").OfflineSyncPoint
                    .ProcessComplete,
                )));
          }),
          (r.logMainScreenLoadT = function () {
            (this._logPerformanceT("mainScreenLoadT"),
              this.isInitialSync || this.offlineStage.logScreenLoad());
          }),
          (r.logOfflinePreviewT = function () {
            (this._logPerformanceT("offlinePreviewT"),
              this.isInitialSync ||
                o("WAWebOfflineSyncQplSession").OfflineSyncQpl.mark(
                  o("WAWebOfflineSyncQplSession").OfflineSyncPoint
                    .OfflinePreviewReceived,
                ));
          }),
          (r.logOfflineStartT = function () {
            (this._logPerformanceT("pageLoadT"),
              this.offlineStage.logOfflineStart(),
              globalThis.document != null &&
                this.offlineResume &&
                (this.offlineResume.isResumeStartedInForeground =
                  !globalThis.document.hidden));
          }),
          (r.logSocketConnectT = function () {
            (this._logPerformanceT("socketConnectT"),
              this.isInitialSync ||
                (this.$5(), this.offlineStage.logSocketConnect()));
          }),
          (r.$5 = function () {
            if (!this.isInitialSync) {
              var e;
              o("WAWebOfflineSyncQplSession").OfflineSyncQpl.begin({
                entryPoint: this.$3,
                guestExperienceType: this.$4,
                mode:
                  this.$2 === g.ResumeFromOpentab
                    ? o("WAWebOfflineSyncQplSession").OfflineSyncMode
                        .FromOpenTab
                    : o("WAWebOfflineSyncQplSession").OfflineSyncMode
                        .FromRestart,
                sessionId: this.offlineSessionId,
              });
              var t =
                (e = this.offlineResume) == null
                  ? void 0
                  : e.isResumeStartedInForeground;
              t != null &&
                o("WAWebOfflineSyncQplSession").OfflineSyncQpl.addAnnotations({
                  bool: { isResumeStartedInForeground: t },
                });
              var n = this.getPageLoadId();
              n != null &&
                o("WAWebOfflineSyncQplSession").OfflineSyncQpl.addAnnotations({
                  string: { page_load_id: n },
                });
            }
          }),
          (r.setEntryPoint = function (t, n) {
            ((this.$3 = t), (this.$4 = n));
          }),
          (r.setPageLoadIdProvider = function (t) {
            this.getPageLoadId = t;
          }),
          (r.logMissedOfflineComplete = function () {
            this.offlineResume &&
              (this.offlineResume.isOfflineCompleteMissed = !0);
          }),
          (r.setIsInitialSync = function () {
            this.isInitialSync = !0;
          }),
          (r.setLastPushCompleteTimestamp = function () {
            return this.offlineStage.setLastPushCompleteTimestamp();
          }),
          (r.isBlockingOfflineResume = function (t) {
            return t.lastStanzaT != null && t.mainScreenLoadT != null
              ? t.lastStanzaT < t.mainScreenLoadT
              : t.socketConnectT != null &&
                  t.lastStanzaT != null &&
                  t.mainScreenLoadT == null
                ? !0
                : t.socketConnectT != null &&
                    t.lastStanzaT == null &&
                    t.mainScreenLoadT != null
                  ? !1
                  : null;
          }),
          (r.commit = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this.offlineResume;
              if (t) {
                ((t.offlineSizeBytes = b(t.offlineSizeBytes, 1e3)),
                  (t.mailboxAge = v(this.oldestStanzaTs)),
                  yield o("WAWebUserPrefsMultiDevice").setRecentMailboxAgeDays(
                    t.mailboxAge,
                  ));
                var n = this.isBlockingOfflineResume(t);
                (t.lastStanzaT != null &&
                  t.socketConnectT != null &&
                  ((t.offlineProcessingT = t.lastStanzaT - t.socketConnectT),
                  o("WAWebAppTracker").attachWAMAppContext(
                    t,
                    t.offlineProcessingT,
                  )),
                  globalThis.document != null &&
                    (t.isResumeInForeground = !globalThis.document.hidden),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] done cnt=",
                        " msg=",
                        " rcpt=",
                        " notif=",
                        " call=",
                        " chat=",
                        "",
                      ])),
                    t.offlinePreviewCount,
                    t.offlineMessageCount,
                    t.offlineReceiptCount,
                    t.offlineNotificationCount,
                    t.offlineCallCount,
                    t.chatThreadCount,
                  ),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] sz=",
                        " decErr=",
                        " preMsg=",
                        " preRcpt=",
                        " lastT=",
                        " pageT=",
                        "",
                      ])),
                    t.offlineSizeBytes,
                    t.offlineDecryptErrorCount,
                    t.preackMessageCount,
                    t.preackReceiptCount,
                    t.lastStanzaT,
                    t.pageLoadT,
                  ),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] sockT=",
                        " passT=",
                        " prevT=",
                        " mainT=",
                        " procT=",
                        " fg=",
                        "",
                      ])),
                    t.socketConnectT,
                    t.passiveModeT,
                    t.offlinePreviewT,
                    t.mainScreenLoadT,
                    t.offlineProcessingT,
                    t.isResumeInForeground,
                  ),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] done startFg=",
                        " blocking=",
                        " age=",
                        "",
                      ])),
                    t.isResumeStartedInForeground,
                    n,
                    t.mailboxAge,
                  ));
                var r = t.offlinePreviewCount === 0;
                if (
                  (this.isInitialSync ||
                    o("WAWebOfflineSyncQplSession").OfflineSyncQpl.endSuccess({
                      int: { decryptErrorCount: t.offlineDecryptErrorCount },
                    }),
                  !this.isInitialSync && !r)
                ) {
                  (t.commit(), this.endTableUsageMetric());
                  var a = 120 * 1e3,
                    i = 10,
                    l = Math.max(t.mainScreenLoadT, t.lastStanzaT);
                  (l - t.socketConnectT > a &&
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume] load time > limit: ",
                            "",
                          ])),
                        t.mainScreenLoadT,
                      )
                      .sendLogs("slow-offline-resume", { sampling: f }),
                    t.offlineDecryptErrorCount > i &&
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume] decrypt err > limit: ",
                              "",
                            ])),
                          t.offlineDecryptErrorCount,
                        )
                        .sendLogs("slow-offline-resume", { sampling: f }));
                } else
                  (o("WAWebABProps").getABPropConfigValue(
                    "web_memlab_fixes_4",
                  ) &&
                    o("WAWebDBTableUsage").discardDBTableUsage(
                      this.endTableUsageMetric,
                    ),
                    this.isInitialSync
                      ? o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume] skip: initial sync",
                            ])),
                        )
                      : r &&
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume] skip: no envelopes",
                            ])),
                        ));
                this.offlineResume = null;
              }
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.resetEvent = function () {
            this.offlineResume == null &&
              (this._initEvents(g.ResumeFromOpentab), this.logOfflineStartT());
          }),
          (r._generateOfflineSessionId = function () {
            return (
              "" +
              o("WARandomHex").randomHex(4) +
              o("WATimeUtils").unixTimeWithoutClockSkewCorrection().toString(10)
            );
          }),
          t
        );
      })();
    function b(e, t) {
      return r("gkx")("26258") ? Math.round(e / t) * t : e;
    }
    function v(e) {
      if (e === 0) return 0;
      var t = o("WATimeUtils").unixTime() - e;
      return Math.round(t / o("WATimeUtils").DAY_SECONDS);
    }
    var S = new C();
    ((l.roundUp = b), (l.countDays = v), (l.OfflineResumeReporter = S));
  },
  98,
);
