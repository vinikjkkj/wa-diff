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
    function f() {
      return s._(
        /*BTDS*/ "This feature is only available to contacts in Brazil.",
      );
    }
    function g(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function h() {
      return s._(/*BTDS*/ "Request payment");
    }
    function y(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function C() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function b() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function v(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function S(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function R() {
      return s._(/*BTDS*/ "View in chat");
    }
    function L() {
      return s._(/*BTDS*/ "Done");
    }
    function E() {
      return s._(/*BTDS*/ "Share your Pix");
    }
    function k() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function I() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function T() {
      return s._(/*BTDS*/ "Delete");
    }
    function D() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function x() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function $(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
      );
    }
    function P() {
      return s._(/*BTDS*/ "Transactions");
    }
    function N() {
      return s._(/*BTDS*/ "See all");
    }
    function M() {
      return s._(/*BTDS*/ "Completed");
    }
    function w() {
      return s._(/*BTDS*/ "Pending");
    }
    function A() {
      return s._(/*BTDS*/ "Failed");
    }
    function F() {
      return s._(/*BTDS*/ "You requested");
    }
    function O() {
      return s._(/*BTDS*/ "They requested");
    }
    function B() {
      return s._(/*BTDS*/ "No transactions yet");
    }
    function W() {
      return s._(/*BTDS*/ "All");
    }
    function q() {
      return s._(/*BTDS*/ "You requested");
    }
    function U() {
      return s._(/*BTDS*/ "Others requested");
    }
    function V() {
      return s._(/*BTDS*/ "From");
    }
    function H() {
      return s._(/*BTDS*/ "To");
    }
    ((l.getConsumerPixKeyTypeOptions = e),
      (l.getConsumerAddPixKeySubtitle = u),
      (l.getConsumerPixVisibilityEveryone = c),
      (l.getConsumerPixVisibilityMyContacts = d),
      (l.getConsumerPixVisibilityMyContactsExcept = m),
      (l.getConsumerPixVisibilityNobody = p),
      (l.getConsumerPixVisibilityLabel = _),
      (l.getConsumerSharePixBrazilOnlyBanner = f),
      (l.getConsumerSendPixDescription = g),
      (l.getSendPixRequestPaymentTitle = h),
      (l.getSmbSendPixDescription = y),
      (l.getConsumerSendPixGroupTitle = C),
      (l.getConsumerSendPixGroupDescription = b),
      (l.getConsumerSharePixSentTitle = v),
      (l.getConsumerSharePixSentBody = S),
      (l.getConsumerSharePixViewInChat = R),
      (l.getConsumerSharePixDone = L),
      (l.getConsumerSharePixRowLabel = E),
      (l.getConsumerPixDeleteKeyConfirmTitle = k),
      (l.getConsumerPixDeleteKeyConfirmBody = I),
      (l.getConsumerPixDeleteKeyConfirmCta = T),
      (l.getConsumerPixDeleteKeyDeletedToast = D),
      (l.getConsumerPixDeleteKeyErrorToast = x),
      (l.getConsumerPixContactsExcludedCount = $),
      (l.getConsumerTransactionsHeader = P),
      (l.getConsumerTransactionsSeeAll = N),
      (l.getConsumerTransactionStatusCompleted = M),
      (l.getConsumerTransactionStatusPending = w),
      (l.getConsumerTransactionStatusFailed = A),
      (l.getConsumerTransactionStatusRequestedByYou = F),
      (l.getConsumerTransactionStatusRequestedByThem = O),
      (l.getConsumerTransactionsEmpty = B),
      (l.getConsumerTransactionsTabAll = W),
      (l.getConsumerTransactionsTabYouRequested = q),
      (l.getConsumerTransactionsTabTheyRequested = U),
      (l.getConsumerTransactionsDateFrom = V),
      (l.getConsumerTransactionsDateTo = H));
  },
  226,
);
