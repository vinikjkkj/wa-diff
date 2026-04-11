__d(
  "BaseContextualLayerDefaultContainer.react",
  ["LegacyHidden", "react", "react-compiler-runtime", "stylex", "testID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.children,
        i = t.hidden,
        l = t.ref,
        s = t.stopClickPropagation,
        c = t.testid,
        m = t.xstyle,
        p;
      n[0] !== c ? ((p = r("testID")(c)), (n[0] = c), (n[1] = p)) : (p = n[1]);
      var _;
      n[2] !== m
        ? ((_ = (e || (e = r("stylex")))(m)), (n[2] = m), (n[3] = _))
        : (_ = n[3]);
      var f = s === !0 ? d : void 0,
        g;
      n[4] !== p || n[5] !== _ || n[6] !== f
        ? ((g = babelHelpers.extends({}, p, { className: _, onClick: f })),
          (n[4] = p),
          (n[5] = _),
          (n[6] = f),
          (n[7] = g))
        : (g = n[7]);
      var h = i ? "hidden" : "visible",
        y;
      return (
        n[8] !== a || n[9] !== l || n[10] !== g || n[11] !== h
          ? ((y = u.jsx(r("LegacyHidden"), {
              htmlAttributes: g,
              mode: h,
              ref: l,
              children: a,
            })),
            (n[8] = a),
            (n[9] = l),
            (n[10] = g),
            (n[11] = h),
            (n[12] = y))
          : (y = n[12]),
        y
      );
    }
    function d(e) {
      return e.stopPropagation();
    }
    l.default = c;
  },
  98,
);
