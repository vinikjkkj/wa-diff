__d(
  "MWChatStateV2IsMinimized",
  ["MWChatStateV2IsClosed", "MWChatStateV2IsOpen"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e != null
        ? o("MWChatStateV2IsOpen").isOpen(e, t)
          ? !1
          : !o("MWChatStateV2IsClosed").isClosed(t)
        : Math.max(t.minimizeWatermark, t.clientForcedMinimizeWatermark) >
            Math.max(t.openWatermark, t.closeWatermark);
    }
    l.isMinimized = e;
  },
  98,
);
