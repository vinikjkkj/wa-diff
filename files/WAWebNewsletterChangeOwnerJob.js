__d(
  "WAWebNewsletterChangeOwnerJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexChangeNewsletterOwnerJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "changeNewsletterOwner",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebMexChangeNewsletterOwnerJob",
            ).mexChangeNewsletterOwner(e, t);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.changeNewsletterOwner = e;
  },
  98,
);
