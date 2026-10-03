__d(
  "initCometPlatformWebPage",
  [
    "CometClientConsistency",
    "CometErrorSystem",
    "CometJSUsage",
    "CometPixelRatioDetector",
    "CometTimeSpentBitArrayLogger",
    "CometTimeSpentNavigationLogger",
    "CometVisitationManager",
    "ExecutionEnvironment",
    "FBLogger",
    "HostnameRewriter",
    "WebPerformanceDeviceInfo",
    "cr:1033",
    "cr:11192",
    "cr:1132918",
    "cr:20588",
    "cr:2654",
    "cr:6036",
    "cr:9830",
    "initCometTimeSpentLogger",
    "requireDeferred",
    "shouldUseNonReactTSListeners",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("CometBrowserDimensionsLogger").__setRef(
        "initCometPlatformWebPage",
      ),
      u = r("requireDeferred")("CometChromeDome").__setRef(
        "initCometPlatformWebPage",
      );
    function c(t, a, i) {
      var l,
        c = a.disableTimeSpentLogging,
        d = a.disableWebDevicePerfLogging,
        m = a.productAttribution,
        p = a.timeSpentMetadata,
        _ = a.timeSpentRoute,
        f = a.traceAPI;
      if (
        (o("CometErrorSystem").init(t),
        !((l = i == null ? void 0 : i.disableDevTools) != null && l))
      ) {
        var g;
        n("cr:2654") &&
          n("cr:2654").init({
            connectFromIFrame:
              (g = i == null ? void 0 : i.connectFromIFrame) != null ? g : !1,
          });
      }
      (n("cr:20588") == null || n("cr:20588").init(),
        n("cr:9830") && n("cr:9830")(),
        r("CometJSUsage") == null ||
          r("CometJSUsage").setupCometJSUsageLogging(),
        u.onReady(function (e) {
          return e.init();
        }),
        d !== !0 &&
          o("WebPerformanceDeviceInfo").initWebDevicePerfLoggingPassive(),
        s.onReady(function (e) {
          return e.init();
        }),
        r("CometClientConsistency").init(),
        o("CometPixelRatioDetector").initDetecting(),
        c !== !0 &&
          (n("cr:6036") == null ||
            n("cr:6036").registerTimeSpentStartupTrace(
              f,
              r("shouldUseNonReactTSListeners"),
            ),
          o("CometVisitationManager").init(_.tracePolicy),
          o("CometTimeSpentNavigationLogger").init(_, p, m),
          o("CometTimeSpentBitArrayLogger").init(_.tracePolicy),
          r("shouldUseNonReactTSListeners") && r("initCometTimeSpentLogger")()),
        n("cr:1132918") && n("cr:1132918").handleServerErrors(),
        n("cr:1033").onReady(function (e) {
          return e.attach();
        }),
        n("cr:11192") && n("cr:11192").init(),
        o("HostnameRewriter").maybeRegisterFilters(),
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          window.addEventListener("DOMContentLoaded", function () {
            document.getElementById("has-finished-comet-page") == null &&
              r("FBLogger")("comet_infra").warn(
                "Comet page did not finish loading correctly.",
              );
          }));
    }
    l.default = c;
  },
  98,
);
