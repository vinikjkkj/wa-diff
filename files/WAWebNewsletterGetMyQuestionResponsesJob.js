__d(
  "WAWebNewsletterGetMyQuestionResponsesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterGetMyQuestionResponsesQuery",
    "WAWebNewsletterQuestionResponsesUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMyNewsletterQuestionResponses",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = yield o(
              "WAWebNewsletterGetMyQuestionResponsesQuery",
            ).getMyQuestionResponsesQuery(e);
            return n.myQuestionResponsesQuestionResponse.map(function (e) {
              return o(
                "WAWebNewsletterQuestionResponsesUtils",
              ).mapQuestionResponseMsgStanza({
                fetchedResponse: e,
                newsletterJid: n.from,
                questionId: t,
                questionServerId: n.myQuestionResponsesServerId,
              });
            });
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getMyNewsletterQuestionResponses = e;
  },
  98,
);
