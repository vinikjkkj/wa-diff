__d(
  "createAppearanceSelectors",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      root: {
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        $$css: !0,
      },
    };
    function s(e) {
      var t = e.styles;
      return function (n) {
        var e = n.context;
        return t.appearance.borderRadiusStyles[e];
      };
    }
    function u(t) {
      var n = t.styles;
      return function (r) {
        var t = r.context;
        return [e.root, n.appearance.borderWidthStyles[t]];
      };
    }
    function c(e) {
      var t = e.styles;
      return function (n) {
        var e = n.ratio,
          r = n.size,
          o = e.toLowerCase().replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          });
        return t.appearance.sizeStyles[
          "" + (e === "circle" ? "square" : o) + r
        ];
      };
    }
    ((l.createBorderRadiusSelector = s),
      (l.createBorderWidthSelector = u),
      (l.createSizeSelector = c));
  },
  98,
);
