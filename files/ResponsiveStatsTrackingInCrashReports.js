__d(
  "ResponsiveStatsTrackingInCrashReports",
  ["BrowserCrashConfig", "RSTLogForCrash", "ResponsivenessPerfStats"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { isSystem: !0 };
    function s() {
      r("BrowserCrashConfig").SHOULD_CAPTURE_RESPONSIVE_STATS &&
        (o("ResponsivenessPerfStats").startMonitoring(),
        window.setInterval(function () {
          var t = o("ResponsivenessPerfStats").getResponsivenssPerfStats();
          if (t != null)
            for (var n of Object.keys(t)) {
              var r = t[n];
              r != null &&
                o("RSTLogForCrash").logForCrash(
                  n,
                  r,
                  o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE,
                  e,
                );
            }
        }, r("BrowserCrashConfig").TIMER_BASED_INTERVAL_MS));
    }
    l.initResponsiveStatsTrackingInCrashReports = s;
  },
  98,
);
