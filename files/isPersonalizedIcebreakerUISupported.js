__d(
  "isPersonalizedIcebreakerUISupported",
  [
    "AdCampaignDestination",
    "AdsMessengerVisualEditorCustomerActionType",
    "ClickToMessageCTMPerformanceFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        (t === r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS ||
          t === r("AdsMessengerVisualEditorCustomerActionType").INBOX_FAQS) &&
        o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).enableCTMPersonalizedIcebreakers(e)
      );
    }
    l.default = e;
  },
  98,
);
