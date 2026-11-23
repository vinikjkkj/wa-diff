__d(
  "adsTargetingPGDHasIndividualSettingOrIsEligibleForUnifiedAppSalesSelector",
  [
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "adsTargetingPGDIsAnyEligibleForUnifiedAppSalesAudienceSelector",
    "adsTargetingPGDIsIndividualSettingCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignSelectors").campaigns.some(
            r("adsTargetingPGDIsIndividualSettingCampaign"),
          ),
          r("adsTargetingPGDIsAnyEligibleForUnifiedAppSalesAudienceSelector"),
        ],
        function (t, n) {
          return t || n;
        },
        {
          name:
            i.id +
            ".adsTargetingPGDHasIndividualSettingOrIsEligibleForUnifiedAppSalesSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
