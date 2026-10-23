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
        EMPTY_STATE_ADD_CUSTOMER: "empty_state_add_customer",
        IMPORT_BUTTON: "import_button",
        IMPORT_DELETE_ALL_ERRORS_BUTTON: "import_delete_all_errors_button",
        IMPORT_DELETE_CONTACT_BUTTON: "import_delete_contact_button",
        IMPORT_DELETE_ERROR_BUTTON: "import_delete_error_button",
        IMPORT_EXPORT_ERRORS_BUTTON: "import_export_errors_button",
        IMPORT_FILE_ERRORS_CONTINUE_BUTTON:
          "import_file_errors_continue_button",
        IMPORT_SAVE_BUTTON: "import_save_button",
        IMPORT_SAVE_TEMPLATE_LINK: "import_save_template_link",
        IMPORT_UNDO_BUTTON: "import_undo_button",
        IMPORT_UPLOAD_FILE_BUTTON: "import_upload_file_button",
        LAST_MESSAGE_FILTER_CHIP: "last_message_filter_chip",
        LEAD_STAGE_FILTER_CHIP: "lead_stage_filter_chip",
        ROW: "row",
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
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.$1 = function (t) {
            return t === "pipeline"
              ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .CUSTOMER_MANAGER_PIPELINE
              : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CUSTOMER_MANAGER_LIST;
          }),
          (n.$2 = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
              babelHelpers.extends({}, t, {
                featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                  .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              }),
            );
          }),
          (n.viewList = function (t, n) {
            this.$2(
              babelHelpers.extends({}, t != null ? { entryPoint: t } : {}, {
                extraAttributes: n,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .CUSTOMER_MANAGER_LIST,
                userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM.VIEW,
              }),
            );
          }),
          (n.clickAddCustomerOnList = function (n) {
            this.$2({
              surface: this.$1(n),
              userActionTarget: e.ADD_CUSTOMER_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportOnList = function (n) {
            this.$2({
              surface: this.$1(n),
              userActionTarget: e.IMPORT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewImportMapping = function (t, n) {
            this.$2({
              extraAttributes: { auto_mapped_count: n, column_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.viewImportReview = function (t, n) {
            this.$2({
              extraAttributes: { contact_count: t, error_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_review",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.editImportMapping = function (t, n) {
            this.$2({
              extraAttributes: { action: n, target: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.clickImportMappingContinue = function (t, n) {
            this.$2({
              extraAttributes: { mapped_count: t, skipped_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping_continue",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.dismissImportMapping = function (t) {
            this.$2({
              extraAttributes: { mapped_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping_close",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.pipelineCardDragResult = function (t, n, r) {
            this.$2({
              extraAttributes: {
                action_status: t,
                new_stage: r,
                prev_stage: n,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_card_drag",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.viewPipelineColumnError = function (t) {
            this.$2({
              extraAttributes: { stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_column_error",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickPipelineColumnRetry = function (t) {
            this.$2({
              extraAttributes: { stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_column_retry",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.saveCustomerBlocked = function (n) {
            this.$2({
              extraAttributes: { reason: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.SAVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
            });
          }),
          (n.clickExportOnList = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: "export_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.editAddCustomerField = function (t, n, r) {
            this.$2({
              extraAttributes: babelHelpers.extends({}, r, {
                change: n,
                field: t,
              }),
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_field_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.viewImportUpload = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_upload",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickImportUploadFile = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_UPLOAD_FILE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportSaveTemplate = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_SAVE_TEMPLATE_LINK,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.dismissImportUpload = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_upload_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.dismissImportReview = function (t, n) {
            this.$2({
              extraAttributes: { contact_count: t, error_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_review_drawer",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.clickImportDeleteContact = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_DELETE_CONTACT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportDeleteError = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_DELETE_ERROR_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportDeleteAllErrors = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_DELETE_ALL_ERRORS_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewImportDeleteAllErrors = function (t) {
            this.$2({
              extraAttributes: { error_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_delete_all_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.dismissImportDeleteAllErrors = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_delete_all_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.viewImportFileErrors = function (t) {
            this.$2({
              extraAttributes: { error_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_file_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickImportFileErrorsContinue = function (n) {
            this.$2({
              extraAttributes: { error_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_FILE_ERRORS_CONTINUE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.dismissImportFileErrors = function (t) {
            this.$2({
              extraAttributes: { error_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_file_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.clickImportExportErrors = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_EXPORT_ERRORS_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickImportSaveContacts = function (n) {
            this.$2({
              extraAttributes: { total_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.importSaveResult = function (n, r, a) {
            this.$2({
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
          (n.clickImportUndo = function (n) {
            this.$2({
              extraAttributes: { total_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_UNDO_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.importUndoResult = function (n, r) {
            this.$2({
              extraAttributes: { failure_count: r, success_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.IMPORT_UNDO_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickLearnMore = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: "learn_more_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickEmptyStateAddCustomer = function (n) {
            this.$2({
              extraAttributes: { empty_reason: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.EMPTY_STATE_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickEmptyStateManageLabels = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "empty_state_manage_labels",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewHeaderMenu = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: "header_menu",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickRow = function (n) {
            this.$2({
              surface: this.$1(n),
              userActionTarget: e.ROW,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickRowChat = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: e.ROW_CHAT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickToggleView = function (n) {
            var t = n === "list" ? "pipeline" : "list";
            this.$2({
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
          (n.searchList = function (n, r, a) {
            this.$2({
              extraAttributes: { query_length: n, result_count: r },
              surface: this.$1(a),
              userActionTarget: e.SEARCH_INPUT,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.SEARCH,
            });
          }),
          (n.changeLeadStageFilter = function (n, r, a) {
            this.$2({
              extraAttributes: {
                applied_stages: n,
                previously_applied: r,
                selection_grew: n.length > r.length,
              },
              surface: this.$1(a),
              userActionTarget: e.LEAD_STAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.changeLastMessageFilter = function (n, r) {
            this.$2({
              extraAttributes: { preset: n != null ? n : "all_time" },
              surface: this.$1(r),
              userActionTarget: e.LAST_MESSAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.changeLabelFilter = function (t) {
            this.$2({
              extraAttributes: { label_id: t != null ? t : "cleared" },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "label_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.changeAcquisitionSourceFilter = function (t, n) {
            this.$2({
              extraAttributes: { source: t != null ? t : "cleared" },
              surface: this.$1(n),
              userActionTarget: "acquisition_source_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewColumnsMenu = function (t) {
            this.$2({
              extraAttributes: { visible_column_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.editColumnToggle = function (t, n) {
            this.$2({
              extraAttributes: { column_key: t, new_state: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionTarget: "column_toggle_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.clickColumnHeader = function (t, n, r) {
            this.$2({
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
          (n.editLeadStage = function (t, n, r) {
            this.$2({
              extraAttributes: {
                new_stage: n,
                prev_stage: t != null ? t : null,
                source_surface: r,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lead_stage_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.viewActionsMenu = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickActionsMenuOption = function (t) {
            this.$2({
              extraAttributes: { option: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionTarget: "actions_menu_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.dismissActionsMenu = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.viewPipeline = function (t) {
            this.$2({
              extraAttributes: { stage_counts: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickPipelineCustomerCard = function (t) {
            this.$2({
              extraAttributes: { stage: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_customer_card",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.editPipelineCardDrag = function (t, n) {
            this.$2({
              extraAttributes: { new_stage: n, prev_stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_card_drag",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.viewAddCustomer = function (t) {
            this.$2({
              extraAttributes: { entry: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickSaveCustomer = function (n) {
            this.$2({
              extraAttributes: { filled_field_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.saveCustomerResult = function (n, r) {
            this.$2({
              extraAttributes: { duration_ms: r, result: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: e.SAVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.dismissAddCustomer = function (n, r) {
            this.$2({
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
          (n.clickAddCustomerLeadStageDropdown = function (t) {
            this.$2({
              extraAttributes: { selected: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_lead_stage_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.clickAddCustomerAcquisitionSource = function (t) {
            this.$2({
              extraAttributes: { selected: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_acquisition_source_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewProfileDrawer = function (t, n) {
            this.$2({
              extraAttributes: {
                ai_field_count: t,
                filled_field_count: n,
                has_ai_written_fields: t > 0,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PROFILE_DRAWER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.dismissProfileDrawer = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PROFILE_DRAWER,
              userActionTarget: e.CLOSE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.editCustomerField = function (t, n, r) {
            this.$2({
              extraAttributes: { change: r, field: t, prior_source: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PROFILE_DRAWER,
              userActionTarget: "customer_field_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.viewTrialNux = function (t) {
            this.$2({
              extraAttributes: { accepted_ai_terms: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickTrialNuxSlide = function (t, n, r) {
            this.$2({
              extraAttributes: { from_slide: t, to_slide: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux_" + r,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.editTrialNuxChatsConsent = function (t) {
            this.$2({
              extraAttributes: { shares_chats: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux_chats_consent",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (n.clickTrialNuxStart = function (t) {
            var e, n;
            this.$2({
              extraAttributes: {
                accepted_ai_terms: t.acceptedAiTerms,
                chat_history: (e = t.chatHistory) != null ? e : "unknown",
                shares_chats: (n = t.sharesChats) != null ? n : null,
                slide: t.slide,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux_start_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.trialStartResult = function (t, n) {
            this.$2({
              extraAttributes: {
                action_status: t,
                error_name: n != null ? n : null,
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux_start_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.viewLockCard = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lock_card",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickLockCard = function (t) {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lock_card_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.viewTrialBanner = function (t, n) {
            this.$2({
              extraAttributes: { days_left: n != null ? n : null, stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_banner",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (n.clickTrialBannerSubscribe = function (t, n) {
            this.$2({
              extraAttributes: { days_left: n != null ? n : null, stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_banner_subscribe",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (n.dismissTrialBanner = function (t, n) {
            this.$2({
              extraAttributes: { days_left: n != null ? n : null, stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_banner",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (n.metaOneResult = function (t, n) {
            this.$2({
              extraAttributes: {
                access_state: n != null ? n : null,
                source: t,
                unlocked: n == null ? null : n === "PAID_ACCESS",
              },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "meta_one_result",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (n.accessStateLoadFailed = function (t) {
            this.$2({
              extraAttributes: { action_status: "failure", error_name: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "access_state",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          t
        );
      })(),
      c = new u();
    ((l.SaveResult = s), (l.CustomerManagerUserJourneyLogger = c));
  },
  98,
);
