__d(
  "signalsLogTiming",
  ["signalsLoggingAssertComplete", "signalsLoggingSend"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.action,
        n = e.config,
        o = e.duration,
        a = e.frameCount,
        i = e.runCount,
        l = e.start;
      (r("signalsLoggingAssertComplete")(n),
        r("signalsLoggingSend")(n, {
          action: t,
          duration: o,
          frameCount: a,
          runCount: i,
          start: l,
          type: "timing",
        }));
    }
    l.default = e;
  },
  98,
);
