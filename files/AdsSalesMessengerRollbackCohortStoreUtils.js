__d(
  "AdsSalesMessengerRollbackCohortStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsCFFindEligiblePageStoreUtils",
    "AdsPromotedObjectTypes",
    "CTMAdsOptimizationStoreUtils",
    "CallOptimizationGoalGating",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("134") === !0 : r("qex")._("168") === !0
      );
    }
    function s(e, t) {
      var n =
        t != null ? o("AdsCFFindEligiblePageStoreUtils").getPage(t) : null;
      return o("CallOptimizationGoalGating").shouldDefaultForCallOptimization(
        e,
        n,
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdCampaignDestination").MESSENGER,
        [],
      );
    }
    function u(e, t) {
      return (
        !o(
          "CTMAdsOptimizationStoreUtils",
        ).getIsPhase2PurchaseConversionsOptimizationEligible(t) && !s(e, t)
      );
    }
    function c(t, n, r) {
      return (r === void 0 && (r = !1), u(t, n) && e(r));
    }
    function d(e, t, n) {
      return (
        n === void 0 && (n = !1),
        c(e, t, n)
          ? {
              conversion_location: r("AdsPromotedObjectTypes").PIXEL,
              source: "sales_messenger_rollback",
            }
          : null
      );
    }
    ((l.isInSalesMessengerReDefaultQE = e),
      (l.isInSalesMessengerRollbackCohort = u),
      (l.isSalesMessengerRollbackEligible = c),
      (l.maybeApplyMessengerRollback = d));
  },
  98,
);
