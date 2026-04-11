__d(
  "WAWebGetCustomerDataByChatJidJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBCustomerDataDatabaseApi",
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
              "getCustomerDataByChatJid",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                return o(
                  "WAWebDBCustomerDataDatabaseApi",
                ).getCustomerDataByChatJid(t);
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        s.apply(this, arguments)
      );
    }
    l.getCustomerDataByChatJidJob = e;
  },
  98,
);
