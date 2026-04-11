__d(
  "OneTraceQPLLogger",
  ["QuickPerformanceLogger", "performanceNavigationStart", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        CANCEL: 4,
        CANCEL_BACKGROUND: 630,
        CANCEL_NAVIGATION: 615,
        DROPPED: 216,
        ERROR: 87,
        FAIL: 3,
        OFFLINE: 160,
        START: 1,
        SUCCESS: 2,
        TIMEOUT: 113,
      },
      c = r("performanceNavigationStart")();
    function d(t, n) {
      t != null &&
        (e || (e = r("QuickPerformanceLogger"))).markerStart(
          t,
          n.instanceKey,
          n.startTime + c,
        );
    }
    function m(t, n) {
      var o;
      if (t != null) {
        (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
          t,
          n.annotations,
          { instanceKey: n.instanceKey },
        );
        for (var a in n.markerPoints)
          (e || (e = r("QuickPerformanceLogger"))).markerPoint(t, a, {
            data: n.markerPoints[a].data,
            instanceKey: n.instanceKey,
            timestamp: n.markerPoints[a].timeSinceStart + c,
          });
        var i = u[n.status];
        e.markerEnd(
          t,
          i,
          n.instanceKey,
          ((o = n.endTime) != null ? o : (s || (s = r("performanceNow")))()) +
            c,
        );
      }
    }
    ((l.qplActionMap = u), (l.initQPL = d), (l.logQPL = m));
  },
  98,
);
