__d(
  "createFontSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.text.fontStyles;
      return function (t) {
        var e = t.size;
        return n[e];
      };
    }
    i.createFontSelector = e;
  },
  66,
);
