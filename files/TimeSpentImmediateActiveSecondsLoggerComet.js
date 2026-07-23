__d(
  "TimeSpentImmediateActiveSecondsLoggerComet",
  [
    "CometTimeSpentNavigation",
    "ImmediateActiveSecondsConfig",
    "WebImmediateActiveSecondsFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s(e) {
      if (r("ImmediateActiveSecondsConfig").sampling_rate <= 0) return !1;
      var t =
        Math.floor(e / 1e3) % r("ImmediateActiveSecondsConfig").sampling_rate;
      return t === r("ImmediateActiveSecondsConfig").ias_bucket;
    }
    function u(t) {
      if (!(t >= e && t - e < 1e3)) {
        var n = s(t);
        if (n) {
          var o = r("CometTimeSpentNavigation").getPathInfo();
          r("WebImmediateActiveSecondsFalcoEvent").logImmediately(function () {
            return {
              activity_time_ms: t,
              last_activity_time_ms: e,
              script_path: o ? o.name : "",
            };
          });
        }
        e = Math.floor(t / 1e3) * 1e3;
      }
    }
    l.maybeReportActiveSecond = u;
  },
  98,
);
