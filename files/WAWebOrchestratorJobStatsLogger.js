__d(
  "WAWebOrchestratorJobStatsLogger",
  [
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebOrchestratorJobInfoEvent",
    "WAWebWamEnumWebcJobResultTypeCode",
    "WAWebWamEnumWebcScenarioType",
    "WAWebWebcJobInfoWamEvent",
    "cr:4324",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          this.$1 = new Map();
        }
        var a = t.prototype;
        return (
          (a.logJobCreated = function (t) {
            if (!r("gkx")("26258")) {
              var e = t.jobId,
                n = t.jobName,
                a = t.jobPriority,
                i = t.pendingJobsCount,
                l = r("WAWebBrokerGlobalAppState").getCurrentScenario(),
                s = new (o("WAWebOrchestratorJobInfoEvent").JobInfoEvent)(
                  n,
                  a,
                  i,
                  l,
                );
              (s.logJobAdded(), this.$1.set(e, s));
            }
          }),
          (a.logJobStarted = function (t) {
            if (!r("gkx")("26258")) {
              var e = this.$1.get(t);
              e == null || e.logJobStarted();
            }
          }),
          (a.logJobCompleted = function (t) {
            this.$2(
              t,
              o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE
                .COMPLETED,
            );
          }),
          (a.logJobError = function (t) {
            this.$2(
              t,
              o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE
                .ERROR,
            );
          }),
          (a.logJobTimeout = function (t) {
            this.$2(
              t,
              o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE
                .TIMEOUT,
            );
          }),
          (a.logJobAborted = function (t) {
            this.$2(
              t,
              o("WAWebWamEnumWebcJobResultTypeCode").WEBC_JOB_RESULT_TYPE_CODE
                .ABORTED,
            );
          }),
          (a.$2 = function (t, n) {
            if (!r("gkx")("26258")) {
              var e = this.$1.get(t);
              (e == null || e.logJobCompleted(n),
                this.$3(e),
                this.$1.delete(t));
            }
          }),
          (a.$3 = function (r) {
            if (r) {
              var t = r.jobName,
                a = r.jobResultType,
                i = r.webcJobAddedT,
                l = r.webcJobCompletedT,
                s = r.webcJobStartedT,
                u = l - s,
                c = s - i,
                d =
                  a ===
                  o("WAWebWamEnumWebcJobResultTypeCode")
                    .WEBC_JOB_RESULT_TYPE_CODE.COMPLETED;
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[job-orchestrator] ",
                    " execT=",
                    "ms waitT=",
                    "ms ok=",
                    "",
                  ])),
                t,
                u,
                c,
                d,
              );
              var m = new (o("WAWebWebcJobInfoWamEvent").WebcJobInfoWamEvent)({
                jobName: r.jobName,
                jobPriority: r.jobPriority,
                jobResultType: r.jobResultType,
                pendingJobsCount: r.pendingJobsCount,
                scenario: r.scenario,
                webcJobAddedT: r.webcJobAddedT,
                webcJobCompletedT: r.webcJobCompletedT,
                webcJobStartedT: r.webcJobStartedT,
              });
              if (
                m.scenario ===
                o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE
              ) {
                var p,
                  _ =
                    (p =
                      n("cr:4324") == null
                        ? void 0
                        : n("cr:4324").JOB_EVENT_SAMPLING_RATE[t]) != null
                      ? p
                      : 1;
                m.weight = _;
              }
              m.commit();
            }
          }),
          t
        );
      })();
    l.JobStatsLogger = s;
  },
  98,
);
