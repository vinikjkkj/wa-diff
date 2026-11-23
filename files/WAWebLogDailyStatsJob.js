__d(
  "WAWebLogDailyStatsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("WAWebTasksDailyStatsTask").__setRef(
      "WAWebLogDailyStatsJob",
    );
    function s() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "logDailyStats",
          async function (t) {
            var n = await e.load(),
              r = n.logDailyStats;
            return r();
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.BEST_EFFORT },
        )
        .waitUntilCompleted();
    }
    l.logDailyStatsJob = s;
  },
  98,
);
