__d(
  "IGFAFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIOptimizationGoals",
    "SuggestedPostsExperimentEligibilityResult",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new (r("SuggestedPostsExperimentEligibilityResult"))("IGFA", !1),
        o =
          t === r("AdsAPIOptimizationGoals").VISIT_INSTAGRAM_PROFILE ||
          (t === r("AdsAPIOptimizationGoals").PROFILE_VISIT &&
            e !== r("AdCampaignDestination").FACEBOOK_PAGE),
        a = t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
      return ((o || a) && (n.isEligible = r("gkx")("7663")), n);
    }
    function s() {
      return r("gkx")("2870");
    }
    function u(e) {
      return e ? r("qex")._("4274") === !0 : r("qex")._("4275") === !0;
    }
    ((l.isEligibleForIgfaSuggestedPosts = e),
      (l.passesIgXmaDogfoodingGK = s),
      (l.isIGProfileVisitDefaultingEnabled = u));
  },
  98,
);
