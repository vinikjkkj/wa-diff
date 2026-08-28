__d(
  "SharedDateUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e / t,
        r = e % t,
        o = t > 0 ? 1 : -1;
      return r >= 0 ? [n, r] : [n - o, r + o * t];
    }
    i.divide = e;
  },
  66,
);
