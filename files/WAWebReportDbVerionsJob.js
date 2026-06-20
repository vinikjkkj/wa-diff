__d(
  "WAWebReportDbVerionsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebLocalSchemaVersions",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaVersions",
    "WAWebWebDbVersionNonAnonymousWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "reportDbVersions",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o(
              "WAWebLocalSchemaVersions",
            ).getLocalSchemaVersions();
            e.forEach(function (e, t) {
              var n = o("WAWebSchemaVersions").convertDBName(t);
              n != null &&
                new (o(
                  "WAWebWebDbVersionNonAnonymousWamEvent",
                ).WebDbVersionNonAnonymousWamEvent)({
                  webDbName: n,
                  webDbVersionNumber: e,
                }).commit();
            });
          }),
          {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            maxTimeoutMs: 1e3 * 30,
          },
        )
        .waitUntilCompleted();
    }
    l.reportDbVersionsJob = e;
  },
  98,
);
