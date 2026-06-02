__d(
  "WAWebNewsletterRevokeAdminInviteJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexRevokeNewsletterAdminInviteJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "revokeNewsletterAdminInvite",
          async function () {
            return o(
              "WAWebMexRevokeNewsletterAdminInviteJob",
            ).revokeNewsletterAdminInvite(e, t);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.revokeNewsletterAdminInvite = e;
  },
  98,
);
