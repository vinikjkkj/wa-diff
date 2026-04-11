__d(
  "WAMetrics",
  ["Promise", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = o("WATimeUtils").performanceAbsoluteNow();
      return new (e || (e = n("Promise")))(function (e) {
        setTimeout(function () {
          e(o("WATimeUtils").performanceAbsoluteNow() - t);
        }, 0);
      });
    }
    l.getEventLoopDelay = s;
  },
  98,
);
