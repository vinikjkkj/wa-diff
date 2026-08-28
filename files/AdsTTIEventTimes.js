__d(
  "AdsTTIEventTimes",
  [
    "invariant",
    "AdsSpeedConfig",
    "ExecutionEnvironment",
    "TSIAdsReliabilityHook",
    "TimeSliceInteraction",
    "UserTimingUtils",
    "WaitTimeReliabilityLogger",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = {},
      d = !0,
      m,
      p = null,
      _ = "\u2693";
    (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
      ((p = r("TimeSliceInteraction").create("ads_wait_time", d)),
      o("WaitTimeReliabilityLogger").log("client_start", p.getTraceID()),
      o("TSIAdsReliabilityHook").register(function (e, t, n) {
        e === "ads_wait_time" && o("WaitTimeReliabilityLogger").log(t, n);
      }));
    function f(e) {
      if (
        c[e] == null &&
        ((c[e] = (u || (u = r("performanceAbsoluteNow")))()),
        o("AdsSpeedConfig").isDevToolsTimingEnabled())
      ) {
        if (m != null) {
          var t = _ + " " + m + "-" + e;
          o("UserTimingUtils").measureEnd(t, m);
        }
        ((m = e), o("UserTimingUtils").measureStart(m));
      }
    }
    function g(e) {
      return c[e];
    }
    function h() {
      p != null || s(0, 5115);
      var e = p;
      return ((p = null), e);
    }
    ((l.setMilestoneMarker = f),
      (l.getMilestoneMarker = g),
      (l.getInitialTimeSlice = h));
  },
  98,
);
