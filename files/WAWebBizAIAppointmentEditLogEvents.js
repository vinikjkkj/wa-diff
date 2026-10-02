__d(
  "WAWebBizAIAppointmentEditLogEvents",
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
    l.logClickSaveUpdatedAppointmentType = e;
  },
  98,
);
