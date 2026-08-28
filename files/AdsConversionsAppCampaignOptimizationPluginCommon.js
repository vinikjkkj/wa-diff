__d(
  "AdsConversionsAppCampaignOptimizationPluginCommon",
  ["AdsAPIOptimizationGoals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getSupportedOptimizationGoals: function () {
          return [
            r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
            r("AdsAPIOptimizationGoals").LINK_CLICKS,
            r("AdsAPIOptimizationGoals").REACH,
          ];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
