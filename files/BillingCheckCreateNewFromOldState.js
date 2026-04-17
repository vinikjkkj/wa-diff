__d(
  "BillingCheckCreateNewFromOldState",
  [
    "BillingAccountInformationUtils",
    "BillingCheckCreateNewFromOldStateQuery.graphql",
    "BillingConfigAccountInformationUtils",
    "BillingWizardDecisionStateWithoutMutation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("BillingCheckCreateNewFromOldStateQuery.graphql")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "check_billing_create_new_from_old_state_decision"),
            (t.query = s),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
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
                  i,
                  l = t.qe,
                  u = t.relay,
                  c = t.relay.fetchQuery,
                  d = e.paymentAccountID,
                  m = yield c(
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
                  p =
                    m == null || (n = m.payment_account) == null
                      ? void 0
                      : n.billable_account,
                  _ =
                    (p == null || (r = p.billable_account_tax_info) == null
                      ? void 0
                      : r.predicated_business_country_code) || "",
                  f =
                    (p == null || (a = p.billable_account_tax_info) == null
                      ? void 0
                      : a.business_country_code) || "",
                  g = (p == null ? void 0 : p.currency) || "",
                  h = e.displayAllFields,
                  y =
                    (p == null || (i = p.timezone_info) == null
                      ? void 0
                      : i.timezone) || "",
                  C = p == null ? void 0 : p.__typename,
                  b = { country: f, currency: g, timezone: y };
                if (C !== "MV4BBillableAccount")
                  return { event: "onSkipCreateNewFromOld", newProps: e };
                C === "MV4BBillableAccount" &&
                  ((h = !0),
                  (f = e.desiredAccountCountry),
                  (g = e.desiredAccountCurrency));
                var v = o(
                    "BillingAccountInformationUtils",
                  ).checkCanCreateNewFromOld(p, b, f, g, y),
                  S = o(
                    "BillingConfigAccountInformationUtils",
                  ).getProductFromAccountType(C);
                if (
                  v.status === "CREATE_NEW" ||
                  v.status === "CREATE_NEW_SKIP_WARNING" ||
                  v.status === "BLOCKED"
                )
                  return {
                    event: "onCreateNewFromOld",
                    newProps: babelHelpers.extends({}, e, {
                      checkAsoc: v,
                      country: f,
                      currency: g,
                      displayAllFields: h,
                      predicatedCountry: _,
                      product: S,
                      timezone: y,
                    }),
                  };
                if (v.status === "UPDATE") {
                  var R = f != null && f !== (b == null ? void 0 : b.country),
                    L = g != null && g !== (b == null ? void 0 : b.currency),
                    E = y != null && y !== (b == null ? void 0 : b.timezone);
                  if (R || L || E) {
                    var k;
                    yield o("BillingAccountInformationUtils").updateAccount(
                      u,
                      d,
                      { country: f, currency: g, timezone: y },
                      b,
                      null,
                      (k =
                        p == null
                          ? void 0
                          : p.require_additional_info_for_enhanced_authentication) !=
                        null
                        ? k
                        : !1,
                      l,
                    );
                  }
                }
                return {
                  event: "onSkipCreateNewFromOld",
                  newProps: babelHelpers.extends({}, e, {
                    country: f,
                    displayAllFields: h,
                    predicatedCountry: _,
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
      })(
        o("BillingWizardDecisionStateWithoutMutation")
          .DecisionStateWithoutMutation,
      );
    l.default = u;
  },
  98,
);
