__d(
  "WAWebSetUserDisclosureStageJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSetUserDisclosureStageQueryJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "setUserDisclosureStage",
          function () {
            return o(
              "WAWebSetUserDisclosureStageQueryJob",
            ).SetUserDisclosureStageQueryJob(e, t);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.setUserDisclosureStage = e;
  },
  98,
);
