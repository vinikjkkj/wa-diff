__d(
  "SMBAdOutcomesExperimentUtils",
  ["LWICometProductUtils", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = "meta_gen_icebreakers_test_group",
      u = [
        "sign up",
        "schedule",
        "appointment",
        "signup",
        "lead",
        "leads",
        "free trial",
        "consultation",
        "get started",
        "join",
        "email",
        "contact",
        "book",
      ];
    function c() {
      return r("gkx")("21034");
    }
    function d() {
      return r("gkx")("20935");
    }
    function m() {
      return c();
    }
    function p() {
      return c();
    }
    function _(e) {
      return (e === void 0 && (e = null), c() || e === "GET_MULTI_MESSAGES");
    }
    function f() {
      return c();
    }
    function g() {
      return c();
    }
    function h(e) {
      return e && r("qex")._("3122") === !0;
    }
    function y() {
      var e;
      return (e = r("qex")._("4629")) != null ? e : !1;
    }
    function C(e) {
      return e === "BOOSTED_POST";
    }
    function b(e) {
      return e === "BOOSTED_CONSOLIDATED_PRODUCT" || e === "BOOSTED_POST";
    }
    function v(e) {
      return [
        "LINK_CLICKS",
        "WEBSITE_CONVERSIONS",
        "LEAD_GENERATION",
        "PRODUCT_CATALOG_SALES",
        "OUTCOME_SALES",
      ].includes(e);
    }
    function S(e, t) {
      var n = b(t),
        o = v(e);
      return !n || o
        ? !1
        : r("justknobx")._("2296")
          ? !0
          : r("gkx")("18168") !== !1;
    }
    function R(e) {
      return v(e);
    }
    function L(e, t) {
      return (
        t === void 0 && (t = !1),
        e == null || e === ""
          ? !1
          : t === !0
            ? r("qex")._("2769") === !0
            : r("qex")._("2770") === !0
      );
    }
    function E(e) {
      return (
        e === void 0 && (e = !1),
        e === !0 ? r("qex")._("5513") === !0 : r("qex")._("5514") === !0
      );
    }
    function k(e) {
      return e === "LEAD_GENERATION";
    }
    function I(e) {
      return e === "OUTCOME_LEADS";
    }
    function T(e) {
      return e === "MESSAGES";
    }
    function D(e) {
      return e === "WEBSITE_CONVERSIONS";
    }
    function x(e) {
      return e === 15;
    }
    function $(e, t, n) {
      return n != null && n > 0 && t === "BOOSTED_CONSOLIDATED_PRODUCT" && D(e);
    }
    function P(e, t, n) {
      return !(
        n == null ||
        n <= 0 ||
        t !== "BOOSTED_CONSOLIDATED_PRODUCT" ||
        e !== "PRODUCT_CATALOG_SALES"
      );
    }
    function N(e, t, n) {
      return n != null && n > 0 && t === "BOOSTED_INSTAGRAM_MEDIA" && D(e);
    }
    function M() {
      return !1;
    }
    function w(e, t, n) {
      return (
        t === void 0 && (t = !1),
        (!c() && !d()) ||
        e !== "BOOSTED_INSTAGRAM_MEDIA" ||
        n == null ||
        (n != null && !n.includes("GET_PURCHASES"))
          ? !1
          : t === !0
            ? r("qex")._("251") === !0
            : r("qex")._("334") === !0
      );
    }
    function A(e) {
      return e !== "BOOSTED_INSTAGRAM_MEDIA" ? !1 : r("gkx")("11835") === !0;
    }
    function F(e, t) {
      return (
        e === "BOOSTED_INSTAGRAM_MEDIA" &&
        t.some(function (e) {
          return e.goal === "GET_POST_ENGAGEMENT";
        })
      );
    }
    function O(e, t) {
      return t === "BOOSTED_INSTAGRAM_MEDIA" && e === "GET_POST_ENGAGEMENT";
    }
    function B(e, t, n) {
      return e === "GET_MORE_VISITS"
        ? t === "OUTCOME_ENGAGEMENT" || n === "VISIT_PROFILE"
        : !1;
    }
    function W(e) {
      return (e === void 0 && (e = !0), e ? !1 : r("qex")._("3350") === !0);
    }
    function q() {
      return r("gkx")("4855");
    }
    function U() {
      return r("gkx")("19481");
    }
    function V(e) {
      return (
        e === void 0 && (e = !1),
        !c() && !d()
          ? !1
          : e === !0
            ? r("qex")._("3358") === !0
            : r("qex")._("3359") === !0
      );
    }
    function H() {
      var e;
      ((e = r("qex"))._("4007"),
        e._("4107"),
        e._("4211"),
        e._("4215"),
        e._("4216"),
        e._("4217"),
        e._("4306"),
        e._("4337"),
        e._("126"),
        e._("1438"),
        e._("1529"));
    }
    function G() {
      var e;
      ((e = r("qex"))._("2411"),
        e._("2412"),
        e._("2413"),
        e._("2414"),
        e._("2415"),
        e._("2418"),
        e._("2419"));
    }
    function z() {
      var e;
      ((e = r("qex"))._("2257"),
        e._("2291"),
        e._("2371"),
        e._("2479"),
        e._("2480"),
        e._("2554"),
        e._("2556"),
        e._("2558"),
        e._("2559"));
    }
    function j(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("qex")._("3085") === !0 : r("qex")._("3313") === !0
      );
    }
    function K(e, t, n) {
      return $(e, t, n) ? j() : !1;
    }
    function Q(e, t) {
      return !(
        e !== "AUTOMATIC" ||
        (!o("LWICometProductUtils").isBCPProduct(t) &&
          !o("LWICometProductUtils").isBoostedPostProduct(t))
      );
    }
    ((l.DEFAULT_NUMBER_OF_ICEBREAKERS = e),
      (l.AI_GEN_ICEBREAKER_EXPERIMENT_VARIANT = s),
      (l.LEAD_GEN_INTENT_KEYWORDS = u),
      (l.editWelcomeMessageFAQ = m),
      (l.displayWALinkErrorNoticeAndCard = p),
      (l.shouldShowUsePostCTA = _),
      (l.shouldShowBoostAgainForAdsTab = f),
      (l.setDefaultDurationForNonContinuousCTXAds = g),
      (l.shouldEnableCTMNudge = h),
      (l.shouldEnableOpenLFOEligibility = y),
      (l.shouldClarifyAutomaticGoal = C),
      (l.shouldHidePixelSectionBasedOnObjective = S),
      (l.isObjectiveEligibleForPixel = R),
      (l.isEligibleForShopifyDataSharingUpsell = L),
      (l.isEligibleForBasil = E),
      (l.isObjectiveLeadGeneration = k),
      (l.isObjectiveOutcomeLeads = I),
      (l.isObjectiveMessages = T),
      (l.isObjectiveWebsiteConversionOrOutcomeSales = D),
      (l.isObjectiveTypeWebsiteConversionOrOutcomeSales = x),
      (l.shouldShowZeroOutcomeNoticeForWebsiteConversionOnBCP = $),
      (l.shouldShowZeroOutcomeNoticeForProductCatalogSalesOnBCP = P),
      (l.shouldShowZeroOutcomeNoticeForWebsiteConversionOnBIG = N),
      (l.shouldCombineGoalAndCTASection = M),
      (l.shouldSupportWebConvOnBoostIGMedia = w),
      (l.isEligibleForPostEngagementOnBoostedIGMedia = A),
      (l.isEligibleForPostEngagementOnBoostIGMedia = F),
      (l.isEligibleForPEOnBoostedIG = O),
      (l.isEligibleForProfileVisit = B),
      (l.shouldDisablePageLikes = W),
      (l.getIsEmbeddedPixelCreationEnabled = q),
      (l.getIsCatalogSalesFixEnabled = U),
      (l.shouldShowPixelIntegrationManagement = V),
      (l.getEnteringLWICreationQEParams = H),
      (l.getEnteringLWICreationActingAccountQEParams = G),
      (l.getEnteringLWICreationHasPixelQEParams = z),
      (l.isEligibleForBCPPerformanceFix = j),
      (l.isOneClickZeroOutcomeEnabledForBCPWebsiteConversion = K),
      (l.isInferredGoalCTAFixEnabled = Q));
  },
  98,
);
