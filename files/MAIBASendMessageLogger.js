__d(
  "MAIBASendMessageLogger",
  [
    "ALToolTab",
    "AdsAIUserInteractionSources",
    "AdsHelpTrayIPChatUILogger",
    "AdsHelpTrayUILoggerStoreUtils",
    "AdsOsmipChatUtils",
    "AdsPerfInteractionsController",
    "FBLogger",
    "InteractionTracingMetrics",
    "MAIBAObservabilityUtils",
    "MAIBAR23LoggingUtils",
    "QPLUserFlow",
    "gkx",
    "requireDeferred",
    "runOnce",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("MAIBAInlinedContext").__setRef(
        "MAIBASendMessageLogger",
      ),
      s = !1,
      u = null,
      c = null,
      d = !1,
      m = r("FBLogger")("axp_maiba_foundations_ux");
    function p() {
      var e = u;
      if (e != null) {
        var t = r("InteractionTracingMetrics").get(e);
        if ((t == null ? void 0 : t.completed) != null) {
          var n = r(
            "AdsPerfInteractionsController",
          ).getActiveInteractionTraceAPI(e);
          r("gkx")("25671") && n != null && n.forceCompleteTrace();
        }
      }
    }
    function _(e) {
      e != null &&
        r("gkx")("25671") &&
        r("InteractionTracingMetrics").addMetadata(e, "success_on_unload", 1);
    }
    function f(e) {
      var t = e.message.toLowerCase();
      return t.includes("network") ||
        t.includes("failed to fetch") ||
        t.includes("disconnect") ||
        t.includes("timeout") ||
        t.includes("socket")
        ? "network"
        : "server";
    }
    function g() {
      var t, n;
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents("general", {
        event_type: "consent_mutation_success",
        source: "maiba_explicit_consent_guidance",
        surface:
          (t =
            (n = e.getModuleIfRequired()) == null ||
            (n = n.getInlinedContext()) == null
              ? void 0
              : n.surface) != null
            ? t
            : "",
      });
    }
    function h(t) {
      var n, r;
      (m.warn("Error updating ads ai consent status", t.toString()),
        o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents("general", {
          event_type: "consent_mutation_failure",
          source: "maiba_explicit_consent_guidance",
          surface:
            (n =
              (r = e.getModuleIfRequired()) == null ||
              (r = r.getInlinedContext()) == null
                ? void 0
                : r.surface) != null
              ? n
              : "",
        }));
    }
    var y = r("runOnce")(function () {
      r("AdsPerfInteractionsController").addEventListener(
        o("MAIBAObservabilityUtils").getMAIBASendMessageInteractionName(),
        "end",
        function (e) {
          r("InteractionTracingMetrics").addMarkerPoint(
            e.interactionID,
            o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName() +
              "_end",
            "AppTiming",
          );
        },
      );
    });
    function C() {
      var e = u;
      e != null &&
        r("InteractionTracingMetrics").addAnnotationBoolean(
          e,
          "is_error_notice_shown",
          !0,
        );
    }
    function b(e, t) {
      m.warn(
        t != null
          ? "Send message mutation called by '" +
              e +
              "' with empty string ECID from entry point: " +
              t +
              "."
          : "Send message mutation called by '" +
              e +
              "' with empty string ECID with no entry point.",
      );
    }
    function v(e) {
      var t = e.containsAttachment,
        n = e.entrypoint,
        a = e.externalConversationId,
        i = e.isSentFromOutOfChat,
        l = e.isV3Flow,
        m = l === void 0 ? !1 : l,
        _ = e.message,
        f = e.messageType,
        g = e.offlineThreadingId,
        h = e.originatingMidChatPromptBotResponseId,
        C = e.promptId,
        b = e.promptIndex,
        v = e.promptSource,
        S = e.quoteData,
        R = e.sendMessageVersion;
      (n != null &&
        o(
          "AdsHelpTrayIPChatUILogger",
        ).logAdsAIMarketingProEntrypointConversations(n, a),
        (s = m),
        (c = null),
        (d = !1),
        p());
      var L = r("AdsPerfInteractionsController").startInteraction(
        o("MAIBAObservabilityUtils").getMAIBASendMessageInteractionName(),
        f === "SHADOW"
          ? r("AdsAIUserInteractionSources").SHADOW_TRAFFIC
          : r("AdsAIUserInteractionSources").USER_SENT_MESSAGE_IN_CHAT,
        { isVeryLongInteraction: !0 },
      );
      u = L;
      var E = o("ALToolTab").getCurrentToolTab(),
        k = E.tab,
        I = E.tool;
      return (
        r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
          o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
          {
            app_surface: I,
            contains_attachment: t,
            contains_quote: S != null,
            conversation_id: a,
            entrypoint: n != null ? n : "",
            is_shadow_traffic: f === "SHADOW",
            is_v3_flow: m,
            is_web_platform_chat: !0,
            message_source: i ? "out_of_chat" : "chat",
            message_type: f != null ? f : "",
            offline_threading_id: g,
            originating_mid_chat_prompt_bot_response_id: h != null ? h : "",
            prompt_id: C != null ? C : "",
            prompt_index: b != null ? b : null,
            prompt_source: v != null ? v : "",
            quote_from_out_of_chat:
              S != null && S.source
                ? (S == null ? void 0 : S.source) === "FROM_PAGE"
                : null,
            referrer_tab: k != null ? k : "",
            referrer_tool: I != null ? I : "",
          },
        ),
        R != null &&
          r("InteractionTracingMetrics").addAnnotation(
            L,
            "send_message_version",
            R,
          ),
        y(),
        r("InteractionTracingMetrics").addJoinId(L, g),
        r("gkx")("15770") &&
          r("InteractionTracingMetrics").addAnnotation(L, "user_query", _),
        L
      );
    }
    function S(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "request_sent_to_server",
        "AppTiming",
      );
      var t =
        o(
          "AdsOsmipChatUtils",
        ).getActiveHeroTracingMessageResponseEventInstanceKey();
      if (t != null) {
        var n = o("MAIBAObservabilityUtils").getMAIBASendMessageQPLEvent();
        r("QPLUserFlow").addAlignmentPointForJoin(n, 0, { instanceKey: t });
      }
    }
    function R(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "collecting_client_context_start",
        "AppTiming",
      );
    }
    function L(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "collecting_client_context_end",
        "AppTiming",
      );
    }
    function E(e) {
      var t =
        o(
          "AdsOsmipChatUtils",
        ).getActiveHeroTracingMessageResponseEventInstanceKey();
      if (t != null) {
        var n = o("MAIBAObservabilityUtils").getMAIBASendMessageQPLEvent();
        r("QPLUserFlow").addAlignmentPointForJoin(n, 3, { instanceKey: t });
      }
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "ack_from_server_received",
        "AppTiming",
      );
    }
    function k() {}
    function I(e) {
      r("AdsPerfInteractionsController").annotateFailure(
        o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
        i.id,
        { error: e },
      );
    }
    function T(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "v2_mutation_load_start",
        "AppTiming",
      );
    }
    function D(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "v2_mutation_load_end",
        "AppTiming",
      );
    }
    function x(e) {
      var t = u;
      t == null ||
        !s ||
        d ||
        ((d = !0),
        r("InteractionTracingMetrics").addMarkerPoint(
          t,
          "subscription_data_received",
          "AppTiming",
        ),
        r("InteractionTracingMetrics").addAnnotation(
          t,
          "subscription_data_received_ts",
          String(Date.now()),
        ),
        r("InteractionTracingMetrics").addAnnotation(
          t,
          "subscription_data_streaming_state",
          e,
        ));
    }
    function $() {
      u != null &&
        r("InteractionTracingMetrics").addMarkerPoint(
          u,
          "v3_mutation_ack_received",
          "AppTiming",
        );
    }
    function P() {
      u != null &&
        r("InteractionTracingMetrics").addMarkerPoint(
          u,
          "mutation_completed",
          "AppTiming",
        );
    }
    function N(e) {
      var t = u;
      t != null &&
        (r("InteractionTracingMetrics").addAnnotation(
          t,
          "error_source",
          "mutation",
        ),
        r("InteractionTracingMetrics").addAnnotation(
          t,
          "error_message",
          e.message,
        ),
        r("AdsPerfInteractionsController").annotateFailure(
          o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
          i.id,
          { error: e },
        ));
    }
    function M(e) {
      var t = u;
      t != null &&
        (r("InteractionTracingMetrics").addAnnotation(
          t,
          "error_source",
          "subscription",
        ),
        r("InteractionTracingMetrics").addAnnotation(
          t,
          "subscription_error",
          e.message,
        ),
        r("InteractionTracingMetrics").addAnnotation(
          t,
          "subscription_error_type",
          f(e),
        ),
        (c = e));
    }
    function w(e) {
      u != null &&
        r("InteractionTracingMetrics").addAnnotation(u, "recovery_trigger", e);
    }
    function A(e) {
      if (u != null) {
        if (
          (r("InteractionTracingMetrics").addAnnotation(
            u,
            "recovery_outcome",
            e,
          ),
          e === "fail" && c != null)
        ) {
          var t = c;
          r("AdsPerfInteractionsController").annotateFailure(
            o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
            i.id,
            { error: t },
          );
        }
        c = null;
      }
    }
    function F() {
      s && (s = !1);
    }
    function O(e, t) {
      var n = [],
        r = [],
        a = [];
      if (t != null)
        for (var i of t)
          switch (i.type) {
            case "CAMPAIGN_GROUP":
              n.push(i.id);
              break;
            case "CAMPAIGN":
              r.push(i.id);
              break;
            case "ADGROUP":
              a.push(i.id);
              break;
          }
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        adgroupIDs: a,
        campaignGroupIDs: n,
        campaignIDs: r,
        conversationID: e,
        event: "copilot_organic_in_editor",
      });
    }
    function B() {
      return s;
    }
    var W = {
      logBeforeCommitMutation: S,
      logBotResponseDelivered: _,
      logConsentUpdateError: h,
      logConsentUpdateSuccess: g,
      logCopilotOrganicInEditor: O,
      logEmptyStringECIDOrigin: b,
      logErrorNoticeShown: C,
      logFirstMutationResponse: E,
      logGetClientContextEnd: L,
      logGetClientContextStart: R,
      logMutationComplete: k,
      logMutationError: I,
      logRecoveryAttempt: w,
      logRecoveryOutcome: A,
      logSendMessageStart: v,
      logSubscriptionError: M,
      logV2MutationLoadEnd: D,
      logV2MutationLoadStart: T,
      logV3FlowComplete: F,
      logV3MutationAck: $,
      logV3MutationCompleted: P,
      logV3MutationFailed: N,
      logV3SubscriptionDataReceived: x,
    };
    ((l.isV3FlowActive = B), (l.sendMessageLogger = W));
  },
  98,
);
