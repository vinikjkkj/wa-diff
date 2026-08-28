__d(
  "AdsAbstractValidator",
  ["AdsBaseValidator", "abstractMethod"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function (t) {
          return r("abstractMethod")("AdsAbstractValidator", "validate");
        }),
        t
      );
    })(r("AdsBaseValidator"));
    l.default = e;
  },
  98,
);
