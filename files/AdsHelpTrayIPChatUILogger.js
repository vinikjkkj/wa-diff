__d(
  "AdsHelpTrayIPChatUILogger",
  [
    "$InternalEnum",
    "AdsHelpTrayUILoggerStoreUtils",
    "adsHelpTrayBizSitePageTypeFromButtonSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({ LIGHTSPEED: "lightspeed", MWA: "mwa" });
    function s(e, t) {
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        e,
        t,
        r("adsHelpTrayBizSitePageTypeFromButtonSelector")(),
      );
    }
    function u(e) {
      s("help_tray_ip_chat_availability", {
        IPMWAChatAvailability: "true",
        surfaceAppID: e != null ? e : "",
      });
    }
    function c(e) {
      s("help_tray_ip_compact_inbox_impression", { numThreads: e.toString() });
    }
    function d(e) {
      S(e, "help_tray_ip_compact_inbox_render_error");
    }
    function m() {
      s("help_tray_ip_compact_inbox_view_all_click");
    }
    function p(e, t) {
      s("help_tray_ip_full_inbox_impression", {
        numActiveThreads: e.toString(),
        numInactiveThreads: t.toString(),
      });
    }
    function _(e) {
      S(e, "help_tray_ip_full_inbox_render_error");
    }
    function f(e, t) {
      s("help_tray_ip_chat_impression", { threadKey: t, type: String(e) });
    }
    function g(e, t) {
      s("new_chat_message_help_tray_opened", { threadKey: t, type: String(e) });
    }
    function h(e, t) {
      s("new_chat_message_help_tray_already_open", {
        threadKey: t,
        type: String(e),
      });
    }
    function y(e, t) {
      s("new_chat_message_notification_toast_rendered", {
        threadKey: t,
        type: String(e),
      });
    }
    function C(e, t) {
      s("new_chat_message_notification_sound_played", {
        threadKey: t,
        type: String(e),
      });
    }
    function b(e) {
      S(e, "new_chat_message_notification_sound_played");
    }
    function v(e, t) {
      S(e, "help_tray_ip_chat_render_error", t);
    }
    function S(e, t, n) {
      var r,
        o = {
          errorMessage: (r = e.message) != null ? r : "",
          errorName: e.name,
          errorStack: e.stack,
        };
      (n != null &&
        (o = babelHelpers.extends({}, o, { isAdsAIChat: n.toString() })),
        s(t, o));
    }
    function R() {
      s("help_tray_ip_support_help_button_impression");
    }
    function L() {
      s("help_tray_ip_support_help_button_click");
    }
    function E() {
      s("help_tray_ip_support_chat_button_impression");
    }
    function k() {
      return r("gkx")("25557");
    }
    var I = null;
    function T(e, t) {
      var n, r, o, a, i, l, u, c, d, m, p, _, f, g, h, y, C;
      ((I = (n = e.entrypoint_click_id) != null ? n : null),
        s(
          "help_tray_ip_ads_ai_entrypoint_click",
          babelHelpers.extends(
            {
              act: (r = e.act) != null ? r : "",
              campaignGroupIDs:
                (o = (a = e.campaignGroupIDs) == null ? void 0 : a.join(",")) !=
                null
                  ? o
                  : "",
              channel: (i = e.channel) != null ? i : "",
              conversationId: t != null ? t : "",
              entrypoint: String(e.entrypoint),
              entrypoint_click_id: (l = e.entrypoint_click_id) != null ? l : "",
              experiment_config: (u = e.experiment_config) != null ? u : "",
              is_cmo_enabled: k().toString(),
              isInSitu: e.isInSitu === !0 ? "true" : "false",
            },
            e.launch_origin != null ? { launch_origin: e.launch_origin } : {},
            {
              objectIds:
                (c = (d = e.adObjectIDs) == null ? void 0 : d.join(",")) != null
                  ? c
                  : "",
              objectLevel: (m = e.adObjectLevel) != null ? m : "",
              prompt: (p = e.prompt) != null ? p : "",
              prompt_id: (_ = e.prompt_id) != null ? _ : "",
              promptCategory: (f = e.promptCategory) != null ? f : "",
              promptHighRetentionTopic:
                (g = e.promptHighRetentionTopic) != null ? g : "",
              recommendationHashString:
                (h = e.recommendationHashString) != null ? h : "",
              recommendationType: (y = e.recommendationType) != null ? y : "",
              surface: e.surface != null ? e.surface : "",
              tip_name: (C = e.tip_name) != null ? C : "",
            },
          ),
        ));
    }
    function D(e) {
      var t, n, r, o, a, i, l, u, c, d, m, p;
      s("help_tray_ip_ads_ai_entrypoint_impression", {
        act: (t = e.act) != null ? t : "",
        entrypoint: String(e.entrypoint),
        experiment_config: (n = e.experiment_config) != null ? n : "",
        is_cmo_enabled: k().toString(),
        objectIds:
          (r = (o = e.adObjectIDs) == null ? void 0 : o.join(",")) != null
            ? r
            : "",
        objectLevel: (a = e.adObjectLevel) != null ? a : "",
        prompt: (i = e.prompt) != null ? i : "",
        prompt_ids: (l = e.prompt_ids) != null ? l : "",
        promptCategory: (u = e.promptCategory) != null ? u : "",
        promptHighRetentionTopic:
          (c = e.promptHighRetentionTopic) != null ? c : "",
        prompts: (d = e.prompts) != null ? d : "",
        recommendationHashString:
          (m = e.recommendationHashString) != null ? m : "",
        recommendationType: (p = e.recommendationType) != null ? p : "",
        surface: e.surface != null ? e.surface : "",
      });
    }
    function x(e, t) {
      var n,
        r,
        o,
        a,
        i = 3,
        l = t.affectedErrorObjects,
        u = l == null ? null : l.slice(0, i);
      s(e, {
        act: t.act,
        affectedErrorObjectCount: l == null ? "null" : String(l.length),
        affectedErrorObjectLoggedCount: u == null ? "null" : String(u.length),
        affectedErrorObjects: u == null ? "null" : JSON.stringify(u),
        entrypoint: String(t.entrypoint),
        hovercardSubstatusLevel:
          (n = t.hovercardSubstatusLevel) != null ? n : "null",
        loggedAllAffectedErrorObjects:
          l == null ? "null" : String(l.length <= i),
        prompt_id: t.prompt_id,
        recommendationHash: (r = t.recommendationHash) != null ? r : "null",
        selectedAdObjectDeliveryStatus:
          (o = t.selectedAdObjectDeliveryStatus) != null ? o : "null",
        selectedAdObjectErrorCode:
          t.selectedAdObjectErrorCode == null
            ? "null"
            : String(t.selectedAdObjectErrorCode),
        selectedAdObjectErrorLevel:
          (a = t.selectedAdObjectErrorLevel) != null ? a : "null",
        selectedAdObjectErrorSubstatuses:
          t.selectedAdObjectErrorSubstatuses == null
            ? "null"
            : JSON.stringify(t.selectedAdObjectErrorSubstatuses),
        selectedAdObjectID: String(t.selectedAdObjectID),
        selectedAdObjectLevel: t.selectedAdObjectLevel,
        surface: t.surface,
      });
    }
    function $(e) {
      x("maiba_amd_ad_error_entrypoint_cta_impression", e);
    }
    function P(e) {
      x("maiba_amd_ad_error_entrypoint_cta_click", e);
    }
    function N(e, t, n, r, o) {
      s(
        "help_tray_ip_ads_ai_markdown_rendering_error",
        babelHelpers.extends(
          { actionType: r, entityKey: t, entityValue: n, requestId: e },
          o != null ? { is_from_history: o.toString() } : {},
        ),
      );
    }
    function M(e, t) {
      s("help_tray_ip_ads_ai_marketing_pro_entrypoint_conversations", {
        conversationId: t,
        entrypoint: String(e),
        entrypoint_click_id: I != null ? I : "",
        is_cmo_enabled: k().toString(),
      });
    }
    function w(e) {
      s("help_tray_ip_ads_ai_marketing_pro_modal_entrypoint_click", {
        entrypoint: String(e),
      });
    }
    function A(e) {
      s("help_tray_ip_ads_ai_marketing_pro_modal_request_call_click", {
        entrypoint: String(e),
      });
    }
    function F(e) {
      var t, n, r, o, a;
      s("entry_point_ads_ai_visible", {
        entrypoint: String(e.entrypoint),
        objectIds:
          (t = (n = e.adObjectIDs) == null ? void 0 : n.join(",")) != null
            ? t
            : "",
        objectLevel: (r = e.adObjectLevel) != null ? r : "",
        recommendationHashString:
          (o = e.recommendationHashString) != null ? o : "",
        recommendationType: (a = e.recommendationType) != null ? a : "",
        surface: e.surface != null ? e.surface : "",
      });
    }
    function O() {
      s("help_tray_ip_support_chat_button_click");
    }
    function B() {
      s("help_tray_lite_button_click");
    }
    function W(e, t) {
      s("help_tray_article_link_click", { help_center_id: e, reason: t });
    }
    function q(e) {
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        "help_tray_lite_button_impression",
        void 0,
        void 0,
        e,
      );
    }
    function U(e) {
      s("help_tray_lite_popover_impression", { open_method: e });
    }
    function V(e) {
      s("help_tray_lite_row_click", { row: e });
    }
    function H(e, t, n) {
      s("help_tray_lite_support_chats_row_impression", {
        has_active_chat: t.toString(),
        has_archived_chat: n.toString(),
        shown: e.toString(),
      });
    }
    function G(e) {
      S(e, "help_tray_lite_has_chats_query_error");
    }
    function z() {
      s("help_tray_ip_chat_xma_impression");
    }
    function j(e, t) {
      var n =
        t != null
          ? { entrypoint: String(e), originatingEntrypoint: String(t) }
          : { entrypoint: String(e) };
      s("help_tray_ads_ai_start_chat_impression", n);
    }
    function K(e, t) {
      var n =
        t != null
          ? { entrypoint: String(e), originatingEntrypoint: String(t) }
          : { entrypoint: String(e) };
      s("help_tray_ads_ai_start_chat_click", n);
    }
    function Q() {}
    function X() {}
    function Y(e) {
      s("maiba_suggested_prompt_displayed", {
        entrypoint: e.entrypoint != null ? String(e.entrypoint) : "",
        placement: e.placement,
        prompt_ids: e.promptIds,
        prompt_texts: e.promptTexts,
        session_id: e.sessionId,
        source: e.source,
      });
    }
    function J(e) {
      s("maiba_suggested_prompt_clicked", {
        entrypoint: e.entrypoint != null ? String(e.entrypoint) : "",
        placement: e.placement,
        prompt_id: e.promptId,
        prompt_index: e.promptIndex.toString(),
        prompt_text: e.promptText,
        session_id: e.sessionId,
        source: e.source,
      });
    }
    function Z(e) {
      s("maiba_scheduled_tasks_callout_impression", {
        count: e.count.toString(),
        has_next: e.hasNext.toString(),
        surface: "",
      });
    }
    function ee(e) {
      s("maiba_scheduled_tasks_callout_click", {
        count: e.count.toString(),
        has_next: e.hasNext.toString(),
        surface: "",
      });
    }
    function te(e, t) {
      s("maiba_scheduled_tasks_list_impression", {
        count: e.toString(),
        is_empty: t.toString(),
      });
    }
    function ne(e) {
      s("maiba_scheduled_task_detail_open", {
        is_recurring: e.isRecurring.toString(),
        status: e.status,
        task_id: e.taskId,
      });
    }
    function re(e) {
      s("maiba_scheduled_task_past_runs_view", { task_id: e });
    }
    function oe(e) {
      s("maiba_scheduled_task_run_conversation_open", { task_id: e });
    }
    function ae(e) {
      s("maiba_unread_task_results_null_state_impression", {
        count: e.count.toString(),
        task_ids: e.taskIds.join(","),
        total_unread_count: e.totalUnreadCount.toString(),
      });
    }
    function ie(e) {
      s("maiba_unread_task_results_null_state_click", {
        count: e.count.toString(),
        position: e.position.toString(),
        task_id: e.taskId,
        unread_count: e.unreadCount.toString(),
      });
    }
    function le(e) {
      s("maiba_scheduled_task_edit", {
        field: e.field,
        outcome: e.outcome,
        task_id: e.taskId,
      });
    }
    function se(e) {
      s("maiba_scheduled_task_action", {
        action: e.action,
        outcome: e.outcome,
        task_id: e.taskId,
      });
    }
    function ue(e) {
      var t, n;
      s("maiba_scheduled_task_create_attempt", {
        source: e.source,
        suggestion_id: (t = e.suggestionId) != null ? t : "",
        surface: e.surface,
        task_type: (n = e.taskType) != null ? n : "",
      });
    }
    function ce(e, t) {
      return {
        count: e.length.toString(),
        suggestion_ids: e
          .map(function (e) {
            return e.id;
          })
          .join(","),
        surface: t,
        task_types: e
          .map(function (e) {
            return e.taskType;
          })
          .join(","),
      };
    }
    function de(e, t) {
      s("maiba_scheduled_task_suggestions_impression", ce(e, t));
    }
    function me(e, t, n) {
      s(
        "maiba_scheduled_task_suggestions_visible",
        babelHelpers.extends({}, ce(e, t), { visible_ratio: n.toFixed(2) }),
      );
    }
    ((l.IPChatType = e),
      (l.logIPMWAChatAvailable = u),
      (l.logIPChatCompactInboxRendered = c),
      (l.logIPChatCompactInboxRenderError = d),
      (l.logIPChatCompactInboxViewAllButtonClick = m),
      (l.logIPChatFullInboxRendered = p),
      (l.logIPChatFullInboxRenderError = _),
      (l.logIPChatRendered = f),
      (l.logHelpTrayOpenedFromChatNotification = g),
      (l.logHelpTrayAlreadyOpenOnNewMessageArrival = h),
      (l.logHelpTrayChatNotificationToastRendered = y),
      (l.logNotificationSoundPlayedOnChatNotification = C),
      (l.logIPChatCanNotPlayNotificationSoundError = b),
      (l.logIPChatRenderError = v),
      (l.logIPChatSupportHelpButtonImpression = R),
      (l.logIPChatSupportHelpButtonClick = L),
      (l.logIPChatSupportChatButtonImpression = E),
      (l.logAdsAIEntrypointClick = T),
      (l.logAdsAIEntrypointImpression = D),
      (l.logMAIBAAMDAdErrorEntrypointCTAImpression = $),
      (l.logMAIBAAMDAdErrorEntrypointCTAClick = P),
      (l.logAdsAIMarkdownRenderingError = N),
      (l.logAdsAIMarketingProEntrypointConversations = M),
      (l.logAdsAIMarketingProModalEntrypointClick = w),
      (l.logAdsAIMarketingProModalRequestCallClick = A),
      (l.logAdsAIEntrypointVisible = F),
      (l.logIPChatSupportChatButtonClick = O),
      (l.logHelpTrayLiteButtonClick = B),
      (l.logHelpTrayArticleLinkClick = W),
      (l.logHelpTrayLiteButtonImpression = q),
      (l.logHelpTrayLitePopoverImpression = U),
      (l.logHelpTrayLiteRowClick = V),
      (l.logHelpTrayLiteSupportChatsRowImpression = H),
      (l.logHelpTrayLiteHasChatsQueryError = G),
      (l.logIPChatXMAImpression = z),
      (l.logAdsAIStartChatImpression = j),
      (l.logAdsAIStartChatClick = K),
      (l.logAdsAIThreadRowClick = Q),
      (l.logAdsAIThreadRowImpression = X),
      (l.logMAIBASuggestedPromptDisplayed = Y),
      (l.logMAIBASuggestedPromptClicked = J),
      (l.logMAIBATasksCalloutImpression = Z),
      (l.logMAIBATasksCalloutClick = ee),
      (l.logMAIBATasksListImpression = te),
      (l.logMAIBATaskDetailOpen = ne),
      (l.logMAIBATaskPastRunsView = re),
      (l.logMAIBATaskRunConversationOpen = oe),
      (l.logMAIBAUnreadTaskResultsNullStateImpression = ae),
      (l.logMAIBAUnreadTaskResultsNullStateClick = ie),
      (l.logMAIBATaskEdit = le),
      (l.logMAIBATaskAction = se),
      (l.logMAIBATaskCreateAttempt = ue),
      (l.logMAIBATaskSuggestionsImpression = de),
      (l.logMAIBATaskSuggestionsVisible = me));
  },
  98,
);
