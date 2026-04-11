__d(
  "WDSSvgComponentBase.react",
  ["Locale", "WDSColorStyles.stylex", "err", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children"],
      s = [
        "aria-hidden",
        "aria-label",
        "colorName",
        "containerRef",
        "directional",
        "displayInline",
        "overrideDirection",
        "testid",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        reverse: { display: "x1lliihq", transform: "xpk2tj9", $$css: !0 },
        inline: { display: "x1rg5ohu", verticalAlign: "x11njtxf", $$css: !0 },
      };
    function p(t) {
      var n = t.children,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (n == null)
        throw r("err")("Cannot use WDSBaseSvgSpan without SVG children");
      var i = a["aria-hidden"],
        l = a["aria-label"],
        c = a.colorName,
        p = a.containerRef,
        _ = a.directional,
        f = a.displayInline,
        g = a.overrideDirection,
        h = a.testid,
        y = a.xstyle,
        C = babelHelpers.objectWithoutPropertiesLoose(a, s),
        b;
      g != null ? (b = g === "rtl") : (b = _ === !0 ? o("Locale").isRTL() : !1);
      var v = c != null ? o("WDSColorStyles.stylex").WDSColorStyles[c] : null,
        S = [b ? m.reverse : null, f === !0 && m.inline, v, y],
        R = i === !1 ? !1 : l == null;
      return d.jsx(
        "span",
        babelHelpers.extends(
          { "data-testid": void 0, "aria-hidden": R, "aria-label": l, ref: p },
          C,
          (u || (u = r("stylex"))).props(S),
          { children: n },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
