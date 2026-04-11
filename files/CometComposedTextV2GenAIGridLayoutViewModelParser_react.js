__d(
  "CometComposedTextV2GenAIGridLayoutViewModelParser.react",
  [
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
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.viewModel,
        a = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        i = a.markedTokenizeOptions,
        l;
      if (t[0] !== i || t[1] !== n.primitives) {
        var u = o("cometComposedTextV2NodeBuilders").buildGridNode();
        for (var c of n.primitives) {
          var d = r("cometComposedTextV2GenAiUxPrimitiveParser")(c, {
            markedTokenizeOptions: i,
          });
          d != null && u.append(d);
        }
        ((l = o("cometComposedTextV2NodeBuilders").buildRootNode().append(u)),
          (t[0] = i),
          (t[1] = n.primitives),
          (t[2] = l));
      } else l = t[2];
      var m = l,
        p;
      return (
        t[3] !== m
          ? ((p = s.jsx(r("CometComposedTextV2RendererWithStableKeys.react"), {
              root: m,
            })),
            (t[3] = m),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    l.default = c;
  },
  98,
);
