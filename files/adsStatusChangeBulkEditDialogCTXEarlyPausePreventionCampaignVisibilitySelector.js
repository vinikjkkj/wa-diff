__d(
  "adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignVisibilitySelector",
  [
    "AdsManagerAutoLoggingAppConfig",
    "AdsMgmtCTXCampaignPausePreventionEligibleStoreUtils",
    "AdsMgmtFrictionPopupHelper",
    "AdsRecommendationsExperimentUtils",
    "adsCreateSelector",
    "adsMgmtCampaignCTXPausePreventionEligibleSelector",
    "adsMgmtCampaignSelectedIdsSelector",
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
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
          r("adsMgmtCampaignCTXPausePreventionEligibleSelector"),
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
            ".adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignVisibilitySelector",
        },
      );
    l.adsStatusChangeBulkEditDialogCTXEarlyPausePreventionCampaignVisibilitySelector =
      s;
  },
  98,
);
