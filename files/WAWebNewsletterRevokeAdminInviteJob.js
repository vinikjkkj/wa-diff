__d(
  "WAWebNewsletterRevokeAdminInviteJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexRevokeNewsletterAdminInviteJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "revokeNewsletterAdminInvite",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebMexRevokeNewsletterAdminInviteJob",
            ).revokeNewsletterAdminInvite(e, t);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.revokeNewsletterAdminInvite = e;
  },
  98,
);
