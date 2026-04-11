__d(
  "oz-player/strategies/LiveheadSeekaheadStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0.05;
    function l(t, n) {
      var r = Math.max.apply(
        Math,
        n.map(function (e) {
          return e.startTime;
        }),
      );
      return r - t > 0 ? r - t + e : 0;
    }
    i.computeSeekAhead = l;
  },
  66,
);
