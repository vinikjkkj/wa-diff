__d(
  "ClickToMessageAIGenEligibilityUtils",
  [
    "AdCampaignDestination",
    "AdsUEditorMessagingDestinationUtils",
    "ClickToMessageAdCaptionEligibilityUtils",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTMPerformanceFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "WebToMessengerUtils",
    "WebToWhatsappUtils",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i) {
      return a === !0
        ? !1
        : o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).isEligibleForCTMAIGenIcebreakersExistingPost(e, t, n) ||
            o(
              "ClickToMessageCTMPerformanceFeatureGating",
            ).shouldEnableCTMAIGenIcebreakersCreateNew(e, t, n) ||
            o("ClickToMessageCTDFeatureGating").shouldEnableCTDAIGenIcebreakers(
              e,
              t,
            ) ||
            o(
              "ClickToMessageCTWAFeatureGating",
            ).shouldEnableCTWAAIGenIcebreakers(e, t, r) ||
            o("ClickToMessageCTWAFeatureGating").shouldEnableCTWAAIGenPrefill(
              e,
              t,
              r,
            ) ||
            o("WebToWhatsappUtils").shouldEnableWTWAAIGenPrefill(e, i, t, r) ||
            o("WebToMessengerUtils").shouldEnableWTMAIGenIcebreakers(
              e,
              i,
              t,
              r,
            ) ||
            o(
              "ClickToMessageCTMPerformanceFeatureGating",
            ).isEligibleForCTXMDAIGenIcebreakers(e, t);
    }
    function s() {
      return r("justknobx")._("2734");
    }
    function u() {
      return r("qex")._("4214") === !0;
    }
    function c() {
      return r("justknobx")._("8435");
    }
    function d(e, t, n) {
      if (
        n === !0 ||
        !o(
          "ClickToMessageAdCaptionEligibilityUtils",
        ).isAdCaptionEligibleForAIGen(t)
      )
        return !1;
      switch (e) {
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return s();
        case r("AdCampaignDestination").WHATSAPP:
          return u();
        case r("AdCampaignDestination").MESSENGER:
          return c();
        default:
          return o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
            ? c()
            : !1;
      }
    }
    function m(e, t) {
      return o(
        "ClickToMessageAdCaptionEligibilityUtils",
      ).isAdCaptionEligibleForAIGen(t)
        ? o("ClickToMessageCTMPerformanceFeatureGating").shouldEnableGenAINudge(
            e,
          )
        : !1;
    }
    ((l.isAdCaptionEligibleForAIGen = o(
      "ClickToMessageAdCaptionEligibilityUtils",
    ).isAdCaptionEligibleForAIGen),
      (l.shouldEnableAIGenIcebreakers = e),
      (l.shouldEnableAIGenWelcomeMessage = d),
      (l.isGenAINudgeEligible = m));
  },
  98,
);
