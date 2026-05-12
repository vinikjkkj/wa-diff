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
    function d() {
      return s._(/*BTDS*/ "Duplicate broadcast");
    }
    function m(e) {
      return e ? s._(/*BTDS*/ "Sending...") : s._(/*BTDS*/ "Send now");
    }
    function p() {
      return s._(/*BTDS*/ "Audience");
    }
    function _() {
      return s._(/*BTDS*/ "Choose audience");
    }
    function f() {
      return s._(/*BTDS*/ "Add audience");
    }
    function g() {
      return s._(/*BTDS*/ "Create audience");
    }
    function h() {
      return s._(/*BTDS*/ "New audience");
    }
    function y() {
      return s._(/*BTDS*/ "Import audience");
    }
    function C() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function b() {
      return s._(/*BTDS*/ "Select who you want to reach with your audience");
    }
    function v(e) {
      return s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function S(e) {
      return s._(
        /*BTDS*/ "{count} people are in multiple audiences, so they'll get this broadcast more than once.",
        [s._param("count", e)],
      );
    }
    function R() {
      return s._(/*BTDS*/ "Imported");
    }
    function L() {
      return s._(/*BTDS*/ "Audience imported");
    }
    function E() {
      return s._(/*BTDS*/ "Audience created");
    }
    function k() {
      return s._(/*BTDS*/ "Audience updated");
    }
    function I() {
      return s._(/*BTDS*/ "Message");
    }
    function T() {
      return s._(/*BTDS*/ "Message");
    }
    function D() {
      return s._(/*BTDS*/ "Attachment");
    }
    function x() {
      return s._(
        /*BTDS*/ "Include an attachment to help your message stand out.",
      );
    }
    function $() {
      return s._(/*BTDS*/ "Optional");
    }
    function P() {
      return s._(/*BTDS*/ "Add attachment");
    }
    function N() {
      return s._(/*BTDS*/ "Edit media");
    }
    function M() {
      return s._(/*BTDS*/ "Remove media");
    }
    function w() {
      return s._(/*BTDS*/ "Camera");
    }
    function A() {
      return s._(/*BTDS*/ "Photos & videos");
    }
    function F() {
      return s._(/*BTDS*/ "Catalog");
    }
    function O() {
      return s._(/*BTDS*/ "Preview");
    }
    function B() {
      return s._(/*BTDS*/ "Your message will display here.");
    }
    function W(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
        s._plural(e, "number"),
      ]);
    }
    function q() {
      return s._(/*BTDS*/ "Details");
    }
    function U() {
      return s._(/*BTDS*/ "Payment method");
    }
    function V() {
      return s._(/*BTDS*/ "Summary");
    }
    function H() {
      return s._(/*BTDS*/ "Total recipients");
    }
    function G() {
      return s._(/*BTDS*/ "Estimated cost");
    }
    function z() {
      return s._(/*BTDS*/ "Estimated tax");
    }
    function j() {
      return s._(/*BTDS*/ "Estimated total");
    }
    function K() {
      return s._(/*BTDS*/ "Credits used");
    }
    function Q() {
      return s._(/*BTDS*/ "Available credits");
    }
    function X() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function Y(e) {
      return s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function J() {
      return s._(/*BTDS*/ "Save");
    }
    function Z() {
      return s._(/*BTDS*/ "Remove");
    }
    function ee() {
      return s._(/*BTDS*/ "Audience info");
    }
    function te() {
      return s._(/*BTDS*/ "Delete audience");
    }
    function ne() {
      return s._(/*BTDS*/ "Broadcast details");
    }
    function re() {
      return s._(/*BTDS*/ "Star");
    }
    function oe() {
      return s._(/*BTDS*/ "Unstar");
    }
    function ae() {
      return s._(/*BTDS*/ "Continue without saving?");
    }
    function ie() {
      return s._(/*BTDS*/ "Your progress will be lost.");
    }
    function le() {
      return s._(/*BTDS*/ "Continue");
    }
    function se(e) {
      var t = e.broadcastJidIsNull,
        n = e.checkoutFailed,
        r = e.contactsCount,
        a = e.hasPendingBillingAction,
        i = e.hasRequiredBusinessInfo,
        l = e.isCreatingCampaign,
        u = e.isLoadingBusinessInfo,
        c = e.isMessageEmpty,
        d = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
      return l
        ? null
        : t
          ? s._(/*BTDS*/ "Choose audience")
          : u
            ? s._(/*BTDS*/ "Loading...")
            : i
              ? r < 2
                ? s._(
                    /*BTDS*/ "You need to add at least two recipients to send a message.",
                  )
                : r > d
                  ? s._(
                      /*BTDS*/ "Broadcast to a maximum of {recipientLimit} people at a time.",
                      [s._param("recipientLimit", d)],
                    )
                  : a
                    ? s._(/*BTDS*/ "Payment pending")
                    : c
                      ? s._(/*BTDS*/ "Message can't be empty")
                      : n
                        ? s._(/*BTDS*/ "Something went wrong")
                        : null
              : s._(
                  /*BTDS*/ "Account data missing. Check your payment details and try again.",
                );
    }
    ((l.getNewBroadcastButtonLabel = e),
      (l.getNewBroadcastDrawerTitle = u),
      (l.getCreateBroadcastDrawerTitle = c),
      (l.getDuplicateBroadcastDrawerTitle = d),
      (l.getSendNowButtonLabel = m),
      (l.getAudienceSectionTitle = p),
      (l.getChooseAudienceLabel = _),
      (l.getAddAudienceLabel = f),
      (l.getCreateAudienceLabel = g),
      (l.getNewAudienceLabel = h),
      (l.getImportAudienceLabel = y),
      (l.getExistingAudiencesLabel = C),
      (l.getAudienceSectionSubtitle = b),
      (l.getAudienceRecipientCountLabel = v),
      (l.getOverlappingRecipientsWarning = S),
      (l.getImportedLabel = R),
      (l.getAudienceImportedToastLabel = L),
      (l.getAudienceCreatedToastLabel = E),
      (l.getAudienceUpdatedToastLabel = k),
      (l.getMessageSectionTitle = I),
      (l.getMessageTextFieldLabel = T),
      (l.getAttachmentSectionTitle = D),
      (l.getAttachmentSectionSubtitle = x),
      (l.getOptionalLabel = $),
      (l.getAddAttachmentButtonLabel = P),
      (l.getEditMediaAriaLabel = N),
      (l.getRemoveMediaAriaLabel = M),
      (l.getAttachmentMenuCameraLabel = w),
      (l.getAttachmentMenuPhotosVideosLabel = A),
      (l.getDefaultCatalogLabel = F),
      (l.getPreviewSectionTitle = O),
      (l.getPreviewMessagePlaceholder = B),
      (l.getDocumentPreviewPagesCount = W),
      (l.getDetailsSectionTitle = q),
      (l.getPaymentMethodLabel = U),
      (l.getBillingSummarySectionTitle = V),
      (l.getTotalRecipientsLabel = H),
      (l.getEstimatedCostLabel = G),
      (l.getEstimatedTaxLabel = z),
      (l.getEstimatedTotalLabel = j),
      (l.getCreditsUsedLabel = K),
      (l.getAvailableCreditsLabel = Q),
      (l.getExistingAudiencesDialogTitle = X),
      (l.getExistingAudienceRecipientsLabel = Y),
      (l.getExistingAudiencesSaveButtonLabel = J),
      (l.getDocumentPreviewRemoveDocumentLabel = Z),
      (l.getBroadcastAudienceInfoLabel = ee),
      (l.getDeleteBroadcastAudienceLabel = te),
      (l.getBroadcastDetailsLabel = ne),
      (l.getBroadcastStarLabel = re),
      (l.getBroadcastUnstarLabel = oe),
      (l.getExitConfirmationTitle = ae),
      (l.getExitConfirmationBody = ie),
      (l.getExitConfirmationContinueButton = le),
      (l.getSendNowButtonDisabledReason = se));
  },
  226,
);
