__d(
  "WAWebNewsletterGetQuestionResponsesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterGetQuestionResponsesQuery",
    "WAWebNewsletterQuestionResponsesUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterQuestionResponses",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = yield o(
              "WAWebNewsletterGetQuestionResponsesQuery",
            ).getQuestionResponsesQuery(e);
            return n.questionResponsesQuestionResponse.map(function (e) {
              return o(
                "WAWebNewsletterQuestionResponsesUtils",
              ).mapQuestionResponseMsgStanza({
                fetchedResponse: e,
                newsletterJid: n.from,
                questionId: t,
                questionServerId: n.questionResponsesServerId,
              });
            });
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterQuestionResponses = e;
  },
  98,
);
