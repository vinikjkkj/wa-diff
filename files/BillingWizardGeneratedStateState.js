__d(
  "BillingWizardGeneratedStateState",
  ["BillingWizardStatusState", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, t) || this),
          (r.statusFunction = null),
          (r.statusFunction = n),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.generateStatus = function (t, n) {
          if (this.statusFunction != null) return this.statusFunction(t, n);
          throw r("err")("Failed to generateStatus");
        }),
        t
      );
    })(o("BillingWizardStatusState").StatusState);
    l.GeneratedStateState = e;
  },
  98,
);
