__d(
  "WAWebSyncdRequestAllSyncdMissingKeysJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSyncdHandleMissingKeys",
    "WAWebSyncdStoreMissingKeys",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "requestAllSyncdMissingKeys",
          async function () {
            (await o("WAWebSyncdHandleMissingKeys").requestAllMissingKeys(),
              self.setTimeout(
                o("WAWebSyncdStoreMissingKeys")
                  .setMissingKeyTimeoutInTransaction,
                1e3 * 20,
              ));
          },
          {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT,
            maxTimeoutMs: 1e3 * 30,
          },
        )
        .waitUntilCompleted();
    }
    l.requestAllSyncdMissingKeysJob = e;
  },
  98,
);
