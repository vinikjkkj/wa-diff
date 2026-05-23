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
        IMPORT_BUTTON: "import_button",
        IMPORT_DELETE_ALL_ERRORS_BUTTON: "import_delete_all_errors_button",
        IMPORT_DELETE_CONTACT_BUTTON: "import_delete_contact_button",
        IMPORT_DELETE_ERROR_BUTTON: "import_delete_error_button",
        IMPORT_SAVE_BUTTON: "import_save_button",
        IMPORT_SAVE_TEMPLATE_LINK: "import_save_template_link",
        IMPORT_UPLOAD_FILE_BUTTON: "import_upload_file_button",
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
          (n.$1 = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
              babelHelpers.extends({}, t, {
                featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                  .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              }),
            );
          }),
          (n.viewList = function (t, n) {
            this.$1(
              babelHelpers.extends({}, t != null ? { entryPoint: t } : {}, {
                extraAttributes: n,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .CUSTOMER_MANAGER_LIST,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM.VIEW,
              }),
            );
          }),
          (n.clickAddCustomerOnList = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ADD_CUSTOMER_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportOnList = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportUploadFile = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_UPLOAD_FILE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportSaveTemplate = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_SAVE_TEMPLATE_LINK,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportDeleteContact = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_DELETE_CONTACT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportDeleteError = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_DELETE_ERROR_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportDeleteAllErrors = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_DELETE_ALL_ERRORS_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportSaveContacts = function (n) {
            this.$1({
              extraAttributes: { total_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.importSaveResult = function (n, r, a) {
            this.$1({
              extraAttributes: {
                duration_ms: a,
                failure_count: r,
                success_count: n,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickLearnMore = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "learn_more_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickEmptyStateAddCustomer = function (n) {
            this.$1({
              extraAttributes: { empty_reason: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.EMPTY_STATE_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickEmptyStateManageLabels = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "empty_state_manage_labels",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRow = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ROW,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRowChat = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ROW_CHAT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRowActions = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ROW_ACTIONS_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickToggleView = function (n) {
            var t = n === "list" ? "pipeline" : "list";
            this.$1({
              extraAttributes: { from_view: t },
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
            this.$1({
              extraAttributes: { query_length: n, result_count: r },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.SEARCH_INPUT,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.SEARCH,
            });
          }),
          (n.changeLeadStageFilter = function (n, r) {
            this.$1({
              extraAttributes: {
                applied_stages: n,
                previously_applied: r,
                selection_grew: n.length > r.length,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.LEAD_STAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.changeLastMessageFilter = function (n) {
            this.$1({
              extraAttributes: { preset: n != null ? n : "all_time" },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.LAST_MESSAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.changeLabelFilter = function (t) {
            this.$1({
              extraAttributes: { label_id: t != null ? t : "cleared" },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "label_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.changeAcquisitionSourceFilter = function (t) {
            this.$1({
              extraAttributes: { source: t != null ? t : "cleared" },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "acquisition_source_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewColumnsMenu = function (t) {
            this.$1({
              extraAttributes: { visible_column_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.editColumnToggle = function (t, n) {
            this.$1({
              extraAttributes: { column_key: t, new_state: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionTarget: "column_toggle_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.clickColumnHeader = function (t, n, r) {
            this.$1({
              extraAttributes: {
                column_key: t,
                direction: n,
                prev_sort_column: r != null ? r : null,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "column_header_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRowLeadStagePill = function (t) {
            this.$1({
              extraAttributes: { current_stage: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "row_lead_stage_pill",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewActionsMenu = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickActionsMenuOption = function (t) {
            this.$1({
              extraAttributes: { option: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionTarget: "actions_menu_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.dismissActionsMenu = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.viewPipeline = function (t) {
            this.$1({
              extraAttributes: { stage_counts: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickPipelineCustomerCard = function (t) {
            this.$1({
              extraAttributes: { stage: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_customer_card",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.editPipelineCardDrag = function (t, n) {
            this.$1({
              extraAttributes: { new_stage: n, prev_stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_card_drag",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.viewAddCustomer = function (t) {
            this.$1({
              extraAttributes: { entry: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickSaveCustomer = function (n, r) {
            this.$1({
              extraAttributes: {
                filled_field_count: n,
                is_existing_contact: r,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.saveCustomerResult = function (n, r) {
            this.$1({
              extraAttributes: { duration_ms: r, result: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.SAVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.dismissAddCustomer = function (n, r) {
            this.$1({
              extraAttributes: {
                filled_field_count: r,
                had_unsaved_changes: n,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.CANCEL_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.enterAddCustomerField = function (t, n) {
            this.$1({
              extraAttributes: babelHelpers.extends({}, n, { field: t }),
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_field_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.ENTER,
            });
          }),
          (n.clickAddCustomerLeadStageDropdown = function (t) {
            this.$1({
              extraAttributes: { selected: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_lead_stage_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickAddCustomerAcquisitionSource = function (t) {
            this.$1({
              extraAttributes: { selected: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_acquisition_source_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickAddCustomerContactSuggestion = function (t, n) {
            this.$1({
              extraAttributes: { position: t, prefilled_field_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_contact_suggestion",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewRemoveConfirm = function (t) {
            this.$1({
              extraAttributes: { triggered_from: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_REMOVE_CONFIRM,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickRemoveConfirm = function () {
            this.$1({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_REMOVE_CONFIRM,
              userActionTarget: e.CONFIRM_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.removeCustomerResult = function (n, r) {
            this.$1({
              extraAttributes: { duration_ms: r, result: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_REMOVE_CONFIRM,
              userActionTarget: e.REMOVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.dismissRemoveConfirm = function () {
            this.$1({
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
