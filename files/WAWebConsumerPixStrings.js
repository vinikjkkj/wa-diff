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
        /*BTDS*/ "You can't edit or delete your Pix key because passkey is enabled on your primary device.",
      );
    }
    function h() {
      return s._(/*BTDS*/ "Edit your Pix key");
    }
    function y() {
      return s._(/*BTDS*/ "Pix key");
    }
    function C() {
      return s._(/*BTDS*/ "Add your Pix key for fast and secure payments");
    }
    function b() {
      return s._(/*BTDS*/ "Add Pix key");
    }
    function v() {
      return s._(/*BTDS*/ "Your Pix key");
    }
    function S() {
      return s._(/*BTDS*/ "Pix area");
    }
    function R() {
      return s._(/*BTDS*/ "Couldn't open the chat. Please try again.");
    }
    function L() {
      return s._(/*BTDS*/ "My contacts");
    }
    function E() {
      return s._(
        /*BTDS*/ "This feature is only available to contacts in Brazil.",
      );
    }
    function k(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function I() {
      return s._(/*BTDS*/ "Request payment");
    }
    function T(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function D() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function x() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function $(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function P(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function N() {
      return s._(/*BTDS*/ "View in chat");
    }
    function M() {
      return s._(/*BTDS*/ "Done");
    }
    function w() {
      return s._(/*BTDS*/ "Share your Pix");
    }
    function A() {
      return s._(/*BTDS*/ "Delete Pix key");
    }
    function F() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function O() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function B() {
      return s._(/*BTDS*/ "Delete");
    }
    function W() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function q() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function U(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
      );
    }
    function V() {
      return s._(/*BTDS*/ "Transactions");
    }
    function H() {
      return s._(/*BTDS*/ "See all");
    }
    function G() {
      return s._(/*BTDS*/ "Completed");
    }
    function z() {
      return s._(/*BTDS*/ "Pending");
    }
    function j() {
      return s._(/*BTDS*/ "Failed");
    }
    function K() {
      return s._(/*BTDS*/ "You requested");
    }
    function Q() {
      return s._(/*BTDS*/ "They requested");
    }
    function X() {
      return s._(/*BTDS*/ "No transactions yet");
    }
    function Y() {
      return s._(/*BTDS*/ "All");
    }
    function J() {
      return s._(/*BTDS*/ "You requested");
    }
    function Z() {
      return s._(/*BTDS*/ "Others requested");
    }
    function ee() {
      return s._(/*BTDS*/ "From");
    }
    function te() {
      return s._(/*BTDS*/ "To");
    }
    ((l.getConsumerPixKeyTypeOptions = e),
      (l.getConsumerAddPixKeyTitle = u),
      (l.getConsumerAddPixKeySubtitle = c),
      (l.getConsumerPixVisibilityEveryone = d),
      (l.getConsumerPixVisibilityMyContacts = m),
      (l.getConsumerPixVisibilityMyContactsExcept = p),
      (l.getConsumerPixVisibilityNobody = _),
      (l.getConsumerPixVisibilityLabel = f),
      (l.getConsumerPixPasskeyBlockedToast = g),
      (l.getConsumerPixEditKeyAriaLabel = h),
      (l.getConsumerPixKeyLabel = y),
      (l.getConsumerPaymentsHomeEmptyStateTitle = C),
      (l.getConsumerPaymentsHomeAddPixKeyButton = b),
      (l.getConsumerPaymentsHomePixKeyHeader = v),
      (l.getConsumerPixAreaHeader = S),
      (l.getConsumerSharePixChatErrorToast = R),
      (l.getConsumerSharePixContactPickerTitle = L),
      (l.getConsumerSharePixBrazilOnlyBanner = E),
      (l.getConsumerSendPixDescription = k),
      (l.getSendPixRequestPaymentTitle = I),
      (l.getSmbSendPixDescription = T),
      (l.getConsumerSendPixGroupTitle = D),
      (l.getConsumerSendPixGroupDescription = x),
      (l.getConsumerSharePixSentTitle = $),
      (l.getConsumerSharePixSentBody = P),
      (l.getConsumerSharePixViewInChat = N),
      (l.getConsumerSharePixDone = M),
      (l.getConsumerSharePixRowLabel = w),
      (l.getConsumerPixDeleteKeyButton = A),
      (l.getConsumerPixDeleteKeyConfirmTitle = F),
      (l.getConsumerPixDeleteKeyConfirmBody = O),
      (l.getConsumerPixDeleteKeyConfirmCta = B),
      (l.getConsumerPixDeleteKeyDeletedToast = W),
      (l.getConsumerPixDeleteKeyErrorToast = q),
      (l.getConsumerPixContactsExcludedCount = U),
      (l.getConsumerTransactionsHeader = V),
      (l.getConsumerTransactionsSeeAll = H),
      (l.getConsumerTransactionStatusCompleted = G),
      (l.getConsumerTransactionStatusPending = z),
      (l.getConsumerTransactionStatusFailed = j),
      (l.getConsumerTransactionStatusRequestedByYou = K),
      (l.getConsumerTransactionStatusRequestedByThem = Q),
      (l.getConsumerTransactionsEmpty = X),
      (l.getConsumerTransactionsTabAll = Y),
      (l.getConsumerTransactionsTabYouRequested = J),
      (l.getConsumerTransactionsTabTheyRequested = Z),
      (l.getConsumerTransactionsDateFrom = ee),
      (l.getConsumerTransactionsDateTo = te));
  },
  226,
);
