__d(
  "CometHidden",
  ["CometHiddenAPIContext", "LegacyHidden", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.unstable_Activity,
      m = c.useContext;
    function p(t) {
      var n = o("react-compiler-runtime").c(17),
        a,
        i;
      n[0] !== t
        ? ((a = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = i,
        s = l.children,
        c = l.htmlAttributes,
        p = l.mode,
        _ = l.suppressHydrationWarning,
        f = m(r("CometHiddenAPIContext"));
      if (f) {
        var g;
        return (
          n[3] !== s || n[4] !== a || n[5] !== c || n[6] !== p || n[7] !== _
            ? ((g = u.jsx(r("LegacyHidden"), {
                htmlAttributes: c,
                mode: p,
                ref: a,
                suppressHydrationWarning: _,
                children: s,
              })),
              (n[3] = s),
              (n[4] = a),
              (n[5] = c),
              (n[6] = p),
              (n[7] = _),
              (n[8] = g))
            : (g = n[8]),
          g
        );
      }
      var h = p === "hidden" ? "hidden" : "visible",
        y;
      n[9] !== s || n[10] !== a || n[11] !== c || n[12] !== _
        ? ((y = u.jsx(
            "div",
            babelHelpers.extends({}, c, {
              ref: a,
              suppressHydrationWarning: _,
              children: s,
            }),
          )),
          (n[9] = s),
          (n[10] = a),
          (n[11] = c),
          (n[12] = _),
          (n[13] = y))
        : (y = n[13]);
      var C;
      return (
        n[14] !== h || n[15] !== y
          ? ((C = u.jsx(d, { mode: h, children: y })),
            (n[14] = h),
            (n[15] = y),
            (n[16] = C))
          : (C = n[16]),
        C
      );
    }
    ((p.displayName = "CometHidden"), (l.default = p));
  },
  98,
);
