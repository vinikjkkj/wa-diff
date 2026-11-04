__d(
  "WAWebNewsletterDeleteMyQuestionResponseAction",
  [
    "WALogger",
    "WAWebNewsletterDeleteMyQuestionResponseJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return yield o(
              "WAWebNewsletterDeleteMyQuestionResponseJob",
            ).deleteMyNewsletterQuestionResponse(t);
          } catch (t) {
            var n = r("getErrorSafe")(t);
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[deleteMyNewsletterQuestionResponseAction] delete response failed",
                    ])),
                )
                .catching(n)
                .tags("newsletter", "questions")
                .sendLogs("newsletter-failed-to-delete-my-question-response"),
              n
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.deleteMyNewsletterQuestionResponseAction = s;
  },
  98,
);
