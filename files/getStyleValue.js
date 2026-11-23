__d(
  "getStyleValue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (!t) return null;
      var n = getComputedStyle(t);
      return n.getPropertyValue(e);
    }
    i.getStyleValue = e;
  },
  66,
);
