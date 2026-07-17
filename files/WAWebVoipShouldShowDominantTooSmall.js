__d(
  "WAWebVoipShouldShowDominantTooSmall",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 40,
      l = 5;
    function s(t, n, r, o, a, i) {
      if (t !== "speaker" || !n || !r || o <= 0) return !1;
      var s = a + e;
      return i ? o < s + l : o < s;
    }
    ((i.DOMINANT_TOO_SMALL_BUFFER_PX = e),
      (i.DOMINANT_TOO_SMALL_HYSTERESIS_PX = l),
      (i.shouldShowDominantTooSmall = s));
  },
  66,
);
