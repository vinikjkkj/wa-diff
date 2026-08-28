__d(
  "AdsGetStandardTemplateDefaultJSONWithDestination",
  [
    "AdsGetStandardTemplateDefaultJSONHelper",
    "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
    "AdsGetStandardTemplateDefaultJSONNudgeHelper",
    "AdsUEditorMessagingDestinationUtils",
    "AdsWhatsAppFeatureGating",
    "CTXChatBuilderFeatureGating",
    "ClickToMessageBusinessRuleUtils",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTMPerformanceFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u) {
      var c = o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).isEligibleForLeveragingInboxFAQsInAM(t, e, l, n),
        d =
          s != null
            ? s
            : t != null &&
                o(
                  "AdsUEditorMessagingDestinationUtils",
                ).isClickToMessageAdDestination(t)
              ? o(
                  "AdsUEditorMessagingDestinationUtils",
                ).getPromotedObjectTypeForDestination(t)
              : null;
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTWA(
        l,
        t,
        !1,
        n,
      )
        ? r(
            "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
          )(e)
        : n != null &&
            o("AdsWhatsAppFeatureGating").isAutofillEligible(t, n, i, d, u)
          ? r(
              "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
            )(e, a, i)
          : o("ClickToMessageCTMPerformanceFeatureGating").enableCTMNudge(t) ||
              o("ClickToMessageCTDFeatureGating").enableCTDNudge(t) ||
              o("ClickToMessageBusinessRuleUtils").enableCTXMDNudge(t) ||
              o("CTXChatBuilderFeatureGating").enableWTDNudge(l, t, n, !0)
            ? r("AdsGetStandardTemplateDefaultJSONNudgeHelper")(
                e,
                t,
                n,
                a,
                i,
                c,
                l,
              )
            : r("AdsGetStandardTemplateDefaultJSONHelper")(
                e,
                t,
                n,
                a,
                i,
                c,
                void 0,
                l,
              );
    }
    l.default = e;
  },
  98,
);
