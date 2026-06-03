__d(
  "WAWebWamWorkerOfflineProcessReporter",
  [
    "WALogger",
    "WARandomHex",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumOfflineProcessRunReasons",
    "WAWebWamEnumOfflineProcessStages",
    "WAWebWamOfflineResumeReporter",
    "WAWebWebcOfflineNotificationProcessWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 1e4,
      p = 12e4,
      _ = (function () {
        function t() {
          ((this.$8 = null),
            (this.$1 =
              "" +
              o("WARandomHex").randomHex(4) +
              o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
            (this.$2 = o(
              "WAWebWamEnumOfflineProcessRunReasons",
            ).OFFLINE_PROCESS_RUN_REASONS.PUSH_NOTIFICATION),
            (this.pageLoadT = self.performance.now()),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$9 = 0),
            (this.$10 = 0),
            (this.$11 = 0));
        }
        var r = t.prototype;
        return (
          (r.$13 = function (t, n) {
            var e = new (o(
              "WAWebWebcOfflineNotificationProcessWamEvent",
            ).WebcOfflineNotificationProcessWamEvent)({
              offlineProcessSessionId: this.$1,
              offlineProcessStageTimestampMs: n,
              currentOfflineProcessStage: t,
              swVersion: o("WAWebBuildConstants").VERSION_BASE,
              runReason: this.$2,
            });
            ((t ===
              o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                .PROCESSING ||
              t ===
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                  .PROCESS_COMPLETE ||
              t ===
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                  .PROCESS_INTERRUPTED) &&
              this.$14(e),
              t ===
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                  .PROCESS_COMPLETE ||
              t ===
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                  .PROCESS_INTERRUPTED
                ? e.commitAndWaitForFlush(!0)
                : e.commit());
          }),
          (r.$14 = function (t) {
            var e, n, r, a;
            ((t.offlineProcessMessageCount = o(
              "WAWebWamOfflineResumeReporter",
            ).roundUp((e = this.$10) != null ? e : 0, 10)),
              (t.offlineProcessNotificationCount = o(
                "WAWebWamOfflineResumeReporter",
              ).roundUp((n = this.$11) != null ? n : 0, 10)),
              (t.offlineProcessMailboxAge = o(
                "WAWebWamOfflineResumeReporter",
              ).countDays((r = this.$7) != null ? r : 0)),
              (t.offlineProcessDecryptErrorCount =
                (a = this.$9) != null ? a : 0));
          }),
          (r.$15 = function () {
            var t = this;
            (this.$8 == null &&
              (this.$8 = new (o("WAShiftTimer").ShiftTimer)(function () {
                if (
                  t.$12 ===
                  o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                    .PROCESSING
                ) {
                  var n = Math.floor(self.performance.now() - t.pageLoadT);
                  if (
                    (o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[offline-resume] progress pMsg=",
                          " pNotif=",
                          " procT=",
                          "",
                        ])),
                      t.$10,
                      t.$11,
                      n,
                    ),
                    n > p)
                  ) {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume] processing too long",
                          ])),
                      )
                      .sendLogs("worker-offline-process-takes-too-long");
                    return;
                  }
                  (t.$13(
                    o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                      .PROCESSING,
                    n,
                  ),
                    t.$15());
                }
              })),
              this.$8.onOrAfter(m));
          }),
          (r.$16 = function () {
            var e;
            ((this.$12 = o(
              "WAWebWamEnumOfflineProcessStages",
            ).OFFLINE_PROCESS_STAGES.PROCESSING),
              (e = this.$8) == null || e.cancel(),
              this.$15());
          }),
          (r.$17 = function (t) {
            t === void 0 && (t = -1);
            var e =
              this.$12 ===
              o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                .PROCESS_INTERRUPTED;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] ends msg=",
                  " rcpt=",
                  " notif=",
                  " call=",
                  " pMsg=",
                  " pNotif=",
                  "",
                ])),
              this.$3,
              this.$4,
              this.$5,
              this.$6,
              this.$10,
              this.$11,
            ),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] err=",
                    " sockT=",
                    " prevT=",
                    " doneT=",
                    " age=",
                    " int=",
                    "",
                  ])),
                this.$9,
                this.socketConnectT,
                this.offlinePreviewT,
                this.processCompleteT,
                t,
                e,
              ),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] reason=",
                    "",
                  ])),
                this.$2,
              ));
          }),
          (r.getCurrentStage = function () {
            return this.$12;
          }),
          (r.updateOldestStanzaTime = function (t) {
            (this.$7 == null || this.$7 > t) && (this.$7 = t);
          }),
          (r.updateOfflineCount = function (t) {
            ((this.$3 = t.message),
              (this.$4 = t.receipt),
              (this.$5 = t.notification),
              (this.$6 = t.call));
          }),
          (r.updateOfflineDecryptionErrorCount = function (t) {
            this.$9 = t;
          }),
          (r.updateProcessedMessageCount = function () {
            o("WAWebRuntimeEnvironmentUtils").isWorker() && (this.$10 += 1);
          }),
          (r.updateProcessedNotificationCount = function () {
            o("WAWebRuntimeEnvironmentUtils").isWorker() && (this.$11 += 1);
          }),
          (r.logWorkerInitialized = function (t) {
            ((this.$12 = o(
              "WAWebWamEnumOfflineProcessStages",
            ).OFFLINE_PROCESS_STAGES.PAGE_LOAD),
              (this.$2 = t),
              this.$13(
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                  .PAGE_LOAD,
                0,
              ));
          }),
          (r.logSocketConnect = function () {
            this.$12 = o(
              "WAWebWamEnumOfflineProcessStages",
            ).OFFLINE_PROCESS_STAGES.SOCKET_CONNECT;
            var e = Math.floor(self.performance.now() - this.pageLoadT);
            ((this.socketConnectT = e),
              this.$13(
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                  .SOCKET_CONNECT,
                e,
              ));
          }),
          (r.logOfflinePreview = function () {
            this.$12 = o(
              "WAWebWamEnumOfflineProcessStages",
            ).OFFLINE_PROCESS_STAGES.OFFLINE_PREVIEW;
            var e = Math.floor(self.performance.now() - this.pageLoadT);
            ((this.offlinePreviewT = e),
              this.$13(
                o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                  .OFFLINE_PREVIEW,
                e,
              ),
              this.$16());
          }),
          (r.logProcessComplete = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              if (
                !(
                  this.$12 ===
                    o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                      .PROCESS_COMPLETE ||
                  this.$12 ===
                    o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                      .PROCESS_INTERRUPTED
                )
              ) {
                ((this.$12 = o(
                  "WAWebWamEnumOfflineProcessStages",
                ).OFFLINE_PROCESS_STAGES.PROCESS_COMPLETE),
                  (e = this.$8) == null || e.cancel(),
                  (this.$8 = null));
                var t = o("WAWebWamOfflineResumeReporter").countDays(this.$7);
                yield o("WAWebUserPrefsMultiDevice").setRecentMailboxAgeDays(t);
                var n = Math.floor(self.performance.now() - this.pageLoadT);
                ((this.processCompleteT = n),
                  this.$17(t),
                  this.$13(
                    o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                      .PROCESS_COMPLETE,
                    n,
                  ),
                  o("WAWebUserPrefsGeneral").setLastPushCompleteTimestamp(
                    o("WATimeUtils").unixTimeMs(),
                  ));
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.logProcessInterrupted = function () {
            var e;
            if (
              !(
                this.$12 == null ||
                this.$12 ===
                  o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                    .PROCESS_COMPLETE ||
                this.$12 ===
                  o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                    .PROCESS_INTERRUPTED
              )
            ) {
              ((this.$12 = o(
                "WAWebWamEnumOfflineProcessStages",
              ).OFFLINE_PROCESS_STAGES.PROCESS_INTERRUPTED),
                (e = this.$8) == null || e.cancel(),
                (this.$8 = null));
              var t = Math.floor(self.performance.now() - this.pageLoadT);
              ((this.processCompleteT = t),
                this.$17(),
                this.$13(
                  o("WAWebWamEnumOfflineProcessStages").OFFLINE_PROCESS_STAGES
                    .PROCESS_INTERRUPTED,
                  t,
                ));
            }
          }),
          t
        );
      })(),
      f = new _();
    l.WorkerOfflineResumeReporter = f;
  },
  98,
);
