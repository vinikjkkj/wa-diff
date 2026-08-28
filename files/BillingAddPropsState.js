__d(
  "BillingAddPropsState",
  ["BillingWizardDecisionState", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function r(e, n) {
          var r;
          return (
            (r = t.call(this, e) || this),
            (r.name = "add_props_state_decision"),
            (r.props = n),
            r
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.onDecide = function (r) {
            return typeof this.props == "function"
              ? (e || (e = n("Promise"))).resolve({
                  event: "onNext",
                  newProps: babelHelpers.extends({}, r, this.props(r)),
                })
              : (e || (e = n("Promise"))).resolve({
                  event: "onNext",
                  newProps: babelHelpers.extends({}, r, this.props),
                });
          }),
          r
        );
      })(o("BillingWizardDecisionState").DecisionState);
    l.default = s;
  },
  98,
);
