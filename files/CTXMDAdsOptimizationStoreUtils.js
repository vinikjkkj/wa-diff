__d(
  "CTXMDAdsOptimizationStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPageStore",
    "AdsUEditorMessagingDestinationUtils",
    "CTMAdsOptimizationStoreUtils",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i;
      a === void 0 && (a = !1);
      var l = o(
        "AdsUEditorMessagingDestinationUtils",
      ).isMultiDestinationWithWhatsApp(n);
      if (
        (!o("AdsUEditorMessagingDestinationUtils").isMessengerAndIGDirect(n) &&
          !l) ||
        (t !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          t !== r("AdsAPIObjectives").OUTCOME_SALES) ||
        e == null
      )
        return !1;
      if (l) {
        var s;
        if (r("justknobx")._("5151") !== !0) return !1;
        var u =
          e != null
            ? (s = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : s.getValue()
            : null;
        return !c(e) && (u == null ? void 0 : u.is_page_in_th_or_vn) !== !0
          ? !1
          : f(a);
      }
      if (c(e)) return !0;
      var d =
        e != null
          ? (i = r("AdsPageStore").getLoadObject(e)) == null
            ? void 0
            : i.getValue()
          : null;
      return (d == null ? void 0 : d.is_page_in_th_or_vn) === !0
        ? !0
        : o(
              "CTMAdsOptimizationStoreUtils",
            ).getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligibleTier2And3Only(
              e,
            )
          ? p(a)
          : o(
                "CTMAdsOptimizationStoreUtils",
              ).getIsCTMPurchaseConversionsOptimizationGoalPostUCDDOEligible(e)
            ? _(a)
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
          : d(e)
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
      return e ? r("qex")._("1906") === !0 : r("qex")._("1923") === !0;
    }
    function _(e) {
      return e ? r("qex")._("1985") === !0 : r("qex")._("2011") === !0;
    }
    function f(e) {
      return e ? r("gkx")("9150") : r("gkx")("10074");
    }
    ((l.getIsCTXMDPurchaseOptimizationGoalEligible = e),
      (l.getIsCTXMDLeadsOptimizationGoalEligible = s),
      (l.getDefaultOptimizationGoalForCTXMDLeadsDestination = u),
      (l.getIsCTXMDLOEligible = d),
      (l.getIsCTXMDLeadsMultiDestinationAvailable = m));
  },
  98,
);
