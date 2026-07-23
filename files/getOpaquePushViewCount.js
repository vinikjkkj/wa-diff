__d(
  "getOpaquePushViewCount",
  ["isRouteTransparent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.filter(function (e) {
        var t;
        return (
          !r("isRouteTransparent")(e.route) &&
          !((t = e.mutableState) != null && t.isPurged != null && t.isPurged())
        );
      }).length;
    }
    l.default = e;
  },
  98,
);
