__d(
  "BillingSaveCardCredentialState",
  [
    "fbt",
    "BillingCountryVerificationUtils",
    "BillingCreditCardConstants",
    "BillingCreditCardUtils",
    "BillingError",
    "BillingPaymentIconUtils.react",
    "BillingPaymentMethodDisplayUtils",
    "BillingSaveCardCredentialStateMutation.graphql",
    "BillingWizardDecisionState",
    "BillingWizardRootUPLogger",
    "MetaConfig",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 3212061,
      c =
        e !== void 0
          ? e
          : (e = n("BillingSaveCardCredentialStateMutation.graphql"));
    function d(e, t, n, o, a, i) {
      return function () {
        return e.showAutomaticBillingContent === !0
          ? e.hasFunds === !0
            ? t.MFT_USABILITY_FIXATHON_FLOW_9_1_HOLD_OUT.read()
              ? r(
                  "BillingCreditCardConstants",
                ).successBodyRecurringWithFundsUpdated()
              : t.MFT_USABILITY_FIXATHON_FLOW_10_2_HOLD_OUT.read()
                ? r(
                    "BillingCreditCardConstants",
                  ).successBodyRecurringWithFundsFourDots(o, a)
                : r("BillingCreditCardConstants").successBodyRecurringWithFunds(
                    o,
                    a,
                  )
            : t.MFT_USABILITY_FIXATHON_FLOW_10_2_HOLD_OUT.read()
              ? r("BillingCreditCardConstants").successBodyRecurringFourDots(
                  o,
                  a,
                )
              : r("BillingCreditCardConstants").successBodyRecurring(o, a)
          : i
            ? r(
                "BillingCreditCardConstants",
              ).successBodyNonRecurringInPostpayUpgrade(o, a, n)
            : r("BillingCreditCardConstants").successBody(o, a);
      };
    }
    var m = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.name = "save_credit_card_state_decision"),
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
                m,
                p,
                _,
                f,
                g = t.gk,
                h = t.qe,
                y = t.relay;
              if (!e.creditCard || e.saveCardAndPay === !0)
                return {
                  event: "onAddCardCredential",
                  newProps: babelHelpers.extends({}, e),
                };
              var C = e.businessPaymentAccountID,
                b = e.clientInfo,
                v = e.creditCard,
                S = e.hasAcknowledgedCountryMismatch,
                R = e.inCountrySpoofingExperiment,
                L = e.paymentAccountID,
                E = e.skipCvvForEeaSave,
                k = C != null && v.credentialSharability != null ? L : null,
                I = C != null && v.credentialSharability != null ? C : L,
                T = yield o(
                  "BillingCreditCardUtils",
                ).buildSaveCardCredentialInput(
                  v,
                  I,
                  (n = e.country) != null ? n : "",
                  e.currency,
                  (a = e.paymentIntent) != null ? a : "ADD_PM",
                  e.pmCapabilityPaymentIntent,
                  !1,
                  b,
                  g,
                  h,
                  y,
                  void 0,
                  E,
                  k,
                  {
                    errorMessage:
                      "BillingSaveCardCredentialState failed to generate a platform trust token",
                    getIsPTTRequired: function () {
                      return r("MetaConfig")._("494");
                    },
                    sourceState: "save_credit_card_state_decision",
                  },
                ),
                D = e.taxCountryVerificationMethod;
              if (S !== !0 && R === !0) {
                var x = yield o(
                  "BillingCountryVerificationUtils",
                ).queryTaxCountryValidationData(y, L);
                if ((x == null ? void 0 : x.status) !== "CONFIRMED")
                  if ((x == null ? void 0 : x.canUpdateTaxCountry) === !0) {
                    var $,
                      P,
                      N =
                        ($ =
                          (P = v.cardNumber) == null ? void 0 : P.getBin()) !=
                        null
                          ? $
                          : "",
                      M = T.platform_trust_token,
                      w = yield o(
                        "BillingCountryVerificationUtils",
                      ).queryBinProperties(y, I, N, M);
                    if (w !== "" && w !== e.country)
                      return {
                        event: "onResolveLocationMismatch",
                        newProps: babelHelpers.extends({}, e, { ptt: M }),
                      };
                  } else D = "SHOW_STEPUP_OPTIONS";
              }
              var A = y.commitMutation;
              if (T.platform_trust_token === "") {
                var F;
                ((A = y.commitSecureMutation),
                  r("BillingWizardRootUPLogger").logDebugEvent(
                    "BillingSaveCardCredentialState_token_proxy_fallback",
                    { country: (F = e.country) != null ? F : "" },
                  ));
              }
              var O = null;
              try {
                var B =
                  yield h.attempt_to_fix_stale_wizard_queries_univser.enabled.get();
                O = yield A(
                  {
                    mutation: c,
                    variables: {
                      getRiskVerificationInfoForAllCredentialsOnPaymentAccount:
                        !0,
                      includeCreateNewFromOldFragment: B,
                      input: T,
                      paymentAccountID: L,
                    },
                  },
                  {
                    event_data: {
                      is_ptt_empty_string:
                        T.platform_trust_token === "" ? "true" : "false",
                    },
                  },
                  !0,
                  function (e) {
                    var t, n;
                    return {
                      extra_data: {
                        credential_id:
                          e == null ||
                          (t = e.xfb_billing_save_card_credential) == null ||
                          (t = t.credit_card) == null
                            ? void 0
                            : t.credential_id,
                      },
                      payload_data: {
                        flow_milestone:
                          (e == null ||
                          (n = e.xfb_billing_save_card_credential) == null ||
                          (n = n.credit_card) == null
                            ? void 0
                            : n.credential_id) != null
                            ? "PaymentMethodAdded"
                            : void 0,
                      },
                    };
                  },
                );
              } catch (t) {
                if (!(t instanceof r("BillingError")))
                  throw (
                    r("BillingWizardRootUPLogger").logDebugEvent(
                      "BillingSaveCardCredentialState_unexpected_error",
                      {
                        error_message:
                          t instanceof Error ? t.message : String(t),
                      },
                    ),
                    t
                  );
                if (
                  (r("BillingWizardRootUPLogger").logBillingPayloadError(
                    t.type,
                    t.errorPayload,
                  ),
                  t.errorPayload.exception_code === u)
                )
                  return {
                    event: "onSelf",
                    newProps: babelHelpers.extends({}, e, {
                      creditCard: void 0,
                      status: {
                        body: t.description,
                        headline: t.summary,
                        type: "ERROR",
                      },
                    }),
                  };
                throw (
                  (t.sourceState = "save_credit_card_state_decision"),
                  (t.paymentIntent = e.paymentIntent),
                  t
                );
              }
              var W =
                  (i = O) == null ||
                  (i = i.xfb_billing_save_card_credential) == null
                    ? void 0
                    : i.credit_card,
                q = W == null ? void 0 : W.credential_id;
              if (q == null)
                throw new (r("BillingError"))(
                  "BillingSaveCardCredentialStateMutation mutation came back with no credential ID",
                  "mutation response came back with missing or invalid value",
                  {
                    event_action: "mutation",
                    event_result: "failure",
                    event_side: "client_side",
                  },
                  { action: "mutate", document_name: "save_credit_card" },
                  "critical_error",
                  { sourceState: "save_credit_card_state_decision" },
                );
              var U =
                  (l = W == null ? void 0 : W.last_four_digits) != null
                    ? l
                    : "****",
                V = W == null ? void 0 : W.card_association_name,
                H = v.credentialSharability,
                G = o("BillingPaymentMethodDisplayUtils")
                  .getPaymentMethodDisplayFromFragment(W)
                  .toString(),
                z =
                  (m = O.xfb_billing_save_card_credential) == null ||
                  (m = m.payment_account) == null ||
                  (m = m.business) == null
                    ? void 0
                    : m.name,
                j =
                  e.isNewAccountTransitionsFlow === !0 &&
                  (e.recurring === !1 ||
                    (W == null ? void 0 : W.supports_recurring) === !1),
                K = d(e, g, h, U, V, j),
                Q =
                  e.showAutomaticBillingContent === !0
                    ? g.MFT_USABILITY_FIXATHON_FLOW_10_2_HOLD_OUT.read()
                      ? r(
                          "BillingCreditCardConstants",
                        ).successHeadlineRecurringFourDots(U, V)
                      : r(
                          "BillingCreditCardConstants",
                        ).successHeadlineRecurring(U, V)
                    : j
                      ? h != null &&
                        (p = h.billing_terms_automatic_payments) != null &&
                        (p = p.use_automatic_payments) != null &&
                        p.read()
                        ? s._(/*BTDS*/ "Automatic payments not turned on")
                        : s._(/*BTDS*/ "Automatic billing not turned on")
                      : r("BillingCreditCardConstants").successHeadline,
                X =
                  H != null
                    ? {
                        body: r(
                          "BillingCreditCardConstants",
                        ).successBodyForBizCredentialSave(H, z, L),
                        headline: r(
                          "BillingCreditCardConstants",
                        ).successHeadlineForBizCredentialSave(G),
                        type: "SUCCESS",
                      }
                    : { body: K, headline: Q, type: j ? "LEARN" : "SUCCESS" },
                Y =
                  (_ = O.xfb_billing_save_card_credential) == null
                    ? void 0
                    : _.card_verification_status,
                J = o("BillingCreditCardUtils").updateCreditCardAfterSave(
                  e.creditCard,
                  q,
                  V != null ? V : void 0,
                  U,
                ),
                Z = {
                  paymentMethodID: q,
                  verification_info:
                    (f = O.xfb_billing_save_card_credential) == null
                      ? void 0
                      : f.risk_verification_info,
                },
                ee = babelHelpers.extends({}, e, {
                  creditCard: J,
                  paymentMethodID: q,
                  riskInfo: Z,
                  taxCountryVerificationMethod: D,
                });
              if (Y === "SUCCESS")
                return {
                  event: "onNext",
                  newProps: babelHelpers.extends({}, ee, {
                    paymentMethodType: "CREDIT_CARD",
                    status: X,
                  }),
                };
              if (Y === "AUTHENTICATION_REQUIRED")
                return this.handleAuthenticationRequired(O, ee, X, Y);
              var te = s._(
                  /*BTDS*/ "We weren't able to complete verification, please try again.",
                ),
                ne = s._(/*BTDS*/ "Couldn't verify card");
              throw new (r("BillingError"))(
                "BillingSaveCardCredentialStateMutation GraphQL call returned an unexpected status: " +
                  (Y != null ? Y : "NULL"),
                "mutation response came back with missing or invalid value",
                {
                  event_action: "mutation",
                  event_result: "failure",
                  event_side: "client_side",
                },
                { action: "mutate", document_name: "save_credit_card" },
                "critical_error",
                {
                  description: te.toString(),
                  sourceState: "save_credit_card_state_decision",
                  summary: ne.toString(),
                },
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.handleAuthenticationRequired = function (t, n, a, i) {
          var e,
            l,
            s =
              t == null || (e = t.xfb_billing_save_card_credential) == null
                ? void 0
                : e.card_verification,
            u = (s == null ? void 0 : s.supports_native_otp) === !0,
            c = (s == null ? void 0 : s.credential_authentication_id) != null,
            d = "iframe_3ds";
          if (
            (c ? (d = "cardinal_3ds") : u && (d = "native_otp"),
            r("BillingWizardRootUPLogger").logEvent({
              event_action: "check",
              event_result: "init",
              event_side: "client",
              extra_data: {
                activation_path: d,
                card_status_ent_id: String(
                  (l = s == null ? void 0 : s.async_card_status_ent_id) != null
                    ? l
                    : "",
                ),
                card_verification_status: i,
                supports_cardinal_3ds: String(c),
                supports_native_otp: String(u),
              },
              target_name: "auth_required",
            }),
            s == null)
          )
            throw new (r("BillingError"))(
              "BillingSaveCardCredentialStateMutation failed to return verification parameters",
              "mutation response came back with missing or invalid value",
              {
                event_action: "mutation",
                event_result: "failure",
                event_side: "client_side",
              },
              { action: "mutate", document_name: "save_credit_card" },
              "critical_error",
            );
          if (c)
            return {
              event: "onAuthenticationRequiredWithCardinal3DS",
              newProps: babelHelpers.extends({}, n, {
                cardStatusEntID: s.async_card_status_ent_id,
                credentialAuthenticationId: s.credential_authentication_id,
                externalRefID: s.external_reference_id,
                hidePaymentAmountSection: !0,
              }),
            };
          if (s.supports_native_otp === !0) {
            var m;
            return {
              event: "onAuthenticationRequiredWithNativeOTP",
              newProps: babelHelpers.extends({}, n, {
                cardAssociation: s.card_association,
                cardAssociationIcon:
                  s.card_association_icon != null
                    ? o("BillingPaymentIconUtils.react").getCDSImageProps(
                        s.card_association_icon,
                      )
                    : null,
                cardStatusEntID: s.async_card_status_ent_id,
                externalRefID: s.external_reference_id,
                hidePaymentAmountSection: !0,
                indiaCardIssuer:
                  s.india_card_issuer != null ? s.india_card_issuer : null,
                initResults: {
                  nonce: s.nonce,
                  params: s.params,
                  url: (m = s.external_uri) != null ? m : "",
                },
                issuerIcon:
                  s.india_issuer_icon != null
                    ? o("BillingPaymentIconUtils.react").getCDSImageProps(
                        s.india_issuer_icon,
                      )
                    : null,
              }),
            };
          } else {
            var p,
              _ = {
                nonce: s.nonce,
                params: s.params,
                url: (p = s.external_uri) != null ? p : "",
              };
            return {
              event: "onAuthenticationRequired",
              newProps: babelHelpers.extends({}, n, {
                cardStatusEntID: s.async_card_status_ent_id,
                initResults: _,
                status: a,
              }),
            };
          }
        }),
        t
      );
    })(o("BillingWizardDecisionState").DecisionState);
    l.default = m;
  },
  226,
);
