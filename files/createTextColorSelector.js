__d(
  "createTextColorSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.textActiveStyles,
        o = n.textDisabledStyles,
        a = n.textInvertedActiveStyles,
        i = n.textInvertedDisabledStyles;
      return function (t) {
        var e = t.color,
          n = t.isDisabled,
          l = n === void 0 ? !1 : n,
          s = t.isInverted,
          u = s === void 0 ? !1 : s,
          c = e,
          d = u;
        return (
          c === "inverted"
            ? ((d = !0), (c = "value"))
            : (c === "headingDescription" || c === "valueLabel") &&
              (c = "heading"),
          d ? [!l && a[c], l && i[c]] : [!l && r[c], l && o[c]]
        );
      };
    }
    i.createTextColorSelector = e;
  },
  66,
);
