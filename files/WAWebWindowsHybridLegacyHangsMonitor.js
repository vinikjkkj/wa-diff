__d(
  "WAWebWindowsHybridLegacyHangsMonitor",
  [
    "WAWebWindowsHybridBridgeDebugFeatures.v2630",
    "WAWebWindowsHybridBridgeDebugFeatures.v2631",
    "WAWebWindowsHybridBridgeDebugFeatures.v2632",
    "WAWebWindowsHybridBridgeDebugFeatures.v2633",
    "WAWebWindowsHybridBridgeDebugFeatures.v2634",
    "WAWebWindowsHybridBridgeDebugFeatures.v2635",
    "WAWebWindowsHybridBridgeDebugFeatures.v2636",
    "WAWebWindowsHybridBridgeDebugFeatures.v2637",
    "WAWebWindowsHybridBridgeDebugFeatures.v2638",
    "WAWebWindowsHybridBridgeDebugFeatures.v2639",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsHybridBridgeInitiator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t =
          (e = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(
            r("WAWebWindowsHybridBridgeInitiator")
              .WAWebWindowsHybridLegacyHangsMonitor,
          )) == null
            ? void 0
            : e.getDebugFeatures();
      (t instanceof
        o("WAWebWindowsHybridBridgeDebugFeatures.v2630")
          .WindowsHybridBridgeDebugFeatures_v2630 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2631")
            .WindowsHybridBridgeDebugFeatures_v2631 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2632")
            .WindowsHybridBridgeDebugFeatures_v2632 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2633")
            .WindowsHybridBridgeDebugFeatures_v2633 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2634")
            .WindowsHybridBridgeDebugFeatures_v2634 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2635")
            .WindowsHybridBridgeDebugFeatures_v2635 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2636")
            .WindowsHybridBridgeDebugFeatures_v2636 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2637")
            .WindowsHybridBridgeDebugFeatures_v2637 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2638")
            .WindowsHybridBridgeDebugFeatures_v2638 ||
        t instanceof
          o("WAWebWindowsHybridBridgeDebugFeatures.v2639")
            .WindowsHybridBridgeDebugFeatures_v2639) &&
        t.startHangsMonitor();
    }
    l.startLegacyNativeWebHangsMonitor = e;
  },
  98,
);
