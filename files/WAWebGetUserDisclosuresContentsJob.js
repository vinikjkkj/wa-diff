__d(
  "WAWebGetUserDisclosuresContentsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebGetUserDisclosuresContentsQueryJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getDisclosuresContentsJob",
          function () {
            return o(
              "WAWebGetUserDisclosuresContentsQueryJob",
            ).getUserDisclosureContentsQueryJob(e);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getDisclosuresContentsJob = e;
  },
  98,
);
