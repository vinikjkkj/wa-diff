__d(
  "CometComposedTextV2RendererWithStableKeys.react",
  [
    "CometComposedTextV2ElementNode.react",
    "CometComposedTextV2Renderer.react",
    "react",
    "react-compiler-runtime",
    "usePrevious",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = r("react"));
    function u(e, t) {
      if (
        e != null &&
        (t.setKey(e.getKey()),
        e instanceof r("CometComposedTextV2ElementNode.react") &&
          t instanceof r("CometComposedTextV2ElementNode.react"))
      )
        for (
          var n = e.getChildren(), o = t.getChildren(), a = 0;
          a < Math.min(n.length, o.length);
          a++
        )
          u(n[a], o[a]);
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.root,
        a = r("usePrevious")(n);
      u(a, n);
      var i;
      return (
        t[0] !== n
          ? ((i = s.jsx(r("CometComposedTextV2Renderer.react"), {
              nodes: [n],
            })),
            (t[0] = n),
            (t[1] = i))
          : (i = t[1]),
        i
      );
    }
    l.default = c;
  },
  98,
);
