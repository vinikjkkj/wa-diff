__d(
  "getComposerMediaReorderInsertIndex",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.filter(function (e) {
        return e < t;
      }).length;
      return n === 0 ? t : t - n + 1;
    }
    i.default = e;
  },
  66,
);
