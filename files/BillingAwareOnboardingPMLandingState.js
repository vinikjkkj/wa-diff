__d(
  "BillingAwareOnboardingPMLandingState",
  [
    "BillingAwareOnboardingPMLandingScreen.react",
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
            (t.name = "aware_onboarding_pm_landing_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o("BillingAwareOnboardingPMLandingScreen.react").query),
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
              r = function (r, o, a, i, l, s, u, c, d) {
                return n("onComplete", {
                  altpayDisplayName: d != null ? d : void 0,
                  couponChecked: o,
                  paymentAccountID: t.paymentAccountID,
                  paymentMethodID: u != null ? u : void 0,
                  paymentMethodType: r,
                  providerID: c != null ? c : void 0,
                  recurringDefaultAuthAmount: l,
                  recurringLPMUserExperienceType: s,
                  savingRecurringLPM: a,
                  showRecurringLPMCheckbox: i,
                });
              };
            return s.jsx(
              o("BillingAwareOnboardingPMLandingScreen.react")
                .BillingAwareOnboardingPMLandingScreen,
              babelHelpers.extends({}, t, { onClose: e, onSelectPM: r }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
