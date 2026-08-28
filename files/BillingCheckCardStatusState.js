__d(
  "BillingCheckCardStatusState",
  [
    "fbt",
    "BillingCheckCardStatusStateBinInfoFragment_binInfo.graphql",
    "BillingCheckCardStatusStateQuery.graphql",
    "BillingCreditCardBinInfoUtils",
    "BillingError",
    "BillingPaymentMethodDisplay",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardRootUPLogger",
    "RelayHooks",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c =
        e !== void 0
          ? e
          : (e = n(
              "BillingCheckCardStatusStateBinInfoFragment_binInfo.graphql",
            )),
      d =
        u !== void 0 ? u : (u = n("BillingCheckCardStatusStateQuery.graphql")),
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "check_card_status_state_decision"),
            (t.query = d),
            (t.mapPropsToQuery = function (e) {
              var t = e.country,
                n = e.paymentAccountID,
                r = e.paymentIntent,
                o = e.paymentMethodID,
                a = e.pmCapabilityPaymentIntent,
                i = "ADD_PM";
              return (
                (r === "ADD_FUNDS" || a === 3) && (i = "SB_FUNDING"),
                {
                  country: t != null ? t : null,
                  intent: i,
                  paymentAccountID: n,
                  paymentMethodID:
                    o != null
                      ? o
                      : "unused value to satisfy graphQL type checks",
                  useBinInfosFromPaymentAccount: !0,
                }
              );
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
                var n,
                  a,
                  i,
                  l,
                  u,
                  m,
                  p,
                  _ = t.preloadedStates,
                  f = t.relay.fetchQuery,
                  g = e.country,
                  h = e.newUser,
                  y = e.paymentAccountID,
                  C = e.paymentIntent,
                  b = e.paymentMethodID,
                  v = e.paymentMethodType,
                  S = e.pmCapabilityPaymentIntent,
                  R = { event_action: "parse", event_side: "client_side" };
                if (b == null)
                  throw new (r("BillingError"))(
                    "BillingCheckCardStatusState :onDecide missing required param paymentMethodID",
                    "required parameter is missing or invalid",
                    babelHelpers.extends({}, R, { event_result: "failure" }),
                    {
                      action: "verify",
                      document_name: "check_card_requirements",
                    },
                    "critical_error",
                  );
                var L = {
                  event_action: "check",
                  event_result: "completed",
                  event_side: "client",
                  target_name: this.name,
                };
                if (S === 10)
                  return (
                    r("BillingWizardRootUPLogger").logEvent(
                      babelHelpers.extends({}, L, {
                        extra_data: {
                          flow: "mv4b_free_trial",
                          result: "needs_verification",
                        },
                      }),
                    ),
                    { event: "needs_verification", newProps: e }
                  );
                var E = "ADD_PM";
                (C === "ADD_FUNDS" || S === 3) && (E = "SB_FUNDING");
                var k = (n = _.get(this.name)) == null ? void 0 : n.results,
                  I = o(
                    "BillingCreditCardBinInfoUtils",
                  ).filterBillingPaymentMethodsByCredentialID(
                    (a = k) == null || (a = a.payment_account) == null
                      ? void 0
                      : a.billing_payment_methods,
                    b,
                  ),
                  T,
                  D;
                if (this.shouldRefetchQuery(I == null, g, y, E, _)) {
                  var x, $, P;
                  ((k = yield f({
                    query: d,
                    queryName: d.params.name,
                    variables: {
                      country: g,
                      intent: E,
                      paymentAccountID: y,
                      paymentMethodID: b,
                      useBinInfosFromPaymentAccount: !1,
                    },
                  })),
                    (T = (x = k) == null ? void 0 : x.node),
                    (D =
                      ($ = o("RelayHooks").readInlineData(
                        c,
                        (P = k) == null || (P = P.node) == null
                          ? void 0
                          : P.bin_info,
                      )) == null
                        ? void 0
                        : $.bin_info));
                } else {
                  var N, M;
                  ((T = I == null ? void 0 : I.credential),
                    (D =
                      (N = o("RelayHooks").readInlineData(
                        c,
                        I == null || (M = I.credential) == null
                          ? void 0
                          : M.bin_info,
                      )) == null
                        ? void 0
                        : N.bin_info),
                    yield this.maybePrefetchValidationDebugLogging(
                      e,
                      t,
                      d,
                      d.params.name,
                    ));
                }
                if (
                  ((i = T) == null ? void 0 : i.__typename) !==
                  "ExternalCreditCard"
                )
                  return { event: "supported", newProps: e };
                var w = ((l = D) == null ? void 0 : l.is_supported) === !0,
                  A =
                    (u = k) == null || (u = u.payment_account) == null
                      ? void 0
                      : u.billable_account,
                  F =
                    ((m = k) == null || (m = m.payment_account) == null
                      ? void 0
                      : m.__typename) === "BusinessPaymentAccount" && !A;
                if (!w && h !== !0 && !F) {
                  var O,
                    B,
                    W = {
                      body: s._(
                        /*BTDS*/ "{card} is not currently an accepted payment method. Please select a different payment method or add a new one.",
                        [
                          s._param(
                            "card",
                            o(
                              "BillingPaymentMethodDisplay",
                            ).getCreditCardDisplay(
                              (O = T) == null
                                ? void 0
                                : O.card_association_name,
                              (B = T) == null ? void 0 : B.last_four_digits,
                            ),
                          ),
                        ],
                      ),
                      headline: s._(/*BTDS*/ "Card Not Accepted"),
                      type: "ERROR",
                    };
                  return (
                    r("BillingWizardRootUPLogger").logEvent(
                      babelHelpers.extends({}, L, {
                        extra_data: { result: "unsupported" },
                      }),
                    ),
                    {
                      event: "unsupported",
                      newProps: babelHelpers.extends({}, e, { status: W }),
                    }
                  );
                }
                return F && g === "IN"
                  ? (r("BillingWizardRootUPLogger").logEvent(
                      babelHelpers.extends({}, L, {
                        extra_data: { result: "needs_verification" },
                      }),
                    ),
                    { event: "needs_verification", newProps: e })
                  : v === "NEW_META_PAY_CREDIT_CARD"
                    ? (r("BillingWizardRootUPLogger").logEvent(
                        babelHelpers.extends({}, L, {
                          extra_data: { result: "needs_verification" },
                        }),
                      ),
                      {
                        event: "needs_verification",
                        newProps: babelHelpers.extends({}, e),
                      })
                    : ((p = T) == null ? void 0 : p.needs_verification) ===
                          !0 || v === "NEW_CREDIT_CARD"
                      ? (r("BillingWizardRootUPLogger").logEvent(
                          babelHelpers.extends({}, L, {
                            extra_data: { result: "needs_verification" },
                          }),
                        ),
                        {
                          event: "needs_verification",
                          newProps: babelHelpers.extends({}, e, {
                            paymentMethodType: "CREDIT_CARD",
                          }),
                        })
                      : C === "TURN_ON_AUTOPAY" || S === 6
                        ? (r("BillingWizardRootUPLogger").logEvent(
                            babelHelpers.extends({}, L, {
                              extra_data: { result: "needs_verification" },
                            }),
                          ),
                          {
                            event: "needs_verification",
                            newProps: babelHelpers.extends({}, e),
                          })
                        : (r("BillingWizardRootUPLogger").logEvent(
                            babelHelpers.extends({}, L, {
                              extra_data: { result: "supported" },
                            }),
                          ),
                          { event: "supported", newProps: e });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.shouldRefetchQuery = function (t, n, r, o, a) {
            var e,
              i = (e = a.get(this.name)) == null ? void 0 : e.variables,
              l =
                (i == null ? void 0 : i.country) !== n ||
                (i == null ? void 0 : i.paymentAccountID) !== r ||
                (i == null ? void 0 : i.intent) !== o;
            return t || l;
          }),
          t
        );
      })(
        o("BillingWizardDecisionStateWithoutMutation")
          .DecisionStateWithoutMutation,
      );
    l.default = m;
  },
  226,
);
