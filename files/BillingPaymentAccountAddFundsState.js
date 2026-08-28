__d(
  "BillingPaymentAccountAddFundsState",
  [
    "fbt",
    "BillingAddFundsUtils",
    "BillingCurrencyAmount",
    "BillingError",
    "BillingExternalSitePaymentStepUtils",
    "BillingNativeOTPPaymentStepUtils",
    "BillingPTTUtils",
    "BillingPaymentAccountAddFundsStateMutation.graphql",
    "BillingPaymentAccountAddFundsStateQuery.graphql",
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
      c =
        e !== void 0
          ? e
          : (e = n("BillingPaymentAccountAddFundsStateQuery.graphql")),
      d =
        u !== void 0
          ? u
          : (u = n("BillingPaymentAccountAddFundsStateMutation.graphql")),
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "payment_account_add_funds_state_decision"),
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
                  m = e.paymentAccountID,
                  p = e.paymentMethodID,
                  _ = e.paymentMethodType,
                  f = e.sharedStoredBalanceID,
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
                    ((u == null ? void 0 : u.paymentMethodID) === p &&
                      (u == null || (n = u.securityCode) == null
                        ? void 0
                        : n.getValue_DO_NOT_USE())) ||
                    null,
                  v = {
                    client_info: h,
                    csc: { sensitive_string_value: b != null ? b : "" },
                    payment_amount: y.asGraphQLInput(),
                    payment_credential_type:
                      _ === "EARNINGS_PAYOUT" ? "EARNINGS_PAYOUT" : "CC",
                    payment_legacy_account_id: m,
                    payment_method_id: p == null ? "0" : p,
                    stored_balance_id: f,
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
                      variables: { paymentAccountID: m },
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
                        m,
                        y,
                        p,
                        "payment_account_add_funds",
                        b,
                        i,
                        a,
                        l,
                      );
                    },
                    {
                      errorMessage:
                        "BillingPaymentAccountAddFundsState failed to generate a platform trust token",
                      getIsPTTRequired: function () {
                        return (
                          (_ == null || _.includes("CREDIT_CARD")) &&
                          r("MetaConfig")._("427")
                        );
                      },
                      sourceState: "payment_account_add_funds_state_decision",
                    },
                  );
                L != null &&
                  ((v.platform_trust_token = L),
                  (v.csc =
                    b == null ? void 0 : { sensitive_string_value: "$e2ee" }),
                  (R = l.commitMutation));
                try {
                  var E, k, I, T, D, x, $, P, N;
                  r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
                    payment_amount:
                      y == null ? void 0 : y.getRawAmountForLoggingOnly(),
                  });
                  var M = yield R(
                      { mutation: d, variables: { input: v } },
                      {
                        event_data: babelHelpers.extends(
                          {},
                          y.asGraphQLInput(),
                          { ptt_nonnull: L != null ? "true" : "false" },
                        ),
                      },
                    ),
                    w =
                      (E =
                        (k = M.payment_account_add_funds) == null ||
                        (k = k.billable_account) == null
                          ? void 0
                          : k.payment_modes) != null
                        ? E
                        : [],
                    A =
                      ((I = M.payment_account_add_funds) == null ||
                      (I = I.billable_account) == null ||
                      (I = I.auto_reload_info) == null
                        ? void 0
                        : I.auto_reload_status) === "ENABLED",
                    F =
                      g === !0 &&
                      o("BillingPaymentModeUtils").supportsAutoReload(w) &&
                      !A,
                    O = o("BillingPaymentModeUtils").isHybridAccount(w),
                    B =
                      (T = M.payment_account_add_funds) == null
                        ? void 0
                        : T.risk_verification_info,
                    W = o("BillingAddFundsUtils").buildRiskVerificationProps(
                      B,
                      e.paymentMethodID,
                      p,
                    );
                  if (W != null)
                    return {
                      event: "onRiskVerificationRequired",
                      newProps: babelHelpers.extends({}, e, W),
                    };
                  var q =
                    ((D = M.payment_account_add_funds) == null
                      ? void 0
                      : D.is_cvco_unverifiable) === !0;
                  if (q)
                    return (
                      r("BillingWizardRootUPLogger").logEvent({
                        event_action: "check",
                        event_result: "completed",
                        event_side: "client",
                        extra_data: {
                          credential_id: p != null ? p : "",
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
                  var U =
                    (x = M.payment_account_add_funds) == null
                      ? void 0
                      : x.next_action;
                  if (
                    (U == null ? void 0 : U.__typename) ===
                    "ExternalSitePaymentStep"
                  ) {
                    var V = o(
                        "BillingExternalSitePaymentStepUtils",
                      ).parseExternalSiteStep(U),
                      H = V.authenticateChargeParams,
                      G = V.event,
                      z = V.paymentStatusEntID;
                    return {
                      event: G,
                      newProps: babelHelpers.extends({}, e, {
                        authenticateChargeParams: H,
                        creditCard: void 0,
                        paymentStatusEntID: z,
                        showAutoReloadOption: F,
                      }),
                    };
                  } else if (
                    (U == null ? void 0 : U.__typename) ===
                    "NativeOTPPaymentStep"
                  ) {
                    var j = o(
                        "BillingNativeOTPPaymentStepUtils",
                      ).parseNativeOTPStep(U),
                      K = j.authenticateChargeParams,
                      Q = j.cardAssociation,
                      X = j.cardAssociationIcon,
                      Y = j.event,
                      J = j.externalRefID,
                      Z = j.indiaCardIssuer,
                      ee = j.issuerIcon,
                      te = j.paymentStatusEntID;
                    return {
                      event: Y,
                      newProps: babelHelpers.extends({}, e, {
                        authenticateChargeParams: K,
                        cardAssociation: Q,
                        cardAssociationIcon: X,
                        creditCard: void 0,
                        externalRefID: J,
                        indiaCardIssuer: Z,
                        issuerIcon: ee,
                        paymentStatusEntID: te,
                        showAutoReloadOption: F,
                      }),
                    };
                  } else if (
                    (U == null ? void 0 : U.__typename) ===
                    "AwaitAsyncPaymentStep"
                  ) {
                    var ne = U.async_payment_status_ent_id;
                    return {
                      event: "onAwaitAsyncPayment",
                      newProps: babelHelpers.extends({}, e, {
                        creditCard: void 0,
                        paymentStatusEntID: ne,
                        showAutoReloadOption: F,
                      }),
                    };
                  }
                  var re =
                      ($ = o(
                        "BillingCurrencyAmount",
                      ).getFromPECurrencyAmountFragment(
                        S == null ||
                          (P = S.payment_account) == null ||
                          (P = P.billable_account) == null
                          ? void 0
                          : P.prepay_balance,
                      )) == null
                        ? void 0
                        : $.add(y),
                    oe =
                      (M == null ||
                      (N = M.payment_account_add_funds) == null ||
                      (N = N.billable_account) == null
                        ? void 0
                        : N.payment_item_type) === "MOR_WHATSAPP_SMB_TOPUP";
                  if (oe) {
                    var ae,
                      ie = s._(
                        /*BTDS*/ "You now have {total prepay balance available to use} available for your marketing messages.",
                        [
                          s._param(
                            "total prepay balance available to use",
                            (ae = re == null ? void 0 : re.toString()) != null
                              ? ae
                              : "0",
                          ),
                        ],
                      ),
                      le = s._(
                        /*BTDS*/ "{amount user added} successfully added",
                        [s._param("amount user added", C)],
                      );
                    return {
                      event: "onSuccess",
                      newProps: babelHelpers.extends({}, e, {
                        status: { body: ie, headline: le, type: "SUCCESS" },
                      }),
                    };
                  }
                  var se = o(
                      "BillingAddFundsUtils",
                    ).getShouldUpdateSpanishOrPortuguese(a, i),
                    ue = se()
                      ? s._(
                          /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                          [
                            s._param(
                              "total prepay balance available to use",
                              re == null ? void 0 : re.toString(),
                            ),
                          ],
                        )
                      : s._(
                          /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                          [
                            s._param(
                              "total prepay balance available to use",
                              re == null ? void 0 : re.toString(),
                            ),
                          ],
                        ),
                    ce = s._(/*BTDS*/ "{amount user added} will be added", [
                      s._param("amount user added", C),
                    ]),
                    de;
                  return (
                    O && (de = s._(/*BTDS*/ "Funds added")),
                    {
                      event: F ? "onSuccessWithAutoReloadOption" : "onSuccess",
                      newProps: babelHelpers.extends({}, e, {
                        creditCard: void 0,
                        showAutoReloadOption: F,
                        status: {
                          body: ue,
                          headline: ce,
                          title: de,
                          type: "SUCCESS",
                        },
                      }),
                    }
                  );
                } catch (t) {
                  var me,
                    pe,
                    _e,
                    fe = r("getErrorSafe")(t),
                    ge =
                      fe instanceof r("BillingError")
                        ? fe
                        : new (r("BillingError"))(
                            fe.message,
                            "client side mutation failure",
                            {
                              event_action: "mutation",
                              event_result: "failure",
                              event_side: "client_side",
                            },
                          ),
                    he = s._(
                      /*BTDS*/ "We weren't able to add funds to your account, please try again.",
                    ),
                    ye = s._(/*BTDS*/ "Couldn't Add Funds"),
                    Ce = (me = ge.description) != null ? me : he,
                    be = (pe = ge.summary) != null ? pe : ye,
                    ve =
                      ge.description != null
                        ? "server_description"
                        : "per_state_default";
                  return (
                    r("BillingWizardRootUPLogger").logBillingPayloadError(
                      ge.type,
                      ge.errorPayload,
                      {
                        content_source: ve,
                        displayed_body: String(Ce),
                        displayed_headline: String(be),
                        error_code: String(
                          (_e = ge.errorPayload.exception_code) != null
                            ? _e
                            : "",
                        ),
                        source_state: this.name,
                      },
                    ),
                    {
                      event: "onFailure",
                      newProps: babelHelpers.extends({}, e, {
                        creditCard: void 0,
                        errorCode: ge.errorPayload.exception_code,
                        status: { body: Ce, headline: be, type: "ERROR" },
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
    l.default = m;
  },
  226,
);
