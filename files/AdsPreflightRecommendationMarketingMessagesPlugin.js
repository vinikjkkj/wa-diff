__d(
  "AdsPreflightRecommendationMarketingMessagesPlugin",
  [
    "fbt",
    "AdsDeliveryMarketingMessagesGuidanceConstants",
    "AdsPreflightRecommendationPluginType",
    "MessageMarketingLandingPageConsts",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ ""),
      u = {
        key: "marketing_messages",
        type: "preflight_recommendation",
        recommendationType: "marketing_messages",
        guidanceType: o("AdsPreflightRecommendationPluginType").PFRGuidanceTypes
          .RECOMMENDATION,
        surfaceToRender: [
          o("AdsPreflightRecommendationPluginType").PFRPluginSurfaces
            .CREATION_FLOW_EDITOR,
        ],
        getAdObjectLevel: function () {
          return "ad_set";
        },
        getEstimateLiftOutcomeText: function () {
          return e;
        },
        getEstimateLiftSourceText: function () {
          return e;
        },
        getHeaderText: function () {
          return o("AdsDeliveryMarketingMessagesGuidanceConstants")
            .MM_OS_GUIDANCE_HEADER_TEXT;
        },
        getEligibilityCheck: function () {
          return new Map();
        },
        getDescriptionText: function () {
          return o("AdsDeliveryMarketingMessagesGuidanceConstants")
            .MM_OS_GUIDANCE_BODY_TEXT;
        },
        getPrimaryButtonLabel: function () {
          return o("MessageMarketingLandingPageConsts")
            .GET_STARTED_BUTTON_CONTENT;
        },
        shouldUseURCForContent: function () {
          return r("qex")._("604") === !0;
        },
      },
      c = u;
    l.default = c;
  },
  226,
);
