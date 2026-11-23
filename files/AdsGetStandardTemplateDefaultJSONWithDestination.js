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
    function e(e, t, n, a, i, l, s, u, c) {
      var d = o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).isEligibleForLeveragingInboxFAQsInAM(t, e, l, n),
        m =
          s != null
            ? s
            : t != null &&
                o(
                  "AdsUEditorMessagingDestinationUtils",
                ).isClickToMessageAdDestination(t)
              ? o(
                  "AdsUEditorMessagingDestinationUtils",
                ).getPromotedObjectTypeForDestination(t)
              : null,
        p = o("CTXChatBuilderFeatureGating").enableWTMNudge(l, t, n, !1);
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForPTWA(
        c === !0,
        t,
      ) ||
        o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTWA(
          l,
          t,
          !1,
          n,
        )
        ? r(
            "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
          )(e)
        : n != null &&
            o("AdsWhatsAppFeatureGating").isAutofillEligible(t, n, i, m, u)
          ? r(
              "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
            )(e, a, i)
          : p ||
              o("ClickToMessageCTMPerformanceFeatureGating").enableCTMNudge(
                t,
              ) ||
              o("ClickToMessageCTDFeatureGating").enableCTDNudge(t) ||
              o("ClickToMessageBusinessRuleUtils").enableCTXMDNudge(t) ||
              o("CTXChatBuilderFeatureGating").enableWTDNudge(l, t, n, !0)
            ? r("AdsGetStandardTemplateDefaultJSONNudgeHelper")(
                e,
                t,
                n,
                a,
                i,
                d,
                l,
                p,
              )
            : r("AdsGetStandardTemplateDefaultJSONHelper")(
                e,
                t,
                n,
                a,
                i,
                d,
                void 0,
                l,
              );
    }
    l.default = e;
  },
  98,
);
