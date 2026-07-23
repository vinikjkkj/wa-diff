__d(
  "CometTimeSpentBitArrayLoggerUpdater",
  ["CometThrottle", "CometTimeSpentBitArrayLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null;
    function u(e) {
      o("CometTimeSpentBitArrayLogger").updateTimeSpentArray(
        Date.now(),
        e.type,
      );
    }
    var c = r("CometThrottle")(
        function (t) {
          if (t instanceof MouseEvent) {
            if (
              /^mouse(enter|leave|move|out|over)$/.test(t.type) &&
              t.pageX === e &&
              t.pageY === s
            )
              return;
            ((e = t.pageX), (s = t.pageY));
          }
          u(t);
        },
        500,
        { leading: !0, trailing: !1 },
      ),
      d = { capture: !0, passive: !0 };
    ((l.updateTimeSpentArrayWithCurrentTimestamp = u),
      (l.updateTimeSpentArrayThrottled = c),
      (l.LISTENER_OPTIONS = d));
  },
  98,
);
