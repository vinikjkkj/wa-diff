__d(
  "createStaticBackgroundSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = e.themeOverrides,
        r = n == null ? void 0 : n.selectStaticBackgroundColor,
        o = t.color,
        a = o.staticBackgroundInvertedMutedStyles,
        i = o.staticBackgroundInvertedStyles,
        l = o.staticBackgroundMutedStyles,
        s = o.staticBackgroundStyles;
      return function (t) {
        if (r != null && r.condition(t)) return r.handler(t);
        var e = t.isInverted,
          n = e === void 0 ? !1 : e,
          o = t.isMuted,
          u = o === void 0 ? !1 : o,
          c = t.surface;
        return n ? (u ? a[c] : i[c]) : u ? l[c] : s[c];
      };
    }
    i.createStaticBackgroundSelector = e;
  },
  66,
);
