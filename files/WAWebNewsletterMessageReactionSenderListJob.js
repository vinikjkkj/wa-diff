__d(
  "WAWebNewsletterMessageReactionSenderListJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterMessageReactionSenderListQueryJob",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterMessageReactionSenderList",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebNewsletterMessageReactionSenderListQueryJob",
            ).getNewsletterMessageReactionSenderList(e, t);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterMessageReactionSenderList = e;
  },
  98,
);
