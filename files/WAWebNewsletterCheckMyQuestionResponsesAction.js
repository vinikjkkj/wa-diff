__d(
  "WAWebNewsletterCheckMyQuestionResponsesAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebMsgCollection",
    "WAWebQuestionsRenderingUtils",
    "WAWebUserPrefsMultiDevice",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 30,
      u = r("JSResourceForInteraction")(
        "WAWebNewsletterCheckMyQuestionResponsesJob",
      ).__setRef("WAWebNewsletterCheckMyQuestionResponsesAction");
    async function c(t) {
      var n = o("WAWebMsgCollection").MsgCollection.get(t);
      if (!(n == null || !d(n))) {
        var a = o(
          "WAWebQuestionsRenderingUtils",
        ).getMyQuestionResponsesQueryArgs(n);
        if (a != null)
          try {
            var i = await u.load(),
              l = i.checkMyNewsletterQuestionResponses;
            await l(a, n.id);
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
    }
    function d(e) {
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
