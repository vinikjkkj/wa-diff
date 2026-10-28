__d(
  "WAWebBizAIAppointmentAvailabilityLogEvents",
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
      (e === void 0 && (e = "create"), u("edit_hours_button", e));
    }
    function s(e) {
      (e === void 0 && (e = "create"), u("select_timezone", e));
    }
    function u(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: { flow_type: t, is_m5_1_refresh: !0 },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_DURATION,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_AVAILABILITY,
        userActionTarget: e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    ((l.logClickEditAppointmentHours = e),
      (l.logClickSelectAppointmentTimeZone = s));
  },
  98,
);
