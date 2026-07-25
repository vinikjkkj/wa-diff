__d(
  "WAWebVoipSpeakerModeStripPagination",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.isPeerScreenShareDominant,
        n = e.isSelfStripInjected,
        r = e.stripVisibleCount,
        o = n || t;
      return Math.max(o ? r - 1 : r, 0);
    }
    i.getSpeakerModeStripPageOneCapacity = e;
  },
  66,
);
