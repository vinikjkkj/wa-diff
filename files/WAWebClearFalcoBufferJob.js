__d(
  "WAWebClearFalcoBufferJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebClearFalcoBufferApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "clearFalcoBuffer",
          function (e) {
            return o("WAWebClearFalcoBufferApi").clearFalcoBuffer({
              force: !1,
            });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .waitUntilCompleted();
    }
    l.clearFalcoBufferJob = e;
  },
  98,
);
