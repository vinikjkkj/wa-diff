__d(
  "WAWebNewsletterLogExposuresJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexLogNewsletterExposuresJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "logNewsletterExposures",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebMexLogNewsletterExposuresJob",
            ).mexLogNewsletterExposures(e);
          }),
          { priority: o("WAJobOrchestratorTypes").JobPriority.LOW },
        )
        .waitUntilCompleted();
    }
    l.logNewsletterExposures = e;
  },
  98,
);
