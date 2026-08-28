__d(
  "AdsValueAdjustmentRuleGoalCardUtils",
  ["AdsCampaignGoalExpressionUtils", "ValueRulesModalEntryPoint"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e ===
          o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint
            .L2_NCA_GOAL ||
        e ===
          o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint.L2_BROAD_GOAL
      );
    }
    function s(t) {
      return e(t)
        ? o("AdsCampaignGoalExpressionUtils").shouldShowVARInGoalExpression()
        : !1;
    }
    function u(e, t) {
      return t == null && s(e);
    }
    function c(e) {
      return (
        e ===
          o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint
            .L2_NCA_GOAL && s(e)
      );
    }
    ((l.isGoalCardVARModalEntryPoint = e),
      (l.isGoalCardVARBehaviorEnabled = s),
      (l.isGoalCardVARCreate = u),
      (l.shouldFilterIncompatibleAudienceLabels = c));
  },
  98,
);
