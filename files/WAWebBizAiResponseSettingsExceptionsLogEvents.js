__d(
  "WAWebBizAiResponseSettingsExceptionsLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GENAI_AGENT_AI_REPLIES,
        userActionTarget: "exceptions",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    l.logClickResponseSettingsExceptionsRow = e;
  },
  98,
);
