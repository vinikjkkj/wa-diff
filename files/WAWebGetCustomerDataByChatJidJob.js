__d(
  "WAWebGetCustomerDataByChatJidJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBCustomerDataDatabaseApi",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.chatJid;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getCustomerDataByChatJid",
          async function () {
            return o("WAWebDBCustomerDataDatabaseApi").getCustomerDataByChatJid(
              t,
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getCustomerDataByChatJidJob = e;
  },
  98,
);
