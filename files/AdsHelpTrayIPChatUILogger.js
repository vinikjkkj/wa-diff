__d(
  "AdsHelpTrayIPChatUILogger",
  [
    "$InternalEnum",
    "AdsHelpTrayUILoggerStoreUtils",
    "AdsInterfacesLogger",
    "adsHelpTrayBizSitePageTypeFromButtonSelector",
    "gkx",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({ LIGHTSPEED: "lightspeed", MWA: "mwa" });
    function u(e) {
      return e.brp_business_id != null
        ? { brp_business_id: e.brp_business_id }
        : {};
    }
    function c(e) {
      var t = {};
      return (
        e.enterprise_id != null && (t.enterprise_id = e.enterprise_id),
        e.launch_origin != null && (t.launch_origin = e.launch_origin),
        e.position != null && (t.position = String(e.position)),
        t
      );
    }
    function d(e) {
      return e === "ADGROUP"
        ? "AD"
        : e === "CAMPAIGN"
          ? "AD_SET"
          : e === "CAMPAIGN_GROUP"
            ? "CAMPAIGN"
            : null;
    }
    function m(e, t) {
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        e,
        t,
        r("adsHelpTrayBizSitePageTypeFromButtonSelector")(),
      );
    }
    var p = null,
      _ = null;
    function f(t) {
      return ((p = t), (_ = (e || (e = r("performanceNow")))()), t);
    }
    function g(t, n) {
      var o = _;
      return {
        act: t != null ? t : "",
        entrypoint: n != null ? String(n) : "UNKNOWN",
        entrypoint_click_id: H != null ? H : "",
        ms_since_request:
          o == null
            ? ""
            : String(Math.round((e || (e = r("performanceNow")))() - o)),
        request_id: p != null ? p : "",
        source: "Ads Manager (Campaigns)",
      };
    }
    function h(e) {
      var t,
        n = e.adAccountID,
        o = e.entrypoint,
        a = e.insights,
        i = "maiba_null_state_personalization_insights_section_impression",
        l = JSON.stringify(
          a.map(function (e) {
            return {
              description: e.description,
              id: e.id,
              prompt: e.prompt,
              title: e.title,
            };
          }),
        );
      (r("AdsInterfacesLogger").log({
        data:
          ((t = {}),
          (t.action_type = i),
          (t.ad_account_id = n),
          (t.sub_event = o != null ? String(o) : "UNKNOWN"),
          (t.item_count = a.length),
          (t.metadata = { insights: l }),
          (t.source = "Ads Manager (Campaigns)"),
          t),
        eventName: "maiba_null_state_personalization",
      }),
        m(
          "maiba_null_state_personalization_insights_section_impression",
          babelHelpers.extends({}, g(n, o), {
            insights: l,
            item_count: String(a.length),
            signal_types: a
              .map(function (e) {
                return e.signalType;
              })
              .join(","),
          }),
        ));
    }
    function y(e) {
      var t = e.actionType,
        n = e.adAccountID,
        r = e.description,
        o = e.entrypoint,
        a = e.id,
        i = e.position,
        l = e.prompt,
        s = e.recommendationID,
        u = e.signalType,
        c = e.title;
      m(
        "maiba_null_state_personalization_insight_impression",
        babelHelpers.extends({}, g(n, o), {
          action_type: t,
          description: r,
          insight_id: a,
          position: String(i),
          prompt: l,
          recommendation_id: s != null ? s : "",
          signal_type: u,
          title: c,
        }),
      );
    }
    function C(e) {
      var t = e.adAccountID,
        n = e.diagnostics,
        r = e.entrypoint,
        o = e.error,
        a = e.errorSource;
      m(
        "maiba_null_state_personalization_client_error",
        babelHelpers.extends({}, g(t, r), n, {
          error_message: o.message,
          error_name: o.name,
          error_source: a,
        }),
      );
    }
    function b(e) {
      var t = e.actionType,
        n = e.adAccountID,
        r = e.conversationID,
        o = e.entrypoint,
        a = e.id,
        i = e.position,
        l = e.recommendationID,
        s = e.signalType;
      m(
        "maiba_null_state_personalization_insight_click",
        babelHelpers.extends({}, g(n, o), {
          action_type: t,
          conversation_id: r != null ? r : "",
          insight_id: a,
          position: String(i),
          recommendation_id: l != null ? l : "",
          signal_type: s,
        }),
      );
    }
    function v(e) {
      var t = e.adAccountID,
        n = e.entrypoint;
      m("maiba_null_state_personalization_loading_impression", g(t, n));
    }
    function S(e) {
      var t = e.adAccountID,
        n = e.entrypoint,
        r = e.insightCount;
      m(
        "maiba_null_state_personalization_suggestions_section_impression",
        babelHelpers.extends({}, g(t, n), { insight_count: String(r) }),
      );
    }
    function R(e) {
      var t = e.action,
        n = e.adAccountID,
        r = e.entrypoint,
        o = e.itemType,
        a = e.suggestionID,
        i = e.taskID;
      m(
        t === "click"
          ? "maiba_null_state_personalization_task_click"
          : "maiba_null_state_personalization_task_impression",
        babelHelpers.extends({}, g(n, r), {
          item_type: o,
          suggestion_id: a != null ? a : "",
          task_id: i != null ? i : "",
        }),
      );
    }
    function L(e) {
      var t = e.adAccountID,
        n = e.entrypoint;
      m("maiba_null_state_personalization_task_section_impression", g(t, n));
    }
    function E(e) {
      var t = e.action,
        n = e.adAccountID,
        r = e.entrypoint;
      m(
        t === "click"
          ? "maiba_null_state_personalization_task_section_create_task_cta_click"
          : "maiba_null_state_personalization_task_section_create_task_cta_impression",
        g(n, r),
      );
    }
    function k(e) {
      m("help_tray_ip_chat_availability", {
        IPMWAChatAvailability: "true",
        surfaceAppID: e != null ? e : "",
      });
    }
    function I(e) {
      m("help_tray_ip_compact_inbox_impression", { numThreads: e.toString() });
    }
    function T(e) {
      B(e, "help_tray_ip_compact_inbox_render_error");
    }
    function D() {
      m("help_tray_ip_compact_inbox_view_all_click");
    }
    function x(e, t) {
      m("help_tray_ip_full_inbox_impression", {
        numActiveThreads: e.toString(),
        numInactiveThreads: t.toString(),
      });
    }
    function $(e) {
      B(e, "help_tray_ip_full_inbox_render_error");
    }
    function P(e, t) {
      m("help_tray_ip_chat_impression", { threadKey: t, type: String(e) });
    }
    function N(e, t) {
      m("new_chat_message_help_tray_opened", { threadKey: t, type: String(e) });
    }
    function M(e, t) {
      m("new_chat_message_help_tray_already_open", {
        threadKey: t,
        type: String(e),
      });
    }
    function w(e, t) {
      m("new_chat_message_notification_toast_rendered", {
        threadKey: t,
        type: String(e),
      });
    }
    function A(e, t) {
      m("new_chat_message_notification_sound_played", {
        threadKey: t,
        type: String(e),
      });
    }
    function F(e) {
      B(e, "new_chat_message_notification_sound_played");
    }
    function O(e, t) {
      B(e, "help_tray_ip_chat_render_error", t);
    }
    function B(e, t, n) {
      var r,
        o = {
          errorMessage: (r = e.message) != null ? r : "",
          errorName: e.name,
          errorStack: e.stack,
        };
      (n != null &&
        (o = babelHelpers.extends({}, o, { isAdsAIChat: n.toString() })),
        m(t, o));
    }
    function W() {
      m("help_tray_ip_support_help_button_impression");
    }
    function q() {
      m("help_tray_ip_support_help_button_click");
    }
    function U() {
      m("help_tray_ip_support_chat_button_impression");
    }
    function V() {
      return r("gkx")("25557");
    }
    var H = null;
    function G(e, t) {
      var n, r, o, a, i, l, s, c, d, p, _, f, g, h, y, C, b;
      ((H = (n = e.entrypoint_click_id) != null ? n : null),
        m(
          "help_tray_ip_ads_ai_entrypoint_click",
          babelHelpers.extends(
            {},
            u(e),
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
              experiment_config: (s = e.experiment_config) != null ? s : "",
              is_cmo_enabled: V().toString(),
              isInSitu: e.isInSitu === !0 ? "true" : "false",
            },
            e.launch_origin != null ? { launch_origin: e.launch_origin } : {},
            {
              objectIds:
                (c = (d = e.adObjectIDs) == null ? void 0 : d.join(",")) != null
                  ? c
                  : "",
              objectLevel: (p = e.adObjectLevel) != null ? p : "",
              prompt: (_ = e.prompt) != null ? _ : "",
              prompt_id: (f = e.prompt_id) != null ? f : "",
              promptCategory: (g = e.promptCategory) != null ? g : "",
              promptHighRetentionTopic:
                (h = e.promptHighRetentionTopic) != null ? h : "",
              recommendationHashString:
                (y = e.recommendationHashString) != null ? y : "",
              recommendationType: (C = e.recommendationType) != null ? C : "",
              surface: e.surface != null ? e.surface : "",
              tip_name: (b = e.tip_name) != null ? b : "",
            },
          ),
        ));
    }
    function z(e) {
      var t, n, r, o, a, i, l, s, d, p, _, f;
      m(
        "help_tray_ip_ads_ai_entrypoint_impression",
        babelHelpers.extends(
          {},
          u(e),
          c(e),
          {
            act: (t = e.act) != null ? t : "",
            entrypoint: String(e.entrypoint),
            experiment_config: (n = e.experiment_config) != null ? n : "",
            is_cmo_enabled: V().toString(),
            objectIds:
              (r = (o = e.adObjectIDs) == null ? void 0 : o.join(",")) != null
                ? r
                : "",
            objectLevel: (a = e.adObjectLevel) != null ? a : "",
            prompt: (i = e.prompt) != null ? i : "",
          },
          e.prompt_id != null ? { prompt_id: e.prompt_id } : {},
          {
            prompt_ids: (l = e.prompt_ids) != null ? l : "",
            promptCategory: (s = e.promptCategory) != null ? s : "",
            promptHighRetentionTopic:
              (d = e.promptHighRetentionTopic) != null ? d : "",
            prompts: (p = e.prompts) != null ? p : "",
            recommendationHashString:
              (_ = e.recommendationHashString) != null ? _ : "",
            recommendationType: (f = e.recommendationType) != null ? f : "",
            surface: e.surface != null ? e.surface : "",
          },
        ),
      );
    }
    function j(e, t) {
      var n,
        r,
        o = c(e);
      (e.act != null && (o.act = e.act),
        e.adObjectIDs != null && (o.objectIds = e.adObjectIDs.join(",")),
        e.adObjectLevel != null && (o.objectLevel = e.adObjectLevel),
        m(
          "help_tray_ip_ads_ai_entrypoint_launch_failed",
          babelHelpers.extends({}, o, {
            entrypoint: String(e.entrypoint),
            outcome: t,
            prompt_id: (n = e.prompt_id) != null ? n : "",
            promptCategory: (r = e.promptCategory) != null ? r : "",
            surface: e.surface != null ? e.surface : "",
          }),
        ));
    }
    function K(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s = 3,
        u = t.affectedErrorObjects,
        c = u == null ? null : u.slice(0, s);
      m(
        e,
        babelHelpers.extends(
          { act: t.act },
          n != null
            ? {
                action_type: n.actionType,
                experiment_condition: n.experimentCondition,
              }
            : {},
          {
            affectedErrorObjectCount: u == null ? "null" : String(u.length),
            affectedErrorObjectLoggedCount:
              c == null ? "null" : String(c.length),
            affectedErrorObjects: c == null ? "null" : JSON.stringify(c),
            entrypoint: String(t.entrypoint),
            hovercardSubstatusLevel:
              (r = t.hovercardSubstatusLevel) != null ? r : "null",
            loggedAllAffectedErrorObjects:
              u == null ? "null" : String(u.length <= s),
            prompt_id: t.prompt_id,
            recommendationHash: (o = t.recommendationHash) != null ? o : "null",
            selectedAdObjectDeliveryStatus:
              (a = t.selectedAdObjectDeliveryStatus) != null ? a : "null",
            selectedAdObjectErrorCode:
              t.selectedAdObjectErrorCode == null
                ? "null"
                : String(t.selectedAdObjectErrorCode),
            selectedAdObjectErrorLevel:
              (i = t.selectedAdObjectErrorLevel) != null ? i : "null",
            selectedAdObjectErrorSubstatuses:
              t.selectedAdObjectErrorSubstatuses == null
                ? "null"
                : JSON.stringify(t.selectedAdObjectErrorSubstatuses),
            selectedAdObjectID: String(t.selectedAdObjectID),
            selectedAdObjectLevel: t.selectedAdObjectLevel,
            surface:
              (l = n == null ? void 0 : n.surface) != null ? l : t.surface,
          },
        ),
      );
    }
    function Q(e) {
      m(
        "maiba_amd_ad_error_entrypoint_cta_click",
        babelHelpers.extends(
          {
            act: e.act,
            action_type: e.actionType,
            experiment_condition: e.experimentCondition,
          },
          e.experimentVersion != null
            ? { experiment_version: e.experimentVersion }
            : {},
          { surface: e.surface },
        ),
      );
    }
    function X(e) {
      m(
        "maiba_amd_ad_error_entrypoint_cta_impression",
        babelHelpers.extends(
          {
            act: e.act,
            action_type: e.actionType,
            experiment_condition: e.experimentCondition,
          },
          e.experimentVersion != null
            ? { experiment_version: e.experimentVersion }
            : {},
          { surface: e.surface },
        ),
      );
    }
    function Y(e, t) {
      K("maiba_amd_ad_error_entrypoint_cta_impression", e, t);
    }
    function J(e, t) {
      K("maiba_amd_ad_error_entrypoint_cta_click", e, t);
    }
    function Z(e, t, n, r, o) {
      m(
        "help_tray_ip_ads_ai_markdown_rendering_error",
        babelHelpers.extends(
          { actionType: r, entityKey: t, entityValue: n, requestId: e },
          o != null ? { is_from_history: o.toString() } : {},
        ),
      );
    }
    function ee(e, t) {
      m("help_tray_ip_ads_ai_marketing_pro_entrypoint_conversations", {
        conversationId: t,
        entrypoint: String(e),
        entrypoint_click_id: H != null ? H : "",
        is_cmo_enabled: V().toString(),
      });
    }
    function te(e) {
      m("help_tray_ip_ads_ai_marketing_pro_modal_request_call_click", {
        entrypoint: String(e),
      });
    }
    function ne(e) {
      var t, n, r, o, a, i;
      m(
        "entry_point_ads_ai_visible",
        babelHelpers.extends(
          {},
          u(e),
          {
            act: (t = e.act) != null ? t : "",
            entrypoint: String(e.entrypoint),
            objectIds:
              (n = (r = e.adObjectIDs) == null ? void 0 : r.join(",")) != null
                ? n
                : "",
            objectLevel: (o = e.adObjectLevel) != null ? o : "",
          },
          e.prompt_id != null ? { prompt_id: e.prompt_id } : {},
          {
            recommendationHashString:
              (a = e.recommendationHashString) != null ? a : "",
            recommendationType: (i = e.recommendationType) != null ? i : "",
            surface: e.surface != null ? e.surface : "",
          },
        ),
      );
    }
    function re() {
      m("help_tray_ip_support_chat_button_click");
    }
    function oe() {
      m("help_tray_lite_button_click");
    }
    function ae(e, t) {
      m("help_tray_article_link_click", { help_center_id: e, reason: t });
    }
    function ie(e) {
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
        "help_tray_lite_button_impression",
        void 0,
        void 0,
        e,
      );
    }
    function le(e) {
      m("help_tray_lite_popover_impression", { open_method: e });
    }
    function se(e) {
      m("help_tray_lite_row_click", { row: e });
    }
    function ue(e, t, n) {
      m("help_tray_lite_support_chats_row_impression", {
        has_active_chat: t.toString(),
        has_archived_chat: n.toString(),
        shown: e.toString(),
      });
    }
    function ce(e) {
      B(e, "help_tray_lite_has_chats_query_error");
    }
    function de() {
      m("help_tray_ip_chat_xma_impression");
    }
    function me(e, t) {
      var n =
        t != null
          ? { entrypoint: String(e), originatingEntrypoint: String(t) }
          : { entrypoint: String(e) };
      m("help_tray_ads_ai_start_chat_impression", n);
    }
    function pe(e, t) {
      var n =
        t != null
          ? { entrypoint: String(e), originatingEntrypoint: String(t) }
          : { entrypoint: String(e) };
      m("help_tray_ads_ai_start_chat_click", n);
    }
    function _e() {}
    function fe() {}
    function ge(e) {
      var t,
        n = {
          entrypoint: e.entrypoint != null ? String(e.entrypoint) : "",
          entrypoint_click_id: H != null ? H : "",
          origin_component: (t = e.originComponent) != null ? t : "",
          placement: e.placement,
          prompt_ids: e.promptIds,
          prompt_texts: e.promptTexts,
          session_id: e.sessionId,
          source: e.source,
        };
      (e.enterpriseID != null && (n.enterprise_id = e.enterpriseID),
        e.promptIssueTypes != null &&
          (n.prompt_issue_types = e.promptIssueTypes),
        e.promptPositions != null && (n.prompt_positions = e.promptPositions),
        m("maiba_suggested_prompt_displayed", n));
    }
    function he(e) {
      var t,
        n = {
          entrypoint: e.entrypoint != null ? String(e.entrypoint) : "",
          entrypoint_click_id: H != null ? H : "",
          origin_component: (t = e.originComponent) != null ? t : "",
          placement: e.placement,
          prompt_id: e.promptId,
          prompt_index: e.promptIndex.toString(),
          prompt_text: e.promptText,
          session_id: e.sessionId,
          source: e.source,
        };
      (e.enterpriseID != null && (n.enterprise_id = e.enterpriseID),
        e.issueType != null && (n.issue_type = e.issueType),
        e.position != null && (n.position = String(e.position)),
        m("maiba_suggested_prompt_clicked", n));
    }
    function ye(e, t) {
      m("maiba_scheduled_tasks_list_impression", {
        count: e.toString(),
        is_empty: t.toString(),
      });
    }
    function Ce(e) {
      m("maiba_scheduled_task_detail_open", {
        is_recurring: e.isRecurring.toString(),
        status: e.status,
        task_id: e.taskId,
      });
    }
    function be(e) {
      m("maiba_scheduled_task_past_runs_view", { task_id: e });
    }
    function ve(e) {
      m("maiba_scheduled_task_run_conversation_open", { task_id: e });
    }
    function Se(e) {
      m("maiba_unread_task_results_null_state_impression", {
        count: e.count.toString(),
        task_ids: e.taskIds.join(","),
        total_unread_count: e.totalUnreadCount.toString(),
      });
    }
    function Re(e) {
      m("maiba_unread_task_results_null_state_click", {
        count: e.count.toString(),
        position: e.position.toString(),
        task_id: e.taskId,
        unread_count: e.unreadCount.toString(),
      });
    }
    function Le(e) {
      m("maiba_scheduled_task_action", {
        action: e.action,
        outcome: e.outcome,
        task_id: e.taskId,
      });
    }
    function Ee(e) {
      var t, n;
      m("maiba_scheduled_task_create_attempt", {
        source: e.source,
        suggestion_id: (t = e.suggestionId) != null ? t : "",
        surface: e.surface,
        task_type: (n = e.taskType) != null ? n : "",
      });
    }
    function ke(e, t) {
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
    function Ie(e, t) {
      m("maiba_scheduled_task_suggestions_impression", ke(e, t));
    }
    function Te(e, t, n) {
      m(
        "maiba_scheduled_task_suggestions_visible",
        babelHelpers.extends({}, ke(e, t), { visible_ratio: n.toFixed(2) }),
      );
    }
    ((l.IPChatType = s),
      (l.getMAIBAAMDAdRejectSurface = d),
      (l.trackMAIBANullStateRequest = f),
      (l.logMAIBANullStatePersonalizationInsightsSectionImpression = h),
      (l.logMAIBANullStatePersonalizationInsightImpression = y),
      (l.logMAIBANullStatePersonalizationClientError = C),
      (l.logMAIBANullStatePersonalizationInsightClick = b),
      (l.logMAIBANullStatePersonalizationLoadingImpression = v),
      (l.logMAIBANullStatePersonalizationSuggestionsSectionImpression = S),
      (l.logMAIBANullStatePersonalizationTaskEvent = R),
      (l.logMAIBANullStatePersonalizationTaskSectionImpression = L),
      (l.logMAIBANullStatePersonalizationCreateTaskCTAEvent = E),
      (l.logIPMWAChatAvailable = k),
      (l.logIPChatCompactInboxRendered = I),
      (l.logIPChatCompactInboxRenderError = T),
      (l.logIPChatCompactInboxViewAllButtonClick = D),
      (l.logIPChatFullInboxRendered = x),
      (l.logIPChatFullInboxRenderError = $),
      (l.logIPChatRendered = P),
      (l.logHelpTrayOpenedFromChatNotification = N),
      (l.logHelpTrayAlreadyOpenOnNewMessageArrival = M),
      (l.logHelpTrayChatNotificationToastRendered = w),
      (l.logNotificationSoundPlayedOnChatNotification = A),
      (l.logIPChatCanNotPlayNotificationSoundError = F),
      (l.logIPChatRenderError = O),
      (l.logIPChatSupportHelpButtonImpression = W),
      (l.logIPChatSupportHelpButtonClick = q),
      (l.logIPChatSupportChatButtonImpression = U),
      (l.logAdsAIEntrypointClick = G),
      (l.logAdsAIEntrypointImpression = z),
      (l.logAdsAIEntrypointLaunchFailure = j),
      (l.logMAIBAAMDAdRejectCTAClick = Q),
      (l.logMAIBAAMDAdRejectCTAImpression = X),
      (l.logMAIBAAMDAdErrorEntrypointCTAImpression = Y),
      (l.logMAIBAAMDAdErrorEntrypointCTAClick = J),
      (l.logAdsAIMarkdownRenderingError = Z),
      (l.logAdsAIMarketingProEntrypointConversations = ee),
      (l.logAdsAIMarketingProModalRequestCallClick = te),
      (l.logAdsAIEntrypointVisible = ne),
      (l.logIPChatSupportChatButtonClick = re),
      (l.logHelpTrayLiteButtonClick = oe),
      (l.logHelpTrayArticleLinkClick = ae),
      (l.logHelpTrayLiteButtonImpression = ie),
      (l.logHelpTrayLitePopoverImpression = le),
      (l.logHelpTrayLiteRowClick = se),
      (l.logHelpTrayLiteSupportChatsRowImpression = ue),
      (l.logHelpTrayLiteHasChatsQueryError = ce),
      (l.logIPChatXMAImpression = de),
      (l.logAdsAIStartChatImpression = me),
      (l.logAdsAIStartChatClick = pe),
      (l.logAdsAIThreadRowClick = _e),
      (l.logAdsAIThreadRowImpression = fe),
      (l.logMAIBASuggestedPromptDisplayed = ge),
      (l.logMAIBASuggestedPromptClicked = he),
      (l.logMAIBATasksListImpression = ye),
      (l.logMAIBATaskDetailOpen = Ce),
      (l.logMAIBATaskPastRunsView = be),
      (l.logMAIBATaskRunConversationOpen = ve),
      (l.logMAIBAUnreadTaskResultsNullStateImpression = Se),
      (l.logMAIBAUnreadTaskResultsNullStateClick = Re),
      (l.logMAIBATaskAction = Le),
      (l.logMAIBATaskCreateAttempt = Ee),
      (l.logMAIBATaskSuggestionsImpression = Ie),
      (l.logMAIBATaskSuggestionsVisible = Te));
  },
  98,
);
