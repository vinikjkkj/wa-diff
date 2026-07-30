__d(
  "WAWebConsumerPixStrings",
  ["fbt", "WAWebUserPrefsTypes"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      var e;
      return [
        {
          keyType: (e = o("WAWebUserPrefsTypes")).PixKeyType.PHONE,
          label: s._(/*BTDS*/ "Phone number"),
        },
        { keyType: e.PixKeyType.CPF, label: s._(/*BTDS*/ "CPF") },
        { keyType: e.PixKeyType.EMAIL, label: s._(/*BTDS*/ "Email") },
        { keyType: e.PixKeyType.EVP, label: s._(/*BTDS*/ "Random key") },
      ];
    }
    function u() {
      return s._(
        /*BTDS*/ "Add your Pix key so it can be easily copied and shared.",
      );
    }
    function c() {
      return s._(
        /*BTDS*/ "You can control who sees your Pix key and enable passkey for added security.",
      );
    }
    function d() {
      return s._(/*BTDS*/ "Everyone");
    }
    function m() {
      return s._(/*BTDS*/ "My contacts");
    }
    function p() {
      return s._(/*BTDS*/ "My contacts except...");
    }
    function _() {
      return s._(/*BTDS*/ "Nobody");
    }
    function f() {
      return s._(/*BTDS*/ "Who can see my Pix key");
    }
    function g() {
      return s._(
        /*BTDS*/ "Couldn't update privacy settings. Please try again.",
      );
    }
    function h() {
      return s._(
        /*BTDS*/ "You can't edit or delete your Pix key because passkey is enabled on your primary device.",
      );
    }
    function y() {
      return s._(/*BTDS*/ "Edit your Pix key");
    }
    function C() {
      return s._(/*BTDS*/ "Pix key");
    }
    function b() {
      return s._(/*BTDS*/ "Add your Pix key for fast and secure payments");
    }
    function v() {
      return s._(/*BTDS*/ "Add Pix key");
    }
    function S() {
      return s._(/*BTDS*/ "Your Pix key");
    }
    function R(e) {
      return s._(
        /*BTDS*/ "Your Pix key and name will be securely stored and encrypted. {learn-more-link}",
        [s._param("learn-more-link", e)],
      );
    }
    function L() {
      return s._(/*BTDS*/ "Delete Pix key");
    }
    function E() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function k() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function I() {
      return s._(/*BTDS*/ "Delete");
    }
    function T() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function D() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function x(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
      );
    }
    function $() {
      return s._(/*BTDS*/ "Settings");
    }
    function P() {
      return s._(/*BTDS*/ "Delete payment information");
    }
    function N() {
      return s._(/*BTDS*/ "Delete payment information?");
    }
    function M() {
      return s._(
        /*BTDS*/ "Deleting your payment information will cancel any transactions in progress and delete all your payment data. You can set up payments again the next time you want to send or receive money.",
      );
    }
    function w() {
      return s._(/*BTDS*/ "Delete");
    }
    function A() {
      return s._(/*BTDS*/ "Payment information deleted");
    }
    function F() {
      return s._(
        /*BTDS*/ "Your Pix key and payment details have been removed.",
      );
    }
    function O() {
      return s._(/*BTDS*/ "Done");
    }
    function B() {
      return s._(
        /*BTDS*/ "You can't delete your payment information because passkey is enabled on your primary device.",
      );
    }
    function W() {
      return s._(/*BTDS*/ "Transactions");
    }
    function q() {
      return s._(/*BTDS*/ "See all");
    }
    function U() {
      return s._(/*BTDS*/ "Completed");
    }
    function V() {
      return s._(/*BTDS*/ "Pending");
    }
    function H() {
      return s._(/*BTDS*/ "Failed");
    }
    function G() {
      return s._(/*BTDS*/ "You requested");
    }
    function z() {
      return s._(/*BTDS*/ "They requested");
    }
    ((l.getConsumerPixKeyTypeOptions = e),
      (l.getConsumerAddPixKeyTitle = u),
      (l.getConsumerAddPixKeySubtitle = c),
      (l.getConsumerPixVisibilityEveryone = d),
      (l.getConsumerPixVisibilityMyContacts = m),
      (l.getConsumerPixVisibilityMyContactsExcept = p),
      (l.getConsumerPixVisibilityNobody = _),
      (l.getConsumerPixVisibilityLabel = f),
      (l.getConsumerPixVisibilityUpdateError = g),
      (l.getConsumerPixPasskeyBlockedToast = h),
      (l.getConsumerPixEditKeyAriaLabel = y),
      (l.getConsumerPixKeyLabel = C),
      (l.getConsumerPaymentsHomeEmptyStateTitle = b),
      (l.getConsumerPaymentsHomeAddPixKeyButton = v),
      (l.getConsumerPaymentsHomePixKeyHeader = S),
      (l.getConsumerPixEncryptedFooter = R),
      (l.getConsumerPixDeleteKeyButton = L),
      (l.getConsumerPixDeleteKeyConfirmTitle = E),
      (l.getConsumerPixDeleteKeyConfirmBody = k),
      (l.getConsumerPixDeleteKeyConfirmCta = I),
      (l.getConsumerPixDeleteKeyDeletedToast = T),
      (l.getConsumerPixDeleteKeyErrorToast = D),
      (l.getConsumerPixContactsExcludedCount = x),
      (l.getConsumerPaymentsHomeSettingsHeader = $),
      (l.getConsumerDeletePaymentInfoRowLabel = P),
      (l.getConsumerDeletePaymentInfoConfirmTitle = N),
      (l.getConsumerDeletePaymentInfoConfirmBody = M),
      (l.getConsumerDeletePaymentInfoConfirmCta = w),
      (l.getConsumerDeletePaymentInfoSuccessTitle = A),
      (l.getConsumerDeletePaymentInfoSuccessBody = F),
      (l.getConsumerDeletePaymentInfoDoneCta = O),
      (l.getConsumerDeletePaymentInfoPasskeyBlockedToast = B),
      (l.getConsumerTransactionsHeader = W),
      (l.getConsumerTransactionsSeeAll = q),
      (l.getConsumerTransactionStatusCompleted = U),
      (l.getConsumerTransactionStatusPending = V),
      (l.getConsumerTransactionStatusFailed = H),
      (l.getConsumerTransactionStatusRequestedByYou = G),
      (l.getConsumerTransactionStatusRequestedByThem = z));
  },
  226,
);
