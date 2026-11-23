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
    "ClickToMessageAdCaptionEligibilityUtils",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "WebToMessengerUtils",
    "WebToWhatsappUtils",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return e !== r("AdCampaignDestination").MESSENGER
        ? !1
        : (t = r("qex")._("6023")) != null
          ? t
          : !1;
    }
    function s(e, t, n, r, a) {
      return (
        d(e, t, n) ||
        c(e, t, n) ||
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
        o("WebToMessengerUtils").isInWTMAIGenIcebreakersPopulation(
          e,
          a,
          t,
          r,
        ) ||
        D(e, t)
      );
    }
    function u(e, t, n, r) {
      return (
        d(e, t, null) ||
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
        o("WebToMessengerUtils").shouldEnableWTMAIGenIcebreakers(e, r, t, n) ||
        D(e, t)
      );
    }
    function c(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        r("isTruthy")(n) &&
        o(
          "ClickToMessageAdCaptionEligibilityUtils",
        ).isAdCaptionEligibleForAIGen(t)
      );
    }
    function d(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        o(
          "ClickToMessageAdCaptionEligibilityUtils",
        ).isAdCaptionEligibleForAIGen(t) &&
        r("isFalsey")(n)
      );
    }
    function m() {
      var e;
      return (e = r("qex")._("1890")) != null ? e : !1;
    }
    function p() {
      var e;
      return (e = r("qex")._("1890")) != null ? e : !1;
    }
    function _(e) {
      return e === r("AdCampaignDestination").MESSENGER;
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
    function b(e) {
      return r("isFalsey")(e) ? !1 : r("gkx")("801");
    }
    function v(e, t, n, o, a, i) {
      return r("isFalsey")(e)
        ? !1
        : t === r("AdCampaignDestination").MESSENGER &&
            n === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION &&
            (o === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
              o === r("AdsAPIObjectives").OUTCOME_SALES) &&
            a === !0 &&
            i === r("AdsAPIBidStrategies").COST_CAP;
    }
    function S(e, t, n, a) {
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
    function R(e, t, n) {
      return o(
        "ClickToMessageAdCaptionEligibilityUtils",
      ).isAdCaptionEligibleForAIGen(t)
        ? o(
            "AdsUEditorMessagingDestinationUtils",
          ).isMultiDestinationWithMessenger(e)
          ? r("qex")._("4151") === !0
          : e === r("AdCampaignDestination").MESSENGER && r("isTruthy")(n)
        : !1;
    }
    function L(e, t, n) {
      return (
        e === r("AdCampaignDestination").MESSENGER &&
        o(
          "ClickToMessageAdCaptionEligibilityUtils",
        ).isAdCaptionEligibleForAIGen(t) &&
        r("isTruthy")(n)
      );
    }
    function E(e) {
      switch (e) {
        case r("AdCampaignDestination").MESSENGER:
          return r("justknobx")._("8435");
        case r("AdCampaignDestination").WHATSAPP:
          return r("qex")._("5343") === !0;
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return r("justknobx")._("2734");
        default:
          return (
            o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
            r("justknobx")._("8435")
          );
      }
    }
    function k(e) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).isGenAINudgeEligibleDestination(e)
        ? r("qex")._("794") === !0
        : !1;
    }
    function I(e, t) {
      if (
        (t === void 0 && (t = !1),
        !o(
          "AdsUEditorMessagingDestinationUtils",
        ).isMultiDestinationWithMessenger(e) ||
          o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(e))
      )
        return !1;
      var n = t ? r("qex")._("1021") : r("qex")._("1299");
      return n === !0;
    }
    function T(e) {
      e === void 0 && (e = !0);
      var t = e ? r("qex")._("3513") : r("qex")._("3102");
      return t === !0;
    }
    function D(e, t) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e) &&
        o(
          "ClickToMessageAdCaptionEligibilityUtils",
        ).isAdCaptionEligibleForAIGen(t)
      );
    }
    ((l.enableCTMPersonalizedIcebreakers = e),
      (l.isEligibleForCTXAIGenIcebreakers = s),
      (l.shouldEnableCTXAIGenIcebreakersCreateNew = u),
      (l.isEligibleForCTMAIGenIcebreakersExistingPost = c),
      (l.shouldEnableCTMAIGenIcebreakersCreateNew = d),
      (l.deprecateQuickReplies = m),
      (l.connectYourBotOnIcebreakers = p),
      (l.enableCTMNudge = _),
      (l.enableCTXWrongCTAExistingPostSettingFix = f),
      (l.isPerformanceBoosterEnabledForCTXMD = g),
      (l.enablePerformanceBoosterForDestination = h),
      (l.enableMessageTemplateEditOnL1 = y),
      (l.enableSetMessageTemplateInCreateAd = C),
      (l.enableCostCapForPurchaseOptimization = b),
      (l.isEligibleForCostCapPurchaseOptimization = v),
      (l.isEligibleForLeveragingInboxFAQsInAM = S),
      (l.shouldEnableCTMAIGenAutomatedResponses = R),
      (l.shouldEnableCTMAIGenRegeneration = L),
      (l.shouldShowGenAIWelcomeMessage = E),
      (l.shouldEnableGenAINudge = k),
      (l.shouldEnableAMMDNudgeExpansion = I),
      (l.enableCtxRecommendedTemplatePFR = T),
      (l.isEligibleForCTXMDAIGenIcebreakers = D));
  },
  98,
);
