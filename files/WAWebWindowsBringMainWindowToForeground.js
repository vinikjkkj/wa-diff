__d(
  "WAWebWindowsBringMainWindowToForeground",
  ["WAWebWindowsHybridBridgeCommon"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = o("WAWebWindowsHybridBridgeCommon").WAWebWindowsGetBridge();
      t != null &&
        ((e = t.nativeAppStateBridge) == null ||
          e.bringMainWindowToForeground());
    }
    l.bringMainWindowToForeground = e;
  },
  98,
);
