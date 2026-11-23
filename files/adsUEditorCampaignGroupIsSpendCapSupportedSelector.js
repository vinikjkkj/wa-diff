__d(
  "adsUEditorCampaignGroupIsSpendCapSupportedSelector",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAutomatedAdsUtils",
    "AdsEmptyValue",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorHostIDs",
    "AdsUEditorSelectors",
    "adsCampaignGroupBudgetCanUseSpendCapWithCampaignGroupBudget",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignGroupCanUseSpendCapSelector",
    "adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.spend_cap;
            },
          ),
          r("adsUEditorCampaignGroupCanUseSpendCapSelector"),
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.daily_budget;
            },
          ),
          r("adsUEditorHostIDSelector_ASK_AFEI_BEFORE_USING"),
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.somePlainObject(
            o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY,
          ),
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.somePlainObject(
            function (e) {
              return o("AdsAutomatedAdsUtils").isAutomatedAdsCampaignGroup(
                e.boosted_component_product,
              );
            },
          ),
        ],
        function (t, n, o, a, i, l, s) {
          var e = !(n instanceof r("AdsEmptyValue"));
          if (i === r("AdsUEditorHostIDs").CREATION) return e;
          var u = !(a instanceof r("AdsEmptyValue")),
            c = r(
              "adsCampaignGroupBudgetCanUseSpendCapWithCampaignGroupBudget",
            )(u, e);
          return !!(o && (!l || c) && !s);
        },
        { name: i.id + ".adsUEditorCampaignGroupIsSpendCapSupportedSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
