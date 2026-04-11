__d(
  "setTimeoutCometLoggingPriWWW",
  ["JSScheduler", "setTimeoutCometInternals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      for (
        var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2;
        i < r;
        i++
      )
        a[i - 2] = arguments[i];
      return o(
        "setTimeoutCometInternals",
      ).setTimeoutAtPriority_DO_NOT_USE.apply(
        o("setTimeoutCometInternals"),
        [(e || (e = o("JSScheduler"))).priorities.unstable_Low, t, n].concat(a),
      );
    }
    l.default = s;
  },
  98,
);
