__d(
  "WAWebGetNotesByChatJidsJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBNoteDatabaseApi",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatJids;
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "getNotesByChatJids",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return o("WAWebDBNoteDatabaseApi").getNotesByChatJids(t);
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        s.apply(this, arguments)
      );
    }
    l.getNotesByChatJidsJob = e;
  },
  98,
);
