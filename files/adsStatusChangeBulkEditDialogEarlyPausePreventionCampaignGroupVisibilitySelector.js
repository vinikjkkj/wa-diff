__d(
  "adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupVisibilitySelector",
  [
    "AdsMgmtFrictionPopupHelper",
    "adsCreateSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtEarlyPausePreventionCampaignGroupSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsMgmtCampaignGroupSelectedIdsSelector")
          .adsMgmtCampaignGroupSelectedIdsSelector,
        r("adsMgmtEarlyPausePreventionCampaignGroupSelector"),
      ],
      function (t, n) {
        var e = t != null ? t[0] : "";
        return o(
          "AdsMgmtFrictionPopupHelper",
        ).baseCheckForEarlyPausePreventionModalEligibilityCriteria(e, !1, n)
          ? { earlyPausePreventionData: n, bulk: t.length > 1 }
          : {
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
            };
      },
      {
        name:
          i.id +
          ".adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupVisibilitySelector",
      },
    );
    l.adsStatusChangeBulkEditDialogEarlyPausePreventionCampaignGroupVisibilitySelector =
      e;
  },
  98,
);
