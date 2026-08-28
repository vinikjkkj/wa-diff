__d(
  "AdsHelpTrayUILogger",
  [
    "AdsHelpTrayModalTypes",
    "AdsHelpTrayUILoggerStoreUtils",
    "GuidedFixLoggingUtils",
    "IdsIssueDetectionFalcoEvent",
    "adsHelpTrayBizSitePageTypeFromButtonSelector",
    "adsHelpTrayCurrentContentCaseIDSelector",
    "adsHelpTrayCurrentContentSelector",
    "adsHelpTrayCurrentQuerySelector",
    "adsHelpTrayIsTrayOpenSelector",
    "adsHelpTrayOpenModalSourceSelector",
    "adsHelpTrayOpenModalTypeSelector",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        e,
        t,
        r("adsHelpTrayBizSitePageTypeFromButtonSelector")(),
      );
    }
    function s(e) {
      var t = {};
      return (
        e.forEach(function (e) {
          t[e.context_key] = e.context_value;
        }),
        t
      );
    }
    function u(t, n) {
      e("support_form_treatment_shown", { planID: n, treatmentID: t });
    }
    function c(t) {
      e("support_form_asset_select", { assetID: t });
    }
    function d(t, n) {
      e("support_form_asset_list_impression", {
        assetIds: t,
        hasMore: n != null && n ? "true" : "false",
      });
    }
    function m(t) {
      e("support_form_issue_select", { issueID: t });
    }
    function p(t) {
      e("support_form_plan_select", { planID: t });
    }
    function _(t) {
      e("support_form_channel_select", { channelID: t });
    }
    function f(t) {
      e("support_form_go_to_active_chat", { threadID: t });
    }
    function g(t) {
      e("support_form_asset_is_rate_limited", { assetID: t });
    }
    function h(t) {
      e("help_tray_simple_interface_plans_shown_other_issues", { issues: t });
    }
    function y(t, n, r, o, a, i, l, s, u, c) {
      e("support_form_case_submission", {
        channelID: n,
        formFailed: t,
        helpTrayOpenSource: u,
        isCanceled: c,
        issueID: r,
        jobID: a,
        lbdCaller: l,
        message: o,
        requestURI: i,
        source: s,
      });
    }
    function C(t) {
      e("support_form_go_to_messenger", { jobID: t });
    }
    function b(t) {
      e("help_tray_help_article_summary_like_click", { cmsID: t });
    }
    function v(t) {
      e("help_tray_help_article_summary_dislike_click", { cmsID: t });
    }
    function S(t) {
      e("help_tray_help_article_summary_like_unclick", { cmsID: t });
    }
    function R(t) {
      e("help_tray_help_article_summary_dislike_unclick", { cmsID: t });
    }
    function L(t) {
      e("support_form_article_see_more_click", { cmsID: t });
    }
    function E(t) {
      e("help_article_summary_show_more_click", { cmsID: t });
    }
    function k(t) {
      e("help_article_summary_show_less_click", { cmsID: t });
    }
    function I(t) {
      e("help_tray_case_details_see_more_click", { caseID: t });
    }
    function T(t) {
      e("support_form_article_loaded", { cmsID: t });
    }
    function D(t, n) {
      e("support_form_contact_support_click", { cmsID: t, issueID: n });
    }
    function x(t, n) {
      e("support_form_self_resolution_shown", { assetID: n, lbdPlanID: t });
    }
    function $(e) {
      var t = { callerID: e.callerID };
      return (
        e.lbdPlanID != null && (t.lbdPlanID = e.lbdPlanID),
        e.lbdAssetID != null && (t.lbdAssetID = e.lbdAssetID),
        e.lbdAssetType != null && (t.lbdAssetType = e.lbdAssetType),
        e.lbdSymptomID != null && (t.lbdSymptomID = e.lbdSymptomID),
        t
      );
    }
    function P(t) {
      e("support_form_submit_button_shown", $(t));
    }
    function N(t) {
      e("support_form_submit_button_hidden", $(t));
    }
    function M(t) {
      e("help_tray_submit_button_enabled", $(t));
    }
    function w(t) {
      e("help_tray_submit_button_disabled", $(t));
    }
    function A() {
      e("help_tray_marketing_pro_click");
    }
    function F(t, n) {
      var r = {};
      (t != null && n != null && (r = { lbdIssueID: t, supportedAsset: n }),
        e("support_form_common_issue_select", r));
    }
    function O(t, n, o, a) {
      (e("support_form_detected_issue_select", {
        assetID: n,
        issueInstanceId: o,
        lbdIssueID: t,
        modelType: a != null ? a : "",
      }),
        r("IdsIssueDetectionFalcoEvent").log(function () {
          return {
            entity_id: n,
            event_name: "DETECTED_ISSUE_CLICK",
            event_type: "DIAGNOSIS",
            ids_issue_id: o,
            ids_use_case: "HELP_TRAY",
          };
        }));
    }
    function B(t) {
      e("support_form_detected_issue_load", {
        plans: JSON.stringify(t != null ? t : []),
      });
    }
    function W(t, n, r) {
      e("support_form_self_resolution_cta_click", {
        assetID: n,
        lbdPlanID: t,
        uri: r,
      });
    }
    function q(t) {
      e("support_form_asset_select_change", { assetID: t });
    }
    function U(t) {
      e("support_form_plan_select_change", { lbdPlanID: t });
    }
    function V(t, n, r, o) {
      e("help_tray_recommended_article_impression", {
        cms_id: t,
        pathname: r,
        rank: o,
        title: n,
      });
    }
    function H(t) {
      e("help_tray_positive_friction_load", { caseID: t });
    }
    function G(t) {
      e("help_tray_positive_friction_existing_case_click", { caseID: t });
    }
    function z(t, n) {
      e("help_tray_positive_friction_go_to_chat_click", {
        caseID: t,
        threadKey: n,
      });
    }
    function j(t) {
      e("help_tray_positive_friction_new_case_click", { caseID: t });
    }
    function K(t, n, r, o) {
      e("help_tray_recommended_article_click", {
        cms_id: t,
        pathname: r,
        rank: o,
        title: n,
      });
    }
    function Q(t, n, o, a) {
      var i;
      e(
        t,
        babelHelpers.extends({}, a, {
          current_cms_id:
            (i = r("adsHelpTrayCurrentContentSelector")()) != null ? i : "",
          href: n,
          link_type: o,
        }),
      );
    }
    function X(e, t, n) {
      Q("help_tray_help_article_other_link_click", e, t, n);
    }
    function Y(t) {
      e(
        t
          ? "help_tray_recommended_article_view_more_click"
          : "help_tray_recommended_article_view_more_collapse",
      );
    }
    function J(t) {
      e("help_tray_feedback_click", t);
    }
    function Z() {
      e("help_center_click");
    }
    function ee() {
      e("cancel_page_request_click");
    }
    function te(t, n) {
      var a = "case_tracking_confirmation_request_update_modal_open";
      switch (t) {
        case o("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
          a = "case_tracking_close_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
          a = "case_tracking_request_update_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REOPEN_CASE:
          a = "case_tracking_confirmation_reopen_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REQUEST_UPDATE:
          a = "case_tracking_confirmation_request_update_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
          a = "case_tracking_reopen_case_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.REOPEN_CHAT:
          a = "case_tracking_reopen_chat_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.START_CHAT:
          a = "case_tracking_start_chat_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.ESCALATE_TO_SAM:
          a = "case_tracking_escalate_to_sam_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_ESCALATE_TO_SAM:
          a = "case_tracking_confirmation_escalate_to_sam_modal_open";
          break;
        case o("AdsHelpTrayModalTypes").Modal.UPLOAD_ATTACHMENT:
          return;
      }
      e(
        a,
        babelHelpers.extends(
          { job_id: r("adsHelpTrayCurrentContentCaseIDSelector")() },
          n != null ? { source: n } : {},
        ),
      );
    }
    function ne(t) {
      var n = r("adsHelpTrayOpenModalTypeSelector")(),
        a = r("adsHelpTrayCurrentContentCaseIDSelector")(),
        i = r("adsHelpTrayOpenModalSourceSelector")(),
        l = "case_tracking_close_case_modal_submission";
      if (n != null) {
        switch (n) {
          case o("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
            l = "case_tracking_close_case_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
            l = "case_tracking_request_update_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
            l = "case_tracking_reopen_case_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.REOPEN_CHAT:
            l = "case_tracking_reopen_chat_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.START_CHAT:
            l = "case_tracking_start_chat_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.ESCALATE_TO_SAM:
            l = "case_tracking_escalate_to_sam_modal_submission";
            break;
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_ESCALATE_TO_SAM:
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REOPEN_CASE:
          case o("AdsHelpTrayModalTypes").Modal.CONFIRMATION_REQUEST_UPDATE:
            break;
          case o("AdsHelpTrayModalTypes").Modal.UPLOAD_ATTACHMENT:
            return;
        }
        var s = babelHelpers.extends({}, t, { job_id: a });
        (i != null && (s.source = i), e(l, s));
      }
    }
    function re(t) {
      e("help_tray_footer_click", { link: t });
    }
    function oe(t) {
      e("help_tray_back_button_click", { content_type: t });
    }
    function ae() {
      e("fab_contact_support_click", {});
    }
    function ie(t) {
      e("fab_search_pill_click", { term: t });
    }
    function le() {
      e("fab_support_cases_click", {});
    }
    function se() {
      e("fab_help_center_click", {});
    }
    function ue(t, n, r) {
      var o = { open_source: t };
      (n != null && (o.routeName = n),
        r != null && (o.lbd_caller = r),
        e("help_tray_open", o));
    }
    function ce(t, n) {
      e("help_tray_open", {
        cms_id: t,
        open_source: n != null ? n : "cms_article",
      });
    }
    function de(t) {
      e("help_tray_close", { is_from_button_open: t.toString() });
    }
    function me(t) {
      r("isStringNullOrEmpty")(t)
        ? e("help_tray_search_clear")
        : e("help_tray_search", { search_term: t });
    }
    function pe(t, n, r) {
      e("help_tray_search_query_suggestion_typeahead_item_click", {
        search_term: t,
        suggestion_term: n,
        suggestion_type: r,
      });
    }
    function _e(t) {
      e("help_tray_search_input_change", { search_term: t || "" });
    }
    function fe(t, n, o, a) {
      var i;
      (a === void 0 && (a = r("adsHelpTrayCurrentQuerySelector")()),
        e("help_tray_search_result_impression", {
          cms_id: t.cms_id,
          content_source: t.content_source ? t.content_source : "",
          href: (i = t.href) != null ? i : "",
          pathname: o,
          rank: "" + n,
          search_term: a != null ? a : "",
          title: t.title,
        }));
    }
    function ge(t, n, o) {
      var a, i;
      e("help_tray_search_result_open", {
        cms_id: t.cms_id,
        content_source: t.content_source ? t.content_source : "",
        href: (a = t.href) != null ? a : "",
        pathname: o,
        rank: "" + n,
        search_term:
          (i = r("adsHelpTrayCurrentQuerySelector")()) != null ? i : "",
        title: t.title,
      });
    }
    function he(t, n) {
      e("ads_policy_learn_more_click", {
        sub_policy_url: n,
        top_policy_url: t,
      });
    }
    function ye(t, n) {
      e(t, {
        ranked_search_results: n,
        search_term: r("adsHelpTrayCurrentQuerySelector")() || "",
      });
    }
    function Ce(t) {
      e("help_tray_search_suggested_query_for_empty_results_clicked", {
        suggested_term: t,
      });
    }
    function be(t, n) {
      var r = n.toString();
      e("help_tray_search_keyword_pill_click", { rank: r, search_term: t });
    }
    function ve(t) {
      e("help_tray_resource_click", { resource: t });
    }
    function Se(t, n) {
      var r = { job_id: t };
      (n != null && (r.source = n), e("case_tracking_case_view_open", r));
    }
    function Re() {
      e("case_tracking_history_click");
    }
    function Le() {
      e("help_tray_home_content_rendered", {
        is_help_tray_open: r("adsHelpTrayIsTrayOpenSelector")().toString(),
      });
    }
    function Ee(t, n, r, a, i) {
      var l = n;
      (o("GuidedFixLoggingUtils").logGuidedFixEventToLEA(t, a, "guided_fix_m3"),
        e(r, babelHelpers.extends({}, i, { adGroupID: t, vt: l })));
    }
    function ke() {
      e("help_tray_survey_submit");
    }
    function Ie(t, n, r) {
      var o,
        a = s(t);
      ((a.INTEGRATION_POINT = r),
        (a.ERROR = (o = n.message) != null ? o : ""),
        (a.ERROR_NAME = n.name),
        (a.ERROR_STACK = n.stack),
        (a.MODULE_NAME = "SUPPORT_SURVEY"),
        e("help_tray_generic_error", a));
    }
    function Te(t) {
      var n = {};
      (t.forEach(function (e) {
        n[e.context_key] = e.context_value;
      }),
        e("help_tray_survey_renderred", n));
    }
    function De() {
      e("help_tray_survey_expanded");
    }
    function xe() {
      e("help_tray_survey_to_bhc_button_click");
    }
    function $e(t, n) {
      e(t ? "help_tray_alerts_expand" : "help_tray_alerts_collapse", {
        hiddenAlertsCount: n.toString(),
      });
    }
    function Pe(t) {
      e("help_tray_contact_support_button_click", { entry_point: t, url: "" });
    }
    function Ne(t, n) {
      e("help_tray_guided_fix_wycd_action_button_click", {
        actionType: t,
        adGroupID: n,
      });
    }
    function Me(t) {
      e("bizweb_tooltip_article_click", t != null ? { entryPoint: t } : {});
    }
    function we(t, n) {
      e("bizweb_search_snippet_impression", {
        isGalaxy: (n != null ? n : !1).toString(),
        query: t,
      });
    }
    function Ae(t) {
      e("bizweb_contextual_tooltip_impression", { entryPoint: t });
    }
    function Fe(t, n) {
      e("bizweb_search_snippet_read_article_click", {
        cmsID: t,
        isGalaxy: (n != null ? n : !1).toString(),
      });
    }
    function Oe(t, n, r) {
      e("bizweb_search_snippet_toggle_expand", {
        cmsID: n,
        isGalaxy: (r != null ? r : !1).toString(),
        wasCollapsed: t.toString(),
      });
    }
    function Be(t) {
      e("help_tray_article_load", { cmsID: t });
    }
    function We(t) {
      e("help_tray_article_load_fail", { cmsID: t });
    }
    function qe(t) {
      var n = t.isButton;
      e("bizweb_contextual_learn_more_click", { isButton: n.toString() });
    }
    function Ue(t) {
      var n = t.isButton;
      e("bizweb_contextual_learn_more_impression", { isButton: n.toString() });
    }
    function Ve() {
      e("bizweb_ads_tooltip_geo_component_hovered");
    }
    function He(t, n) {
      e("bizweb_search_snippet_cms_content_load", {
        articleCmsID: t,
        snippetCmsID: n,
      });
    }
    function Ge(t, n, r) {
      e("bizweb_search_snippet_cms_content_load_error", {
        articleCmsID: t,
        errorMessage: r,
        snippetCmsID: n,
      });
    }
    function ze(t) {
      e(
        "bizweb_issue_segment_selection",
        t != null ? { selectedIssueSegment: t } : {},
      );
    }
    function je() {
      e("help_tray_marketing_pro_shown");
    }
    function Ke() {
      e("case_tracking_shown");
    }
    function Qe(t) {
      e("help_tray_contact_support_button_shown", {
        entry_point: t != null ? t : "",
      });
    }
    function Xe(t, n, r, o, a, i) {
      e("help_tray_case_details_impression", {
        actions: i.join(","),
        case_id: t != null ? t : "",
        entity_id: r != null ? r : "",
        last_step: a.toString(),
        num_of_steps: o.toString(),
        tracker_type: n != null ? n : "",
      });
    }
    function Ye(t, n) {
      var r = { threadID: String(t) };
      (n != null && (r.source = n),
        e("help_tray_case_details_open_active_chat_button_click", r));
    }
    function Je(t) {
      e("help_tray_case_details_chat_history_link_click", { threadID: t });
    }
    function Ze(t) {
      e("help_tray_case_details_chat_history_link_impression", { threadID: t });
    }
    function et(t, n) {
      var r;
      e("help_tray_generic_error", {
        errorMessage: (r = t.message) != null ? r : "",
        errorName: t.name,
        errorStack: t.stack,
        moduleName: n != null ? n : "",
      });
    }
    function tt(t) {
      var n = s(t);
      e("help_tray_feedback_bar_impression", n);
    }
    function nt(t) {
      var n = s(t);
      e("help_tray_survey_empty", n);
    }
    function rt(t) {
      t === void 0 && (t = []);
      var n = s(t);
      e("help_tray_feedback_bar_click", n);
    }
    function ot() {
      e("support_form_help_center_link_shown");
    }
    function at(t, n, r, o, a) {
      e("help_tray_ads_ai_alr_resolution", {
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        resolutionFlow: a,
        status: o != null ? o : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function it(t, n, r, o, a) {
      e("help_tray_ads_ai_alr_dora_status_mismatch", {
        ALRstatus: o != null ? o : "null",
        adAccountStatus: a,
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function lt(t, n, r, o, a, i, l) {
      var s;
      e("help_tray_ads_ai_alr_dsl_status_mismatch", {
        ALRstatus: o != null ? o : "null",
        adAccountStatus: a,
        botResponseId: t != null ? t : "null",
        dslEligibilityStatus: l != null ? l : "null",
        externalConversationId: r != null ? r : "null",
        isDailySpendLimitFlow:
          (s = i == null ? void 0 : i.toString()) != null ? s : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function st(t, n, r) {
      e("help_tray_ads_ai_dsl_ineligible_rendered", {
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function ut(t, n) {
      e("maiba_ad_object_reference_impression", {
        adObjectIds: t.join(","),
        botResponseId: n,
      });
    }
    function ct(t, n, r) {
      e("maiba_ad_object_reference_click", {
        adObjectIds: t.join(","),
        botResponseId: n,
        eventType: r,
      });
    }
    function dt(t, n, r, o, a) {
      e("help_tray_ads_ai_alr_async_notification", {
        botResponseId: t != null ? t : "null",
        externalConversationId: r != null ? r : "null",
        reviewId: a != null ? a : "null",
        reviewStatus: o != null ? o : "null",
        subscriptionId: n != null ? n : "null",
      });
    }
    function mt(t, n, r) {
      e("help_tray_ads_ai_asset_selection_auto_select", {
        count: r.toString(),
        externalConversationId: t != null ? t : "",
        type: n,
      });
    }
    function pt(t, n, r, o) {
      var a;
      e("maiba_ad_object_reference_error", {
        adObjectIds: (a = o == null ? void 0 : o.join(",")) != null ? a : "",
        adObjectType: n != null ? n : "",
        botResponseId: r != null ? r : "",
        errorType: t,
      });
    }
    function _t(t, n, r) {
      e("maiba_ad_object_reference_hover_card_load_time", {
        adObjectIds: t.join(","),
        botResponseId: n,
        loadTimeMs: r.toString(),
      });
    }
    function ft(t, n) {
      e("maiba_data_viz_impression", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
      });
    }
    function gt(t, n) {
      e("maiba_data_viz_hover", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
      });
    }
    function ht(t, n) {
      e("maiba_data_viz_swap", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
      });
    }
    function yt(t, n, r) {
      e("maiba_data_viz_metric_selector_click", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
        metricType: r,
      });
    }
    function Ct() {
      e("maiba_markdown_table_impression", { botResponseId: "" });
    }
    function bt(t, n, r) {
      e("maiba_creative_gen_carousel_impression", {
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
        variantCount: r.toString(),
      });
    }
    function vt(t, n, r, o) {
      var a;
      e("maiba_creative_gen_carousel_click", {
        action: r,
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
        selectedId: (a = o == null ? void 0 : o.selectedId) != null ? a : "",
        tileIndex:
          (o == null ? void 0 : o.tileIndex) != null
            ? o.tileIndex.toString()
            : "",
      });
    }
    function St(t, n) {
      e("maiba_creative_gen_single_image_impression", {
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function Rt(t, n, r) {
      e("maiba_creative_gen_single_image_click", {
        action: r,
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function Lt(t, n, r, o) {
      e("maiba_creative_gen_publish_card_impression", {
        afterImageCount: o.toString(),
        beforeImageCount: r.toString(),
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function Et(t, n, r, o, a) {
      e("maiba_creative_gen_publish_card_click", {
        action: r,
        afterImageCount: a.toString(),
        beforeImageCount: o.toString(),
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function kt(t, n, r) {
      e("maiba_creative_gen_pill_impression", {
        adgroupId: r != null ? r : "",
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function It(t, n, r) {
      e("maiba_creative_gen_pill_click", {
        action: "view",
        adgroupId: r != null ? r : "",
        botResponseId: t != null ? t : "",
        externalConversationId: n != null ? n : "",
      });
    }
    function Tt(t, n, r) {
      e("whatsapp_loader_shown", {
        selectedAssetId: n.id,
        selectedPlanID: t,
        threadIdx: r != null ? r : "",
      });
    }
    function Dt(t, n, r, o) {
      var a;
      e("maiba_data_viz_error_state", {
        botResponseId: t != null ? t : "",
        dataVizType: String(n),
        errorMessage: (a = o == null ? void 0 : o.message) != null ? a : "",
        errorType: r,
      });
    }
    function xt(t, n, r, o, a) {
      r === void 0 && (r = !1);
      var i = {
        botResponseId: n,
        conversationId: t,
        isHumanAgent: r.toString(),
      };
      (o != null && (i.channel = o),
        a != null && (i.surface = a),
        e("help_tray_ads_ai_notification_toast_impression", i));
    }
    function $t(t, n) {
      e("general", {
        ad_account_id: t != null ? t : "",
        event_type: "maiba_subscription_lifecycle",
        lifecycle_event: "subscribe",
        platform: "web",
        source: "use_maiba_async_message_subscription",
        subscription_name: "maiba_async_message",
        surface: n != null ? n : "",
      });
    }
    function Pt(t, n, r, o, a) {
      r === void 0 && (r = !1);
      var i = {
        botResponseId: n,
        conversationId: t,
        isHumanAgent: r.toString(),
      };
      (o != null && (i.channel = o),
        a != null && (i.surface = a),
        e("help_tray_ads_ai_notification_toast_click", i));
    }
    function Nt(t, n, r, o, a, i) {
      o === void 0 && (o = !1);
      var l = {
        botResponseId: n,
        conversationId: t,
        entrypoint: r,
        isHumanAgent: o.toString(),
      };
      (a != null && (l.channel = a),
        i != null && (l.surface = i),
        e("maiba_open_chat_thread_success", l));
    }
    function Mt(t) {
      e("maiba_async_thread_marked_read", { conversationId: t });
    }
    function wt(t) {
      e("maiba_async_unread_badge_impression", { conversationId: t });
    }
    function At(t) {
      e("maiba_async_unread_count_badge_impression", {
        unreadCount: String(t),
      });
    }
    function Ft(t, n, r) {
      (r === void 0 && (r = !1),
        e("maiba_bot_response_impression", {
          botResponseId: t,
          conversationId: n,
          isHumanAgent: r.toString(),
        }));
    }
    function Ot(t) {
      var n, r, o, a, i, l, s;
      e("maiba_workspace_canvas_lifecycle", {
        botResponseId: (n = t.botResponseId) != null ? n : "",
        conversationId: (r = t.conversationId) != null ? r : "",
        outcome: (o = t.outcome) != null ? o : "",
        product: (a = t.product) != null ? a : "",
        reason: (i = t.reason) != null ? i : "",
        stage: t.stage,
        surface: (l = t.surface) != null ? l : "",
        workspaceType: (s = t.workspaceType) != null ? s : "",
        workspaceVersion:
          t.workspaceVersion == null ? "" : String(t.workspaceVersion),
      });
    }
    function Bt(t, n) {
      e("maiba_copy_content_click", { botResponseId: t, conversationId: n });
    }
    function Wt() {
      e("maiba_dictation_impression", {});
    }
    function qt(t, n) {
      e("maiba_dictation_button_click", { action: t, connectionState: n });
    }
    function Ut(t) {
      e("maiba_dictation_used_on_send", { isOnlyDictation: t.toString() });
    }
    function Vt(t) {
      e("maiba_dictation_error", { errorType: t });
    }
    function Ht(t) {
      var n;
      e("maiba_dictation_session", {
        asrDomain: t.asrDomain,
        audioDurationMs: t.audioDurationMs.toString(),
        finalTranscriptCount: t.finalTranscriptCount.toString(),
        locale: t.locale,
        shortwaveId: (n = t.shortwaveId) != null ? n : "",
      });
    }
    function Gt(t, n) {
      e("maiba_generate_pdf_click", { botResponseId: t, conversationId: n });
    }
    function zt(t, n, r, o, a) {
      e("maiba_message_dwell_time", {
        botResponseId: t,
        conversationId: n,
        dwellTimeMs: String(r),
        hiddenReason: o,
        postStreamingDwellTimeMs: String(a),
      });
    }
    function jt(t, n, r, o) {
      e("maiba_message_fully_read", {
        botResponseId: t,
        conversationId: n,
        messageHeight: String(r),
        viewportHeight: String(o),
      });
    }
    function Kt(t, n, r) {
      e("maiba_mid_chat_prompts", {
        botResponseId: t,
        conversationId: n,
        type: r,
      });
    }
    function Qt(t, n, r, o) {
      e("maiba_comparison_preference_selected", {
        comparisonConversationId: o != null ? o : "",
        externalConversationId: t,
        preference: n,
        selectedButton: r,
      });
    }
    function Xt(t, n) {
      e("maiba_comparison_view_impression", {
        comparisonConversationId: n != null ? n : "",
        externalConversationId: t,
      });
    }
    function Yt(t, n) {
      e("maiba_proactive_summary_card_impression", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function Jt(t, n) {
      e("maiba_proactive_summary_card_click", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function Zt(t, n) {
      e("maiba_proactive_summary_card_dismissed", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function en(t, n) {
      e("maiba_proactive_summary_thread_opened", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function tn(t) {
      e("maiba_proactive_summary_card_lookup_miss", { adAccountId: t });
    }
    function nn(t, n, r) {
      e("maiba_proactive_badge_impression", {
        adAccountId: t,
        proactiveCount: String(n),
        totalUnreadCount: String(r),
      });
    }
    function rn(t, n, r, o) {
      e("maiba_scorecard_insitu_impression", {
        adAccountId: t,
        externalConversationId: n,
        hasKpiData: r ? "1" : "0",
        issueCardCount: String(o),
      });
    }
    function on(t) {
      var n, r;
      e("maiba_outcome_forecaster_impression", {
        adAccountId: t.adAccountID,
        adDraftId: t.adDraftID,
        botResponseId: t.botResponseId,
        campaignGroupId: t.campaignGroupID,
        dailyBudget: t.dailyBudget != null ? String(t.dailyBudget) : "",
        impressionsBand: t.impressionsBand,
        optimizationGoal: (n = t.optimizationGoal) != null ? n : "",
        predictedImpressions:
          t.predictedImpressions != null ? String(t.predictedImpressions) : "",
        predictedResults:
          t.predictedResults != null ? String(t.predictedResults) : "",
        resultsBand: (r = t.resultsBand) != null ? r : "",
        resultsLabel: t.resultsLabel,
      });
    }
    function an(t, n, r, o, a, i, l, s, u, c) {
      e("maiba_scorecard_report_impression", {
        adAccountId: t,
        entrypoint: l,
        externalConversationId: n,
        hasFunnel: o ? "1" : "0",
        hasKpi: r ? "1" : "0",
        issueCount: String(a),
        renderer: s,
        scorecardLoggingID: u != null ? u : "",
        shellTabCount: String(i),
        shellTabNames: c != null ? c : "",
      });
    }
    function ln(t, n, r) {
      e("maiba_scorecard_funnel_chart_click", {
        adAccountId: t,
        externalConversationId: n,
        selectedMetric: r,
      });
    }
    function sn(t, n) {
      e("maiba_scorecard_insitu_expand_click", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function un(t, n) {
      e("maiba_scorecard_insitu_collapse_click", {
        adAccountId: t,
        externalConversationId: n,
      });
    }
    function cn(t, n, r, o, a) {
      e("maiba_scorecard_issue_card_cta_click", {
        adAccountId: t,
        externalConversationId: n,
        insightTitle: r,
        originComponent: a,
        promptId: o,
      });
    }
    function dn(t, n, r, o, a, i) {
      e("maiba_scorecard_cta_click", {
        adAccountId: t,
        ctaLabel: r,
        ctaPrompt: o,
        externalConversationId: n,
        originComponent: a,
        renderer: i,
      });
    }
    function mn(t, n, r, o, a) {
      e("maiba_scorecard_issue_card_toggle", {
        adAccountId: t,
        expanded: o ? "1" : "0",
        externalConversationId: n,
        issueNumber: String(r),
        renderer: a,
      });
    }
    function pn(t, n, r, o, a, i, l) {
      e("maiba_scorecard_report_breakdown_tab_content_impression", {
        adAccountId: t,
        componentId: r,
        externalConversationId: n,
        renderer: l,
        surfaceId: o,
        tabIndex: String(a),
        tabTitle: i,
      });
    }
    function _n(t, n, r, o, a, i, l) {
      e("maiba_scorecard_report_breakdown_tab_click", {
        adAccountId: t,
        componentId: r,
        externalConversationId: n,
        renderer: l,
        surfaceId: o,
        tabIndex: String(a),
        tabTitle: i,
      });
    }
    function fn(t, n) {
      var r, o, a, i, l, s, u, c;
      e(t, {
        adAccountId: n.adAccountId,
        adObjectIds: (r = n.adObjectIds) != null ? r : "",
        adObjectType: (o = n.adObjectType) != null ? o : "",
        componentId: n.componentId,
        ctaType: n.ctaType,
        externalConversationId: n.externalConversationId,
        maibaRecommendationId: (a = n.maibaRecommendationId) != null ? a : "",
        nonOsCtaAction: (i = n.nonOsCtaAction) != null ? i : "",
        recommendationId: (l = n.recommendationId) != null ? l : "",
        recommendationToolType: (s = n.recommendationToolType) != null ? s : "",
        renderer: n.renderer,
        surfaceId: n.surfaceId,
        tabComponentId: (u = n.tabComponentId) != null ? u : "",
        tabIndex: n.tabIndex != null ? String(n.tabIndex) : "",
        tabTitle: (c = n.tabTitle) != null ? c : "",
      });
    }
    function gn(e) {
      fn("maiba_scorecard_report_recommendation_cta_impression", e);
    }
    function hn(e) {
      fn("maiba_scorecard_report_recommendation_cta_click", e);
    }
    function yn(t, n, r, o, a, i) {
      e("maiba_scorecard_parse_error", {
        errorMessage: r,
        errorName: o != null ? o : "",
        errorStack: a != null ? a : "",
        externalConversationId: i != null ? i : "",
        parseStage: n,
        surface: t,
      });
    }
    function Cn(t, n, r, o, a) {
      e("maiba_scorecard_render_error", {
        errorMessage: n,
        errorName: r != null ? r : "",
        errorStack: o != null ? o : "",
        externalConversationId: a != null ? a : "",
        surface: t,
      });
    }
    function bn(t, n, r, o, a, i) {
      e(
        t,
        babelHelpers.extends(
          {
            errorMessage: r,
            errorName: o != null ? o : "",
            errorStack: a != null ? a : "",
            surfaceId: n != null ? n : "",
          },
          i != null ? { is_from_history: i.toString() } : {},
        ),
      );
    }
    function vn(t, n, r) {
      e("maiba_a2ui_pipeline_checkpoint", {
        checkpointData: r != null ? r : "",
        checkpointStage: n,
        surfaceId: t != null ? t : "",
      });
    }
    function Sn(e, t, n, r, o) {
      bn("maiba_a2ui_pipeline_checkpoint_error", e, t, n, r, o);
    }
    function Rn(e, t, n, r, o) {
      bn("maiba_scorecard_report_a2ui_render_error", e, t, n, r, o);
    }
    function Ln(e, t, n, r, o) {
      var a =
        e != null && e.startsWith("scorecard-")
          ? "maiba_scorecard_report_a2ui_render_error"
          : "maiba_a2ui_render_error";
      bn(a, e, t, n, r, o);
    }
    ((l.logSupportTreatmentShown = u),
      (l.logSupportFormAssetSelect = c),
      (l.logSupportFormAssetListImpression = d),
      (l.logSupportFormIssueSelect = m),
      (l.logSupportFormPlanSelect = p),
      (l.logSupportFormChannelSelect = _),
      (l.logSupportFormGoToActiveChat = f),
      (l.logAssetIsRateLimited = g),
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
      (l.logSupportCaseSeeMoreClick = I),
      (l.logSupportFormArticleLoaded = T),
      (l.logSupporFormContactSupportClick = D),
      (l.logSupportFormSelfResolutionShown = x),
      (l.logSupportFormSubmitButtonShown = P),
      (l.logSupportFormSubmitButtonHidden = N),
      (l.logSupportFormSubmitButtonEnabled = M),
      (l.logSupportFormSubmitButtonDisabled = w),
      (l.logMarketingProClick = A),
      (l.logSupportFormCommonIssueSelect = F),
      (l.logSupportFormDetectedIssueSelect = O),
      (l.logSupportFormDetectedIssueLoad = B),
      (l.logSupportFormSelfResolutionCTAClick = W),
      (l.logSupportFormAssetChangeClick = q),
      (l.logSupportFormPlanChangeClick = U),
      (l.logHelpArticleImpression = V),
      (l.logPositiveFrictionLoad = H),
      (l.logPositiveFrictionExistingCaseClick = G),
      (l.logPositiveFrictionGoToChatClick = z),
      (l.logPositiveFrictionNewCaseClick = j),
      (l.logHelpArticleClick = K),
      (l.logHelpArticleOtherLinkClick = X),
      (l.logHelpArticleViewMoreToggle = Y),
      (l.logFlytrapClick = J),
      (l.logHelpCenterClick = Z),
      (l.logCancelPageRequestClick = ee),
      (l.logModalOpen = te),
      (l.logModalSubmission = ne),
      (l.logFooterClick = re),
      (l.logBackButtonClick = oe),
      (l.logFABContactSupportClick = ae),
      (l.logFABSearchPillClick = ie),
      (l.logFABSupportCasesClick = le),
      (l.logFABHelpCenterClick = se),
      (l.logHelpTrayOpen = ue),
      (l.logHelpTrayArticleOpen = ce),
      (l.logHelpTrayClose = de),
      (l.logSearch = me),
      (l.logSearchQuerySuggestionTypeaheadItemClick = pe),
      (l.logSearchInputChange = _e),
      (l.logSearchResultImpression = fe),
      (l.logSearchResultOpen = ge),
      (l.logAdsPolicyLearnMoreClick = he),
      (l.logSearchResults = ye),
      (l.logSuggestedQueryForEmptyResultsClick = Ce),
      (l.logSuggestedPillQueryClick = be),
      (l.logResourceClick = ve),
      (l.logCaseTrackingViewOpen = Se),
      (l.logCaseTrackingHistoryClick = Re),
      (l.logHomeContentRender = Le),
      (l.logGuidedFixEvent = Ee),
      (l.logSurveySubmit = ke),
      (l.logSurveyError = Ie),
      (l.logSurveyRender = Te),
      (l.logSurveyExpanded = De),
      (l.logSurveyToBHCButtonClick = xe),
      (l.logHelpTrayAlertListToggleExpand = $e),
      (l.logHelpTrayContactSupportButtonClick = Pe),
      (l.logHelpTrayWYCDActionButtonClick = Ne),
      (l.logBizwebTooltipArticleClick = Me),
      (l.logBizwebSearchSnippetImpression = we),
      (l.logBizwebContextualTooltipImpression = Ae),
      (l.logBizwebSearchSnippetReadArticleClick = Fe),
      (l.logBizwebSearchSnippetToggleExpand = Oe),
      (l.logHelpTrayArticleLoad = Be),
      (l.logHelpTrayArticleLoadFail = We),
      (l.logBizwebContextualLearnMoreClick = qe),
      (l.logBizwebContextualLearnMoreImpression = Ue),
      (l.logBizwebAdsTooltipGeoComponentHovered = Ve),
      (l.logBizwebSearchSnippetCmsContentLoad = He),
      (l.logBizwebSearchSnippetCmsContentLoadError = Ge),
      (l.logBizwebHTIssueSegmentSelection = ze),
      (l.logMarketingProShown = je),
      (l.logCaseTrackingShown = Ke),
      (l.logContactSupportButtonShown = Qe),
      (l.logCaseTrackingDetailsImpression = Xe),
      (l.logCaseTrackingOpenActiveChatButtonClick = Ye),
      (l.logCaseTrackingChatHistoryLinkClick = Je),
      (l.logCaseTrackingChatHistoryLinkImpression = Ze),
      (l.logHelpTrayGenericError = et),
      (l.logFeedbackBarImpression = tt),
      (l.logSurveyEmpty = nt),
      (l.logFeedbackBarClick = rt),
      (l.logHelpCenterLinkShown = ot),
      (l.logALRResolutionStatus = at),
      (l.logALRStatusMismatchWithAdAccountForDORA = it),
      (l.logALRStatusMismatchWithAdAccountForDSL = lt),
      (l.logDSLInEligibleWidgetRendered = st),
      (l.logAdObjectReferenceImpression = ut),
      (l.logAdObjectReferenceClick = ct),
      (l.logALRAsyncNotification = dt),
      (l.logMAIBAAssetSelectionAutoSelect = mt),
      (l.logAdObjectReferenceError = pt),
      (l.logAdObjectHoverCardLoadTime = _t),
      (l.logDataVizWidgetImpression = ft),
      (l.logDataVizWidgetHover = gt),
      (l.logDataVizWidgetSwap = ht),
      (l.logDataVizWidgetMetricSelectorClick = yt),
      (l.logDataVizMarkdownTableImpression = Ct),
      (l.logCreativeGenCarouselImpression = bt),
      (l.logCreativeGenCarouselClick = vt),
      (l.logCreativeGenSingleImageImpression = St),
      (l.logCreativeGenSingleImageClick = Rt),
      (l.logCreativeGenPublishCardImpression = Lt),
      (l.logCreativeGenPublishCardClick = Et),
      (l.logCreativeGenPillImpression = kt),
      (l.logCreativeGenPillClick = It),
      (l.logWhatsAppLoaderShown = Tt),
      (l.logDataVizErrorState = Dt),
      (l.logMAIBANotificationToastImpression = xt),
      (l.logMAIBAAsyncMessageSubscriptionSubscribe = $t),
      (l.logMAIBANotificationToastClick = Pt),
      (l.logMAIBAOpenChatThreadSuccess = Nt),
      (l.logMAIBAAsyncThreadMarkedRead = Mt),
      (l.logMAIBAAsyncUnreadBadgeImpression = wt),
      (l.logMAIBAAsyncUnreadCountBadgeImpression = At),
      (l.logMAIBABotResponseImpression = Ft),
      (l.logMAIBAWorkspaceCanvasLifecycle = Ot),
      (l.logMAIBACopyContentClick = Bt),
      (l.logMAIBADictationImpression = Wt),
      (l.logMAIBADictationButtonClick = qt),
      (l.logMAIBADictationUsedOnSend = Ut),
      (l.logMAIBADictationError = Vt),
      (l.logMAIBADictationSession = Ht),
      (l.logMAIBAGeneratePdfClick = Gt),
      (l.logMAIBAMessageDwellTime = zt),
      (l.logMAIBAMessageFullyRead = jt),
      (l.logMAIBAMidChatPrompts = Kt),
      (l.logMAIBAComparisonPreferenceSelected = Qt),
      (l.logMAIBAComparisonViewImpression = Xt),
      (l.logMAIBAProactiveSummaryCardImpression = Yt),
      (l.logMAIBAProactiveSummaryCardClick = Jt),
      (l.logMAIBAProactiveSummaryCardDismissed = Zt),
      (l.logMAIBAProactiveSummaryThreadOpened = en),
      (l.logMAIBAProactiveSummaryCardLookupMiss = tn),
      (l.logMAIBAProactiveBadgeImpression = nn),
      (l.logMAIBAScorecardInsituImpression = rn),
      (l.logMAIBAOutcomeForecasterImpression = on),
      (l.logMAIBAScorecardReportImpression = an),
      (l.logMAIBAScorecardFunnelChartClick = ln),
      (l.logMAIBAScorecardInsituExpandClick = sn),
      (l.logMAIBAScorecardInsituCollapseClick = un),
      (l.logMAIBAScorecardIssueCardCTAClick = cn),
      (l.logMAIBAScorecardCTAClick = dn),
      (l.logMAIBAScorecardIssueCardToggle = mn),
      (l.logMAIBAScorecardReportBreakdownTabContentImpression = pn),
      (l.logMAIBAScorecardReportBreakdownTabClick = _n),
      (l.logMAIBAScorecardReportRecommendationCTAImpression = gn),
      (l.logMAIBAScorecardReportRecommendationCTAClick = hn),
      (l.logMAIBAScorecardParseError = yn),
      (l.logMAIBAScorecardRenderError = Cn),
      (l.logMAIBAA2UIPipelineCheckpoint = vn),
      (l.logMAIBAA2UIPipelineCheckpointError = Sn),
      (l.logMAIBAA2UIScorecardRenderError = Rn),
      (l.logMAIBAA2UIRenderError = Ln));
  },
  98,
);
