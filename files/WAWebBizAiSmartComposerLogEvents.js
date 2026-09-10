__d(
  "WAWebBizAiSmartComposerLogEvents",
  [
    "WALogger",
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
      u = "TWO_LINE";
    function c(e) {
      p(
        "smart_composer",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { is_chat_ai_eligible: e, variant: u },
      );
    }
    function d() {
      p(
        "mode_switching_bottom_sheet",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        { variant: u },
      );
    }
    function m(e) {
      var t = e.from,
        n = e.success,
        r = e.to,
        a = e.trigger;
      p(
        "mode_switch_requested",
        o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        { from: s[t], success: n, to: s[r], trigger: a, variant: u },
      );
    }
    function p(t, n, a) {
      try {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          extraAttributes: a,
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          stickyEntryPoint: !1,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.SMB_SMART_COMPOSER,
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
    ((l.logViewSmartComposer = c),
      (l.logViewModeSwitchingSheet = d),
      (l.logModeSwitchRequested = m));
  },
  98,
);
