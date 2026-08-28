__d(
  "BillingCheckRiskState",
  [
    "BillingCheckRiskStateQuery.graphql",
    "BillingCheckRiskState_paymentAccount.graphql",
    "BillingRiskCheckUtils",
    "BillingWizardDecisionStateWithoutMutation",
    "BillingWizardRootUPLogger",
    "CometRelay",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("BillingCheckRiskState_paymentAccount.graphql")),
      c = s !== void 0 ? s : (s = n("BillingCheckRiskStateQuery.graphql"));
    function d(e) {
      return e === "isSDCRestricted" || e === "isSDCRestricted3DS";
    }
    var m = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.name = "check_risk_state_decision"),
          (t.query = c),
          (t.mapPropsToQuery = function (e) {
            var t = e.paymentAccountID,
              n = e.paymentMethodID;
            return {
              getRiskVerificationInfoForAllCredentialsOnPaymentAccount: !0,
              paymentAccountID: t,
              paymentMethodID:
                n != null ? n : "unused value to satisfy graphQL type checks",
            };
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.getNextProps = function (t, n, r, a) {
          var e = t.paymentMethodType,
            i = t.riskInfo,
            l = o("BillingRiskCheckUtils").evaluateRiskVerification(
              o("BillingRiskCheckUtils").buildRiskInfo(a, t.paymentMethodID),
              e,
            ),
            s = { restriction: l == null ? void 0 : l.restriction },
            u = l == null ? void 0 : l.restriction,
            c = l == null ? void 0 : l.props;
          if (i && i.paymentMethodID === t.paymentMethodID) {
            var m = o("BillingRiskCheckUtils").evaluateRiskVerification(i, e);
            ((s.altRestriction = m == null ? void 0 : m.restriction),
              d(m == null ? void 0 : m.restriction) &&
                !d(l == null ? void 0 : l.restriction) &&
                ((u = m == null ? void 0 : m.restriction),
                (c = babelHelpers.extends({}, m == null ? void 0 : m.props, {
                  riskInfo: babelHelpers.extends({}, i, {
                    useForVerification: !0,
                  }),
                })),
                (s.chosenRestriction = u)));
          }
          return {
            logExtraData: s,
            nextProps: { event: u, newProps: babelHelpers.extends({}, t, c) },
          };
        }),
        (a.onDecide = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n,
                a,
                i = t.gk,
                l = t.preloadedStates,
                s = t.qe,
                d = t.relay.fetchQuery,
                m = e.paymentAccountID,
                p = e.paymentMethodID,
                _ =
                  (n = o("CometRelay").readInlineData(
                    u,
                    (a = l.get(this.name)) == null || (a = a.results) == null
                      ? void 0
                      : a.payment_account,
                  )) == null ||
                  (n = n.billing_payment_methods_risk) == null ||
                  (n = n.find(function (e) {
                    var t;
                    return (
                      (e == null || (t = e.credential) == null
                        ? void 0
                        : t.ent_credential_id) === p
                    );
                  })) == null
                    ? void 0
                    : n.credential,
                f;
              if (this.shouldRefetchQuery(_ == null, m, l)) {
                var g,
                  h = yield d({
                    query: c,
                    queryName: c.params.name,
                    variables: {
                      getRiskVerificationInfoForAllCredentialsOnPaymentAccount:
                        !1,
                      paymentAccountID: m,
                      paymentMethodID: p != null ? p : "",
                    },
                  });
                f =
                  h == null ||
                  (g = h.payment_account) == null ||
                  (g = g.billable_account) == null
                    ? void 0
                    : g.specific_credential_required_risk_verification_info;
              } else
                ((f = _ == null ? void 0 : _.required_risk_verification_info),
                  yield this.maybePrefetchValidationDebugLogging(
                    e,
                    t,
                    c,
                    c.params.name,
                  ));
              var y = this.getNextProps(e, s, i, f),
                C = y.logExtraData,
                b = y.nextProps;
              return (
                r("BillingWizardRootUPLogger").logEvent({
                  event_action: "assess",
                  event_result: "completed",
                  event_side: "client",
                  extra_data: babelHelpers.extends({}, C, {
                    assessment: "risk_verification",
                    credential_id: p != null ? p : "",
                  }),
                  target_name: "BillingCheckRiskState",
                }),
                b
              );
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.shouldRefetchQuery = function (t, n, r) {
          var e,
            o =
              ((e = r.get(this.name)) == null || (e = e.variables) == null
                ? void 0
                : e.paymentAccountID) !== n;
          return t || o;
        }),
        t
      );
    })(
      o("BillingWizardDecisionStateWithoutMutation")
        .DecisionStateWithoutMutation,
    );
    l.default = m;
  },
  98,
);
