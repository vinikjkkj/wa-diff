__d(
  "CtxDfoEngagementRemovalNoticeUtils",
  [
    "$InternalEnum",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      ENGAGEMENT_REMOVAL_NOTICE: "engagement_removal_notice",
      RECOMMENDATION_PILL_CREATION_MODAL: "recommendation_pill_creation_modal",
      RECOMMENDATION_PILL_CAMPAIGN_MUTATION_UTIL:
        "recommendation_pill_campaign_mutation_util",
      MESSAGE_TEMPLATE_START_CONVERSATIONS_DEFAULTING:
        "message_template_start_conversations_defaulting",
      MESSENGER_SINGLE_DESTINATION_DEFAULTING:
        "messenger_single_destination_defaulting",
      L2_MODAL_UPSELL: "l2_modal_upsell",
      DFO_GOAL_REMOVAL: "dfo_goal_removal",
      DFO_DEFAULTING_REMOVAL: "dfo_defaulting_removal",
      DFO_DEFAULTING_REMOVAL_PAGE_UPDATE: "dfo_defaulting_removal_page_update",
      DFO_DEFAULTING_REMOVAL_CONVERSION_LOCATION_UPDATE:
        "dfo_defaulting_removal_conversion_location_update",
      L2_PO_GUIDANCE_CARD: "l2_po_guidance_card",
      L2_VO_GUIDANCE_CARD: "l2_vo_guidance_card",
      L2_LO_GUIDANCE_CARD: "l2_lo_guidance_card",
      L3_PO_GUIDANCE_CARD: "l3_po_guidance_card",
      L3_VO_GUIDANCE_CARD: "l3_vo_guidance_card",
      L3_LO_GUIDANCE_CARD: "l3_lo_guidance_card",
      LO_PCR_RECOMMENDATION: "lo_pcr_recommendation",
      PO_PCR_RECOMMENDATION: "po_pcr_recommendation",
      VO_PCR_RECOMMENDATION: "vo_pcr_recommendation",
      QUICK_CREATE_OBJECTIVE_SECTION: "quick_create_objective_section",
      DUPLICATION_UPGRADE: "duplication_upgrade",
      CTM_LO_POST_UCD_HOLDOUT: "ctm_lo_post_ucd_holdout",
      UNKNOWN: "unknown",
    });
    function s(e) {
      var t;
      switch (e) {
        case r("AdsAPIOptimizationGoals").LEAD_GENERATION:
          t = r("AdsAPIObjectives").OUTCOME_LEADS;
          break;
        case r("AdsAPIOptimizationGoals").VALUE:
        case r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION:
          t = r("AdsAPIObjectives").OUTCOME_SALES;
          break;
        default:
          return null;
      }
      return t;
    }
    function u(t, n) {
      var o;
      (t === void 0 && (t = !1),
        n === void 0 && (n = e.UNKNOWN),
        t === !0 ? r("gkx")("1809") : r("gkx")("1838"));
      var a = t === !0 ? r("qex")._("2646") === !0 : r("qex")._("2647") === !0;
      return (
        r("AdsInterfacesLogger").log({
          eventName: "odax_ctx_dfo_removal_qe_exposure",
          data:
            ((o = {}),
            (o.source = n),
            (o.new_value = a ? "test" : "control"),
            (o.is_enabled = t === !0),
            o),
        }),
        a
      );
    }
    function c(t, n) {
      var o;
      (t === void 0 && (t = !1), n === void 0 && (n = e.UNKNOWN));
      var a = t === !0 ? r("qex")._("5173") === !0 : r("qex")._("5174") === !0;
      return (
        r("AdsInterfacesLogger").log({
          eventName: "odax_ctx_dfo_phase2_aa_exposure",
          data:
            ((o = {}),
            (o.source = n),
            (o.new_value = a ? "test" : "control"),
            (o.is_enabled = t === !0),
            o),
        }),
        !0
      );
    }
    function d(t) {
      t === void 0 && (t = e.UNKNOWN);
      try {
        var n;
        r("gkx")("1838");
        var o = r("qex")._("559"),
          a = o != null,
          i;
        return (
          a
            ? o === !0
              ? (i = "test")
              : (i = "control")
            : (i = "not_in_universe"),
          r("AdsInterfacesLogger").log({
            eventName: "odax_ctx_dfo_removal_qe_exposure",
            data:
              ((n = {}),
              (n.source = t),
              (n.new_value = i),
              (n.is_enabled = !1),
              n),
          }),
          a
        );
      } catch (e) {
        return !1;
      }
    }
    ((l.OdaxCtxDfoRemovalQEEntrypoint = e),
      (l.getUpdatedObjective = s),
      (l.shouldPassPhase1QE = u),
      (l.shouldPassPhase2AATest = c),
      (l.isInPhase1QEUniverse = d));
  },
  98,
);
