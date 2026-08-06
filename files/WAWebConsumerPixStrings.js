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
    function R() {
      return s._(/*BTDS*/ "Pix area");
    }
    function L() {
      return s._(/*BTDS*/ "Couldn't open the chat. Please try again.");
    }
    function E() {
      return s._(/*BTDS*/ "My contacts");
    }
    function k() {
      return s._(
        /*BTDS*/ "This feature is only available to contacts in Brazil.",
      );
    }
    function I(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function T() {
      return s._(/*BTDS*/ "Request payment");
    }
    function D(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function x() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function $() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function P(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function N(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function M() {
      return s._(/*BTDS*/ "View in chat");
    }
    function w() {
      return s._(/*BTDS*/ "Done");
    }
    function A() {
      return s._(/*BTDS*/ "Share your Pix");
    }
    function F(e) {
      return s._(
        /*BTDS*/ "Your Pix key and name will be securely stored and encrypted. {learn-more-link}",
        [s._param("learn-more-link", e)],
      );
    }
    function O() {
      return s._(/*BTDS*/ "Delete Pix key");
    }
    function B() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function W() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function q() {
      return s._(/*BTDS*/ "Delete");
    }
    function U() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function V() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function H(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
      );
    }
    function G() {
      return s._(/*BTDS*/ "Transactions");
    }
    function z() {
      return s._(/*BTDS*/ "See all");
    }
    function j() {
      return s._(/*BTDS*/ "Completed");
    }
    function K() {
      return s._(/*BTDS*/ "Pending");
    }
    function Q() {
      return s._(/*BTDS*/ "Failed");
    }
    function X() {
      return s._(/*BTDS*/ "You requested");
    }
    function Y() {
      return s._(/*BTDS*/ "They requested");
    }
    function J() {
      return s._(/*BTDS*/ "No transactions yet");
    }
    function Z() {
      return s._(/*BTDS*/ "All");
    }
    function ee() {
      return s._(/*BTDS*/ "You requested");
    }
    function te() {
      return s._(/*BTDS*/ "Others requested");
    }
    function ne() {
      return s._(/*BTDS*/ "From");
    }
    function re() {
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
      (l.getConsumerPixVisibilityUpdateError = g),
      (l.getConsumerPixPasskeyBlockedToast = h),
      (l.getConsumerPixEditKeyAriaLabel = y),
      (l.getConsumerPixKeyLabel = C),
      (l.getConsumerPaymentsHomeEmptyStateTitle = b),
      (l.getConsumerPaymentsHomeAddPixKeyButton = v),
      (l.getConsumerPaymentsHomePixKeyHeader = S),
      (l.getConsumerPixAreaHeader = R),
      (l.getConsumerSharePixChatErrorToast = L),
      (l.getConsumerSharePixContactPickerTitle = E),
      (l.getConsumerSharePixBrazilOnlyBanner = k),
      (l.getConsumerSendPixDescription = I),
      (l.getSendPixRequestPaymentTitle = T),
      (l.getSmbSendPixDescription = D),
      (l.getConsumerSendPixGroupTitle = x),
      (l.getConsumerSendPixGroupDescription = $),
      (l.getConsumerSharePixSentTitle = P),
      (l.getConsumerSharePixSentBody = N),
      (l.getConsumerSharePixViewInChat = M),
      (l.getConsumerSharePixDone = w),
      (l.getConsumerSharePixRowLabel = A),
      (l.getConsumerPixEncryptedFooter = F),
      (l.getConsumerPixDeleteKeyButton = O),
      (l.getConsumerPixDeleteKeyConfirmTitle = B),
      (l.getConsumerPixDeleteKeyConfirmBody = W),
      (l.getConsumerPixDeleteKeyConfirmCta = q),
      (l.getConsumerPixDeleteKeyDeletedToast = U),
      (l.getConsumerPixDeleteKeyErrorToast = V),
      (l.getConsumerPixContactsExcludedCount = H),
      (l.getConsumerTransactionsHeader = G),
      (l.getConsumerTransactionsSeeAll = z),
      (l.getConsumerTransactionStatusCompleted = j),
      (l.getConsumerTransactionStatusPending = K),
      (l.getConsumerTransactionStatusFailed = Q),
      (l.getConsumerTransactionStatusRequestedByYou = X),
      (l.getConsumerTransactionStatusRequestedByThem = Y),
      (l.getConsumerTransactionsEmpty = J),
      (l.getConsumerTransactionsTabAll = Z),
      (l.getConsumerTransactionsTabYouRequested = ee),
      (l.getConsumerTransactionsTabTheyRequested = te),
      (l.getConsumerTransactionsDateFrom = ne),
      (l.getConsumerTransactionsDateTo = re));
  },
  226,
);
