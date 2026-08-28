__d(
  "BillingActivateCreditCardWithNativeOTPState",
  [
    "fbt",
    "BillingActivateCreditCardWithNativeOTPStateQuery.graphql",
    "BillingNativeOTPScreen.react",
    "BillingPaymentMethodDisplayUtils",
    "BillingWizardDisplayState",
    "asyncToGeneratorRuntime",
    "getBillingNativeOTPCardSummary",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d =
        e !== void 0
          ? e
          : (e = n("BillingActivateCreditCardWithNativeOTPStateQuery.graphql")),
      m = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "activate_credit_card_with_native_otp_display"),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.onEnter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  a = t.qe,
                  i = t.relay,
                  l = yield i.fetchQuery({
                    options: { fetchPolicy: "store-or-network" },
                    query: d,
                    queryName: d.params.name,
                    variables: {
                      creditCardID: (n = e.paymentMethodID) != null ? n : "",
                    },
                  });
                return (
                  (this.pmDisplay = o(
                    "BillingPaymentMethodDisplayUtils",
                  ).getPaymentMethodDisplayFromFragment(l.node)),
                  a.billing_india_native_otp_issuer_logo.enable_redesign.read({
                    do_not_log_exposure_iknowwhatimdoing: !0,
                  }) === !0 &&
                    (this.cardSummary = yield r(
                      "getBillingNativeOTPCardSummary",
                    )(i, e.paymentMethodID, e.paymentAccountID)),
                  { newProps: e }
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.onDisplay = function (t, n) {
            var e = this,
              o = function () {
                return n("onFailure", {
                  status: {
                    body: s._(
                      /*BTDS*/ "We weren't able to complete verification, please try again.",
                    ),
                    headline: s._(
                      /*BTDS*/ "{credit card} hasn't been verified",
                      [s._param("credit card", e.pmDisplay)],
                    ),
                    title: s._(/*BTDS*/ "Couldn't verify card"),
                    type: "ERROR",
                  },
                });
              },
              a = function () {
                return n("onNext");
              },
              i = function () {
                return n("onTransitionToOTPWebFallback", {
                  initResults: t.initResults,
                  overrideHasBack: !1,
                  paymentMethodID: t.paymentMethodID,
                });
              },
              l = function (t) {
                return n("onTimeout", { status: t });
              };
            return c.jsx(
              r("BillingNativeOTPScreen.react"),
              babelHelpers.extends({}, t, {
                cardSummary: this.cardSummary,
                onFailure: o,
                onSuccess: a,
                onTimeout: l,
                onTransitionToOTPWebFallback: i,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = m;
  },
  226,
);
