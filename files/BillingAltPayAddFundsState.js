__d(
  "BillingAltPayAddFundsState",
  [
    "BillingAltPayAddFundsScreen.react",
    "BillingCurrencyAmount",
    "BillingWizardDisplayState",
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
            (t.name = "alt_pay_add_funds_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t,
                n,
                r = e.boostDurationInDays,
                a = e.dailyBudgetPaymentAmount,
                i = e.fullBudgetPaymentAmount,
                l = e.isMissingPills,
                s = e.paymentAccountID,
                u = e.paymentMethodID,
                c = e.providerID,
                d = e.surface;
              return {
                boostDurationInDays: r != null ? r : null,
                dailyBudgetPaymentAmount:
                  a != null
                    ? (t = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                        a,
                      )) == null
                      ? void 0
                      : t.asGraphQLInput()
                    : null,
                fullBudgetPaymentAmount:
                  i != null
                    ? (n = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                        i,
                      )) == null
                      ? void 0
                      : n.asGraphQLInput()
                    : null,
                isMissingPills: l != null ? l : !1,
                paymentAccountID: s,
                paymentMethodID: u,
                preferMlPrediction: !0,
                providerID: c,
                surface: d != null ? d : null,
              };
            }),
            (t.query = o("BillingAltPayAddFundsScreen.react").query),
            (t.fetchPolicy = "network-only"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t) {
              return n("onNext", { paymentAmount: t });
            };
            return s.jsx(
              o("BillingAltPayAddFundsScreen.react")
                .BillingAltPayAddFundsScreen,
              babelHelpers.extends({}, t, { onSubmitAltPay: e }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
