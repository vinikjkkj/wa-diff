__d(
  "WAWebNewsletterPendingInvitesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterPendingInvitesQueryJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterPendingInvites",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebNewsletterPendingInvitesQueryJob",
            ).getNewsletterPendingInvites(e);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterPendingInvites = e;
  },
  98,
);
