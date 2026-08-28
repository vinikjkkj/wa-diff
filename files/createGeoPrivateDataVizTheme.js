__d(
  "createGeoPrivateDataVizTheme",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      function t(t) {
        var n = t.color,
          r = t.variant,
          o = r === void 0 ? "default" : r;
        return e.categorical_color[n][o];
      }
      function n(t) {
        var n = t.context;
        return e.fill[n];
      }
      function r(t) {
        var n = t.context;
        return {
          fontFamily: e.font.family,
          fontSize: e.font.size[n].font_size,
          lineHeight: e.font.size[n].line_height,
        };
      }
      function o(t) {
        var n = t.isDeemphasized,
          r = n === void 0 ? !1 : n,
          o = t.type;
        return e.palette[o][r ? "deemphasized" : "default"];
      }
      function a(t) {
        var n = t.density;
        return e.radius[n];
      }
      function i(t) {
        var n = t.path;
        return e.stroke[n];
      }
      function l(t) {
        var n = t.density;
        return e.stroke_width[n];
      }
      function s(t) {
        var n = t.context;
        return e.text_color[n];
      }
      return {
        selectCategoricalColor: t,
        selectFill: n,
        selectFont: r,
        selectPalette: o,
        selectRadius: a,
        selectStroke: i,
        selectStrokeWidth: l,
        selectTextColor: s,
      };
    }
    i.default = e;
  },
  66,
);
