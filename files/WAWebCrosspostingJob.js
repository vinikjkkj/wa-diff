__d(
  "WAWebCrosspostingJob",
  [
    "WAWebEligibilityCheckHelper",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.caption,
        r = e.destinations,
        a = e.statusBlob,
        i = e.statusKey,
        l = e.statusTimestamp;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "crosspostStatus",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield a.arrayBuffer();
              yield o("WAWebEligibilityCheckHelper").initiateCrossposting({
                statusTimestamp: l,
                statusKey: i,
                destinations: r,
                statusBlob: e,
                caption: t,
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
