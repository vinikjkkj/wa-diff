__d(
  "WAWebNewsletterGetQuestionResponsesAction",
  [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGetQuestionResponsesJob",
    "WAWebNewsletterQuestionResponseDataUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      try {
        var r = await o(
            "WAWebNewsletterGetQuestionResponsesJob",
          ).getNewsletterQuestionResponses(t, n),
          a = r.map(function (e) {
            return o(
              "WAWebNewsletterQuestionResponseDataUtils",
            ).createQuestionResponseModel(e, t.questionResponsesServerId);
          });
        return (
          o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateNewsletterQuestionResponses({
            responses: a,
            append: t.cursor != null,
          }),
          {
            hasNextPage: r.length === t.questionResponsesCount,
            cursor:
              r.length === 0 ? t.cursor : a[a.length - 1].responseServerId,
          }
        );
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
    l.getNewsletterQuestionResponsesAction = s;
  },
  98,
);
