__d(
  "AdsCTVSwitchRestrictionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t, n;
      return (t =
        (n = e.ctvPlacementEligibility) == null
          ? void 0
          : n.forecast_feature_restrictions) != null
        ? t
        : null;
    }
    function l(t) {
      var n;
      return (n = e(t)) == null ? void 0 : n.eligible_optimization_goals;
    }
    function s(t) {
      var n;
      return (n = e(t)) == null ? void 0 : n.eligible_delivery_types;
    }
    ((i.getCTVSwitchFeatureRestrictions = e),
      (i.getEligibleCTVOptimizationGoals = l),
      (i.getEligibleCTVDeliveryTypes = s));
  },
  66,
);
