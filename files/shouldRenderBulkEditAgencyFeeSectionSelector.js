__d(
  "shouldRenderBulkEditAgencyFeeSectionSelector",
  [
    "AdsAgencyFeeUtils",
    "adsBulkEditDialogMenuFalseSelector",
    "adsNotImplementedSelector",
    "adsUEditorCampaignShouldRenderBulkAgencyFeeCampaignSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e.ad = r("adsBulkEditDialogMenuFalseSelector")),
        (e.ad_set = r("adsBulkEditDialogMenuFalseSelector")),
        (e.campaign = o("AdsAgencyFeeUtils").agencyFeeBulkEditKillSwitch()
          ? r("adsBulkEditDialogMenuFalseSelector")
          : r(
              "adsUEditorCampaignShouldRenderBulkAgencyFeeCampaignSectionSelector",
            )),
        (e.privacy_info_center = r("adsNotImplementedSelector")),
        (e.opportunities = r("adsNotImplementedSelector")),
        (e.topline = r("adsNotImplementedSelector")),
        (e.ad_account = r("adsNotImplementedSelector")),
        (e.unique_adcreative = r("adsNotImplementedSelector")),
        (e.product = r("adsNotImplementedSelector")),
        e),
      u = s;
    l.default = u;
  },
  98,
);
