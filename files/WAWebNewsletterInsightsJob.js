__d(
  "WAWebNewsletterInsightsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexFetchNewsletterInsightsJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterAdminInsights",
          function () {
            return o(
              "WAWebMexFetchNewsletterInsightsJob",
            ).mexFetchNewsletterInsights(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterInsights = e;
  },
  98,
);
