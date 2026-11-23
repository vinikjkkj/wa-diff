__d(
  "MAIBASendMessageLogger",
  [
    "ALToolTab",
    "AdsAIUserInteractionSources",
    "AdsHelpTrayIPChatUILogger",
    "AdsHelpTrayUILoggerStoreUtils",
    "AdsPerfInteractionVCHolder",
    "AdsPerfInteractionsController",
    "FBLogger",
    "InteractionTracingMetrics",
    "MAIBACommerceManagerPageContext",
    "MAIBAObservabilityUtils",
    "MAIBAR23LoggingUtils",
    "QPLInteractionTracingJoinUtils",
    "clearTimeout",
    "gkx",
    "performanceNow",
    "requireDeferred",
    "runOnce",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("MAIBAInlinedContext").__setRef(
        "MAIBASendMessageLogger",
      ),
      u = 1e3,
      c = 3e5,
      d = 1e4,
      m = "MAIBA terminal response",
      p = "maiba-terminal-response",
      _ = new Map(),
      f = new Map();
    function g(e) {
      return p + ":" + e;
    }
    function h(e) {
      var t = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
        e,
      );
      t != null &&
        (_.set(e, t),
        t.lockInteractionLogging(p),
        o("AdsPerfInteractionVCHolder").startVCHolder(e, g(e), m),
        L(e, "in_flight"));
    }
    function y(e) {
      var t;
      o("AdsPerfInteractionVCHolder").endVCHolder(e, g(e));
      var n =
        (t = _.get(e)) != null
          ? t
          : r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(e);
      (n == null || n.unlockInteractionLogging(p), _.delete(e));
      var a = f.get(e);
      a != null && (r("clearTimeout")(a.timeoutID), f.delete(e));
    }
    var C = !1,
      b = null,
      v = new Map(),
      S = new Set();
    function R(e) {
      (y(e), S.delete(e), e === b && (C = !1));
    }
    function L(e, t) {
      var n = f.get(e);
      if (n != null) {
        if (n.phase === t || t === "in_flight") return;
        r("clearTimeout")(n.timeoutID);
      }
      var o = r("setTimeout")(
        function () {
          (f.delete(e),
            r("InteractionTracingMetrics").addAnnotation(
              e,
              "terminal_hold_timeout",
              t,
            ),
            t === "in_flight" && k(e),
            R(e));
        },
        t === "display" ? d : c,
      );
      f.set(e, { phase: t, timeoutID: o });
    }
    function E(e) {
      _.has(e) && L(e, "display");
    }
    function k(e) {
      var t,
        n =
          (t = r("InteractionTracingMetrics").get(e)) == null
            ? void 0
            : t.markerPoints;
      (n == null ? void 0 : n.final_token_received) == null &&
        Z(
          e,
          "FAIL",
          (n == null ? void 0 : n.request_sent_to_server) == null
            ? "request_not_sent"
            : "no_response",
        );
    }
    var I = null,
      T = !1,
      D = r("FBLogger")("axp_maiba_foundations_ux");
    function x() {
      var e = b;
      if (e != null) {
        R(e);
        var t = r("InteractionTracingMetrics").get(e);
        if ((t == null ? void 0 : t.completed) != null) {
          var n = r(
            "AdsPerfInteractionsController",
          ).getActiveInteractionTraceAPI(e);
          r("gkx")("25671") && n != null && n.forceCompleteTrace();
        }
      }
    }
    function $(t, n) {
      t != null &&
        (r("InteractionTracingMetrics").addFirstMarkerPoint(
          t,
          "final_token_received",
          "AppTiming",
          (e || (e = r("performanceNow")))(),
        ),
        E(t));
    }
    function P(e, t) {
      e == null || !S.has(e) || $(e, t);
    }
    function N(e) {
      var t;
      ((t = r("InteractionTracingMetrics").get(e)) == null
        ? void 0
        : t.markerPoints.first_answer_chunk_received) == null &&
        r("InteractionTracingMetrics").addMarkerPoint(
          e,
          "first_answer_chunk_received",
          "AppTiming",
        );
    }
    function M(e) {
      var t,
        n =
          (t = r("InteractionTracingMetrics").get(e)) == null
            ? void 0
            : t.annotations.string,
        o = n == null ? void 0 : n.cancelType;
      return o === "aborted:Unmount"
        ? "unmount"
        : o === "unload"
          ? "unload"
          : (o == null ? void 0 : o.startsWith("aborted:New Interaction")) ===
              !0
            ? "new_interaction"
            : o === "timeout" ||
                (n == null ? void 0 : n.terminal_hold_timeout) != null
              ? "timeout"
              : "other";
    }
    function w(e) {
      var t,
        n =
          (t = r("InteractionTracingMetrics").get(e)) == null
            ? void 0
            : t.markerPoints;
      (n == null ? void 0 : n.first_answer_chunk_received) == null ||
        n.first_token_received != null ||
        r("InteractionTracingMetrics").addAnnotation(
          e,
          "response_undisplayed",
          M(e),
        );
    }
    function A(t, n) {
      t != null &&
        (r("InteractionTracingMetrics").addFirstMarkerPoint(
          t,
          "final_token_displayed",
          "AppTiming",
          (e || (e = r("performanceNow")))(),
        ),
        y(t));
    }
    function F(e) {
      e != null &&
        r("gkx")("25671") &&
        r("InteractionTracingMetrics").addMetadata(e, "success_on_unload", 1);
    }
    function O(e) {
      var t,
        n = b;
      n != null &&
        (r("InteractionTracingMetrics").addAnnotationBoolean(
          n,
          "r23_confirmation_card_present",
          !0,
        ),
        e != null &&
          e !== "" &&
          r("InteractionTracingMetrics").addAnnotation(n, "bot_response_id", e),
        ((t = r("InteractionTracingMetrics").get(n)) == null
          ? void 0
          : t.markerPoints.r23_confirmation_card_mounted) == null &&
          r("InteractionTracingMetrics").addMarkerPoint(
            n,
            "r23_confirmation_card_mounted",
            "AppTiming",
          ));
    }
    function B(e, t, n) {
      var o,
        a = n != null ? _e(n) : b;
      a == null ||
        ((o = r("InteractionTracingMetrics").get(a)) == null
          ? void 0
          : o.markerPoints.r23_plan_card_mounted) != null ||
        (r("InteractionTracingMetrics").addAnnotation(
          a,
          "r23_plan_card_render",
          t,
        ),
        r("InteractionTracingMetrics").addAnnotation(a, "bot_response_id", e),
        r("InteractionTracingMetrics").addMarkerPoint(
          a,
          "r23_plan_card_mounted",
          "AppTiming",
        ));
    }
    function W(e) {
      var t = e.message.toLowerCase();
      return t.includes("network") ||
        t.includes("failed to fetch") ||
        t.includes("disconnect") ||
        t.includes("timeout") ||
        t.includes("socket")
        ? "network"
        : "server";
    }
    function q() {
      var e, t;
      o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents("general", {
        event_type: "consent_mutation_success",
        source: "maiba_explicit_consent_guidance",
        surface:
          (e =
            (t = s.getModuleIfRequired()) == null ||
            (t = t.getInlinedContext()) == null
              ? void 0
              : t.surface) != null
            ? e
            : "",
      });
    }
    function U(e) {
      var t, n;
      (D.warn("Error updating ads ai consent status", e.toString()),
        o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents("general", {
          event_type: "consent_mutation_failure",
          source: "maiba_explicit_consent_guidance",
          surface:
            (t =
              (n = s.getModuleIfRequired()) == null ||
              (n = n.getInlinedContext()) == null
                ? void 0
                : n.surface) != null
              ? t
              : "",
        }));
    }
    var V = r("runOnce")(function () {
      r("AdsPerfInteractionsController").addEventListener(
        o("MAIBAObservabilityUtils").getMAIBASendMessageInteractionName(),
        "end",
        function (e) {
          var t,
            n = e.interactionID;
          ((t = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
            n,
          )) == null ||
            t.onBeforeLog(function () {
              return w(n);
            }),
            r("InteractionTracingMetrics").addMarkerPoint(
              n,
              o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName() +
                "_end",
              "AppTiming",
            ));
        },
      );
    });
    function H(e) {
      var t = e != null ? e : b;
      t != null &&
        r("InteractionTracingMetrics").addAnnotationBoolean(
          t,
          "is_error_notice_shown",
          !0,
        );
    }
    function G(e, t) {
      D.warn(
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
    function z(e, t) {
      if (e !== "") {
        if (!v.has(e) && v.size >= u) {
          var n = v.keys().next().value;
          n != null && v.delete(n);
        }
        v.set(e, t);
      }
    }
    function j(e) {
      var t = o(
        "MAIBACommerceManagerPageContext",
      ).getMAIBACommerceManagerPageContext();
      t != null &&
        (r("InteractionTracingMetrics").addAnnotation(
          e,
          "catalog_id",
          t.catalog_id,
        ),
        t.product_set_id != null &&
          r("InteractionTracingMetrics").addAnnotation(
            e,
            "product_set_id",
            t.product_set_id,
          ));
    }
    function K(e) {
      var t = e.containsAttachment,
        n = e.entrypoint,
        a = e.externalConversationId,
        i = e.isSentFromOutOfChat,
        l = e.isV3Flow,
        s = l === void 0 ? !1 : l,
        u = e.message,
        c = e.messageType,
        d = e.offlineThreadingId,
        m = e.originatingMidChatPromptBotResponseId,
        p = e.promptId,
        _ = e.promptIndex,
        f = e.promptSource,
        g = e.quoteData,
        y = e.sendMessageVersion;
      (n != null &&
        o(
          "AdsHelpTrayIPChatUILogger",
        ).logAdsAIMarketingProEntrypointConversations(n, a),
        (I = null),
        (T = !1),
        x(),
        (C = s));
      var v = r("AdsPerfInteractionsController").startInteraction(
        o("MAIBAObservabilityUtils").getMAIBASendMessageInteractionName(),
        c === "SHADOW"
          ? r("AdsAIUserInteractionSources").SHADOW_TRAFFIC
          : r("AdsAIUserInteractionSources").USER_SENT_MESSAGE_IN_CHAT,
        { isVeryLongInteraction: !0 },
      );
      ((b = v), h(v), z(d, v), s && S.add(v));
      var R = o("ALToolTab").getCurrentToolTab(),
        L = R.tab,
        E = R.tool;
      return (
        r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
          o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
          {
            app_surface: E,
            contains_attachment: t,
            contains_quote: g != null,
            conversation_id: a,
            entrypoint: n != null ? n : "",
            is_shadow_traffic: c === "SHADOW",
            is_v3_flow: s,
            is_web_platform_chat: !0,
            message_source: i ? "out_of_chat" : "chat",
            message_type: c != null ? c : "",
            offline_threading_id: d,
            originating_mid_chat_prompt_bot_response_id: m != null ? m : "",
            prompt_id: p != null ? p : "",
            prompt_index: _ != null ? _ : null,
            prompt_source: f != null ? f : "",
            quote_from_out_of_chat:
              g != null && g.source
                ? (g == null ? void 0 : g.source) === "FROM_PAGE"
                : null,
            referrer_tab: L != null ? L : "",
            referrer_tool: E != null ? E : "",
          },
        ),
        y != null &&
          r("InteractionTracingMetrics").addAnnotation(
            v,
            "send_message_version",
            y,
          ),
        j(v),
        V(),
        r("InteractionTracingMetrics").addJoinId(v, d),
        r("gkx")("15770") &&
          r("InteractionTracingMetrics").addAnnotation(v, "user_query", u),
        v
      );
    }
    function Q(e) {
      (r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "request_sent_to_server",
        "AppTiming",
      ),
        o("QPLInteractionTracingJoinUtils").addAlignmentPointForInteraction(
          e,
          0,
        ));
    }
    function X(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "collecting_client_context_start",
        "AppTiming",
      );
    }
    function Y(e, t) {
      (r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "collecting_client_context_end",
        "AppTiming",
      ),
        t != null &&
          r("InteractionTracingMetrics").addAnnotation(
            e,
            "client_context_fallback",
            t,
          ));
    }
    function J(e) {
      (o("QPLInteractionTracingJoinUtils").addAlignmentPointForInteraction(
        e,
        3,
      ),
        r("InteractionTracingMetrics").addMarkerPoint(
          e,
          "ack_from_server_received",
          "AppTiming",
        ));
    }
    function Z(e, t, n) {
      if (e != null) {
        if (
          (n != null &&
            r("InteractionTracingMetrics").addAnnotation(
              e,
              "terminal_reason",
              n,
            ),
          t === "FAIL")
        )
          r("InteractionTracingMetrics").addMetadata(e, "isError", 1);
        else if (t === "CANCEL") {
          var o;
          (o = r("AdsPerfInteractionsController").getActiveInteractionTraceAPI(
            e,
          )) == null || o.cancelTrace("maiba_client_stop", !0);
        }
      }
    }
    function ee(e, t, n, r) {
      (t === void 0 && (t = "SUCCESS"),
        Z(e, t, n),
        e != null && (t === "SUCCESS" && r === !0 ? E(e) : R(e)));
    }
    function te(e) {
      R(e);
    }
    function ne(e, t) {
      (t != null && R(t),
        r("AdsPerfInteractionsController").annotateFailure(
          o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
          i.id,
          { error: e },
        ));
    }
    function re(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "v2_mutation_load_start",
        "AppTiming",
      );
    }
    function oe(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "v2_mutation_load_end",
        "AppTiming",
      );
    }
    function ae(e) {
      var t = b;
      t == null ||
        !C ||
        T ||
        ((T = !0),
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
    function ie(e) {
      r("InteractionTracingMetrics").addMarkerPoint(
        e,
        "v3_mutation_ack_received",
        "AppTiming",
      );
    }
    function le() {
      b != null &&
        r("InteractionTracingMetrics").addMarkerPoint(
          b,
          "mutation_completed",
          "AppTiming",
        );
    }
    function se(e, t) {
      if (t == null) {
        r("AdsPerfInteractionsController").annotateFailure(
          o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
          i.id,
          { error: e },
        );
        return;
      }
      var n = t;
      (r("InteractionTracingMetrics").addMetadata(n, "isError", 1),
        r("InteractionTracingMetrics").addAnnotation(
          n,
          "terminal_outcome",
          "FAIL",
        ),
        r("InteractionTracingMetrics").addAnnotation(
          n,
          "terminal_reason",
          "mutation_error",
        ),
        r("InteractionTracingMetrics").addAnnotation(
          n,
          "error_source",
          "mutation",
        ),
        r("InteractionTracingMetrics").addAnnotation(
          n,
          "error_message",
          e.message,
        ),
        r("InteractionTracingMetrics").addMetadata(n, "errorComponent", i.id),
        r("AdsPerfInteractionsController").annotateFailure(
          o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
          i.id,
          { error: e },
        ),
        R(n));
      var a = r("InteractionTracingMetrics").get(n);
      a != null &&
        a.completed == null &&
        r("InteractionTracingMetrics").complete(n);
    }
    function ue(e, t) {
      var n = t != null ? t : b;
      n != null &&
        (r("InteractionTracingMetrics").addAnnotation(
          n,
          "error_source",
          "subscription",
        ),
        r("InteractionTracingMetrics").addAnnotation(
          n,
          "subscription_error",
          e.message,
        ),
        r("InteractionTracingMetrics").addAnnotation(
          n,
          "subscription_error_type",
          W(e),
        ),
        t == null && (I = e));
    }
    function ce(e) {
      b != null &&
        r("InteractionTracingMetrics").addAnnotation(b, "recovery_trigger", e);
    }
    function de(e) {
      if (b != null) {
        if (
          (r("InteractionTracingMetrics").addAnnotation(
            b,
            "recovery_outcome",
            e,
          ),
          e === "fail" && I != null)
        ) {
          var t = I;
          r("AdsPerfInteractionsController").annotateFailure(
            o("MAIBAObservabilityUtils").getMAIBASendMessageComponentName(),
            i.id,
            { error: t },
          );
        }
        I = null;
      }
    }
    function me(e, t, n) {
      e === void 0 && (e = "SUCCESS");
      var r = t != null ? t : b;
      r == null || !S.has(r) || (Z(r, e, n), R(r));
    }
    function pe(e, t, n) {
      var r = [],
        a = [],
        i = [];
      if (t != null)
        for (var l of t)
          switch (l.type) {
            case "CAMPAIGN_GROUP":
              r.push(l.id);
              break;
            case "CAMPAIGN":
              a.push(l.id);
              break;
            case "ADGROUP":
              i.push(l.id);
              break;
          }
      if (n !== !0) {
        o("MAIBAR23LoggingUtils").logMAIBAR23Event({
          adgroupIDs: i,
          campaignGroupIDs: r,
          campaignIDs: a,
          conversationID: e,
          event: "copilot_organic_in_editor_eligibility_fix",
        });
        return;
      }
      o("MAIBAR23LoggingUtils").logMAIBAR23Event({
        adgroupIDs: i,
        campaignGroupIDs: r,
        campaignIDs: a,
        conversationID: e,
        event: "copilot_organic_in_editor",
      });
    }
    function _e(e, t) {
      var n;
      return e == null ? null : (n = v.get(e)) != null ? n : null;
    }
    function fe(e, t) {
      return e == null ? C : S.has(e);
    }
    var ge = {
      logBeforeCommitMutation: Q,
      logBotResponseDelivered: F,
      logCompleteResponseDisplayed: A,
      logCompleteResponseReceived: $,
      logConsentUpdateError: U,
      logConsentUpdateSuccess: q,
      logCopilotOrganicInEditor: pe,
      logEmptyStringECIDOrigin: G,
      logErrorNoticeShown: H,
      logFirstAnswerChunkReceived: N,
      logFirstMutationResponse: J,
      logGetClientContextEnd: Y,
      logGetClientContextStart: X,
      logMutationCancelled: te,
      logMutationComplete: ee,
      logMutationError: ne,
      logR23ConfirmationCardMounted: O,
      logR23PlanCardMounted: B,
      logRecoveryAttempt: ce,
      logRecoveryOutcome: de,
      logSendMessageStart: K,
      logSubscriptionError: ue,
      logTerminalResponseReceived: P,
      logV2MutationLoadEnd: oe,
      logV2MutationLoadStart: re,
      logV3FlowComplete: me,
      logV3MutationAck: ie,
      logV3MutationCompleted: le,
      logV3MutationFailed: se,
      logV3SubscriptionDataReceived: ae,
    };
    ((l.getMAIBASendInteractionID = _e),
      (l.isV3FlowActive = fe),
      (l.sendMessageLogger = ge));
  },
  98,
);
