__d(
  "CometComposedTextV2ProgressStatusNodeRenderer.react",
  [
    "CometComposedTextV2URParserContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "#000000",
      c = "rgba(0, 0, 0, 0.15)",
      d = "xb4s9mv-B";
    function m(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(10),
        a = e.children,
        i = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        l = i.renderers,
        d = l.progressStatusRenderer,
        m = (t = d == null ? void 0 : d.textColor) != null ? t : u,
        p = (n = d == null ? void 0 : d.shimmerColor) != null ? n : c,
        _;
      r[0] !== p || r[1] !== m
        ? ((_ = {
            "--progress-status-shimmer-color": p,
            "--progress-status-text-color": m,
            padding: "6px 8px 8px 9px",
          }),
          (r[0] = p),
          (r[1] = m),
          (r[2] = _))
        : (_ = r[2]);
      var f = _,
        g,
        h;
      r[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "x6s0dn4 x3nfvp2" }),
          (h = {
            className:
              "x1t23j8t xg7jpbn x1c74tu6 xa4qsjk x1ng0oyw x1esw782 x1ta4xzc xr9744o xakli9p",
          }),
          (r[3] = g),
          (r[4] = h))
        : ((g = r[3]), (h = r[4]));
      var y;
      r[5] !== a
        ? ((y = s.jsx(
            "div",
            babelHelpers.extends({}, g, {
              children: s.jsx(
                "span",
                babelHelpers.extends({}, h, { children: a }),
              ),
            }),
          )),
          (r[5] = a),
          (r[6] = y))
        : (y = r[6]);
      var C;
      return (
        r[7] !== f || r[8] !== y
          ? ((C = s.jsx("div", { style: f, children: y })),
            (r[7] = f),
            (r[8] = y),
            (r[9] = C))
          : (C = r[9]),
        C
      );
    }
    l.default = m;
  },
  98,
);
