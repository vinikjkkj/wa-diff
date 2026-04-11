__d(
  "WAWebFingerprintJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebWamFingerprintReporter",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "collectWebFingerprints",
          function () {
            return (
              o("WAWebWamFingerprintReporter").logFingerprintToWam(),
              (e || (e = n("Promise"))).resolve()
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted();
    }
    l.sendWamFingerprintJob = s;
  },
  98,
);
