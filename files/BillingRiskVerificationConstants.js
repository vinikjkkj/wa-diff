__d(
  "BillingRiskVerificationConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        accountDslSuccessBody: s._(
          /*BTDS*/ "Your payment method was successfully verified. Your daily spending limit has been restored.",
        ),
        allVerifiedHeader: s._(/*BTDS*/ "Payment methods verified"),
        authorizeBodySectionLocalizedAmount: function (t) {
          return s._(
            /*BTDS*/ "To use your ad account, you need to verify your payment methods. To verify a payment method, we\u2019ll place a temporary hold of {currency amount} that will appear in your online banking statement with a 4-character verification code.",
            [s._param("currency amount", t)],
          );
        },
        authorizeButton: s._(/*BTDS*/ "Verify"),
        authorizeHeader: s._(/*BTDS*/ "How to verify"),
        campaignDSLSuccessBody: s._(
          /*BTDS*/ "Your payment method was successfully verified. Ads for campaigns that were not delivering are now running again.",
        ),
        chooseFirstPM: s._(/*BTDS*/ "Choose first payment method to verify"),
        chooseNextPM: s._(/*BTDS*/ "Choose next payment method to verify"),
        contactSupport: s._(/*BTDS*/ "Contact support"),
        continueToProvider: function (t) {
          return s._(/*BTDS*/ "Continue to {provider}", [
            s._param("provider", t),
          ]);
        },
        cvvAttemptsExceededBody: s._(
          /*BTDS*/ "You have exceeded the number of allowed attempts to verify your payment method.",
        ),
        cvvAttemptsExceededHeader: s._(/*BTDS*/ "Verification failed"),
        errorRetryVerification: s._(
          /*BTDS*/ "Try verifying this payment method again.",
        ),
        errorRetryVerification3DS: s._(
          /*BTDS*/ "Try verifying this payment method again. You may receive a one-time passcode directly from your card issuer.",
        ),
        errorRetryVerificationSDC: function (t) {
          return s._(
            /*BTDS*/ "Try verifying this payment method again. We'll place a temporary hold of {currency amount} that will appear in your online banking statement with a 4-character verification code.",
            [s._param("currency amount", t)],
          );
        },
        errorTryAgainButtonLabel: s._(/*BTDS*/ "Try Again"),
        errorUnverifiedHeadline: function (t) {
          return s._(/*BTDS*/ "Couldn't verify {credt card}", [
            s._param("credt card", t),
          ]);
        },
        expiryBody: function (t, n) {
          return s._(/*BTDS*/ "Expires {expiry month}\/{expiry year}", [
            s._param("expiry month", t),
            s._param("expiry year", n),
          ]);
        },
        header: s._(/*BTDS*/ "Verify payment method"),
        headerSkipAuthScreen: s._(/*BTDS*/ "Verification code needed"),
        learnMoreButton: s._(/*BTDS*/ "Learn more"),
        nextButton: s._(/*BTDS*/ "Next"),
        notNowButton: s._(/*BTDS*/ "Not now"),
        numPMsRemaining: function (t) {
          return s._(
            /*BTDS*/ '_j{"*":"You have {number} payment methods remaining.","_1":"You have 1 payment method remaining."}',
            [s._plural(t, "number")],
          );
        },
        numPMsToVerify: function (t) {
          return s._(
            /*BTDS*/ '_j{"*":"You have {number} payment methods to verify.","_1":"You have 1 payment method to verify."}',
            [s._plural(t, "number")],
          );
        },
        primaryButtonLabelMultiplePM: s._(/*BTDS*/ "Done"),
        proactiveCvcoFailureBody: s._(
          /*BTDS*/ "We were not able to verify your card. Try verifying a different card, or try again later.",
        ),
        proactiveCvcoSuccessBody: s._(
          /*BTDS*/ "Your payment method was successfully verified. You can return to your account.",
        ),
        riskAuthBody: function (t) {
          return s._(
            /*BTDS*/ "To ensure you're using a viable payment method, you are required to verify your payment method(s) on file. You may receive a one-time passcode directly from your card issuer or see a temporary hold of {currency amount} in your online banking statement with a 4-character verification code. To verify your bank or PayPal account, you will be prompted to log in to your account.",
            [s._param("currency amount", t)],
          );
        },
        sdcErrorStatusBody: function (t, n) {
          return s._(
            /*BTDS*/ "We weren't able to send a verification code for {card association} \u00b7 {card last four}. To get help in verifying your payment method, contact support.",
            [s._param("card association", t), s._param("card last four", n)],
          );
        },
        sdcErrorStatusHeadline: s._(/*BTDS*/ "Couldn't send verification code"),
        sdcErrorStatusSecondaryButtonLabel: s._(/*BTDS*/ "Add payment method"),
        sdcUnverifiableStatusBody: function (t) {
          return s._(
            /*BTDS*/ "We saw some unusual activity with your payment methods. To run ads, you need to change your default payment method or verify your {payment method} by contacting support.",
            [s._param("payment method", t)],
          );
        },
        sdcUnverifiableStatusHeadline: s._(
          /*BTDS*/ "Change or verify your payment method",
        ),
        sdcUnverifiableStatusPrimaryButtonLabel: s._(
          /*BTDS*/ "Change payment method",
        ),
        sdcUnverifiableStatusTitle: s._(/*BTDS*/ "Account disabled"),
        successBodyMultiplePM: s._(
          /*BTDS*/ "You can now use your successfully verified payment methods for ad spending.",
        ),
        successBodyOnePM: s._(
          /*BTDS*/ "Your payment method was successfully verified. Your account is now active and you can run ads and add funds we may have refunded to your payment method.",
        ),
        successBodyVerified: s._(/*BTDS*/ "You can now use it for payments."),
        successBodyVerifiedWithHold: s._(
          /*BTDS*/ "You can now use it for payments. The temporary card hold should be removed automatically.",
        ),
        successHeadline: function (t) {
          return s._(/*BTDS*/ "{Card} successfully verified", [
            s._param("Card", t),
          ]);
        },
        successHeadlineVerified: function (t) {
          return s._(/*BTDS*/ "{Card} is verified", [s._param("Card", t)]);
        },
        unverifiedPMBody: s._(/*BTDS*/ "Verify card"),
        verifyCVVBody: s._(
          /*BTDS*/ "Verify a payment method to start using this ad account. You'll be prompted to enter a CVV to verify a credit or debit card, or asked to log in to your bank account.",
        ),
        verifyCVVHeader: s._(/*BTDS*/ "Choose a payment method to verify"),
        verifyLastPM: s._(/*BTDS*/ "Verify last payment method"),
        verifyOptionsHeader: function (t) {
          return s._(/*BTDS*/ "Verify {card}", [s._param("card", t)]);
        },
        verifyOptionsSubtitle: s._(
          /*BTDS*/ "We'll ask you to complete one of these verification steps for your payment method.",
        ),
        verifyOptionsSubtitleMulti: s._(
          /*BTDS*/ "We'll ask you to complete one of these verification steps for each of your payment methods.",
        ),
        verifyOptionsSubtitleMultiCode: s._(
          /*BTDS*/ "We'll place a small temporary hold on each card, then ask you to confirm it.",
        ),
        verifyOptionsSubtitleMultiRedirect: s._(
          /*BTDS*/ "We'll redirect you to your bank or payment provider to complete a verification step for each of your payment methods.",
        ),
        verifyPMsHeader: s._(/*BTDS*/ "Verify your payment methods"),
        verifyWithBankBody: s._(
          /*BTDS*/ "We'll redirect you to your bank or payment provider to complete a verification step.",
        ),
        verifyWithBankHeadline: s._(
          /*BTDS*/ "Verify with your bank or payment provider",
        ),
        verifyWithCodeBody: s._(
          /*BTDS*/ "We'll place a small temporary hold on your card, then ask you to confirm it.",
        ),
        verifyWithCodeHeadline: s._(
          /*BTDS*/ "Enter a code from your card transactions",
        ),
      },
      u = e;
    l.default = u;
  },
  226,
);
