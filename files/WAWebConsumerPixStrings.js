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
      return s._(/*BTDS*/ "Pix key");
    }
    function y() {
      return s._(/*BTDS*/ "Hide Pix key from...");
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
    ((l.getConsumerPixKeyTypeOptions = e),
      (l.getConsumerAddPixKeyTitle = u),
      (l.getConsumerAddPixKeySubtitle = c),
      (l.getConsumerPixVisibilityEveryone = d),
      (l.getConsumerPixVisibilityMyContacts = m),
      (l.getConsumerPixVisibilityMyContactsExcept = p),
      (l.getConsumerPixVisibilityNobody = _),
      (l.getConsumerPixVisibilityLabel = f),
      (l.getConsumerPixVisibilityUpdateError = g),
      (l.getConsumerPixKeyLabel = h),
      (l.getConsumerPixHideFromContactsTitle = y),
      (l.getConsumerPaymentsHomeEmptyStateTitle = C),
      (l.getConsumerPaymentsHomeAddPixKeyButton = b),
      (l.getConsumerPaymentsHomePixKeyHeader = v));
  },
  226,
);
