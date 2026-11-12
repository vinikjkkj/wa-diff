__d(
  "WAWebCustomerManagerAddCustomerJourneyEvents",
  ["WAWebWamEnumSmbUserActionTypeEnum", "WAWebWamEnumSurfaceType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        extraAttributes: { action: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "country_selector",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function s(e) {
      return {
        extraAttributes: { dismiss_method: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "invite_confirm_dialog",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      };
    }
    function u(e) {
      return {
        extraAttributes: { action: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "invite_failure_dialog",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function c() {
      return {
        extraAttributes: { dismiss_method: "escape" },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "username_key_prompt",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      };
    }
    function d() {
      return {
        extraAttributes: { result: "wrong_key" },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "username_key_prompt",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
      };
    }
    ((l.getCountrySelectorEvent = e),
      (l.getInviteConfirmDismissEvent = s),
      (l.getInviteFailureActionEvent = u),
      (l.getUsernameKeyDismissEvent = c),
      (l.getUsernameKeyFailureEvent = d));
  },
  98,
);
