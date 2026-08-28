__d(
  "AdsStrictValidator",
  ["AdsAbstractValidator", "abstractMethod"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getDependencies = function () {
          return r("abstractMethod")("AdsStrictValidator", "getDependencies");
        }),
        (n.shouldValidate = function (t) {
          return r("abstractMethod")("AdsStrictValidator", "shouldValidate");
        }),
        (n.validate = function (t) {
          return r("abstractMethod")("AdsStrictValidator", "validate");
        }),
        t
      );
    })(r("AdsAbstractValidator"));
    l.default = e;
  },
  98,
);
