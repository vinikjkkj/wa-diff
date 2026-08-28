__d(
  "BillingPayNowLandingState",
  [
    "BillingCurrencyAmount",
    "BillingPayNowLandingScreen.react",
    "BillingWizardDisplayState",
    "BillingWizardRootUPLogger",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "pay_now_landing_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.country,
                n = e.currency,
                r = e.paymentAccountID;
              return {
                country: t == null ? null : t,
                currency: n == null ? null : n,
                intent: "PAY_NOW",
                paymentAccountID: r,
              };
            }),
            (t.query = o("BillingPayNowLandingScreen.react").query),
            (t.fetchPolicy = "store-and-network"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e;
            r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
              payment_amount:
                (e = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                  t.paymentAmount,
                )) == null
                  ? void 0
                  : e.getRawAmountForLoggingOnly(),
            });
            var a = function (t, r, o, a, i, l, s, u, c, d) {
                return n("onNext", {
                  accountBalance: a,
                  invoiceIDs: l,
                  isSecureBilling: u,
                  newPrimaryPaymentMethodID: t,
                  paymentAmount: o,
                  paymentAmountMode: d,
                  paymentIntent: i,
                  paymentMethodID: t,
                  paymentMethodType: r,
                  subtotal: c,
                  threeDSClientInfo: s,
                });
              },
              i = function (t, r, o, a) {
                return n("onChangePM", {
                  paymentAmount: t,
                  paymentAmountMode: a,
                  paymentMethodID: r,
                  paymentMethodType: o,
                });
              };
            return s.jsx(
              o("BillingPayNowLandingScreen.react").BillingPayNowLandingScreen,
              babelHelpers.extends({}, t, {
                onChangePM: i,
                onSubmitPaymentMethod: a,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
