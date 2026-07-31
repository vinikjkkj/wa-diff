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
      return s._(/*BTDS*/ "Transactions");
    }
    function P() {
      return s._(/*BTDS*/ "See all");
    }
    function N() {
      return s._(/*BTDS*/ "Completed");
    }
    function M() {
      return s._(/*BTDS*/ "Pending");
    }
    function w() {
      return s._(/*BTDS*/ "Failed");
    }
    function A() {
      return s._(/*BTDS*/ "You requested");
    }
    function F() {
      return s._(/*BTDS*/ "They requested");
    }
    function O() {
      return s._(/*BTDS*/ "No transactions yet");
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
      (l.getConsumerTransactionsHeader = $),
      (l.getConsumerTransactionsSeeAll = P),
      (l.getConsumerTransactionStatusCompleted = N),
      (l.getConsumerTransactionStatusPending = M),
      (l.getConsumerTransactionStatusFailed = w),
      (l.getConsumerTransactionStatusRequestedByYou = A),
      (l.getConsumerTransactionStatusRequestedByThem = F),
      (l.getConsumerTransactionsEmpty = O));
  },
  226,
);
