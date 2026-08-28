__d(
  "BillingCheckConditionState",
  ["BillingWizardDecisionState", "BillingWizardRootUPLogger", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function o(e, n, r) {
          var o;
          return (
            (o = t.call(this, e) || this),
            (o.name = "check_condition_state_decision"),
            (o.check = function () {
              return !1;
            }),
            (o.logTarget = null),
            (o.check = n),
            (o.logTarget = r != null ? r : null),
            o
          );
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.onDecide = function (o) {
            var t = this.check(o),
              a = this.logTarget;
            return (
              a != null &&
                (r("BillingWizardRootUPLogger") == null ||
                  r("BillingWizardRootUPLogger").logEvent({
                    event_action: "execute",
                    event_result: "success",
                    event_side: "client",
                    extra_data: { branch: t ? "pass" : "fail" },
                    target_name: a,
                  })),
              t
                ? (e || (e = n("Promise"))).resolve({
                    event: "pass",
                    newProps: o,
                  })
                : (e || (e = n("Promise"))).resolve({
                    event: "fail",
                    newProps: o,
                  })
            );
          }),
          o
        );
      })(o("BillingWizardDecisionState").DecisionState);
    l.default = s;
  },
  98,
);
