__d(
  "MWChatStateV2CompareTabs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.openWatermark - t.openWatermark;
      return n < 0 ? 1 : n > 0 ? -1 : 0;
    }
    function l(e, t) {
      var n =
        Math.max(e.minimizeWatermark, e.clientForcedMinimizeWatermark) -
        Math.max(t.minimizeWatermark, t.clientForcedMinimizeWatermark);
      return n < 0 ? 1 : n > 0 ? -1 : 0;
    }
    ((i.byMostRecentOpened = e), (i.byMostRecentMinimized = l));
  },
  66,
);
