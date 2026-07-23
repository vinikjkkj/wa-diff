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
    "FBLogger",
    "HostnameRewriter",
    "WebPerformanceDeviceInfo",
    "cr:1033",
    "cr:11192",
    "cr:1132918",
    "cr:20588",
    "cr:2654",
    "cr:9830",
    "initCometTimeSpentLogger",
    "requireDeferred",
    "shouldUseNonReactTSListeners",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("CometBrowserDimensionsLogger").__setRef(
        "initCometPlatformWebPage",
      ),
      s = r("requireDeferred")("CometChromeDome").__setRef(
        "initCometPlatformWebPage",
      );
    function u(t, a, i) {
      var l,
        u = a.disableTimeSpentLogging,
        c = a.productAttribution,
        d = a.timeSpentMetadata,
        m = a.timeSpentRoute;
      if (
        (o("CometErrorSystem").init(t),
        !((l = i == null ? void 0 : i.disableDevTools) != null && l))
      ) {
        var p;
        n("cr:2654") &&
          n("cr:2654").init({
            connectFromIFrame:
              (p = i == null ? void 0 : i.connectFromIFrame) != null ? p : !1,
          });
      }
      (n("cr:20588") == null || n("cr:20588").init(),
        n("cr:9830") && n("cr:9830")(),
        r("CometJSUsage") == null ||
          r("CometJSUsage").setupCometJSUsageLogging(),
        s.onReady(function (e) {
          return e.init();
        }),
        o("WebPerformanceDeviceInfo").initWebDevicePerfLoggingPassive(),
        e.onReady(function (e) {
          return e.init();
        }),
        r("CometClientConsistency").init(),
        o("CometPixelRatioDetector").initDetecting(),
        u !== !0 &&
          (o("CometVisitationManager").init(m.tracePolicy),
          o("CometTimeSpentNavigationLogger").init(m, d, c),
          o("CometTimeSpentBitArrayLogger").init(m.tracePolicy),
          r("shouldUseNonReactTSListeners") && r("initCometTimeSpentLogger")()),
        n("cr:1132918") && n("cr:1132918").handleServerErrors(),
        n("cr:1033").onReady(function (e) {
          return e.attach();
        }),
        n("cr:11192") && n("cr:11192").init(),
        o("HostnameRewriter").maybeRegisterFilters(),
        window.addEventListener("DOMContentLoaded", function () {
          document.getElementById("has-finished-comet-page") == null &&
            r("FBLogger")("comet_infra").warn(
              "Comet page did not finish loading correctly.",
            );
        }));
    }
    l.default = u;
  },
  98,
);
