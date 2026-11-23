__d(
  "adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignGroupVisibilitySelector",
  [
    "AdsManagerAutoLoggingAppConfig",
    "AdsMgmtCTXCampaignPausePreventionEligibleStoreUtils",
    "AdsMgmtFrictionPopupHelper",
    "AdsRecommendationsExperimentUtils",
    "adsCreateSelector",
    "adsMgmtCampaignGroupCTXPausePreventionEligibleSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        ctxPausePreventionData: o(
          "AdsMgmtCTXCampaignPausePreventionEligibleStoreUtils",
        ).DEFAULT_CTX_PAUSE_PREVENTION_DATA,
        bulk: !1,
      },
      s = r("adsCreateSelector")(
        [
          o("adsMgmtCampaignGroupSelectedIdsSelector")
            .adsMgmtCampaignGroupSelectedIdsSelector,
          r("adsMgmtCampaignGroupCTXPausePreventionEligibleSelector"),
        ],
        function (n, a) {
          var t = r("isTruthy")(a.isEligible),
            i = r("isTruthy")(
              o(
                "AdsMgmtFrictionPopupHelper",
              ).shouldShowCTXEarlyPausePreventionModalOnPause(),
            );
          if (t && i) {
            var l = o(
              "AdsRecommendationsExperimentUtils",
            ).shouldShowCTXEarlyPausePreventionFriction(
              r("AdsManagerAutoLoggingAppConfig").ad_account_id,
            );
            if (l) return { ctxPausePreventionData: a, bulk: n.length > 1 };
          }
          return e;
        },
        {
          name:
            i.id +
            ".adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignGroupVisibilitySelector",
        },
      );
    l.adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignGroupVisibilitySelector =
      s;
  },
  98,
);
