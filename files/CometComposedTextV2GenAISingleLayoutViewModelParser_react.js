__d(
  "CometComposedTextV2GenAISingleLayoutViewModelParser.react",
  [
    "CometAIThemeProvider.react",
    "CometComposedTextV2RendererWithStableKeys.react",
    "CometComposedTextV2URParserContext.react",
    "cometComposedTextV2GenAiUxPrimitiveParser",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t,
        n = o("react-compiler-runtime").c(8),
        a = e.viewModel,
        i = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        l = i.markedTokenizeOptions,
        u = i.renderers,
        d = c(o("CometAIThemeProvider.react").CometAIThemeContext),
        m = d.displayMode,
        p =
          (t = u.contentViewRenderer) == null
            ? void 0
            : t.contentTriggerTextValues,
        _;
      n[0] !== p ||
      n[1] !== m ||
      n[2] !== l ||
      n[3] !== u ||
      n[4] !== a.primitive
        ? ((_ = r("cometComposedTextV2GenAiUxPrimitiveParser")(a.primitive, {
            contentTriggerTextValues: p,
            displayMode: m,
            markedTokenizeOptions: l,
            renderers: u,
          })),
          (n[0] = p),
          (n[1] = m),
          (n[2] = l),
          (n[3] = u),
          (n[4] = a.primitive),
          (n[5] = _))
        : (_ = n[5]);
      var f = _;
      if (f == null) return null;
      var g;
      return (
        n[6] !== f
          ? ((g = s.jsx(r("CometComposedTextV2RendererWithStableKeys.react"), {
              root: f,
            })),
            (n[6] = f),
            (n[7] = g))
          : (g = n[7]),
        g
      );
    }
    l.default = m;
  },
  98,
);
