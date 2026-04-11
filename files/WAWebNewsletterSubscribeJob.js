__d(
  "WAWebNewsletterSubscribeJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexJoinNewsletterJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "subscribeToNewsletter",
          function () {
            return o("WAWebMexJoinNewsletterJob").mexJoinNewsletter(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.subscribeToNewsletter = e;
  },
  98,
);
