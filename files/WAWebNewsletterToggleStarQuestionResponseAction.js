__d(
  "WAWebNewsletterToggleStarQuestionResponseAction",
  [
    "WAJids",
    "WALogger",
    "WAWebNewsletterQuestionResponseStateUpdateJob",
    "WAWebQuestionResponseIntegrityUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set();
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
              var i = yield o(
                "WAWebNewsletterQuestionResponseStateUpdateJob",
              ).updateNewsletterQuestionResponseState({
                newsletterId: o("WAJids").toNewsletterJid(t.id.toString()),
                responseServerId: n.responseServerId.toString(),
                serverId: n.questionServerId.toString(),
                state: a ? "STAR" : "UNSTAR",
              });
              (i == null ? void 0 : i.success) === !0
                ? n.set("starred", a)
                : o("WAWebQuestionResponseIntegrityUtils").showStarFailureToast(
                    a,
                  );
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
                o("WAWebQuestionResponseIntegrityUtils").showStarFailureToast(
                  a,
                ));
            } finally {
              s.delete(r);
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.toggleStarQuestionResponse = u;
  },
  98,
);
