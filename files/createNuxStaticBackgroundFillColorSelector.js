__d(
  "createNuxStaticBackgroundFillColorSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color.staticFillStyles;
      return function (t) {
        var e = t.surface;
        return n[e];
      };
    }
    i.createNuxStaticBackgroundFillColorSelector = e;
  },
  66,
);
