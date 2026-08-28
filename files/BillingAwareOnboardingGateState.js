__d(
  "BillingAwareOnboardingGateState",
  ["BillingWizardDecisionState", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.name = "aware_onboarding_gate_decision"),
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
              var n = t.gk,
                r = t.qe,
                o =
                  (yield n.BILLING_AWARE_ONBOARDING_OPTION_1_TESTERS.get()) ||
                  (yield r.billing_aware_onboarding.in_option_1.get()) ||
                  (yield n.BILLING_AWARE_ONBOARDING_OPTION_2_TESTERS.get()) ||
                  (yield r.billing_aware_onboarding.in_option_2.get());
              return { event: o ? "pass" : "fail", newProps: e };
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("BillingWizardDecisionState").DecisionState);
    l.default = e;
  },
  98,
);
