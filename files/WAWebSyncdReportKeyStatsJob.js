__d(
  "WAWebSyncdReportKeyStatsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncdKeyCountWamEvent",
    "WAWebSyncdWamUtils",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "reportSyncdKeyStats",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!r("gkx")("26258")) {
              var e = yield o("WAWebSyncdWamUtils").getKeyStats(),
                t = {
                  keysUsedInSnapshotCount: e.keysUsedInSnapshotCount,
                  p80MuationsPerKey: e.p80MuationsPerKey,
                  p95MuationsPerKey: e.p95MuationsPerKey,
                  totalKeyCount: e.totalKeyCount,
                };
              (e.syncdSessionLengthDays != null &&
                (t.syncdSessionLengthDays = e.syncdSessionLengthDays),
                new (o("WAWebSyncdKeyCountWamEvent").SyncdKeyCountWamEvent)(
                  t,
                ).commit());
            }
          }),
          {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            maxTimeoutMs: 1e3 * 30,
          },
        )
        .waitUntilCompleted();
    }
    l.reportSyncdKeyStatsJob = e;
  },
  98,
);
