__d(
  "WAWebBizAILeadGenExportLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.AI_HUB_CHAT,
        extraAttributes: { action_status: e },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_LEADGEN_CUSTOMER_INFO_LIST,
        userActionTarget: "export_request_complete",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    l.logApiExportRequestResult = e;
  },
  98,
);
