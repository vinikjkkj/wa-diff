__d(
  "BillingDecideShouldUsePaymentAccountAddFundsState",
  [
    "BillingDecideShouldUsePaymentAccountAddFundsStateQuery.graphql",
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
              "BillingDecideShouldUsePaymentAccountAddFundsStateQuery.graphql",
            )),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name =
              "decide_should_use_payment_account_add_funds_state_decision"),
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
                  o,
                  a = t.relay.fetchQuery,
                  i = e.paymentAccountID,
                  l = e.paymentMethodType,
                  u = e.sharedStoredBalanceID,
                  c = yield a({
                    query: s,
                    queryName: s.params.name,
                    variables: { paymentAccountID: i },
                  });
                return u != null &&
                  ((n = c.payment_account) == null
                    ? void 0
                    : n.allow_biz_stored_balance) === !0
                  ? { event: "onPaymentAccountAddFunds", newProps: e }
                  : ((r = c.payment_account) == null
                        ? void 0
                        : r.allow_payment_account_add_funds) === !0 ||
                      ((o = c.payment_account) == null ||
                      (o = o.billable_account) == null
                        ? void 0
                        : o.application_type) === "WHATSAPP_SMB"
                    ? { event: "onPaymentAccountAddFunds", newProps: e }
                    : l != null && l === "EARNINGS_PAYOUT"
                      ? { event: "onPaymentAccountAddFunds", newProps: e }
                      : { event: "onBillableAccountAddFunds", newProps: e };
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
