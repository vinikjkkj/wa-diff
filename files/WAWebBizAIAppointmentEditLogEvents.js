__d(
  "WAWebBizAIAppointmentEditLogEvents",
  [
    "WAWebBizAILargeScreensLogEvents",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: { flow_type: "edit" },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_LANDING,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_DETAIL,
        userActionTarget: "edit_appointment_type_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function s(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: {
          flow_type: "edit",
          is_m5_1_refresh: !0,
          custom_field_count: t,
          has_prefill: !1,
          is_first_appointment_type: !1,
          selected_fields: e,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        prevSurface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_AVAILABILITY,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .GEN_AI_BOOK_APPOINTMENTS_CUSTOMER_INFO,
        userActionTarget: "save_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function u(e, t, n) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: {
          flow_type: t,
          current_step: n != null ? n : e,
          is_m5_1_refresh: !0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o(
          "WAWebBizAILargeScreensLogEvents",
        ).getAppointmentCreateStepSurface(e),
        userActionTarget: "back_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function c(e, t, n, r) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        extraAttributes: {
          flow_type: e,
          current_step: t,
          reason: r,
          is_m5_1_refresh: !0,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: n,
        userActionTarget: "exit_flow",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    ((l.logClickEditAppointmentType = e),
      (l.logClickSaveUpdatedAppointmentType = s),
      (l.logClickAppointmentBack = u),
      (l.logDismissAppointmentFlow = c));
  },
  98,
);
