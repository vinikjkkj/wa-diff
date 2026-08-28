__d(
  "AdFLEXRouteConfig",
  [
    "AdFLEXRouteAdsManagerConfigPlugin",
    "AdFLEXRouteMessageMarketingConfigPlugin",
    "createAdFLEXConfigGet",
    "getToolForRouteOrCurrentWindowURI",
    "memoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeWithArgs")(
        function (e) {
          switch (e) {
            case "MANAGE_ADS":
              return n("AdFLEXRouteAdsManagerConfigPlugin");
            case "MANAGE_MESSAGES":
              return n("AdFLEXRouteMessageMarketingConfigPlugin");
            default:
              return null;
          }
        },
        function (e) {
          return e;
        },
      ),
      s = o("createAdFLEXConfigGet").createAdFLEXConfigGet(e);
    function u(t, n) {
      var o = r("getToolForRouteOrCurrentWindowURI")(t, n),
        a = s(),
        i = o != null ? e(o) : null;
      return (a == null ? void 0 : a.key) !== (i == null ? void 0 : i.key);
    }
    var c = { get: s, getForTool: e, shouldUpdateForRoute: u };
    l.default = c;
  },
  98,
);
