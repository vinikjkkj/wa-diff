__d(
  "CometComposedTextV2GenAIHScrollLayoutViewModelParser.react",
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
        var f = o("cometComposedTextV2NodeBuilders").buildHScrollNode(8);
        for (var g of a.primitives) {
          var h = r("cometComposedTextV2GenAiUxPrimitiveParser")(g, {
            contentTriggerTextValues: p,
            displayMode: m,
            markedTokenizeOptions: l,
            renderers: s,
          });
          h != null && f.append(h);
        }
        ((_ = o("cometComposedTextV2NodeBuilders").buildRootNode().append(f)),
          (n[0] = p),
          (n[1] = m),
          (n[2] = l),
          (n[3] = s),
          (n[4] = a.primitives),
          (n[5] = _));
      } else _ = n[5];
      var y = _,
        C;
      return (
        n[6] !== y
          ? ((C = c.jsx(r("CometComposedTextV2RendererWithStableKeys.react"), {
              root: y,
            })),
            (n[6] = y),
            (n[7] = C))
          : (C = n[7]),
        C
      );
    }
    l.default = p;
  },
  98,
);
