__d(
  "CometHeroInteractionImpl.react",
  ["hero-tracing", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["htmlAttributes", "pageletAriaProps", "ref", "xstyle"],
      s,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(17),
        l,
        u,
        d,
        m,
        p;
      i[0] !== t
        ? ((l = t.htmlAttributes),
          (d = t.pageletAriaProps),
          (m = t.ref),
          (p = t.xstyle),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = u),
          (i[3] = d),
          (i[4] = m),
          (i[5] = p))
        : ((l = i[1]), (u = i[2]), (d = i[3]), (m = i[4]), (p = i[5]));
      var _;
      i[6] !== p
        ? ((_ = (s || (s = r("stylex")))(p)), (i[6] = p), (i[7] = _))
        : (_ = i[7]);
      var f = (n = l) == null ? void 0 : n.onMouseLeave,
        g = (a = l) == null ? void 0 : a.style,
        h;
      i[8] !== d || i[9] !== _ || i[10] !== f || i[11] !== g
        ? ((h = babelHelpers.extends({}, d, {
            className: _,
            onMouseLeave: f,
            style: g,
          })),
          (i[8] = d),
          (i[9] = _),
          (i[10] = f),
          (i[11] = g),
          (i[12] = h))
        : (h = i[12]);
      var y;
      return (
        i[13] !== u || i[14] !== m || i[15] !== h
          ? ((y = c.jsx(
              o("hero-tracing").HeroInteraction,
              babelHelpers.extends({ htmlAttributes: h, ref: m }, u),
            )),
            (i[13] = u),
            (i[14] = m),
            (i[15] = h),
            (i[16] = y))
          : (y = i[16]),
        y
      );
    }
    ((d.displayName = "CometHeroInteraction"), (l.default = d));
  },
  98,
);
