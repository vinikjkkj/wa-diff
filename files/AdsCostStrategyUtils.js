__d(
  "AdsCostStrategyUtils",
  [
    "$InternalEnum",
    "AdsAPIBidStrategies",
    "AdsAPIOptimizationGoals",
    "AdsBidControlType",
    "AdsBidGuidanceV2Strings",
    "AdsCostCapExtraOptimizationGoals",
    "AdsOptimizationStrings",
    "ClickToMessageCTMPerformanceFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "BID_CELL",
        "BILLING_EVENT",
        "OPTIMIZATION_MUTATION",
      ]),
      s = Object.values(r("AdsCostCapExtraOptimizationGoals"));
    function u(e, t) {
      var n = !1,
        o = !1;
      switch (e) {
        case r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP:
          ((n = !0), (o = !1));
          break;
        case r("AdsAPIBidStrategies").COST_CAP:
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP:
        case r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS:
          ((n = !1), (o = !1));
          break;
        case r("AdsAPIBidStrategies").TARGET_COST:
          ((n = !1), (o = !0));
          break;
      }
      return { MappedIsAutobid: n, MappedIsAveragePricePacing: o };
    }
    function c(e, t) {
      return e === !0
        ? r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
        : t === !0
          ? r("AdsAPIBidStrategies").TARGET_COST
          : r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP;
    }
    function d(e, t) {
      switch (e) {
        case r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP:
          return o("AdsOptimizationStrings").getOptimizedCostOptionLabel();
        case r("AdsAPIBidStrategies").COST_CAP:
          return o("AdsOptimizationStrings").getCostCapOptionShortLabel();
        case r("AdsAPIBidStrategies").TARGET_COST:
          return o("AdsOptimizationStrings").getAverageBidOptionShortLabel();
        default:
          return t
            ? o("AdsOptimizationStrings").getMaximumBidOptionShortLabel()
            : o("AdsOptimizationStrings").getMaximumBidOptionLabel();
      }
    }
    function m(e) {
      switch (e) {
        case r("AdsBidGuidanceV2Strings").CostCapReportingCellLabel:
          return r("AdsBidGuidanceV2Strings").ControlCurrencyInputCostGoalLabel;
        case r("AdsBidGuidanceV2Strings").BidCapReportingCellLabel:
          return r("AdsBidGuidanceV2Strings")
            .ControlCurrencyInputBidControlLabel;
        default:
          return e;
      }
    }
    function p(e) {
      var t = [];
      switch (e) {
        case r("AdsBidControlType").AUTO_BID_ONLY:
          t = [r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP];
          break;
        case r("AdsBidControlType").AVERAGE_BID_ONLY:
          t = [r("AdsAPIBidStrategies").TARGET_COST];
          break;
        case r("AdsBidControlType").MANUAL_BID_ONLY:
        case r("AdsBidControlType").MAXIMUM_BID_ONLY:
          t = [r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP];
          break;
        default:
          t = [
            r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
            r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
          ];
          break;
      }
      return t;
    }
    function _(e, t, n) {
      var a = s.includes(t),
        i = t === r("AdsAPIOptimizationGoals").REACH,
        l =
          t === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION &&
          o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).enableCostCapForPurchaseOptimization(n);
      return e || a || i || l;
    }
    ((l.BidStrategyEventSource = e),
      (l.getBidLegacyFieldsValueByBidStrategy = u),
      (l.getBidStrategyByLegacyFields = c),
      (l.renderBidStrategyLabel = d),
      (l.bidTypeToBidControl = m),
      (l.convertBidControlTypeToBidStrategy = p),
      (l.isEligibleForCostCap = _));
  },
  98,
);
