__d(
  "CometHeroInteractionWithDiv.react",
  [
    "CometHeroInteractionImpl.react",
    "cr:35630",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var a = o("react-compiler-runtime").c(12),
        i = t.ref,
        l = t.children,
        s = t.hidden,
        c = t.htmlAttributes,
        d = t.pageletAriaProps,
        m = t.xstyle,
        p;
      a[0] !== m
        ? ((p = (e || (e = r("stylex")))(m)), (a[0] = m), (a[1] = p))
        : (p = a[1]);
      var _ = c == null ? void 0 : c.onMouseLeave,
        f = c == null ? void 0 : c.style,
        g;
      a[2] !== d || a[3] !== p || a[4] !== _ || a[5] !== f
        ? ((g = babelHelpers.extends(
            { className: p, onMouseLeave: _, style: f },
            d,
          )),
          (a[2] = d),
          (a[3] = p),
          (a[4] = _),
          (a[5] = f),
          (a[6] = g))
        : (g = a[6]);
      var h = s === !0 ? "hidden" : "visible",
        y;
      return (
        a[7] !== l || a[8] !== i || a[9] !== g || a[10] !== h
          ? ((y = u.jsx(n("cr:35630"), {
              htmlAttributes: g,
              mode: h,
              ref: i,
              children: l,
            })),
            (a[7] = l),
            (a[8] = i),
            (a[9] = g),
            (a[10] = h),
            (a[11] = y))
          : (y = a[11]),
        y
      );
    }
    var d =
      r("CometHeroInteractionImpl.react") != null
        ? r("CometHeroInteractionImpl.react")
        : c;
    l.default = d;
  },
  98,
);
