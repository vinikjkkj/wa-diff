__d(
  "WAWebLogDailyStatsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
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
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = yield e.load(),
                  r = n.logDailyStats;
                return r();
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .waitUntilCompleted();
    }
    l.logDailyStatsJob = s;
  },
  98,
);
