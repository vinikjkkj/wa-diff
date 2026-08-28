__d(
  "BillingAddPaymentMethodInitStateState",
  [
    "BillingAddPaymentMethodInitStateStateQuery.graphql",
    "BillingPaymentModeUtils",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardRootUPLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("BillingAddPaymentMethodInitStateStateQuery.graphql")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "add_payment_method_init_state_state_decision"),
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
                  c,
                  d,
                  m,
                  p,
                  _ = t.gk,
                  f = t.relay.fetchQuery,
                  g = e.paymentAccountID,
                  h = yield f(
                    {
                      options: { fetchPolicy: "store-or-network" },
                      query: s,
                      queryName: s.params.name,
                      variables: { paymentAccountID: g },
                    },
                    {},
                    void 0,
                    !0,
                    t,
                    this.name,
                  ),
                  y =
                    h == null || (n = h.payment_account) == null
                      ? void 0
                      : n.billable_account,
                  C =
                    (a = y == null ? void 0 : y.payment_modes) != null ? a : [],
                  b = o("BillingPaymentModeUtils").isNUXAccount(C);
                b &&
                  r("BillingWizardRootUPLogger").appendMetadataIfNotNull({
                    is_new_user: !0,
                  });
                var v = babelHelpers.extends({}, e, { newUser: b }),
                  S =
                    (y == null ||
                    (i = y.invoice_billing_info_update_config) == null
                      ? void 0
                      : i.is_mi_to_mi_transition) === !0;
                if (S)
                  return {
                    event: "onScheduledMITransition",
                    newProps: babelHelpers.extends({}, v, {
                      paymentMethodType: "BM_OPTION",
                    }),
                  };
                var R =
                  (y == null || (l = y.billable_account_tax_info) == null
                    ? void 0
                    : l.can_update_tax_country) === !0 &&
                  (y == null ? void 0 : y.can_update_currency_timezone) === !0;
                if (
                  (y == null ? void 0 : y.__typename) ===
                  "DeveloperBillableAccount"
                )
                  return R
                    ? {
                        event: "onChangeCountry",
                        newProps: babelHelpers.extends({}, v, {
                          developerBillingFlow: !0,
                          paymentMethodType: "NEW_CREDIT_CARD",
                        }),
                      }
                    : {
                        event: "onDeveloper",
                        newProps: babelHelpers.extends({}, v, {
                          paymentMethodType: "NEW_CREDIT_CARD",
                        }),
                      };
                var L =
                    (y == null || (u = y.billable_account_tax_info) == null
                      ? void 0
                      : u.business_country_code) != null &&
                    (y == null || (c = y.billable_account_tax_info) == null
                      ? void 0
                      : c.business_country_code) !== "",
                  E =
                    (y == null || (d = y.billable_account_tax_info) == null
                      ? void 0
                      : d.business_country_code) !== e.desiredAccountCountry;
                if (
                  (!L || E) &&
                  (y == null ? void 0 : y.__typename) ===
                    "MV4BBillableAccount" &&
                  e.showLightweightSubscriptionFlow === !0
                )
                  return {
                    event: "onMV4B",
                    newProps: babelHelpers.extends({}, v, {
                      display_all_fields: !0,
                    }),
                  };
                if (
                  !L &&
                  (y == null ? void 0 : y.__typename) === "BizAIBillableAccount"
                )
                  return {
                    event: "onChangeCountry",
                    newProps: babelHelpers.extends({}, v, {
                      display_all_fields: !0,
                    }),
                  };
                if (
                  this.isL5BizInfoEligible() &&
                  (yield _.BILLING_BNI_MIGRATE_BIZ_INFO_TO_L5_DEV.get())
                )
                  return {
                    event: "onL5BizInfo",
                    newProps: babelHelpers.extends({}, v, {
                      bizInfoLocation: "L5",
                      isAccountNux: !0,
                      isL5Admin: !0,
                    }),
                  };
                var k = "ADD_PM";
                if (
                  ((h == null ||
                  (m = h.payment_account) == null ||
                  (m = m.billable_account) == null
                    ? void 0
                    : m.is_eligible_for_postpay_upgrade) === !0 &&
                    (k = "ADD_FUNDS"),
                  (v = babelHelpers.extends({}, v, { paymentIntent: k })),
                  L && (y == null ? void 0 : y.is_new_account) === !0)
                )
                  return { event: "onLanding", newProps: v };
                var I =
                  (y == null || (p = y.billable_account_tax_info) == null
                    ? void 0
                    : p.can_update_tax_country) === !0;
                return I
                  ? { event: "onChangeCountry", newProps: v }
                  : { event: "onLanding", newProps: v };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.isL5BizInfoEligible = function () {
            return !1;
          }),
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
