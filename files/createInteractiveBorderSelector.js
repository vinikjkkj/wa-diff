__d(
  "createInteractiveBorderSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return null;
    }
    function l(t) {
      var n = t.features,
        r = t.styles;
      if ((n == null ? void 0 : n.hasInteractiveBorder) !== !0) return e;
      var o = r.color,
        a = o.interactiveBorderDefaultActiveStyles,
        i = o.interactiveBorderDefaultDisabledStyles,
        l = r.appearance.interactiveBorderWidthStyles;
      return a == null || i == null || l == null
        ? e
        : function (t) {
            var e = t.color,
              n = t.context,
              r = t.isDisabled,
              o = r === void 0 ? !1 : r;
            return (e === "wash" && n === "control") ||
              (e === "button" && n === "button") ||
              (e === "buttonInverted" && n === "buttonInverted")
              ? [!o && a[n], o && i[n], l[n]]
              : null;
          };
    }
    i.createInteractiveBorderSelector = l;
  },
  66,
);
