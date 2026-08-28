__d(
  "BillingAddFundsUsingRecurringLPMCredentialState",
  [
    "fbt",
    "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery.graphql",
    "BillingAddFundsUsingRecurringLPMCredentialStateMutation.graphql",
    "BillingCurrencyAmount",
    "BillingError",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardRootUPLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = 3212066,
      d =
        e !== void 0
          ? e
          : (e = n(
              "BillingAddFundsUsingRecurringLPMCredentialStateInitQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n(
              "BillingAddFundsUsingRecurringLPMCredentialStateMutation.graphql",
            )),
      p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name =
              "add_funds_using_recurring_lpm_credential_state_decision"),
            (t.query = d),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.onDecide = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = t.relay,
                  a = e.paymentAccountID,
                  i = e.paymentMethodID,
                  l = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                    e.paymentAmount,
                  );
                if (i == null)
                  throw new (r("BillingError"))(
                    "BillingAddFundsUsingRecurringLPMCredentialState:onDecide was called without a paymentMethodID",
                    "required parameter is missing or invalid",
                    {
                      event_action: "enter",
                      event_result: "failure",
                      event_side: "client_side",
                    },
                    { action: "load", document_name: "billing_add_funds" },
                    "critical_error",
                  );
                if (l == null)
                  throw new (r("BillingError"))(
                    "BillingAddFundsUsingRecurringLPMCredentialState:onDecide was called without a paymentAmount",
                    "required parameter is missing or invalid",
                    {
                      event_action: "enter",
                      event_result: "failure",
                      event_side: "client_side",
                    },
                    { action: "load", document_name: "billing_add_funds" },
                    "critical_error",
                  );
                var u = l.asGraphQLInput(),
                  p = yield n.fetchQuery(
                    {
                      query: d,
                      queryName: d.params.name,
                      variables: { paymentAccountID: a },
                    },
                    {},
                    void 0,
                    !0,
                    t,
                    this.name,
                  ),
                  _ = {
                    billable_account_payment_legacy_account_id: a,
                    credential_id: i,
                    network_id: "ALTPAY",
                    payment_amount: u,
                    payment_credential_type: "ALTPAY",
                    upl_logging_data: babelHelpers.extends(
                      {},
                      r("BillingWizardRootUPLogger").getLoggingData(
                        m.params.name,
                      ),
                    ),
                  },
                  f = s._(
                    /*BTDS*/ "Try adding funds again or select a different payment method.",
                  ),
                  g = s._(/*BTDS*/ "Unable to add available funds"),
                  h = s._(/*BTDS*/ "Something went wrong");
                r("BillingWizardRootUPLogger").logMutationEvent(
                  m.params.name,
                  null,
                  {},
                  "init",
                );
                try {
                  var y,
                    C,
                    b,
                    v,
                    S,
                    R,
                    L,
                    E,
                    k,
                    I = yield n.commitMutation(
                      {
                        mutation: m,
                        mutationName: m.params.name,
                        variables: { input: _ },
                      },
                      {
                        event_data: {
                          amount: u.amount,
                          currency: u.currency,
                          type: "ALTPAY",
                        },
                      },
                      !1,
                    );
                  this.paymentID =
                    I == null || (y = I.billing_add_funds) == null
                      ? void 0
                      : y.payment_id;
                  var T =
                      I == null || (C = I.billing_add_funds) == null
                        ? void 0
                        : C.result,
                    D =
                      (b =
                        (v = o(
                          "BillingCurrencyAmount",
                        ).getFromPECurrencyAmountFragment(
                          p == null ||
                            (S = p.payment_account) == null ||
                            (S = S.billable_account) == null
                            ? void 0
                            : S.prepay_balance,
                        )) == null
                          ? void 0
                          : v.add(l)) != null
                        ? b
                        : o("BillingCurrencyAmount").createZero(
                            (R =
                              p == null ||
                              (L = p.payment_account) == null ||
                              (L = L.billable_account) == null
                                ? void 0
                                : L.currency) != null
                              ? R
                              : "USD",
                          ),
                    x =
                      (E = p.payment_account) == null
                        ? void 0
                        : E.billing_payment_methods,
                    $ =
                      x == null
                        ? void 0
                        : x.find(function (e) {
                            var t;
                            return (
                              (e == null || (t = e.credential) == null
                                ? void 0
                                : t.id) === i
                            );
                          });
                  if (
                    (r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
                      credential_id: i,
                      payment_id:
                        (k = this.paymentID) == null ? void 0 : k.toString(),
                    }),
                    r("BillingWizardRootUPLogger").logMutationEvent(
                      m.params.name,
                      null,
                      {},
                      "success",
                    ),
                    T === "COMPLETED")
                  ) {
                    var P, N, M, w;
                    return {
                      event: "onRecurringLPMSuccess",
                      newProps: babelHelpers.extends({}, e, {
                        paymentID: this.paymentID,
                        paymentMethodID: i != null ? i : "",
                        savedPMRequiresAutoReload:
                          (P =
                            $ == null || (N = $.credential) == null
                              ? void 0
                              : N.require_auto_reload) != null
                            ? P
                            : !1,
                        savedPMSupportsAutoReload:
                          (M =
                            $ == null || (w = $.credential) == null
                              ? void 0
                              : w.supports_auto_reload) != null
                            ? M
                            : !1,
                        status: {
                          body: s._(
                            /*BTDS*/ "You now have {Payment amount value} in prepaid funds.",
                            [s._param("Payment amount value", D.toString())],
                          ),
                          header: s._(/*BTDS*/ "Prepaid funds added"),
                          headline: s._(
                            /*BTDS*/ "{Payment amount value} successfully added",
                            [s._param("Payment amount value", l.toString())],
                          ),
                          type: "SUCCESS",
                        },
                      }),
                    };
                  } else
                    return {
                      event: "onError",
                      newProps: babelHelpers.extends({}, e, {
                        paymentID: this.paymentID,
                        status: {
                          body: f,
                          header: h,
                          headline: g,
                          type: "ERROR",
                        },
                      }),
                    };
                } catch (t) {
                  var A,
                    F,
                    O,
                    B =
                      t == null || (A = t.errorPayload) == null
                        ? void 0
                        : A.exception_code;
                  return (
                    r("BillingWizardRootUPLogger").logMutationEvent(
                      m.params.name,
                      { errorCode: B == null ? void 0 : B.toString() },
                      {},
                      "fail",
                    ),
                    {
                      event: "onError",
                      newProps: babelHelpers.extends({}, e, {
                        status:
                          B === c
                            ? {
                                body:
                                  (F = t == null ? void 0 : t.description) !=
                                  null
                                    ? F
                                    : f,
                                headline:
                                  (O = t == null ? void 0 : t.summary) != null
                                    ? O
                                    : g,
                                overridePrimaryButton: {
                                  href: "https://www.momo.vn/tin-tuc/thong-bao/quet-cccd-gan-chip-tren-momo-xac-thuc-tai-khoan-6872",
                                  label: s._(/*BTDS*/ "Open MoMo"),
                                },
                                title: h,
                                type: "ERROR",
                              }
                            : { body: f, headline: g, title: h, type: "ERROR" },
                      }),
                    }
                  );
                }
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
    l.default = p;
  },
  226,
);
