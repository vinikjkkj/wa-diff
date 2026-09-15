__d(
  "WAWebBizAiSmartComposerLogEvents",
  [
    "WALogger",
    "WAWebBizAiSmartComposerErrorMapping",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        ai_agent: "AI_AGENT",
        manual: "MANUAL",
        suggestions: "SUGGESTIONS",
      },
      c = "TWO_LINE",
      d = {
        error: "error",
        loading: "loading",
        quota_handoff: "handoff",
        success: "success",
      },
      m = {
        appear: (s = o("WAWebWamEnumSmbUserActionTypeEnum"))
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        dismiss: s.SMB_USER_ACTION_TYPE_ENUM.DISMISS,
        sent: s.SMB_USER_ACTION_TYPE_ENUM.VIEW,
        transition: s.SMB_USER_ACTION_TYPE_ENUM.VIEW,
      };
    function p(e) {
      E(
        "smart_composer",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { is_chat_ai_eligible: e, variant: c },
      );
    }
    function _() {
      E(
        "mode_switching_bottom_sheet",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { variant: c },
      );
    }
    function f(e) {
      E(
        e,
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { is_companion: !0 },
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AGENT_SMART_COMPOSER_HANDOFF_CARD,
      );
    }
    function g(e) {
      var t = e.cardStatus,
        n = e.cardType,
        r = e.errorCode,
        a = e.reason,
        i = e.trigger,
        l = { card_state: d[t], dismissed: a };
      (n != null && (l.card_type = n),
        i != null && (l.trigger = i),
        r != null &&
          (l.error_code = o(
            "WAWebBizAiSmartComposerErrorMapping",
          ).getSuggestedReplyErrorWireValue(r)),
        E(
          "suggested_reply_card_dismissed",
          o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
            .DISMISS,
          l,
        ));
    }
    function h(e) {
      var t = e.action,
        n = e.cardStatus,
        r = e.cardType,
        a = e.dismissReason,
        i = e.editDistanceRatio,
        l = e.errorCode,
        s = e.funnelId,
        u = { action: t, card_state: n, funnel_id: s };
      (r != null && (u.card_type = r),
        a != null && (u.dismiss_reason = a),
        l != null &&
          (u.error_code = o(
            "WAWebBizAiSmartComposerErrorMapping",
          ).getSuggestedReplyErrorWireValue(l)),
        i != null && (u.edit_distance_ratio = i),
        E("suggested_reply_card_funnel", m[t], u));
    }
    function y(e) {
      E(
        "suggested_reply_metering_gql_response",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
        { success: e },
      );
    }
    function C(e, t, n) {
      E(
        "suggested_reply_card_view",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { card_state: "success", is_from_cache: t, trigger: e, card_type: n },
      );
    }
    function b(e) {
      E(
        "suggested_reply_requested",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
        { trigger: e },
      );
    }
    function v(e, t) {
      var n = { trigger: e };
      (t != null &&
        (n.error_code = o(
          "WAWebBizAiSmartComposerErrorMapping",
        ).getSuggestedReplyErrorWireValue(t)),
        E(
          "suggested_reply_received",
          o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
          n,
        ));
    }
    function S(e, t, n) {
      var r = {
        card_type: t,
        suggestion_word_count: n.suggestionWordCount,
        trigger: e,
        was_edited: n.wasEdited,
      };
      (n.editDistance != null && (r.edit_distance = n.editDistance),
        n.editDistanceRatio != null &&
          (r.edit_distance_ratio = n.editDistanceRatio),
        E(
          "suggested_reply_send",
          o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
            .CLICK,
          r,
        ));
    }
    function R(e, t) {
      E(
        "suggested_reply_card_tapped",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        { card_type: t, trigger: e },
      );
    }
    function L(e) {
      var t = e.from,
        n = e.success,
        r = e.to,
        a = e.trigger;
      E(
        "mode_switch_requested",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        { from: u[t], success: n, to: u[r], trigger: a, variant: c },
      );
    }
    function E(t, n, a, i) {
      i === void 0 &&
        (i = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.SMB_SMART_COMPOSER);
      try {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          extraAttributes: a,
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          stickyEntryPoint: !1,
          surface: i,
          userActionTarget: t,
          userActionType: n,
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[SmartComposer] journey telemetry failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("biz-ai-smart-composer-wam-fail");
      }
    }
    ((l.logViewSmartComposer = p),
      (l.logViewModeSwitchingSheet = _),
      (l.logViewHandoffCard = f),
      (l.logDismissSuggestionCard = g),
      (l.logSuggestionCardFunnel = h),
      (l.logMeteringResponse = y),
      (l.logViewSuggestionCard = C),
      (l.logSuggestionRequested = b),
      (l.logSuggestionReceived = v),
      (l.logSendSuggestion = S),
      (l.logTapSuggestionCard = R),
      (l.logModeSwitchRequested = L));
  },
  98,
);
