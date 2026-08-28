__d(
  "BillingWizardLandingState",
  [
    "BillingWizardDisplayState",
    "BillingWizardLandingScreen.react",
    "Promise",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "wizard_landing_state_display"),
            (e.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (e.query = o("BillingWizardLandingScreen.react").query),
            (e.initPaymentMethodID = null),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.onDisplay = function (t, n) {
            var e;
            this.initPaymentMethodID === null &&
              (this.initPaymentMethodID = t.paymentMethodID);
            var r = function () {
                return n("onChangeAccountInformation");
              },
              a = function () {
                return n("onChangeCountryCurrency");
              },
              i = function () {
                return n("onDone");
              },
              l = function (t, r, o, a, i, l, s, u, c, d, m) {
                var e = {
                  altpayDisplayName: i,
                  couponChecked: a,
                  newUser: d,
                  paymentIntent: m,
                  paymentMethodID: t,
                  paymentMethodType: r,
                  providerID: o,
                  recurringDefaultAuthAmount: u,
                  recurringLPMUserExperienceType: c,
                  savingRecurringLPM: l,
                  showRecurringLPMCheckbox: s,
                };
                return (
                  Object.keys(e).forEach(function (t) {
                    return e[t] === void 0 && delete e[t];
                  }),
                  n("onNext", e)
                );
              };
            return u.jsx(
              o("BillingWizardLandingScreen.react").BillingWizardLandingScreen,
              babelHelpers.extends({}, t, {
                onChangeAccountInformation: r,
                onChangeCountryCurrency: a,
                onDone: i,
                onSubmitPaymentMethod: l,
                paymentMethodID:
                  (e = this.initPaymentMethodID) != null ? e : void 0,
              }),
            );
          }),
          (a.onExit = function (r, o) {
            var t,
              a = (t = o.paymentIntent) != null ? t : "ADD_PM";
            return (e || (e = n("Promise"))).resolve({
              event: r,
              newProps: babelHelpers.extends({}, o, { paymentIntent: a }),
            });
          }),
          r
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = c;
  },
  98,
);
