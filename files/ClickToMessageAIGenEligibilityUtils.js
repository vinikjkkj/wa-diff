__d(
  "ClickToMessageAIGenEligibilityUtils",
  [
    "AdCampaignDestination",
    "AdsUEditorMessagingDestinationUtils",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTMPerformanceFeatureGating",
    "ClickToMessageCTWAFeatureGating",
    "WebToWhatsappUtils",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10;
    function s(t) {
      return r("isTruthy")(t) && t.length > e;
    }
    function u(e, t, n, r, a, i) {
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
            o(
              "ClickToMessageCTMPerformanceFeatureGating",
            ).isEligibleForCTXMDAIGenIcebreakers(e, t);
    }
    function c() {
      return r("justknobx")._("2734");
    }
    function d() {
      return r("qex")._("4214") === !0;
    }
    function m() {
      return r("qex")._("4230") === !0;
    }
    function p(e, t, n) {
      if (n === !0 || !s(t)) return !1;
      switch (e) {
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return c();
        case r("AdCampaignDestination").WHATSAPP:
          return d();
        case r("AdCampaignDestination").MESSENGER:
          return m();
        default:
          return o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
            ? m()
            : !1;
      }
    }
    function _(e, t) {
      return s(t)
        ? o("ClickToMessageCTMPerformanceFeatureGating").shouldEnableGenAINudge(
            e,
          )
        : !1;
    }
    ((l.isAdCaptionEligibleForAIGen = s),
      (l.shouldEnableAIGenIcebreakers = u),
      (l.shouldEnableAIGenWelcomeMessage = p),
      (l.isGenAINudgeEligible = _));
  },
  98,
);
