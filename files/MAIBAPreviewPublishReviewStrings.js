__d(
  "MAIBAPreviewPublishReviewStrings",
  ["fbt", "actionabilityProcessorShared", "fbs"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      e === void 0 && (e = !1);
      var t = e
          ? { after: r("fbs")._(/*BTDS*/ ""), before: r("fbs")._(/*BTDS*/ "") }
          : { after: r("fbs")._(/*BTDS*/ ""), before: r("fbs")._(/*BTDS*/ "") },
        n = t.after,
        o = t.before;
      return {
        after: n.toString(),
        before: o.toString(),
        field: r("fbs")._(/*BTDS*/ "").toString(),
      };
    }
    function u(e) {
      return e === "CAMPAIGN_BUDGET"
        ? String(s._(/*BTDS*/ ""))
        : e === "CAMPAIGN_GROUP_BUDGET"
          ? String(s._(/*BTDS*/ ""))
          : e === "CAMPAIGN_FLEX_BUDGET"
            ? String(s._(/*BTDS*/ ""))
            : null;
    }
    function c() {
      return String(s._(/*BTDS*/ ""));
    }
    function d(e, t) {
      return String(
        e === "CLICK_THROUGH"
          ? s._(/*BTDS*/ "", [s._param("number of days", t, [0])])
          : e === "VIEW_THROUGH"
            ? s._(/*BTDS*/ "", [s._param("number of days", t, [0])])
            : s._(/*BTDS*/ "", [s._param("number of days", t, [0])]),
      );
    }
    function m(e) {
      return String(s._(/*BTDS*/ "", [s._param("identity ID", e)]));
    }
    function p() {
      return String(s._(/*BTDS*/ ""));
    }
    function _(e) {
      return String(e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""));
    }
    function f() {
      return String(s._(/*BTDS*/ ""));
    }
    function g(e, t) {
      return String(
        s._(/*BTDS*/ "", [
          s._param("object name", e),
          s._param("object ID", t),
        ]),
      );
    }
    function h() {
      return String(s._(/*BTDS*/ ""));
    }
    function y(e, t) {
      return String(
        e === ""
          ? s._(/*BTDS*/ "", [s._param("source ad object ID", t)])
          : s._(/*BTDS*/ "", [
              s._param("source ad object name", e),
              s._param("source ad object ID", t),
            ]),
      );
    }
    function C(e) {
      return String(s._(/*BTDS*/ "", [s._plural(e, "number of ads")]));
    }
    function b(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number of ad objects")]);
    }
    function v(e) {
      return String(s._(/*BTDS*/ "", [s._plural(e, "number")]));
    }
    function S(e) {
      return String(s._(/*BTDS*/ "", [s._plural(e, "number")]));
    }
    function R() {
      return String(s._(/*BTDS*/ ""));
    }
    function L() {
      return String(s._(/*BTDS*/ ""));
    }
    function E(e) {
      return String(s._(/*BTDS*/ "", [s._param("item number", e)]));
    }
    function k(e, t, n) {
      var r = o("actionabilityProcessorShared").getAdObjectLevelLabel(e);
      return String(
        t !== ""
          ? s._(/*BTDS*/ "", [
              s._param("ad object name", t),
              s._param("ad object level", r),
            ])
          : n !== ""
            ? s._(/*BTDS*/ "", [
                s._param("ad object ID", n),
                s._param("ad object level", r),
              ])
            : r,
      );
    }
    function I() {
      return String(s._(/*BTDS*/ ""));
    }
    function T(e) {
      return String(s._(/*BTDS*/ "", [s._param("range number", e)]));
    }
    function D() {
      return String(s._(/*BTDS*/ ""));
    }
    function x() {
      return String(s._(/*BTDS*/ ""));
    }
    function $() {
      return String(s._(/*BTDS*/ ""));
    }
    function P() {
      return String(s._(/*BTDS*/ ""));
    }
    function N() {
      return String(s._(/*BTDS*/ ""));
    }
    function M() {
      return String(s._(/*BTDS*/ ""));
    }
    function w() {
      return String(s._(/*BTDS*/ ""));
    }
    function A(e) {
      return String(
        s._(/*BTDS*/ "", [s._plural(e, "A/B test duration in days")]),
      );
    }
    function F(e) {
      return String(s._(/*BTDS*/ "", [s._param("daily budget amount", e)]));
    }
    ((l.getReviewTableHeaders = e),
      (l.getBudgetStrategyLabel = u),
      (l.getEmptyAttributionSettingLabel = c),
      (l.getAttributionWindowLabel = d),
      (l.getRegionalIdentityIDLabel = m),
      (l.getAgeSuggestionLabel = p),
      (l.getBooleanLabel = _),
      (l.getPreviewPublishEnrichmentUnavailableMessage = f),
      (l.formatAdObjectIdentity = g),
      (l.getCampaignLabel = h),
      (l.formatDuplicateSourceCaption = y),
      (l.formatAdCountSummary = C),
      (l.getPreviewPublishSpendRiskAcknowledgmentLabel = b),
      (l.formatCreativeAssetSummary = v),
      (l.formatCreativeTextSummary = S),
      (l.getCreativeImageAlt = R),
      (l.getExplicitNullLabel = L),
      (l.formatListItemLabel = E),
      (l.formatAdObjectCaption = k),
      (l.getRotationAdsLabel = I),
      (l.formatRotationRangeLabel = T),
      (l.getABTestDetailsCaption = D),
      (l.getABTestStudyNameLabel = x),
      (l.getABTestSourceNameLabel = $),
      (l.getABTestVariantNameLabel = P),
      (l.getABTestObjectiveMetricLabel = N),
      (l.getABTestDurationLabel = M),
      (l.getABTestBudgetLabel = w),
      (l.formatABTestDuration = A),
      (l.formatABTestDailyBudget = F));
  },
  226,
);
