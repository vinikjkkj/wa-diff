__d(
  "CometComposedTextV2GenAIVStackLayoutViewModelParser.react",
  [
    "CometAIThemeProvider.react",
    "CometComposedTextV2RendererWithStableKeys.react",
    "CometComposedTextV2URParserContext.react",
    "cometComposedTextV2GenAiUxPrimitiveParser",
    "cometComposedTextV2NodeBuilders",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = e || (e = r("react")),
      d = u.useContext,
      m = u.useMemo;
    function p(e) {
      var t,
        n = o("react-compiler-runtime").c(8),
        a = e.viewModel,
        i = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        l = i.markedTokenizeOptions,
        s = i.renderers,
        u = d(o("CometAIThemeProvider.react").CometAIThemeContext),
        m = u.displayMode,
        p =
          (t = s.contentViewRenderer) == null
            ? void 0
            : t.contentTriggerTextValues,
        _;
      if (
        n[0] !== p ||
        n[1] !== m ||
        n[2] !== l ||
        n[3] !== s ||
        n[4] !== a.primitives
      ) {
        _ = o("cometComposedTextV2NodeBuilders").buildRootNode();
        for (var f of a.primitives) {
          var g = r("cometComposedTextV2GenAiUxPrimitiveParser")(f, {
            contentTriggerTextValues: p,
            displayMode: m,
            markedTokenizeOptions: l,
            renderers: s,
          });
          g != null && _.append(g);
        }
        ((n[0] = p),
          (n[1] = m),
          (n[2] = l),
          (n[3] = s),
          (n[4] = a.primitives),
          (n[5] = _));
      } else _ = n[5];
      var h = _,
        y;
      return (
        n[6] !== h
          ? ((y = c.jsx(r("CometComposedTextV2RendererWithStableKeys.react"), {
              root: h,
            })),
            (n[6] = h),
            (n[7] = y))
          : (y = n[7]),
        y
      );
    }
    l.default = p;
  },
  98,
);
