__d(
  "AdsAiGenIcebreakersCTWAUtils",
  [
    "AdCampaignDestination",
    "AdsMessengerConstants",
    "AdsMessengerVisualEditorCustomerActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        (e === r("AdCampaignDestination").WHATSAPP || n === "whatsapp") &&
        t === r("AdsMessengerVisualEditorCustomerActionType").AUTOFILL_MESSAGE
      );
    }
    function s(e) {
      return e != null && e.length > 0 && e[0] != null && e[0].title != null
        ? { content: e[0].title }
        : {
            content: o(
              "AdsMessengerConstants",
            ).DEFAULT_AUTOFILL_MESSAGE.toString(),
          };
    }
    function u(e) {
      return e != null && e.length > 0 && e[0] != null ? e : null;
    }
    ((l.shouldDefaultToGenAIAutofillMessage = e),
      (l.getAutofillMessageFromGenAIIcebreakers = s),
      (l.getWhatsAppIcebreakerFromCaptionIcebreakers = u));
  },
  98,
);
