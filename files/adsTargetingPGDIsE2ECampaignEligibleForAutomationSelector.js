__d(
  "adsTargetingPGDIsE2ECampaignEligibleForAutomationSelector",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsPECampaignSelectors",
    "AdsUEditorCampaignGroupSelectors",
    "adsCreateSelector",
    "adsTargetingPGDIsEligibleForUnifiedAppSalesAudience",
    "adsUEditorCampaignIDsForSelectedCampaignGroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.every(
            function (e) {
              return r("adsTargetingPGDIsEligibleForUnifiedAppSalesAudience")(
                e,
              );
            },
          ),
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.every(
            function (e) {
              return (
                o("AdsAPICampaignGroupRecordUtils").isAutomatedShoppingAds(e) ||
                o("AdsAPICampaignGroupRecordUtils").isSmartAppPromotion(e)
              );
            },
          ),
          o("AdsPECampaignSelectors").getAllByFieldsSelector,
          r("adsUEditorCampaignIDsForSelectedCampaignGroupsSelector"),
        ],
        function (t, n, r, o) {
          var e,
            a = o.getValue();
          if (a == null || a.length !== 1) return !1;
          var i =
            (e = r([a[0]], { targeting: null }).get(a[0])) == null ||
            (e = e.getValue()) == null ||
            (e = e.targeting) == null
              ? void 0
              : e.targeting_automation;
          return t && n && i == null;
        },
        { name: i.id },
      ),
      s = e;
    function u(e, t, n, r) {
      return e && t && n === 1 && !r;
    }
    ((l.adsTargetingPGDIsE2ECampaignEligibleForAutomationSelector = s),
      (l.isE2ECampaignEligibleForAutomation = u));
  },
  98,
);
