__d(
  "WAWebNewsletterDemoteAdminJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexDemoteNewsletterAdminJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "demoteNewsletterAdmin",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebMexDemoteNewsletterAdminJob").demoteNewsletterAdmin(
              e,
              t,
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.demoteNewsletterAdmin = e;
  },
  98,
);
