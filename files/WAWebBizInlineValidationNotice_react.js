__d(
  "WAWebBizInlineValidationNotice.react",
  [
    "WAWebFlex.react",
    "WDSIconIcError.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { container: { columnGap: "x1s70e7g", $$css: !0 } },
      c = {
        error: { color: "x30a034", $$css: !0 },
        warning: { color: "x1f81s73", $$css: !0 },
      },
      d = 16,
      m = {
        error: r("WDSIconIcError.react"),
        warning: r("WDSIconIcWarning.react"),
      },
      p = { error: "secondaryNegative", warning: "secondaryWarning" };
    function _(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.message,
        a = e.type,
        i = a === void 0 ? "error" : a,
        l = m[i],
        _ = p[i],
        f = c[i],
        g;
      t[0] !== l || t[1] !== f
        ? ((g = s.jsx(l, { height: d, width: d, xstyle: f })),
          (t[0] = l),
          (t[1] = f),
          (t[2] = g))
        : (g = t[2]);
      var h;
      t[3] !== _ || t[4] !== n
        ? ((h = s.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: _,
            children: n,
          })),
          (t[3] = _),
          (t[4] = n),
          (t[5] = h))
        : (h = t[5]);
      var y;
      return (
        t[6] !== g || t[7] !== h
          ? ((y = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: u.container,
              children: [g, h],
            })),
            (t[6] = g),
            (t[7] = h),
            (t[8] = y))
          : (y = t[8]),
        y
      );
    }
    l.default = _;
  },
  98,
);
