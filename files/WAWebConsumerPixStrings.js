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
        /*BTDS*/ "You can't edit or delete your Pix key because passkey is enabled on your primary device.",
      );
    }
    function g() {
      return s._(/*BTDS*/ "Edit your Pix key");
    }
    function h() {
      return s._(/*BTDS*/ "Pix key");
    }
    function y() {
      return s._(/*BTDS*/ "Add your Pix key for fast and secure payments");
    }
    function C() {
      return s._(/*BTDS*/ "Add Pix key");
    }
    function b() {
      return s._(/*BTDS*/ "Pix area");
    }
    function v() {
      return s._(/*BTDS*/ "Couldn't open the chat. Please try again.");
    }
    function S() {
      return s._(/*BTDS*/ "My contacts");
    }
    function R() {
      return s._(
        /*BTDS*/ "This feature is only available to contacts in Brazil.",
      );
    }
    function L(e) {
      return s._(
        /*BTDS*/ "{recipient_name} will be able to copy your Pix key or code from the chat.",
        [s._param("recipient_name", e)],
      );
    }
    function E() {
      return s._(/*BTDS*/ "Request payment");
    }
    function k(e) {
      return s._(
        /*BTDS*/ "{customer_name} will be able to copy your Pix key from the chat.",
        [s._param("customer_name", e)],
      );
    }
    function I() {
      return s._(/*BTDS*/ "Send Pix key");
    }
    function T() {
      return s._(
        /*BTDS*/ "Everyone in this group will be able to copy your Pix key from the chat.",
      );
    }
    function D(e) {
      return e ? s._(/*BTDS*/ "Pix code sent") : s._(/*BTDS*/ "Pix key sent");
    }
    function x(e, t) {
      return t
        ? s._(/*BTDS*/ "Your Pix code was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ])
        : s._(/*BTDS*/ "Your Pix key was sent to {recipient_name}.", [
            s._param("recipient_name", e),
          ]);
    }
    function $() {
      return s._(/*BTDS*/ "View in chat");
    }
    function P() {
      return s._(/*BTDS*/ "Done");
    }
    function N() {
      return s._(/*BTDS*/ "Share your Pix");
    }
    function M() {
      return s._(/*BTDS*/ "Delete Pix key?");
    }
    function w() {
      return s._(
        /*BTDS*/ "You'll always be able to add a Pix key later if you delete it.",
      );
    }
    function A() {
      return s._(/*BTDS*/ "Delete");
    }
    function F() {
      return s._(/*BTDS*/ "Pix key deleted");
    }
    function O() {
      return s._(/*BTDS*/ "Couldn't delete Pix key. Please try again.");
    }
    function B(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} contacts excluded","_1":"1 contact excluded"}',
        [s._plural(e, "number")],
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
    function j() {
      return s._(/*BTDS*/ "No transactions yet");
    }
    function K() {
      return s._(/*BTDS*/ "All");
    }
    function Q() {
      return s._(/*BTDS*/ "You requested");
    }
    function X() {
      return s._(/*BTDS*/ "Others requested");
    }
    function Y() {
      return s._(/*BTDS*/ "From");
    }
    function J() {
      return s._(/*BTDS*/ "To");
    }
    ((l.getConsumerPixKeyTypeOptions = e),
      (l.getConsumerAddPixKeySubtitle = u),
      (l.getConsumerPixVisibilityEveryone = c),
      (l.getConsumerPixVisibilityMyContacts = d),
      (l.getConsumerPixVisibilityMyContactsExcept = m),
      (l.getConsumerPixVisibilityNobody = p),
      (l.getConsumerPixVisibilityLabel = _),
      (l.getConsumerPixPasskeyBlockedToast = f),
      (l.getConsumerPixEditKeyAriaLabel = g),
      (l.getConsumerPixKeyLabel = h),
      (l.getConsumerPaymentsHomeEmptyStateTitle = y),
      (l.getConsumerPaymentsHomeAddPixKeyButton = C),
      (l.getConsumerPixAreaHeader = b),
      (l.getConsumerSharePixChatErrorToast = v),
      (l.getConsumerSharePixContactPickerTitle = S),
      (l.getConsumerSharePixBrazilOnlyBanner = R),
      (l.getConsumerSendPixDescription = L),
      (l.getSendPixRequestPaymentTitle = E),
      (l.getSmbSendPixDescription = k),
      (l.getConsumerSendPixGroupTitle = I),
      (l.getConsumerSendPixGroupDescription = T),
      (l.getConsumerSharePixSentTitle = D),
      (l.getConsumerSharePixSentBody = x),
      (l.getConsumerSharePixViewInChat = $),
      (l.getConsumerSharePixDone = P),
      (l.getConsumerSharePixRowLabel = N),
      (l.getConsumerPixDeleteKeyConfirmTitle = M),
      (l.getConsumerPixDeleteKeyConfirmBody = w),
      (l.getConsumerPixDeleteKeyConfirmCta = A),
      (l.getConsumerPixDeleteKeyDeletedToast = F),
      (l.getConsumerPixDeleteKeyErrorToast = O),
      (l.getConsumerPixContactsExcludedCount = B),
      (l.getConsumerTransactionsHeader = W),
      (l.getConsumerTransactionsSeeAll = q),
      (l.getConsumerTransactionStatusCompleted = U),
      (l.getConsumerTransactionStatusPending = V),
      (l.getConsumerTransactionStatusFailed = H),
      (l.getConsumerTransactionStatusRequestedByYou = G),
      (l.getConsumerTransactionStatusRequestedByThem = z),
      (l.getConsumerTransactionsEmpty = j),
      (l.getConsumerTransactionsTabAll = K),
      (l.getConsumerTransactionsTabYouRequested = Q),
      (l.getConsumerTransactionsTabTheyRequested = X),
      (l.getConsumerTransactionsDateFrom = Y),
      (l.getConsumerTransactionsDateTo = J));
  },
  226,
);
