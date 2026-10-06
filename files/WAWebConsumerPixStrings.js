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
      return s._(
        /*BTDS*/ "This feature is only available to contacts in Brazil.",
      );
    }
    function h(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function y() {
      return s._(/*BTDS*/ "Request payment");
    }
    function C(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function b() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function v() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function S(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function R(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function L() {
      return s._(/*BTDS*/ "View in chat");
    }
    function E() {
      return s._(/*BTDS*/ "Done");
    }
    function k() {
      return s._(/*BTDS*/ "Share your Pix");
    }
    function I() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function T() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function D() {
      return s._(/*BTDS*/ "Delete");
    }
    function x() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function $() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function P(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
      );
    }
    function N() {
      return s._(/*BTDS*/ "Transactions");
    }
    function M() {
      return s._(/*BTDS*/ "See all");
    }
    function w() {
      return s._(/*BTDS*/ "Completed");
    }
    function A() {
      return s._(/*BTDS*/ "Pending");
    }
    function F() {
      return s._(/*BTDS*/ "Failed");
    }
    function O() {
      return s._(/*BTDS*/ "You requested");
    }
    function B() {
      return s._(/*BTDS*/ "They requested");
    }
    function W() {
      return s._(/*BTDS*/ "No transactions yet");
    }
    function q() {
      return s._(/*BTDS*/ "All");
    }
    function U() {
      return s._(/*BTDS*/ "You requested");
    }
    function V() {
      return s._(/*BTDS*/ "Others requested");
    }
    function H() {
      return s._(/*BTDS*/ "From");
    }
    function G() {
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
      (l.getConsumerSharePixBrazilOnlyBanner = g),
      (l.getConsumerSendPixDescription = h),
      (l.getSendPixRequestPaymentTitle = y),
      (l.getSmbSendPixDescription = C),
      (l.getConsumerSendPixGroupTitle = b),
      (l.getConsumerSendPixGroupDescription = v),
      (l.getConsumerSharePixSentTitle = S),
      (l.getConsumerSharePixSentBody = R),
      (l.getConsumerSharePixViewInChat = L),
      (l.getConsumerSharePixDone = E),
      (l.getConsumerSharePixRowLabel = k),
      (l.getConsumerPixDeleteKeyConfirmTitle = I),
      (l.getConsumerPixDeleteKeyConfirmBody = T),
      (l.getConsumerPixDeleteKeyConfirmCta = D),
      (l.getConsumerPixDeleteKeyDeletedToast = x),
      (l.getConsumerPixDeleteKeyErrorToast = $),
      (l.getConsumerPixContactsExcludedCount = P),
      (l.getConsumerTransactionsHeader = N),
      (l.getConsumerTransactionsSeeAll = M),
      (l.getConsumerTransactionStatusCompleted = w),
      (l.getConsumerTransactionStatusPending = A),
      (l.getConsumerTransactionStatusFailed = F),
      (l.getConsumerTransactionStatusRequestedByYou = O),
      (l.getConsumerTransactionStatusRequestedByThem = B),
      (l.getConsumerTransactionsEmpty = W),
      (l.getConsumerTransactionsTabAll = q),
      (l.getConsumerTransactionsTabYouRequested = U),
      (l.getConsumerTransactionsTabTheyRequested = V),
      (l.getConsumerTransactionsDateFrom = H),
      (l.getConsumerTransactionsDateTo = G));
  },
  226,
);
