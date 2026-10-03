__d(
  "initCometTimeSpentLogger",
  ["CometTimeSpentBitArrayLoggerUpdater", "cr:6036"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        fullscreenchange: [
          "webkitfullscreenchange",
          "mozfullscreenchange",
          "MSFullscreenChange",
          "fullscreenchange",
        ],
      },
      s = !1;
    function u() {
      var e;
      return (
        c(
          "click",
          (e = o("CometTimeSpentBitArrayLoggerUpdater"))
            .updateTimeSpentArrayWithCurrentTimestamp,
          e.LISTENER_OPTIONS,
        ),
        c(
          "focus",
          e.updateTimeSpentArrayWithCurrentTimestamp,
          e.LISTENER_OPTIONS,
        ),
        c(
          "keydown",
          e.updateTimeSpentArrayWithCurrentTimestamp,
          e.LISTENER_OPTIONS,
        ),
        c("mousemove", e.updateTimeSpentArrayThrottled, e.LISTENER_OPTIONS),
        c("scroll", e.updateTimeSpentArrayThrottled, e.LISTENER_OPTIONS),
        null
      );
    }
    function c(t, n, r) {
      var o,
        a,
        i = (o = (a = e[t]) == null ? void 0 : a[0]) != null ? o : t;
      window.addEventListener(i, n, r);
    }
    function d() {
      s !== !0 &&
        (u(),
        (s = !0),
        n("cr:6036") == null ||
          n("cr:6036").addTimeSpentStartupPoint(
            "time_spent_activity_listeners_ready",
          ));
    }
    l.default = d;
  },
  98,
);
