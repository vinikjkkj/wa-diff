__d(
  "WAWebBizAiSmartComposerThinkingStateLoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizAiSmartComposerStyles.stylex",
    "WAWebModalLoadable",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("WAWebModalLoadable")(
        r("JSResourceForInteraction")(
          "WAWebBizAiSmartComposerThinkingState.react",
        ).__setRef("WAWebBizAiSmartComposerThinkingStateLoadable"),
        "BizAiSmartComposerThinkingState",
        function () {
          return u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebBizAiSmartComposerStyles.stylex").smartComposerStyles
                  .thinkingBarPlaceholder,
              ),
              {
                "data-testid":
                  "biz_ai_smart_composer_thinking_state_placeholder",
              },
            ),
          );
        },
      ),
      d = c;
    l.default = d;
  },
  98,
);
