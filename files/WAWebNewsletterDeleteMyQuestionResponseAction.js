__d(
  "WAWebNewsletterDeleteMyQuestionResponseAction",
  ["WALogger", "WAWebNewsletterDeleteMyQuestionResponseJob", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        return await o(
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
    }
    l.deleteMyNewsletterQuestionResponseAction = s;
  },
  98,
);
