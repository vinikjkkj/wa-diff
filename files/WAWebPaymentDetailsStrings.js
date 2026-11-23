__d(
  "WAWebPaymentDetailsStrings",
  ["fbt", "WAWebPaymentDetailsModels"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u(e) {
      return e ===
        o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED
        ? s._(/*BTDS*/ "")
        : e ===
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID
          ? s._(/*BTDS*/ "")
          : e ===
              o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_PAID_YET
            ? s._(/*BTDS*/ "")
            : e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PENDING
              ? s._(/*BTDS*/ "")
              : e ===
                  o("WAWebPaymentDetailsModels").PaymentDetailsStatus
                    .PAYMENT_SENT
                ? s._(/*BTDS*/ "")
                : e ===
                    o("WAWebPaymentDetailsModels").PaymentDetailsStatus.FAILED
                  ? s._(/*BTDS*/ "")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d(e) {
      return s._(/*BTDS*/ "", [s._param("merchant_name", e)]);
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p(e) {
      return s._(/*BTDS*/ "", [s._param("date_time", e)]);
    }
    function _(e, t) {
      return s._(/*BTDS*/ "", [s._param("name", e), s._param("date_time", t)]);
    }
    function f(e) {
      return s._(/*BTDS*/ "", [s._param("date_time", e)]);
    }
    function g(e, t) {
      return s._(/*BTDS*/ "", [s._param("name", e), s._param("date_time", t)]);
    }
    function h(e) {
      return s._(/*BTDS*/ "", [s._param("date_time", e)]);
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
    function v(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
    }
    function S() {
      return s._(/*BTDS*/ "");
    }
    function R() {
      return s._(/*BTDS*/ "");
    }
    function L(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
    }
    function E(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
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
    function A(e) {
      return s._(/*BTDS*/ "", [s._param("date", e)]);
    }
    function F(e, t) {
      return s._(/*BTDS*/ "", [s._param("name", e), s._param("date", t)]);
    }
    function O() {
      return s._(/*BTDS*/ "");
    }
    function B(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
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
    function j() {
      return s._(/*BTDS*/ "");
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
    function Z(e) {
      return s._(/*BTDS*/ "", [s._param("name", e)]);
    }
    function ee() {
      return s._(/*BTDS*/ "");
    }
    ((l.getPaymentDetailsTitle = e),
      (l.getPaymentStatusLabel = u),
      (l.getRequestedByYouHeader = c),
      (l.getRequestedByHeader = d),
      (l.getNotConfirmedExplainer = m),
      (l.getMarkedAsPaidByYouExplainer = p),
      (l.getMarkedAsPaidByExplainer = _),
      (l.getPaymentSentToYouExplainer = f),
      (l.getPaymentSentToNameExplainer = g),
      (l.getPaymentFailedExplainer = h),
      (l.getCopyCodeLabel = y),
      (l.getMarkAsPaidLabel = C),
      (l.getMarkAsPaidDialogTitle = b),
      (l.getMarkAsPaidDialogBody = v),
      (l.getAddReceiptLabel = S),
      (l.getAddReceiptSectionTitle = R),
      (l.getAddReceiptSectionBody = L),
      (l.getAddReceiptSheetBody = E),
      (l.getTakePhotoLabel = k),
      (l.getChoosePhotoLabel = I),
      (l.getAddReceiptFailedToast = T),
      (l.getMarkAsPaidFailedToast = D),
      (l.getDeleteReceiptFailedToast = x),
      (l.getShareLabel = $),
      (l.getSharePaymentDetailsFailedToast = P),
      (l.getDownloadPaymentDetailsFailedToast = N),
      (l.getReceiptTitle = M),
      (l.getReceiptLoadFailedText = w),
      (l.getReceiptAddedByYou = A),
      (l.getReceiptAddedBy = F),
      (l.getOnlyYouCanConfirm = O),
      (l.getOnlyNameCanConfirm = B),
      (l.getDeleteReceiptDialogTitle = W),
      (l.getDeleteReceiptDialogBody = q),
      (l.getDeleteReceiptLabel = U),
      (l.getDeleteReceiptA11yLabel = V),
      (l.getSentFromLabel = H),
      (l.getPaidToLabel = G),
      (l.getYouLabel = z),
      (l.getRecipientDetailsTitle = j),
      (l.getPaymentInformationTitle = K),
      (l.getSentUsingLabel = Q),
      (l.getTransactionIdLabel = X),
      (l.getRecipientLabel = Y),
      (l.getPixKeyLabel = J),
      (l.getReceiptAddedNotice = Z),
      (l.getViewDetailsLabel = ee));
  },
  226,
);
