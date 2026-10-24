__d(
  "WAWebNewsletterGetMyQuestionResponsesAction",
  [
    "WALogger",
    "WAWebNewsletterGetMyQuestionResponsesJob",
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
    l.getMyNewsletterQuestionResponsesAction = s;
  },
  98,
);
