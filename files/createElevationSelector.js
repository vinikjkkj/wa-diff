__d(
  "createElevationSelector",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 20,
      s = {
        foaShadow: {
          position: "x1n2onr6",
          "::before_borderImageRepeat": "xhgxa4x",
          "::before_borderImageSlice": "xy5ysw6",
          "::before_borderImageSource": "x1qkj6lk",
          "::before_borderImageWidth": "xn3walq",
          "::before_borderTopStyle": "xnvurfn",
          "::before_borderInlineEndStyle": "x1v3rft4",
          "::before_borderBottomStyle": "x1opv7go",
          "::before_borderInlineStartStyle": "x1rovbrg",
          "::before_borderTopWidth": "xibdhds",
          "::before_borderInlineEndWidth": "x1ftkm3c",
          "::before_borderBottomWidth": "xhvrwov",
          "::before_borderInlineStartWidth": "x368b2g",
          "::before_boxSizing": "xwx4but",
          "::before_content": "x1cpjm7i",
          "::before_height": "xszcg87",
          "::before_position": "x1hmns74",
          "::before_pointerEvents": "xkk1bqk",
          "::before_insetInlineStart": "xplokhz",
          "::before_left": null,
          "::before_right": null,
          "::before_top": "xsxiz9q",
          "::before_width": "x1rmj1tg",
          "::before_zIndex": "xchklzq",
          $$css: !0,
        },
      };
    function u(e) {
      var t = e.features,
        n = e.styles,
        r = (t == null ? void 0 : t.hasFOAShadow) === !0,
        o = n.elevation.elevationStyles;
      return function (t) {
        var e = t.level,
          n = t.useFOAShadow,
          a = n === void 0 ? !1 : n;
        return r && a ? s.foaShadow : o[e];
      };
    }
    l.createElevationSelector = u;
  },
  98,
);
