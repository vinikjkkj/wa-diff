__d(
  "BillingShouldCombineSaveAndPayState",
  [
    "BillingBacktestShippingUtils",
    "BillingCVCORiskRestrictionUtils",
    "BillingShouldCombineSaveAndPayStateQuery.graphql",
    "BillingWizardDecisionStateWithoutMutation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("BillingShouldCombineSaveAndPayStateQuery.graphql")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "should_combine_save_and_pay_state_decision"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = s),
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
                  a,
                  i = t.gk,
                  l = t.qe,
                  u = t.relay,
                  c = e.country,
                  d = e.paymentAccountID,
                  m = e.paymentIntent,
                  p = e.pmCapabilityPaymentIntent,
                  _ = yield u.fetchQuery(
                    {
                      query: s,
                      queryName: s.params.name,
                      variables: { paymentAccountID: d },
                    },
                    {},
                    void 0,
                    !0,
                    t,
                    this.name,
                  ),
                  f =
                    _ == null || (n = _.payment_account) == null
                      ? void 0
                      : n.billable_account,
                  g =
                    (r = f == null ? void 0 : f.has_cvco_restriction) != null
                      ? r
                      : !1,
                  h =
                    (f == null ? void 0 : f.__typename) === "AdAccount" &&
                    !((a = f == null ? void 0 : f.is_using_ec) != null && a),
                  y = p === 3,
                  C = o(
                    "BillingBacktestShippingUtils",
                  ).getEvaluateShippingGKWithLoggingQE(
                    i.MFT_O1_PREV_SHIPPING_GK_2026Q1_AD_ACCOUNT_ID,
                    l.save_add_funds_combined_india__logging.dummy_param,
                  ),
                  b = y && c === "IN" && C(),
                  v =
                    o(
                      "BillingCVCORiskRestrictionUtils",
                    ).shouldExcludeCVCOFromSaveAndAddFunds() && g,
                  S =
                    y &&
                    c !== "IN" &&
                    !v &&
                    ((yield i.ADD_FUNDS_NEW_CARD_GLOBAL.get()) ||
                      l.save_and_add_funds_combined_global.enable.read()),
                  R = m === "PAY_NOW" || m === "SETTLE",
                  L =
                    R &&
                    c === "IN" &&
                    h &&
                    i.SAVE_AND_PAY_NOW_INDIA_DOG_FOODING.read();
                return b || S || L
                  ? {
                      event: "onSaveAndPay",
                      newProps: babelHelpers.extends({}, e, {
                        saveCardAndPay: !0,
                      }),
                    }
                  : { event: "onSaveOnly", newProps: e };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(
        o("BillingWizardDecisionStateWithoutMutation")
          .DecisionStateWithoutMutation,
      );
    l.default = u;
  },
  98,
);
