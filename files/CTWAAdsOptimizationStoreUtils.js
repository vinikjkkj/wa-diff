__d(
  "CTWAAdsOptimizationStoreUtils",
  [
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsPageStore",
    "ClickToWhatsAppAdsDetails",
    "ClickToWhatsAppAdsLoggerUtils",
    "gkx",
    "qex",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      r("vulture")("Hx_7ASq6BmdOJf7U1wN8TESOm9w=");
      var o =
        n == null
          ? void 0
          : n.is_ctwa_purchase_optimization_dfo_everywhere_zero_outcome_eligible;
      if (o !== !0) return (r("vulture")("Hx_7ASq6BmdOJf7U1wN8TESOm9w="), !1);
      var a = r("gkx")("17920"),
        i =
          (n == null
            ? void 0
            : n.is_ctwa_purchase_conversions_optimization_goal_eligible) === !0;
      if (i && !a) return !1;
      var l = r("qex")._("860");
      return (r("vulture")("Hx_7ASq6BmdOJf7U1wN8TESOm9w="), l === !0);
    }
    function s(e, t) {
      var n,
        o,
        a =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      if (
        (r("AdsInterfacesLogger").logOnce({
          eventName: "ctwa_purchase_optimization_goal_eligibility_check",
          data: {
            page_id: e != null ? e : "",
            sub_event: "start",
            is_enabled:
              (o =
                a == null
                  ? void 0
                  : a.is_ctwa_purchase_conversions_optimization_goal_eligible) !=
              null
                ? o
                : !1,
          },
        }),
        r("gkx")("4930"))
      )
        return (
          r("AdsInterfacesLogger").logOnce({
            eventName: "ctwa_purchase_optimization_goal_eligibility_check",
            data: {
              page_id: e != null ? e : "",
              sub_event: "gk_override_eligible",
              is_eligible_gk: !0,
            },
          }),
          !0
        );
      if (
        (a == null
          ? void 0
          : a.is_ctwa_purchase_conversions_optimization_goal_eligible) !== !0
      )
        return (
          r("AdsInterfacesLogger").logOnce({
            eventName: "ctwa_purchase_optimization_goal_eligibility_check",
            data: {
              page_id: e != null ? e : "",
              sub_event: "ineligible",
              is_eligible_gk: !1,
            },
          }),
          !1
        );
      var i = t ? r("gkx")("10069") : r("gkx")("15248");
      return (
        r("AdsInterfacesLogger").logOnce({
          eventName: "ctwa_purchase_optimization_goal_eligibility_check",
          data: {
            page_id: e != null ? e : "",
            sub_event: "page_eligible",
            is_eligible_gk: i,
          },
        }),
        i
      );
    }
    function u(e, t) {
      var n,
        o,
        a =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      if (
        (r("AdsInterfacesLogger").logOnce({
          eventName: "ctwa_lead_optimization_goal_eligibility_check",
          data: {
            page_id: e != null ? e : "",
            sub_event: "start",
            is_enabled:
              (o =
                a == null
                  ? void 0
                  : a.is_ctwa_lead_optimization_goal_eligible) != null
                ? o
                : !1,
          },
        }),
        (a == null ? void 0 : a.is_ctwa_lead_optimization_goal_eligible) === !0)
      ) {
        var i = t ? r("gkx")("19464") : r("gkx")("19465");
        return (
          r("AdsInterfacesLogger").logOnce({
            eventName: "ctwa_lead_optimization_goal_eligibility_check",
            data: {
              page_id: e != null ? e : "",
              sub_event: "page_eligible",
              is_eligible_gk: i,
            },
          }),
          i
        );
      }
      return c(e, t)
        ? (r("AdsInterfacesLogger").logOnce({
            eventName: "ctwa_lead_optimization_goal_eligibility_check",
            data: {
              page_id: e != null ? e : "",
              sub_event: "important_labels_flows_eligible",
              is_eligible_gk: !0,
            },
          }),
          !0)
        : d(e, t)
          ? (r("AdsInterfacesLogger").logOnce({
              eventName: "ctwa_lead_optimization_goal_eligibility_check",
              data: {
                page_id: e != null ? e : "",
                sub_event: "expanded_1+_lead_eligible",
                is_eligible_gk: !0,
              },
            }),
            !0)
          : (r("AdsInterfacesLogger").logOnce({
              eventName: "ctwa_lead_optimization_goal_eligibility_check",
              data: {
                page_id: e != null ? e : "",
                sub_event: "ineligible",
                is_eligible_gk: !1,
              },
            }),
            !1);
    }
    function c(e, t) {
      var n,
        o =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      return (o == null
        ? void 0
        : o.is_ctwa_lead_optimization_goal_eligible_with_important_labels_flows) ===
        !0
        ? t
          ? r("gkx")("19464")
          : r("gkx")("19465")
        : !1;
    }
    function d(e, t) {
      var n,
        o =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      return (o == null
        ? void 0
        : o.is_ctwa_lead_optimization_eligible_with_one_lead) === !0
        ? t
          ? r("gkx")("19464")
          : r("gkx")("19465")
        : !1;
    }
    function m(e, t, n, a, i) {
      var l =
        a === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
          ? "ctwa_purchase_optimization_defaulting_client_check"
          : a === r("AdsAPIOptimizationGoals").LEAD_GENERATION
            ? "ctwa_lead_optimization_defaulting_client_check"
            : null;
      return (
        l != null &&
          o(
            "ClickToWhatsAppAdsLoggerUtils",
          ).logClickToWhatsAppAdsUnifiedEventDetails(
            new (r("ClickToWhatsAppAdsDetails"))({
              event: l,
              eventInfo: i,
              pageID: e,
              adAccountID: t == null ? void 0 : t.account_id,
              objective: o(
                "ClickToWhatsAppAdsLoggerUtils",
              ).getAdproObjectiveFromApiObjective(n),
              productFlow: "quick_create_ads_manager",
            }),
          ),
        i
      );
    }
    function p(e, t) {
      var n, o;
      if (e == null || t == null) return !1;
      var a =
          (n = r("AdsPageStore").getLoadObject(e)) == null
            ? void 0
            : n.getValue(),
        i =
          a == null || (o = a.whatsapp_numbers_info) == null
            ? void 0
            : o.find(function (e) {
                return e.page_whatsapp_number_id === t;
              });
      return (i == null ? void 0 : i.whatsapp_smb_device) === "CAPI";
    }
    function _(e, t, n) {
      var o = {
        isRequired: !1,
        optimizationGoal: null,
        pageWhatsAppNumberID: null,
      };
      if (r("gkx")("23590") !== !0) return o;
      var a =
          n == null ||
          n === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
        i = n == null || n === r("AdsAPIOptimizationGoals").LEAD_GENERATION;
      return a && s(e, !1) && r("qex")._("899") === !0
        ? {
            isRequired: !0,
            optimizationGoal: r("AdsAPIOptimizationGoals")
              .MESSAGING_PURCHASE_CONVERSION,
            pageWhatsAppNumberID: t,
          }
        : i && u(e, !1) && r("qex")._("4077") === !0
          ? {
              isRequired: !0,
              optimizationGoal: r("AdsAPIOptimizationGoals").LEAD_GENERATION,
              pageWhatsAppNumberID: t,
            }
          : o;
    }
    ((l.getIsCTWAPurchaseOptimizationDFOEverywhereZeroOutcomeEligible = e),
      (l.getIsCTWAPurchaseConversionsOptimizationGoalEligible = s),
      (l.getIsCTWALeadOptimizationGoalEligible = u),
      (l.logCTWADFODefaultingEvent = m),
      (l.getIsWhatsAppNumberCloudAPI = p),
      (l.getCTWADataSharingTooltipStatus = _));
  },
  98,
);
