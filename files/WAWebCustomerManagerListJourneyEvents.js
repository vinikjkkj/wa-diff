__d(
  "WAWebCustomerManagerListJourneyEvents",
  [
    "WAWebCustomerManagerImportWamPayload",
    "WAWebCustomerManagerSMBUserJourneyTypes",
    "WAWebCustomerManagerWamLogging",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        babelHelpers.extends({}, e != null ? { entryPoint: e } : {}, {
          extraAttributes: t,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
            .CUSTOMER_MANAGER_LIST,
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        }),
      );
    }
    function s(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "list_error",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function u(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "list_retry",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function c(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "list_retry",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function d() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "hidden_contact_retry_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function m(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.ADD_CUSTOMER_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function p(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function _(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { action: e, selected_count: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "select_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function f(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { auto_mapped_count: t, column_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_mapping",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function g(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { contact_count: e, error_count: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_review",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function h(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { action: t, target: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_mapping_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function y(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { mapped_count: e, skipped_count: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_mapping_continue",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function C(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { mapped_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_mapping_close",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function b(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { export_in_progress: t },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.EXPORT_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function v(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget:
          t.stage === "load"
            ? o("WAWebCustomerManagerSMBUserJourneyTypes").UserActionTarget
                .EXPORT_BUTTON
            : o("WAWebCustomerManagerSMBUserJourneyTypes").UserActionTarget
                .EXPORT_CONFIRM_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function S(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.EXPORT_CONFIRM_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function R(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { column_set: t },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "export_columns",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function L(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "export_confirm_modal",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function E(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerImportWamPayload").importClick(
          "import_mapping_dropdown",
          { target: e },
        ),
      );
    }
    function k(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerImportWamPayload").importEscapeDismiss(
          "import_mapping_close",
          { mapped_count: e },
        ),
      );
    }
    function I(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerImportWamPayload").importEscapeDismiss(
          "import_review_drawer",
          { contact_count: e, error_count: t },
        ),
      );
    }
    function T(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerImportWamPayload").importClick(
          "import_undo_toast",
          { scope: e },
        ),
      );
    }
    function D(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerImportWamPayload").importClick(
          "import_review_pager",
          { direction: e, table: t },
        ),
      );
    }
    function x() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_upload",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function $(e, t) {
      var n;
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerImportWamPayload").importClick(
          "import_file_chosen",
          {
            file_size_bytes: e,
            row_count: (n = t.rowCount) != null ? n : null,
            row_count_source: t.rowCountSource,
            selection_status: t.status,
          },
        ),
      );
    }
    function P() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_UPLOAD_FILE_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function N() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_SAVE_TEMPLATE_LINK,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function M() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_upload_modal",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function w() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerImportWamPayload").importEscapeDismiss(
          "import_upload_modal",
        ),
      );
    }
    function A(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { contact_count: e, error_count: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_review_drawer",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function F() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_DELETE_CONTACT_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function O() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_DELETE_ERROR_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function B() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_DELETE_ALL_ERRORS_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function W(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { error_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_delete_all_errors_modal",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function q() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_delete_all_errors_modal",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function U(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { error_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_file_errors_modal",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function V(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { error_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_FILE_ERRORS_CONTINUE_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function H(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { error_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "import_file_errors_modal",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function G() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_EXPORT_ERRORS_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function z(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { total_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_SAVE_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function j(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_SAVE_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function K(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { total_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_UNDO_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Q(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.IMPORT_UNDO_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function X(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        babelHelpers.extends(
          {},
          t != null ? { extraAttributes: { source: t } } : {},
          {
            surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
            userActionTarget: "learn_more_button",
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
              .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          },
        ),
      );
    }
    function Y(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { panel_action: t },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "header_help_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function J() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "help_panel",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function Z(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { dismiss_method: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "nux_modal",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function ee() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "nux_get_started",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function te(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { dismiss_method: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lead_stages_guide",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function ne(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { card: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "suggested_action_card",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function re(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { empty_reason: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.EMPTY_STATE_ADD_CUSTOMER,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function oe() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "empty_state_manage_labels",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function ae(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { export_state: t },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.HEADER_MENU,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function ie(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.HEADER_MENU,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function le(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.ROW,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function se() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.ROW_CHAT_BUTTON,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function ue(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { is_selected: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "row_select_checkbox",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function ce(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { selected_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "select_all_checkbox",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function de(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { selected_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "bulk_add_to_list_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function me(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { selected_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "bulk_add_to_list_option",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function pe(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { selected_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "bulk_select_stage_button",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function _e(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.VIEW_SWITCHER,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function fe(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.VIEW_SWITCHER,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function ge(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { from_view: e, trigger: n },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget:
          t === "list"
            ? o("WAWebCustomerManagerSMBUserJourneyTypes").UserActionTarget
                .VIEW_CHANGE_LIST
            : o("WAWebCustomerManagerSMBUserJourneyTypes").UserActionTarget
                .VIEW_CHANGE_PIPELINE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function he(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { from_view: e },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget:
          t === "list"
            ? o("WAWebCustomerManagerSMBUserJourneyTypes").UserActionTarget
                .VIEW_TOGGLE_LIST
            : o("WAWebCustomerManagerSMBUserJourneyTypes").UserActionTarget
                .VIEW_TOGGLE_PIPELINE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function ye(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { query_length: e, result_count: t },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(n),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.SEARCH_INPUT,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.SEARCH,
      });
    }
    function Ce(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "search_clear",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.SEARCH,
      });
    }
    function be(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: {
          new_stage: t,
          prev_stage: e != null ? e : null,
          source_surface: n,
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lead_stage_dropdown",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function ve(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lead_stage_save",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function Se() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lists_intro_continue",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Re() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lists_intro_settings_link",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Le(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { dismiss_method: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "lists_intro_popup",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function Ee(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "lists_editor",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    function ke(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { direction: e, page_index: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "list_pager",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function Ie() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ACTIONS_MENU,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function Te(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { option: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ACTIONS_MENU,
        userActionTarget: "actions_menu_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function De(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ACTIONS_MENU,
        userActionTarget: "actions_menu_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function xe() {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ACTIONS_MENU,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    ((l.viewList = e),
      (l.viewListError = s),
      (l.clickListRetry = u),
      (l.viewListRetry = c),
      (l.clickHiddenContactRetry = d),
      (l.clickAddCustomerOnList = m),
      (l.clickImportOnList = p),
      (l.clickSelectOnList = _),
      (l.viewImportMapping = f),
      (l.viewImportReview = g),
      (l.editImportMapping = h),
      (l.clickImportMappingContinue = y),
      (l.dismissImportMapping = C),
      (l.clickExportOnList = b),
      (l.exportResult = v),
      (l.clickExportConfirm = S),
      (l.editExportColumns = R),
      (l.dismissExportConfirm = L),
      (l.clickImportMappingDropdown = E),
      (l.dismissImportMappingEscape = k),
      (l.dismissImportReviewEscape = I),
      (l.clickImportUndoToast = T),
      (l.clickImportReviewPager = D),
      (l.viewImportUpload = x),
      (l.clickImportFileChosen = $),
      (l.clickImportUploadFile = P),
      (l.clickImportSaveTemplate = N),
      (l.dismissImportUpload = M),
      (l.dismissImportUploadEscape = w),
      (l.dismissImportReview = A),
      (l.clickImportDeleteContact = F),
      (l.clickImportDeleteError = O),
      (l.clickImportDeleteAllErrors = B),
      (l.viewImportDeleteAllErrors = W),
      (l.dismissImportDeleteAllErrors = q),
      (l.viewImportFileErrors = U),
      (l.clickImportFileErrorsContinue = V),
      (l.dismissImportFileErrors = H),
      (l.clickImportExportErrors = G),
      (l.clickImportSaveContacts = z),
      (l.importSaveResult = j),
      (l.clickImportUndo = K),
      (l.importUndoResult = Q),
      (l.clickLearnMore = X),
      (l.clickHeaderHelp = Y),
      (l.dismissHelpPanel = J),
      (l.dismissNuxModal = Z),
      (l.clickNuxGetStarted = ee),
      (l.dismissLeadStagesGuide = te),
      (l.dismissSuggestedActionCard = ne),
      (l.clickEmptyStateAddCustomer = re),
      (l.clickEmptyStateManageLabels = oe),
      (l.viewHeaderMenu = ae),
      (l.dismissHeaderMenu = ie),
      (l.clickRow = le),
      (l.clickRowChat = se),
      (l.clickRowSelectCheckbox = ue),
      (l.clickSelectAllCheckbox = ce),
      (l.clickBulkAddToList = de),
      (l.clickBulkAddToListPick = me),
      (l.clickBulkSelectStage = pe),
      (l.viewViewSwitcher = _e),
      (l.dismissViewSwitcher = fe),
      (l.changeView = ge),
      (l.clickToggleView = he),
      (l.searchList = ye),
      (l.clearSearch = Ce),
      (l.editLeadStage = be),
      (l.leadStageSaveResult = ve),
      (l.clickListsIntroContinueList = Se),
      (l.clickListsIntroSettings = Re),
      (l.dismissListsIntro = Le),
      (l.dismissListsEditor = Ee),
      (l.clickListPager = ke),
      (l.viewActionsMenu = Ie),
      (l.clickActionsMenuOption = Te),
      (l.hideContactResult = De),
      (l.dismissActionsMenu = xe));
  },
  98,
);
