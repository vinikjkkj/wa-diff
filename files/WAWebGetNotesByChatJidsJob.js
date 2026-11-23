__d(
  "WAWebGetNotesByChatJidsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBNoteDatabaseApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chatJids;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNotesByChatJids",
          async function () {
            return o("WAWebDBNoteDatabaseApi").getNotesByChatJids(t);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNotesByChatJidsJob = e;
  },
  98,
);
