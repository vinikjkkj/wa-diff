__d(
  "WAWebCustomerManagerSMBUserJourneyLogger",
  [
    "WAWebCustomerManagerChatHeaderJourneyLogger",
    "WAWebCustomerManagerColumnWamPayload",
    "WAWebCustomerManagerFilterWamPayload",
    "WAWebCustomerManagerSMBUserJourneyTypes",
    "WAWebLeadStage",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.$1 = function (t) {
            return t === "pipeline"
              ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .CUSTOMER_MANAGER_PIPELINE
              : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CUSTOMER_MANAGER_LIST;
          }),
          (t.$2 = function (t) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
              babelHelpers.extends({}, t, {
                featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                  .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              }),
            );
          }),
          (t.exitCustomerManager = function (t, n) {
            (this.$2({
              extraAttributes: babelHelpers.extends(
                {},
                n != null ? { dwell_ms: n } : {},
                { from_import_review: t === "import_review" },
              ),
              surface: this.$1(t === "import_review" ? "list" : t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.EXIT,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            }),
              o(
                "WAWebSMBUserJourneyLogger",
              ).SMBUserJourneyLogger.clearEntryPoint(
                o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
                  .CUSTOMER_MANAGER,
              ));
          }),
          (t.viewList = function (t, n) {
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
          (t.viewListError = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "list_error",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickListRetry = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "list_retry",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickAddCustomerOnList = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.ADD_CUSTOMER_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickImportOnList = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickSelectOnList = function (t, n) {
            this.$2({
              extraAttributes: { action: t, selected_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "select_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.viewImportMapping = function (t, n) {
            this.$2({
              extraAttributes: { auto_mapped_count: n, column_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.viewImportReview = function (t, n) {
            this.$2({
              extraAttributes: { contact_count: t, error_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_review",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.editImportMapping = function (t, n) {
            this.$2({
              extraAttributes: { action: n, target: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (t.clickImportMappingContinue = function (t, n) {
            this.$2({
              extraAttributes: { mapped_count: t, skipped_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping_continue",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.dismissImportMapping = function (t) {
            this.$2({
              extraAttributes: { mapped_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_mapping_close",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.pipelineCardDragResult = function (t, n, r) {
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
          (t.viewPipelineColumnError = function (t) {
            this.$2({
              extraAttributes: { stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_column_error",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickPipelineColumnRetry = function (t) {
            this.$2({
              extraAttributes: { stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_column_retry",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.saveCustomerBlocked = function (t) {
            this.$2({
              extraAttributes: { reason: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.SAVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
            });
          }),
          (t.clickExportOnList = function (t, n) {
            this.$2({
              extraAttributes: { export_in_progress: n },
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.EXPORT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.exportResult = function (t, n) {
            this.$2({
              extraAttributes: n,
              surface: this.$1(t),
              userActionTarget:
                n.stage === "load"
                  ? o("WAWebCustomerManagerSMBUserJourneyTypes")
                      .UserActionTarget.EXPORT_BUTTON
                  : o("WAWebCustomerManagerSMBUserJourneyTypes")
                      .UserActionTarget.EXPORT_CONFIRM_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.clickExportConfirm = function (t, n) {
            this.$2({
              extraAttributes: n,
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.EXPORT_CONFIRM_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.editExportColumns = function (t, n) {
            this.$2({
              extraAttributes: { column_set: n },
              surface: this.$1(t),
              userActionTarget: "export_columns",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (t.dismissExportConfirm = function (t, n) {
            this.$2({
              extraAttributes: n,
              surface: this.$1(t),
              userActionTarget: "export_confirm_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.editAddCustomerField = function (t, n, r) {
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
          (t.viewImportUpload = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_upload",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickImportUploadFile = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_UPLOAD_FILE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickImportSaveTemplate = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_SAVE_TEMPLATE_LINK,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.dismissImportUpload = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_upload_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.dismissImportReview = function (t, n) {
            this.$2({
              extraAttributes: { contact_count: t, error_count: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_review_drawer",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.clickImportDeleteContact = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_DELETE_CONTACT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickImportDeleteError = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_DELETE_ERROR_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickImportDeleteAllErrors = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_DELETE_ALL_ERRORS_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.viewImportDeleteAllErrors = function (t) {
            this.$2({
              extraAttributes: { error_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_delete_all_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.dismissImportDeleteAllErrors = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_delete_all_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.viewImportFileErrors = function (t) {
            this.$2({
              extraAttributes: { error_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_file_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickImportFileErrorsContinue = function (t) {
            this.$2({
              extraAttributes: { error_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_FILE_ERRORS_CONTINUE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.dismissImportFileErrors = function (t) {
            this.$2({
              extraAttributes: { error_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "import_file_errors_modal",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.clickImportExportErrors = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_EXPORT_ERRORS_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickImportSaveContacts = function (t) {
            this.$2({
              extraAttributes: { total_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.importSaveResult = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.clickImportUndo = function (t) {
            this.$2({
              extraAttributes: { total_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_UNDO_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.importUndoResult = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.IMPORT_UNDO_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.clickLearnMore = function (t, n) {
            this.$2(
              babelHelpers.extends(
                {},
                n != null ? { extraAttributes: { source: n } } : {},
                {
                  surface: this.$1(t),
                  userActionTarget: "learn_more_button",
                  userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                    .SMB_USER_ACTION_TYPE_ENUM.CLICK,
                },
              ),
            );
          }),
          (t.clickHeaderHelp = function (t, n) {
            this.$2({
              extraAttributes: { panel_action: n },
              surface: this.$1(t),
              userActionTarget: "header_help_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickNuxGetStarted = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "nux_get_started",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.dismissLeadStagesGuide = function (t) {
            this.$2({
              extraAttributes: { dismiss_method: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lead_stages_guide",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.dismissSuggestedActionCard = function (t) {
            this.$2({
              extraAttributes: { card: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "suggested_action_card",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.clickEmptyStateAddCustomer = function (t) {
            this.$2({
              extraAttributes: { empty_reason: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.EMPTY_STATE_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickEmptyStateManageLabels = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "empty_state_manage_labels",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.viewHeaderMenu = function (t, n) {
            this.$2({
              extraAttributes: { export_state: n },
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.HEADER_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.dismissHeaderMenu = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.HEADER_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.clickRow = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.ROW,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickRowChat = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.ROW_CHAT_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.viewViewSwitcher = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.VIEW_SWITCHER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.dismissViewSwitcher = function (t) {
            this.$2({
              surface: this.$1(t),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.VIEW_SWITCHER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.changeView = function (t, n, r) {
            this.$2({
              extraAttributes: { from_view: t, trigger: r },
              surface: this.$1(t),
              userActionTarget:
                n === "list"
                  ? o("WAWebCustomerManagerSMBUserJourneyTypes")
                      .UserActionTarget.VIEW_CHANGE_LIST
                  : o("WAWebCustomerManagerSMBUserJourneyTypes")
                      .UserActionTarget.VIEW_CHANGE_PIPELINE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickToggleView = function (t, n) {
            this.$2({
              extraAttributes: { from_view: t },
              surface: this.$1(t),
              userActionTarget:
                n === "list"
                  ? o("WAWebCustomerManagerSMBUserJourneyTypes")
                      .UserActionTarget.VIEW_TOGGLE_LIST
                  : o("WAWebCustomerManagerSMBUserJourneyTypes")
                      .UserActionTarget.VIEW_TOGGLE_PIPELINE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.searchList = function (t, n, r) {
            this.$2({
              extraAttributes: { query_length: t, result_count: n },
              surface: this.$1(r),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.SEARCH_INPUT,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.SEARCH,
            });
          }),
          (t.clearSearch = function (t, n) {
            this.$2({
              extraAttributes: n,
              surface: this.$1(t),
              userActionTarget: "search_clear",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.SEARCH,
            });
          }),
          (t.changeLeadStageFilter = function (t, n, r) {
            this.$2({
              extraAttributes: {
                applied_stage: t != null ? t : "cleared",
                previously_applied: n != null ? n : "none",
              },
              surface: this.$1(r),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.LEAD_STAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.changeLastMessageFilter = function (t, n) {
            this.$2({
              extraAttributes: { preset: t != null ? t : "all_time" },
              surface: this.$1(n),
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.LAST_MESSAGE_FILTER_CHIP,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.changeLabelFilter = function (t) {
            this.$2({
              extraAttributes: { label_id: t != null ? t : "cleared" },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "label_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.changeAcquisitionSourceFilter = function (t, n) {
            this.$2({
              extraAttributes: { source: t != null ? t : "cleared" },
              surface: this.$1(n),
              userActionTarget: "acquisition_source_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.changeAcquisitionDateFilter = function (t, n) {
            this.$2({
              extraAttributes: { range: t != null ? t : "cleared" },
              surface: this.$1(n),
              userActionTarget: "acquisition_date_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.changeBirthMonthFilter = function (t, n) {
            this.$2({
              extraAttributes: { month: t != null ? t : "cleared" },
              surface: this.$1(n),
              userActionTarget: "birth_month_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickContactTypeChip = function (t) {
            this.$2(
              o("WAWebCustomerManagerFilterWamPayload").filterClick(
                "contact_type_filter_chip",
                { is_open: t },
              ),
            );
          }),
          (t.clickLastMessageChip = function (t, n) {
            (n === void 0 && (n = "list"),
              this.$2(
                o("WAWebCustomerManagerFilterWamPayload").filterClick(
                  "last_message_filter_chip",
                  { is_open: t },
                  n,
                ),
              ));
          }),
          (t.clickCustomRangeItem = function (t) {
            (t === void 0 && (t = "list"),
              this.$2(
                o("WAWebCustomerManagerFilterWamPayload").filterClick(
                  "custom_range_menu_item",
                  void 0,
                  t,
                ),
              ));
          }),
          (t.clickCustomRangeFirstDay = function (t) {
            (t === void 0 && (t = "list"),
              this.$2(
                o("WAWebCustomerManagerFilterWamPayload").filterClick(
                  "custom_range_calendar_day",
                  void 0,
                  t,
                ),
              ));
          }),
          (t.clickAddFilterChip = function (t) {
            (t === void 0 && (t = "list"),
              this.$2(
                o("WAWebCustomerManagerFilterWamPayload").filterClick(
                  "add_filter_chip",
                  void 0,
                  t,
                ),
              ));
          }),
          (t.clickFilterSubmenuRow = function (t, n) {
            (n === void 0 && (n = "list"),
              this.$2(
                o("WAWebCustomerManagerFilterWamPayload").filterClick(
                  "filter_submenu_row",
                  { filter_key: t },
                  n,
                ),
              ));
          }),
          (t.dismissFilterMenu = function (t, n, r) {
            (r === void 0 && (r = "list"),
              this.$2(
                o("WAWebCustomerManagerFilterWamPayload").filterDismiss(
                  { dismiss_method: n, filter_key: t },
                  r,
                ),
              ));
          }),
          (t.clickFilterChipReopen = function (t, n) {
            this.$2(
              o("WAWebCustomerManagerFilterWamPayload").filterClick(
                "filter_chip",
                { filter_key: t },
                n,
              ),
            );
          }),
          (t.changeContactTypeFilter = function (t) {
            this.$2({
              extraAttributes: { contact_type: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "contact_type_filter_chip",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.changeCustomDateRange = function (t, n) {
            this.$2({
              extraAttributes: { span_days: t },
              surface: this.$1(n),
              userActionTarget: "custom_date_range",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.filterResult = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "filter_result",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.editColumnReorderDrag = function (t, n) {
            this.$2(
              o("WAWebCustomerManagerColumnWamPayload").columnReorder(
                "drag",
                t,
                n,
              ),
            );
          }),
          (t.editColumnReorderKeyboard = function (t, n) {
            this.$2(
              o("WAWebCustomerManagerColumnWamPayload").columnReorder(
                "keyboard",
                t,
                n,
              ),
            );
          }),
          (t.editColumnResizeDrag = function (t, n) {
            this.$2(
              o("WAWebCustomerManagerColumnWamPayload").columnResize(
                "drag",
                t,
                n,
              ),
            );
          }),
          (t.editColumnResizeKeyboard = function (t, n) {
            this.$2(
              o("WAWebCustomerManagerColumnWamPayload").columnResize(
                "keyboard",
                t,
                n,
              ),
            );
          }),
          (t.viewColumnsMenu = function (t) {
            this.$2({
              extraAttributes: { visible_column_count: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.editColumnToggle = function (t, n) {
            this.$2({
              extraAttributes: { column_key: t, new_state: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_COLUMNS_MENU,
              userActionTarget: "column_toggle_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (t.clickColumnHeader = function (t, n, r) {
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
          (t.editChatHeaderLeadStageCommit = function (t) {
            o(
              "WAWebCustomerManagerChatHeaderJourneyLogger",
            ).editChatHeaderLeadStageCommit(t);
          }),
          (t.editChatHeaderLeadStagePick = function (t) {
            o(
              "WAWebCustomerManagerChatHeaderJourneyLogger",
            ).editChatHeaderLeadStagePick(t);
          }),
          (t.clickChatHeaderLeadStageRow = function () {
            o(
              "WAWebCustomerManagerChatHeaderJourneyLogger",
            ).clickChatHeaderLeadStageRow();
          }),
          (t.editLeadStage = function (t, n, r) {
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
          (t.leadStageSaveResult = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lead_stage_save",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.clickListsIntroContinueList = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lists_intro_continue",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickListsIntroSettings = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lists_intro_settings_link",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.dismissListsIntro = function (t) {
            this.$2({
              extraAttributes: { dismiss_method: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lists_intro_popup",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.clickListPager = function (t, n) {
            this.$2({
              extraAttributes: { direction: t, page_index: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "list_pager",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.viewActionsMenu = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickActionsMenuOption = function (t) {
            this.$2({
              extraAttributes: { option: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionTarget: "actions_menu_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.hideContactResult = function (t, n) {
            this.$2({
              extraAttributes: n,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionTarget: "actions_menu_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.dismissActionsMenu = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ACTIONS_MENU,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.viewPipeline = function (t) {
            var e = {};
            for (var n of o("WAWebLeadStage").ALL_LEAD_STAGES) {
              var r;
              e["stage_" + n + "_count"] = (r = t[String(n)]) != null ? r : 0;
            }
            this.$2({
              extraAttributes: e,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickPipelineCustomerCard = function (t) {
            this.$2({
              extraAttributes: { stage: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_customer_card",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.editPipelineCardDrag = function (t, n) {
            this.$2({
              extraAttributes: { new_stage: n, prev_stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_card_drag",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (t.editPipelineCardDragStart = function (t) {
            this.$2({
              extraAttributes: { from_stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PIPELINE,
              userActionTarget: "pipeline_card_drag_start",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (t.viewAddCustomer = function (t) {
            this.$2({
              extraAttributes: { entry: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickSaveCustomer = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.SAVE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.saveCustomerResult = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.SAVE_ACTION,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.dismissAddCustomer = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.DISMISS,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.clickAddCustomerLeadStageDropdown = function (t) {
            this.$2({
              extraAttributes: { selected: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_lead_stage_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickAddCustomerAcquisitionSource = function (t) {
            this.$2({
              extraAttributes: { selected: t != null ? t : null },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_ADD_CUSTOMER,
              userActionTarget: "add_customer_acquisition_source_dropdown",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.viewProfileDrawer = function (t, n) {
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
          (t.dismissProfileDrawer = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PROFILE_DRAWER,
              userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
                .UserActionTarget.CLOSE_BUTTON,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.editCustomerField = function (t, n, r) {
            this.$2({
              extraAttributes: { change: r, field: t, prior_source: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PROFILE_DRAWER,
              userActionTarget: "customer_field_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (t.customerFieldSaveResult = function (t, n) {
            this.$2({
              extraAttributes: babelHelpers.extends({ field: t }, n),
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PROFILE_DRAWER,
              userActionTarget: "customer_field_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.noteSaveResult = function (t) {
            this.$2({
              extraAttributes: t,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_PROFILE_DRAWER,
              userActionTarget: "notes_save",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          (t.viewTrialNux = function (t) {
            this.$2({
              extraAttributes: { accepted_ai_terms: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickTrialNuxSlide = function (t, n, r) {
            this.$2({
              extraAttributes: { from_slide: t, to_slide: n },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux_" + r,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.editTrialNuxChatsConsent = function (t) {
            this.$2({
              extraAttributes: { shares_chats: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux_chats_consent",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.EDIT,
            });
          }),
          (t.clickTrialNuxStart = function (t) {
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
          (t.clickTrialNuxLearnMore = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_nux_learn_more_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.trialStartResult = function (t, n) {
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
          (t.viewLockCard = function () {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lock_card",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickLockCard = function (t) {
            this.$2({
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "lock_card_" + t,
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.viewTrialBanner = function (t, n) {
            this.$2({
              extraAttributes: { days_left: n != null ? n : null, stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_banner",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickTrialBannerSubscribe = function (t, n) {
            this.$2({
              extraAttributes: { days_left: n != null ? n : null, stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_banner_subscribe",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.dismissTrialBanner = function (t, n) {
            this.$2({
              extraAttributes: { days_left: n != null ? n : null, stage: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "trial_banner",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
            });
          }),
          (t.metaOneResult = function (t, n) {
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
          (t.viewMetaOnePhoneSignup = function (t) {
            this.$2({
              extraAttributes: { source: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "meta_one_phone_signup",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.VIEW,
            });
          }),
          (t.clickMetaOnePhoneSignupDone = function (t) {
            this.$2({
              extraAttributes: { source: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "meta_one_phone_signup_done",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.clickMetaOnePhoneSignupHelp = function (t) {
            this.$2({
              extraAttributes: { source: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "meta_one_phone_signup_help",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            });
          }),
          (t.accessStateLoadFailed = function (t) {
            this.$2({
              extraAttributes: { action_status: "failure", error_name: t },
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CUSTOMER_MANAGER_LIST,
              userActionTarget: "access_state",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.API,
            });
          }),
          e
        );
      })(),
      s = new e();
    l.CustomerManagerUserJourneyLogger = s;
  },
  98,
);
