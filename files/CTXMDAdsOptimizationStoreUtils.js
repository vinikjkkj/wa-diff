__d(
  "CTXMDAdsOptimizationStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPageStore",
    "AdsUEditorMessagingDestinationUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i;
      if (
        (a === void 0 && (a = !1),
        !o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(n) ||
          (t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
            t !== r("AdsAPIObjectives").OUTCOME_SALES) ||
          e == null)
      )
        return !1;
      if (c(e)) return p(a);
      var l =
        e != null
          ? (i = r("AdsPageStore").getLoadObject(e)) == null
            ? void 0
            : i.getValue()
          : null;
      return (l == null ? void 0 : l.is_page_in_th_or_vn) === !0
        ? t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
          ? _(a)
          : f(a)
        : !1;
    }
    function s(e, t, n, a) {
      return (
        a === void 0 && (a = !1),
        !o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(n) ||
        (t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          t !== r("AdsAPIObjectives").OUTCOME_LEADS) ||
        e == null
          ? !1
          : t === r("AdsAPIObjectives").OUTCOME_LEADS
            ? d(e)
            : d(e)
              ? p(a)
              : !1
      );
    }
    function u(e) {
      return e == null
        ? null
        : o(
              "AdsUEditorMessagingDestinationUtils",
            ).isMultiDestinationWithWhatsApp(e)
          ? r("AdsAPIOptimizationGoals").CONVERSATIONS
          : e === r("AdCampaignDestination").MESSENGER ||
              e ===
                r("AdCampaignDestination")
                  .MESSAGING_INSTAGRAM_DIRECT_MESSENGER ||
              e === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
            ? r("AdsAPIOptimizationGoals").LEAD_GENERATION
            : null;
    }
    function c(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n == null ? void 0 : n.is_ctxmd_po_eligible) === !0;
    }
    function d(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (n == null ? void 0 : n.is_ctxmd_lo_eligible) === !0;
    }
    function m(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (
        (n == null ? void 0 : n.is_ctxmd_lo_eligible) === !0 &&
        n.connected_instagram_account != null
      );
    }
    function p(e) {
      return e ? r("gkx")("8545") : r("gkx")("8813");
    }
    function _(e) {
      return e ? r("gkx")("25346") : r("gkx")("25533");
    }
    function f(e) {
      return e ? r("qex")._("3892") === !0 : r("qex")._("3903") === !0;
    }
    ((l.getIsCTXMDPurchaseOptimizationGoalEligible = e),
      (l.getIsCTXMDLeadsOptimizationGoalEligible = s),
      (l.getDefaultOptimizationGoalForCTXMDLeadsDestination = u),
      (l.getIsCTXMDLOEligible = d),
      (l.getIsCTXMDLeadsMultiDestinationAvailable = m));
  },
  98,
);
