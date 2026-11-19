__d(
  "WAWebCustomerManagerSMBUserJourneyLogger",
  [
    "WAWebCustomerManagerAddCustomerJourneyEvents",
    "WAWebCustomerManagerChatHeaderJourneyLogger",
    "WAWebCustomerManagerColumnJourneyEvents",
    "WAWebCustomerManagerEntryExitJourneyEvents",
    "WAWebCustomerManagerFilterJourneyEvents",
    "WAWebCustomerManagerListJourneyEvents",
    "WAWebCustomerManagerPipelineJourneyEvents",
    "WAWebCustomerManagerProfileJourneyEvents",
    "WAWebCustomerManagerTrialJourneyEvents",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.enterCustomerManager = function (t, n) {
            o(
              "WAWebCustomerManagerEntryExitJourneyEvents",
            ).enterCustomerManager(t, n);
          }),
          (t.exitCustomerManager = function (t) {
            o("WAWebCustomerManagerEntryExitJourneyEvents").exitCustomerManager(
              t,
            );
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
          (t.viewList = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").viewList(t, n);
          }),
          (t.viewListError = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").viewListError(t);
          }),
          (t.clickListRetry = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickListRetry(t);
          }),
          (t.viewListRetry = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").viewListRetry(t);
          }),
          (t.clickHiddenContactRetry = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickHiddenContactRetry();
          }),
          (t.clickAddCustomerOnList = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickAddCustomerOnList(
              t,
            );
          }),
          (t.clickImportOnList = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickImportOnList(t);
          }),
          (t.clickSelectOnList = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickSelectOnList(t, n);
          }),
          (t.viewImportMapping = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").viewImportMapping(t, n);
          }),
          (t.viewImportReview = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").viewImportReview(t, n);
          }),
          (t.editImportMapping = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").editImportMapping(t, n);
          }),
          (t.clickImportMappingContinue = function (t, n) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickImportMappingContinue(t, n);
          }),
          (t.dismissImportMapping = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissImportMapping(t);
          }),
          (t.clickExportOnList = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickExportOnList(t, n);
          }),
          (t.exportResult = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").exportResult(t, n);
          }),
          (t.clickExportConfirm = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickExportConfirm(t, n);
          }),
          (t.editExportColumns = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").editExportColumns(t, n);
          }),
          (t.dismissExportConfirm = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").dismissExportConfirm(
              t,
              n,
            );
          }),
          (t.clickImportMappingDropdown = function (t) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickImportMappingDropdown(t);
          }),
          (t.dismissImportMappingEscape = function (t) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).dismissImportMappingEscape(t);
          }),
          (t.dismissImportReviewEscape = function (t, n) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).dismissImportReviewEscape(t, n);
          }),
          (t.clickImportUndoToast = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickImportUndoToast(t);
          }),
          (t.clickImportReviewPager = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickImportReviewPager(
              t,
              n,
            );
          }),
          (t.viewImportUpload = function () {
            o("WAWebCustomerManagerListJourneyEvents").viewImportUpload();
          }),
          (t.clickImportFileChosen = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickImportFileChosen(
              t,
              n,
            );
          }),
          (t.clickImportUploadFile = function () {
            o("WAWebCustomerManagerListJourneyEvents").clickImportUploadFile();
          }),
          (t.clickImportSaveTemplate = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickImportSaveTemplate();
          }),
          (t.dismissImportUpload = function () {
            o("WAWebCustomerManagerListJourneyEvents").dismissImportUpload();
          }),
          (t.dismissImportUploadEscape = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).dismissImportUploadEscape();
          }),
          (t.dismissImportReview = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").dismissImportReview(
              t,
              n,
            );
          }),
          (t.clickImportDeleteContact = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickImportDeleteContact();
          }),
          (t.clickImportDeleteError = function () {
            o("WAWebCustomerManagerListJourneyEvents").clickImportDeleteError();
          }),
          (t.clickImportDeleteAllErrors = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickImportDeleteAllErrors();
          }),
          (t.viewImportDeleteAllErrors = function (t) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).viewImportDeleteAllErrors(t);
          }),
          (t.dismissImportDeleteAllErrors = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).dismissImportDeleteAllErrors();
          }),
          (t.viewImportFileErrors = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").viewImportFileErrors(t);
          }),
          (t.clickImportFileErrorsContinue = function (t) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickImportFileErrorsContinue(t);
          }),
          (t.dismissImportFileErrors = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissImportFileErrors(
              t,
            );
          }),
          (t.clickImportExportErrors = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickImportExportErrors();
          }),
          (t.clickImportSaveContacts = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickImportSaveContacts(
              t,
            );
          }),
          (t.importSaveResult = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").importSaveResult(t);
          }),
          (t.clickImportUndo = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickImportUndo(t);
          }),
          (t.importUndoResult = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").importUndoResult(t);
          }),
          (t.clickLearnMore = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickLearnMore(t, n);
          }),
          (t.clickHeaderHelp = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickHeaderHelp(t, n);
          }),
          (t.dismissHelpPanel = function () {
            o("WAWebCustomerManagerListJourneyEvents").dismissHelpPanel();
          }),
          (t.dismissNuxModal = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissNuxModal(t);
          }),
          (t.clickNuxGetStarted = function () {
            o("WAWebCustomerManagerListJourneyEvents").clickNuxGetStarted();
          }),
          (t.dismissLeadStagesGuide = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissLeadStagesGuide(
              t,
            );
          }),
          (t.dismissSuggestedActionCard = function (t) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).dismissSuggestedActionCard(t);
          }),
          (t.clickEmptyStateAddCustomer = function (t) {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickEmptyStateAddCustomer(t);
          }),
          (t.clickEmptyStateManageLabels = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickEmptyStateManageLabels();
          }),
          (t.viewHeaderMenu = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").viewHeaderMenu(t, n);
          }),
          (t.dismissHeaderMenu = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissHeaderMenu(t);
          }),
          (t.clickRow = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickRow(t);
          }),
          (t.clickRowChat = function () {
            o("WAWebCustomerManagerListJourneyEvents").clickRowChat();
          }),
          (t.clickRowSelectCheckbox = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickRowSelectCheckbox(
              t,
            );
          }),
          (t.clickSelectAllCheckbox = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickSelectAllCheckbox(
              t,
            );
          }),
          (t.clickBulkAddToList = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickBulkAddToList(t);
          }),
          (t.clickBulkAddToListPick = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickBulkAddToListPick(
              t,
            );
          }),
          (t.clickBulkSelectStage = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickBulkSelectStage(t);
          }),
          (t.viewViewSwitcher = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").viewViewSwitcher(t);
          }),
          (t.dismissViewSwitcher = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissViewSwitcher(t);
          }),
          (t.changeView = function (t, n, r) {
            o("WAWebCustomerManagerListJourneyEvents").changeView(t, n, r);
          }),
          (t.clickToggleView = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickToggleView(t, n);
          }),
          (t.searchList = function (t, n, r) {
            o("WAWebCustomerManagerListJourneyEvents").searchList(t, n, r);
          }),
          (t.clearSearch = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clearSearch(t, n);
          }),
          (t.editLeadStage = function (t, n, r) {
            o("WAWebCustomerManagerListJourneyEvents").editLeadStage(t, n, r);
          }),
          (t.leadStageSaveResult = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").leadStageSaveResult(t);
          }),
          (t.clickListsIntroContinueList = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickListsIntroContinueList();
          }),
          (t.clickListsIntroSettings = function () {
            o(
              "WAWebCustomerManagerListJourneyEvents",
            ).clickListsIntroSettings();
          }),
          (t.dismissListsIntro = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissListsIntro(t);
          }),
          (t.dismissListsEditor = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").dismissListsEditor(t);
          }),
          (t.clickListPager = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").clickListPager(t, n);
          }),
          (t.viewActionsMenu = function () {
            o("WAWebCustomerManagerListJourneyEvents").viewActionsMenu();
          }),
          (t.clickActionsMenuOption = function (t) {
            o("WAWebCustomerManagerListJourneyEvents").clickActionsMenuOption(
              t,
            );
          }),
          (t.hideContactResult = function (t, n) {
            o("WAWebCustomerManagerListJourneyEvents").hideContactResult(t, n);
          }),
          (t.dismissActionsMenu = function () {
            o("WAWebCustomerManagerListJourneyEvents").dismissActionsMenu();
          }),
          (t.changeLeadStageFilter = function (t, n, r) {
            o("WAWebCustomerManagerFilterJourneyEvents").changeLeadStageFilter(
              t,
              n,
              r,
            );
          }),
          (t.changeLastMessageFilter = function (t, n) {
            o(
              "WAWebCustomerManagerFilterJourneyEvents",
            ).changeLastMessageFilter(t, n);
          }),
          (t.changeLabelFilter = function (t, n) {
            o("WAWebCustomerManagerFilterJourneyEvents").changeLabelFilter(
              t,
              n,
            );
          }),
          (t.changeAcquisitionSourceFilter = function (t, n) {
            o(
              "WAWebCustomerManagerFilterJourneyEvents",
            ).changeAcquisitionSourceFilter(t, n);
          }),
          (t.changeBirthMonthFilter = function (t, n) {
            o("WAWebCustomerManagerFilterJourneyEvents").changeBirthMonthFilter(
              t,
              n,
            );
          }),
          (t.clickContactTypeChip = function (t) {
            o("WAWebCustomerManagerFilterJourneyEvents").clickContactTypeChip(
              t,
            );
          }),
          (t.clickLastMessageChip = function (t, n) {
            (n === void 0 && (n = "list"),
              o("WAWebCustomerManagerFilterJourneyEvents").clickLastMessageChip(
                t,
                n,
              ));
          }),
          (t.clickCustomRangeItem = function (t) {
            (t === void 0 && (t = "list"),
              o("WAWebCustomerManagerFilterJourneyEvents").clickCustomRangeItem(
                t,
              ));
          }),
          (t.clickCustomRangeFirstDay = function (t) {
            (t === void 0 && (t = "list"),
              o(
                "WAWebCustomerManagerFilterJourneyEvents",
              ).clickCustomRangeFirstDay(t));
          }),
          (t.clickAddFilterChip = function (t) {
            (t === void 0 && (t = "list"),
              o("WAWebCustomerManagerFilterJourneyEvents").clickAddFilterChip(
                t,
              ));
          }),
          (t.clickFilterSubmenuRow = function (t, n) {
            (n === void 0 && (n = "list"),
              o(
                "WAWebCustomerManagerFilterJourneyEvents",
              ).clickFilterSubmenuRow(t, n));
          }),
          (t.dismissFilterMenu = function (t, n, r) {
            (r === void 0 && (r = "list"),
              o("WAWebCustomerManagerFilterJourneyEvents").dismissFilterMenu(
                t,
                n,
                r,
              ));
          }),
          (t.clickFilterChipReopen = function (t, n) {
            o("WAWebCustomerManagerFilterJourneyEvents").clickFilterChipReopen(
              t,
              n,
            );
          }),
          (t.changeContactTypeFilter = function (t) {
            o(
              "WAWebCustomerManagerFilterJourneyEvents",
            ).changeContactTypeFilter(t);
          }),
          (t.changeCustomDateRange = function (t, n) {
            o("WAWebCustomerManagerFilterJourneyEvents").changeCustomDateRange(
              t,
              n,
            );
          }),
          (t.filterResult = function (t) {
            o("WAWebCustomerManagerFilterJourneyEvents").filterResult(t);
          }),
          (t.editColumnReorderDrag = function (t, n) {
            o("WAWebCustomerManagerColumnJourneyEvents").editColumnReorderDrag(
              t,
              n,
            );
          }),
          (t.editColumnReorderKeyboard = function (t, n) {
            o(
              "WAWebCustomerManagerColumnJourneyEvents",
            ).editColumnReorderKeyboard(t, n);
          }),
          (t.editColumnResizeDrag = function (t, n) {
            o("WAWebCustomerManagerColumnJourneyEvents").editColumnResizeDrag(
              t,
              n,
            );
          }),
          (t.editColumnResizeKeyboard = function (t, n) {
            o(
              "WAWebCustomerManagerColumnJourneyEvents",
            ).editColumnResizeKeyboard(t, n);
          }),
          (t.viewColumnsMenu = function (t) {
            o("WAWebCustomerManagerColumnJourneyEvents").viewColumnsMenu(t);
          }),
          (t.editColumnToggle = function (t, n) {
            o("WAWebCustomerManagerColumnJourneyEvents").editColumnToggle(t, n);
          }),
          (t.clickColumnHeader = function (t, n, r) {
            o("WAWebCustomerManagerColumnJourneyEvents").clickColumnHeader(
              t,
              n,
              r,
            );
          }),
          (t.viewPipeline = function (t) {
            o("WAWebCustomerManagerPipelineJourneyEvents").viewPipeline(t);
          }),
          (t.clickPipelineCustomerCard = function (t) {
            o(
              "WAWebCustomerManagerPipelineJourneyEvents",
            ).clickPipelineCustomerCard(t);
          }),
          (t.editPipelineCardDrag = function (t, n) {
            o("WAWebCustomerManagerPipelineJourneyEvents").editPipelineCardDrag(
              t,
              n,
            );
          }),
          (t.editPipelineCardDragStart = function (t) {
            o(
              "WAWebCustomerManagerPipelineJourneyEvents",
            ).editPipelineCardDragStart(t);
          }),
          (t.pipelineCardDragResult = function (t, n, r) {
            o(
              "WAWebCustomerManagerPipelineJourneyEvents",
            ).pipelineCardDragResult(t, n, r);
          }),
          (t.viewPipelineColumnError = function (t) {
            o(
              "WAWebCustomerManagerPipelineJourneyEvents",
            ).viewPipelineColumnError(t);
          }),
          (t.clickPipelineColumnRetry = function (t) {
            o(
              "WAWebCustomerManagerPipelineJourneyEvents",
            ).clickPipelineColumnRetry(t);
          }),
          (t.pipelineCardDragAbandoned = function (t, n) {
            o(
              "WAWebCustomerManagerPipelineJourneyEvents",
            ).pipelineCardDragAbandoned(t, n);
          }),
          (t.viewAddCustomer = function (t) {
            o("WAWebCustomerManagerAddCustomerJourneyEvents").viewAddCustomer(
              t,
            );
          }),
          (t.clickSaveCustomer = function (t) {
            o("WAWebCustomerManagerAddCustomerJourneyEvents").clickSaveCustomer(
              t,
            );
          }),
          (t.saveCustomerResult = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).saveCustomerResult(t);
          }),
          (t.dismissAddCustomer = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).dismissAddCustomer(t);
          }),
          (t.clickAddCustomerLeadStageDropdown = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).clickAddCustomerLeadStageDropdown(t);
          }),
          (t.clickAddCustomerAcquisitionSource = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).clickAddCustomerAcquisitionSource(t);
          }),
          (t.dismissInviteConfirm = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).dismissInviteConfirm(t);
          }),
          (t.clickInviteFailureAction = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).clickInviteFailureAction(t);
          }),
          (t.dismissUsernameKeyPrompt = function () {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).dismissUsernameKeyPrompt();
          }),
          (t.usernameKeyVerificationFailed = function () {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).usernameKeyVerificationFailed();
          }),
          (t.clickCountrySelector = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).clickCountrySelector(t);
          }),
          (t.clickAddCustomerLeadStagePick = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).clickAddCustomerLeadStagePick(t);
          }),
          (t.dismissAddCustomerLeadStageMenu = function () {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).dismissAddCustomerLeadStageMenu();
          }),
          (t.clickAddCustomerSourcePick = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).clickAddCustomerSourcePick(t);
          }),
          (t.dismissAddCustomerSourceMenu = function () {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).dismissAddCustomerSourceMenu();
          }),
          (t.clickUsernamePhoneMismatchOk = function () {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).clickUsernamePhoneMismatchOk();
          }),
          (t.dismissUsernamePhoneMismatch = function () {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).dismissUsernamePhoneMismatch();
          }),
          (t.validateAddCustomerPhone = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).validateAddCustomerPhone(t);
          }),
          (t.saveCustomerBlocked = function (t) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).saveCustomerBlocked(t);
          }),
          (t.editAddCustomerField = function (t, n, r) {
            o(
              "WAWebCustomerManagerAddCustomerJourneyEvents",
            ).editAddCustomerField(t, n, r);
          }),
          (t.clickProfileFieldEdit = function (t) {
            o("WAWebCustomerManagerProfileJourneyEvents").clickProfileFieldEdit(
              t,
            );
          }),
          (t.dismissProfileFieldEdit = function (t, n) {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).dismissProfileFieldEdit(t, n);
          }),
          (t.profileFieldValidationBlocked = function (t) {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).profileFieldValidationBlocked(t);
          }),
          (t.clickProfileSourceDropdown = function (t) {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).clickProfileSourceDropdown(t);
          }),
          (t.dismissNoteEdit = function (t) {
            o("WAWebCustomerManagerProfileJourneyEvents").dismissNoteEdit(t);
          }),
          (t.dismissContactInfoFieldsNux = function (t) {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).dismissContactInfoFieldsNux(t);
          }),
          (t.clickEditListsPencil = function (t) {
            o("WAWebCustomerManagerProfileJourneyEvents").clickEditListsPencil(
              t,
            );
          }),
          (t.clickListsIntroContinueProfile = function () {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).clickListsIntroContinueProfile();
          }),
          (t.clickProfileBirthdayCalendar = function () {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).clickProfileBirthdayCalendar();
          }),
          (t.viewProfileDrawer = function (t, n) {
            o("WAWebCustomerManagerProfileJourneyEvents").viewProfileDrawer(
              t,
              n,
            );
          }),
          (t.dismissProfileDrawer = function () {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).dismissProfileDrawer();
          }),
          (t.editCustomerField = function (t, n, r) {
            o("WAWebCustomerManagerProfileJourneyEvents").editCustomerField(
              t,
              n,
              r,
            );
          }),
          (t.customerFieldSaveResult = function (t, n) {
            o(
              "WAWebCustomerManagerProfileJourneyEvents",
            ).customerFieldSaveResult(t, n);
          }),
          (t.noteSaveResult = function (t) {
            o("WAWebCustomerManagerProfileJourneyEvents").noteSaveResult(t);
          }),
          (t.viewTrialNux = function (t) {
            o("WAWebCustomerManagerTrialJourneyEvents").viewTrialNux(t);
          }),
          (t.clickTrialNuxSlide = function (t, n, r) {
            o("WAWebCustomerManagerTrialJourneyEvents").clickTrialNuxSlide(
              t,
              n,
              r,
            );
          }),
          (t.editTrialNuxChatsConsent = function (t) {
            o(
              "WAWebCustomerManagerTrialJourneyEvents",
            ).editTrialNuxChatsConsent(t);
          }),
          (t.clickTrialNuxStart = function (t) {
            o("WAWebCustomerManagerTrialJourneyEvents").clickTrialNuxStart(t);
          }),
          (t.clickTrialNuxLearnMore = function () {
            o(
              "WAWebCustomerManagerTrialJourneyEvents",
            ).clickTrialNuxLearnMore();
          }),
          (t.trialStartResult = function (t, n) {
            o("WAWebCustomerManagerTrialJourneyEvents").trialStartResult(t, n);
          }),
          (t.viewLockCard = function () {
            o("WAWebCustomerManagerTrialJourneyEvents").viewLockCard();
          }),
          (t.clickLockCard = function (t) {
            o("WAWebCustomerManagerTrialJourneyEvents").clickLockCard(t);
          }),
          (t.viewTrialBanner = function (t, n) {
            o("WAWebCustomerManagerTrialJourneyEvents").viewTrialBanner(t, n);
          }),
          (t.clickTrialBannerSubscribe = function (t, n) {
            o(
              "WAWebCustomerManagerTrialJourneyEvents",
            ).clickTrialBannerSubscribe(t, n);
          }),
          (t.dismissTrialBanner = function (t, n) {
            o("WAWebCustomerManagerTrialJourneyEvents").dismissTrialBanner(
              t,
              n,
            );
          }),
          (t.metaOneResult = function (t, n) {
            o("WAWebCustomerManagerTrialJourneyEvents").metaOneResult(t, n);
          }),
          (t.clickTrialNuxExternalLink = function (t) {
            o(
              "WAWebCustomerManagerTrialJourneyEvents",
            ).clickTrialNuxExternalLink(t);
          }),
          (t.dismissMetaOnePhoneSignup = function (t, n) {
            o(
              "WAWebCustomerManagerTrialJourneyEvents",
            ).dismissMetaOnePhoneSignup(t, n);
          }),
          (t.viewMetaOnePhoneSignup = function (t) {
            o("WAWebCustomerManagerTrialJourneyEvents").viewMetaOnePhoneSignup(
              t,
            );
          }),
          (t.clickMetaOnePhoneSignupDone = function (t) {
            o(
              "WAWebCustomerManagerTrialJourneyEvents",
            ).clickMetaOnePhoneSignupDone(t);
          }),
          (t.clickMetaOnePhoneSignupHelp = function (t) {
            o(
              "WAWebCustomerManagerTrialJourneyEvents",
            ).clickMetaOnePhoneSignupHelp(t);
          }),
          (t.accessStateLoadFailed = function (t) {
            o("WAWebCustomerManagerTrialJourneyEvents").accessStateLoadFailed(
              t,
            );
          }),
          e
        );
      })(),
      s = new e();
    l.CustomerManagerUserJourneyLogger = s;
  },
  98,
);
