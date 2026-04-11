__d(
  "XMDSIconButton.react",
  [
    "BaseIconButton.react",
    "BaseIconButtonXMDSVariants",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "density", "ref", "type", "xstyle"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(16),
        a,
        i,
        l,
        s,
        c,
        m;
      n[0] !== t
        ? ((a = t.children),
          (s = t.density),
          (l = t.ref),
          (c = t.type),
          (m = t.xstyle),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = m))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (c = n[5]),
          (m = n[6]));
      var p = s === void 0 ? "regular" : s,
        _ = c === void 0 ? "default" : c,
        f;
      if (n[7] !== p || n[8] !== _ || n[9] !== m) {
        f = d(_);
        var g =
          p === "regular"
            ? o("BaseIconButtonXMDSVariants").BaseIconButtonXMDSRegularVariant
            : o("BaseIconButtonXMDSVariants").BaseIconButtonXMDSDenseVariant;
        ((f.xstyleConfig.pressable = [
          f.xstyleConfig.pressable,
          g.xstyleConfig.pressable,
          m,
        ]),
          (n[7] = p),
          (n[8] = _),
          (n[9] = m),
          (n[10] = f));
      } else f = n[10];
      var h;
      return (
        n[11] !== a || n[12] !== i || n[13] !== l || n[14] !== f
          ? ((h = u.jsx(
              r("BaseIconButton.react"),
              babelHelpers.extends({}, i, { ref: l, variant: f, children: a }),
            )),
            (n[11] = a),
            (n[12] = i),
            (n[13] = l),
            (n[14] = f),
            (n[15] = h))
          : (h = n[15]),
        h
      );
    }
    function d(e) {
      switch (e) {
        case "contained":
          return o("BaseIconButtonXMDSVariants")
            .BaseIconButtonXMDSContainedVariant;
        case "primary":
          return o("BaseIconButtonXMDSVariants")
            .BaseIconButtonXMDSPrimaryVariant;
        case "primary-on-media":
          return o("BaseIconButtonXMDSVariants")
            .BaseIconButtonXMDSPrimaryOnMediaVariant;
        case "secondary":
          return o("BaseIconButtonXMDSVariants")
            .BaseIconButtonXMDSSecondaryVariant;
        default:
          return o("BaseIconButtonXMDSVariants")
            .BaseIconButtonXMDSDefaultVariant;
      }
    }
    l.default = c;
  },
  98,
);
