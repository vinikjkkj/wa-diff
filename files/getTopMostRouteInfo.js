__d(
  "getTopMostRouteInfo",
  ["pushViewToRouteInfo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.hosted,
        n = e.main,
        o = e.pushViewStack;
      return o && o.length > 0
        ? r("pushViewToRouteInfo")(o[o.length - 1])
        : t || n;
    }
    l.default = e;
  },
  98,
);
