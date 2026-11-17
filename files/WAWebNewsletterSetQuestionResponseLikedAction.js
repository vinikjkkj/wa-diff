__d(
  "WAWebNewsletterSetQuestionResponseLikedAction",
  [
    "WALogger",
    "WAWebNewsletterQuestionResponseCollection",
    "WAWebNewsletterSetQuestionResponseReactionJob",
    "WAWebNewsletterValidationUtils",
    "WAWebQuestions.flow",
    "WAWebQuestionsRenderingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "410",
      c = new Set();
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
              var d = yield o(
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
                  p(t, n, a, d.error));
              else {
                var m;
                ((m = o(
                  "WAWebNewsletterQuestionResponseCollection",
                ).QuestionResponseCollection.get(n.id)) != null
                  ? m
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
                p(t, n, a));
            } finally {
              c.delete(i);
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r) {
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
