__d(
  "WAWebGetOnlyNoteByChatJidJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBNoteDatabaseApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chatJid;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getOnlyNoteByChatJid",
          async function () {
            return o("WAWebDBNoteDatabaseApi").getOnlyNoteByChatJid(t);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getOnlyNoteByChatJidJob = e;
  },
  98,
);
