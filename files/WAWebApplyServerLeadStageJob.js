__d(
  "WAWebApplyServerLeadStageJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebApplyServerLeadStage",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.leadStageId,
        n = e.threadLid;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "applyServerLeadStage",
          async function () {
            return o("WAWebApplyServerLeadStage").applyServerLeadStage(n, t);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.LOW },
        )
        .waitUntilCompleted();
    }
    l.applyServerLeadStageJob = e;
  },
  98,
);
