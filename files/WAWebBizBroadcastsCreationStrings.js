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
      return s._(/*BTDS*/ "Import audience");
    }
    function C() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function b() {
      return s._(/*BTDS*/ "Select who you want to reach with your broadcast.");
    }
    function v() {
      return s._(/*BTDS*/ "Selected audiences");
    }
    function S(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} recipients","_1":"1 recipient"}', [
        s._plural(e, "number"),
      ]);
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
      return s._(/*BTDS*/ "Edit media");
    }
    function N() {
      return s._(/*BTDS*/ "Remove media");
    }
    function M() {
      return s._(/*BTDS*/ "Catalog");
    }
    function w() {
      return s._(/*BTDS*/ "Preview");
    }
    function A() {
      return s._(/*BTDS*/ "Your message will display here.");
    }
    function F(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} pages","_1":"1 page"}', [
        s._plural(e, "number"),
      ]);
    }
    function O() {
      return s._(/*BTDS*/ "Details");
    }
    function B() {
      return s._(/*BTDS*/ "Summary");
    }
    function W() {
      return s._(/*BTDS*/ "Total recipients");
    }
    function q() {
      return s._(/*BTDS*/ "Estimated cost");
    }
    function U() {
      return s._(/*BTDS*/ "Estimated tax");
    }
    function V() {
      return s._(/*BTDS*/ "Estimated total");
    }
    function H() {
      return s._(/*BTDS*/ "Credits used");
    }
    function G() {
      return s._(/*BTDS*/ "Available credits");
    }
    function z() {
      return s._(/*BTDS*/ "Existing audiences");
    }
    function j(e) {
      return s._(/*BTDS*/ "{count} recipients", [s._param("count", e)]);
    }
    function K() {
      return s._(/*BTDS*/ "Save");
    }
    function Q() {
      return s._(/*BTDS*/ "Audience info");
    }
    function X() {
      return s._(/*BTDS*/ "Continue without saving?");
    }
    function Y() {
      return s._(/*BTDS*/ "Your progress will be lost.");
    }
    function J() {
      return s._(/*BTDS*/ "Continue");
    }
    function Z() {
      return s._(/*BTDS*/ "Payment pending");
    }
    function ee() {
      return s._(/*BTDS*/ "Choose audience");
    }
    function te() {
      return s._(/*BTDS*/ "Message can't be empty");
    }
    function ne(e) {
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
          ? ee()
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
                    ? Z()
                    : c
                      ? te()
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
      (l.getAttachmentSectionTitle = D),
      (l.getAttachmentSectionSubtitle = x),
      (l.getOptionalLabel = $),
      (l.getEditMediaAriaLabel = P),
      (l.getRemoveMediaAriaLabel = N),
      (l.getDefaultCatalogLabel = M),
      (l.getPreviewSectionTitle = w),
      (l.getPreviewMessagePlaceholder = A),
      (l.getDocumentPreviewPagesCount = F),
      (l.getDetailsSectionTitle = O),
      (l.getBillingSummarySectionTitle = B),
      (l.getTotalRecipientsLabel = W),
      (l.getEstimatedCostLabel = q),
      (l.getEstimatedTaxLabel = U),
      (l.getEstimatedTotalLabel = V),
      (l.getCreditsUsedLabel = H),
      (l.getAvailableCreditsLabel = G),
      (l.getExistingAudiencesDialogTitle = z),
      (l.getExistingAudienceRecipientsLabel = j),
      (l.getExistingAudiencesSaveButtonLabel = K),
      (l.getBroadcastAudienceInfoLabel = Q),
      (l.getExitConfirmationTitle = X),
      (l.getExitConfirmationBody = Y),
      (l.getExitConfirmationContinueButton = J),
      (l.getPaymentPendingDisabledReason = Z),
      (l.getChooseAudienceDisabledReason = ee),
      (l.getMessageEmptyDisabledReason = te),
      (l.getSendNowButtonDisabledReason = ne));
  },
  226,
);
