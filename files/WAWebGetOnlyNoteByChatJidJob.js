__d(
  "WAWebGetOnlyNoteByChatJidJob",
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
          var t = e.chatJid;
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "getOnlyNoteByChatJid",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return o("WAWebDBNoteDatabaseApi").getOnlyNoteByChatJid(t);
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        s.apply(this, arguments)
      );
    }
    l.getOnlyNoteByChatJidJob = e;
  },
  98,
);
