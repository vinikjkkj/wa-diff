__d(
  "WAWebNewsletterSyncMyQuestionResponsesCountJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterQuestionResponseStorage",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "syncMyQuestionResponsesCount",
          function () {
            return o(
              "WAWebNewsletterQuestionResponseStorage",
            ).syncMyQuestionResponsesCount(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.syncMyQuestionResponsesCountJob = e;
  },
  98,
);
