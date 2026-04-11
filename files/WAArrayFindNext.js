__d(
  "WAArrayFindNext",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.findIndex(t);
      if (n !== -1 && !(n >= e.length - 1)) return e[n + 1];
    }
    i.default = e;
  },
  66,
);
