__d(
  "WebToMessengerUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AdsWebsiteExtensionTypeUtils",
    "CTXChatBuilderFeatureGating",
    "ClickToMessageAdCaptionEligibilityUtils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        (e == null ? void 0 : e.destination_type) ===
          r("AdCampaignDestination").WEBSITE_AND_MESSAGES ||
        (e == null ? void 0 : e.conversion_locations) ===
          r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES
      );
    }
    function s(e, t) {
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTM(
        o("AdsWebsiteExtensionTypeUtils").getSelectedMessageExtensiontype(e),
        null,
        !1,
        t,
      );
    }
    function u(e, t, n, a) {
      return (
        t === "messenger" &&
        e !== r("AdCampaignDestination").MESSENGER &&
        a === r("AdsAPIObjectives").OUTCOME_SALES &&
        o(
          "ClickToMessageAdCaptionEligibilityUtils",
        ).isAdCaptionEligibleForAIGen(n)
      );
    }
    function c(e, t, n, o) {
      return u(e, t, n, o) ? r("qex")._("1667") === !0 : !1;
    }
    ((l.isWebsiteAndMessagesCampaign = e),
      (l.isMessagingTemplateEnabledForWTM = s),
      (l.isInWTMAIGenIcebreakersPopulation = u),
      (l.shouldEnableWTMAIGenIcebreakers = c));
  },
  98,
);
