__d(
  "BillingAddFundsLandingState",
  [
    "BillingAddFundsLandingScreen.react",
    "BillingCurrencyAmount",
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
            (t.name = "add_funds_landing_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t,
                n,
                r,
                a,
                i = e.boostDurationInDays,
                l = e.country,
                s = e.currency,
                u = e.dailyBudgetPaymentAmount,
                c = e.fullBudgetPaymentAmount,
                d = e.isMissingPills,
                m = e.paymentAccountID,
                p = e.paymentMethodID,
                _ = e.sharedStoredBalanceID,
                f = e.surface;
              return {
                boostDurationInDays: i != null ? i : null,
                country: l != null ? l : null,
                currency: s != null ? s : null,
                dailyBudgetPaymentAmount:
                  (t =
                    (n = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                      u,
                    )) == null
                      ? void 0
                      : n.asGraphQLInput()) != null
                    ? t
                    : null,
                fullBudgetPaymentAmount:
                  (r =
                    (a = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                      c,
                    )) == null
                      ? void 0
                      : a.asGraphQLInput()) != null
                    ? r
                    : null,
                intent: "SB_FUNDING",
                isMissingPills: d != null ? d : !1,
                paymentAccountID: m,
                paymentMethodID: p != null ? p : "0",
                preferMlPrediction: !1,
                rankPaymentMethods: !0,
                sharedStoredBalanceID: _ != null ? _ : "0",
                surface: f != null ? f : null,
              };
            }),
            (t.query = o("BillingAddFundsLandingScreen.react").query),
            (t.fetchPolicy = "store-and-network"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n, a) {
            var e,
              i = a.qe;
            r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
              payment_amount:
                (e = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                  t.paymentAmount,
                )) == null
                  ? void 0
                  : e.getRawAmountForLoggingOnly(),
            });
            var l = function (t, r, o, a, l, s, u, c, d, m, p, _, f, g) {
                return n("onNext", {
                  altpayDisplayName: l,
                  autoReloadSettings: f,
                  overrideRLPMFlowWithOneTime: c,
                  paymentAmount: o,
                  paymentIntent: "ADD_FUNDS",
                  paymentMethodID: t,
                  paymentMethodType: r,
                  pmCapabilityPaymentIntent: 3,
                  providerID: a != null ? a : void 0,
                  recurringLPMUserExperienceType: _,
                  savingRecurringLPM: s === !0 && c === !0 ? !1 : s,
                  selectedExistingRecurringLPM: p,
                  showRecurringLPMCheckbox: u,
                  skipSecureBillingRedirect:
                    g === !0 &&
                    (i.seb_ux_updates_h1_26.enable_ux_improvements.read() ||
                      i.seb_ux_updates_h1_26.enable_alr_integration.read()),
                  supportsRecurring: d,
                  threeDSClientInfo: m,
                });
              },
              u = function (t, r) {
                return n("onEditAutoReload", {
                  paymentMethodID: t,
                  paymentMethodType: r,
                });
              },
              c = function (t) {
                return n("onInsufficientFundsOptions", {
                  paymentAmount: t,
                  paymentIntent: "ADD_FUNDS",
                });
              };
            return s.jsx(
              o("BillingAddFundsLandingScreen.react")
                .BillingAddFundsLandingScreen,
              babelHelpers.extends({}, t, {
                onEditAutoReload: u,
                onInsufficientFundsOptions: c,
                onSubmitPaymentMethod: l,
                paymentIntent: "ADD_FUNDS",
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
