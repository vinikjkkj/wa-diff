__d(
  "WAWebGetDsbInfoJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexGetDsbInfoJob",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getDsbInfo",
          async function () {
            return o("WAWebMexGetDsbInfoJob").mexGetDsbInfo(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getDsbInfo = e;
  },
  98,
);
