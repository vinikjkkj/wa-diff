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
      s = {
        ai_agent: "AI_AGENT",
        manual: "MANUAL",
        suggestions: "SUGGESTIONS",
      },
      u = "TWO_LINE",
      c = {
        error: "error",
        loading: "loading",
        quota_handoff: "handoff",
        success: "success",
      };
    function d(e) {
      h(
        "smart_composer",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { is_chat_ai_eligible: e, variant: u },
      );
    }
    function m() {
      h(
        "mode_switching_bottom_sheet",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { variant: u },
      );
    }
    function p() {
      h(
        "standard",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { is_companion: !0 },
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_AGENT_SMART_COMPOSER_HANDOFF_CARD,
      );
    }
    function _(e) {
      var t = e.cardStatus,
        n = e.cardType,
        r = e.errorCode,
        a = e.reason,
        i = e.trigger,
        l = { card_state: c[t], dismissed: a };
      (n != null && (l.card_type = n),
        i != null && (l.trigger = i),
        r != null &&
          (l.error_code = o(
            "WAWebBizAiSmartComposerErrorMapping",
          ).getSuggestedReplyErrorWireValue(r)),
        h(
          "suggested_reply_card_dismissed",
          o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM
            .DISMISS,
          l,
        ));
    }
    function f(e) {
      h(
        "suggested_reply_metering_gql_response",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.API,
        { success: e },
      );
    }
    function g(e) {
      var t = e.from,
        n = e.success,
        r = e.to,
        a = e.trigger;
      h(
        "mode_switch_requested",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        { from: s[t], success: n, to: s[r], trigger: a, variant: u },
      );
    }
    function h(t, n, a, i) {
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
    ((l.logViewSmartComposer = d),
      (l.logViewModeSwitchingSheet = m),
      (l.logViewHandoffCard = p),
      (l.logDismissSuggestionCard = _),
      (l.logMeteringResponse = f),
      (l.logModeSwitchRequested = g));
  },
  98,
);
