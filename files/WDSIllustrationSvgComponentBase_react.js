__d(
  "WDSIllustrationSvgComponentBase.react",
  ["WDSSvgComponentBase.react", "err", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.children,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (n == null)
        throw r("err")(
          "Cannot use WDSBaseIllustrationSpan without SVG children",
        );
      var a = o["aria-hidden"],
        i = o["aria-label"],
        l = o.containerRef,
        s = o.directional,
        c = o.displayInline,
        d = o.overrideDirection,
        m = o.testid,
        p = o.xstyle;
      return u.jsx(r("WDSSvgComponentBase.react"), {
        "aria-hidden": a,
        "aria-label": i,
        containerRef: l,
        directional: s,
        displayInline: c,
        overrideDirection: d,
        testid: void 0,
        xstyle: p,
        children: n,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
