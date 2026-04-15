__d(
  "WAWebFingerprintJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebWamFingerprintReporter",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "collectWebFingerprints",
          function () {
            return o("WAWebWamFingerprintReporter").logFingerprintToWam();
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted();
    }
    l.sendWamFingerprintJob = e;
  },
  98,
);
