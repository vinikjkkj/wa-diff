__d(
  "createProgressElementColorSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.progressElementDarkStyles,
        o = n.progressElementLightStyles;
      return function (t) {
        var e = t.element,
          n = t.shade;
        return n === "light" ? o[e] : r[e];
      };
    }
    i.createProgressElementColorSelector = e;
  },
  66,
);
