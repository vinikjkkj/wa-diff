__d(
  "WAWebNewsletterCheckMyQuestionResponsesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebDBNewsletterQuestionResponseSerialization",
    "WAWebMsgKey",
    "WAWebNewsletterGetMyQuestionResponsesQuery",
    "WAWebNewsletterQuestionResponseStorage",
    "WAWebNewsletterQuestionResponsesUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQuestions.flow",
    "WAWebSchemaMessage",
    "WAWebSchemaNewsletterQuestionResponses",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t, n) {
      var r = n.toString(),
        a = e.get(r);
      if (a != null) return a;
      var i = o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "checkMyNewsletterQuestionResponses",
          function () {
            return u(t, n);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted()
        .finally(function () {
          e.delete(r);
        });
      return (e.set(r, i), i);
    }
    async function u(e, t) {
      if (
        o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable()
      ) {
        var n = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(t.toString());
        n == null ||
          n.myQuestionResponsesChecked === !0 ||
          (await o(
            "WAWebNewsletterQuestionResponseStorage",
          ).reconcileMyQuestionResponses(t, function () {
            return c(e, t);
          }),
          await o("WAWebSchemaMessage")
            .getMessageTable()
            .merge(t.toString(), { myQuestionResponsesChecked: !0 }));
      }
    }
    async function c(e, t) {
      var n = await o(
        "WAWebNewsletterGetMyQuestionResponsesQuery",
      ).getMyQuestionResponsesQuery(e);
      if (n.myQuestionResponsesServerId !== e.myQuestionResponsesServerId)
        throw r("err")("my question responses returned for another question");
      return n.myQuestionResponsesQuestionResponse.map(function (e) {
        var a = o(
            "WAWebNewsletterQuestionResponsesUtils",
          ).mapQuestionResponseMsgStanza({
            fetchedResponse: e,
            newsletterJid: n.from,
            questionId: t,
            questionServerId: n.myQuestionResponsesServerId,
          }),
          i = a.questionResponseInfo;
        return o(
          "WAWebDBNewsletterQuestionResponseSerialization",
        ).dbRowFromNewsletterQuestionResponse(
          babelHelpers.extends({}, a, {
            id: new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: a.id.remote,
              id: a.id.id,
            }),
            questionResponseInfo: babelHelpers.extends({}, i, {
              likeSeen:
                i.reactionCode ===
                o("WAWebQuestions.flow").QUESTION_RESPONSE_LIKE_REACTION_CODE,
            }),
          }),
        );
      });
    }
    l.checkMyNewsletterQuestionResponses = s;
  },
  98,
);
