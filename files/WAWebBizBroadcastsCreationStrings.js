__d(
  "WAWebBizBroadcastsCreationStrings",
  ["fbt", "WAWebBizBroadcastsRecipientUtils", "justknobx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      return s._(/*BTDS*/ "");
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m(e) {
      return e ? p() : s._(/*BTDS*/ "");
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    function _() {
      return s._(/*BTDS*/ "");
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y() {
      return s._(/*BTDS*/ "");
    }
    function C() {
      return s._(/*BTDS*/ "");
    }
    function b() {
      return s._(/*BTDS*/ "");
    }
    function v() {
      return s._(/*BTDS*/ "");
    }
    function S(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number")]);
    }
    function R(e) {
      return s._(/*BTDS*/ "", [s._param("count", e)]);
    }
    function L() {
      return s._(/*BTDS*/ "");
    }
    function E() {
      return s._(/*BTDS*/ "");
    }
    function k() {
      return s._(/*BTDS*/ "");
    }
    function I() {
      return s._(/*BTDS*/ "");
    }
    function T() {
      return s._(/*BTDS*/ "");
    }
    function D() {
      return s._(/*BTDS*/ "");
    }
    function x() {
      return s._(/*BTDS*/ "");
    }
    function $() {
      return s._(/*BTDS*/ "");
    }
    function P() {
      return s._(/*BTDS*/ "");
    }
    function N() {
      return s._(/*BTDS*/ "");
    }
    function M() {
      return s._(/*BTDS*/ "");
    }
    function w() {
      return s._(/*BTDS*/ "");
    }
    function A() {
      return s._(/*BTDS*/ "");
    }
    function F(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number")]);
    }
    function O() {
      return s._(/*BTDS*/ "");
    }
    function B() {
      return s._(/*BTDS*/ "");
    }
    function W() {
      return s._(/*BTDS*/ "");
    }
    function q() {
      return s._(/*BTDS*/ "");
    }
    function U() {
      return s._(/*BTDS*/ "");
    }
    function V() {
      return s._(/*BTDS*/ "");
    }
    function H() {
      return s._(/*BTDS*/ "");
    }
    function G() {
      return s._(/*BTDS*/ "");
    }
    function z() {
      return s._(/*BTDS*/ "");
    }
    function j(e) {
      return s._(/*BTDS*/ "", [s._param("count", e)]);
    }
    function K() {
      return s._(/*BTDS*/ "");
    }
    function Q() {
      return s._(/*BTDS*/ "");
    }
    function X() {
      return s._(/*BTDS*/ "");
    }
    function Y() {
      return s._(/*BTDS*/ "");
    }
    function J() {
      return s._(/*BTDS*/ "");
    }
    function Z() {
      return s._(/*BTDS*/ "");
    }
    function ee() {
      return s._(/*BTDS*/ "");
    }
    function te() {
      return s._(/*BTDS*/ "");
    }
    function ne(e) {
      var t = e.broadcastJidIsNull,
        n = e.checkoutFailed,
        a = e.contactsCount,
        i = e.hasPendingBillingAction,
        l = e.hasRequiredBusinessInfo,
        u = e.isCreatingCampaign,
        c = e.isLoadingBusinessInfo,
        d = e.isMessageEmpty,
        m = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
      return u
        ? null
        : t
          ? ee()
          : c
            ? s._(/*BTDS*/ "")
            : l
              ? a < 2
                ? r("justknobx")._("8068")
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ "")
                : a > m
                  ? s._(/*BTDS*/ "", [s._param("recipientLimit", m)])
                  : i
                    ? Z()
                    : d
                      ? te()
                      : n
                        ? r("justknobx")._("8427")
                          ? s._(/*BTDS*/ "")
                          : s._(/*BTDS*/ "")
                        : null
              : s._(/*BTDS*/ "");
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
