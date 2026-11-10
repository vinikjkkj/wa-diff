__d(
  "WAWebPaymentDetailsStrings",
  ["fbt", "WAWebPaymentDetailsModels"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Payment details");
    }
    function u(e) {
      return e ===
        o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED
        ? s._(/*BTDS*/ "Not confirmed")
        : e ===
            o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID
          ? s._(/*BTDS*/ "Marked as paid")
          : e ===
              o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_PAID_YET
            ? s._(/*BTDS*/ "Not paid yet")
            : e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.PENDING
              ? s._(/*BTDS*/ "Pending")
              : e ===
                  o("WAWebPaymentDetailsModels").PaymentDetailsStatus
                    .PAYMENT_SENT
                ? s._(/*BTDS*/ "Payment sent")
                : e ===
                    o("WAWebPaymentDetailsModels").PaymentDetailsStatus.FAILED
                  ? s._(/*BTDS*/ "Failed")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function c() {
      return s._(/*BTDS*/ "Requested by you");
    }
    function d(e) {
      return s._(/*BTDS*/ "Requested by {merchant_name}", [
        s._param("merchant_name", e),
      ]);
    }
    function m() {
      return s._(
        /*BTDS*/ "Payment in a third-party app can only be confirmed by the receiver.",
      );
    }
    function p(e) {
      return s._(/*BTDS*/ "You marked this as paid on {date_time}.", [
        s._param("date_time", e),
      ]);
    }
    function _(e, t) {
      return s._(/*BTDS*/ "{name} marked this as paid on {date_time}.", [
        s._param("name", e),
        s._param("date_time", t),
      ]);
    }
    function f(e) {
      return s._(/*BTDS*/ "This was sent to you on {date_time}.", [
        s._param("date_time", e),
      ]);
    }
    function g(e, t) {
      return s._(/*BTDS*/ "This was sent to {name} on {date_time}.", [
        s._param("name", e),
        s._param("date_time", t),
      ]);
    }
    function h(e) {
      return s._(/*BTDS*/ "The payment didn't go through on {date_time}.", [
        s._param("date_time", e),
      ]);
    }
    function y() {
      return s._(/*BTDS*/ "Copy code");
    }
    function C() {
      return s._(/*BTDS*/ "Mark as paid");
    }
    function b() {
      return s._(/*BTDS*/ "Mark this as paid?");
    }
    function v(e) {
      return s._(
        /*BTDS*/ "Make sure the money is in your bank account. {name} will see that you marked this as paid.",
        [s._param("name", e)],
      );
    }
    function S() {
      return s._(/*BTDS*/ "Add receipt");
    }
    function R() {
      return s._(/*BTDS*/ "Add receipt (optional)");
    }
    function L(e) {
      return s._(
        /*BTDS*/ "Share proof with {name}. This doesn't confirm payment.",
        [s._param("name", e)],
      );
    }
    function E(e) {
      return s._(/*BTDS*/ "Adding a receipt will notify {name} in chat.", [
        s._param("name", e),
      ]);
    }
    function k() {
      return s._(/*BTDS*/ "Take photo");
    }
    function I() {
      return s._(/*BTDS*/ "Choose photo");
    }
    function T() {
      return s._(/*BTDS*/ "Couldn't add the receipt. Try again.");
    }
    function D() {
      return s._(/*BTDS*/ "Couldn't mark this as paid. Try again.");
    }
    function x() {
      return s._(/*BTDS*/ "Couldn't remove the receipt. Try again.");
    }
    function $() {
      return s._(/*BTDS*/ "Share");
    }
    function P() {
      return s._(/*BTDS*/ "Couldn't share the payment details. Try again.");
    }
    function N() {
      return s._(/*BTDS*/ "Couldn't download the payment details. Try again.");
    }
    function M() {
      return s._(/*BTDS*/ "Payment receipt");
    }
    function w() {
      return s._(/*BTDS*/ "Couldn't load this receipt. Try again.");
    }
    function A(e) {
      return s._(/*BTDS*/ "Added by you on {date}", [s._param("date", e)]);
    }
    function F(e, t) {
      return s._(/*BTDS*/ "Added by {name} on {date}", [
        s._param("name", e),
        s._param("date", t),
      ]);
    }
    function O() {
      return s._(/*BTDS*/ "Only you can confirm payment.");
    }
    function B(e) {
      return s._(/*BTDS*/ "Only {name} can confirm payment.", [
        s._param("name", e),
      ]);
    }
    function W() {
      return s._(/*BTDS*/ "Delete this receipt?");
    }
    function q() {
      return s._(
        /*BTDS*/ "This removes it from these payment details for both of you. You can add another one.",
      );
    }
    function U() {
      return s._(/*BTDS*/ "Delete");
    }
    function V() {
      return s._(/*BTDS*/ "Delete receipt");
    }
    function H() {
      return s._(/*BTDS*/ "Sent from");
    }
    function G() {
      return s._(/*BTDS*/ "Paid to");
    }
    function z() {
      return s._(/*BTDS*/ "You");
    }
    function j() {
      return s._(/*BTDS*/ "Recipient details");
    }
    function K() {
      return s._(/*BTDS*/ "Payment information");
    }
    function Q() {
      return s._(/*BTDS*/ "Sent using");
    }
    function X() {
      return s._(/*BTDS*/ "Transaction ID");
    }
    function Y() {
      return s._(/*BTDS*/ "Recipient");
    }
    function J() {
      return s._(/*BTDS*/ "Pix key");
    }
    function Z(e) {
      return s._(/*BTDS*/ "{name} added a receipt.", [s._param("name", e)]);
    }
    function ee() {
      return s._(/*BTDS*/ "View details");
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
