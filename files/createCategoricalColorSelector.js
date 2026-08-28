__d(
  "createCategoricalColorSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color.categoricalBackgroundIdleStyles;
      return function (t) {
        var e = t.color,
          r = e === void 0 ? "teal" : e;
        return n[r];
      };
    }
    function l(e) {
      var t = e.styles,
        n = t.color.categoricalForegroundTextStyles;
      return function (t) {
        var e = t.color,
          r = e === void 0 ? "teal" : e;
        return n[r];
      };
    }
    ((i.createCategoricalBackgroundColorSelector = e),
      (i.createCategoricalForegroundColorSelector = l));
  },
  66,
);
