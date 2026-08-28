__d(
  "AdsMgmtPreloadingUtils",
  [
    "AdsInterfacesLoggerUtils",
    "AdsMgmtStartupLogger",
    "Promise",
    "QuickPerformanceLogger",
    "cr:1612590",
    "gkx",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = !1,
      d = !1,
      m = !1,
      p = "visual_completion",
      _ = !1,
      f = !1,
      g = null,
      h,
      y = new (u || (u = n("Promise")))(function (e) {
        h = e;
      }),
      C,
      b = new u(function (e) {
        C = e;
      }),
      v,
      S = new u(function (e) {
        v = e;
      });
    function R() {
      return g;
    }
    function L() {
      return f;
    }
    function E() {
      return y;
    }
    function k() {
      return b;
    }
    function I() {
      return c && d && p === "visual_completion_and_page_load_done" && !m;
    }
    function T(e, t) {
      var n;
      ((c = e),
        (p =
          (n = t == null ? void 0 : t.eligibilityPolicy) != null
            ? n
            : "visual_completion"));
    }
    function D() {
      c && ((m = !0), v(), M());
    }
    function x() {
      return S;
    }
    function $() {
      if (((d = !0), c)) {
        var t = (e || (e = r("QuickPerformanceLogger"))).currentTimestamp();
        (o("AdsMgmtStartupLogger").addClientSideData(
          "resolvePreloadingDonePromise_onVisualCompletion",
          "start",
          t,
        ),
          h(),
          M());
      }
    }
    function P(t) {
      if (
        ((g = g != null ? g : (s || (s = r("performanceAbsoluteNow")))()),
        (_ = !0),
        n("cr:1612590") != null &&
          n("cr:1612590").setStopPreloadingTimestamp(g),
        t && (f = !0),
        M(),
        !c)
      ) {
        var a = (e || (e = r("QuickPerformanceLogger"))).currentTimestamp();
        (o("AdsMgmtStartupLogger").addClientSideData(
          "resolvePreloadingDonePromise_stopPreloading",
          "start",
          a,
        ),
          h());
      }
    }
    function N() {
      return d ? I() : !0;
    }
    function M() {
      var e = c ? N() : !_;
      e || C();
    }
    function w() {
      var e = c ? N() : !_ && r("gkx")("21611");
      return (
        (n("cr:1612590") != null &&
          n("cr:1612590").isScenarioOngoingTestVersion()) ||
        e
      );
    }
    var A = {
      isScenarioOngoing: w,
      log: o("AdsInterfacesLoggerUtils").logPreloading,
    };
    ((l.getStopPreloadingTime = R),
      (l.hasFinishedSuccessfully = L),
      (l.onPreloadingDone = E),
      (l.onPreloadingEligibilityDone = k),
      (l.isInPostVCPreloadingEligibilityWindow = I),
      (l.setScenarioDefinedByVC = T),
      (l.resolvePageLoadVisuallyComplete_FOR_EXPERIMENT_ONLY = D),
      (l.onPageLoadDone_FOR_EXPERIMENT_ONLY = x),
      (l.onVisualCompletion = $),
      (l.stopPreloading = P),
      (l.isScenarioOngoing = w),
      (l.defaultConfig = A));
  },
  98,
);
