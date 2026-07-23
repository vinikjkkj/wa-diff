__d(
  "initCometTimeSpentLogger",
  ["CometTimeSpentBitArrayLoggerUpdater"],
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
      s !== !0 && (u(), (s = !0));
    }
    l.default = d;
  },
  98,
);
