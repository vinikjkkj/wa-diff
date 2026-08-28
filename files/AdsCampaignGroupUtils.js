__d(
  "AdsCampaignGroupUtils",
  [
    "AdsAPICampaignGroupPaths",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignPaths",
    "AdsAPIObjectives",
    "AdsAccountCreationUtils",
    "AdsAutomatedAdsUtils",
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsDeprecationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return o("AdsBulkValueUtils").aggregate(
        o("AdsBulkValueUtils")
          .deaggregateDeepByID(e)
          .map(o("AdsAPICampaignGroupRecordUtils").getBudgetType_LEGACY),
      );
    }
    var c = [
      {
        campaignGroupPath: (e = r("AdsAPICampaignGroupPaths")).BID_STRATEGY,
        campaignPath: (s = r("AdsAPICampaignPaths")).BID_STRATEGY,
      },
      { campaignGroupPath: e.IS_AUTOBID, campaignPath: s.IS_AUTOBID },
      {
        campaignGroupPath: e.IS_AVERAGE_PRICE_PACING,
        campaignPath: s.IS_AVERAGE_PRICE_PACING,
      },
      { campaignGroupPath: e.PACING_TYPE, campaignPath: s.PACING_TYPE },
    ];
    function d(e) {
      return m(e.buying_type);
    }
    function m(e) {
      return e.getValues().some(function (e) {
        return e === r("AdsBuyingTypes").RESERVED;
      });
    }
    function p(e, t, n) {
      return e === "daily" ? parseFloat(t) || 0 : parseFloat(n) || 0;
    }
    function _(e) {
      var t = u(e).getValues(),
        n = !1,
        r = !0;
      return (
        t.forEach(function (e) {
          ((n = n || !!e), (r = r && !!e));
        }),
        { all: n && r, some: n }
      );
    }
    function f() {
      return "default";
    }
    function g(e) {
      return e.addMonths(1);
    }
    function h(e, t, n, r, a) {
      var i =
          r != null ? o("AdsDeprecationUtils").hasDeprecatedObjective(r) : !1,
        l =
          r != null && a != null
            ? o(
                "AdsDeprecationUtils",
              ).hasDeprecatedOptimizationGoalObjectiveCombo(r, a)
            : !1;
      return (
        !o("AdsAPICampaignGroupRecordUtils").isReachFrequency({
          buying_type: t,
        }) &&
        !o("AdsAutomatedAdsUtils").isAutomatedAdsCampaignGroup(e) &&
        o(
          "AdsAccountCreationUtils",
        ).getAccountHasNoPublishPermissionDisabledReason(n) == null &&
        !i &&
        !l
      );
    }
    function y(e) {
      return (
        (e == null ? void 0 : e.objective) ===
        r("AdsAPIObjectives").APP_INSTALLS
      );
    }
    ((l.CAMPAIGN_GROUP_BUDGET_ROLL_DOWN_FIELD_PATHS = c),
      (l.containsRFCampaignGroup = d),
      (l.containsRFCampaignGroupNEW = m),
      (l.getBudgetAmount = p),
      (l.hasBulkBudget = _),
      (l.getCampaignGroupType = f),
      (l.adsCampaignGroupGetDefaultEndDateTime = g),
      (l.canDuplicateCampaignGroup = h),
      (l.isMAICampaignGroup = y));
  },
  98,
);
