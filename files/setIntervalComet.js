__d(
  "setIntervalComet",
  ["JSScheduler", "setTimeoutCometInternals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      for (
        var r =
            (e || (e = o("JSScheduler"))).getCurrentPriorityLevel() ===
            (e || (e = o("JSScheduler"))).priorities.unstable_Idle
              ? (e || (e = o("JSScheduler"))).priorities.unstable_Idle
              : (e || (e = o("JSScheduler"))).priorities.unstable_Low,
          a = arguments.length,
          i = new Array(a > 2 ? a - 2 : 0),
          l = 2;
        l < a;
        l++
      )
        i[l - 2] = arguments[l];
      return o(
        "setTimeoutCometInternals",
      ).setIntervalAtPriority_DO_NOT_USE.apply(
        o("setTimeoutCometInternals"),
        [r, t, n].concat(i),
      );
    }
    l.default = s;
  },
  98,
);
