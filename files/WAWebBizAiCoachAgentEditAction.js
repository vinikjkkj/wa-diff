__d(
  "WAWebBizAiCoachAgentEditAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebBizAiCoachMessageEditMutation",
        )
          .__setRef("WAWebBizAiCoachAgentEditAction")
          .load();
      }, "BizAiCoachMessageEdit");
    function c(t, n, a, i) {
      u()
        .then(
          function (e) {
            return e.coachAgentMessageEdit(t, n, a).then(function (e) {
              o(
                "WAWebBizAILargeScreensLogEvents",
              ).logApiBizAiMessageEditCoachingResult(e, i);
            });
          },
          function (t) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "BizAI message edit coaching module failed to load",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("biz-ai-message-edit-coaching-load-fail"),
              o(
                "WAWebBizAILargeScreensLogEvents",
              ).logApiBizAiMessageEditCoachingResult("module_load_failed", i));
          },
        )
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "BizAI message edit coaching failed unexpectedly",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("biz-ai-message-edit-coaching-unexpected");
        });
    }
    l.startAgentEditCoaching = c;
  },
  98,
);
