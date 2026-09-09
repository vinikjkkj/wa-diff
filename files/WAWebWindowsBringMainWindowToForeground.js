__d(
  "WAWebWindowsBringMainWindowToForeground",
  [
    "WAWebWindowsHybridBridge.v2587",
    "WAWebWindowsHybridBridge.v2605",
    "WAWebWindowsHybridBridge.v2606",
    "WAWebWindowsHybridBridge.v2607",
    "WAWebWindowsHybridBridge.v2611",
    "WAWebWindowsHybridBridge.v2613",
    "WAWebWindowsHybridBridge.v2614",
    "WAWebWindowsHybridBridge.v2615",
    "WAWebWindowsHybridBridge.v2616",
    "WAWebWindowsHybridBridge.v2620",
    "WAWebWindowsHybridBridgeCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge();
      t == null ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2587").WindowsHybridBridge_v2587 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2605").WindowsHybridBridge_v2605 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2606").WindowsHybridBridge_v2606 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2607").WindowsHybridBridge_v2607 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2611").WindowsHybridBridge_v2611 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2613").WindowsHybridBridge_v2613 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2614").WindowsHybridBridge_v2614 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2615").WindowsHybridBridge_v2615 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2616").WindowsHybridBridge_v2616 ||
        t instanceof
          o("WAWebWindowsHybridBridge.v2620").WindowsHybridBridge_v2620 ||
        (e = t.nativeAppStateBridge) == null ||
        e.bringMainWindowToForeground();
    }
    l.bringMainWindowToForeground = e;
  },
  98,
);
