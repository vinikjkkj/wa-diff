__d(
  "adsBulkAdoptOpportunityShouldShowBulkAdoptNux",
  ["AdsAPIOptimizationGoals", "AdsEditFlowOptimizationUpsellUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        (e === r("AdsAPIOptimizationGoals").VALUE &&
          t ===
            o("AdsEditFlowOptimizationUpsellUtils").TipType
              .BULK_ADOPTION_ROAS_UPSELL) ||
        (e === r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS &&
          t ===
            o("AdsEditFlowOptimizationUpsellUtils").TipType
              .BULK_ADOPTION_LPV_UPSELL)
      );
    }
    function s(t, n, r) {
      return r !== "ad_set" || n == null
        ? !1
        : Array.from(
            t
              .map(function (e) {
                return e.optimization_goal;
              })
              .values(),
          ).every(function (t) {
            return e(t, n);
          });
    }
    l.default = s;
  },
  98,
);
