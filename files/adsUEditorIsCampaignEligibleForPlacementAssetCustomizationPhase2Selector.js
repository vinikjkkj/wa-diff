__d(
  "adsUEditorIsCampaignEligibleForPlacementAssetCustomizationPhase2Selector",
  [
    "AdsPlacementAssetEligibilityUtils",
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignsSelector",
    "firstx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignsSelector"),
          o("AdsUEditorCampaignSelectors").eligibilityInformationSelector,
        ],
        function (t, n) {
          return o(
            "AdsPlacementAssetEligibilityUtils",
          ).isCampaignEligibleForPlacementAssetCustomizationPhase2(
            r("firstx")(t),
            n,
          );
        },
        {
          name:
            i.id +
            ".adsUEditorIsCampaignEligibleForPlacementAssetCustomizationPhase2Selector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
