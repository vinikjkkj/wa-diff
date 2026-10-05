__d(
  "WAWebVoipShouldShowDominantTooSmall",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 40,
      l = 5;
    function s(t) {
      var n = t.dominantHeight,
        r = t.hasStrip,
        o = t.isInPopout,
        a = t.layoutMode,
        i = t.previouslyTooSmall,
        s = t.stripTilePx;
      if (a !== "speaker" || !o || !r || n <= 0) return !1;
      var u = s + e;
      return i ? n < u + l : n < u;
    }
    ((i.DOMINANT_TOO_SMALL_BUFFER_PX = e),
      (i.DOMINANT_TOO_SMALL_HYSTERESIS_PX = l),
      (i.shouldShowDominantTooSmall = s));
  },
  66,
);
