__d(
  "WAWebNewsletterLogExposuresJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexLogNewsletterExposuresJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "logNewsletterExposures",
          async function () {
            return o(
              "WAWebMexLogNewsletterExposuresJob",
            ).mexLogNewsletterExposures(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
        )
        .waitUntilCompleted();
    }
    l.logNewsletterExposures = e;
  },
  98,
);
