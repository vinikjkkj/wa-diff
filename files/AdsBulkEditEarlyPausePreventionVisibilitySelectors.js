__d(
  "AdsBulkEditEarlyPausePreventionVisibilitySelectors",
  [
    "AdsBulkEditEarlyPausePreventionPluginFetcher",
    "AdsEditingCampaignContext",
    "AdsEditingCampaignGroupContext",
    "AdsObjectTypes",
    "firstx",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = r("AdsBulkEditEarlyPausePreventionPluginFetcher")(t);
      if ((e || (e = r("isEmpty")))(n))
        return {
          earlyPausePreventionData: {
            adObjectID: null,
            attribution_spec: null,
            budgetType: "daily",
            campaignName: null,
            currentBudget: null,
            destinationType: null,
            durationCheckForEarlyPause: !1,
            isCBO: !1,
            isInLearningPhase: !1,
            isLearningLimited: !1,
            optimizationGoal: null,
            results: null,
          },
          bulk: !1,
          plugins: [],
        };
      var o = r("firstx")(n),
        a = o.visibilitySelector;
      if (a == null)
        return {
          earlyPausePreventionData: {
            adObjectID: null,
            attribution_spec: null,
            budgetType: "daily",
            campaignName: null,
            currentBudget: null,
            destinationType: null,
            durationCheckForEarlyPause: !1,
            isCBO: !1,
            isInLearningPhase: !1,
            isLearningLimited: !1,
            optimizationGoal: null,
            results: null,
          },
          bulk: !1,
          plugins: [],
        };
      var i;
      if (t === r("AdsObjectTypes").CAMPAIGN)
        i = r("AdsEditingCampaignContext");
      else if (t === r("AdsObjectTypes").CAMPAIGN_GROUP)
        i = r("AdsEditingCampaignGroupContext");
      else
        return {
          earlyPausePreventionData: {
            adObjectID: null,
            attribution_spec: null,
            budgetType: "daily",
            campaignName: null,
            currentBudget: null,
            destinationType: null,
            durationCheckForEarlyPause: !1,
            isCBO: !1,
            isInLearningPhase: !1,
            isLearningLimited: !1,
            optimizationGoal: null,
            results: null,
          },
          bulk: !1,
          plugins: [],
        };
      var l = a(i),
        s = l.bulk,
        u = l.earlyPausePreventionData;
      return { bulk: s, earlyPausePreventionData: u, plugins: n };
    }
    l.default = s;
  },
  98,
);
