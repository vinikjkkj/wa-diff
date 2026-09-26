__d(
  "AdsExtremeGapUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3;
    function s(e, t) {
      return !1;
    }
    function u(e) {
      for (var t = e.length - 1; t >= 0; t--)
        if (e[t].minGapType === 5) return t;
      return -1;
    }
    ((l.EXTREME_GAP_DISTANCE = e),
      (l.shouldApplyExtremeGapProtection = s),
      (l.getLastSponsoredStoryPosition = u));
  },
  98,
);
