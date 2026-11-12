__d(
  "WAWebCustomerManagerAddCustomerWamPayload",
  [
    "WAWebCustomerManagerSMBUserJourneyTypes",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        extraAttributes: { entry: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      };
    }
    function s(e) {
      return {
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.SAVE_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function u(e) {
      return {
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.SAVE_ACTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      };
    }
    function c(e) {
      return {
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.DISMISS,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      };
    }
    function d(e) {
      return {
        extraAttributes: { selected: e != null ? e : null },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_lead_stage_dropdown",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function m(e) {
      return {
        extraAttributes: { selected: e != null ? e : null },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_acquisition_source_dropdown",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function p() {
      return {
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "username_phone_mismatch_ok",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function _() {
      return {
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "username_phone_mismatch_notice",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      };
    }
    ((l.addCustomerView = e),
      (l.addCustomerSaveClick = s),
      (l.addCustomerSaveResult = u),
      (l.addCustomerDismiss = c),
      (l.addCustomerLeadStageDropdownClick = d),
      (l.addCustomerSourceDropdownClick = m),
      (l.usernamePhoneMismatchOkClick = p),
      (l.usernamePhoneMismatchDismiss = _));
  },
  98,
);
