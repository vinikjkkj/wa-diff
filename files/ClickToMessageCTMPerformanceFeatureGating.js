__d(
  "ClickToMessageCTMPerformanceFeatureGating",
  [
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsGetDefaultIceBreakers",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsMessengerVisualEditorUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationUtils",
    "CTXChatBuilderFeatureGating",
    "ClickToMessageAIGenEligibilityUtils",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "WebToWhatsappUtils",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      return (
        c(e, t, n) ||
        u(e, t, n) ||
        o("ClickToMessageCTDFeatureGating").shouldEnableCTDAIGenIcebreakers(
          e,
          t,
        ) ||
        o("ClickToMessageCTWAFeatureGating").isInCTWAAIGenIcebreakersPopulation(
          e,
          t,
          r,
        ) ||
        o("ClickToMessageCTWAFeatureGating").isInCTWAAIGenPrefillPopulation(
          e,
          t,
          r,
        ) ||
        o("WebToWhatsappUtils").isInWTWAAIGenPrefillPopulation(e, a, t, r) ||
        D(e, t)
      );
    }
    function s(e, t, n, r) {
      return (
        c(e, t, null) ||
        o("ClickToMessageCTDFeatureGating").shouldEnableCTDAIGenIcebreakers(
          e,
          t,
        ) ||
        o("ClickToMessageCTWAFeatureGating").shouldEnableCTWAAIGenIcebreakers(
          e,
          t,
          n,
        ) ||
        o("ClickToMessageCTWAFeatureGating").shouldEnableCTWAAIGenPrefill(
          e,
          t,
          n,
        ) ||
        o("WebToWhatsappUtils").shouldEnableWTWAAIGenPrefill(e, r, t, n) ||
        D(e, t)
      );
    }
    function u(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        r("isTruthy")(n) &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(t)
      );
    }
    function c(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(
          t,
        ) &&
        r("isFalsey")(n)
      );
    }
    function d() {
      var e;
      return (e = r("qex")._("1890")) != null ? e : !1;
    }
    function m() {
      var e;
      return (e = r("qex")._("1890")) != null ? e : !1;
    }
    function p(e) {
      return e === r("AdCampaignDestination").MESSENGER;
    }
    function _() {
      var e;
      return (e = r("qex")._("3475")) != null ? e : !1;
    }
    function f() {
      return r("gkx")("758");
    }
    function g() {
      var e;
      return (e = r("qex")._("96")) != null ? e : !1;
    }
    function h(e) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isCTM(e) ||
        (o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) && g())
      );
    }
    function y(e, t, n, a, i) {
      if (!o("AdsUEditorMessagingDestinationUtils").isCTM(t)) return !1;
      var l = o("AdsMessengerVisualEditorUtils").parseWelcomeMessage(
          a,
          n,
          t,
          i,
        ),
        s = o(
          "AdsUEditorUnifiedCreationUtils",
        ).getSelectedCustomerActionBasedOnDestination(l, t);
      if (s !== r("AdsMessengerVisualEditorCustomerActionType").ICE_BREAKERS)
        return !1;
      var u = e ? !1 : r("qex")._("315");
      return u != null ? u : !1;
    }
    function C() {
      return r("gkx")("5448");
    }
    function b() {
      return r("gkx")("4545");
    }
    function v(e) {
      return r("isFalsey")(e) ? !1 : r("gkx")("801");
    }
    function S(e, t, n, o, a, i) {
      return r("isFalsey")(e)
        ? !1
        : t === r("AdCampaignDestination").MESSENGER &&
            n === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION &&
            (o === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
              o === r("AdsAPIObjectives").OUTCOME_SALES) &&
            a === !0 &&
            i === r("AdsAPIBidStrategies").COST_CAP;
    }
    function R(e, t, n, a) {
      return (
        (e === r("AdCampaignDestination").MESSENGER ||
          o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTM(
            n,
            e,
            !1,
            a,
          )) &&
        o("AdsGetDefaultIceBreakers").getInboxFAQs(t).length > 0
      );
    }
    function L(e, t, n) {
      return o(
        "ClickToMessageAIGenEligibilityUtils",
      ).isAdCaptionEligibleForAIGen(t)
        ? o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithMessenger(e)
          ? r("qex")._("4151") === !0
          : e === r("AdCampaignDestination").MESSENGER &&
            r("isTruthy")(n) &&
            r("qex")._("2144") === !0
        : !1;
    }
    function E(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(
          t,
        ) &&
        r("isTruthy")(n) &&
        r("qex")._("2144") === !0
      );
    }
    function k(e) {
      switch (e) {
        case r("AdCampaignDestination").MESSENGER:
          return r("qex")._("2952") === !0;
        case r("AdCampaignDestination").WHATSAPP:
          return r("qex")._("5343") === !0;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return r("justknobx")._("2734");
        default:
          return o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
            ? r("qex")._("2952") === !0
            : !1;
      }
    }
    function I(e) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).isGenAINudgeEligibleDestination(e)
        ? r("qex")._("5405") === !0
        : !1;
    }
    function T() {
      return r("qex")._("3513") === !0 || r("gkx")("20755") === !0;
    }
    function D(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        o("ClickToMessageAIGenEligibilityUtils").isAdCaptionEligibleForAIGen(t)
      );
    }
    ((l.isEligibleForCTXAIGenIcebreakers = e),
      (l.shouldEnableCTXAIGenIcebreakersCreateNew = s),
      (l.isEligibleForCTMAIGenIcebreakersExistingPost = u),
      (l.shouldEnableCTMAIGenIcebreakersCreateNew = c),
      (l.deprecateQuickReplies = d),
      (l.connectYourBotOnIcebreakers = m),
      (l.enableCTMNudge = p),
      (l.enableCTMNudgeDepth1 = _),
      (l.enableCTXWrongCTAExistingPostSettingFix = f),
      (l.isPerformanceBoosterEnabledForCTXMD = g),
      (l.enablePerformanceBoosterForDestination = h),
      (l.enableMessageTemplateEditOnL1 = y),
      (l.enableSetMessageTemplateInCreateAd = C),
      (l.enableMessageTemplateRearchitecture = b),
      (l.enableCostCapForPurchaseOptimization = v),
      (l.isEligibleForCostCapPurchaseOptimization = S),
      (l.isEligibleForLeveragingInboxFAQsInAM = R),
      (l.shouldEnableCTMAIGenAutomatedResponses = L),
      (l.shouldEnableCTMAIGenRegeneration = E),
      (l.shouldShowGenAIWelcomeMessage = k),
      (l.shouldEnableGenAINudge = I),
      (l.enableCtxRecommendedTemplatePFR = T),
      (l.isEligibleForCTXMDAIGenIcebreakers = D));
  },
  98,
);
