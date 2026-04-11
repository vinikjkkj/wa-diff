__d(
  "LegacyHidden",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = u.unstable_LegacyHidden;
    function d(t) {
      var n = o("react-compiler-runtime").c(12),
        r,
        a;
      n[0] !== t
        ? ((r = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = a,
        l = i.children,
        s = i.htmlAttributes,
        d = i.mode,
        m = i.suppressHydrationWarning,
        p = d === "hidden" ? !0 : void 0,
        _ = d === "hidden" ? "unstable-defer-without-hiding" : d,
        f;
      n[3] !== l || n[4] !== _
        ? ((f = u.jsx(c, { mode: _, children: l })),
          (n[3] = l),
          (n[4] = _),
          (n[5] = f))
        : (f = n[5]);
      var g;
      return (
        n[6] !== r || n[7] !== s || n[8] !== m || n[9] !== p || n[10] !== f
          ? ((g = u.jsx(
              "div",
              babelHelpers.extends({}, s, {
                hidden: p,
                ref: r,
                suppressHydrationWarning: m,
                children: f,
              }),
            )),
            (n[6] = r),
            (n[7] = s),
            (n[8] = m),
            (n[9] = p),
            (n[10] = f),
            (n[11] = g))
          : (g = n[11]),
        g
      );
    }
    ((d.displayName = "LegacyHidden"), (l.default = d));
  },
  98,
);
