__d(
  "createInteractiveColorPaletteSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.interactiveBackgroundActiveStyles,
        o = n.interactiveBackgroundDisabledStyles,
        a = n.interactiveBackgroundFocusedStyles,
        i = n.interactiveBackgroundIdleStyles,
        l = n.interactiveBackgroundTextActiveStyles,
        s = n.interactiveBackgroundTextDisabledStyles,
        u = n.interactiveBackgroundTextWeightStyles;
      return function (t) {
        var e = t.color,
          n = t.isActive,
          c = n === void 0 ? !1 : n,
          d = t.isDisabled,
          m = d === void 0 ? !1 : d,
          p = t.isFocused,
          _ = p === void 0 ? !1 : p;
        return [u[e], l[e], i[e], _ && a[e], c && r[e], m && o[e], m && s[e]];
      };
    }
    i.createInteractiveColorPaletteSelector = e;
  },
  66,
);
