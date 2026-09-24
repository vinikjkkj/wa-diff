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
      return s._(/*BTDS*/ "Pix area");
    }
    function S() {
      return s._(/*BTDS*/ "Couldn't open the chat. Please try again.");
    }
    function R() {
      return s._(/*BTDS*/ "My contacts");
    }
    function L() {
      return s._(
        /*BTDS*/ "This feature is only available to contacts in Brazil.",
      );
    }
    function E(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function k() {
      return s._(/*BTDS*/ "Request payment");
    }
    function I(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function T() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function D() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function x(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function $(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function P() {
      return s._(/*BTDS*/ "View in chat");
    }
    function N() {
      return s._(/*BTDS*/ "Done");
    }
    function M() {
      return s._(/*BTDS*/ "Share your Pix");
    }
    function w() {
      return s._(/*BTDS*/ "Delete Pix key");
    }
    function A() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function F() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function O() {
      return s._(/*BTDS*/ "Delete");
    }
    function B() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function W() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function q(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
      );
    }
    function U() {
      return s._(/*BTDS*/ "Transactions");
    }
    function V() {
      return s._(/*BTDS*/ "See all");
    }
    function H() {
      return s._(/*BTDS*/ "Completed");
    }
    function G() {
      return s._(/*BTDS*/ "Pending");
    }
    function z() {
      return s._(/*BTDS*/ "Failed");
    }
    function j() {
      return s._(/*BTDS*/ "You requested");
    }
    function K() {
      return s._(/*BTDS*/ "They requested");
    }
    function Q() {
      return s._(/*BTDS*/ "No transactions yet");
    }
    function X() {
      return s._(/*BTDS*/ "All");
    }
    function Y() {
      return s._(/*BTDS*/ "You requested");
    }
    function J() {
      return s._(/*BTDS*/ "Others requested");
    }
    function Z() {
      return s._(/*BTDS*/ "From");
    }
    function ee() {
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
      (l.getConsumerPixAreaHeader = v),
      (l.getConsumerSharePixChatErrorToast = S),
      (l.getConsumerSharePixContactPickerTitle = R),
      (l.getConsumerSharePixBrazilOnlyBanner = L),
      (l.getConsumerSendPixDescription = E),
      (l.getSendPixRequestPaymentTitle = k),
      (l.getSmbSendPixDescription = I),
      (l.getConsumerSendPixGroupTitle = T),
      (l.getConsumerSendPixGroupDescription = D),
      (l.getConsumerSharePixSentTitle = x),
      (l.getConsumerSharePixSentBody = $),
      (l.getConsumerSharePixViewInChat = P),
      (l.getConsumerSharePixDone = N),
      (l.getConsumerSharePixRowLabel = M),
      (l.getConsumerPixDeleteKeyButton = w),
      (l.getConsumerPixDeleteKeyConfirmTitle = A),
      (l.getConsumerPixDeleteKeyConfirmBody = F),
      (l.getConsumerPixDeleteKeyConfirmCta = O),
      (l.getConsumerPixDeleteKeyDeletedToast = B),
      (l.getConsumerPixDeleteKeyErrorToast = W),
      (l.getConsumerPixContactsExcludedCount = q),
      (l.getConsumerTransactionsHeader = U),
      (l.getConsumerTransactionsSeeAll = V),
      (l.getConsumerTransactionStatusCompleted = H),
      (l.getConsumerTransactionStatusPending = G),
      (l.getConsumerTransactionStatusFailed = z),
      (l.getConsumerTransactionStatusRequestedByYou = j),
      (l.getConsumerTransactionStatusRequestedByThem = K),
      (l.getConsumerTransactionsEmpty = Q),
      (l.getConsumerTransactionsTabAll = X),
      (l.getConsumerTransactionsTabYouRequested = Y),
      (l.getConsumerTransactionsTabTheyRequested = J),
      (l.getConsumerTransactionsDateFrom = Z),
      (l.getConsumerTransactionsDateTo = ee));
  },
  226,
);
