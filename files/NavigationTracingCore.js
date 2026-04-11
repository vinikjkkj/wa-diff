__d(
  "NavigationTracingCore",
  ["InteractionTracingCore", "NavigationTracingUtils", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(e) {
      s = e;
    }
    function c() {
      return s;
    }
    function d(t, n) {
      var a,
        i =
          (a = t.traceStartTime) != null
            ? a
            : (e || (e = r("performanceNow")))();
      return r("InteractionTracingCore").startInteraction(t, function (e) {
        u(e);
        var r = e.getTraceId();
        (e.setTracePolicy(t.tracePolicy),
          e.addMarkerPoint("traceStart", "AppTiming", i),
          t.skipQPLStartMarker === !0 &&
            t.qplInstanceKey != null &&
            t.deps.QuickPerformanceLogger.markerPoint(
              t.qplEvent,
              "traceStart",
              { instanceKey: t.qplInstanceKey, timestamp: i },
            ),
          e.onComplete(function (e) {
            (o("NavigationTracingUtils").addNavigationTiming(r),
              o("NavigationTracingUtils").addReferrer(r));
          }),
          e.onCompleteSync(function (e) {
            u(null);
          }),
          n && n(e));
      });
    }
    function m(e, t) {
      return r("InteractionTracingCore").startInteraction(e, function (e) {
        try {
          u(e);
          var n = e.getTraceId();
          (e.onComplete(function (e) {
            o("NavigationTracingUtils").addNavigationTiming(n);
          }),
            e.onCompleteSync(function (e) {
              u(null);
            }),
            t && t(e));
        } catch (e) {
          if (e.message !== "can't access dead object") throw e;
        }
      });
    }
    var p = {
      getCurrentNavigationTraceAPI: c,
      traceInitialLoad: d,
      traceNavigation: m,
    };
    l.default = p;
  },
  98,
);
