__d(
  "createNuxBorderStrokeColorSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color.strokeMutedActiveStyles;
      return function (t) {
        var e = t.color,
          r = e === "selected" ? "blue" : e;
        return n[r];
      };
    }
    i.createNuxBorderStrokeColorSelector = e;
  },
  66,
);
