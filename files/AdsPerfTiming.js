__d(
  "AdsPerfTiming",
  ["performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e || (e = r("performance"))).timing &&
          (e || (e = r("performance"))).timing.fetchStart) ||
        t._cstart;
    l.start = s;
  },
  98,
);
