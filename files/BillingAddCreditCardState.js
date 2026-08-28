__d(
  "BillingAddCreditCardState",
  [
    "BillingAddCreditCardScreen.react",
    "BillingPTTUtils",
    "BillingWizardDisplayState",
    "BillingWizardRootUPLogger",
    "enumUtils",
    "pm_capability_PaymentMethodUsabilityIntent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(a)) || this),
            (t.name = "add_credit_card_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t,
                n = e.country,
                a = e.currency,
                i = e.paymentAccountID,
                l = e.pmCapabilityPaymentIntent;
              return {
                country: n != null ? n : null,
                currency: a != null ? a : null,
                intent:
                  (t = o("enumUtils").enumValueToKey(
                    l,
                    r("pm_capability_PaymentMethodUsabilityIntent"),
                  )) != null
                    ? t
                    : null,
                paymentAccountID: i,
              };
            }),
            (t.query = o("BillingAddCreditCardScreen.react").query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onLoaded = function (t) {
            var e = t.isEntrypointWizard;
            e === !0 && o("BillingPTTUtils").init();
          }),
          (n.onDisplay = function (t, n) {
            var e = function (t, r, o, a, i, l, s, u, c, d, m, p, _) {
                return n("onNext", {
                  businessPaymentAccountID: m,
                  clientInfo: t,
                  country: r,
                  creditCard: o,
                  fbinEntity: a,
                  hasFunds: i,
                  inCountrySpoofingExperiment: p,
                  makePrimaryCheckbox: d,
                  paymentType: l,
                  productType: s,
                  recurring: u,
                  showAutomaticBillingContent: c,
                  skipCvvForEeaSave: _,
                });
              },
              a = function () {
                return n("onClose");
              },
              i = function () {
                return (
                  r("BillingWizardRootUPLogger").logClickEvent(
                    "submit_button",
                    { cta_text: "Change Business Location" },
                  ),
                  n("onChangeBusinessLocation")
                );
              };
            return s.jsx(
              o("BillingAddCreditCardScreen.react").BillingAddCreditCardScreen,
              babelHelpers.extends({}, t, {
                onChangeBusinessLocation: i,
                onClose: a,
                onSubmitCard: e,
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
