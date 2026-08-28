__d(
  "getAllErrorsAtLevel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return e.filter(function (e) {
        return e.level != null && n.includes(e.level);
      });
    }
    i.default = e;
  },
  66,
);
