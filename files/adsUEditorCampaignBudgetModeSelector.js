__d(
  "adsUEditorCampaignBudgetModeSelector",
  [
    "AdsDeliveryUIConstants",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorSelectors",
    "adsCampaignIsCampaignGroupBudget_LEGACY",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
        return e.daily_budget;
      }),
      s = o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
        return e.lifetime_budget;
      }),
      u = r("adsCreateSelector")(
        [e, s],
        function (t, n) {
          return c(t, n);
        },
        { name: i.id + ".budgetModeOrMixedSelector" },
      );
    function c(e, t) {
      var n = e.getValues(),
        r = t.getValues();
      if (!n.length && !r.length)
        return o("AdsDeliveryUIConstants").BulkBudgetMode.UNKNOWN;
      var a = n.every(function (e) {
          return +e > 0;
        }),
        i = r.every(function (e) {
          return +e > 0;
        });
      return a
        ? o("AdsDeliveryUIConstants").BulkBudgetMode.DAILY
        : i
          ? o("AdsDeliveryUIConstants").BulkBudgetMode.LIFETIME
          : o("AdsDeliveryUIConstants").BulkBudgetMode.MIXED;
    }
    var d = o(
        "AdsUEditorCampaignGroupSelectors",
      ).campaignGroups.somePlainObject(function (e) {
        return e.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
      }),
      m = r("adsCreateSelector")(
        [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
        function (t) {
          return !t.some(r("adsCampaignIsCampaignGroupBudget_LEGACY"));
        },
        { name: i.id + ".noneHaveCBOSelector" },
      );
    ((l.dailyBudgetSelector = e),
      (l.lifetimeBudgetSelector = s),
      (l.budgetModeOrMixedSelector = u),
      (l.budgetModeOrMixed = c),
      (l.hasFlexBudgetSelector = d),
      (l.noneHaveCBOSelector = m));
  },
  98,
);
