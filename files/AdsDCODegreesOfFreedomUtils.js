__d(
  "AdsDCODegreesOfFreedomUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsODAXUtils",
    "ApiDynamicCreativeOptimizationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["bodies", "titles", "descriptions", "images"],
      s = ["bodies"];
    function u(t) {
      if (!o("AdsAssetFeedUtils").isDofAdgroupFromSpec(t)) return !1;
      var n = o("AdsChildAttachmentsUtils").isStaticCarouselAd(t) ? s : e;
      return !n.some(function (e) {
        return o("AdsAssetFeedUtils").hasMultipleAssets(t, e);
      });
    }
    function c(e) {
      if (o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e))
        return !o("AdsAdgroupUtils").isPoliticalAd(e);
      if (!o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)) return !1;
      var t = o("AdsAssetFeedUtils").hasCarouselFormat(e),
        n = o("AdsAdgroupUtils").isPoliticalAd(e);
      return !(t || n);
    }
    function d(e) {
      return e === r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM;
    }
    function m(e) {
      return e === r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP;
    }
    function p(e) {
      return d(e) || m(e);
    }
    function _(e, t) {
      var n;
      return y(
        e,
        (n = e.creative) == null || (n = n.degrees_of_freedom_spec) == null
          ? void 0
          : n.image_transformation_types,
        t,
      );
    }
    function f(e, t) {
      var n;
      return y(
        e,
        (n = e.creative) == null || (n = n.degrees_of_freedom_spec) == null
          ? void 0
          : n.stories_transformation_types,
        t,
      );
    }
    function g(e, t) {
      var n,
        r = (n = e.creative) == null ? void 0 : n.degrees_of_freedom_spec;
      return r != null && t != null ? r.degrees_of_freedom_type === t : !!r;
    }
    function h(e, t) {
      var n = o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, t);
      return [
        r("AdsAPIObjectives").LINK_CLICKS,
        r("AdsAPIObjectives").CONVERSIONS,
      ].includes(
        o("AdsODAXUtils").maybeTranslateObjective(e, n, t.optimization_goal),
      );
    }
    function y(e, t, n) {
      return g(e, "USER_ENROLLED_NON_DCO") && t != null ? t.includes(n) : !1;
    }
    function C(e) {
      return o("AdsAssetFeedUtils").isAutomaticFlowLiteAdgroup(e) || b(e);
    }
    function b(e) {
      var t, n;
      return (t =
        (n = e.creative) == null ||
        (n = n.degrees_of_freedom_spec) == null ||
        (n = n.text_transformation_types) == null
          ? void 0
          : n.includes("TEXT_LIQUIDITY")) != null
        ? t
        : !1;
    }
    ((l.isDOFAdgroupWithUniqueDOFAssets = u),
      (l.isEligibleForDegreesOfFreedom = c),
      (l.isDoFOptimizationType = p),
      (l.hasDoFImageOptimization = _),
      (l.hasDoFStoriesOptimization = f),
      (l.isSpecUsingDegreeOfFreedomSpec = g),
      (l.isObjectiveEligibleForStandardFlowTextLiquidity = h),
      (l.hasODAXSupportedDOF = C),
      (l.isTextLiquidityEnabled = b));
  },
  98,
);
