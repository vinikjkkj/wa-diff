__d(
  "MWChatStateV2IsClosed",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        e.closeWatermark >
        Math.max(
          e.openWatermark,
          e.minimizeWatermark,
          e.clientForcedMinimizeWatermark,
        )
      );
    }
    i.isClosed = e;
  },
  66,
);
