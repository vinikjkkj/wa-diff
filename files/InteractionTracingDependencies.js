__d(
  "InteractionTracingDependencies",
  [
    "HeroBootloadPerfStore",
    "QuickPerformanceLogger",
    "WebLoom",
    "cr:12179",
    "vc-tracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        HeroBootloadPerfStore: {
          addStaticResourcesStats: o("HeroBootloadPerfStore")
            .addStaticResourcesStats,
        },
        QuickPerformanceLogger: e || (e = r("QuickPerformanceLogger")),
        UserTimingUtils: n("cr:12179"),
        VCTracker: r("vc-tracker"),
        WebLoom: r("WebLoom"),
      };
    l.default = s;
  },
  98,
);
