__d(
  "AdsMessagesCampaignOptimizationPluginUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsUEditorMessagingDestinationUtils",
    "CTMAdsOptimizationStoreUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageCTMPerformanceFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsAPIObjectives").MESSAGES ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").OUTCOME_SALES
      );
    }
    function s(e, t) {
      return o(
        "ClickToMessageAdoptionPerformanceLongTermHoldout",
      ).isAccountInEpdJurisdiction()
        ? o("AdsUEditorMessagingDestinationUtils").isCTM(e)
          ? [r("AdsAPIOptimizationGoals").CONVERSATIONS].concat(t, [
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
            ])
          : o("AdsUEditorMessagingDestinationUtils").isIGDirect(e)
            ? [
                r("AdsAPIOptimizationGoals").CONVERSATIONS,
                r("AdsAPIOptimizationGoals").LINK_CLICKS,
              ]
            : o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(e)
              ? [r("AdsAPIOptimizationGoals").CONVERSATIONS]
              : [r("AdsAPIOptimizationGoals").LINK_CLICKS]
        : null;
    }
    function u(e, t, n, o, a, i, l) {
      var s,
        u =
          ((s = {}),
          (s.caller = "plugin_default_optimization_goal"),
          (s.campaign_destination_type = e),
          (s.objective = t),
          (s.optimization_goal = n),
          (s.page_id = o),
          (s.source = a),
          s);
      (i != null && (u.status = i),
        l != null && (u.campaign_id = l),
        r("AdsInterfacesLogger").log({
          eventName: "ctx_optimization_goal_defaulting",
          data: u,
        }));
    }
    function c(t, n, a, i, l, s) {
      return t != null &&
        o("AdsUEditorMessagingDestinationUtils").isCTM(n) &&
        e(a) &&
        o(
          "CTMAdsOptimizationStoreUtils",
        ).getIsPhase2PurchaseConversionsOptimizationEligible(t) &&
        (i !== "COST_CAP" ||
          o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).enableCostCapForPurchaseOptimization(l)) &&
        !s
        ? (u(
            n,
            a,
            r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
            t,
            "ctm_po_rule_based_defaulting",
            "legacy",
          ),
          r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION)
        : null;
    }
    ((l.isConversionOptimizationEligibleObjective = e),
      (l.getSupportedGoalsForEpdJurisdiction = s),
      (l.logOptimizationGoalDefaulting = u),
      (l.getPhase2PurchaseDefault = c));
  },
  98,
);
