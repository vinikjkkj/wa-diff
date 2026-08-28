__d(
  "createInteractiveOverlaySelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.interactiveOverlayActiveStyles,
        o = n.interactiveOverlayColorStyles,
        a = n.interactiveOverlayFocusedStyles,
        i = n.interactiveOverlayIdleStyles;
      return function (t) {
        var e = t.color,
          n = t.isActive,
          l = n === void 0 ? !1 : n,
          s = t.isFocused,
          u = s === void 0 ? !1 : s;
        return [o[e], i[e], u && a[e], l && r[e]];
      };
    }
    i.createInteractiveOverlaySelector = e;
  },
  66,
);
