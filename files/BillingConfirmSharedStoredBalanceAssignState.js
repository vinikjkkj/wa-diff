__d(
  "BillingConfirmSharedStoredBalanceAssignState",
  [
    "BillingConfirmSharedStoredBalanceAssignScreen.react",
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
            (t.name = "confirm_shared_stored_balance_assign_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.billableAccountPaymentAccountID,
                n = e.paymentAccountID,
                r = e.paymentMethodID;
              return {
                paymentAccountID: t != null ? t : n,
                paymentMethodID: r,
              };
            }),
            (t.query = o(
              "BillingConfirmSharedStoredBalanceAssignScreen.react",
            ).query),
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
              return n("onNext", { status: t });
            };
            return s.jsx(
              o("BillingConfirmSharedStoredBalanceAssignScreen.react")
                .BillingConfirmSharedStoredBalanceAssignScreen,
              babelHelpers.extends({}, t, { onSubmit: e }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
