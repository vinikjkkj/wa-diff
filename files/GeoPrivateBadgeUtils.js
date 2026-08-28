__d(
  "GeoPrivateBadgeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 99;
    function l(t, n, r) {
      return (
        n === void 0 && (n = e),
        r != null ? (t > n ? "" + r + n : "" + r + t) : t > n ? n + "+" : t
      );
    }
    i.formatBadgeNumericValue = l;
  },
  66,
);
