__d(
  "WAWebNewsletterDeleteMyQuestionResponseJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterDeleteMyQuestionResponseQuery",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteMyNewsletterQuestionResponse",
          function () {
            return o(
              "WAWebNewsletterDeleteMyQuestionResponseQuery",
            ).deleteMyQuestionResponseQuery(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.deleteMyNewsletterQuestionResponse = e;
  },
  98,
);
