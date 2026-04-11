__d(
  "WAWebSetUserNoticeStageJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSetUserNoticeStageQueryJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "setUserNoticeStage",
          function () {
            return o(
              "WAWebSetUserNoticeStageQueryJob",
            ).SetUserNoticeStageQueryJob(e, t);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.setUserNoticeStage = e;
  },
  98,
);
