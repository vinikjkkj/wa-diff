__d(
  "getAdFLEXConfigCurrentRouteClass",
  ["AdsInterfacesRouter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsInterfacesRouter").getOrNull();
      return e != null ? e.getLeafRoute().constructor : null;
    }
    l.default = e;
  },
  98,
);
