__d(
  "AdsGetDefaultGreetingText",
  [
    "fbt",
    "AdsMessengerConstants",
    "FBLogger",
    "isStringNullOrEmpty",
    "isWhatsAppOrInstagramOrComboDestination",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a) {
      (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        r("isStringNullOrEmpty")(e) &&
          r("FBLogger")("ctx_ads_greeting_text_suggestion")
            .blameToPreviousFrame()
            .warn("No page_id is provided in destination %s", t));
      var i = r("isWhatsAppOrInstagramOrComboDestination")(t);
      return r("isStringNullOrEmpty")(e) || i
        ? String(o("AdsMessengerConstants").DEFAULT_GREETING_TEXT_NEW_DESIGN)
        : String(
            o("AdsMessengerConstants")
              .DEFAULT_PERSONALIZED_GREETING_TEXT_NEW_DESIGN,
          );
    }
    function u(e) {
      return (
        e === void 0 && (e = !1),
        String(
          e
            ? o("AdsMessengerConstants").FLOWS_GET_STARTED_DEFAULT_MESSAGE
            : o("AdsMessengerConstants").FLOWS_DEFAULT_MESSAGE,
        )
      );
    }
    function c(e) {
      return (
        e === void 0 && (e = !1),
        e
          ? s._(/*BTDS*/ "Get started").toString()
          : s._(/*BTDS*/ "Join now").toString()
      );
    }
    ((l.getDefaultGreetingText = e),
      (l.getFlowsDefaultGreetingMessage = u),
      (l.getFlowsDefaultCTAText = c));
  },
  226,
);
