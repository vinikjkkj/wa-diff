__d(
  "CTMAdsOptimizationStoreUtils",
  ["AdsPageStore", "CtxAdvertiserQeHbtExposureFalcoEvent", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n =
        o == null
          ? void 0
          : o.is_ctm_purchase_conversions_optimization_goal_eligible) != null
        ? n
        : !1;
    }
    function s(e) {
      var t,
        n,
        o =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n =
        o == null
          ? void 0
          : o.is_ctm_purchase_optimization_dfo_everywhere_eligible) != null
        ? n
        : !1;
    }
    function u(e) {
      var t,
        n,
        o =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n =
        o == null
          ? void 0
          : o.is_ctm_purchase_optimization_dfo_everywhere_eligible_tier2) !=
        null
        ? n
        : !1;
    }
    function c(e) {
      var t,
        n,
        o,
        a =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null,
        i = a == null ? void 0 : a.ctm_purchase_eligibility_tags;
      return (i != null && i.includes("signal_based")) ||
        (i != null && i.includes("tier1")) ||
        (i != null && i.includes("post_ucd_do_signal"))
        ? !1
        : ((n = i == null ? void 0 : i.includes("tier2")) != null ? n : !1) ||
            ((o = i == null ? void 0 : i.includes("tier3")) != null ? o : !1);
    }
    function d(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      if (n == null) return !1;
      if (n.is_ctm_purchase_conversions_optimization_phase2_eligible === !0)
        return !0;
      var o =
          n == null
            ? void 0
            : n.is_ctm_purchase_optimization_model_based_defaulting_use_po_or_po_outcome_eligible,
        a =
          n == null
            ? void 0
            : n.is_ctm_purchase_optimization_model_based_defaulting_po_spending_eligible,
        i =
          n == null
            ? void 0
            : n.is_ctm_purchase_optimization_model_based_defaulting_po_outcome_eligible;
      if (o === !0 || a === !0 || i === !0) {
        var l = r("qex")._("4202") === !0,
          s = r("qex")._("4653") === !0,
          u = r("qex")._("4204") === !0;
        return (o === !0 && l) || (a === !0 && s) || (i === !0 && u);
      }
      return !1;
    }
    function m(e, t) {
      var n = r("gkx")("15923");
      if (n) {
        var o = r("gkx")("23790");
        return o
          ? e === !0
            ? r("qex")._("3874") === !0
            : r("qex")._("3877") === !0
          : e === !0
            ? r("qex")._("5278") === !0
            : r("qex")._("5279") === !0;
      } else if (e === !0) {
        var a = r("gkx")("16357");
        return (
          t != null &&
            r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
              return {
                condition: a === !0 ? "test" : "control",
                feature_name: "ctm_po_dfo_everywhere_tier2",
                hbt_name: "ctm_po_ad_account_id_bundle_2026h1",
                unit_id: t,
                unit_type: "ad_account_id",
              };
            }),
          a
        );
      } else return r("gkx")("16764");
    }
    function p(e) {
      return e === !0 ? r("qex")._("2781") === !0 : r("qex")._("2981") === !0;
    }
    function _(e) {
      var t,
        n,
        o =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null,
        a = o == null ? void 0 : o.ctm_purchase_eligibility_tags;
      return (a != null && a.includes("signal_based")) ||
        (a != null && a.includes("tier1"))
        ? !1
        : (n = a == null ? void 0 : a.includes("post_ucd_do_signal")) != null
          ? n
          : !1;
    }
    function f(e) {
      return e === !0 ? r("qex")._("1388") === !0 : r("qex")._("2160") === !0;
    }
    ((l.getIsCTMPurchaseConversionsOptimizationGoalEligible = e),
      (l.getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligible = s),
      (l.getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligibleTier2 =
        u),
      (l.getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligibleTier2And3Only =
        c),
      (l.getIsPhase2PurchaseConversionsOptimizationEligible = d),
      (l.getIsPassingCTMPurchaseOptimizationDFOEverywhereTier2QE = m),
      (l.getIsPassingCTMPurchaseOptimizationDFOEverywhereTier2And3QE = p),
      (l.getIsCTMPurchaseConversionsOptimizationGoalPostUCDDOEligible = _),
      (l.getIsPassingCTMPurchaseOptimizationPostUCDDOQE = f));
  },
  98,
);
