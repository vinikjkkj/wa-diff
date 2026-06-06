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
      g = n("$InternalEnum").Mirrored([
        "ResumeFromRestart",
        "ResumeFromOpentab",
      ]),
      h = (function () {
        function e(e) {
          this._mode = e;
        }
        var t = e.prototype;
        return (
          (t.start = function () {
            (this.drop(),
              (this._qplEvent = o("WAWebQplFlowWrapper").QPL.markerStart(f, {
                annotations: { string: { mode: g.getName(this._mode) } },
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
      y = (function () {
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
                (t.mailboxAge = S(this._oldestStanzaTs)),
              this._offlineDecryptErrorCount != null &&
                (t.offlineDecryptErrorCount = this._offlineDecryptErrorCount),
              this._chatThreadCount != null &&
                (t.chatThreadCount = v(this._chatThreadCount, 10)),
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
      C = (function (e) {
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
      b = (function () {
        function t() {
          this._initEvents(g.ResumeFromRestart);
        }
        var a = t.prototype;
        return (
          (a._initEvents = function (t) {
            ((this.isInitialSync = !1),
              (this.oldestStanzaTs = 0),
              (this.offlineResume = new C()),
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
              (this.qpl = new h(t)));
            var e = this._generateOfflineSessionId();
            ((this.offlineStage = new y(t, e)),
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
          (a.logOldestStanzaTime = function (t) {
            (this.offlineStage.logOldestStanzaTime(t),
              this.offlineResume != null &&
                (this.oldestStanzaTs === 0 || this.oldestStanzaTs > t) &&
                (this.oldestStanzaTs = t));
          }),
          (a.logOfflineCount = function (t) {
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
          (a.logOfflineDecryptionErrorCount = function (t) {
            (this.offlineStage.logOfflineDecryptionErrorCount(t),
              this.offlineResume &&
                (this.offlineResume.offlineDecryptErrorCount = t));
          }),
          (a.logAddOfflineSizeBytes = function (t) {
            this.offlineResume && (this.offlineResume.offlineSizeBytes += t);
          }),
          (a.logOfflineChatThreadCount = function (t) {
            this.offlineStage.logOfflineChatThreadCount(t);
            var e = v(t, 10);
            this.offlineResume && (this.offlineResume.chatThreadCount = e);
          }),
          (a.logOfflinePreackCount = function (t, n) {
            (n === void 0 && (n = !1),
              this.offlineResume &&
                (n === !0
                  ? (this.offlineResume.preackMessageCount += t)
                  : (this.offlineResume.preackReceiptCount += t)));
          }),
          (a.logOfflinePassiveT = function () {
            var e;
            ((e = this.offlineResume) == null ? void 0 : e.passiveModeT) ==
              null && this._logPerformanceT("passiveModeT");
          }),
          (a._logPerformanceT = function (t) {
            var e = Math.floor(self.performance.now());
            this.offlineResume != null && (this.offlineResume[t] = e);
          }),
          (a.logLastStanzaT = function () {
            var e;
            ((e = this.offlineResume) == null ? void 0 : e.lastStanzaT) ==
              null &&
              (this._logPerformanceT("lastStanzaT"),
              this.isInitialSync || this.offlineStage.logProcessComplete());
          }),
          (a.logMainScreenLoadT = function () {
            (this._logPerformanceT("mainScreenLoadT"),
              this.qpl.markMainScreenLoad(),
              this.isInitialSync || this.offlineStage.logScreenLoad());
          }),
          (a.logOfflinePreviewT = function () {
            (this._logPerformanceT("offlinePreviewT"),
              this.qpl.markOfflinePreviewReceived());
          }),
          (a.logOfflineStartT = function () {
            (this._logPerformanceT("pageLoadT"),
              this.offlineStage.logOfflineStart(),
              window.document &&
                this.offlineResume &&
                (this.offlineResume.isResumeStartedInForeground =
                  !document.hidden));
          }),
          (a.logSocketConnectT = function () {
            (this.qpl.start(),
              this._logPerformanceT("socketConnectT"),
              this.isInitialSync || this.offlineStage.logSocketConnect());
          }),
          (a.logMissedOfflineComplete = function () {
            this.offlineResume &&
              (this.offlineResume.isOfflineCompleteMissed = !0);
          }),
          (a.setIsInitialSync = function () {
            this.isInitialSync = !0;
          }),
          (a.setLastPushCompleteTimestamp = function () {
            return this.offlineStage.setLastPushCompleteTimestamp();
          }),
          (a.isBlockingOfflineResume = function (t) {
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
          (a.commit = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this.offlineResume;
              if (t) {
                ((t.offlineSizeBytes = v(t.offlineSizeBytes, 1e3)),
                  (t.mailboxAge = S(this.oldestStanzaTs)),
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
                var a = t.offlinePreviewCount === 0;
                if (!this.isInitialSync && !a) {
                  if (
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
                    this.endTableUsageMetric(),
                    !r("gkx")("26258"))
                  ) {
                    var i = 18e4,
                      l = 10,
                      f = Math.max(t.mainScreenLoadT, t.lastStanzaT);
                    (f - t.socketConnectT > i &&
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[offline-resume] load time > limit: ",
                              "",
                            ])),
                          t.mainScreenLoadT,
                        )
                        .sendLogs("slow-offline-resume"),
                      t.offlineDecryptErrorCount > l &&
                        o("WALogger")
                          .ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[offline-resume] decrypt err > limit: ",
                                "",
                              ])),
                            t.offlineDecryptErrorCount,
                          )
                          .sendLogs("slow-offline-resume"));
                  }
                } else
                  (this.isInitialSync
                    ? o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume] skip: initial sync",
                          ])),
                      )
                    : a &&
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
            function a() {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.resetEvent = function () {
            this.offlineResume == null &&
              (this._initEvents(g.ResumeFromOpentab), this.logOfflineStartT());
          }),
          (a._generateOfflineSessionId = function () {
            return (
              "" +
              o("WARandomHex").randomHex(4) +
              o("WATimeUtils").unixTimeWithoutClockSkewCorrection().toString(10)
            );
          }),
          t
        );
      })();
    function v(e, t) {
      return r("gkx")("26258") ? Math.round(e / t) * t : e;
    }
    function S(e) {
      if (e === 0) return 0;
      var t = o("WATimeUtils").unixTime() - e;
      return Math.round(t / o("WATimeUtils").DAY_SECONDS);
    }
    var R = new b();
    ((l.roundUp = v), (l.countDays = S), (l.OfflineResumeReporter = R));
  },
  98,
);
