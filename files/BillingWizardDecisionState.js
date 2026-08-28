__d(
  "BillingWizardDecisionState",
  ["BillingWizardTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.name = "placeholder"),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.onDecide = function (t, n) {
          var e = new Error("Failed to set onDecide");
          throw (e.stack, e);
        }),
        t
      );
    })(o("BillingWizardTypes").BaseWizardState);
    l.DecisionState = e;
  },
  98,
);
