__d(
  "WAWebApplyServerLeadStageJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebApplyServerLeadStage",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.leadStageId,
            r = e.threadLid;
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "applyServerLeadStage",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return o("WAWebApplyServerLeadStage").applyServerLeadStage(
                  r,
                  t,
                );
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
            )
            .waitUntilCompleted();
        })),
        s.apply(this, arguments)
      );
    }
    l.applyServerLeadStageJob = e;
  },
  98,
);
