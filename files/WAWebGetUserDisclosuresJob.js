__d(
  "WAWebGetUserDisclosuresJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebGetUserDisclosuresQueryJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getAllUserDisclosures",
          function () {
            return o(
              "WAWebGetUserDisclosuresQueryJob",
            ).queryAllUserDisclosures();
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getAllUserDisclosures = e;
  },
  98,
);
