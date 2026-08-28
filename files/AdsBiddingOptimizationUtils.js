__d(
  "AdsBiddingOptimizationUtils",
  [
    "AdsAPIBidConstraints",
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBidConstraintsUtils",
    "AdsBidControlType",
    "AdsCampaignBidUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCostStrategyUtils",
    "ClickToMessageCTMPerformanceFeatureGating",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return n === r("AdsAPIBillingEvents").APP_INSTALLS
        ? !1
        : e !== r("AdsAPIObjectives").BRAND_AWARENESS ||
            t !== r("AdsAPIOptimizationGoals").REACH;
    }
    function s(e, t) {
      var n = e.getBidControlType(t);
      return (
        n != r("AdsBidControlType").AUTO_BID_ONLY &&
        n != r("AdsBidControlType").AVERAGE_BID_ONLY
      );
    }
    function u(e, t, n, r, o) {
      return (
        r === void 0 && (r = !1),
        !r && e.getCanUseAveragePricePacing(t, n, o)
      );
    }
    function c(e, t, n, a, i, l, s) {
      var u = r("AdsCampaignOptimizationPluginResolver")
        .resolve({
          objective: t,
          promotedObjectType: n,
          destinationType: s == null ? void 0 : s.destination_type,
        })
        .getBidControlType(i, l, s, e);
      return u !== r("AdsBidControlType").ANY
        ? u
        : o("AdsCampaignBidUtils").getBidControl(t, n, a, i);
    }
    function d(e, t) {
      var n = r("immutable").Map();
      switch (e) {
        case r("AdsAPIOptimizationGoals").VALUE:
          var a = o(
            "AdsBidConstraintsUtils",
          ).shouldShowHighestValueBidStrategyField(!0, t);
          a &&
            (n = n.set(r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP, [
              null,
              r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR,
            ]));
          break;
        case r("AdsAPIOptimizationGoals").BRAND_AWARENESS:
          n = n.set(r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP, [null]);
          break;
        default:
          n = n.set(r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP, [null]);
      }
      return n;
    }
    function m(e, t, n, a, i, l, s, u, d) {
      if ((d === void 0 && (d = !1), d)) return null;
      var m = c(e, t, n, a, i, l, u),
        p = o("AdsCostStrategyUtils").convertBidControlTypeToBidStrategy(m),
        _ = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: t,
          promotedObjectType: n,
          destinationType: u == null ? void 0 : u.destination_type,
        }),
        f = !!i && _.getCanUseAveragePricePacing(i, l, s),
        g =
          r("isFalsey")(u == null ? void 0 : u.daily_budget) &&
          r("isFalsey")(u == null ? void 0 : u.lifetime_budget),
        h = o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).isEligibleForCostCapPurchaseOptimization(
          !0,
          u == null ? void 0 : u.destination_type,
          i,
          t,
          g,
          r("AdsAPIBidStrategies").COST_CAP,
        ),
        y = o("AdsCostStrategyUtils").isEligibleForCostCap(f, i, h);
      return (
        y && p.push(r("AdsAPIBidStrategies").COST_CAP),
        i === r("AdsAPIOptimizationGoals").VALUE &&
          p.push(r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS),
        p
      );
    }
    function p(e) {
      return !e;
    }
    function _(e, t, n) {
      return r("AdsCampaignOptimizationPluginResolver")
        .resolve({ objective: e, promotedObjectType: "NONE" })
        .getDefaultBidAmount(t, n, void 0, void 0, void 0);
    }
    function f(t, n, o, a, i, l, s) {
      var u = l && i ? c([], o, a, n, i, l, s) : r("AdsBidControlType").ANY,
        d = !0,
        m = !0;
      return (
        u !== r("AdsBidControlType").ANY
          ? ((d = u !== r("AdsBidControlType").MANUAL_BID_ONLY),
            (m = u !== r("AdsBidControlType").AUTO_BID_ONLY))
          : l && i && (d = e(o, i, l)),
        (t && !d) || (!t && !m)
      );
    }
    ((l.canUseAutoBid = e),
      (l.canUseMaxBid = s),
      (l.canUseAveragePricePacing = u),
      (l.getBidControlType = c),
      (l.getBiddingStrategyAndBiddingConstraints = d),
      (l.getAvailableBiddingOptions = m),
      (l.getIsAveragePricePacingValue = p),
      (l.getDefaultBidAmount = _),
      (l.shouldFlipAutobidValue = f));
  },
  98,
);
