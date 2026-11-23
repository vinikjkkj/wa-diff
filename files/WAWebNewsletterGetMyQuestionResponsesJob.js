__d(
  "WAWebNewsletterGetMyQuestionResponsesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterGetMyQuestionResponsesQuery",
    "WAWebNewsletterQuestionResponsesUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMyNewsletterQuestionResponses",
          async function () {
            var n = await o(
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
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getMyNewsletterQuestionResponses = e;
  },
  98,
);
