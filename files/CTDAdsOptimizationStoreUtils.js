__d(
  "CTDAdsOptimizationStoreUtils",
  ["AdsPageStore", "gkx", "qex"],
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
            : null,
        a =
          (n =
            o == null
              ? void 0
              : o.is_ctd_purchase_optimization_goal_eligible) != null
            ? n
            : !1;
      return (s(o), a ? r("gkx")("15078") : !1);
    }
    function s(e) {
      var t =
        e == null
          ? void 0
          : e.ctd_purchase_optimization_eligibility_expansion_universe;
      if (t != null)
        switch (t) {
          case "ctd_po_post_ucd_expansion":
            r("qex")._("2599");
            break;
          case "ctd_po_h1_26_signal_expansion":
            r("qex")._("1659");
            break;
          default:
            return;
        }
    }
    function u(e) {
      return e.is_eligible_for_ctd_sd_defaulting_md_expansion !== !0
        ? !1
        : r("qex")._("1822") === !0;
    }
    function c(e) {
      return (
        e.is_linked_ig_account_eligible_for_ctd_sd_defaulting_based_on_purchases ===
        !0
      );
    }
    ((l.getIsCTDPurchaseOptimizationGoalEligible = e),
      (l.getIsEligibleForCTDSDDefaultingMDExpansion = u),
      (l.getIsEligibleForCTDSDDefaultingBasedOnPurchases = c));
  },
  98,
);
