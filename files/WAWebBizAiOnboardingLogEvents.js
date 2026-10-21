__d(
  "WAWebBizAiOnboardingLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_WEB_ONBOARDING_QR_CODE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { referral: "web-qr-handoff" },
      });
    }
    function s() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_WEB_ONBOARDING_QR_CODE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        userActionTarget: "need_help",
      });
    }
    function u(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPointDetails: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_WEB_ONBOARDING_QR_CODE,
        userActionTarget: "send_to_phone",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function c(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPointDetails: e,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_WEB_ONBOARDING_QR_CODE,
        userActionTarget: "send_to_phone",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function d(e, t, n) {
      var r = {};
      (n != null && (r.error = n),
        (r.result = t != null ? "success" : "fail"),
        t != null && (r.status = t),
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          entryPointDetails: e,
          extraAttributes: r,
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          stickyEntryPoint: !1,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
            .GEN_AI_WEB_ONBOARDING_QR_CODE,
          userActionTarget: "send_to_phone_result",
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.API,
        }));
    }
    ((l.logViewBizAiOnboardingQr = e),
      (l.logClickBizAiOnboardingNeedHelp = s),
      (l.logViewBizAiOnboardingSendToPhone = u),
      (l.logClickBizAiOnboardingSendToPhone = c),
      (l.logApiBizAiOnboardingSendToPhoneResult = d));
  },
  98,
);
