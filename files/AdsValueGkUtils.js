__d(
  "AdsValueGkUtils",
  [
    "AdsValueAdjustmentRuleGoalCardUtils",
    "AdsValueAdjustmentRulePersonaAPIConstants",
    "ValueRulesModalEntryPoint",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (e === void 0 && (e = !1), !0);
    }
    function s() {
      return r("gkx")("7824");
    }
    function u() {
      return r("gkx")("1457");
    }
    function c(e) {
      return (
        e === void 0 && (e = !1),
        e || u()
          ? r("AdsValueAdjustmentRulePersonaAPIConstants")
              .MAX_VAR_COLLECTION_PER_ACCOUNT_FOR_API
          : r("AdsValueAdjustmentRulePersonaAPIConstants")
              .MAX_VAR_COLLECTION_PER_ACCOUNT
      );
    }
    function d() {
      return r("gkx")("14490");
    }
    function m() {
      return r("gkx")("14761");
    }
    function p() {
      return r("gkx")("16289");
    }
    function _() {
      return r("gkx")("19004");
    }
    function f() {
      return r("gkx")("26266");
    }
    function g() {
      return r("gkx")("23756");
    }
    function h() {
      return r("gkx")("8381");
    }
    function y() {
      return r("gkx")("10346");
    }
    function C() {
      return r("gkx")("13551");
    }
    function b() {
      return r("gkx")("4616");
    }
    function v() {
      return r("gkx")("23126") ? !0 : r("gkx")("15609");
    }
    function S() {
      return !0;
    }
    function R() {
      return r("gkx")("23126");
    }
    function L(e) {
      return (e ===
        o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint.L2_NCA_GOAL ||
        e ===
          o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint
            .L2_BROAD_GOAL) &&
        (o("AdsValueAdjustmentRuleGoalCardUtils").isGoalCardVARBehaviorEnabled(
          e,
        ) ||
          R())
        ? !0
        : e ===
            o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint
              .L2_PLACEMENT ||
            e ===
              o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint
                .L2_CONVERSION_LOCATION ||
            e ===
              o("ValueRulesModalEntryPoint").ValueRulesModalEntryPoint
                .L2_AUDIENCE;
    }
    function E() {
      return r("gkx")("4785");
    }
    function k() {
      return r("gkx")("4804");
    }
    function I() {
      return r("gkx")("22029");
    }
    function T() {
      return r("gkx")("10808");
    }
    function D() {
      return I() || T();
    }
    ((l.isAccountEligibleForVAR = e),
      (l.isOmniVAREligible = s),
      (l.areEnhancementsForBidMultipliersEnabled = u),
      (l.getMaxNumRuleSets = c),
      (l.isRemoveDMAEnabled = d),
      (l.isHeuristicDefaultWeightsEnabled = m),
      (l.isPVARPersonalizedWeightsEnabled = p),
      (l.isAudienceLabelEnabledForBeta = _),
      (l.isAudienceLabelEnabledForGA = f),
      (l.isVAREligibleForVOAutobid = g),
      (l.isBidMultipliersGuidedMigrationToolEnabled = h),
      (l.isAdsValueRulesAttachDetachHistoryEnabled = y),
      (l.isAdsValueRulesWithMinRoasEnabled = C),
      (l.isSubRegionalGeoAreasEnabled = b),
      (l.isAdsValueRulesUsabilityRocksEnabled = v),
      (l.isAdsValueRulesFederatedEnabled3B = S),
      (l.isAdsValueRulesNCAVARFederatedEnabled3B = R),
      (l.isFederatedVAREntryPoint = L),
      (l.isAdsValueRulesBidPresetTiersEnabled = E),
      (l.isAdsValueRulesAudienceModalEnabled = k),
      (l.isPVARExpansionFlatListEnabled = I),
      (l.isPVARExpansionAccordionEnabled = T),
      (l.isPVARExpansionEnabled = D));
  },
  98,
);
