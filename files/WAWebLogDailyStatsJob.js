__d(
  "WAWebLogDailyStatsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebTasksDailyStatsTask",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "logDailyStats",
          function (e) {
            return o("WAWebTasksDailyStatsTask").logDailyStats();
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .waitUntilCompleted();
    }
    l.logDailyStatsJob = e;
  },
  98,
);
