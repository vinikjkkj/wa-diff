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
    function v() {
      return s._(/*BTDS*/ "Selected audiences");
    }
    function S(e) {
      return s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function R(e) {
      return s._(
        /*BTDS*/ "{count} people are in multiple audiences, so they'll get this broadcast more than once.",
        [s._param("count", e)],
      );
    }
    function L() {
      return s._(/*BTDS*/ "Imported");
    }
    function E() {
      return s._(/*BTDS*/ "Audience imported");
    }
    function k() {
      return s._(/*BTDS*/ "Audience created");
    }
    function I() {
      return s._(/*BTDS*/ "Audience updated");
    }
    function T() {
      return s._(/*BTDS*/ "Message");
    }
    function D() {
      return s._(/*BTDS*/ "Message");
    }
    function x() {
      return s._(/*BTDS*/ "Attachment");
    }
    function $() {
      return s._(
        /*BTDS*/ "Include an attachment to help your message stand out.",
      );
    }
    function P() {
      return s._(/*BTDS*/ "Optional");
    }
    function N() {
      return s._(/*BTDS*/ "Add attachment");
    }
    function M() {
      return s._(/*BTDS*/ "Edit media");
    }
    function w() {
      return s._(/*BTDS*/ "Remove media");
    }
    function A() {
      return s._(/*BTDS*/ "Camera");
    }
    function F() {
      return s._(/*BTDS*/ "Photos & videos");
    }
    function O() {
      return s._(/*BTDS*/ "Catalog");
    }
    function B() {
      return s._(/*BTDS*/ "Preview");
    }
    function W() {
      return s._(/*BTDS*/ "Your message will display here.");
    }
    function q(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
        s._plural(e, "number"),
      ]);
    }
    function U() {
      return s._(/*BTDS*/ "Details");
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
      return s._(/*BTDS*/ "Continue without saving?");
    }
    function ne() {
      return s._(/*BTDS*/ "Your progress will be lost.");
    }
    function re() {
      return s._(/*BTDS*/ "Continue");
    }
    function oe() {
      return s._(/*BTDS*/ "Payment pending");
    }
    function ae(e) {
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
                    ? oe()
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
      (l.getAudienceSectionTitle = p),
      (l.getChooseAudienceLabel = _),
      (l.getAddAudienceLabel = f),
      (l.getCreateAudienceLabel = g),
      (l.getNewAudienceLabel = h),
      (l.getImportAudienceLabel = y),
      (l.getExistingAudiencesLabel = C),
      (l.getAudienceSectionSubtitle = b),
      (l.getSelectedAudiencesAriaLabel = v),
      (l.getAudienceRecipientCountLabel = S),
      (l.getOverlappingRecipientsWarning = R),
      (l.getImportedLabel = L),
      (l.getAudienceImportedToastLabel = E),
      (l.getAudienceCreatedToastLabel = k),
      (l.getAudienceUpdatedToastLabel = I),
      (l.getMessageSectionTitle = T),
      (l.getMessageTextFieldLabel = D),
      (l.getAttachmentSectionTitle = x),
      (l.getAttachmentSectionSubtitle = $),
      (l.getOptionalLabel = P),
      (l.getAddAttachmentButtonLabel = N),
      (l.getEditMediaAriaLabel = M),
      (l.getRemoveMediaAriaLabel = w),
      (l.getAttachmentMenuCameraLabel = A),
      (l.getAttachmentMenuPhotosVideosLabel = F),
      (l.getDefaultCatalogLabel = O),
      (l.getPreviewSectionTitle = B),
      (l.getPreviewMessagePlaceholder = W),
      (l.getDocumentPreviewPagesCount = q),
      (l.getDetailsSectionTitle = U),
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
      (l.getExitConfirmationTitle = te),
      (l.getExitConfirmationBody = ne),
      (l.getExitConfirmationContinueButton = re),
      (l.getPaymentPendingDisabledReason = oe),
      (l.getSendNowButtonDisabledReason = ae));
  },
  226,
);
