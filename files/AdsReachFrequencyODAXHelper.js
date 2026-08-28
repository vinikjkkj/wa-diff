__d(
  "AdsReachFrequencyODAXHelper",
  ["AdsAPIObjectives", "AdsAPIOptimizationGoals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          switch (t) {
            case r("AdsAPIOptimizationGoals").IMPRESSIONS:
            case r("AdsAPIOptimizationGoals").REACH:
              return r("AdsAPIObjectives").REACH;
            case r("AdsAPIOptimizationGoals").AD_RECALL_LIFT:
              return r("AdsAPIObjectives").BRAND_AWARENESS;
            case r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS:
            case r("AdsAPIOptimizationGoals").THRUPLAY:
              return r("AdsAPIObjectives").VIDEO_VIEWS;
          }
          break;
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          switch (t) {
            case r("AdsAPIOptimizationGoals").POST_ENGAGEMENT:
              return r("AdsAPIObjectives").POST_ENGAGEMENT;
            case r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS:
            case r("AdsAPIOptimizationGoals").THRUPLAY:
              return r("AdsAPIObjectives").VIDEO_VIEWS;
          }
          break;
        case r("AdsAPIObjectives").LINK_CLICKS:
          if (t === r("AdsAPIOptimizationGoals").LINK_CLICKS || t == null)
            return r("AdsAPIObjectives").LINK_CLICKS;
      }
      return null;
    }
    l.convertODAXToLegacyObjective = e;
  },
  98,
);
