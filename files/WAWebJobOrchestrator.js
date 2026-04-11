__d(
  "WAWebJobOrchestrator",
  [
    "WAConcurrentBucketJobQueue",
    "WADefaultJobNoQueue",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebBrokerGlobalAppState",
    "WAWebJobOrchestratorHelper",
    "WAWebOrchestratorJobStatsLogger",
    "WAWebWamEnumWebcScenarioType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        maxConcurrency: 1,
        bestEffortWaitTimeoutSec: o("WATimeUtils").FIVE_MINUTES,
        jobPrioritiesQuota: new Map([
          [(s = o("WAJobOrchestratorTypes")).JOB_PRIORITY.HIGH, 5],
          [s.JOB_PRIORITY.LOW, 1],
          [s.JOB_PRIORITY.OFFLINE, 3],
          [s.JOB_PRIORITY.HISTORY_SYNC, 1],
        ]),
      },
      c = {
        maxConcurrency: 1,
        bestEffortWaitTimeoutSec: o("WATimeUtils").FIVE_MINUTES,
        jobPrioritiesQuota: new Map([
          [s.JOB_PRIORITY.HIGH, 5],
          [s.JOB_PRIORITY.LOW, 1],
          [s.JOB_PRIORITY.OFFLINE, 1],
          [s.JOB_PRIORITY.HISTORY_SYNC, 1],
        ]),
      },
      d = "default",
      m = "bucket";
    function p() {
      var e = r("WAWebBrokerGlobalAppState").getCurrentScenario();
      return e === o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.IDLE
        ? u
        : e ===
            o("WAWebWamEnumWebcScenarioType").WEBC_SCENARIO_TYPE.OFFLINE_RESUME
          ? c
          : u;
    }
    var _ = u,
      f;
    function g() {
      return (
        f || (f = new (o("WAWebOrchestratorJobStatsLogger").JobStatsLogger)()),
        f
      );
    }
    var h = {};
    function y(t) {
      t === void 0 && (t = !1);
      var n = t ? d : m,
        r = p();
      if (h[n])
        return (
          o("WAWebJobOrchestratorHelper").hasConfigChanged(_, r) &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[job-orchestrator] config changed ",
                ])),
            ),
            (_ = r),
            h[n].updateConfig(r)),
          h[n]
        );
      var a =
        n === "bucket"
          ? new (o("WAConcurrentBucketJobQueue").WAConcurrentBucketJobQueue)()
          : new (o("WADefaultJobNoQueue").WADefaultJobNoQueue)();
      return (a.init(r, g()), (h[n] = a), (_ = r), a);
    }
    l.getInstance = y;
  },
  98,
);
