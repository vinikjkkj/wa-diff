__d(
  "AdsPartialAutomaticPlacementUtils",
  ["AdsPlacementConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [];
    function s(t) {
      var n = t.publisher_platforms;
      return n == null
        ? e
        : n.filter(function (e) {
            var n = o(
              "AdsPlacementConstants",
            ).PLACEMENT_PLATFORM_TO_POSITION_FIELDS.get(e);
            if (n == null) return !0;
            var r = t[n];
            return r == null || r.length === 0;
          });
    }
    l.getPartialAutomaticPlatformsFromPlacementSpec = s;
  },
  98,
);
