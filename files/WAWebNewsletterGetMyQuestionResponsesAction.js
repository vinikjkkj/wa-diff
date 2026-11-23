__d(
  "WAWebNewsletterGetMyQuestionResponsesAction",
  [
    "WALogger",
    "WAWebNewsletterGetMyQuestionResponsesJob",
    "WAWebNewsletterQuestionResponseDataUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      try {
        var r = await o(
          "WAWebNewsletterGetMyQuestionResponsesJob",
        ).getMyNewsletterQuestionResponses(t, n);
        return r.map(function (e) {
          return o(
            "WAWebNewsletterQuestionResponseDataUtils",
          ).createQuestionResponseModel(e, t.myQuestionResponsesServerId);
        });
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getNewsletterQuestionResponsesAction] get responses failed",
                ])),
            )
            .tags("newsletter", "questions")
            .sendLogs("newsletter-failed-to-get-newsletter-question-responses"),
          t
        );
      }
    }
    l.getMyNewsletterQuestionResponsesAction = s;
  },
  98,
);
