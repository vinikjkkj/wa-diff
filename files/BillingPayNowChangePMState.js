__d(
  "BillingPayNowChangePMState",
  ["BillingPayNowChangePMScreen.react", "BillingWizardDisplayState", "react"],
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
            (t.name = "pay_now_change_pm_state_display"),
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
            (t.query = o("BillingPayNowChangePMScreen.react").query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t, r, o) {
                return n("onNext", {
                  paymentAmount: o,
                  paymentMethodID: t,
                  paymentMethodType: r,
                });
              },
              r = function () {
                return n("onAddNew", {});
              },
              a = this.events.onAddNew == null;
            return s.jsx(
              o("BillingPayNowChangePMScreen.react")
                .BillingPayNowChangePMScreen,
              babelHelpers.extends({}, t, {
                addNewPMMode: a,
                onAddNew: r,
                onSubmitPaymentMethod: e,
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
