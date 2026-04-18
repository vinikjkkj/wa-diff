__d(
  "WAWebBusinessBroadcastUserJourneyLogger",
  [
    "WAWebBBAudienceLogs",
    "WAWebBBBroadcastCreationLogs",
    "WAWebBBContactImportLogs",
    "WAWebBBEntryPointLogs",
    "WAWebBBGenAILogs",
    "WAWebBBHomeLogs",
    "WAWebBBInfoDrawerLogs",
    "WAWebBBNuxLogs",
    "WAWebBBPaymentLogs",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = function (e) {
            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
              entryPoint: e.entryPoint,
              extraAttributes: e.extraAttributes,
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.BUSINESS_BROADCAST,
              surface: e.surface,
              userActionTarget: e.userActionTarget,
              userActionType: e.action,
            });
          };
        }
        var t = e.prototype;
        return (
          (t.qpBannerViewed = function () {
            o("WAWebBBEntryPointLogs").qpBannerViewed(this.$1);
          }),
          (t.qpBannerDismissed = function () {
            o("WAWebBBEntryPointLogs").qpBannerDismissed(this.$1);
          }),
          (t.chatOverflowMenuEntryPointViewed = function () {
            o("WAWebBBEntryPointLogs").chatOverflowMenuEntryPointViewed(
              this.$1,
            );
          }),
          (t.chatOverflowMenuEntryPointClicked = function () {
            o("WAWebBBEntryPointLogs").chatOverflowMenuEntryPointClicked(
              this.$1,
            );
          }),
          (t.toolsEntryPointViewed = function () {
            o("WAWebBBEntryPointLogs").toolsEntryPointViewed(this.$1);
          }),
          (t.toolsEntryPointClicked = function () {
            o("WAWebBBEntryPointLogs").toolsEntryPointClicked(this.$1);
          }),
          (t.newChatEntryPointViewed = function () {
            o("WAWebBBEntryPointLogs").newChatEntryPointViewed(this.$1);
          }),
          (t.newChatEntryPointClicked = function () {
            o("WAWebBBEntryPointLogs").newChatEntryPointClicked(this.$1);
          }),
          (t.bbThreadSystemMessageCtaClicked = function () {
            o("WAWebBBEntryPointLogs").bbThreadSystemMessageCtaClicked(this.$1);
          }),
          (t.bbHomePageViewed = function (t) {
            o("WAWebBBHomeLogs").bbHomePageViewed(this.$1, t);
          }),
          (t.createAudienceButtonClicked = function (t, n) {
            o("WAWebBBBroadcastCreationLogs").createAudienceButtonClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.importAudienceButtonClicked = function (t, n) {
            o("WAWebBBBroadcastCreationLogs").importAudienceButtonClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.newBusinessBroadcastAudienceListItemClicked = function (t, n) {
            o("WAWebBBHomeLogs").newBusinessBroadcastAudienceListItemClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.newChatFlowAudienceListItemClicked = function (t) {
            o("WAWebBBHomeLogs").newChatFlowAudienceListItemClicked(this.$1, t);
          }),
          (t.homeLearnMoreClicked = function (t) {
            o("WAWebBBHomeLogs").homeLearnMoreClicked(this.$1, t);
          }),
          (t.homeNewAudienceDropdownClicked = function (t) {
            o("WAWebBBHomeLogs").homeNewAudienceDropdownClicked(this.$1, t);
          }),
          (t.homeOverflowMenuClicked = function (t) {
            o("WAWebBBHomeLogs").homeOverflowMenuClicked(this.$1, t);
          }),
          (t.homeAudiencesTabClicked = function (t) {
            o("WAWebBBHomeLogs").homeAudiencesTabClicked(this.$1, t);
          }),
          (t.homeBroadcastsTabClicked = function (t) {
            o("WAWebBBHomeLogs").homeBroadcastsTabClicked(this.$1, t);
          }),
          (t.eligibilityCheckResult = function (t, n, r) {
            o("WAWebBBHomeLogs").eligibilityCheckResult(this.$1, t, n, r);
          }),
          (t.suggestedAudienceCardsViewed = function (t, n, r) {
            o("WAWebBBHomeLogs").suggestedAudienceCardsViewed(this.$1, t, n, r);
          }),
          (t.chatListContextMenuOpened = function (t) {
            o("WAWebBBHomeLogs").chatListContextMenuOpened(this.$1, t);
          }),
          (t.messageContextMenuOpened = function () {
            o("WAWebBBHomeLogs").messageContextMenuOpened(this.$1);
          }),
          (t.conversationHeaderMenuOpened = function (t) {
            o("WAWebBBHomeLogs").conversationHeaderMenuOpened(this.$1, t);
          }),
          (t.broadcastChatListItemViewed = function (t, n, r, a, i) {
            o("WAWebBBHomeLogs").broadcastChatListItemViewed(
              this.$1,
              t,
              n,
              r,
              a,
              i,
            );
          }),
          (t.broadcastThreadViewed = function (t) {
            o("WAWebBBHomeLogs").broadcastThreadViewed(this.$1, t);
          }),
          (t.tosReviewBannerViewed = function () {
            o("WAWebBBHomeLogs").tosReviewBannerViewed(this.$1);
          }),
          (t.tosReviewBannerClicked = function () {
            o("WAWebBBHomeLogs").tosReviewBannerClicked(this.$1);
          }),
          (t.broadcastItemOverflowClicked = function (t) {
            o("WAWebBBHomeLogs").broadcastItemOverflowClicked(this.$1, t);
          }),
          (t.suggestedAudienceCardClicked = function (t, n, r, a) {
            o("WAWebBBHomeLogs").suggestedAudienceCardClicked(
              this.$1,
              t,
              n,
              r,
              a,
            );
          }),
          (t.suggestedAudienceCardError = function (t, n, r, a) {
            o("WAWebBBHomeLogs").suggestedAudienceCardError(
              this.$1,
              t,
              n,
              r,
              a,
            );
          }),
          (t.createAudienceViewed = function (t) {
            o("WAWebBBAudienceLogs").createAudienceViewed(this.$1, t);
          }),
          (t.createAudienceContactCheckboxClicked = function (t, n) {
            o("WAWebBBAudienceLogs").createAudienceContactCheckboxClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.createAudienceBackClicked = function (t) {
            o("WAWebBBAudienceLogs").createAudienceBackClicked(this.$1, t);
          }),
          (t.createAudienceSaveClicked = function (t, n, r, a, i) {
            o("WAWebBBAudienceLogs").createAudienceSaveClicked(
              this.$1,
              t,
              n,
              r,
              a,
              i,
            );
          }),
          (t.createAudienceSaveResult = function (t, n, r, a, i, l) {
            o("WAWebBBAudienceLogs").createAudienceSaveResult(
              this.$1,
              t,
              n,
              r,
              a,
              i,
              l,
            );
          }),
          (t.importAudienceSaveResult = function (t, n, r, a) {
            o("WAWebBBAudienceLogs").importAudienceSaveResult(
              this.$1,
              t,
              n,
              r,
              a,
            );
          }),
          (t.attachmentsImageVideoDropdownClicked = function (t) {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).attachmentsImageVideoDropdownClicked(this.$1, t);
          }),
          (t.attachmentsCameraDropdownClicked = function (t) {
            o("WAWebBBBroadcastCreationLogs").attachmentsCameraDropdownClicked(
              this.$1,
              t,
            );
          }),
          (t.attachmentsDocumentDropdownClicked = function (t) {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).attachmentsDocumentDropdownClicked(this.$1, t);
          }),
          (t.addAttachmentButtonClicked = function (t) {
            o("WAWebBBBroadcastCreationLogs").addAttachmentButtonClicked(
              this.$1,
              t,
            );
          }),
          (t.attachmentFileSelected = function (t) {
            o("WAWebBBBroadcastCreationLogs").attachmentFileSelected(
              this.$1,
              t,
            );
          }),
          (t.attachmentPreviewSaveButtonClicked = function (t, n, r) {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).attachmentPreviewSaveButtonClicked(this.$1, t, n, r);
          }),
          (t.attachmentPreviewButtonClicked = function (t, n, r, a) {
            o("WAWebBBBroadcastCreationLogs").attachmentPreviewButtonClicked(
              this.$1,
              t,
              n,
              r,
              a,
            );
          }),
          (t.attachmentRemoveButtonClicked = function (t, n, r, a) {
            o("WAWebBBBroadcastCreationLogs").attachmentRemoveButtonClicked(
              this.$1,
              t,
              n,
              r,
              a,
            );
          }),
          (t.attachmentUpload = function (t, n) {
            o("WAWebBBBroadcastCreationLogs").attachmentUpload(this.$1, t, n);
          }),
          (t.attachmentSectionErrorRender = function (t) {
            o("WAWebBBBroadcastCreationLogs").attachmentSectionErrorRender(
              this.$1,
              t,
            );
          }),
          (t.documentPreviewMessageBubbleErrorRender = function () {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).documentPreviewMessageBubbleErrorRender(this.$1);
          }),
          (t.addAudienceButtonClicked = function (t) {
            o("WAWebBBBroadcastCreationLogs").addAudienceButtonClicked(
              this.$1,
              t,
            );
          }),
          (t.addCTAButtonClicked = function (t) {
            o("WAWebBBBroadcastCreationLogs").addCTAButtonClicked(this.$1, t);
          }),
          (t.createBroadcastViewed = function (t) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastViewed(this.$1, t);
          }),
          (t.sendBroadcastResult = function (t, n, r, a, i) {
            o("WAWebBBBroadcastCreationLogs").sendBroadcastResult(
              this.$1,
              t,
              n,
              r,
              a,
              i,
            );
          }),
          (t.sendCampaignAck = function (t) {
            o("WAWebBBBroadcastCreationLogs").sendCampaignAck(this.$1, t);
          }),
          (t.createBroadcastChooseAudienceClicked = function (t, n) {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).createBroadcastChooseAudienceClicked(this.$1, t, n);
          }),
          (t.createBroadcastAudienceMenuViewed = function (t, n) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastAudienceMenuViewed(
              this.$1,
              t,
              n,
            );
          }),
          (t.createBroadcastAudienceMenuExistingAudiencesClicked = function (
            t,
          ) {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).createBroadcastAudienceMenuExistingAudiencesClicked(this.$1, t);
          }),
          (t.createBroadcastBackClicked = function (t) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastBackClicked(
              this.$1,
              t,
            );
          }),
          (t.createBroadcastExitConfirmationDismissed = function (t) {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).createBroadcastExitConfirmationDismissed(this.$1, t);
          }),
          (t.createBroadcastExitConfirmationConfirmed = function (t) {
            o(
              "WAWebBBBroadcastCreationLogs",
            ).createBroadcastExitConfirmationConfirmed(this.$1, t);
          }),
          (t.existingAudiencesModalViewed = function (t) {
            o("WAWebBBBroadcastCreationLogs").existingAudiencesModalViewed(
              this.$1,
              t,
            );
          }),
          (t.existingAudiencesModalSaved = function (t, n) {
            o("WAWebBBBroadcastCreationLogs").existingAudiencesModalSaved(
              this.$1,
              t,
              n,
            );
          }),
          (t.createBroadcastSendClicked = function (t, n, r) {
            o("WAWebBBBroadcastCreationLogs").createBroadcastSendClicked(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.importAudienceViewed = function (t) {
            o("WAWebBBContactImportLogs").importAudienceViewed(this.$1, t);
          }),
          (t.importAudienceClicked = function (t) {
            o("WAWebBBContactImportLogs").importAudienceClicked(this.$1, t);
          }),
          (t.contactImportPromptViewed = function (t, n) {
            o("WAWebBBContactImportLogs").contactImportPromptViewed(
              this.$1,
              t,
              n,
            );
          }),
          (t.templateSaveClicked = function (t) {
            o("WAWebBBContactImportLogs").templateSaveClicked(this.$1, t);
          }),
          (t.contactImportCancelClicked = function (t) {
            o("WAWebBBContactImportLogs").contactImportCancelClicked(
              this.$1,
              t,
            );
          }),
          (t.fileUploadClicked = function (t) {
            o("WAWebBBContactImportLogs").fileUploadClicked(this.$1, t);
          }),
          (t.fileOpenClicked = function (t) {
            o("WAWebBBContactImportLogs").fileOpenClicked(this.$1, t);
          }),
          (t.importedContactWizardViewed = function (t, n) {
            o("WAWebBBContactImportLogs").importedContactWizardViewed(
              this.$1,
              t,
              n,
            );
          }),
          (t.contactDeleteClicked = function (t) {
            o("WAWebBBContactImportLogs").contactDeleteClicked(this.$1, t);
          }),
          (t.errorContactDeleteClicked = function (t) {
            o("WAWebBBContactImportLogs").errorContactDeleteClicked(this.$1, t);
          }),
          (t.allErrorContactsDeleteClicked = function (t) {
            o("WAWebBBContactImportLogs").allErrorContactsDeleteClicked(
              this.$1,
              t,
            );
          }),
          (t.errorContactEditClicked = function (t) {
            o("WAWebBBContactImportLogs").errorContactEditClicked(this.$1, t);
          }),
          (t.importedContactListNameEntered = function (t) {
            o("WAWebBBContactImportLogs").importedContactListNameEntered(
              this.$1,
              t,
            );
          }),
          (t.importedContactsSaveClicked = function (t, n) {
            o("WAWebBBContactImportLogs").importedContactsSaveClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.importedContactWizardCancelClicked = function (t) {
            o("WAWebBBContactImportLogs").importedContactWizardCancelClicked(
              this.$1,
              t,
            );
          }),
          (t.editContactViewed = function (t) {
            o("WAWebBBContactImportLogs").editContactViewed(this.$1, t);
          }),
          (t.contactNameEntered = function (t) {
            o("WAWebBBContactImportLogs").contactNameEntered(this.$1, t);
          }),
          (t.phoneNumberEntered = function (t) {
            o("WAWebBBContactImportLogs").phoneNumberEntered(this.$1, t);
          }),
          (t.editContactConfirmClicked = function (t) {
            o("WAWebBBContactImportLogs").editContactConfirmClicked(this.$1, t);
          }),
          (t.editContactCancelClicked = function (t) {
            o("WAWebBBContactImportLogs").editContactCancelClicked(this.$1, t);
          }),
          (t.contactImportSuccessViewed = function (t, n) {
            o("WAWebBBContactImportLogs").contactImportSuccessViewed(
              this.$1,
              t,
              n,
            );
          }),
          (t.contactImportSuccessCancelClicked = function (t) {
            o("WAWebBBContactImportLogs").contactImportSuccessCancelClicked(
              this.$1,
              t,
            );
          }),
          (t.confirmDeleteAllErrorContactViewed = function (t) {
            o("WAWebBBContactImportLogs").confirmDeleteAllErrorContactViewed(
              this.$1,
              t,
            );
          }),
          (t.deleteAllErrorContactsConfirmClicked = function (t) {
            o("WAWebBBContactImportLogs").deleteAllErrorContactsConfirmClicked(
              this.$1,
              t,
            );
          }),
          (t.deleteAllErrorContactsCancelClicked = function (t) {
            o("WAWebBBContactImportLogs").deleteAllErrorContactsCancelClicked(
              this.$1,
              t,
            );
          }),
          (t.reviewFileErrorsPromptViewed = function (t, n) {
            o("WAWebBBContactImportLogs").reviewFileErrorsPromptViewed(
              this.$1,
              t,
              n,
            );
          }),
          (t.reviewFileErrorsPromptTemplateSaveClicked = function (t, n) {
            o(
              "WAWebBBContactImportLogs",
            ).reviewFileErrorsPromptTemplateSaveClicked(this.$1, t, n);
          }),
          (t.reviewFileErrorsPromptCancelClicked = function (t, n) {
            o("WAWebBBContactImportLogs").reviewFileErrorsPromptCancelClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.reviewFileErrorsPromptContinueClicked = function (t, n) {
            o("WAWebBBContactImportLogs").reviewFileErrorsPromptContinueClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.saveImportedContactViewed = function (t, n) {
            o("WAWebBBContactImportLogs").saveImportedContactViewed(
              this.$1,
              t,
              n,
            );
          }),
          (t.saveImportedContactClosed = function (t, n) {
            o("WAWebBBContactImportLogs").saveImportedContactClosed(
              this.$1,
              t,
              n,
            );
          }),
          (t.importAudienceSuccess = function (t, n, r) {
            o("WAWebBBContactImportLogs").importAudienceSuccess(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.importAudienceError = function (t, n) {
            o("WAWebBBContactImportLogs").importAudienceError(this.$1, t, n);
          }),
          (t.audienceInfoButtonClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").audienceInfoButtonClicked(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.starMessageButtonClicked = function (t, n, r, a) {
            o("WAWebBBInfoDrawerLogs").starMessageButtonClicked(
              this.$1,
              t,
              n,
              r,
              a,
            );
          }),
          (t.broadcastInfoDrawerOpened = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").broadcastInfoDrawerOpened(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.broadcastInfoDrawerViewed = function (t, n) {
            o("WAWebBBInfoDrawerLogs").broadcastInfoDrawerViewed(this.$1, t, n);
          }),
          (t.performanceExplainedClicked = function (t) {
            o("WAWebBBInfoDrawerLogs").performanceExplainedClicked(this.$1, t);
          }),
          (t.refreshInsightsClicked = function (t) {
            o("WAWebBBInfoDrawerLogs").refreshInsightsClicked(this.$1, t);
          }),
          (t.detailsPanelCloseClicked = function (t) {
            o("WAWebBBInfoDrawerLogs").detailsPanelCloseClicked(this.$1, t);
          }),
          (t.createBroadcastButtonClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").createBroadcastButtonClicked(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.newBroadcastButtonClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").newBroadcastButtonClicked(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.newBroadcastTileClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").newBroadcastTileClicked(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.openBroadcastThreadClicked = function (t, n) {
            o("WAWebBBInfoDrawerLogs").openBroadcastThreadClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.audienceInfoDrawerViewed = function (t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerViewed(this.$1, t, n);
          }),
          (t.audienceInfoDrawerCloseClicked = function (t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerCloseClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.audienceInfoDrawerEditRecipientsClicked = function (t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerEditRecipientsClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.audienceInfoDrawerDeleteClicked = function (t, n) {
            o("WAWebBBInfoDrawerLogs").audienceInfoDrawerDeleteClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.labelChatClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").labelChatClicked(this.$1, t, n, r);
          }),
          (t.labelChatSaved = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").labelChatSaved(this.$1, t, n, r);
          }),
          (t.deleteAudienceClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").deleteAudienceClicked(this.$1, t, n, r);
          }),
          (t.broadcastDeleteConfirmed = function (t, n) {
            o("WAWebBBInfoDrawerLogs").broadcastDeleteConfirmed(this.$1, t, n);
          }),
          (t.deleteBroadcastDialogViewed = function (t, n) {
            o("WAWebBBInfoDrawerLogs").deleteBroadcastDialogViewed(
              this.$1,
              t,
              n,
            );
          }),
          (t.deleteBroadcastCancelClicked = function (t, n) {
            o("WAWebBBInfoDrawerLogs").deleteBroadcastCancelClicked(
              this.$1,
              t,
              n,
            );
          }),
          (t.broadcastDeleteResult = function (t, n, r, a, i, l) {
            o("WAWebBBInfoDrawerLogs").broadcastDeleteResult(
              this.$1,
              t,
              n,
              r,
              a,
              i,
              l,
            );
          }),
          (t.renameBroadcastClicked = function (t) {
            o("WAWebBBInfoDrawerLogs").renameBroadcastClicked(this.$1, t);
          }),
          (t.renameBroadcastResult = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").renameBroadcastResult(this.$1, t, n, r);
          }),
          (t.renameAudienceClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").renameAudienceClicked(this.$1, t, n, r);
          }),
          (t.renameAudienceResult = function (t, n, r, a, i) {
            o("WAWebBBInfoDrawerLogs").renameAudienceResult(
              this.$1,
              t,
              n,
              r,
              a,
              i,
            );
          }),
          (t.undoRenameBroadcastClicked = function (t) {
            o("WAWebBBInfoDrawerLogs").undoRenameBroadcastClicked(this.$1, t);
          }),
          (t.undoRenameAudienceClicked = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").undoRenameAudienceClicked(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.broadcastPreviewClicked = function (t, n) {
            o("WAWebBBInfoDrawerLogs").broadcastPreviewClicked(this.$1, t, n);
          }),
          (t.deliveredToDrawerViewed = function (t, n) {
            o("WAWebBBInfoDrawerLogs").deliveredToDrawerViewed(this.$1, t, n);
          }),
          (t.deliveredToDrawerFetchFailed = function (t, n, r) {
            o("WAWebBBInfoDrawerLogs").deliveredToDrawerFetchFailed(
              this.$1,
              t,
              n,
              r,
            );
          }),
          (t.genAISuggestionsShown = function (t, n) {
            o("WAWebBBGenAILogs").genAISuggestionsShown(this.$1, t, n);
          }),
          (t.genAICardTapped = function (t, n) {
            o("WAWebBBGenAILogs").genAICardTapped(this.$1, t, n);
          }),
          (t.genAISuggestionUsed = function (t, n) {
            o("WAWebBBGenAILogs").genAISuggestionUsed(this.$1, t, n);
          }),
          (t.genAIRefreshTapped = function (t) {
            o("WAWebBBGenAILogs").genAIRefreshTapped(this.$1, t);
          }),
          (t.genAIErrorShown = function (t) {
            o("WAWebBBGenAILogs").genAIErrorShown(this.$1, t);
          }),
          (t.genAIErrorRetryTapped = function (t) {
            o("WAWebBBGenAILogs").genAIErrorRetryTapped(this.$1, t);
          }),
          (t.genAIDailyLimitHit = function (t) {
            o("WAWebBBGenAILogs").genAIDailyLimitHit(this.$1, t);
          }),
          (t.genAIModalClosed = function (t, n) {
            o("WAWebBBGenAILogs").genAIModalClosed(this.$1, t, n);
          }),
          (t.genAIAiTextUsed = function (t) {
            o("WAWebBBGenAILogs").genAIAiTextUsed(this.$1, t);
          }),
          (t.genAIAiTextCleared = function () {
            o("WAWebBBGenAILogs").genAIAiTextCleared(this.$1);
          }),
          (t.genAINuxModalViewed = function () {
            o("WAWebBBGenAILogs").genAINuxModalViewed(this.$1);
          }),
          (t.genAINuxAcceptClicked = function () {
            o("WAWebBBGenAILogs").genAINuxAcceptClicked(this.$1);
          }),
          (t.genAINuxDismissClicked = function () {
            o("WAWebBBGenAILogs").genAINuxDismissClicked(this.$1);
          }),
          (t.tosNuxViewed = function (t, n) {
            var e, r;
            o("WAWebBBNuxLogs").tosNuxViewed(
              this.$1,
              t,
              n != null
                ? {
                    is_soft_opt_in_accepted: n.isSoftOptInAccepted,
                    persisted_state:
                      (e = n.persistedState) != null ? e : "null",
                    sync_result: n.syncResult,
                    tos_manager_state:
                      (r = n.tosManagerState) != null ? r : "null",
                  }
                : void 0,
            );
          }),
          (t.tosNuxAcceptClicked = function (t) {
            o("WAWebBBNuxLogs").tosNuxAcceptClicked(this.$1, t);
          }),
          (t.tosNuxAcceptSuccess = function (t, n) {
            var e, r;
            o("WAWebBBNuxLogs").tosNuxAcceptSuccess(
              this.$1,
              t,
              n != null
                ? {
                    is_soft_opt_in_accepted: n.isSoftOptInAccepted,
                    persisted_state:
                      (e = n.persistedState) != null ? e : "null",
                    sync_result: n.syncResult,
                    tos_manager_state:
                      (r = n.tosManagerState) != null ? r : "null",
                  }
                : void 0,
            );
          }),
          (t.tosNuxAcceptFailed = function (t, n, r) {
            var e, a;
            o("WAWebBBNuxLogs").tosNuxAcceptFailed(
              this.$1,
              t,
              n,
              r != null
                ? {
                    is_soft_opt_in_accepted: r.isSoftOptInAccepted,
                    persisted_state:
                      (e = r.persistedState) != null ? e : "null",
                    sync_result: r.syncResult,
                    tos_manager_state:
                      (a = r.tosManagerState) != null ? a : "null",
                  }
                : void 0,
            );
          }),
          (t.tosNuxDismissClicked = function (t) {
            o("WAWebBBNuxLogs").tosNuxDismissClicked(this.$1, t);
          }),
          (t.tosNuxLinkClicked = function (t, n) {
            o("WAWebBBNuxLogs").tosNuxLinkClicked(this.$1, t, n);
          }),
          (t.paymentMethodChangeClicked = function (t) {
            o("WAWebBBPaymentLogs").paymentMethodChangeClicked(this.$1, t);
          }),
          (t.paymentRequiredActionClicked = function (t) {
            o("WAWebBBPaymentLogs").paymentRequiredActionClicked(this.$1, t);
          }),
          (t.billingWizardOpened = function (t, n) {
            o("WAWebBBPaymentLogs").billingWizardOpened(this.$1, t, n);
          }),
          (t.billingWizardCompleted = function (t, n) {
            o("WAWebBBPaymentLogs").billingWizardCompleted(this.$1, t, n);
          }),
          (t.addFundsWizardOpened = function (t) {
            o("WAWebBBPaymentLogs").addFundsWizardOpened(this.$1, t);
          }),
          (t.billingInfoFetchFailed = function (t) {
            o("WAWebBBPaymentLogs").billingInfoFetchFailed(this.$1, t);
          }),
          (t.emailOnboardingCheckFailed = function (t) {
            o("WAWebBBPaymentLogs").emailOnboardingCheckFailed(this.$1, t);
          }),
          (t.checkoutFetchFailed = function (t, n) {
            o("WAWebBBPaymentLogs").checkoutFetchFailed(this.$1, t, n);
          }),
          (t.billingSummaryFaqLinkClicked = function (t) {
            o("WAWebBBPaymentLogs").billingSummaryFaqLinkClicked(this.$1, t);
          }),
          (t.billingSummaryTosLinkClicked = function (t) {
            o("WAWebBBPaymentLogs").billingSummaryTosLinkClicked(this.$1, t);
          }),
          (t.billingSummaryPrivacyPolicyLinkClicked = function (t) {
            o("WAWebBBPaymentLogs").billingSummaryPrivacyPolicyLinkClicked(
              this.$1,
              t,
            );
          }),
          (t.paymentMethodSectionViewed = function (t, n) {
            o("WAWebBBPaymentLogs").paymentMethodSectionViewed(this.$1, t, n);
          }),
          (t.billingWizardFailed = function (t, n) {
            o("WAWebBBPaymentLogs").billingWizardFailed(this.$1, t, n);
          }),
          e
        );
      })(),
      s = new e();
    l.BusinessBroadcastUserJourneyLogger = s;
  },
  98,
);
