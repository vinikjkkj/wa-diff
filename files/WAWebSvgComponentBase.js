__d(
  "WAWebSvgComponentBase",
  ["Locale", "WAWebClassnames", "err", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["children"],
      s = [
        "aria-hidden",
        "aria-label",
        "className_DONOTUSE",
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
        c = a.className_DONOTUSE,
        p = a.containerRef,
        _ = a.directional,
        f = a.displayInline,
        g = a.name,
        h = a.overrideDirection,
        y = a.xstyle,
        C = babelHelpers.objectWithoutPropertiesLoose(a, s),
        b;
      h != null ? (b = h === "rtl") : (b = _ === !0 ? o("Locale").isRTL() : !1);
      var v = (u || (u = r("stylex")))(b && m.reverse, f === !0 && m.inline, y),
        S = i === !1 ? !1 : l == null;
      return d.jsx(
        "span",
        babelHelpers.extends(
          {
            "data-testid": void 0,
            "aria-hidden": S,
            "aria-label": l,
            ref: p,
            "data-icon": g,
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              c,
              v,
            ),
          },
          C,
          { children: n },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.BaseSvgSpan = p));
  },
  98,
);
