__d(
  "AdsPEPreloadingRouteGuard",
  ["AdsMgmtPreloadingUtils", "AdsPERouteName", "AdsPERouterHelper", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "campaignGroup"
        ? r("AdsPERouteName").CAMPAIGNS
        : e === "campaign"
          ? r("AdsPERouteName").ADSETS
          : e === "adgroup"
            ? r("AdsPERouteName").ADS
            : null;
    }
    function s(e) {
      var t = r("gkx")("25152");
      return t
        ? babelHelpers.extends({}, o("AdsMgmtPreloadingUtils").defaultConfig, {
            isScenarioOngoing: function () {
              var t;
              return (
                o("AdsMgmtPreloadingUtils").defaultConfig.isScenarioOngoing() &&
                e != null &&
                ((t = r("AdsPERouterHelper").getRouter()) == null
                  ? void 0
                  : t.hasActiveRoute(e)) === !0
              );
            },
          })
        : o("AdsMgmtPreloadingUtils").defaultConfig;
    }
    ((l.getAdsManagerRouteForAdLevel = e),
      (l.getPreloadingConfigForActiveRoute = s));
  },
  98,
);
