__d(
  "CTWAAdsOptimizationStoreUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsPageStore",
    "ClickToWhatsAppAdsDetails",
    "ClickToWhatsAppAdsLoggerUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      return (
        r("AdsInterfacesLogger").logOnce({
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
        r("gkx")("4930")
          ? (r("AdsInterfacesLogger").logOnce({
              eventName: "ctwa_purchase_optimization_goal_eligibility_check",
              data: {
                page_id: e != null ? e : "",
                sub_event: "gk_override_eligible",
                is_eligible_gk: !0,
              },
            }),
            !0)
          : (a == null
                ? void 0
                : a.is_ctwa_purchase_conversions_optimization_goal_eligible) ===
              !0
            ? s(e, t)
            : u(e, t)
              ? (r("AdsInterfacesLogger").logOnce({
                  eventName:
                    "ctwa_purchase_optimization_goal_eligibility_check",
                  data: {
                    page_id: e != null ? e : "",
                    sub_event: "group2_do_one_plus_eligible",
                    is_eligible_gk: !0,
                  },
                }),
                !0)
              : (r("AdsInterfacesLogger").logOnce({
                  eventName:
                    "ctwa_purchase_optimization_goal_eligibility_check",
                  data: {
                    page_id: e != null ? e : "",
                    sub_event: "ineligible",
                    is_eligible_gk: !1,
                  },
                }),
                !1)
      );
    }
    function s(e, t) {
      var n,
        o =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      if (
        (o == null
          ? void 0
          : o.is_ctwa_purchase_conversions_optimization_goal_eligible) !== !0
      )
        return !1;
      var a = t ? r("gkx")("10069") : r("gkx")("15248");
      return (
        r("AdsInterfacesLogger").logOnce({
          eventName: "ctwa_purchase_optimization_goal_eligibility_check",
          data: {
            page_id: e != null ? e : "",
            sub_event: "page_eligible",
            is_eligible_gk: a,
          },
        }),
        a
      );
    }
    function u(e, t) {
      var n,
        o =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      return (o == null
        ? void 0
        : o.is_ctwa_purchase_optimization_goal_eligible_with_group2_one_plus) ===
        !0
        ? t
          ? r("qex")._("2010") === !0
          : r("qex")._("2043") === !0
        : !1;
    }
    function c(e, t, n, o) {
      return (
        t === r("AdCampaignDestination").WHATSAPP &&
        n === r("AdsAPIObjectives").OUTCOME_LEADS &&
        o === r("AdsAPIOptimizationGoals").LEAD_GENERATION &&
        p(e, !1)
      );
    }
    function d(e) {
      var t,
        n =
          e != null
            ? (t = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : t.getValue()
            : null;
      return (
        (n == null ? void 0 : n.is_ctwa_lead_optimization_goal_eligible) ===
          !0 ||
        (n == null
          ? void 0
          : n.is_ctwa_lead_optimization_goal_eligible_with_important_labels_flows) ===
          !0 ||
        (n == null
          ? void 0
          : n.is_ctwa_lead_optimization_eligible_with_one_lead) === !0 ||
        _(e, !1)
      );
    }
    function m(e, t) {
      var n,
        o =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      return (o == null
        ? void 0
        : o.is_ctwa_lead_optimization_goal_eligible) !== !0 &&
        (o == null
          ? void 0
          : o.is_ctwa_lead_optimization_goal_eligible_with_important_labels_flows) !==
          !0 &&
        (o == null
          ? void 0
          : o.is_ctwa_lead_optimization_eligible_with_one_lead) !== !0
        ? !1
        : t
          ? r("gkx")("19464")
          : r("gkx")("19465");
    }
    function p(e, t) {
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
      return f(e, t)
        ? (r("AdsInterfacesLogger").logOnce({
            eventName: "ctwa_lead_optimization_goal_eligibility_check",
            data: {
              page_id: e != null ? e : "",
              sub_event: "important_labels_flows_eligible",
              is_eligible_gk: !0,
            },
          }),
          !0)
        : g(e, t)
          ? (r("AdsInterfacesLogger").logOnce({
              eventName: "ctwa_lead_optimization_goal_eligibility_check",
              data: {
                page_id: e != null ? e : "",
                sub_event: "expanded_1+_lead_eligible",
                is_eligible_gk: !0,
              },
            }),
            !0)
          : (a == null
                ? void 0
                : a.is_ctwa_lead_optimization_goal_eligible_with_important_labels_flows) !==
                !0 &&
              (a == null
                ? void 0
                : a.is_ctwa_lead_optimization_eligible_with_one_lead) !== !0 &&
              _(e, t)
            ? (r("AdsInterfacesLogger").logOnce({
                eventName: "ctwa_lead_optimization_goal_eligibility_check",
                data: {
                  page_id: e != null ? e : "",
                  sub_event: "group2_one_plus_eligible",
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
    function _(e, t) {
      var n,
        o =
          e != null
            ? (n = r("AdsPageStore").getLoadObject(e)) == null
              ? void 0
              : n.getValue()
            : null;
      return (o == null
        ? void 0
        : o.is_ctwa_lead_optimization_goal_eligible_with_group2_important_labels_flows_one_plus) !==
        !0
        ? !1
        : t
          ? r("qex")._("6037") === !0
          : r("qex")._("6038") === !0;
    }
    function f(e, t) {
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
    function g(e, t) {
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
    function h(e, t, n, a, i) {
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
            o("ClickToWhatsAppAdsDetails").makeClickToWhatsAppAdsDetails({
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
    function y(e, t) {
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
    function C(t, n, o) {
      var a = {
        isRequired: !1,
        optimizationGoal: null,
        pageWhatsAppNumberID: null,
      };
      if (r("gkx")("23590") !== !0) return a;
      var i =
          o == null ||
          o === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
        l = o == null || o === r("AdsAPIOptimizationGoals").LEAD_GENERATION;
      return i && e(t, !1) && r("qex")._("899") === !0
        ? {
            isRequired: !0,
            optimizationGoal: r("AdsAPIOptimizationGoals")
              .MESSAGING_PURCHASE_CONVERSION,
            pageWhatsAppNumberID: n,
          }
        : l && p(t, !1) && r("qex")._("4077") === !0
          ? {
              isRequired: !0,
              optimizationGoal: r("AdsAPIOptimizationGoals").LEAD_GENERATION,
              pageWhatsAppNumberID: n,
            }
          : a;
    }
    ((l.getIsCTWAPurchaseConversionsOptimizationGoalEligible = e),
      (l.getIsCTWALeadExistingPostEligible = c),
      (l.getIsPageEligibleForCTWALeadOptimization = d),
      (l.getIsCTWALeadOptimizationGoalEligibleWithExistingSignals = m),
      (l.getIsCTWALeadOptimizationGoalEligible = p),
      (l.logCTWADFODefaultingEvent = h),
      (l.getIsWhatsAppNumberCloudAPI = y),
      (l.getCTWADataSharingTooltipStatus = C));
  },
  98,
);
