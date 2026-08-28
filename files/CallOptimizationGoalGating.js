__d(
  "CallOptimizationGoalGating",
  ["AdCampaignDestination", "AdsAPIObjectives", "CallPromptFeatureGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([r("AdCampaignDestination").MESSENGER]);
    function s(t, n, r, a, i, l) {
      l === void 0 && (l = {});
      var s = l,
        u = s.canSkipPlacementCheck,
        c = u === void 0 ? !1 : u,
        d = o("CallPromptFeatureGating").eligibleForCallPromptForCTXAdsAM(
          n,
          r,
          a,
          i,
          { canSkipPlacementCheck: c },
        );
      return i != null && d && r != null && e.has(r);
    }
    function u(e, t, n, o, a) {
      if (e == null || t == null || n === r("AdsAPIObjectives").LINK_CLICKS)
        return !1;
      var i = s(e, n, o, a, t, { canSkipPlacementCheck: !0 }),
        l =
          (t == null
            ? void 0
            : t.is_eligible_for_call_optimization_defaulting) === !0;
      return i && l;
    }
    l.shouldDefaultForCallOptimization = u;
  },
  98,
);
