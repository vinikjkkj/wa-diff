__d(
  "AdsCampaignDerivedPaths",
  ["generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        ACTIVITY_STATUS: "activityStatus",
        ALLOWED_STATUSES: "allowedStatuses",
        ATTRIBUTION_SPECS: "attributionSpecs",
        AVAILABLE_BIDDING_OPTIONS: "availableBiddingOptions",
        AVAILABLE_BIDDING_STRATEGY_AND_CONSTRAINTS:
          "availableBiddingStrategyAndConstraints",
        BOOSTED_COMPONENT_PRODUCT: "boostedComponentProduct",
        BUDGET: "budget",
        BUDGET_MODE: "budget_mode",
        BUDGET_REMAINING: "budgetRemaining",
        BUYING_TYPE: "buyingType",
        CREATIVE_SEQUENCE_ENABLED: "creativeSequenceEnabled",
        END_DATE: "endDate",
        FREQUENCY_INTERVAL: "frequencyInterval",
        INELIGIBLE_OPTIMIZATIONS: "ineligibleOptimizations",
        LEARNING_STAGE_INFO: "learningStageInfo",
        MAX_FREQUENCY: "maxFrequency",
        OBJECTIVE: "objective",
        OPTIMIZATION_EVENT: "optimizationEvent",
        OPTIMIZATION_GOAL: "optimizationGoal",
        OPTIMIZATION_GOAL_BID_CONTROL: "optimizationGoalBidControl",
        PAGE_ID: "pageID",
        START_DATE: "startDate",
        TARGETED_COUNTRY: "targetedCountry",
        TIME_BASED_AD_ROTATION_ENABLED: "timeBasedAdRotationEnabled",
      }),
      s = [
        { pathKeys: [], expandsTo: e },
        {
          pathKeys: ["ACTIVITY_STATUS"],
          expandsTo: { LABEL: "label", STATUS: "status", SUB_TEXT: "subText" },
        },
      ],
      u = r("generatePaths")(s),
      c = u;
    l.default = c;
  },
  98,
);
