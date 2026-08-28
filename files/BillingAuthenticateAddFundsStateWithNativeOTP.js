__d(
  "BillingAuthenticateAddFundsStateWithNativeOTP",
  [
    "fbt",
    "BillingNativeOTPScreen.react",
    "BillingWizardDisplayState",
    "asyncToGeneratorRuntime",
    "getBillingNativeOTPCardSummary",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "authenticate_add_funds_state_with_native_otp_display"),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var o = t.prototype;
        return (
          (o.onEnter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = t.qe,
                  o = t.relay;
                return (
                  n.billing_india_native_otp_issuer_logo.enable_redesign.read({
                    do_not_log_exposure_iknowwhatimdoing: !0,
                  }) === !0 &&
                    (this.cardSummary = yield r(
                      "getBillingNativeOTPCardSummary",
                    )(o, e.paymentMethodID, e.paymentAccountID)),
                  { newProps: e }
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.onDisplay = function (t, n) {
            var e = function () {
                return n("onFailure", {
                  status: {
                    body: s._(
                      /*BTDS*/ "We weren't able to add funds to your account, please try again.",
                    ),
                    headline: s._(/*BTDS*/ "Couldn't Add Funds"),
                    title: s._(/*BTDS*/ "Couldn't Add Funds"),
                    type: "ERROR",
                  },
                });
              },
              o = function () {
                return n("onSuccess");
              },
              a = function () {
                return n("onTransitionToOTPWebFallback", {
                  overrideHasBack: !1,
                });
              },
              i = function (t) {
                return n("onTimeout", { status: t });
              };
            return u.jsx(
              r("BillingNativeOTPScreen.react"),
              babelHelpers.extends({}, t, {
                cardSummary: this.cardSummary,
                hidePaymentAmountSection: !1,
                onFailure: e,
                onSuccess: o,
                onTimeout: i,
                onTransitionToOTPWebFallback: a,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = c;
  },
  226,
);
