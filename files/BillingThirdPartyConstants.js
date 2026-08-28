__d(
  "BillingThirdPartyConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        failTitle: s._(/*BTDS*/ "Something went wrong"),
        pendingBody: function (t, n, r) {
          return n
            ? s._(
                /*BTDS*/ "Once we receive verification from {Payment method name}, your funds will be added to your account.",
                [s._param("Payment method name", t)],
              )
            : r
              ? s._(
                  /*BTDS*/ "Once we receive verification from {Payment method name}, your funds will be added to your account.",
                  [s._param("Payment method name", t)],
                )
              : s._(
                  /*BTDS*/ "Once we receive verification from {Payment method name}, your funds will be added to your account.",
                  [s._param("Payment method name", t)],
                );
        },
        pendingHeadline: s._(/*BTDS*/ "Verification pending"),
        pendingTitle: s._(/*BTDS*/ "Verify payment method"),
      },
      u = babelHelpers.extends({}, e, {
        buttonScreenButtonLabel: function () {
          return s._(/*BTDS*/ "Open PayPal");
        },
        buttonScreenDescription: function (t, n) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            s._(/*BTDS*/ "Open PayPal to add it as a payment method.")
          );
        },
        buttonScreenHeader: s._(/*BTDS*/ "Add payment method"),
        buttonScreenSubHeader: function (t, n, r) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = ""),
            r === void 0 && (r = !1),
            s._(/*BTDS*/ "Log in to PayPal")
          );
        },
        failBody: function (t, n) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            s._(
              /*BTDS*/ "Try adding PayPal again or select a different payment method.",
            )
          );
        },
        failHeadline: function () {
          return s._(/*BTDS*/ "Unable to add PayPal account");
        },
        loadingScreenButtonLabel: function (t) {
          return s._(/*BTDS*/ "Back to {Payment method name}", [
            s._param("Payment method name", t),
          ]);
        },
        loadingScreenDescription: function (t, n, r, o) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            o === void 0 && (o = !1),
            s._(
              /*BTDS*/ "Go back to PayPal to continue adding it as a payment method.",
            )
          );
        },
        loadingScreenSubHeader: function (t, n) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            s._(/*BTDS*/ "Continue adding your PayPal account")
          );
        },
        successBody: function (t, n, r, o, a, i) {
          return (
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            o === void 0 && (o = !1),
            a === void 0 && (a = !1),
            o
              ? s._(
                  /*BTDS*/ "Your {payment method name display} account was added, but we need to verify your business location before you can run ads.",
                  [s._param("payment method name display", i)],
                )
              : s._(
                  /*BTDS*/ "You can now use {paypal email display} as a payment method.",
                  [s._param("paypal email display", t)],
                )
          );
        },
        successHeadline: function (t, n, r) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = null),
            r === void 0 && (r = !1),
            s._(/*BTDS*/ "PayPal account added")
          );
        },
        successTitle: function (t) {
          return (t === void 0 && (t = !1), s._(/*BTDS*/ "Success"));
        },
      }),
      c = babelHelpers.extends({}, e, {
        buttonScreenButtonLabel: function (t) {
          return s._(/*BTDS*/ "Open {Payment method name}", [
            s._param("Payment method name", t),
          ]);
        },
        buttonScreenDescription: function (t, n, r, o, a) {
          return r
            ? s._(
                /*BTDS*/ "Open {Payment method name} to continue. You're adding funds to pay your outstanding balance.",
                [s._param("Payment method name", t)],
              )
            : n
              ? s._(
                  /*BTDS*/ "Add {Payment method name} to your account to make future payments easier.",
                  [s._param("Payment method name", t)],
                )
              : o
                ? s._(
                    /*BTDS*/ "Open {Payment method name} to add available funds.",
                    [s._param("Payment method name", t)],
                  )
                : a
                  ? s._(
                      /*BTDS*/ "Open {Payment method name} to add available funds.",
                      [s._param("Payment method name", t)],
                    )
                  : s._(
                      /*BTDS*/ "Open {Payment method name} to add available funds.",
                      [s._param("Payment method name", t)],
                    );
        },
        buttonScreenHeader: s._(/*BTDS*/ "Add payment information"),
        buttonScreenSubHeader: function (t, n, r, o, a, i) {
          return o
            ? s._(/*BTDS*/ "Pay {Payment amount} with {Payment method name}", [
                s._param("Payment amount", n),
                s._param("Payment method name", t),
              ])
            : r
              ? s._(/*BTDS*/ "Save {Payment method name}", [
                  s._param("Payment method name", t),
                ])
              : a
                ? s._(/*BTDS*/ "Add funds with {Payment method name}", [
                    s._param("Payment method name", t),
                  ])
                : i
                  ? s._(/*BTDS*/ "Add funds with {Payment method name}", [
                      s._param("Payment method name", t),
                    ])
                  : s._(/*BTDS*/ "Add funds with {Payment method name}", [
                      s._param("Payment method name", t),
                    ]);
        },
        failBody: function (t, n) {
          return n
            ? s._(
                /*BTDS*/ "Try saving {Payment method name} again or select a different payment method.",
                [s._param("Payment method name", t)],
              )
            : t === "BLIK"
              ? s._(
                  /*BTDS*/ "There may be an issue with your code or bank connection. Close this screen and try again.",
                )
              : t === "MB WAY"
                ? s._(
                    /*BTDS*/ "There may be an issue with your phone number or bank connection. Close this screen and try again.",
                  )
                : s._(
                    /*BTDS*/ "Try adding funds with {Payment method name} again or select a different payment method.",
                    [s._param("Payment method name", t)],
                  );
        },
        failHeadline: function (t) {
          return t === "BLIK" || t === "MB WAY"
            ? s._(/*BTDS*/ "Can't add funds now")
            : s._(/*BTDS*/ "Unable to access {Payment method name} account", [
                s._param("Payment method name", t),
              ]);
        },
        loadingScreenButtonLabel: function (t) {
          return s._(/*BTDS*/ "Back to {Payment method name}", [
            s._param("Payment method name", t),
          ]);
        },
        loadingScreenDescription: function (t, n, r, o) {
          return n
            ? s._(
                /*BTDS*/ "Add {Payment method name} to your account to make future payments easier.",
                [s._param("Payment method name", t)],
              )
            : r
              ? s._(
                  /*BTDS*/ "Go back to {Payment method name} to continue adding funds.",
                  [s._param("Payment method name", t)],
                )
              : o
                ? s._(
                    /*BTDS*/ "Go back to {Payment method name} to continue adding funds.",
                    [s._param("Payment method name", t)],
                  )
                : s._(
                    /*BTDS*/ "Go back to {Payment method name} to continue adding funds.",
                    [s._param("Payment method name", t)],
                  );
        },
        loadingScreenSubHeader: function (t, n, r, o) {
          return n
            ? s._(/*BTDS*/ "Continue adding {Payment method name}", [
                s._param("Payment method name", t),
              ])
            : r
              ? s._(
                  /*BTDS*/ "Continue adding your funds on {Payment method name} account",
                  [s._param("Payment method name", t)],
                )
              : o
                ? s._(
                    /*BTDS*/ "Continue adding your funds on {Payment method name} account",
                    [s._param("Payment method name", t)],
                  )
                : s._(
                    /*BTDS*/ "Continue adding your funds on {Payment method name} account",
                    [s._param("Payment method name", t)],
                  );
        },
        successBody: function (t, n, r, o, a, i, l, u, c) {
          return r
            ? s._(
                /*BTDS*/ "Your {Payment amount value} funds payment will be used to cover your outstanding balance.",
                [s._param("Payment amount value", t)],
              )
            : a
              ? l
                ? s._(
                    /*BTDS*/ "You now have {Payment amount value} in available funds. It may take a few minutes to appear in your account and to run new and existing ads.",
                    [s._param("Payment amount value", t)],
                  )
                : s._(
                    /*BTDS*/ "You now have {Payment amount value} in available funds. It may take a few minutes to appear in your account and to run new and existing ads.",
                    [s._param("Payment amount value", t)],
                  )
              : n
                ? s._(
                    /*BTDS*/ "{payment method name} is now saved to your account.",
                    [s._param("payment method name", i)],
                  )
                : l
                  ? s._(
                      /*BTDS*/ "You now have {Payment amount value} in available funds.",
                      [s._param("Payment amount value", t)],
                    )
                  : u
                    ? s._(
                        /*BTDS*/ "You now have {Payment amount value} in available funds.",
                        [s._param("Payment amount value", t)],
                      )
                    : c
                      ? s._(
                          /*BTDS*/ "Your balance may take a few minutes to update in your account.",
                        )
                      : s._(
                          /*BTDS*/ "Funds may take a few minutes to appear in your account.",
                        );
        },
        successHeadline: function (t, n, r, o, a, i) {
          return o
            ? s._(/*BTDS*/ "{Payment amount value} paid", [
                s._param("Payment amount value", t),
              ])
            : r
              ? s._(/*BTDS*/ "{Payment method name} successfully saved", [
                  s._param("Payment method name", n),
                ])
              : a
                ? s._(/*BTDS*/ "{Payment amount value} successfully added", [
                    s._param("Payment amount value", t),
                  ])
                : i
                  ? s._(/*BTDS*/ "{Payment amount value} successfully added", [
                      s._param("Payment amount value", t),
                    ])
                  : s._(/*BTDS*/ "{Payment amount value} successfully added", [
                      s._param("Payment amount value", t),
                    ]);
        },
        successTitle: function (t, n, r) {
          return t
            ? s._(/*BTDS*/ "Payment method saved")
            : s._(/*BTDS*/ "Funds added");
        },
      }),
      d = babelHelpers.extends({}, e, {
        buttonScreenButtonLabel: function () {
          return s._(/*BTDS*/ "Verify");
        },
        buttonScreenDescription: function (t, n) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            s._(/*BTDS*/ "This helps protect against fraud")
          );
        },
        buttonScreenHeader: s._(/*BTDS*/ "Verification needed"),
        buttonScreenSubHeader: function (t, n, r) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = ""),
            r === void 0 && (r = !1),
            s._(/*BTDS*/ "You need to verify your card")
          );
        },
        failBody: function (t, n) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            s._(/*BTDS*/ "Verification failed. Try again.")
          );
        },
        failHeadline: function () {
          return s._(/*BTDS*/ "Unable to verify");
        },
        loadingScreenButtonLabel: function (t) {
          return s._(/*BTDS*/ "Back to {Payment method name}", [
            s._param("Payment method name", t),
          ]);
        },
        loadingScreenDescription: function (t, n, r, o) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            o === void 0 && (o = !1),
            s._(/*BTDS*/ "Go back to finish verifying your card.")
          );
        },
        loadingScreenSubHeader: function (t, n) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = !1),
            s._(/*BTDS*/ "Continue verifying your card")
          );
        },
        successBody: function (t, n, r) {
          return (
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            r
              ? s._(
                  /*BTDS*/ "You can now use {card name} as a payment method, but we still need to verify your business location.",
                  [s._param("card name", t)],
                )
              : s._(
                  /*BTDS*/ "You can now use {paypal email display} as a payment method.",
                  [s._param("paypal email display", t)],
                )
          );
        },
        successHeadline: function (t, n, r) {
          return (
            t === void 0 && (t = ""),
            n === void 0 && (n = null),
            r === void 0 && (r = !1),
            s._(/*BTDS*/ "Card verified")
          );
        },
        successTitle: function (t) {
          return (t === void 0 && (t = !1), s._(/*BTDS*/ "Success"));
        },
      });
    ((l.thirdPartyPaypalConstants = u),
      (l.thirdPartyLPMConstants = c),
      (l.thirdPartyCreditCardConstants = d));
  },
  226,
);
