__d(
  "BillingDSLBoostConstants",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        authorizeButtonV2: s._(/*BTDS*/ "Verify card"),
        cancelConfirmation: s._(/*BTDS*/ "Yes, cancel"),
        cancelVerificationBody: s._(
          /*BTDS*/ "You can also request to permanently increase your daily spending limit.",
        ),
        cancelVerificationHeader: s._(/*BTDS*/ "Cancel Payment Verification?"),
        dslAuthBody: s._(
          /*BTDS*/ "Increase your ads daily spending limit by verifying your payment method. Verification helps us confirm that you own your account. Your account will not be charged.",
        ),
        dslAuthBodyV2: s._(
          /*BTDS*/ "Verify a payment method to increase the amount you can spend on ads per day. This helps keep your account safe and the platform secure. Your new daily spending limit (set by Meta) is based on how much you\u2019ve spent on Meta Ads using the card you choose to verify. Your card will not be charged.",
        ),
        dslAuthHeader: s._(/*BTDS*/ "Increase daily spending limit"),
        noThanks: s._(/*BTDS*/ "No thanks"),
        pmSelectionBody: s._(
          /*BTDS*/ "Your ads daily spending limit increase is based on how much you have historically spent on Meta Ads products with your chosen payment card.",
        ),
        pmSelectionHeader: s._(/*BTDS*/ "Choose a payment card"),
        pmVerified: s._(/*BTDS*/ "Payment method verified"),
        pmVerifiedFailureBody: s._(
          /*BTDS*/ "The verification codes entered don't match our records. You can still request to increase your daily spend limit by completing a form.",
        ),
        pmVerifiedFailureHeader: s._(
          /*BTDS*/ "Your payment method couldn't be verified",
        ),
        pmVerifiedSuccessBanner: function (t) {
          return s._(
            /*BTDS*/ "Your daily spend limit has been increased to {dsl boost amount}.",
            [s._param("dsl boost amount", t)],
          );
        },
        pmVerifiedSuccessBannerV2: function (t) {
          return s._(
            /*BTDS*/ "This is the maximum amount you\u2019re able to spend on ads each day. {Help article for daily spending limit}",
            [
              s._param(
                "Help article for daily spending limit",
                u.jsx(t, {
                  href: "https://www.facebook.com/business/help/563129151097553",
                  inline: !0,
                  label: s._(/*BTDS*/ "About daily spending limits"),
                }),
              ),
            ],
          );
        },
        pmVerifiedSuccessBody: s._(
          /*BTDS*/ "You can request to permanently increase the total amount Meta allows you to spend on ads each day.",
        ),
        pmVerifiedSuccessHeader: s._(
          /*BTDS*/ "Want to increase your daily spending limit even more?",
        ),
        pmVerifiedSuccessHeaderV2: function (t) {
          return s._(
            /*BTDS*/ "Your daily spending limit is now {dsl boost amount} per day",
            [s._param("dsl boost amount", t)],
          );
        },
        pmVerifiedSuccessTitle: s._(/*BTDS*/ "Limit increased"),
        requestIncrease: s._(/*BTDS*/ "Request increase"),
        yesRequestIncrease: s._(/*BTDS*/ "Yes, request increase"),
      },
      d = c;
    l.default = d;
  },
  226,
);
