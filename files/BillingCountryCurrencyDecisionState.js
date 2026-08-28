__d(
  "BillingCountryCurrencyDecisionState",
  [
    "fbt",
    "BillingAccountInformationUtils",
    "BillingConfigAccountInformationUtils",
    "BillingCountryCurrencyDecisionStateQuery.graphql",
    "BillingCountryCurrencyDecisionStateSetCountryCurrencyTimezoneMutation.graphql",
    "BillingCountryCurrencyUtils",
    "BillingCountryVerificationUtils",
    "BillingErrorUtils",
    "BillingWizardDecisionStateWithoutMutation",
    "CometRelay",
    "ISOCountryCode",
    "asyncToGeneratorRuntime",
    "castToEnum",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("BillingCountryCurrencyDecisionStateQuery.graphql")),
      d =
        u !== void 0
          ? u
          : (u = n(
              "BillingCountryCurrencyDecisionStateSetCountryCurrencyTimezoneMutation.graphql",
            )),
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "country_currency_decision_state"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = c),
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
                  u = e.country,
                  m = e.currency,
                  p = e.defaultCountry,
                  _ = e.defaultCurrency,
                  f = e.defaultTimezone,
                  g = e.paymentAccountID,
                  h = e.shouldRefetchCountryCurrency,
                  y = e.timezone;
                h === !0 &&
                  o("CometRelay").commitLocalUpdate(
                    l.environment,
                    function (e) {
                      var t;
                      (t = e.get(g)) == null || t.invalidateRecord();
                    },
                  );
                var C = yield l.fetchQuery(
                    {
                      query: c,
                      queryName: "BillingCountryCurrencyDecisionStateQuery",
                      variables: { paymentAccountID: g },
                    },
                    {},
                    void 0,
                    !0,
                    t,
                    this.name,
                  ),
                  b =
                    C == null || (n = C.payment_account) == null
                      ? void 0
                      : n.billable_account,
                  v = b == null ? void 0 : b.__typename,
                  S = o(
                    "BillingConfigAccountInformationUtils",
                  ).getProductFromAccountType(
                    v,
                    !1,
                    b == null ? void 0 : b.application_type,
                  ),
                  R = o(
                    "BillingAccountInformationUtils",
                  ).checkCanCreateNewFromOld(
                    b,
                    { country: p, currency: _, timezone: f },
                    u,
                    m,
                    y,
                  );
                if (R.status === "CREATE_NEW_SKIP_WARNING") {
                  var L = yield o(
                    "BillingAccountInformationUtils",
                  ).createNewAccountFromOld(l, g, {
                    country: u,
                    currency: m,
                    timezone: y,
                  });
                  return {
                    event: "onNewAccount",
                    newProps: babelHelpers.extends({}, e, {
                      paymentAccountID: L,
                    }),
                  };
                } else {
                  if (R != null && R.status !== "UPDATE")
                    return {
                      event: "onFailure",
                      newProps: babelHelpers.extends({}, e, {
                        checkAsoc: R,
                        product: S,
                      }),
                    };
                  var E =
                    yield a.BILLING_USE_BELIEVE_SET_COUNTRY_CURRENCY_MUTATION.get();
                  if (E) {
                    var k,
                      I = yield l.commitMutation(
                        {
                          mutation: d,
                          mutationName: d.params.name,
                          variables: {
                            input: {
                              billable_account_payment_legacy_account_id: g,
                              country_code: u != null ? u : "",
                              currency: m != null ? m : "",
                              timezone: y != null ? y : "",
                            },
                          },
                        },
                        {},
                        !1,
                      ),
                      T =
                        I == null ||
                        (k = I.billable_account_set_country_currency) == null
                          ? void 0
                          : k.client_result,
                      D = T == null ? void 0 : T.__typename;
                    if (
                      D !==
                      "XFBBillableAccountSetCountryCurrencyTimezoneSuccess"
                    ) {
                      var x = D != null ? D : "UnknownError";
                      throw o("BillingErrorUtils").buildBillingErrorFromError(
                        "server side mutation failure",
                        {
                          event_action: "mutation",
                          event_result: "failure",
                          event_side: "client_side",
                        },
                        { action: "mutate" },
                        r("err")(
                          "billable_account_set_country_currency returned error: " +
                            x,
                        ),
                      );
                    }
                  } else
                    yield o("BillingAccountInformationUtils").updateAccount(
                      l,
                      g,
                      { country: u, currency: m, timezone: y },
                      { country: p, currency: _, timezone: f },
                      null,
                      !1,
                      i,
                    );
                  if (e.developerBillingFlow === !0)
                    return {
                      event: "onDeveloperNext",
                      newProps: babelHelpers.extends({}, e, {
                        country: u,
                        currency: m,
                        paymentAccountID: g,
                        timezone: y,
                      }),
                    };
                  var $,
                    P = o("BillingCountryCurrencyUtils").getCountryName(
                      r("castToEnum")(e.country, r("ISOCountryCode"), null),
                    );
                  return (
                    e.countryUpdateType ===
                    o("BillingCountryVerificationUtils")
                      .BillingCountrySpoofingUpdateType.USER_SELECTED_COUNTRY
                      ? ($ = {
                          body: s._(
                            /*BTDS*/ "You changed your business location.",
                          ),
                          headline: s._(
                            /*BTDS*/ "Business location is {country}",
                            [s._param("country", P)],
                          ),
                          type: "SUCCESS",
                        })
                      : e.countryUpdateType ===
                          o("BillingCountryVerificationUtils")
                            .BillingCountrySpoofingUpdateType
                            .DETECTED_COUNTRY &&
                        ($ = {
                          body: s._(/*BTDS*/ "Your location is now verified."),
                          headline: s._(/*BTDS*/ "{country} is verified", [
                            s._param("country", P),
                          ]),
                          type: "SUCCESS",
                        }),
                    _ !== m && e.shouldCloseOnAccountUpdates === !0
                      ? {
                          event: "onChangeCountryCurrency",
                          newProps: babelHelpers.extends({}, e, {
                            country: u,
                            currency: m,
                            paymentAccountID: g,
                            status: $,
                            timezone: y,
                          }),
                        }
                      : {
                          event: "onNext",
                          newProps: babelHelpers.extends({}, e, {
                            paymentAccountID: g,
                            status: $,
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
