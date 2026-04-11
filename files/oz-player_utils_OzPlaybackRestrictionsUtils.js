__d(
  "oz-player/utils/OzPlaybackRestrictionsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (n.length === 0) return [];
      var r = e.reduce(function (e, n) {
        return n.applyRestriction(e, t);
      }, n);
      return r;
    }
    i.applyVideoPlaybackRestrictions = e;
  },
  66,
);
