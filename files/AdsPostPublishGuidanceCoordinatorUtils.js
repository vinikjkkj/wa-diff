__d(
  "AdsPostPublishGuidanceCoordinatorUtils",
  ["AdsRecommendationsUtils", "ClickToWhatsAppFeatureGating", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (!r("justknobx")._("5079")) return [];
      var e = [];
      return (
        o("AdsRecommendationsUtils").getIsASLPostPublishModalEnabled() &&
          e.push("SpendLimit"),
        o(
          "AdsRecommendationsUtils",
        ).getIsCTXZeroOutcomeBudgetPostPublishModalEnabled() &&
          e.push("CTXZeroOutcomeBudget"),
        o("ClickToWhatsAppFeatureGating").isInCTXCBOPostPublishExperiment() &&
          e.push("CTXCBOZeroOutcomeBudget"),
        o(
          "AdsRecommendationsUtils",
        ).getIsZeroOutcomeBudgetPostPublishModalEnabled() &&
          e.push("ZeroOutcomeBudget"),
        o(
          "AdsRecommendationsUtils",
        ).getIsOutcomeForecasterBudgetPostPublishModalEnabled() &&
          e.push("OutcomeForecaster"),
        o(
          "AdsRecommendationsUtils",
        ).getIsBudgetSeasonalRecommendationPostPublishModalEnabled() &&
          e.push("BudgetSeasonal"),
        o(
          "AdsRecommendationsUtils",
        ).getIsUnderpoweredExperimentPostPublishModalEnabled() &&
          e.push("UnderpoweredExperiment"),
        o(
          "AdsRecommendationsUtils",
        ).getIsNarrowWebsiteCustomAudiencePostPublishModalEnabled() &&
          e.push("NarrowWebsiteAudience"),
        o("AdsRecommendationsUtils").getIsIGConnectUpsellPostPublishEnabled() &&
          e.push("IGConnectUpsell"),
        e
      );
    }
    function s() {
      if (!r("justknobx")._("5079")) return [];
      var e = [];
      return (
        o("ClickToWhatsAppFeatureGating").isInCTXEditFlowZOExperiment() &&
          (e.push("CTXZeroOutcomeEditFlow"),
          e.push("CTXCBOZeroOutcomeEditFlow"),
          e.push("CTXNonCBOGroupZeroOutcomeEditFlow")),
        e
      );
    }
    ((l.getEnabledPostPublishCards = e),
      (l.getEnabledEditFlowPostPublishCards = s));
  },
  98,
);
