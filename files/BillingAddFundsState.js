__d(
  "BillingAddFundsState",
  [
    "fbt",
    "BillingAddFundsStateMutation.graphql",
    "BillingAddFundsStateQuery.graphql",
    "BillingAddFundsUtils",
    "BillingCurrencyAmount",
    "BillingError",
    "BillingExternalSitePaymentStepUtils",
    "BillingNativeOTPPaymentStepUtils",
    "BillingPTTUtils",
    "BillingPaymentModeUtils",
    "BillingRiskVerificationConstants",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardRootUPLogger",
    "MetaConfig",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e !== void 0 ? e : (e = n("BillingAddFundsStateQuery.graphql")),
      d = u !== void 0 ? u : (u = n("BillingAddFundsStateMutation.graphql"));
    function m(e) {
      return e === "NEW_DIRECT_DEBIT" || e === "DIRECT_DEBIT"
        ? "DIRECT_DEBIT"
        : "CC";
    }
    var p = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.name = "add_funds_state_decision"),
          (t.query = c),
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
              var n,
                a = t.gk,
                i = t.qe,
                l = t.relay,
                u = e.creditCard,
                p = e.paymentAccountID,
                _ = e.paymentMethodID,
                f = e.paymentMethodType,
                g = e.supportsRecurring,
                h = e.threeDSClientInfo,
                y = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                  e.paymentAmount,
                );
              if (y == null)
                return {
                  event: "onFailure",
                  newProps: babelHelpers.extends({}, e, {
                    creditCard: void 0,
                    status: {
                      body: s._(
                        /*BTDS*/ "We weren't able to add funds to your account, please try again.",
                      ),
                      headline: s._(/*BTDS*/ "Couldn't Add Funds"),
                      type: "ERROR",
                    },
                  }),
                };
              var C = y.toString(),
                b =
                  ((u == null ? void 0 : u.paymentMethodID) === _ &&
                    (u == null || (n = u.securityCode) == null
                      ? void 0
                      : n.getValue_DO_NOT_USE())) ||
                  null,
                v = {
                  billable_account_payment_legacy_account_id: p,
                  client_info: h,
                  credential_id: _ == null ? "0" : _,
                  csc: { sensitive_string_value: b != null ? b : "" },
                  payment_amount: y.asGraphQLInput(),
                  payment_credential_type: m(f),
                  upl_logging_data: babelHelpers.extends(
                    {},
                    r("BillingWizardRootUPLogger").getLoggingData(
                      d.params.name,
                    ),
                  ),
                };
              b == null && (v.csc = void 0);
              var S = yield l.fetchQuery(
                  {
                    query: c,
                    queryName: c.params.name,
                    variables: { paymentAccountID: p },
                  },
                  {},
                  void 0,
                  !0,
                  t,
                  this.name,
                ),
                R = l.commitSecureMutation,
                L = yield o("BillingPTTUtils").generatePTTWithRequirement(
                  function () {
                    return o("BillingAddFundsUtils").generatePttForAddFunds(
                      p,
                      y,
                      _,
                      "add_funds",
                      b,
                      i,
                      a,
                      l,
                    );
                  },
                  {
                    errorMessage:
                      "BillingAddFundsState failed to generate a platform trust token",
                    getIsPTTRequired: function () {
                      return (
                        (f == null || f.includes("CREDIT_CARD")) &&
                        r("MetaConfig")._("427")
                      );
                    },
                    sourceState: "add_funds_state_decision",
                  },
                );
              L != null &&
                ((v.platform_trust_token = L),
                (v.csc =
                  b == null ? void 0 : { sensitive_string_value: "$e2ee" }),
                (R = l.commitMutation));
              var E =
                yield i.attempt_to_fix_stale_wizard_queries_univser.enabled.get();
              try {
                var k, I, T, D, x, $, P, N, M, w, A;
                r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
                  payment_amount:
                    y == null ? void 0 : y.getRawAmountForLoggingOnly(),
                });
                var F = yield R(
                    {
                      mutation: d,
                      variables: {
                        includeCreateNewFromOldFragment: E,
                        input: v,
                      },
                    },
                    {
                      event_data: babelHelpers.extends({}, y.asGraphQLInput(), {
                        ptt_nonnull: L != null ? "true" : "false",
                      }),
                    },
                  ),
                  O =
                    (k =
                      (I = F.billable_account_prepay_add_funds) == null ||
                      (I = I.billable_account) == null
                        ? void 0
                        : I.payment_modes) != null
                      ? k
                      : [],
                  B =
                    ((T = F.billable_account_prepay_add_funds) == null ||
                    (T = T.billable_account) == null ||
                    (T = T.auto_reload_info) == null
                      ? void 0
                      : T.auto_reload_status) === "ENABLED",
                  W =
                    g === !0 && O.includes("SUPPORTS_AUTO_RELOAD") && B !== !0,
                  q = o("BillingPaymentModeUtils").isHybridAccount(O),
                  U =
                    (D = F.billable_account_prepay_add_funds) == null
                      ? void 0
                      : D.risk_verification_info,
                  V = o("BillingAddFundsUtils").buildRiskVerificationProps(
                    U,
                    e.paymentMethodID,
                    _,
                  );
                if (V != null)
                  return {
                    event: "onRiskVerificationRequired",
                    newProps: babelHelpers.extends({}, e, V),
                  };
                var H =
                  ((x = F.billable_account_prepay_add_funds) == null
                    ? void 0
                    : x.is_cvco_unverifiable) === !0;
                if (H)
                  return (
                    r("BillingWizardRootUPLogger").logEvent({
                      event_action: "check",
                      event_result: "completed",
                      event_side: "client",
                      extra_data: {
                        credential_id: _ != null ? _ : "",
                        result: "unverifiable",
                      },
                      target_name: "add_funds_cvco_unverifiable",
                    }),
                    {
                      event: "onCvcoUnverifiable",
                      newProps: babelHelpers.extends({}, e, {
                        creditCard: void 0,
                        status: {
                          body: r(
                            "BillingRiskVerificationConstants",
                          ).sdcUnverifiableStatusBody(null),
                          headline: r("BillingRiskVerificationConstants")
                            .sdcUnverifiableStatusHeadline,
                          type: "ERROR",
                        },
                      }),
                    }
                  );
                var G =
                  ($ = F.billable_account_prepay_add_funds) == null
                    ? void 0
                    : $.next_action;
                if (
                  (G == null ? void 0 : G.__typename) ===
                  "ExternalSitePaymentStep"
                ) {
                  var z,
                    j = o(
                      "BillingExternalSitePaymentStepUtils",
                    ).parseExternalSiteStep(
                      (z = F.billable_account_prepay_add_funds) == null
                        ? void 0
                        : z.next_action,
                    ),
                    K = j.authenticateChargeParams,
                    Q = j.event,
                    X = j.paymentStatusEntID;
                  return {
                    event: Q,
                    newProps: babelHelpers.extends({}, e, {
                      authenticateChargeParams: K,
                      creditCard: void 0,
                      paymentStatusEntID: X,
                      showAutoReloadOption: W,
                    }),
                  };
                } else if (
                  (G == null ? void 0 : G.__typename) === "NativeOTPPaymentStep"
                ) {
                  var Y,
                    J = o(
                      "BillingNativeOTPPaymentStepUtils",
                    ).parseNativeOTPStep(
                      (Y = F.billable_account_prepay_add_funds) == null
                        ? void 0
                        : Y.next_action,
                    ),
                    Z = J.authenticateChargeParams,
                    ee = J.cardAssociation,
                    te = J.cardAssociationIcon,
                    ne = J.event,
                    re = J.externalRefID,
                    oe = J.indiaCardIssuer,
                    ae = J.issuerIcon,
                    ie = J.paymentStatusEntID;
                  return {
                    event: ne,
                    newProps: babelHelpers.extends({}, e, {
                      authenticateChargeParams: Z,
                      cardAssociation: ee,
                      cardAssociationIcon: te,
                      creditCard: void 0,
                      externalRefID: re,
                      indiaCardIssuer: oe,
                      issuerIcon: ae,
                      paymentStatusEntID: ie,
                      showAutoReloadOption: W,
                    }),
                  };
                } else if (
                  (G == null ? void 0 : G.__typename) ===
                  "AwaitAsyncPaymentStep"
                ) {
                  var le = G.async_payment_status_ent_id;
                  return {
                    event: "onAwaitAsyncPayment",
                    newProps: babelHelpers.extends({}, e, {
                      creditCard: void 0,
                      paymentStatusEntID: le,
                      showAutoReloadOption: W,
                    }),
                  };
                }
                var se = o(
                    "BillingAddFundsUtils",
                  ).getShouldUpdateSpanishOrPortuguese(a, i),
                  ue = o(
                    "BillingAddFundsUtils",
                  ).getShouldUpdateSpanishOrPortuguesePostpayPhaseTwo(a, i),
                  ce =
                    (P = o(
                      "BillingCurrencyAmount",
                    ).getFromPECurrencyAmountFragment(
                      S == null ||
                        (N = S.payment_account) == null ||
                        (N = N.billable_account) == null
                        ? void 0
                        : N.prepay_balance,
                    )) == null
                      ? void 0
                      : P.add(y),
                  de = se()
                    ? s._(
                        /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                        [
                          s._param(
                            "total prepay balance available to use",
                            (M = ce == null ? void 0 : ce.toString()) != null
                              ? M
                              : "0",
                          ),
                        ],
                      )
                    : ue()
                      ? s._(
                          /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                          [
                            s._param(
                              "total prepay balance available to use",
                              (w = ce == null ? void 0 : ce.toString()) != null
                                ? w
                                : "0",
                            ),
                          ],
                        )
                      : s._(
                          /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                          [
                            s._param(
                              "total prepay balance available to use",
                              (A = ce == null ? void 0 : ce.toString()) != null
                                ? A
                                : "0",
                            ),
                          ],
                        ),
                  me = s._(/*BTDS*/ "{amount user added} will be added", [
                    s._param("amount user added", C),
                  ]),
                  pe;
                return (
                  q && (pe = s._(/*BTDS*/ "Funds added")),
                  {
                    event: W ? "onSuccessWithAutoReloadOption" : "onSuccess",
                    newProps: babelHelpers.extends({}, e, {
                      creditCard: void 0,
                      showAutoReloadOption: W,
                      status: {
                        body: de,
                        headline: me,
                        title: pe,
                        type: "SUCCESS",
                      },
                    }),
                  }
                );
              } catch (t) {
                var _e,
                  fe,
                  ge,
                  he = r("getErrorSafe")(t),
                  ye =
                    he instanceof r("BillingError")
                      ? he
                      : new (r("BillingError"))(
                          he.message,
                          "client side mutation failure",
                          {
                            event_action: "mutation",
                            event_result: "failure",
                            event_side: "client_side",
                          },
                        ),
                  Ce = s._(
                    /*BTDS*/ "We weren't able to add funds to your account, please try again.",
                  ),
                  be = s._(/*BTDS*/ "Couldn't Add Funds"),
                  ve = (_e = ye.description) != null ? _e : Ce,
                  Se = (fe = ye.summary) != null ? fe : be,
                  Re =
                    ye.description != null
                      ? "server_description"
                      : "per_state_default";
                return (
                  r("BillingWizardRootUPLogger").logBillingPayloadError(
                    ye.type,
                    ye.errorPayload,
                    {
                      content_source: Re,
                      displayed_body: String(ve),
                      displayed_headline: String(Se),
                      error_code: String(
                        (ge = ye.errorPayload.exception_code) != null ? ge : "",
                      ),
                      source_state: this.name,
                    },
                  ),
                  {
                    event: "onFailure",
                    newProps: babelHelpers.extends({}, e, {
                      creditCard: void 0,
                      errorCode: ye.errorPayload.exception_code,
                      status: { body: ve, headline: Se, type: "ERROR" },
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
