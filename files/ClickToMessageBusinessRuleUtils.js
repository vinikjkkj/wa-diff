__d(
  "ClickToMessageBusinessRuleUtils",
  [
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsUEditorMessagingDestinationUtils",
    "ClickToMessageCTMPerformanceFeatureGating",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        !r("isStringNullOrEmpty")(e.id) &&
        !r("isStringNullOrEmpty")(e.whatsAppNumber)
      );
    }
    function s(e, t, n) {
      return (
        t &&
        n === r("AdsBuyingTypes").RESERVED &&
        (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          e === r("AdsAPIObjectives").OUTCOME_AWARENESS)
      );
    }
    function u(e) {
      return o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(e)
        ? !0
        : o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithMessengerAndWhatsApp(e) &&
            o(
              "ClickToMessageCTMPerformanceFeatureGating",
            ).shouldEnableGenAINudge(e);
    }
    ((l.eligibleForCTWADaisyChainFromIG = e),
      (l.enableCTXBuyingTypeChange = s),
      (l.enableCTXMDNudge = u));
  },
  98,
);
