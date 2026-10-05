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
      return s._(/*BTDS*/ "Edit your Pix key");
    }
    function g() {
      return s._(/*BTDS*/ "Pix area");
    }
    function h() {
      return s._(
        /*BTDS*/ "This feature is only available to contacts in Brazil.",
      );
    }
    function y(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function C() {
      return s._(/*BTDS*/ "Request payment");
    }
    function b(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function v() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function S() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function R(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function L(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function E() {
      return s._(/*BTDS*/ "View in chat");
    }
    function k() {
      return s._(/*BTDS*/ "Done");
    }
    function I() {
      return s._(/*BTDS*/ "Share your Pix");
    }
    function T() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function D() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function x() {
      return s._(/*BTDS*/ "Delete");
    }
    function $() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function P() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function N(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
      );
    }
    function M() {
      return s._(/*BTDS*/ "Transactions");
    }
    function w() {
      return s._(/*BTDS*/ "See all");
    }
    function A() {
      return s._(/*BTDS*/ "Completed");
    }
    function F() {
      return s._(/*BTDS*/ "Pending");
    }
    function O() {
      return s._(/*BTDS*/ "Failed");
    }
    function B() {
      return s._(/*BTDS*/ "You requested");
    }
    function W() {
      return s._(/*BTDS*/ "They requested");
    }
    function q() {
      return s._(/*BTDS*/ "No transactions yet");
    }
    function U() {
      return s._(/*BTDS*/ "All");
    }
    function V() {
      return s._(/*BTDS*/ "You requested");
    }
    function H() {
      return s._(/*BTDS*/ "Others requested");
    }
    function G() {
      return s._(/*BTDS*/ "From");
    }
    function z() {
      return s._(/*BTDS*/ "To");
    }
    ((l.getConsumerPixKeyTypeOptions = e),
      (l.getConsumerAddPixKeySubtitle = u),
      (l.getConsumerPixVisibilityEveryone = c),
      (l.getConsumerPixVisibilityMyContacts = d),
      (l.getConsumerPixVisibilityMyContactsExcept = m),
      (l.getConsumerPixVisibilityNobody = p),
      (l.getConsumerPixVisibilityLabel = _),
      (l.getConsumerPixEditKeyAriaLabel = f),
      (l.getConsumerPixAreaHeader = g),
      (l.getConsumerSharePixBrazilOnlyBanner = h),
      (l.getConsumerSendPixDescription = y),
      (l.getSendPixRequestPaymentTitle = C),
      (l.getSmbSendPixDescription = b),
      (l.getConsumerSendPixGroupTitle = v),
      (l.getConsumerSendPixGroupDescription = S),
      (l.getConsumerSharePixSentTitle = R),
      (l.getConsumerSharePixSentBody = L),
      (l.getConsumerSharePixViewInChat = E),
      (l.getConsumerSharePixDone = k),
      (l.getConsumerSharePixRowLabel = I),
      (l.getConsumerPixDeleteKeyConfirmTitle = T),
      (l.getConsumerPixDeleteKeyConfirmBody = D),
      (l.getConsumerPixDeleteKeyConfirmCta = x),
      (l.getConsumerPixDeleteKeyDeletedToast = $),
      (l.getConsumerPixDeleteKeyErrorToast = P),
      (l.getConsumerPixContactsExcludedCount = N),
      (l.getConsumerTransactionsHeader = M),
      (l.getConsumerTransactionsSeeAll = w),
      (l.getConsumerTransactionStatusCompleted = A),
      (l.getConsumerTransactionStatusPending = F),
      (l.getConsumerTransactionStatusFailed = O),
      (l.getConsumerTransactionStatusRequestedByYou = B),
      (l.getConsumerTransactionStatusRequestedByThem = W),
      (l.getConsumerTransactionsEmpty = q),
      (l.getConsumerTransactionsTabAll = U),
      (l.getConsumerTransactionsTabYouRequested = V),
      (l.getConsumerTransactionsTabTheyRequested = H),
      (l.getConsumerTransactionsDateFrom = G),
      (l.getConsumerTransactionsDateTo = z));
  },
  226,
);
