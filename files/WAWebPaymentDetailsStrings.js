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
      return s._(/*BTDS*/ "Requested by {name}", [s._param("name", e)]);
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
    function f() {
      return s._(/*BTDS*/ "Mark as paid");
    }
    function g() {
      return s._(/*BTDS*/ "Mark this as paid?");
    }
    function h(e) {
      return s._(
        /*BTDS*/ "Make sure the money is in your bank account. {name} will see that you marked this as paid.",
        [s._param("name", e)],
      );
    }
    function y() {
      return s._(/*BTDS*/ "Add receipt");
    }
    function C() {
      return s._(/*BTDS*/ "Add receipt (optional)");
    }
    function b(e) {
      return s._(
        /*BTDS*/ "Share proof with {name}. This doesn't confirm payment.",
        [s._param("name", e)],
      );
    }
    function v(e) {
      return s._(/*BTDS*/ "Adding a receipt will notify {name} in chat.", [
        s._param("name", e),
      ]);
    }
    function S() {
      return s._(/*BTDS*/ "Take photo");
    }
    function R() {
      return s._(/*BTDS*/ "Choose photo");
    }
    function L() {
      return s._(/*BTDS*/ "Couldn't add the receipt. Try again.");
    }
    function E() {
      return s._(/*BTDS*/ "Couldn't mark this as paid. Try again.");
    }
    function k() {
      return s._(/*BTDS*/ "Couldn't remove the receipt. Try again.");
    }
    function I() {
      return s._(/*BTDS*/ "Payment receipt");
    }
    function T() {
      return s._(/*BTDS*/ "Couldn't load this receipt. Try again.");
    }
    function D(e) {
      return s._(/*BTDS*/ "Added by you on {date}", [s._param("date", e)]);
    }
    function x(e, t) {
      return s._(/*BTDS*/ "Added by {name} on {date}", [
        s._param("name", e),
        s._param("date", t),
      ]);
    }
    function $() {
      return s._(/*BTDS*/ "Only you can confirm payment.");
    }
    function P(e) {
      return s._(/*BTDS*/ "Only {name} can confirm payment.", [
        s._param("name", e),
      ]);
    }
    function N() {
      return s._(/*BTDS*/ "Delete this receipt?");
    }
    function M() {
      return s._(
        /*BTDS*/ "This removes it from these payment details for both of you. You can add another one.",
      );
    }
    function w() {
      return s._(/*BTDS*/ "Delete");
    }
    function A() {
      return s._(/*BTDS*/ "Delete receipt");
    }
    function F() {
      return s._(/*BTDS*/ "Sent from");
    }
    function O() {
      return s._(/*BTDS*/ "Paid to");
    }
    function B() {
      return s._(/*BTDS*/ "You");
    }
    function W() {
      return s._(/*BTDS*/ "Recipient details");
    }
    function q() {
      return s._(/*BTDS*/ "Recipient");
    }
    function U() {
      return s._(/*BTDS*/ "Pix key");
    }
    function V(e) {
      return s._(/*BTDS*/ "{name} added a receipt.", [s._param("name", e)]);
    }
    function H() {
      return s._(/*BTDS*/ "A receipt was added.");
    }
    function G() {
      return s._(/*BTDS*/ "View details");
    }
    ((l.getPaymentDetailsTitle = e),
      (l.getPaymentStatusLabel = u),
      (l.getRequestedByYouHeader = c),
      (l.getRequestedByHeader = d),
      (l.getNotConfirmedExplainer = m),
      (l.getMarkedAsPaidByYouExplainer = p),
      (l.getMarkedAsPaidByExplainer = _),
      (l.getMarkAsPaidLabel = f),
      (l.getMarkAsPaidDialogTitle = g),
      (l.getMarkAsPaidDialogBody = h),
      (l.getAddReceiptLabel = y),
      (l.getAddReceiptSectionTitle = C),
      (l.getAddReceiptSectionBody = b),
      (l.getAddReceiptSheetBody = v),
      (l.getTakePhotoLabel = S),
      (l.getChoosePhotoLabel = R),
      (l.getAddReceiptFailedToast = L),
      (l.getMarkAsPaidFailedToast = E),
      (l.getDeleteReceiptFailedToast = k),
      (l.getReceiptTitle = I),
      (l.getReceiptLoadFailedText = T),
      (l.getReceiptAddedByYou = D),
      (l.getReceiptAddedBy = x),
      (l.getOnlyYouCanConfirm = $),
      (l.getOnlyNameCanConfirm = P),
      (l.getDeleteReceiptDialogTitle = N),
      (l.getDeleteReceiptDialogBody = M),
      (l.getDeleteReceiptLabel = w),
      (l.getDeleteReceiptA11yLabel = A),
      (l.getSentFromLabel = F),
      (l.getPaidToLabel = O),
      (l.getYouLabel = B),
      (l.getRecipientDetailsTitle = W),
      (l.getRecipientLabel = q),
      (l.getPixKeyLabel = U),
      (l.getReceiptAddedNotice = V),
      (l.getPlainReceiptAddedNotice = H),
      (l.getViewDetailsLabel = G));
  },
  226,
);
