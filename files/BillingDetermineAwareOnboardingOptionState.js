__d(
  "BillingDetermineAwareOnboardingOptionState",
  [
    "BillingDetermineAwareOnboardingOptionStateQuery.graphql",
    "BillingWizardDecisionStateWithoutMutation",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("BillingDetermineAwareOnboardingOptionStateQuery.graphql")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "determine_billing_aware_onboarding_option_decision"),
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
                  r = t.gk,
                  o = t.qe,
                  a = t.relay.fetchQuery,
                  i = e.paymentAccountID,
                  l = yield a(
                    {
                      options: { fetchPolicy: "store-or-network" },
                      query: s,
                      queryName: s.params.name,
                      variables: { paymentAccountID: i },
                    },
                    {},
                    void 0,
                    !0,
                    t,
                    this.name,
                  ),
                  u =
                    l == null || (n = l.payment_account) == null
                      ? void 0
                      : n.billing_payment_method_options,
                  c = { do_not_log_exposure_iknowwhatimdoing: !0 },
                  d = yield r.BILLING_AWARE_ONBOARDING_OPTION_2_TESTERS.get(c),
                  m = yield o.billing_aware_onboarding.in_option_2.get(c);
                if (d || m) {
                  var p =
                    (u == null
                      ? void 0
                      : u.some(function (e) {
                          return (
                            (e == null ? void 0 : e.__typename) ===
                            "AdAccountAltpayOption"
                          );
                        })) === !0;
                  return p
                    ? { event: "onAwareOnboardingModalitySelect", newProps: e }
                    : { event: "onAwareOnboardingPMLanding", newProps: e };
                }
                var _ =
                    yield r.BILLING_AWARE_ONBOARDING_OPTION_1_TESTERS.get(c),
                  f = yield o.billing_aware_onboarding.in_option_1.get(c);
                return _ || f
                  ? { event: "onAwareOnboardingPMLanding", newProps: e }
                  : { event: "onLanding", newProps: e };
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
