__d(
  "WAWebGetDsbInfoJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebMexGetDsbInfoJob",
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
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "getDsbInfo",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return o("WAWebMexGetDsbInfoJob").mexGetDsbInfo(e);
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        s.apply(this, arguments)
      );
    }
    l.getDsbInfo = e;
  },
  98,
);
