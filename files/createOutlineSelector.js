__d(
  "createOutlineSelector",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.styles,
        n = t.color,
        r = n.outlineActiveStyles,
        o = n.outlineFocusedStyles;
      return function (t) {
        var e = t.color,
          n = t.isActive;
        return n ? r[e] : o[e];
      };
    }
    i.createOutlineSelector = e;
  },
  66,
);
