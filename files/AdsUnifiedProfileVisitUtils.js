__d(
  "AdsUnifiedProfileVisitUtils",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInstagramProfileUtils",
    "AdsInterfacesLogger",
    "AdsManagerIGLoginUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPromotedObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "UnifiedProfileVisitStrings",
    "gkx",
    "isUPVEnabledForIGLoginUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { cta: "VISIT_PROFILE" };
    function s(e) {
      return !e || r("isUPVEnabledForIGLoginUser")();
    }
    function u(e) {
      return (
        o("AdsManagerIGLoginUtils").getIsIGLogin(e) &&
        r("isUPVEnabledForIGLoginUser")()
      );
    }
    function c(e, t) {
      return (
        (e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
          e === r("AdsAPIObjectives").LINK_CLICKS) &&
        t === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE
      );
    }
    function d(e, t, n) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS &&
        t === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE &&
        n === r("AdsAPIOptimizationGoals").PROFILE_VISIT
      );
    }
    function m(e, t, n) {
      return (
        c(e, t) &&
        n === r("AdsAPIOptimizationGoals").PROFILE_AND_PAGE_ENGAGEMENT
      );
    }
    function p(e, t) {
      return c(e, t);
    }
    function _(e, t, n, o) {
      if (n === r("AdCampaignDestination").FACEBOOK_PAGE) return !1;
      var a = c(e, t) && r("gkx")("16212"),
        i = d(e, t, o);
      return a || i;
    }
    function f(e, t) {
      return (
        o(
          "AdsInstagramProfileUtils",
        ).getIsInstagramProfileConversionUnderTrafficObjective(e, t) || p(e, t)
      );
    }
    function g(e, t) {
      return f(e, t);
    }
    function h(e, t, n, r) {
      return !(!p(e, t) || b(n) || M(e, t, r) || w(e, t, r));
    }
    function y(e, t, n, o, a) {
      if (!f(e, t)) return !1;
      if (C(n)) {
        if (o !== "feed" && o !== "story" && o !== "facebook_reels") return !0;
        if (
          n === r("AdCampaignDestination").FACEBOOK_PAGE &&
          a &&
          a.length === 1 &&
          a[0] !== r("AdsAPIDevicePlatform").MOBILE
        )
          return !0;
      }
      return !1;
    }
    function C(e) {
      return (
        e === r("AdCampaignDestination").FACEBOOK_PAGE ||
        e === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
      );
    }
    function b(e) {
      return (
        e === r("AdCampaignDestination").INSTAGRAM_PROFILE ||
        e === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
      );
    }
    function v(e, t, n) {
      return (
        (o(
          "AdsInstagramProfileUtils",
        ).getIsInstagramProfileConversionUnderTrafficObjective(e, null, n) ||
          p(e, t)) &&
        b(n)
      );
    }
    function S(e, t, n) {
      return p(e, t) && C(n);
    }
    function R(e) {
      return "http://fb.com/" + e;
    }
    function L(e) {
      switch (e) {
        case r("AdCampaignDestination").INSTAGRAM_PROFILE:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createIGProfileVisitTrafficReason();
        case r("AdCampaignDestination").FACEBOOK_PAGE:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createFBPageVisitTrafficReason();
        case r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE:
          return o(
            "AdsPlacementIneligibilityReason",
          ).createIGProfileAndFBPageVisitTrafficReason();
        default:
          return o("AdsPlacementIneligibilityReason").createGenericReason();
      }
    }
    function E(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes")
          .UNIFIED_PROFILE_VISIT_DESTINATION
      );
    }
    function k(e) {
      for (var t = 0; t < e.length; t++)
        if (e[t].name === "VISIT_PROFILE") {
          var n = I(e[t]);
          e[t] = babelHelpers.extends({}, e[t], { text: n });
        }
      return e;
    }
    function I(e) {
      var t = e.objectives.some(function (e) {
        return (
          e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
        );
      });
      return t
        ? o("UnifiedProfileVisitStrings").VISIT_FACEBOOK_PAGE.toString()
        : o("UnifiedProfileVisitStrings").VISIT_PAGE.toString();
    }
    function T(e, t) {
      return (
        p(e.objective, e.promotedObjectType) &&
        e.destinationType ===
          r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE &&
        t === "DESKTOP_FEED_STANDARD"
      );
    }
    function D() {
      return r("gkx")("3074") || r("gkx")("2790");
    }
    function x(e, t) {
      var n,
        o = r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE;
      return (
        e.isLoading() || !e.hasValueWithoutError() || !e.getValue()
          ? (o = r("AdCampaignDestination").FACEBOOK_PAGE)
          : t === !0
            ? (o = r("AdCampaignDestination").INSTAGRAM_PROFILE)
            : D() || (o = r("AdCampaignDestination").INSTAGRAM_PROFILE),
        r("AdsInterfacesLogger").log({
          eventName: "unified_pv_destination_defaulting",
          data: ((n = {}), (n.campaign_destination_type = o), n),
        }),
        o
      );
    }
    function $(e) {
      return (
        e === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE ||
        e === r("AdCampaignDestination").INSTAGRAM_PROFILE ||
        e === r("AdCampaignDestination").FACEBOOK_PAGE
      );
    }
    function P(e) {
      var t = e.campaign,
        n = o("AdsAPICampaignRecordUtils").getDestinationType(t);
      return (
        n === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
      );
    }
    function N(e) {
      return (
        e === r("AdsAPIOptimizationGoals").PROFILE_VISIT ||
        e === r("AdsAPIOptimizationGoals").PROFILE_AND_PAGE_ENGAGEMENT
      );
    }
    function M(e, t, n) {
      var r = d(e, t, n);
      return !!r;
    }
    function w(e, t, n) {
      return m(e, t, n);
    }
    ((l.UNIFIED_PROFILE_VISITS_FB_EXISTING_POST_CTA_DEFAULTING = e),
      (l.getIsEligibleForUnifiedProfileVisits = s),
      (l.isUPVProfileAndPageEngagementEnabledForIGLogin = u),
      (l.getIsUnifiedProfileVisitsConversionUnderODAXObjective = p),
      (l.getIsUnifiedProfileVisitsConversionAndPAEligible = _),
      (l.getIsProfileVisitsConversion = f),
      (l.getIsPositionAlwaysDisabledForProfileVisits = g),
      (l.getIsIGPositionCondtionallyDisabledForUnifiedProfileVisits = h),
      (l.getIsFBPositionConditionallyDisabledForProfileVisits = y),
      (l.getUnifiedProfileVisitsDestinationContainsFB = C),
      (l.getUnifiedProfileVisitsDestinationContainsIG = b),
      (l.getIsProfileVisitsWithIGDestination = v),
      (l.getIsUnifiedProfileVisitsDestinationWithFBDestination = S),
      (l.getExternalLinkForFacebookPageVisit = R),
      (l.getUnifiedProfileVisitsAdsPlacementIneligibilityReason = L),
      (l.isMultiDestinationProfileVisitsFromAdSpec = E),
      (l.updateCTATypesForUnifiedProfileVisits = k),
      (l.shouldDisablePlacementForUnifiedProfileVisitsMultiDestination = T),
      (l.getShouldOptIntoMultiDestination = D),
      (l.getDefaultSelectedDestination = x),
      (l.getIsUnifiedProfileVisitsDestination = $),
      (l.getShouldShowSecondCTAField = P),
      (l.isUnifiedProfileVisitsGoal = N));
  },
  98,
);
