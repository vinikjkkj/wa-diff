__d(
  "WAWebNewsletterSubscribeToLiveUpdatesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterSubscribeToLiveUpdatesQuery",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "subscribeToLiveUpdates",
          function () {
            return o(
              "WAWebNewsletterSubscribeToLiveUpdatesQuery",
            ).subscribeToLiveUpdatesQuery(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.subscribeToLiveUpdatesJob = e;
  },
  98,
);
