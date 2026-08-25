__d(
  "WAWebWamOfflineResumeReporter",
  [
    "$InternalEnum",
    "WALogger",
    "WARandomHex",
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebDBTableUsage",
    "WAWebGetAllModelStorageTableNames",
    "WAWebOfflineResumeStageWamEvent",
    "WAWebOfflineResumeWamEvent",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumOfflineResumeModes",
    "WAWebWamEnumOfflineResumeStages",
    "WAWebWamEnumWebScenarioCode",
    "asyncToGeneratorRuntime",
    "gkx",
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
      f = r("qpl")._(891431279, "3267"),
      g = 0.01,
      h = n("$InternalEnum").Mirrored([
        "ResumeFromRestart",
        "ResumeFromOpentab",
      ]),
      y = (function () {
        function e(e) {
          this._mode = e;
        }
        var t = e.prototype;
        return (
          (t.start = function () {
            (this.drop(),
              (this._qplEvent = o("WAWebQplFlowWrapper").QPL.markerStart(f, {
                annotations: { string: { mode: h.getName(this._mode) } },
              })));
          }),
          (t.end = function () {
            var e;
            (e = this._qplEvent) == null || e.end(2);
          }),
          (t.drop = function () {
            var e;
            ((e = this._qplEvent) == null || e.drop(),
              (this._qplEvent = void 0));
          }),
          (t._addPoint = function (t, n) {
            var e,
              r = n != null ? { data: n } : {};
            (e = this._qplEvent) == null || e.addPoint(t, r);
          }),
          (t.markOfflinePreviewReceived = function () {
            this._addPoint("offlinePreviewReceived");
          }),
          (t.markMainScreenLoad = function () {
            this._addPoint("mainScreenLoad");
          }),
          (t.setAnnotations = function (t) {
            var e;
            (e = this._qplEvent) == null || e.annotate(t);
          }),
          (t.addPoint = function (t) {
            var e;
            (e = this._qplEvent) == null || e.addPoint(t);
          }),
          (t.addAnnotations = function (t) {
            var e;
            (e = this._qplEvent) == null || e.annotate(t);
          }),
          e
        );
      })(),
      C = (function () {
        function e(e, t) {
          ((this._sessionId = t),
            (this._offlineStartT = self.performance.now()),
            (this._resumeMode = e),
            window.document &&
              (this._isStartedInForeground = !document.hidden));
        }
        var t = e.prototype;
        return (
          (t._commitOfflineStage = function (t) {
            var e = {
              offlineSessionId: this._sessionId,
              offlineResumeMode:
                this._resumeMode === h.ResumeFromOpentab
                  ? o("WAWebWamEnumOfflineResumeModes").OFFLINE_RESUME_MODES
                      .RESUME_FROM_OPEN_TAB
                  : o("WAWebWamEnumOfflineResumeModes").OFFLINE_RESUME_MODES
                      .RESUME_FROM_RESTART,
              offlineStageTimestampMs: Math.floor(
                self.performance.now() - this._offlineStartT,
              ),
              currentOfflineStage: t,
            };
            (window.document && (e.isResumeInForeground = !document.hidden),
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
                (t.mailboxAge = R(this._oldestStanzaTs)),
              this._offlineDecryptErrorCount != null &&
                (t.offlineDecryptErrorCount = this._offlineDecryptErrorCount),
              this._chatThreadCount != null &&
                (t.chatThreadCount = S(this._chatThreadCount, 10)),
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
      b = (function (e) {
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
      v = (function () {
        function t() {
          this._initEvents(h.ResumeFromRestart);
        }
        var r = t.prototype;
        return (
          (r._initEvents = function (t) {
            ((this.isInitialSync = !1),
              (this.oldestStanzaTs = 0),
              (this.offlineResume = new b()),
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
              (this.qpl = new y(t)));
            var e = this._generateOfflineSessionId();
            ((this.offlineStage = new C(t, e)),
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
            var e, n, r, o;
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
                ((o = this.offlineResume.offlineCallCount) != null ? o : 0) ===
                  0 && (this.offlineResume.offlineCallCount = t.call)));
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
            var e = S(t, 10);
            this.offlineResume && (this.offlineResume.chatThreadCount = e);
          }),
          (r.logOfflinePreackCount = function (t, n) {
            (n === void 0 && (n = !1),
              this.offlineResume &&
                (n === !0
                  ? (this.offlineResume.preackMessageCount += t)
                  : (this.offlineResume.preackReceiptCount += t)));
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
              this.isInitialSync || this.offlineStage.logProcessComplete());
          }),
          (r.logMainScreenLoadT = function () {
            (this._logPerformanceT("mainScreenLoadT"),
              this.qpl.markMainScreenLoad(),
              this.isInitialSync || this.offlineStage.logScreenLoad());
          }),
          (r.logOfflinePreviewT = function () {
            (this._logPerformanceT("offlinePreviewT"),
              this.qpl.markOfflinePreviewReceived());
          }),
          (r.logOfflineStartT = function () {
            (this._logPerformanceT("pageLoadT"),
              this.offlineStage.logOfflineStart(),
              window.document &&
                this.offlineResume &&
                (this.offlineResume.isResumeStartedInForeground =
                  !document.hidden));
          }),
          (r.logSocketConnectT = function () {
            (this.qpl.start(),
              this._logPerformanceT("socketConnectT"),
              this.isInitialSync || this.offlineStage.logSocketConnect());
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
                ((t.offlineSizeBytes = S(t.offlineSizeBytes, 1e3)),
                  (t.mailboxAge = R(this.oldestStanzaTs)),
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
                  window.document &&
                    (t.isResumeInForeground = !document.hidden),
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
                if (!this.isInitialSync && !r) {
                  (t.commit(),
                    this.qpl.setAnnotations({
                      int: {
                        messageCount: t.offlineMessageCount,
                        receiptCount: t.offlineReceiptCount,
                        notificationCount: t.offlineNotificationCount,
                        chatThreadCount: t.chatThreadCount,
                        sizeBytes: t.offlineSizeBytes,
                        decryptErrorCount: t.offlineDecryptErrorCount,
                        preackMessageCount: t.preackMessageCount,
                        preackReceiptCount: t.preackReceiptCount,
                      },
                      bool: {
                        isResumeInForeground: t.isResumeInForeground,
                        isBlockingOfflineResume: n,
                      },
                    }),
                    this.qpl.end(),
                    this.endTableUsageMetric());
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
                      .sendLogs("slow-offline-resume", { sampling: g }),
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
                        .sendLogs("slow-offline-resume", { sampling: g }));
                } else
                  (this.isInitialSync
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
                      ),
                    this.qpl.drop());
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
              (this._initEvents(h.ResumeFromOpentab), this.logOfflineStartT());
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
    function S(e, t) {
      return r("gkx")("26258") ? Math.round(e / t) * t : e;
    }
    function R(e) {
      if (e === 0) return 0;
      var t = o("WATimeUtils").unixTime() - e;
      return Math.round(t / o("WATimeUtils").DAY_SECONDS);
    }
    var L = new v();
    ((l.roundUp = S), (l.countDays = R), (l.OfflineResumeReporter = L));
  },
  98,
);
