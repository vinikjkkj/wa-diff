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
      return e ? p() : s._(/*BTDS*/ "Send now");
    }
    function p() {
      return s._(/*BTDS*/ "Sending...");
    }
    function _() {
      return s._(/*BTDS*/ "Audience");
    }
    function f() {
      return s._(/*BTDS*/ "Choose audience");
    }
    function g() {
      return s._(/*BTDS*/ "Add audience");
    }
    function h() {
      return s._(/*BTDS*/ "Create audience");
    }
    function y() {
      return s._(/*BTDS*/ "New audience");
    }
    function C() {
      return s._(/*BTDS*/ "Import audience");
    }
    function b() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function v() {
      return s._(/*BTDS*/ "Select who you want to reach with your broadcast.");
    }
    function S() {
      return s._(/*BTDS*/ "Selected audiences");
    }
    function R(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} recipients","_1":"1 recipient"}', [
        s._plural(e, "number"),
      ]);
    }
    function L(e) {
      return s._(
        /*BTDS*/ "{count} people are in multiple audiences, so they'll get this broadcast more than once.",
        [s._param("count", e)],
      );
    }
    function E() {
      return s._(/*BTDS*/ "Imported");
    }
    function k() {
      return s._(/*BTDS*/ "Audience imported");
    }
    function I() {
      return s._(/*BTDS*/ "Audience created");
    }
    function T() {
      return s._(/*BTDS*/ "Audience updated");
    }
    function D() {
      return s._(/*BTDS*/ "Message");
    }
    function x() {
      return s._(/*BTDS*/ "Message");
    }
    function $() {
      return s._(/*BTDS*/ "Attachment");
    }
    function P() {
      return s._(
        /*BTDS*/ "Include an attachment to help your message stand out.",
      );
    }
    function N() {
      return s._(/*BTDS*/ "Optional");
    }
    function M() {
      return s._(/*BTDS*/ "Add attachment");
    }
    function w() {
      return s._(/*BTDS*/ "Edit media");
    }
    function A() {
      return s._(/*BTDS*/ "Remove media");
    }
    function F() {
      return s._(/*BTDS*/ "Camera");
    }
    function O() {
      return s._(/*BTDS*/ "Photos & videos");
    }
    function B() {
      return s._(/*BTDS*/ "Catalog");
    }
    function W() {
      return s._(/*BTDS*/ "Preview");
    }
    function q() {
      return s._(/*BTDS*/ "Your message will display here.");
    }
    function U(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
        s._plural(e, "number"),
      ]);
    }
    function V() {
      return s._(/*BTDS*/ "Details");
    }
    function H() {
      return s._(/*BTDS*/ "Summary");
    }
    function G() {
      return s._(/*BTDS*/ "Total recipients");
    }
    function z() {
      return s._(/*BTDS*/ "Estimated cost");
    }
    function j() {
      return s._(/*BTDS*/ "Estimated tax");
    }
    function K() {
      return s._(/*BTDS*/ "Estimated total");
    }
    function Q() {
      return s._(/*BTDS*/ "Credits used");
    }
    function X() {
      return s._(/*BTDS*/ "Available credits");
    }
    function Y() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function J(e) {
      return s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function Z() {
      return s._(/*BTDS*/ "Save");
    }
    function ee() {
      return s._(/*BTDS*/ "Remove");
    }
    function te() {
      return s._(/*BTDS*/ "Audience info");
    }
    function ne() {
      return s._(/*BTDS*/ "Continue without saving?");
    }
    function re() {
      return s._(/*BTDS*/ "Your progress will be lost.");
    }
    function oe() {
      return s._(/*BTDS*/ "Continue");
    }
    function ae() {
      return s._(/*BTDS*/ "Payment pending");
    }
    function ie(e) {
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
                    ? ae()
                    : c
                      ? s._(/*BTDS*/ "Message can't be empty")
                      : n
                        ? s._(
                            /*BTDS*/ "Something went wrong. Please try again later.",
                          )
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
      (l.getSendingBroadcastButtonLabel = p),
      (l.getAudienceSectionTitle = _),
      (l.getChooseAudienceLabel = f),
      (l.getAddAudienceLabel = g),
      (l.getCreateAudienceLabel = h),
      (l.getNewAudienceLabel = y),
      (l.getImportAudienceLabel = C),
      (l.getExistingAudiencesLabel = b),
      (l.getAudienceSectionSubtitle = v),
      (l.getSelectedAudiencesAriaLabel = S),
      (l.getAudienceRecipientCountLabel = R),
      (l.getOverlappingRecipientsWarning = L),
      (l.getImportedLabel = E),
      (l.getAudienceImportedToastLabel = k),
      (l.getAudienceCreatedToastLabel = I),
      (l.getAudienceUpdatedToastLabel = T),
      (l.getMessageSectionTitle = D),
      (l.getMessageTextFieldLabel = x),
      (l.getAttachmentSectionTitle = $),
      (l.getAttachmentSectionSubtitle = P),
      (l.getOptionalLabel = N),
      (l.getAddAttachmentButtonLabel = M),
      (l.getEditMediaAriaLabel = w),
      (l.getRemoveMediaAriaLabel = A),
      (l.getAttachmentMenuCameraLabel = F),
      (l.getAttachmentMenuPhotosVideosLabel = O),
      (l.getDefaultCatalogLabel = B),
      (l.getPreviewSectionTitle = W),
      (l.getPreviewMessagePlaceholder = q),
      (l.getDocumentPreviewPagesCount = U),
      (l.getDetailsSectionTitle = V),
      (l.getBillingSummarySectionTitle = H),
      (l.getTotalRecipientsLabel = G),
      (l.getEstimatedCostLabel = z),
      (l.getEstimatedTaxLabel = j),
      (l.getEstimatedTotalLabel = K),
      (l.getCreditsUsedLabel = Q),
      (l.getAvailableCreditsLabel = X),
      (l.getExistingAudiencesDialogTitle = Y),
      (l.getExistingAudienceRecipientsLabel = J),
      (l.getExistingAudiencesSaveButtonLabel = Z),
      (l.getDocumentPreviewRemoveDocumentLabel = ee),
      (l.getBroadcastAudienceInfoLabel = te),
      (l.getExitConfirmationTitle = ne),
      (l.getExitConfirmationBody = re),
      (l.getExitConfirmationContinueButton = oe),
      (l.getPaymentPendingDisabledReason = ae),
      (l.getSendNowButtonDisabledReason = ie));
  },
  226,
);
