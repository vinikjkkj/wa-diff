__d(
  "signalsLoggingMakeTimer",
  ["SignalsPerformanceTiming", "signalsLogTiming"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s(t, n) {
      return new (r("SignalsPerformanceTiming"))("" + e++, function (e) {
        var o = e.duration,
          a = e.frameCount,
          i = e.runCount,
          l = e.start;
        r("signalsLogTiming")({
          action: n,
          config: t,
          duration: o,
          frameCount: a,
          runCount: i,
          start: l,
        });
      });
    }
    l.default = s;
  },
  98,
);
