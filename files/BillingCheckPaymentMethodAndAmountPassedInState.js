__d(
  "BillingCheckPaymentMethodAndAmountPassedInState",
  [
    "BillingCheckPaymentMethodAndAmountPassedInStateQuery.graphql",
    "BillingCurrencyAmount",
    "BillingWizardDecisionState",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "BillingCheckPaymentMethodAndAmountPassedInStateQuery.graphql",
            )),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name =
              "check_payment_method_and_amount_passed_in_state_decision"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.onDecide = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  r,
                  a = t.relay.fetchQuery,
                  i = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                    e.paymentAmount,
                  ),
                  l = e.isSecureBilling,
                  u = e.paymentAccountID,
                  c = e.paymentMethodID;
                if (c == null || i == null || i.isZero())
                  return { event: "onNoOrInvalidCredential", newProps: e };
                var d = yield a({
                    query: s,
                    queryName: s.params.name,
                    variables: { paymentAccountID: u },
                  }),
                  m =
                    (n =
                      (r = d.payment_account) == null
                        ? void 0
                        : r.billing_payment_methods) != null
                      ? n
                      : [],
                  p = m.some(function (e) {
                    var t, n;
                    return (
                      ((t = e.credential) == null
                        ? void 0
                        : t.credential_id) === c ||
                      ((n = e.credential) == null ? void 0 : n.id) === c
                    );
                  });
                return p
                  ? {
                      event: "onValidCredentialPassedIn",
                      newProps: babelHelpers.extends({}, e, {
                        isSecureBilling: l,
                      }),
                    }
                  : {
                      event: "onNoOrInvalidCredential",
                      newProps: babelHelpers.extends({}, e, {
                        paymentMethodID: void 0,
                      }),
                    };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(o("BillingWizardDecisionState").DecisionState);
    l.default = u;
  },
  98,
);
