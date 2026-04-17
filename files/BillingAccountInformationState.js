__d(
  "BillingAccountInformationState",
  [
    "BillingAccountInformationScreen.react",
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
            (t.name = "account_information_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o("BillingAccountInformationScreen.react").query),
            (t.fetchPolicy = "network-only"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t, r, o, a, i, l) {
                return o || r
                  ? n("onAccountInfoChanged", {
                      defaultValues: i,
                      paymentAccountID: t,
                      product: l,
                      updatePaymentAccountBusinessInfo: o,
                      values: a,
                    })
                  : n("onNext");
              },
              r = function () {
                return n("onNext");
              };
            return s.jsx(
              o("BillingAccountInformationScreen.react")
                .BillingAccountInformationScreen,
              babelHelpers.extends({}, t, { onNext: r, onSubmit: e }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
