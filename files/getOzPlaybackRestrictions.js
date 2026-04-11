__d(
  "getOzPlaybackRestrictions",
  ["OzMinimumSmallestDimensionRestriction", "OzMosThresholdRestriction", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [];
      switch (e) {
        case "HD":
          n.push(new (r("OzMinimumSmallestDimensionRestriction"))(720));
          break;
        case "UHD":
          r("gkx")("24263") &&
            n.push(new (r("OzMinimumSmallestDimensionRestriction"))(1080));
          break;
        default:
          break;
      }
      var o = t.getNumber("mos_upper_threshold", 0),
        a = t.getNumber("mos_lower_threshold", 0);
      return (
        (o > 0 || a > 0) && n.push(new (r("OzMosThresholdRestriction"))(t)),
        n
      );
    }
    l.default = e;
  },
  98,
);
