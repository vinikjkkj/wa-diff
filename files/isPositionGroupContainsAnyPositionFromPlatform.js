__d(
  "isPositionGroupContainsAnyPositionFromPlatform",
  ["AdsPlacementPositionGroupPlugins"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("AdsPlacementPositionGroupPlugins").get(t);
      return n == null
        ? !1
        : n.positions.some(function (t) {
            return t.platformKey === e;
          });
    }
    l.isPositionGroupContainsAnyPositionFromPlatform = e;
  },
  98,
);
