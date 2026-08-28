__d(
  "adsMgmtIsLeftNavigationAvailableSelector",
  [
    "AdsInterfaceRoutingUtils",
    "AdsPERouteHelper",
    "adsCreateSelector",
    "adsPENavStateSelector",
    "intersectArrays",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [r("adsPENavStateSelector")],
        function (n) {
          var t,
            a = n.tool,
            i =
              (t = r("AdsPERouteHelper").getRouteFromTool(a)) != null ? t : [],
            l = i[0],
            s = i[1];
          return !(e || (e = r("isEmpty")))(
            r("intersectArrays")(
              s,
              o("AdsInterfaceRoutingUtils").ROUTES_WITH_LEFT_NAV,
            ),
          );
        },
        { name: i.id + ".adsMgmtIsLeftNavigationAvailableSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
