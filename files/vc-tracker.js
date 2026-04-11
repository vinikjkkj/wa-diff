__d(
  "vc-tracker",
  [
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionAttributes",
    "VisualCompletionConstants",
    "VisualCompletionTraceObserver",
    "VisualCompletionTracing",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "currentVCTraces",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        VisibilityState: {
          canUseVisibilityAPI: o("VisibilityAPI").canUseVisibilityAPI,
          getHiddenSpans: o("VisibilityState").getHiddenSpans,
          subscribe: o("VisibilityState").subscribe,
          wasHidden: o("VisibilityState").wasHidden,
        },
        VisualCompletionAttributes: r("VisualCompletionAttributes"),
        VisualCompletionConstants: e || (e = r("VisualCompletionConstants")),
        VisualCompletionTraceObserver: r("VisualCompletionTraceObserver"),
        VisualCompletionTracing: r("VisualCompletionTracing"),
        derefOnlyAttachedElement: o("WebAPIs").derefOnlyAttachedElement,
        findVCTraces: o("VisualCompletionUtilCommon").findVCTraces,
        forEachNavigationVCTrace: o("currentVCTraces").forEachNavigationVCTrace,
        getCurrentNavigationVCTrace:
          o("currentVCTraces").getCurrentNavigationVCTrace,
        getCurrentVCTraces: o("currentVCTraces").getCurrentVCTraces,
        getLastNavigationVCReport:
          o("currentVCTraces").getLastNavigationVCReport,
        ignoreElement: o("VisualCompletionUtilCommon").ignoreElement,
        isAttachedElement: o("WebAPIs").isAttachedElement,
        setCurrentNavigationVCTrace:
          o("currentVCTraces").setCurrentNavigationVCTrace,
        setLastNavigationVCReport:
          o("currentVCTraces").setLastNavigationVCReport,
        trackImageLoad: o("VisualCompletionUtil").trackImageLoad,
        trackLoadingState: o("VisualCompletionUtilCommon").trackLoadingState,
        trimHash: o("VisualCompletionUtilCommon").trimHash,
      };
    l.default = s;
  },
  98,
);
