__d(
  "WAWebCrosspostingJob",
  [
    "WAWebEligibilityCheckHelper",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, r, a, i) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "crosspostStatus",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var n = yield a.arrayBuffer();
              yield o("WAWebEligibilityCheckHelper").initiateCrossposting({
                statusTimestamp: e,
                statusKey: t,
                destinations: r,
                statusBlob: n,
                caption: i,
              });
            } catch (e) {
              throw e;
            }
          }),
        )
        .waitUntilCompleted();
    }
    l.crosspostStatus = e;
  },
  98,
);
