__d(
  "BaseIconButton.react",
  [
    "BaseIsDecorativeContext",
    "CometPressable.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "ref", "variant"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(17),
        a,
        i,
        l,
        s;
      n[0] !== t
        ? ((a = t.children),
          (l = t.ref),
          (s = t.variant),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (s = n[4]));
      var c = s,
        d = c.xstyleConfig,
        m = i,
        p = m.disabled,
        _ = i.linkProps != null ? "link" : "button",
        f = !!p && d.pressableDisabled,
        g;
      n[5] !== f || n[6] !== d.pressable
        ? ((g = [d.pressable, f]), (n[5] = f), (n[6] = d.pressable), (n[7] = g))
        : (g = n[7]);
      var h;
      n[8] !== a
        ? ((h = u.jsx(r("BaseIsDecorativeContext").Provider, {
            value: !0,
            children: a,
          })),
          (n[8] = a),
          (n[9] = h))
        : (h = n[9]);
      var y;
      return (
        n[10] !== p ||
        n[11] !== i ||
        n[12] !== l ||
        n[13] !== _ ||
        n[14] !== g ||
        n[15] !== h
          ? ((y = u.jsx(
              r("CometPressable.react"),
              babelHelpers.extends({}, i, {
                disabled: p,
                ref: l,
                role: _,
                xstyle: g,
                children: h,
              }),
            )),
            (n[10] = p),
            (n[11] = i),
            (n[12] = l),
            (n[13] = _),
            (n[14] = g),
            (n[15] = h),
            (n[16] = y))
          : (y = n[16]),
        y
      );
    }
    l.default = c;
  },
  98,
);
