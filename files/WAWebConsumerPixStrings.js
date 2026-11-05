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
        /*BTDS*/ "You can control who sees your Pix key and enable passkey for added security.",
      );
    }
    function c() {
      return s._(/*BTDS*/ "Everyone");
    }
    function d() {
      return s._(/*BTDS*/ "My contacts");
    }
    function m() {
      return s._(/*BTDS*/ "My contacts except...");
    }
    function p() {
      return s._(/*BTDS*/ "Nobody");
    }
    function _() {
      return s._(/*BTDS*/ "Who can see my Pix key");
    }
    function f(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function g() {
      return s._(/*BTDS*/ "Request payment");
    }
    function h(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function y() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function C() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function b(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function v(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function S() {
      return s._(/*BTDS*/ "View in chat");
    }
    function R() {
      return s._(/*BTDS*/ "Done");
    }
    function L() {
      return s._(/*BTDS*/ "Share your Pix");
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
    function B() {
      return s._(/*BTDS*/ "All");
    }
    function W() {
      return s._(/*BTDS*/ "You requested");
    }
    function q() {
      return s._(/*BTDS*/ "Others requested");
    }
    function U() {
      return s._(/*BTDS*/ "From");
    }
    function V() {
      return s._(/*BTDS*/ "To");
    }
    ((l.getConsumerPixKeyTypeOptions = e),
      (l.getConsumerAddPixKeySubtitle = u),
      (l.getConsumerPixVisibilityEveryone = c),
      (l.getConsumerPixVisibilityMyContacts = d),
      (l.getConsumerPixVisibilityMyContactsExcept = m),
      (l.getConsumerPixVisibilityNobody = p),
      (l.getConsumerPixVisibilityLabel = _),
      (l.getConsumerSendPixDescription = f),
      (l.getSendPixRequestPaymentTitle = g),
      (l.getSmbSendPixDescription = h),
      (l.getConsumerSendPixGroupTitle = y),
      (l.getConsumerSendPixGroupDescription = C),
      (l.getConsumerSharePixSentTitle = b),
      (l.getConsumerSharePixSentBody = v),
      (l.getConsumerSharePixViewInChat = S),
      (l.getConsumerSharePixDone = R),
      (l.getConsumerSharePixRowLabel = L),
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
      (l.getConsumerTransactionsEmpty = O),
      (l.getConsumerTransactionsTabAll = B),
      (l.getConsumerTransactionsTabYouRequested = W),
      (l.getConsumerTransactionsTabTheyRequested = q),
      (l.getConsumerTransactionsDateFrom = U),
      (l.getConsumerTransactionsDateTo = V));
  },
  226,
);
