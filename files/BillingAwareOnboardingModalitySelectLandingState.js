__d(
  "BillingAwareOnboardingModalitySelectLandingState",
  [
    "BillingAwareOnboardingModalitySelectLandingScreen.react",
    "BillingCurrencyAmountUtils",
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
            (t.name = "aware_onboarding_modality_select_landing_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o(
              "BillingAwareOnboardingModalitySelectLandingScreen.react",
            ).query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function () {
                return n("onClose");
              },
              r = function (r, a, i, l, s, u, c, d) {
                return n("onComplete", {
                  altpayDisplayName: l != null ? l : void 0,
                  paymentAccountID: t.paymentAccountID,
                  paymentMethodID: a != null ? a : void 0,
                  paymentMethodType: r,
                  providerID: i != null ? i : void 0,
                  recurringDefaultAuthAmount:
                    c != null
                      ? o(
                          "BillingCurrencyAmountUtils",
                        ).getCurrencyAmountInputFromRaw(c.amount, c.currency)
                      : void 0,
                  recurringLPMUserExperienceType: d,
                  savingRecurringLPM: s,
                  showRecurringLPMCheckbox: u,
                });
              };
            return s.jsx(
              o("BillingAwareOnboardingModalitySelectLandingScreen.react")
                .BillingAwareOnboardingModalitySelectLandingScreen,
              babelHelpers.extends({}, t, { onClose: e, onSubmit: r }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
