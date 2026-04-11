__d(
  "WAWebBizBroadcastsCreationStrings",
  ["fbt", "WAWebBizBroadcastsRecipientUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "New broadcast");
    }
    function u() {
      return s._(/*BTDS*/ "New broadcast");
    }
    function c() {
      return s._(/*BTDS*/ "Create broadcast");
    }
    function d(e) {
      return e ? s._(/*BTDS*/ "Sending...") : s._(/*BTDS*/ "Send now");
    }
    function m() {
      return s._(/*BTDS*/ "Audience");
    }
    function p() {
      return s._(/*BTDS*/ "Choose audience");
    }
    function _() {
      return s._(/*BTDS*/ "Add audience");
    }
    function f() {
      return s._(/*BTDS*/ "Create audience");
    }
    function g() {
      return s._(/*BTDS*/ "New audience");
    }
    function h() {
      return s._(/*BTDS*/ "Import audience");
    }
    function y() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function C() {
      return s._(/*BTDS*/ "Select who you want to reach with your audience");
    }
    function b(e) {
      return s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function v(e) {
      return s._(
        /*BTDS*/ "{count} people are in multiple audiences, so they'll get this broadcast more than once.",
        [s._param("count", e)],
      );
    }
    function S() {
      return s._(/*BTDS*/ "Imported");
    }
    function R() {
      return s._(/*BTDS*/ "Audience imported");
    }
    function L() {
      return s._(/*BTDS*/ "Audience created");
    }
    function E() {
      return s._(/*BTDS*/ "Audience updated");
    }
    function k() {
      return s._(/*BTDS*/ "Message");
    }
    function I() {
      return s._(/*BTDS*/ "Message");
    }
    function T() {
      return s._(/*BTDS*/ "Attachment");
    }
    function D() {
      return s._(
        /*BTDS*/ "Include an attachment to help your message stand out.",
      );
    }
    function x() {
      return s._(/*BTDS*/ "Optional");
    }
    function $() {
      return s._(/*BTDS*/ "Add attachment");
    }
    function P() {
      return s._(/*BTDS*/ "Edit media");
    }
    function N() {
      return s._(/*BTDS*/ "Remove media");
    }
    function M() {
      return s._(/*BTDS*/ "Camera");
    }
    function w() {
      return s._(/*BTDS*/ "Photos & videos");
    }
    function A() {
      return s._(/*BTDS*/ "Preview");
    }
    function F() {
      return s._(/*BTDS*/ "Your message will display here.");
    }
    function O(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
        s._plural(e, "number"),
      ]);
    }
    function B() {
      return s._(/*BTDS*/ "Details");
    }
    function W() {
      return s._(/*BTDS*/ "Payment method");
    }
    function q() {
      return s._(/*BTDS*/ "Summary");
    }
    function U() {
      return s._(/*BTDS*/ "Total recipients");
    }
    function V() {
      return s._(/*BTDS*/ "Estimated cost");
    }
    function H() {
      return s._(/*BTDS*/ "Estimated tax");
    }
    function G() {
      return s._(/*BTDS*/ "Estimated total");
    }
    function z() {
      return s._(/*BTDS*/ "Credits used");
    }
    function j() {
      return s._(/*BTDS*/ "Available credits");
    }
    function K() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function Q(e) {
      return s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function X() {
      return s._(/*BTDS*/ "Save");
    }
    function Y() {
      return s._(/*BTDS*/ "Remove");
    }
    function J() {
      return s._(/*BTDS*/ "Audience info");
    }
    function Z() {
      return s._(/*BTDS*/ "Delete audience");
    }
    function ee() {
      return s._(/*BTDS*/ "Broadcast details");
    }
    function te() {
      return s._(/*BTDS*/ "Star");
    }
    function ne() {
      return s._(/*BTDS*/ "Unstar");
    }
    function re() {
      return s._(/*BTDS*/ "Continue without saving?");
    }
    function oe() {
      return s._(/*BTDS*/ "Your progress will be lost.");
    }
    function ae() {
      return s._(/*BTDS*/ "Continue");
    }
    function ie(e) {
      var t = e.broadcastJidIsNull,
        n = e.contactsCount,
        r = e.hasPendingBillingAction,
        a = e.hasRequiredBusinessInfo,
        i = e.isCreatingCampaign,
        l = e.isLoadingBusinessInfo,
        u = e.isMessageEmpty,
        c = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
      return i
        ? null
        : t
          ? s._(/*BTDS*/ "Choose audience")
          : l
            ? s._(/*BTDS*/ "Loading...")
            : a
              ? n < 2
                ? s._(
                    /*BTDS*/ "You need to add at least two recipients to send a message.",
                  )
                : n > c
                  ? s._(
                      /*BTDS*/ "Broadcast to a maximum of {recipientLimit} people at a time.",
                      [s._param("recipientLimit", c)],
                    )
                  : r
                    ? s._(/*BTDS*/ "Payment pending")
                    : u
                      ? s._(/*BTDS*/ "Message can't be empty")
                      : null
              : s._(
                  /*BTDS*/ "Account data missing. Check your payment details and try again.",
                );
    }
    ((l.getNewBroadcastButtonLabel = e),
      (l.getNewBroadcastDrawerTitle = u),
      (l.getCreateBroadcastDrawerTitle = c),
      (l.getSendNowButtonLabel = d),
      (l.getAudienceSectionTitle = m),
      (l.getChooseAudienceLabel = p),
      (l.getAddAudienceLabel = _),
      (l.getCreateAudienceLabel = f),
      (l.getNewAudienceLabel = g),
      (l.getImportAudienceLabel = h),
      (l.getExistingAudiencesLabel = y),
      (l.getAudienceSectionSubtitle = C),
      (l.getAudienceRecipientCountLabel = b),
      (l.getOverlappingRecipientsWarning = v),
      (l.getImportedLabel = S),
      (l.getAudienceImportedToastLabel = R),
      (l.getAudienceCreatedToastLabel = L),
      (l.getAudienceUpdatedToastLabel = E),
      (l.getMessageSectionTitle = k),
      (l.getMessageTextFieldLabel = I),
      (l.getAttachmentSectionTitle = T),
      (l.getAttachmentSectionSubtitle = D),
      (l.getOptionalLabel = x),
      (l.getAddAttachmentButtonLabel = $),
      (l.getEditMediaAriaLabel = P),
      (l.getRemoveMediaAriaLabel = N),
      (l.getAttachmentMenuCameraLabel = M),
      (l.getAttachmentMenuPhotosVideosLabel = w),
      (l.getPreviewSectionTitle = A),
      (l.getPreviewMessagePlaceholder = F),
      (l.getDocumentPreviewPagesCount = O),
      (l.getDetailsSectionTitle = B),
      (l.getPaymentMethodLabel = W),
      (l.getBillingSummarySectionTitle = q),
      (l.getTotalRecipientsLabel = U),
      (l.getEstimatedCostLabel = V),
      (l.getEstimatedTaxLabel = H),
      (l.getEstimatedTotalLabel = G),
      (l.getCreditsUsedLabel = z),
      (l.getAvailableCreditsLabel = j),
      (l.getExistingAudiencesDialogTitle = K),
      (l.getExistingAudienceRecipientsLabel = Q),
      (l.getExistingAudiencesSaveButtonLabel = X),
      (l.getDocumentPreviewRemoveDocumentLabel = Y),
      (l.getBroadcastAudienceInfoLabel = J),
      (l.getDeleteBroadcastAudienceLabel = Z),
      (l.getBroadcastDetailsLabel = ee),
      (l.getBroadcastStarLabel = te),
      (l.getBroadcastUnstarLabel = ne),
      (l.getExitConfirmationTitle = re),
      (l.getExitConfirmationBody = oe),
      (l.getExitConfirmationContinueButton = ae),
      (l.getSendNowButtonDisabledReason = ie));
  },
  226,
);
