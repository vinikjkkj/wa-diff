__d(
  "BillingCreditCardNumber",
  ["BillingProtectedString"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCleanValue_DO_NOT_USE = function () {
          return this.getValue_DO_NOT_USE().replace(/[^\d]/gi, "");
        }),
        (n.validate_DO_NOT_LOG = function (t) {
          return t(this.getCleanValue_DO_NOT_USE());
        }),
        (n.getBin = function () {
          return this.getCleanValue_DO_NOT_USE().substring(0, 6);
        }),
        (n.getBin8 = function () {
          return this.getCleanValue_DO_NOT_USE().substring(0, 8);
        }),
        (n.getLastFour = function () {
          return this.getCleanValue_DO_NOT_USE().substring(
            this.getCleanValue_DO_NOT_USE().length - 4,
          );
        }),
        t
      );
    })(r("BillingProtectedString"));
    l.default = e;
  },
  98,
);
