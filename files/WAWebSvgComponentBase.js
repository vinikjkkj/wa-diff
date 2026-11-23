__d(
  "WAWebSvgComponentBase",
  ["Locale", "err", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["children"],
      s = [
        "aria-hidden",
        "aria-label",
        "containerRef",
        "directional",
        "displayInline",
        "name",
        "overrideDirection",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        reverse: { display: "x1lliihq", transform: "xpk2tj9", $$css: !0 },
        inline: { display: "x1rg5ohu", verticalAlign: "x16dsc37", $$css: !0 },
      };
    function p(t) {
      var n = t.children,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      if (n == null)
        throw r("err")("Cannot use BaseSvgSpan without SVG children");
      var i = a["aria-hidden"],
        l = a["aria-label"],
        c = a.containerRef,
        p = a.directional,
        _ = a.displayInline,
        f = a.name,
        g = a.overrideDirection,
        h = a.xstyle,
        y = babelHelpers.objectWithoutPropertiesLoose(a, s),
        C;
      g != null ? (C = g === "rtl") : (C = p === !0 ? o("Locale").isRTL() : !1);
      var b = (u || (u = r("stylex"))).props(
          C && m.reverse,
          _ === !0 && m.inline,
          h,
        ),
        v = i === !1 ? !1 : l == null;
      return d.jsx(
        "span",
        babelHelpers.extends(
          {
            "data-testid": f,
            "aria-hidden": v,
            "aria-label": l,
            ref: c,
            "data-icon": f,
          },
          b,
          y,
          { children: n },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.BaseSvgSpan = p));
  },
  98,
);
