__d(
  "WAWebCustomerManagerProfileJourneyEvents",
  [
    "WAWebCustomerManagerProfileWamLogging",
    "WAWebCustomerManagerSMBUserJourneyTypes",
    "WAWebCustomerManagerWamLogging",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        extraAttributes: { field: e },
        userActionTarget: "profile_field_edit_pencil",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function s(e, t) {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        extraAttributes: { dismiss_method: t, field: e },
        userActionTarget: "profile_field_edit",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function u(e) {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        extraAttributes: { field: e, reason: "invalid_format" },
        userActionTarget: "profile_field_edit",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
      });
    }
    function c(e) {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        extraAttributes: { action: e },
        userActionTarget: "profile_source_dropdown",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function d(e) {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        extraAttributes: { dismiss_method: e },
        userActionTarget: "note_edit",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function m(e) {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        extraAttributes: { dismiss_method: e },
        userActionTarget: "contact_info_fields_nux",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function p(e) {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction(
        babelHelpers.extends(
          {},
          e != null ? { extraAttributes: { from_view: e } } : {},
          {
            userActionTarget: "edit_lists_pencil",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
              .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          },
        ),
      );
    }
    function _() {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        userActionTarget: "lists_intro_continue",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function f() {
      o("WAWebCustomerManagerProfileWamLogging").logProfileAction({
        userActionTarget: "profile_birthday_calendar",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function g(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: {
          ai_field_count: e,
          filled_field_count: t,
          has_ai_written_fields: e > 0,
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PROFILE_DRAWER,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function h() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PROFILE_DRAWER,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.CLOSE_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function y(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { change: n, field: e, prior_source: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PROFILE_DRAWER,
        userActionTarget: "customer_field_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function C(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: babelHelpers.extends({ field: e }, t),
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PROFILE_DRAWER,
        userActionTarget: "customer_field_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.WRITE,
      });
    }
    function b(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PROFILE_DRAWER,
        userActionTarget: "notes_save",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    ((l.clickProfileFieldEdit = e),
      (l.dismissProfileFieldEdit = s),
      (l.profileFieldValidationBlocked = u),
      (l.clickProfileSourceDropdown = c),
      (l.dismissNoteEdit = d),
      (l.dismissContactInfoFieldsNux = m),
      (l.clickEditListsPencil = p),
      (l.clickListsIntroContinueProfile = _),
      (l.clickProfileBirthdayCalendar = f),
      (l.viewProfileDrawer = g),
      (l.dismissProfileDrawer = h),
      (l.editCustomerField = y),
      (l.customerFieldSaveResult = C),
      (l.noteSaveResult = b));
  },
  98,
);
