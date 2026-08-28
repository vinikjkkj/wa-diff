__d(
  "AdsCampaignLiveVideoAdsUtils",
  [
    "AdCampaignDestination",
    "AdsCampaignGroupLVACardUtils",
    "AdsCampaignRecordAccessors",
    "AdsUEditorLiveVideoAdsConstants",
    "AdsZeroOutcomeBudgetDefaultUtils",
    "DateTime",
    "gkx",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("6004");
    }
    function s() {
      return r("gkx")("12599");
    }
    function u() {
      return r("gkx")("6144") && r("gkx")("7977");
    }
    function c(e) {
      return e === !0 ? !0 : r("gkx")("6144");
    }
    function d(e) {
      return e && r("qex")._("1362") === !0;
    }
    function m(e, t, n, o) {
      return (n && t === !0 && r("qex")._("1702") === !0) || o;
    }
    function p(t) {
      var n, r;
      return (
        m(
          t == null || (n = t.live_video_advertiser_details) == null
            ? void 0
            : n.is_lva_toggle_on,
          t == null || (r = t.live_video_advertiser_details) == null
            ? void 0
            : r.should_default_toggle_on_from_model,
          !0,
          !1,
        ) && e()
      );
    }
    function _(e) {
      var t;
      return (
        p(e) &&
        (e == null || (t = e.live_video_advertiser_details) == null
          ? void 0
          : t.should_default_current_live) === !0
      );
    }
    function f(e) {
      var t;
      return (
        p(e) &&
        (e == null || (t = e.live_video_advertiser_details) == null
          ? void 0
          : t.should_default_scheduled_live) === !0
      );
    }
    function g(t, n, a, i, l, s) {
      if ((s === void 0 && (s = !1), !r("isTruthy")(n) || !r("isTruthy")(a)))
        return !1;
      var u = r("isTruthy")(i) || (r("isTruthy")(s) && e()),
        c = r("DateTime").fromISOString(n, t).toDate().valueOf(),
        d = r("DateTime").fromISOString(a, t).toDate().valueOf(),
        m = d - c,
        p = l
          ? o("AdsUEditorLiveVideoAdsConstants")
              .IG_LVA_OPTIMIZED_SETTINGS_DURATION_HOUR *
            o("AdsUEditorLiveVideoAdsConstants").MS_PER_HOUR
          : o("AdsUEditorLiveVideoAdsConstants")
              .FB_LVA_OPTIMIZED_SETTINGS_DURATION_HOUR *
            o("AdsUEditorLiveVideoAdsConstants").MS_PER_HOUR;
      return u && m <= p;
    }
    function h() {
      return r("gkx")("19316");
    }
    function y() {
      return r("gkx")("20002");
    }
    function C() {
      return r("gkx")("894");
    }
    function b() {
      return C() === !1 ? !1 : r("justknobx")._("5215");
    }
    function v() {
      return C() === !1 ? !1 : r("gkx")("20535");
    }
    function S() {
      return C() === !1 ? !1 : r("gkx")("20545");
    }
    function R() {
      return C() === !1 ? !1 : r("gkx")("19085");
    }
    function L() {
      return C() === !1 ? !1 : r("gkx")("20556");
    }
    function E(e) {
      return C() === !1 ? !1 : e ? r("gkx")("15443") : r("gkx")("15656");
    }
    function k() {
      return r("gkx")("12215");
    }
    function I() {
      return r("gkx")("15480");
    }
    function T() {
      return r("gkx")("6144");
    }
    function D(e, t, n) {
      var o, a;
      if (
        (n === void 0 && (n = []),
        t != null ||
          n.some(function (e) {
            return N(e.destination_type);
          }))
      )
        return !0;
      var i =
        (o =
          e == null || (a = e.live_video_advertiser_details) == null
            ? void 0
            : a.lva_default_budget) != null
          ? o
          : 0;
      return i === 0 ? !1 : r("gkx")("19966");
    }
    function x(e) {
      var t,
        n,
        r =
          (t =
            e == null || (n = e.live_video_advertiser_details) == null
              ? void 0
              : n.lva_default_budget) != null
            ? t
            : 0;
      if (r === 0) {
        var a, i;
        return Math.round(
          o("AdsZeroOutcomeBudgetDefaultUtils").convertUSDToAccountCurrency(
            (a = e == null ? void 0 : e.account_currency_ratio_to_usd) != null
              ? a
              : 1,
            o("AdsUEditorLiveVideoAdsConstants")
              .LVA_OPTIMIZED_SETTINGS_BUDGET_DEFAULT,
            (i = e == null ? void 0 : e.currency) != null ? i : "USD",
          ),
        );
      } else return r;
    }
    function $(e, t) {
      var n;
      return !o(
        "AdsCampaignGroupLVACardUtils",
      ).isEligibleForCampaignGroupLVACard() || t == null
        ? r("AdsCampaignRecordAccessors").live_video_ad_campaign_config.delete(
            e,
          )
        : ((n = e.live_video_ad_campaign_config) == null
              ? void 0
              : n.live_video_ad_type) != null && t === "FACEBOOK"
          ? r(
              "AdsCampaignRecordAccessors",
            ).live_video_ad_campaign_config.live_video_ad_type.set(
              "CURRENT_LIVE",
              e,
            )
          : r(
              "AdsCampaignRecordAccessors",
            ).live_video_ad_campaign_config.delete(e);
    }
    function P() {
      return r("qex")._("5308") === !0;
    }
    function N(e) {
      return e === r("AdCampaignDestination").INSTAGRAM_LIVE;
    }
    function M(e) {
      return e ? r("qex")._("4451") === !0 : r("qex")._("5600") === !0;
    }
    ((l.isSLVAEligible = e),
      (l.isIGLvaMaxScheduleDurationEnabled = s),
      (l.shouldSilenceDurationTooShortForDailyBudgetErrorForLvaAA = u),
      (l.isLiveVideoGuidanceEnabled = c),
      (l.shouldEnableLVAOptimizedSettings = d),
      (l.shouldApplyLVAOptimizedSettings = m),
      (l.shouldDefaultLVAToggleOnForSLVA = p),
      (l.shouldDefaultCurrentLiveToggleOnForSLVA = _),
      (l.shouldDefaultScheduledLiveToggleOnForSLVA = f),
      (l.isSettingOptimizedForLVA = g),
      (l.getIsInLiveVideoAdSuggestedPostExperiment = h),
      (l.getIsInLiveVideoAdPostDefaultingExperiment = y),
      (l.getIsInstagramLiveVideoEnabled = C),
      (l.getIsRepliesOptimizationIgLvaEnabled = b),
      (l.getIsPostEngagementGoalIgLvaEnabled = v),
      (l.getIsRoasGoalIgLvaEnabled = S),
      (l.getIsCustomizableCTAIgLvaEnabled = R),
      (l.getIsCtdPoGoalIgLvaEnabled = L),
      (l.getShouldDefaultOcPurchaseOptimizationGoalIgLva = E),
      (l.getIsInstagramLiveVideoEnabledWithExposureLogging = k),
      (l.getIsInstagramLiveVideoPartnershipAdsEnabled = I),
      (l.getIsLVAAdAccountL28d = T),
      (l.getShouldDefaultBudgetInL3 = D),
      (l.getLVADefaultBudget = x),
      (l.maybeSetLiveVideoAdType = $),
      (l.isWasLiveAndLiveClipPillEnabled = P),
      (l.isInstagramLiveVideoAd = N),
      (l.shouldDefaultLiveVideoConversionLocation = M));
  },
  98,
);
