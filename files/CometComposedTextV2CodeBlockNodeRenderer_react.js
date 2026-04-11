__d(
  "CometComposedTextV2CodeBlockNodeRenderer.react",
  [
    "CometAISourceCode.react",
    "CometAIThemeProvider.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = {
        default: {
          borderTopColor: "xz8r4c6",
          borderInlineEndColor: "xi10ab4",
          borderBottomColor: "x140osdn",
          borderInlineStartColor: "x1q5d7hi",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.node,
        a;
      t[0] !== n ? ((a = n.getState()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l = i.content,
        d = i.language,
        m = u(o("CometAIThemeProvider.react").CometAIThemeContext),
        p = m.displayMode,
        _ = d === "jsx" ? "javascript" : d,
        f = _ != null && _ !== "" ? _ : "javascript",
        g;
      return (
        t[2] !== l || t[3] !== p || t[4] !== f
          ? ((g = s.jsx(r("CometAISourceCode.react"), {
              code: l,
              language: f,
              theme: p,
              xstyle: c.default,
            })),
            (t[2] = l),
            (t[3] = p),
            (t[4] = f),
            (t[5] = g))
          : (g = t[5]),
        g
      );
    }
    l.default = d;
  },
  98,
);
