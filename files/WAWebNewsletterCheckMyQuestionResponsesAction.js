__d(
  "WAWebNewsletterCheckMyQuestionResponsesAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebMsgCollection",
    "WAWebQuestionsRenderingUtils",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 30,
      u = r("JSResourceForInteraction")(
        "WAWebNewsletterCheckMyQuestionResponsesJob",
      ).__setRef("WAWebNewsletterCheckMyQuestionResponsesAction");
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebMsgCollection").MsgCollection.get(t);
          if (!(n == null || !m(n))) {
            var a = o(
              "WAWebQuestionsRenderingUtils",
            ).getMyQuestionResponsesQueryArgs(n);
            if (a != null)
              try {
                var i = yield u.load(),
                  l = i.checkMyNewsletterQuestionResponses;
                yield l(a, n.id);
              } catch (t) {
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[questions] checking my question responses failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("newsletter", "questions")
                  .sendLogs("newsletter-failed-to-check-my-question-responses");
              }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
        n = t != null && e.t < t,
        r =
          o("WATimeUtils").unixTime() - e.t < s * o("WATimeUtils").DAY_SECONDS;
      return n && r;
    }
    l.checkMyQuestionResponsesAction = c;
  },
  98,
);
