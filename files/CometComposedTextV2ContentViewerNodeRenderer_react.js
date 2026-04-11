__d(
  "CometComposedTextV2ContentViewerNodeRenderer.react",
  [
    "BaseInlinePressable.react",
    "CometComposedTextV2URParserContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        default: {
          textDecoration: "x92akz8",
          ":hover_textDecoration": "xv658tw",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        a = e.node,
        i = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        l = i.renderers,
        u = l.contentViewRenderer,
        d;
      t[0] !== a ? ((d = a.getState()), (t[0] = a), (t[1] = d)) : (d = t[1]);
      var m = d,
        p = m.content,
        _ = m.contentType,
        f = u == null ? void 0 : u.renderer,
        g;
      t[2] !== p || t[3] !== _ || t[4] !== f
        ? ((g = function () {
            f != null && f({ content: p, contentType: _ });
          }),
          (t[2] = p),
          (t[3] = _),
          (t[4] = f),
          (t[5] = g))
        : (g = t[5]);
      var h = g;
      if (f == null) return null;
      var y;
      return (
        t[7] !== n || t[8] !== h
          ? ((y = s.jsx(r("BaseInlinePressable.react"), {
              onPress: h,
              xstyle: c.default,
              children: n,
            })),
            (t[7] = n),
            (t[8] = h),
            (t[9] = y))
          : (y = t[9]),
        y
      );
    }
    l.default = d;
  },
  98,
);
