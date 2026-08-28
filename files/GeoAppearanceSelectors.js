__d(
  "GeoAppearanceSelectors",
  ["GeoPrivateDefaultAppearanceGeneratedStyles"],
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
      var t = e.context;
      return o("GeoPrivateDefaultAppearanceGeneratedStyles").borderRadiusStyles[
        t
      ];
    }
    function u(t) {
      var n = t.context;
      return [
        e.root,
        o("GeoPrivateDefaultAppearanceGeneratedStyles").borderWidthStyles[n],
      ];
    }
    function c(e) {
      var t = e.ratio,
        n = e.size,
        r = t.toLowerCase().replace(/-([a-z])/g, function (e) {
          return e[1].toUpperCase();
        }),
        a = o("GeoPrivateDefaultAppearanceGeneratedStyles").sizeStyles;
      return a["" + (t === "circle" ? "square" : r) + n];
    }
    ((l.selectBorderRadius = s), (l.selectBorderWidth = u), (l.selectSize = c));
  },
  98,
);
