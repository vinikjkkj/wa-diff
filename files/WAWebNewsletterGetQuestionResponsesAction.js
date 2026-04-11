__d(
  "WAWebNewsletterGetQuestionResponsesAction",
  [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGetQuestionResponsesJob",
    "WAWebNewsletterQuestionResponseDataUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var r = yield o(
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
                .sendLogs(
                  "newsletter-failed-to-get-newsletter-question-responses",
                ),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.getNewsletterQuestionResponsesAction = s;
  },
  98,
);
