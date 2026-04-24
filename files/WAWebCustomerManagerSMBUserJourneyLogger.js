__d(
  "WAWebCustomerManagerSMBUserJourneyLogger",
  [
    "$InternalEnum",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        ADD_CUSTOMER_BUTTON: "add_customer_button",
        CANCEL_BUTTON: "cancel_button",
        CLOSE_BUTTON: "close_button",
        COLUMN_SELECTOR_BUTTON: "column_selector_button",
        CONFIRM_BUTTON: "confirm_button",
        EMPTY_STATE_ADD_CUSTOMER: "empty_state_add_customer",
        LAST_MESSAGE_FILTER_CHIP: "last_message_filter_chip",
        LEAD_STAGE_FILTER_CHIP: "lead_stage_filter_chip",
        REMOVE_ACTION: "remove_action",
        ROW: "row",
        ROW_ACTIONS_BUTTON: "row_actions_button",
        ROW_CHAT_BUTTON: "row_chat_button",
        SAVE_ACTION: "save_action",
        SAVE_BUTTON: "save_button",
        SEARCH_INPUT: "search_input",
        VIEW_TOGGLE_LIST: "view_toggle_list",
        VIEW_TOGGLE_PIPELINE: "view_toggle_pipeline",
      },
      s = n("$InternalEnum")({
        SUCCESS: "success",
        ERROR_CONTACT_EXISTS: "error_contact_exists",
        ERROR_INVALID_PHONE: "error_invalid_phone",
        ERROR_NETWORK: "error_network",
        ERROR_UNKNOWN: "error_unknown",
      }),
      u = n("$InternalEnum")({
        SUCCESS: "success",
        ERROR_NOT_CUSTOMER: "error_not_customer",
        ERROR_NETWORK: "error_network",
        ERROR_UNKNOWN: "error_unknown",
      }),
      c = n("$InternalEnum")({
        ROW_ACTIONS_MENU: "row_actions_menu",
        PROFILE_DRAWER: "profile_drawer",
      }),
      d = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.viewList = function (t, n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
              babelHelpers.extends({}, t != null ? { entryPoint: t } : {}, {
                extraAttributes: n,
                featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                  .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .CUSTOMER_MANAGER_LIST,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM.VIEW,
              }),
            );
          }),
          (n.clickAddCustomerOnList = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ADD_CUSTOMER_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickEmptyStateAddCustomer = function (n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { empty_reason: n },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.EMPTY_STATE_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRow = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ROW,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRowChat = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ROW_CHAT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRowActions = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ROW_ACTIONS_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickToggleView = function (n) {
            var t = n === "list" ? "pipeline" : "list";
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { from_view: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface:
                t === "pipeline"
                  ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                      .CUSTOMER_MANAGER_PIPELINE
                  : o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                      .CUSTOMER_MANAGER_LIST,
              userActionTarget:
                n === "list" ? e.VIEW_TOGGLE_LIST : e.VIEW_TOGGLE_PIPELINE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.searchList = function (n, r) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { query_length: n, result_count: r },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.SEARCH_INPUT,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.SEARCH,
            });
          }),
          (n.changeLeadStageFilter = function (n, r) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: {
                applied_stages: n,
                previously_applied: r,
                selection_grew: n.length > r.length,
              },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.LEAD_STAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.changeLastMessageFilter = function (n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { preset: n != null ? n : "all_time" },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.LAST_MESSAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewColumnsMenu = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { visible_column_count: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.editColumnToggle = function (t, n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { column_key: t, new_state: n },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionTarget: "column_toggle_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.clickColumnHeader = function (t, n, r) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: {
                column_key: t,
                direction: n,
                prev_sort_column: r != null ? r : null,
              },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "column_header_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRowLeadStagePill = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { current_stage: t != null ? t : null },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "row_lead_stage_pill",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewActionsMenu = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickActionsMenuOption = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { option: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionTarget: "actions_menu_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.dismissActionsMenu = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.viewPipeline = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { stage_counts: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickPipelineCustomerCard = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { stage: t != null ? t : null },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_customer_card",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.editPipelineCardDrag = function (t, n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { new_stage: n, prev_stage: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_card_drag",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.viewAddCustomer = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { entry: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickSaveCustomer = function (n, r) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: {
                filled_field_count: n,
                is_existing_contact: r,
              },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.saveCustomerResult = function (n, r) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { duration_ms: r, result: n },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.SAVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.dismissAddCustomer = function (n, r) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: {
                filled_field_count: r,
                had_unsaved_changes: n,
              },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.CANCEL_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.enterAddCustomerField = function (t, n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: babelHelpers.extends({}, n, { field: t }),
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_field_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.ENTER,
            });
          }),
          (n.clickAddCustomerLeadStageDropdown = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { selected: t != null ? t : null },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_lead_stage_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickAddCustomerAcquisitionSource = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { selected: t != null ? t : null },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_acquisition_source_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickAddCustomerContactSuggestion = function (t, n) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { position: t, prefilled_field_count: n },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_contact_suggestion",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewRemoveConfirm = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { triggered_from: t },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_REMOVE_CONFIRM,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickRemoveConfirm = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_REMOVE_CONFIRM,
              userActionTarget: e.CONFIRM_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.removeCustomerResult = function (n, r) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              extraAttributes: { duration_ms: r, result: n },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_REMOVE_CONFIRM,
              userActionTarget: e.REMOVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.dismissRemoveConfirm = function () {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_REMOVE_CONFIRM,
              userActionTarget: e.CANCEL_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          t
        );
      })(),
      m = new d();
    ((l.SaveResult = s),
      (l.RemoveResult = u),
      (l.RemoveTrigger = c),
      (l.CustomerManagerUserJourneyLogger = m));
  },
  98,
);
