__d(
  "WAWebNewsletterToggleStarQuestionResponseAction",
  [
    "WAJids",
    "WALogger",
    "WAWebNewsletterQuestionResponseStateUpdateJob",
    "WAWebQuestionsRenderingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set();
    async function u(t, n) {
      var r =
        t.id.toString() +
        "_" +
        n.questionServerId.toString() +
        "_" +
        n.responseServerId.toString();
      if (!s.has(r)) {
        s.add(r);
        var a = !n.starred;
        try {
          var i = await o(
            "WAWebNewsletterQuestionResponseStateUpdateJob",
          ).updateNewsletterQuestionResponseState({
            newsletterId: o("WAJids").toNewsletterJid(t.id.toString()),
            responseServerId: n.responseServerId.toString(),
            serverId: n.questionServerId.toString(),
            state: a ? "STAR" : "UNSTAR",
          });
          (i == null ? void 0 : i.success) === !0
            ? n.set("starred", a)
            : o("WAWebQuestionsRenderingUtils").showStarFailureToast(a);
        } catch (t) {
          (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[toggleStarQuestionResponse] toggle star response failed",
                ])),
            )
            .tags("newsletter", "questions")
            .sendLogs("newsletter-failed-to-toggle-star-question-response"),
            o("WAWebQuestionsRenderingUtils").showStarFailureToast(a));
        } finally {
          s.delete(r);
        }
      }
    }
    l.toggleStarQuestionResponse = u;
  },
  98,
);
