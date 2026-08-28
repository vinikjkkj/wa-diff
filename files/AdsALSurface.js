__d(
  "AdsALSurface",
  [
    "AdsALRuntimeSurfaceMap",
    "AdsALSubsurface",
    "Surface.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["capability", "subsurface", "surface"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(14),
        a,
        i,
        l,
        s;
      n[0] !== t
        ? ((a = t.capability),
          (l = t.subsurface),
          (s = t.surface),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]));
      var c = s.logKey;
      if (l != null) {
        var d;
        (n[5] !== l || n[6] !== c
          ? ((d = o("AdsALSubsurface").getFullSurfaceString(c, l)),
            (n[5] = l),
            (n[6] = c),
            (n[7] = d))
          : (d = n[7]),
          (c = d));
      }
      var m = s,
        p = m.feature,
        _ = m.logKey;
      r("AdsALRuntimeSurfaceMap").set(c, { logKey: _, feature: p });
      var f;
      if (n[8] !== a) {
        var g;
        ((f =
          ((g = a) == null ? void 0 : g.nonInteractive) !== !0
            ? babelHelpers.extends({}, a, { trackVisibilityThreshold: 0.5 })
            : a),
          (n[8] = a),
          (n[9] = f));
      } else f = n[9];
      var h = f,
        y;
      return (
        n[10] !== i || n[11] !== c || n[12] !== h
          ? ((y = u.jsx(
              r("Surface.react"),
              babelHelpers.extends({ capability: h, surface: c }, i),
            )),
            (n[10] = i),
            (n[11] = c),
            (n[12] = h),
            (n[13] = y))
          : (y = n[13]),
        y
      );
    }
    l.default = c;
  },
  98,
);
