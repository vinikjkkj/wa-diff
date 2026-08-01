__d(
  "addCometProfileSwitchAnnotation",
  [
    "JSScheduler",
    "QuickPerformanceLogger",
    "gkx",
    "isRecentProfileSwitchSessionStorage",
    "performanceNavigationStart",
    "profileSwitchOriginSessionStorage",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      if (r("gkx")("24011")) {
        var n = r("isRecentProfileSwitchSessionStorage").getAndRemove();
        if (n) {
          var a = r("qpl")._(30606395, "1860");
          (t.onVcMetricsComplete(function (e, t) {
            var n = r("performanceNavigationStart")() + t.visuallyComplete;
            (s || (s = r("QuickPerformanceLogger"))).markerEnd(a, 2, 0, n);
          }),
            t.addAnnotationInt(
              "is_recent_profile_switch",
              n.didSwitchToMainProfile ? 2 : 1,
            ));
        }
        (e || (e = o("JSScheduler"))).scheduleLoggingPriCallback(function () {
          var e = r("profileSwitchOriginSessionStorage").getAndRemove();
          e && t.addMetadata("origin", e.origin);
        });
      } else
        (e || (e = o("JSScheduler"))).scheduleLoggingPriCallback(function () {
          var e = r("isRecentProfileSwitchSessionStorage").getAndRemove();
          e &&
            ((s || (s = r("QuickPerformanceLogger"))).markerEnd(
              r("qpl")._(30606395, "1860"),
              2,
              0,
              s.currentTimestamp(),
            ),
            t.addAnnotationInt(
              "is_recent_profile_switch",
              e.didSwitchToMainProfile ? 2 : 1,
            ));
          var n = r("profileSwitchOriginSessionStorage").getAndRemove();
          n && t.addMetadata("origin", n.origin);
        });
    }
    l.default = u;
  },
  98,
);
