__d(
  "AdsCampaignSectionUtils",
  ["AdsCFConstants", "AdsQuickCreateStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.blockCreateNewCampaignWhenUseExistingCampaignGroup,
        n = e.campaignGroupSectionMode,
        r = e.isCreateNewCampaignSectionModeDisabled,
        a = e.mode;
      return (
        ((r === !0 || t) &&
          a ===
            o("AdsCFConstants").QuickCreateSectionMode.CREATE_NEW_CAMPAIGN) ||
        (n ===
          o("AdsCFConstants").QuickCreateSectionMode
            .CREATE_NEW_CAMPAIGN_GROUP &&
          a ===
            o("AdsCFConstants").QuickCreateSectionMode
              .USING_EXISTING_CAMPAIGN) ||
        (n ===
          o("AdsCFConstants").QuickCreateSectionMode
            .USING_EXISTING_CAMPAIGN_GROUP &&
          a === o("AdsCFConstants").QuickCreateSectionMode.SKIP_CAMPAIGN)
      );
    }
    function s(e) {
      var t = [
        {
          mode: o("AdsCFConstants").QuickCreateSectionMode.CREATE_NEW_CAMPAIGN,
          label: o("AdsQuickCreateStrings").AdsQuickCreateStrings
            .CAMPAIGN_SECTION_CREATE_NEW_CAMPAIGN,
        },
        {
          mode: o("AdsCFConstants").QuickCreateSectionMode
            .USING_EXISTING_CAMPAIGN,
          label: o("AdsQuickCreateStrings").AdsQuickCreateStrings
            .CAMPAIGN_SECTION_USING_EXISTING_CAMPAIGN,
        },
      ];
      return (
        e !== !0 &&
          t.push({
            mode: o("AdsCFConstants").QuickCreateSectionMode.SKIP_CAMPAIGN,
            label: o("AdsQuickCreateStrings").AdsQuickCreateStrings
              .CAMPAIGN_SECTION_SKIP_CAMPAIGN,
          }),
        t
      );
    }
    ((l.isCampaignSectionModeDisabled = e), (l.getCampaignSectionModes = s));
  },
  98,
);
