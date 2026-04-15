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
      var n = o("react-compiler-runtime").c(21),
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
      n[7] !== _ ? ((f = d(_)), (n[7] = _), (n[8] = f)) : (f = n[8]);
      var g = f,
        h =
          p === "regular"
            ? o("BaseIconButtonXMDSVariants").BaseIconButtonXMDSRegularVariant
            : o("BaseIconButtonXMDSVariants").BaseIconButtonXMDSDenseVariant,
        y;
      n[9] !== g.xstyleConfig.pressable ||
      n[10] !== h.xstyleConfig.pressable ||
      n[11] !== m
        ? ((y = [g.xstyleConfig.pressable, h.xstyleConfig.pressable, m]),
          (n[9] = g.xstyleConfig.pressable),
          (n[10] = h.xstyleConfig.pressable),
          (n[11] = m),
          (n[12] = y))
        : (y = n[12]);
      var C;
      n[13] !== g.xstyleConfig || n[14] !== y
        ? ((C = {
            xstyleConfig: babelHelpers.extends({}, g.xstyleConfig, {
              pressable: y,
            }),
          }),
          (n[13] = g.xstyleConfig),
          (n[14] = y),
          (n[15] = C))
        : (C = n[15]);
      var b = C,
        v;
      return (
        n[16] !== a || n[17] !== i || n[18] !== l || n[19] !== b
          ? ((v = u.jsx(
              r("BaseIconButton.react"),
              babelHelpers.extends({}, i, { ref: l, variant: b, children: a }),
            )),
            (n[16] = a),
            (n[17] = i),
            (n[18] = l),
            (n[19] = b),
            (n[20] = v))
          : (v = n[20]),
        v
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
