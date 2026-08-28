__d(
  "AdsLiveVideoConversionCampaignOptimizationPluginCommon",
  ["AdsAPIOptimizationGoals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getSupportedOptimizationGoals: function () {
          return [
            r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
            r("AdsAPIOptimizationGoals").LINK_CLICKS,
          ];
        },
        getDefaultOptimizationGoal: function (t) {
          return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
