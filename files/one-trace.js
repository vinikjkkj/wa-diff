__d(
  "one-trace",
  [
    "ImagePerfLoggerV2",
    "OneTraceCore",
    "OneTraceSetup",
    "ScrollPerfTracker",
    "TypingPerfTracker",
    "addAnnotations",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("OneTraceCore"), {
      addAnnotations: r("addAnnotations"),
      customScrollTracker: o("ScrollPerfTracker").customScrollTracker,
      setup: o("OneTraceSetup").setup,
      logImagePerfV2: o("ImagePerfLoggerV2").logImagePerfV2,
      trackTypingPerf: o("TypingPerfTracker").trackTypingPerf,
      unregisterTypingPerf: o("TypingPerfTracker").unregisterTypingPerf,
      SCROLL_PERF_ATTRIBUTE_NAME:
        o("ScrollPerfTracker").SCROLL_PERF_ATTRIBUTE_NAME,
    });
    l.default = e;
  },
  98,
);
