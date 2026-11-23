__d(
  "AdsHelpTrayUILogger",
  [
    "AdsHelpTrayModalTypes",
    "AdsHelpTrayUILoggerStoreUtils",
    "ExecutionEnvironment",
    "GuidedFixLoggingUtils",
    "IdsIssueDetectionFalcoEvent",
    "MAIBAActionabilityBannerImpressionDedup",
    "adsHelpTrayBizSitePageTypeFromButtonSelector",
    "adsHelpTrayCurrentContentCaseIDSelector",
    "adsHelpTrayCurrentContentSelector",
    "adsHelpTrayCurrentQuerySelector",
    "adsHelpTrayIsTrayOpenSelector",
    "adsHelpTrayOpenModalSourceSelector",
    "adsHelpTrayOpenModalTypeSelector",
    "isStringNullOrEmpty",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t) {
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        e,
        t,
        r("adsHelpTrayBizSitePageTypeFromButtonSelector")(),
      );
    }
    function c(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          t[e.context_key] = e.context_value;
        }),
        t
      );
    }
    function d(e, t) {
      u("support_form_treatment_shown", { planID: t, treatmentID: e });
    }
    function m(e) {
      u("support_form_asset_select", { assetID: e });
    }
    function p(e, t) {
      u("support_form_asset_list_impression", {
        assetIds: e,
        hasMore: t != null && t ? "true" : "false",
      });
    }
    function _(e) {
      u("support_form_plan_select", { planID: e });
    }
    function f(e) {
      u("support_form_channel_select", { channelID: e });
    }
    function g(e) {
      u("support_form_go_to_active_chat", { threadID: e });
    }
    function h(e) {
      u("help_tray_simple_interface_plans_shown_other_issues", { issues: e });
    }
    function y(e, t, n, r, o, a, i, l, s, c) {
      u("support_form_case_submission", {
        channelID: t,
        formFailed: e,
        helpTrayOpenSource: s,
        isCanceled: c,
        issueID: n,
        jobID: o,
        lbdCaller: i,
        message: r,
        requestURI: a,
        source: l,
      });
    }
    function C(e) {
      u("support_form_go_to_messenger", { jobID: e });
    }
    function b(e) {
      u("help_tray_help_article_summary_like_click", { cmsID: e });
    }
    function v(e) {
      u("help_tray_help_article_summary_dislike_click", { cmsID: e });
    }
    function S(e) {
      u("help_tray_help_article_summary_like_unclick", { cmsID: e });
    }
    function R(e) {
      u("help_tray_help_article_summary_dislike_unclick", { cmsID: e });
    }
    function L(e) {
      u("support_form_article_see_more_click", { cmsID: e });
    }
    function E(e) {
      u("help_article_summary_show_more_click", { cmsID: e });
    }
    function k(e) {
      u("help_article_summary_show_less_click", { cmsID: e });
    }
    function I(e) {
      u("support_form_article_loaded", { cmsID: e });
    }
    function T(e, t) {
      u("support_form_contact_support_click", { cmsID: e, issueID: t });
    }
    function D(e) {
      var t = { callerID: e.callerID };
      return (
        e.lbdPlanID != null && (t.lbdPlanID = e.lbdPlanID),
        e.lbdAssetID != null && (t.lbdAssetID = e.lbdAssetID),
        e.lbdAssetType != null && (t.lbdAssetType = e.lbdAssetType),
        e.lbdSymptomID != null && (t.lbdSymptomID = e.lbdSymptomID),
        t
      );
    }
    function x(e) {
      u("support_form_submit_button_shown", D(e));
    }
    function $(e) {
      u("support_form_submit_button_hidden", D(e));
    }
    function P(e) {
      u("help_tray_submit_button_enabled", D(e));
    }
    function N(e) {
      u("help_tray_submit_button_disabled", D(e));
    }
    function M() {
      u("help_tray_marketing_pro_click");
    }
    function w(e, t, n, o) {
      (u("support_form_detected_issue_select", {
        assetID: t,
        issueInstanceId: n,
        lbdIssueID: e,
        modelType: o != null ? o : "",
      }),
        r("IdsIssueDetectionFalcoEvent").log(function () {
          return {
            entity_id: t,
            event_name: "DETECTED_ISSUE_CLICK",
            event_type: "DIAGNOSIS",
            ids_issue_id: n,
            ids_use_case: "HELP_TRAY",
          };
        }));
    }
    function A(e) {
      u("support_form_detected_issue_load", {
        plans: JSON.stringify(e != null ? e : []),
      });
    }
    function F(e) {
      u("support_form_asset_select_change", { assetID: e });
    }
    function O(e) {
      u("support_form_plan_select_change", { lbdPlanID: e });
    }
    function B(e, t, n, r) {
      u("help_tray_recommended_article_impression", {
        cms_id: e,
        pathname: n,
        rank: r,
        title: t,
      });
    }
    function W(e) {
      u("help_tray_positive_friction_load", { caseID: e });
    }
    function q(e) {
      u("help_tray_positive_friction_existing_case_click", { caseID: e });
    }
    function U(e, t) {
      u("help_tray_positive_friction_go_to_chat_click", {
        caseID: e,
        threadKey: t,
      });
    }
    function V(e) {
      u("help_tray_positive_friction_new_case_click", { caseID: e });
    }
    function H(e, t, n, r) {
      u("help_tray_recommended_article_click", {
        cms_id: e,
        pathname: n,
        rank: r,
        title: t,
      });
    }
    function G(e, t, n, o) {
      var a;
      u(
        e,
        babelHelpers.extends({}, o, {
          current_cms_id:
            (a = r("adsHelpTrayCurrentContentSelector")()) != null ? a : "",
          href: t,
          link_type: n,
        }),
      );
    }
    function z(e, t, n) {
      G("help_tray_help_article_other_link_click", e, t, n);
    }
    function j(e) {
      u(
        e
          ? "help_tray_recommended_article_view_more_click"
          : "help_tray_recommended_article_view_more_collapse",
      );
    }
    function K(e) {
      u("help_tray_feedback_click", e);
    }
    function Q() {
      u("help_center_click");
    }
    function X() {
      u("cancel_page_request_click");
    }
    function Y(e, t) {
      var n = "case_tracking_confirmation_request_update_modal_open";
      switch (e) {
        case o("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
          n = "case_tracking_close_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
          n = "case_tracking_request_update_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REOPEN_CASE:
          n = "case_tracking_confirmation_reopen_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REQUEST_UPDATE:
          n = "case_tracking_confirmation_request_update_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
          n = "case_tracking_reopen_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REOPEN_CHAT:
          n = "case_tracking_reopen_chat_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.START_CHAT:
          n = "case_tracking_start_chat_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.ESCALATE_TO_SAM:
          n = "case_tracking_escalate_to_sam_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_ESCALATE_TO_SAM:
          n = "case_tracking_confirmation_escalate_to_sam_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.UPLOAD_ATTACHMENT:
          return;
      }
      u(
        n,
        babelHelpers.extends(
          { job_id: r("adsHelpTrayCurrentContentCaseIDSelector")() },
          t != null ? { source: t } : {},
        ),
      );
    }
    function J(e) {
      var t = r("adsHelpTrayOpenModalTypeSelector")(),
        n = r("adsHelpTrayCurrentContentCaseIDSelector")(),
        a = r("adsHelpTrayOpenModalSourceSelector")(),
        i = "case_tracking_close_case_modal_submission";
      if (t != null) {
        switch (t) {
          case o("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
            i = "case_tracking_close_case_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
            i = "case_tracking_request_update_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
            i = "case_tracking_reopen_case_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REOPEN_CHAT:
            i = "case_tracking_reopen_chat_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.START_CHAT:
            i = "case_tracking_start_chat_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.ESCALATE_TO_SAM:
            i = "case_tracking_escalate_to_sam_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_ESCALATE_TO_SAM:
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REOPEN_CASE:
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REQUEST_UPDATE:
            break;
          case o("AdsHelpTrayModalTypes").Modal.UPLOAD_ATTACHMENT:
            return;
        }
        var l = babelHelpers.extends({}, e, { job_id: n });
        (a != null && (l.source = a), u(i, l));
      }
    }
    function Z(e) {
      u("help_tray_footer_click", { link: e });
    }
    function ee(e) {
      u("help_tray_back_button_click", { content_type: e });
    }
    function te(e, t, n) {
      var r = { open_source: e };
      (t != null && (r.routeName = t),
        n != null && (r.lbd_caller = n),
        u("help_tray_open", r));
    }
    function ne(e, t) {
      u("help_tray_open", {
        cms_id: e,
        open_source: t != null ? t : "cms_article",
      });
    }
    function re(e) {
      u("help_tray_close", { is_from_button_open: e.toString() });
    }
    function oe(e) {
      r("isStringNullOrEmpty")(e)
        ? u("help_tray_search_clear")
        : u("help_tray_search", { search_term: e });
    }
    function ae(e, t, n) {
      u("help_tray_search_query_suggestion_typeahead_item_click", {
        search_term: e,
        suggestion_term: t,
        suggestion_type: n,
      });
    }
    function ie(e) {
      u("help_tray_search_input_change", { search_term: e || "" });
    }
    function le(e, t, n, o) {
      var a;
      (o === void 0 && (o = r("adsHelpTrayCurrentQuerySelector")()),
        u("help_tray_search_result_impression", {
          cms_id: e.cms_id,
          content_source: e.content_source ? e.content_source : "",
          href: (a = e.href) != null ? a : "",
          pathname: n,
          rank: "" + t,
          search_term: o != null ? o : "",
          title: e.title,
        }));
    }
    function se(e, t, n) {
      var o, a;
      u("help_tray_search_result_open", {
        cms_id: e.cms_id,
        content_source: e.content_source ? e.content_source : "",
        href: (o = e.href) != null ? o : "",
        pathname: n,
        rank: "" + t,
        search_term:
          (a = r("adsHelpTrayCurrentQuerySelector")()) != null ? a : "",
        title: e.title,
      });
    }
    function ue(e, t) {
      u(e, {
        ranked_search_results: t,
        search_term: r("adsHelpTrayCurrentQuerySelector")() || "",
      });
    }
    function ce(e) {
      u("help_tray_search_suggested_query_for_empty_results_clicked", {
        suggested_term: e,
      });
    }
    function de(e, t) {
      var n = t.toString();
      u("help_tray_search_keyword_pill_click", { rank: n, search_term: e });
    }
    function me(e) {
      u("help_tray_resource_click", { resource: e });
    }
    function pe(e, t) {
      var n = { job_id: e };
      (t != null && (n.source = t), u("case_tracking_case_view_open", n));
    }
    function _e() {
      u("case_tracking_history_click");
    }
    function fe() {
      u("help_tray_home_content_rendered", {
        is_help_tray_open: r("adsHelpTrayIsTrayOpenSelector")().toString(),
      });
    }
    function ge(e, t, n, r, a) {
      var i = t;
      (o("GuidedFixLoggingUtils").logGuidedFixEventToLEA(e, r, "guided_fix_m3"),
        u(n, babelHelpers.extends({}, a, { adGroupID: e, vt: i })));
    }
    function he() {
      u("help_tray_survey_submit");
    }
    function ye(e, t, n) {
      var r,
        o = c(e);
      ((o.INTEGRATION_POINT = n),
        (o.ERROR = (r = t.message) != null ? r : ""),
        (o.ERROR_NAME = t.name),
        (o.ERROR_STACK = t.stack),
        (o.MODULE_NAME = "SUPPORT_SURVEY"),
        u("help_tray_generic_error", o));
    }
    function Ce(e) {
      var t = {};
      (e.forEach(function (e) {
        t[e.context_key] = e.context_value;
      }),
        u("help_tray_survey_renderred", t));
    }
    function be(e, t) {
      u(e ? "help_tray_alerts_expand" : "help_tray_alerts_collapse", {
        hiddenAlertsCount: t.toString(),
      });
    }
    function ve(e) {
      u("help_tray_contact_support_button_click", { entry_point: e, url: "" });
    }
    function Se(e) {
      u("bizweb_tooltip_article_click", e != null ? { entryPoint: e } : {});
    }
    function Re(e, t) {
      u("bizweb_search_snippet_impression", {
        isGalaxy: (t != null ? t : !1).toString(),
        query: e,
      });
    }
    function Le(e) {
      u("bizweb_contextual_tooltip_impression", { entryPoint: e });
    }
    function Ee(e, t) {
      u("bizweb_search_snippet_read_article_click", {
        cmsID: e,
        isGalaxy: (t != null ? t : !1).toString(),
      });
    }
    function ke(e, t, n) {
      u("bizweb_search_snippet_toggle_expand", {
        cmsID: t,
        isGalaxy: (n != null ? n : !1).toString(),
        wasCollapsed: e.toString(),
      });
    }
    function Ie(e) {
      u("help_tray_article_load", { cmsID: e });
    }
    function Te(e) {
      u("help_tray_article_load_fail", { cmsID: e });
    }
    function De(e) {
      var t = e.isButton;
      u("bizweb_contextual_learn_more_click", { isButton: t.toString() });
    }
    function xe(e) {
      var t = e.isButton;
      u("bizweb_contextual_learn_more_impression", { isButton: t.toString() });
    }
    function $e() {
      u("bizweb_ads_tooltip_geo_component_hovered");
    }
    function Pe(e, t) {
      u("bizweb_search_snippet_cms_content_load", {
        articleCmsID: e,
        snippetCmsID: t,
      });
    }
    function Ne(e, t, n) {
      u("bizweb_search_snippet_cms_content_load_error", {
        articleCmsID: e,
        errorMessage: n,
        snippetCmsID: t,
      });
    }
    function Me() {
      u("help_tray_marketing_pro_shown");
    }
    function we() {
      u("case_tracking_shown");
    }
    function Ae(e) {
      u("help_tray_contact_support_button_shown", {
        entry_point: e != null ? e : "",
      });
    }
    function Fe(e, t, n, r, o, a) {
      u("help_tray_case_details_impression", {
        actions: a.join(","),
        case_id: e != null ? e : "",
        entity_id: n != null ? n : "",
        last_step: o.toString(),
        num_of_steps: r.toString(),
        tracker_type: t != null ? t : "",
      });
    }
    function Oe(e, t) {
      var n = { threadID: String(e) };
      (t != null && (n.source = t),
        u("help_tray_case_details_open_active_chat_button_click", n));
    }
    function Be(e) {
      u("help_tray_case_details_chat_history_link_click", { threadID: e });
    }
    function We(e) {
      u("help_tray_case_details_chat_history_link_impression", { threadID: e });
    }
    function qe(e, t) {
      var n;
      u("help_tray_generic_error", {
        errorMessage: (n = e.message) != null ? n : "",
        errorName: e.name,
        errorStack: e.stack,
        moduleName: t != null ? t : "",
      });
    }
    function Ue(e) {
      var t = c(e);
      u("help_tray_feedback_bar_impression", t);
    }
    function Ve(e) {
      var t = c(e);
      u("help_tray_survey_empty", t);
    }
    function He(e) {
      e === void 0 && (e = []);
      var t = c(e);
      u("help_tray_feedback_bar_click", t);
    }
    function Ge() {
      u("support_form_help_center_link_shown");
    }
    function ze(e, t, n, r) {
      u("help_tray_ads_ai_alr_resolution", {
        botResponseId: e != null ? e : "null",
        externalConversationId: t != null ? t : "null",
        resolutionFlow: r,
        status: n != null ? n : "null",
        subscriptionId: "null",
      });
    }
    function je(e, t, n, r, o) {
      u("help_tray_ads_ai_alr_dora_status_mismatch", {
        ALRstatus: r != null ? r : "null",
        adAccountStatus: o,
        botResponseId: e != null ? e : "null",
        externalConversationId: n != null ? n : "null",
        subscriptionId: t != null ? t : "null",
      });
    }
    function Ke(e, t, n, r, o, a, i) {
      var l;
      u("help_tray_ads_ai_alr_dsl_status_mismatch", {
        ALRstatus: r != null ? r : "null",
        adAccountStatus: o,
        botResponseId: e != null ? e : "null",
        dslEligibilityStatus: i != null ? i : "null",
        externalConversationId: n != null ? n : "null",
        isDailySpendLimitFlow:
          (l = a == null ? void 0 : a.toString()) != null ? l : "null",
        subscriptionId: t != null ? t : "null",
      });
    }
    function Qe(e, t) {
      u("help_tray_ads_ai_dsl_ineligible_rendered", {
        botResponseId: e != null ? e : "null",
        externalConversationId: t != null ? t : "null",
        subscriptionId: "null",
      });
    }
    function Xe(e, t) {
      u("maiba_ad_object_reference_impression", {
        adObjectIds: e.join(","),
        botResponseId: t,
      });
    }
    function Ye(e, t, n) {
      u("maiba_ad_object_reference_click", {
        adObjectIds: e.join(","),
        botResponseId: t,
        eventType: n,
      });
    }
    function Je(e, t, n, r, o) {
      u("help_tray_ads_ai_alr_async_notification", {
        botResponseId: e != null ? e : "null",
        externalConversationId: n != null ? n : "null",
        reviewId: o != null ? o : "null",
        reviewStatus: r != null ? r : "null",
        subscriptionId: t != null ? t : "null",
      });
    }
    function Ze(e, t, n) {
      u("help_tray_ads_ai_asset_selection_auto_select", {
        count: n.toString(),
        externalConversationId: e != null ? e : "",
        type: t,
      });
    }
    function et(e, t, n, r) {
      var o;
      u("maiba_ad_object_reference_error", {
        adObjectIds: (o = r == null ? void 0 : r.join(",")) != null ? o : "",
        adObjectType: t != null ? t : "",
        botResponseId: n != null ? n : "",
        errorType: e,
      });
    }
    function tt(e, t, n) {
      u("maiba_ad_object_reference_hover_card_load_time", {
        adObjectIds: e.join(","),
        botResponseId: t,
        loadTimeMs: n.toString(),
      });
    }
    function nt(e, t) {
      u("maiba_data_viz_impression", {
        botResponseId: e != null ? e : "",
        dataVizType: String(t),
      });
    }
    function rt(e) {
      u("maiba_data_viz_hover", { botResponseId: "", dataVizType: String(e) });
    }
    function ot(e) {
      u("maiba_data_viz_swap", { botResponseId: "", dataVizType: String(e) });
    }
    function at(e, t) {
      u("maiba_data_viz_metric_selector_click", {
        botResponseId: "",
        dataVizType: String(e),
        metricType: t,
      });
    }
    function it() {
      u("maiba_markdown_table_impression", { botResponseId: "" });
    }
    function lt(e, t, n) {
      u("maiba_creative_gen_carousel_impression", {
        botResponseId: e != null ? e : "",
        externalConversationId: t != null ? t : "",
        variantCount: n.toString(),
      });
    }
    function st(e, t, n, r) {
      var o;
      u("maiba_creative_gen_carousel_click", {
        action: n,
        botResponseId: e != null ? e : "",
        externalConversationId: t != null ? t : "",
        selectedId: (o = r == null ? void 0 : r.selectedId) != null ? o : "",
        tileIndex:
          (r == null ? void 0 : r.tileIndex) != null
            ? r.tileIndex.toString()
            : "",
      });
    }
    function ut(e, t) {
      u("maiba_creative_gen_single_image_impression", {
        botResponseId: e != null ? e : "",
        externalConversationId: t != null ? t : "",
      });
    }
    function ct(e, t, n) {
      u("maiba_creative_gen_single_image_click", {
        action: n,
        botResponseId: e != null ? e : "",
        externalConversationId: t != null ? t : "",
      });
    }
    function dt(e) {
      var t, n, r, o;
      return {
        adgroupId: (t = e.adgroupId) != null ? t : "",
        botResponseId: (n = e.botResponseId) != null ? n : "",
        externalConversationId: (r = e.externalConversationId) != null ? r : "",
        surfaceId: (o = e.surfaceId) != null ? o : "",
      };
    }
    function mt(e, t) {
      u(
        "maiba_text_gen_card_impression",
        babelHelpers.extends({}, dt(e), {
          currentHeadlineCount: String(t.currentHeadlineCount),
          currentPrimaryTextCount: String(t.currentPrimaryTextCount),
          headlineOptionCount: String(t.headlineOptionCount),
          isFromHistory: t.isFromHistory ? "true" : "false",
          primaryTextOptionCount: String(t.primaryTextOptionCount),
        }),
      );
    }
    function pt(e, t, n) {
      var r;
      u(
        "maiba_text_gen_card_click",
        babelHelpers.extends({}, dt(e), {
          action: t,
          editedCount: n.editedCount != null ? String(n.editedCount) : "",
          field: (r = n.field) != null ? r : "",
          selectedHeadlineCount:
            n.selectedHeadlineCount != null
              ? String(n.selectedHeadlineCount)
              : "",
          selectedPrimaryTextCount:
            n.selectedPrimaryTextCount != null
              ? String(n.selectedPrimaryTextCount)
              : "",
          tileIndex: n.tileIndex != null ? String(n.tileIndex) : "",
        }),
      );
    }
    function _t(e, t, n) {
      u("maiba_creative_gen_pill_impression", {
        adgroupId: n != null ? n : "",
        botResponseId: e != null ? e : "",
        externalConversationId: t != null ? t : "",
      });
    }
    function ft(e, t, n, r) {
      (r === void 0 && (r = "view"),
        u("maiba_creative_gen_pill_click", {
          action: r,
          adgroupId: n != null ? n : "",
          botResponseId: e != null ? e : "",
          externalConversationId: t != null ? t : "",
        }));
    }
    function gt(e) {
      var t, n, r, o;
      return {
        botResponseId: (t = e.botResponseId) != null ? t : "",
        externalConversationId: (n = e.externalConversationId) != null ? n : "",
        ideaId: (r = e.ideaId) != null ? r : "",
        unitId: (o = e.unitId) != null ? o : "",
      };
    }
    function ht(e) {
      var t;
      return {
        latencyFrom: (t = e == null ? void 0 : e.from) != null ? t : "",
        latencyMs: e != null ? String(e.ms) : "",
      };
    }
    function yt(e, t, n) {
      u(
        e === "click"
          ? "maiba_creative_compass_see_ideas_cta_click"
          : "maiba_creative_compass_see_ideas_cta_impression",
        babelHelpers.extends({}, gt(t), {
          adObjectIds: n.adObjectIds.join(","),
          isFromHistory: n.isFromHistory ? "true" : "false",
        }),
      );
    }
    function Ct(e, t, n) {
      u(
        "maiba_creative_compass_ideas_impression",
        babelHelpers.extends({}, gt(e), ht(n), { ideaCount: String(t) }),
      );
    }
    function bt(e, t, n) {
      u(
        "maiba_creative_compass_ideas_click",
        babelHelpers.extends({}, gt(e), {
          action: t,
          tileIndex: n != null ? String(n) : "",
        }),
      );
    }
    function vt(e, t, n) {
      u(
        "maiba_creative_compass_ideas_reasoning_impression",
        babelHelpers.extends({}, gt(e), {
          section: t,
          tileIndex: n != null ? String(n) : "",
        }),
      );
    }
    function St(e, t, n) {
      u(
        "maiba_creative_compass_variants_impression",
        babelHelpers.extends({}, gt(e), ht(n), { variantCount: String(t) }),
      );
    }
    function Rt(e) {
      var t, n;
      return {
        creativeId: (t = e == null ? void 0 : e.creativeId) != null ? t : "",
        durationMs:
          (e == null ? void 0 : e.durationMs) != null
            ? String(e.durationMs)
            : "",
        editOption: (n = e == null ? void 0 : e.editOption) != null ? n : "",
        selectedCount:
          (e == null ? void 0 : e.selectedCount) != null
            ? String(e.selectedCount)
            : "",
        tileIndex:
          (e == null ? void 0 : e.tileIndex) != null ? String(e.tileIndex) : "",
      };
    }
    function Lt(e, t, n) {
      u(
        "maiba_creative_compass_variants_click",
        babelHelpers.extends({}, gt(e), Rt(n), { action: t }),
      );
    }
    function Et(e, t) {
      var n, r, o, a;
      u(
        "maiba_creative_compass_canvas_impression",
        babelHelpers.extends({}, gt(e), ht(t.latency), {
          activeCreativeId: (n = t.activeCreativeId) != null ? n : "",
          creativeCount: String(t.creativeCount),
          editStatus: (r = t.editStatus) != null ? r : "",
          generationStatus: (o = t.generationStatus) != null ? o : "",
          view: t.view,
          workspaceId: (a = t.workspaceId) != null ? a : "",
          workspaceVersion:
            t.workspaceVersion != null ? String(t.workspaceVersion) : "",
        }),
      );
    }
    function kt(e, t, n) {
      u(
        "maiba_creative_compass_canvas_click",
        babelHelpers.extends({}, gt(e), Rt(n), { action: t }),
      );
    }
    function It(e, t, n) {
      var r;
      u(
        "maiba_creative_compass_edit_submitted",
        babelHelpers.extends({}, gt(e), {
          action: t,
          creativeId: n.creativeId,
          hasPrompt: n.hasPrompt === !0 ? "true" : "false",
          productImageCount:
            n.productImageCount != null ? String(n.productImageCount) : "",
          targetAspectRatio: (r = n.targetAspectRatio) != null ? r : "",
        }),
      );
    }
    function Tt(e, t, n) {
      u(
        "maiba_creative_compass_media_library_result",
        babelHelpers.extends({}, gt(e), {
          failCount: String(n.failCount),
          successCount: String(n.successCount),
          surface: t,
        }),
      );
    }
    function Dt(e, t, n) {
      u(
        "maiba_creative_compass_render_error",
        babelHelpers.extends({}, gt(e), { errorName: n, surface: t }),
      );
    }
    function xt(t) {
      return t == null
        ? null
        : Math.round((e || (e = r("performanceNow")))() - t);
    }
    function $t(e, t, n, r) {
      var o;
      u("maiba_data_viz_error_state", {
        botResponseId: e != null ? e : "",
        dataVizType: String(t),
        errorMessage: (o = r == null ? void 0 : r.message) != null ? o : "",
        errorType: n,
      });
    }
    function Pt(e) {
      var t, n, r;
      return {
        botResponseId: (t = e.botResponseId) != null ? t : "",
        externalConversationId: (n = e.externalConversationId) != null ? n : "",
        unitId: (r = e.unitId) != null ? r : "",
      };
    }
    function Nt(e, t) {
      u(
        "maiba_creative_compass_see_why_card_impression",
        babelHelpers.extends({}, Pt(e), {
          chartCount: String(t.chartCount),
          hasDemographicChart: t.hasDemographicChart ? "true" : "false",
          hasFatigueChart: t.hasFatigueChart ? "true" : "false",
          isFromHistory: t.isFromHistory ? "true" : "false",
          sectionCount: String(t.sectionKeys.length),
          sectionKeys: t.sectionKeys.join(","),
        }),
      );
    }
    function Mt(e, t) {
      u(
        "maiba_creative_compass_see_why_chart_impression",
        babelHelpers.extends({}, Pt(e), {
          chartType: t.chartType,
          dataPointCount: String(t.dataPointCount),
          isFromHistory: t.isFromHistory ? "true" : "false",
          sectionKey: t.sectionKey,
          seriesCount: String(t.seriesCount),
        }),
      );
    }
    function wt(e, t, n) {
      u(
        "maiba_creative_compass_see_why_render_error",
        babelHelpers.extends({}, Pt(e), {
          chartType: n.chartType,
          errorName: t,
          sectionKey: n.sectionKey,
        }),
      );
    }
    function At() {
      return (s || (s = r("ExecutionEnvironment"))).canUseDOM
        ? document.visibilityState
        : "unknown";
    }
    function Ft(e, t, n, r, o, a, i) {
      n === void 0 && (n = !1);
      var l = {
        botResponseId: t,
        conversationId: e,
        isHumanAgent: n.toString(),
        visibilityState: At(),
      };
      (r != null && (l.channel = r),
        o != null && (l.surface = o),
        a != null && (l.toastType = a),
        i != null && (l.trigger = i),
        u("help_tray_ads_ai_notification_toast_impression", l));
    }
    function Ot(e) {
      var t = e.adAccountId,
        n = e.decision,
        r = e.exposureAttempted,
        o = e.snippetState,
        a = e.source,
        i = e.surface;
      u("general", {
        ad_account_id: t != null ? t : "",
        decision: n,
        event_type: "maiba_async_notification_decision",
        exposure_attempted: r.toString(),
        platform: "web",
        snippet_state: o,
        source: a,
        surface: i != null ? i : "",
      });
    }
    function Bt() {
      var e, t;
      return (e =
        (t = globalThis.Notification) == null ? void 0 : t.permission) != null
        ? e
        : "unsupported";
    }
    function Wt(e, t) {
      u("general", {
        ad_account_id: e != null ? e : "",
        event_type: "maiba_subscription_lifecycle",
        lifecycle_event: "subscribe",
        notification_permission: Bt(),
        platform: "web",
        source: "use_maiba_async_message_subscription",
        subscription_name: "maiba_async_message",
        surface: t != null ? t : "",
      });
    }
    function qt(e, t, n, r, o, a, i) {
      n === void 0 && (n = !1);
      var l = {
        botResponseId: t,
        conversationId: e,
        isHumanAgent: n.toString(),
      };
      (r != null && (l.channel = r),
        o != null && (l.surface = o),
        a != null && (l.toastType = a),
        i != null && (l.trigger = i),
        u("help_tray_ads_ai_notification_toast_click", l));
    }
    function Ut(e, t) {
      var n = { channel: "browser_opt_in", conversationId: e };
      (t != null && (n.surface = t),
        u("help_tray_ads_ai_notification_toast_impression", n));
    }
    function Vt(e, t, n, r) {
      var o = { action: t, channel: "browser_opt_in", conversationId: e };
      (n != null && (o.permission = n),
        r != null && (o.surface = r),
        u("help_tray_ads_ai_notification_toast_click", o));
    }
    function Ht(e, t, n) {
      u("maiba_mini_inbox_open", {
        ad_account_id: e != null ? e : "",
        channel: "mini_inbox",
        entrypoint: t,
        surface: n != null ? n : "",
      });
    }
    function Gt(e, t, n, r, o) {
      var a = {
        ad_account_id: e != null ? e : "",
        channel: "mini_inbox",
        click_target: t,
        entrypoint: n,
        surface: r != null ? r : "",
      };
      (o != null && (a.conversation_id = o), u("maiba_mini_inbox_click", a));
    }
    function zt(e, t, n, r, o, a) {
      r === void 0 && (r = !1);
      var i = {
        botResponseId: t,
        conversationId: e,
        entrypoint: n,
        isHumanAgent: r.toString(),
      };
      (o != null && (i.channel = o),
        a != null && (i.surface = a),
        u("maiba_open_chat_thread_success", i));
    }
    function jt(e) {
      u("maiba_async_thread_marked_read", { conversationId: e });
    }
    function Kt(e) {
      u("maiba_async_unread_badge_impression", { conversationId: e });
    }
    function Qt(e) {
      u("maiba_async_unread_count_badge_impression", {
        unreadCount: String(e),
      });
    }
    function Xt(e, t) {
      u("maiba_bot_response_impression", {
        botResponseId: e,
        conversationId: t,
        isHumanAgent: "false",
      });
    }
    function Yt(e, t, n, r, a, i) {
      o("MAIBAActionabilityBannerImpressionDedup").claimBannerImpression(
        a,
        r,
        i,
        e,
      ) &&
        u("maiba_actionability_banner_impression", {
          bannerLabel: e,
          bannerSection: n != null ? n : "",
          bannerStatus: t,
          botResponseId: r != null ? r : "",
          conversationId: a != null ? a : "",
        });
    }
    function Jt(e) {
      var t, n, r, o, a, i, l;
      u(
        "maiba_workspace_canvas_lifecycle",
        babelHelpers.extends({}, e.diagnostics, {
          botResponseId: (t = e.botResponseId) != null ? t : "",
          conversationId: (n = e.conversationId) != null ? n : "",
          outcome: (r = e.outcome) != null ? r : "",
          product: (o = e.product) != null ? o : "",
          reason: (a = e.reason) != null ? a : "",
          stage: e.stage,
          surface: (i = e.surface) != null ? i : "",
          workspaceType: (l = e.workspaceType) != null ? l : "",
          workspaceVersion:
            e.workspaceVersion == null ? "" : String(e.workspaceVersion),
        }),
      );
    }
    function Zt(e, t) {
      u("maiba_copy_content_click", { botResponseId: e, conversationId: t });
    }
    function en(e) {
      u("maiba_dictation_impression", { locale: e });
    }
    function tn(e, t, n, r) {
      u("maiba_dictation_button_click", {
        action: e,
        attemptId: r != null ? r : "",
        connectionState: t,
        locale: n,
      });
    }
    function nn(e, t, n) {
      u("maiba_dictation_used_on_send", {
        externalConversationId: t,
        isOnlyDictation: e.toString(),
        userMessageOTID: n != null ? n : "",
      });
    }
    function rn(e) {
      u("maiba_dictation_recording_started", { attemptId: e != null ? e : "" });
    }
    function on(e, t, n) {
      u(
        "maiba_dictation_error",
        babelHelpers.extends(
          { attemptId: n != null ? n : "", errorType: e },
          t,
        ),
      );
    }
    function an(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h =
          e.endReason == null
            ? {}
            : {
                attemptDurationMs:
                  (t =
                    (n = e.attemptDurationMs) == null
                      ? void 0
                      : n.toString()) != null
                    ? t
                    : "",
                hadAnyText:
                  (r = (o = e.hadAnyText) == null ? void 0 : o.toString()) !=
                  null
                    ? r
                    : "",
                hadFinalText:
                  (a = (i = e.hadFinalText) == null ? void 0 : i.toString()) !=
                  null
                    ? a
                    : "",
                recordingStarted:
                  (l =
                    (s = e.recordingStarted) == null ? void 0 : s.toString()) !=
                  null
                    ? l
                    : "",
                timeToFirstTextMs:
                  (c =
                    (d = e.timeToFirstTextMs) == null
                      ? void 0
                      : d.toString()) != null
                    ? c
                    : "",
                timeToRecorderStartedMs:
                  (m =
                    (p = e.timeToRecorderStartedMs) == null
                      ? void 0
                      : p.toString()) != null
                    ? m
                    : "",
              };
      u(
        "maiba_dictation_session",
        babelHelpers.extends({}, h, {
          asrDomain: e.asrDomain,
          attemptId: (_ = e.attemptId) != null ? _ : "",
          audioDurationMs: e.audioDurationMs.toString(),
          endReason: (f = e.endReason) != null ? f : "",
          finalTranscriptCount: e.finalTranscriptCount.toString(),
          locale: e.locale,
          shortwaveId: (g = e.shortwaveId) != null ? g : "",
        }),
      );
    }
    function ln(e, t) {
      u("maiba_generate_pdf_click", { botResponseId: e, conversationId: t });
    }
    function sn(e, t, n, r, o) {
      u("maiba_message_dwell_time", {
        botResponseId: e,
        conversationId: t,
        dwellTimeMs: String(n),
        hiddenReason: r,
        postStreamingDwellTimeMs: String(o),
      });
    }
    function un(e, t, n, r) {
      u("maiba_message_fully_read", {
        botResponseId: e,
        conversationId: t,
        messageHeight: String(n),
        viewportHeight: String(r),
      });
    }
    var cn = "TOP_ISSUE";
    function dn(e, t, n, r, o) {
      (r === void 0 && (r = ""), o === void 0 && (o = []));
      var a = o.filter(function (e) {
        return e.type === cn;
      });
      u(
        "maiba_mid_chat_prompts",
        babelHelpers.extends(
          { botResponseId: e, conversationId: t, promptTypes: r, type: n },
          a.length > 0
            ? {
                promptInstanceIds: a
                  .map(function (e) {
                    var t;
                    return (t = e.promptInstanceId) != null ? t : "";
                  })
                  .join(","),
                promptRules: a
                  .map(function (e) {
                    var t;
                    return (t = e.rule) != null ? t : "";
                  })
                  .join(","),
              }
            : {},
        ),
      );
    }
    function mn(e, t, n, r) {
      u("maiba_comparison_preference_selected", {
        comparisonConversationId: r != null ? r : "",
        externalConversationId: e,
        preference: t,
        selectedButton: n,
      });
    }
    function pn(e, t) {
      u("maiba_comparison_view_impression", {
        comparisonConversationId: t != null ? t : "",
        externalConversationId: e,
      });
    }
    function _n(e, t) {
      u("maiba_proactive_summary_card_impression", {
        adAccountId: e,
        externalConversationId: t,
      });
    }
    function fn(e, t) {
      u("maiba_proactive_summary_card_click", {
        adAccountId: e,
        externalConversationId: t,
      });
    }
    function gn(e, t) {
      u("maiba_proactive_summary_card_dismissed", {
        adAccountId: e,
        externalConversationId: t,
      });
    }
    function hn(e, t) {
      u("maiba_proactive_summary_thread_opened", {
        adAccountId: e,
        externalConversationId: t,
      });
    }
    function yn(e) {
      u("maiba_proactive_summary_card_lookup_miss", { adAccountId: e });
    }
    function Cn(e, t, n) {
      u("maiba_proactive_badge_impression", {
        adAccountId: e,
        proactiveCount: String(t),
        totalUnreadCount: String(n),
      });
    }
    function bn(e) {
      var t, n;
      u("maiba_outcome_forecaster_impression", {
        adAccountId: e.adAccountID,
        adDraftId: e.adDraftID,
        botResponseId: e.botResponseId,
        campaignGroupId: e.campaignGroupID,
        dailyBudget: e.dailyBudget != null ? String(e.dailyBudget) : "",
        impressionsBand: e.impressionsBand,
        optimizationGoal: (t = e.optimizationGoal) != null ? t : "",
        predictedImpressions:
          e.predictedImpressions != null ? String(e.predictedImpressions) : "",
        predictedResults:
          e.predictedResults != null ? String(e.predictedResults) : "",
        resultsBand: (n = e.resultsBand) != null ? n : "",
        resultsLabel: e.resultsLabel,
      });
    }
    function vn(e) {
      var t = {};
      if (e == null) return t;
      for (var n of Object.keys(e))
        (n === "useCase" ||
          n === "recIndex" ||
          n === "recType" ||
          n.startsWith("scorecard")) &&
          (t[n] = e[n]);
      return t;
    }
    function Sn(e, t, n, r, o, a, i, l, s, c, d) {
      u(
        "maiba_scorecard_report_impression",
        babelHelpers.extends({}, vn(d), {
          adAccountId: e,
          entrypoint: i,
          externalConversationId: t,
          hasFunnel: r ? "1" : "0",
          hasKpi: n ? "1" : "0",
          issueCount: String(o),
          renderer: l,
          scorecardLoggingID: s != null ? s : "",
          shellTabCount: String(a),
          shellTabNames: c != null ? c : "",
        }),
      );
    }
    function Rn(e, t, n) {
      u("maiba_scorecard_funnel_chart_click", {
        adAccountId: e,
        externalConversationId: t,
        selectedMetric: n,
      });
    }
    function Ln(e, t, n, r, o, a) {
      u("maiba_scorecard_cta_click", {
        adAccountId: e,
        ctaLabel: n,
        ctaPrompt: r,
        externalConversationId: t,
        originComponent: o,
        renderer: a,
      });
    }
    function En(e, t, n, r, o) {
      u("maiba_scorecard_issue_card_toggle", {
        adAccountId: e,
        expanded: r ? "1" : "0",
        externalConversationId: t,
        issueNumber: String(n),
        renderer: o,
      });
    }
    function kn(e, t, n, r, o, a, i, l) {
      u(
        "maiba_scorecard_report_breakdown_tab_content_impression",
        babelHelpers.extends({}, vn(l), {
          adAccountId: e,
          componentId: n,
          externalConversationId: t,
          renderer: i,
          surfaceId: r,
          tabIndex: String(o),
          tabTitle: a,
        }),
      );
    }
    function In(e, t, n, r, o, a, i, l) {
      u(
        "maiba_scorecard_report_breakdown_tab_click",
        babelHelpers.extends({}, vn(l), {
          adAccountId: e,
          componentId: n,
          externalConversationId: t,
          renderer: i,
          surfaceId: r,
          tabIndex: String(o),
          tabTitle: a,
        }),
      );
    }
    function Tn(e, t) {
      var n, r, o, a, i, l, s, c;
      u(
        e,
        babelHelpers.extends({}, vn(t.extraData), {
          adAccountId: t.adAccountId,
          adObjectIds: (n = t.adObjectIds) != null ? n : "",
          adObjectType: (r = t.adObjectType) != null ? r : "",
          componentId: t.componentId,
          ctaType: t.ctaType,
          externalConversationId: t.externalConversationId,
          maibaRecommendationId: (o = t.maibaRecommendationId) != null ? o : "",
          nonOsCtaAction: (a = t.nonOsCtaAction) != null ? a : "",
          recommendationId: (i = t.recommendationId) != null ? i : "",
          recommendationToolType:
            (l = t.recommendationToolType) != null ? l : "",
          renderer: t.renderer,
          surfaceId: t.surfaceId,
          tabComponentId: (s = t.tabComponentId) != null ? s : "",
          tabIndex: t.tabIndex != null ? String(t.tabIndex) : "",
          tabTitle: (c = t.tabTitle) != null ? c : "",
        }),
      );
    }
    function Dn(e) {
      Tn("maiba_scorecard_report_recommendation_cta_impression", e);
    }
    function xn(e) {
      Tn("maiba_scorecard_report_recommendation_cta_click", e);
    }
    function $n(e, t, n, r, o, a) {
      u("maiba_scorecard_parse_error", {
        errorMessage: n,
        errorName: r != null ? r : "",
        errorStack: o != null ? o : "",
        externalConversationId: a != null ? a : "",
        parseStage: t,
        surface: e,
      });
    }
    function Pn(e, t, n, r, o) {
      u("maiba_scorecard_render_error", {
        errorMessage: t,
        errorName: n != null ? n : "",
        errorStack: r != null ? r : "",
        externalConversationId: o != null ? o : "",
        surface: e,
      });
    }
    function Nn(e, t, n, r, o, a) {
      u(
        e,
        babelHelpers.extends(
          {
            errorMessage: n,
            errorName: r != null ? r : "",
            errorStack: o != null ? o : "",
            surfaceId: t != null ? t : "",
          },
          a != null ? { is_from_history: a.toString() } : {},
        ),
      );
    }
    function Mn(e, t, n) {
      u("maiba_a2ui_pipeline_checkpoint", {
        checkpointData: n != null ? n : "",
        checkpointStage: t,
        surfaceId: e != null ? e : "",
      });
    }
    function wn(e, t) {
      u("maiba_a2ui_action_success", {
        eventData: t != null ? t : "",
        surfaceId: e != null ? e : "",
      });
    }
    function An(e, t) {
      u("maiba_a2ui_deeplink_click", {
        eventData: t != null ? t : "",
        surfaceId: e != null ? e : "",
      });
    }
    function Fn(e, t) {
      u("maiba_a2ui_impression", {
        eventData: t != null ? t : "",
        surfaceId: e != null ? e : "",
      });
    }
    function On(e, t, n, r, o) {
      Nn("maiba_a2ui_pipeline_checkpoint_error", e, t, n, r, o);
    }
    function Bn(e, t, n, r, o) {
      Nn("maiba_scorecard_report_a2ui_render_error", e, t, n, r, o);
    }
    function Wn(e, t, n, r, o) {
      var a =
        e != null && e.startsWith("scorecard-")
          ? "maiba_scorecard_report_a2ui_render_error"
          : "maiba_a2ui_render_error";
      Nn(a, e, t, n, r, o);
    }
    ((l.logSupportTreatmentShown = d),
      (l.logSupportFormAssetSelect = m),
      (l.logSupportFormAssetListImpression = p),
      (l.logSupportFormPlanSelect = _),
      (l.logSupportFormChannelSelect = f),
      (l.logSupportFormGoToActiveChat = g),
      (l.logSupportFormPlansShownOtherIssues = h),
      (l.logSupportFormCaseSubmission = y),
      (l.logSupportFormGoToMessenger = C),
      (l.logHelpArticleSummaryLike = b),
      (l.logHelpArticleSummaryDislike = v),
      (l.logHelpArticleSummaryUnlike = S),
      (l.logHelpArticleSummaryUndislike = R),
      (l.logSupportFormArticleSeeMoreClick = L),
      (l.logHelpArticleSummaryShowMoreClick = E),
      (l.logHelpArticleSummaryShowLessClick = k),
      (l.logSupportFormArticleLoaded = I),
      (l.logSupporFormContactSupportClick = T),
      (l.logSupportFormSubmitButtonShown = x),
      (l.logSupportFormSubmitButtonHidden = $),
      (l.logSupportFormSubmitButtonEnabled = P),
      (l.logSupportFormSubmitButtonDisabled = N),
      (l.logMarketingProClick = M),
      (l.logSupportFormDetectedIssueSelect = w),
      (l.logSupportFormDetectedIssueLoad = A),
      (l.logSupportFormAssetChangeClick = F),
      (l.logSupportFormPlanChangeClick = O),
      (l.logHelpArticleImpression = B),
      (l.logPositiveFrictionLoad = W),
      (l.logPositiveFrictionExistingCaseClick = q),
      (l.logPositiveFrictionGoToChatClick = U),
      (l.logPositiveFrictionNewCaseClick = V),
      (l.logHelpArticleClick = H),
      (l.logHelpArticleOtherLinkClick = z),
      (l.logHelpArticleViewMoreToggle = j),
      (l.logFlytrapClick = K),
      (l.logHelpCenterClick = Q),
      (l.logCancelPageRequestClick = X),
      (l.logModalOpen = Y),
      (l.logModalSubmission = J),
      (l.logFooterClick = Z),
      (l.logBackButtonClick = ee),
      (l.logHelpTrayOpen = te),
      (l.logHelpTrayArticleOpen = ne),
      (l.logHelpTrayClose = re),
      (l.logSearch = oe),
      (l.logSearchQuerySuggestionTypeaheadItemClick = ae),
      (l.logSearchInputChange = ie),
      (l.logSearchResultImpression = le),
      (l.logSearchResultOpen = se),
      (l.logSearchResults = ue),
      (l.logSuggestedQueryForEmptyResultsClick = ce),
      (l.logSuggestedPillQueryClick = de),
      (l.logResourceClick = me),
      (l.logCaseTrackingViewOpen = pe),
      (l.logCaseTrackingHistoryClick = _e),
      (l.logHomeContentRender = fe),
      (l.logGuidedFixEvent = ge),
      (l.logSurveySubmit = he),
      (l.logSurveyError = ye),
      (l.logSurveyRender = Ce),
      (l.logHelpTrayAlertListToggleExpand = be),
      (l.logHelpTrayContactSupportButtonClick = ve),
      (l.logBizwebTooltipArticleClick = Se),
      (l.logBizwebSearchSnippetImpression = Re),
      (l.logBizwebContextualTooltipImpression = Le),
      (l.logBizwebSearchSnippetReadArticleClick = Ee),
      (l.logBizwebSearchSnippetToggleExpand = ke),
      (l.logHelpTrayArticleLoad = Ie),
      (l.logHelpTrayArticleLoadFail = Te),
      (l.logBizwebContextualLearnMoreClick = De),
      (l.logBizwebContextualLearnMoreImpression = xe),
      (l.logBizwebAdsTooltipGeoComponentHovered = $e),
      (l.logBizwebSearchSnippetCmsContentLoad = Pe),
      (l.logBizwebSearchSnippetCmsContentLoadError = Ne),
      (l.logMarketingProShown = Me),
      (l.logCaseTrackingShown = we),
      (l.logContactSupportButtonShown = Ae),
      (l.logCaseTrackingDetailsImpression = Fe),
      (l.logCaseTrackingOpenActiveChatButtonClick = Oe),
      (l.logCaseTrackingChatHistoryLinkClick = Be),
      (l.logCaseTrackingChatHistoryLinkImpression = We),
      (l.logHelpTrayGenericError = qe),
      (l.logFeedbackBarImpression = Ue),
      (l.logSurveyEmpty = Ve),
      (l.logFeedbackBarClick = He),
      (l.logHelpCenterLinkShown = Ge),
      (l.logALRResolutionStatus = ze),
      (l.logALRStatusMismatchWithAdAccountForDORA = je),
      (l.logALRStatusMismatchWithAdAccountForDSL = Ke),
      (l.logDSLInEligibleWidgetRendered = Qe),
      (l.logAdObjectReferenceImpression = Xe),
      (l.logAdObjectReferenceClick = Ye),
      (l.logALRAsyncNotification = Je),
      (l.logMAIBAAssetSelectionAutoSelect = Ze),
      (l.logAdObjectReferenceError = et),
      (l.logAdObjectHoverCardLoadTime = tt),
      (l.logDataVizWidgetImpression = nt),
      (l.logDataVizWidgetHover = rt),
      (l.logDataVizWidgetSwap = ot),
      (l.logDataVizWidgetMetricSelectorClick = at),
      (l.logDataVizMarkdownTableImpression = it),
      (l.logCreativeGenCarouselImpression = lt),
      (l.logCreativeGenCarouselClick = st),
      (l.logCreativeGenSingleImageImpression = ut),
      (l.logCreativeGenSingleImageClick = ct),
      (l.logCreativeGenTextGridImpression = mt),
      (l.logCreativeGenTextGridClick = pt),
      (l.logCreativeGenPillImpression = _t),
      (l.logCreativeGenPillClick = ft),
      (l.logCreativeCompassSeeIdeasCTA = yt),
      (l.logCreativeCompassIdeasImpression = Ct),
      (l.logCreativeCompassIdeasClick = bt),
      (l.logCreativeCompassIdeasReasoningImpression = vt),
      (l.logCreativeCompassVariantsImpression = St),
      (l.logCreativeCompassVariantsClick = Lt),
      (l.logCreativeCompassCanvasImpression = Et),
      (l.logCreativeCompassCanvasClick = kt),
      (l.logCreativeCompassEditSubmitted = It),
      (l.logCreativeCompassMediaLibraryResult = Tt),
      (l.logCreativeCompassRenderError = Dt),
      (l.creativeCompassElapsedMs = xt),
      (l.logDataVizErrorState = $t),
      (l.logCreativeCompassSeeWhyCardImpression = Nt),
      (l.logCreativeCompassSeeWhyChartImpression = Mt),
      (l.logCreativeCompassSeeWhyRenderError = wt),
      (l.logMAIBANotificationToastImpression = Ft),
      (l.logMAIBAAsyncNotificationDecision = Ot),
      (l.logMAIBAAsyncMessageSubscriptionSubscribe = Wt),
      (l.logMAIBANotificationToastClick = qt),
      (l.logMAIBABrowserNotificationOptInImpression = Ut),
      (l.logMAIBABrowserNotificationOptInAction = Vt),
      (l.logMAIBAMiniInboxOpen = Ht),
      (l.logMAIBAMiniInboxClick = Gt),
      (l.logMAIBAOpenChatThreadSuccess = zt),
      (l.logMAIBAAsyncThreadMarkedRead = jt),
      (l.logMAIBAAsyncUnreadBadgeImpression = Kt),
      (l.logMAIBAAsyncUnreadCountBadgeImpression = Qt),
      (l.logMAIBABotResponseImpression = Xt),
      (l.logMAIBAActionabilityBannerImpression = Yt),
      (l.logMAIBAWorkspaceCanvasLifecycle = Jt),
      (l.logMAIBACopyContentClick = Zt),
      (l.logMAIBADictationImpression = en),
      (l.logMAIBADictationButtonClick = tn),
      (l.logMAIBADictationUsedOnSend = nn),
      (l.logMAIBADictationRecordingStarted = rn),
      (l.logMAIBADictationError = on),
      (l.logMAIBADictationSession = an),
      (l.logMAIBAGeneratePdfClick = ln),
      (l.logMAIBAMessageDwellTime = sn),
      (l.logMAIBAMessageFullyRead = un),
      (l.MAIBA_TOP_ISSUE_PROMPT_TYPE = cn),
      (l.logMAIBAMidChatPrompts = dn),
      (l.logMAIBAComparisonPreferenceSelected = mn),
      (l.logMAIBAComparisonViewImpression = pn),
      (l.logMAIBAProactiveSummaryCardImpression = _n),
      (l.logMAIBAProactiveSummaryCardClick = fn),
      (l.logMAIBAProactiveSummaryCardDismissed = gn),
      (l.logMAIBAProactiveSummaryThreadOpened = hn),
      (l.logMAIBAProactiveSummaryCardLookupMiss = yn),
      (l.logMAIBAProactiveBadgeImpression = Cn),
      (l.logMAIBAOutcomeForecasterImpression = bn),
      (l.logMAIBAScorecardReportImpression = Sn),
      (l.logMAIBAScorecardFunnelChartClick = Rn),
      (l.logMAIBAScorecardCTAClick = Ln),
      (l.logMAIBAScorecardIssueCardToggle = En),
      (l.logMAIBAScorecardReportBreakdownTabContentImpression = kn),
      (l.logMAIBAScorecardReportBreakdownTabClick = In),
      (l.logMAIBAScorecardReportRecommendationCTAImpression = Dn),
      (l.logMAIBAScorecardReportRecommendationCTAClick = xn),
      (l.logMAIBAScorecardParseError = $n),
      (l.logMAIBAScorecardRenderError = Pn),
      (l.logMAIBAA2UIPipelineCheckpoint = Mn),
      (l.logMAIBAA2UIActionSuccess = wn),
      (l.logMAIBAA2UIDeeplinkClick = An),
      (l.logMAIBAA2UIImpression = Fn),
      (l.logMAIBAA2UIPipelineCheckpointError = On),
      (l.logMAIBAA2UIScorecardRenderError = Bn),
      (l.logMAIBAA2UIRenderError = Wn));
  },
  98,
);
