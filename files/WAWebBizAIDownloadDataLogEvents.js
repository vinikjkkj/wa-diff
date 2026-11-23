__d(
  "WAWebBizAIDownloadDataLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      u("fetch_dyi_screen", e, t);
    }
    function s(e, t) {
      u("request_report", e, t);
    }
    function u(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HOME,
        extraAttributes: c(t, n),
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GEN_AI_SETTINGS_DYI,
        userActionTarget: e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function c(e, t) {
      if (e) return { result: "success" };
      var n = navigator.onLine ? "fail" : "aborted";
      return t != null ? { error: t, result: n } : { result: n };
    }
    ((l.logApiFetchDownloadDataScreen = e),
      (l.logApiRequestDownloadDataReport = s));
  },
  98,
);
