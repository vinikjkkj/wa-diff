__d(
  "FDSTextContext_Old.react",
  ["CometTextTypography", "FDSTextContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        disabled: "disabledButton",
        highlight: "primaryDeemphasizedButton",
        secondary: "secondaryButton",
        white: "primaryButton",
      };
    function d(e, t) {
      var n;
      return t && (n = c[e]) != null ? n : e;
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.color,
        i = e.type,
        l = r("CometTextTypography")[i].defaultColor,
        u = l === void 0 ? "primary" : l,
        c = a != null ? a : u,
        m = i === "button1" || i === "button2",
        p;
      t[0] !== c || t[1] !== m
        ? ((p = d(c, m)), (t[0] = c), (t[1] = m), (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] !== _ || t[4] !== i
        ? ((f = { color: _, type: i }), (t[3] = _), (t[4] = i), (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] !== n || t[7] !== g
        ? ((h = typeof n == "function" ? n(g) : n),
          (t[6] = n),
          (t[7] = g),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] !== g || t[10] !== h
          ? ((y = s.jsx(o("FDSTextContext").FDSTextContext.Provider, {
              value: g,
              children: h,
            })),
            (t[9] = g),
            (t[10] = h),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
    l.default = m;
  },
  98,
);
