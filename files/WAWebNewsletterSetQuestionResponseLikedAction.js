__d(
  "WAWebNewsletterSetQuestionResponseLikedAction",
  [
    "WALogger",
    "WAWebNewsletterQuestionResponseCollection",
    "WAWebNewsletterSetQuestionResponseReactionJob",
    "WAWebNewsletterValidationUtils",
    "WAWebQuestions.flow",
    "WAWebQuestionsRenderingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "410",
      c = new Set();
    async function d(t, n, a) {
      var i =
          t.id.toString() +
          "_" +
          n.questionServerId.toString() +
          "_" +
          n.responseServerId,
        l =
          n.reactionCode ===
          o("WAWebQuestions.flow").QUESTION_RESPONSE_LIKE_REACTION_CODE;
      if (!(l === a || c.has(i))) {
        c.add(i);
        var u = a
          ? o("WAWebQuestions.flow").QUESTION_RESPONSE_LIKE_REACTION_CODE
          : null;
        try {
          var d = await o(
            "WAWebNewsletterSetQuestionResponseReactionJob",
          ).setNewsletterQuestionResponseReaction({
            newsletterJid: o(
              "WAWebNewsletterValidationUtils",
            ).toNewsletterJidOrThrow(t.id.toJid()),
            questionServerId: n.questionServerId,
            responseServerId: n.responseServerId,
            reactionCode: u,
          });
          if (!d.success)
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[setQuestionResponseLiked] like or unlike response rejected: ",
                    "",
                  ])),
                d.error,
              )
              .tags("newsletter", "questions")
              .sendLogs("newsletter-question-response-like-rejected"),
              m(t, n, a, d.error));
          else {
            var p;
            ((p = o(
              "WAWebNewsletterQuestionResponseCollection",
            ).QuestionResponseCollection.get(n.id)) != null
              ? p
              : n
            ).set("reactionCode", u);
          }
        } catch (e) {
          var _ = r("getErrorSafe")(e);
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[setQuestionResponseLiked] like or unlike response failed",
                ])),
            )
            .catching(_)
            .tags("newsletter", "questions")
            .sendLogs("newsletter-failed-to-set-question-response-liked"),
            m(t, n, a));
        } finally {
          c.delete(i);
        }
      }
    }
    function m(e, t, n, r) {
      if (r === u) {
        (o(
          "WAWebNewsletterQuestionResponseCollection",
        ).QuestionResponseCollection.remove(t.id),
          o("WAWebQuestionsRenderingUtils").showLikeFailureToast(n));
        return;
      }
      o("WAWebQuestionsRenderingUtils").showLikeFailureToast(n, function () {
        var r;
        d(
          e,
          (r = o(
            "WAWebNewsletterQuestionResponseCollection",
          ).QuestionResponseCollection.get(t.id)) != null
            ? r
            : t,
          n,
        );
      });
    }
    l.setQuestionResponseLiked = d;
  },
  98,
);
