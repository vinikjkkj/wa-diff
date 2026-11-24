__d(
  "WAWebCustomerManagerAddCustomerJourneyEvents",
  [
    "WAWebCustomerManagerAddCustomerMenuJourneyEvents",
    "WAWebCustomerManagerAddCustomerWamPayload",
    "WAWebCustomerManagerSMBUserJourneyTypes",
    "WAWebCustomerManagerWamLogging",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
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
    function m(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerAddCustomerWamPayload").addCustomerView(e),
      );
    }
    function p(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerAddCustomerWamPayload").addCustomerSaveClick(e),
      );
    }
    function _(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerAddCustomerWamPayload").addCustomerSaveResult(e),
      );
    }
    function f(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerAddCustomerWamPayload").addCustomerDismiss(e),
      );
    }
    function g(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerWamPayload",
        ).addCustomerLeadStageDropdownClick(e),
      );
    }
    function h(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerWamPayload",
        ).addCustomerSourceDropdownClick(e),
      );
    }
    function y(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(s(e));
    }
    function C(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(u(e));
    }
    function b() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(c());
    }
    function v() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(d());
    }
    function S(t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(e(t));
    }
    function R(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerMenuJourneyEvents",
        ).getAddCustomerLeadStagePickEvent(e),
      );
    }
    function L() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerMenuJourneyEvents",
        ).getAddCustomerLeadStageDismissEvent(),
      );
    }
    function E(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerMenuJourneyEvents",
        ).getAddCustomerSourcePickEvent(e),
      );
    }
    function k() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerMenuJourneyEvents",
        ).getAddCustomerSourceDismissEvent(),
      );
    }
    function I() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerWamPayload",
        ).usernamePhoneMismatchOkClick(),
      );
    }
    function T() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o(
          "WAWebCustomerManagerAddCustomerWamPayload",
        ).usernamePhoneMismatchDismiss(),
      );
    }
    function D(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { result: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_phone",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
      });
    }
    function x(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes:
          t == null ? { reason: e } : { add_attempt_id: t, reason: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.SAVE_ACTION,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
      });
    }
    function $(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: babelHelpers.extends({}, n, { change: t, field: e }),
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_field_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    ((l.getCountrySelectorEvent = e),
      (l.getInviteConfirmDismissEvent = s),
      (l.getInviteFailureActionEvent = u),
      (l.getUsernameKeyDismissEvent = c),
      (l.getUsernameKeyFailureEvent = d),
      (l.viewAddCustomer = m),
      (l.clickSaveCustomer = p),
      (l.saveCustomerResult = _),
      (l.dismissAddCustomer = f),
      (l.clickAddCustomerLeadStageDropdown = g),
      (l.clickAddCustomerAcquisitionSource = h),
      (l.dismissInviteConfirm = y),
      (l.clickInviteFailureAction = C),
      (l.dismissUsernameKeyPrompt = b),
      (l.usernameKeyVerificationFailed = v),
      (l.clickCountrySelector = S),
      (l.clickAddCustomerLeadStagePick = R),
      (l.dismissAddCustomerLeadStageMenu = L),
      (l.clickAddCustomerSourcePick = E),
      (l.dismissAddCustomerSourceMenu = k),
      (l.clickUsernamePhoneMismatchOk = I),
      (l.dismissUsernamePhoneMismatch = T),
      (l.validateAddCustomerPhone = D),
      (l.saveCustomerBlocked = x),
      (l.editAddCustomerField = $));
  },
  98,
);
