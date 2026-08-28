__d(
  "BillingThirdPartyVerifyPayPalConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      buttonScreenButtonLabel: function () {
        return s._(/*BTDS*/ "Open PayPal");
      },
      buttonScreenDescription: function () {
        return s._(/*BTDS*/ "Open PayPal to verify it as a payment method.");
      },
      buttonScreenHeader: s._(/*BTDS*/ "Verify payment method"),
      buttonScreenSubHeader: function () {
        return s._(/*BTDS*/ "Log in to PayPal");
      },
      failBody: s._(
        /*BTDS*/ "Try verifying PayPal again or select a different payment method.",
      ),
      failHeadline: s._(/*BTDS*/ "Unable to verify PayPal account"),
      failTitle: s._(/*BTDS*/ "Something went wrong"),
      loadingScreenButtonLabel: function () {
        return s._(/*BTDS*/ "Open PayPal");
      },
      loadingScreenDescription: function () {
        return s._(
          /*BTDS*/ "Go back to PayPal to continue verifying it as a payment method.",
        );
      },
      loadingScreenSubHeader: function () {
        return s._(/*BTDS*/ "Continue verifying your PayPal account");
      },
      successBody: s._(/*BTDS*/ "You can now use PayPal as a payment method."),
      successHeadline: s._(/*BTDS*/ "PayPal account verified"),
    };
    l.thirdPartyVerifyPayPalConstants = e;
  },
  226,
);
