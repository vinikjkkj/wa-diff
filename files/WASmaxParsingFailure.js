__d(
  "WASmaxParsingFailure",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, "SmaxParsingFailure: " + t) || this),
          (n.name = "SmaxParsingFailure"),
          (n.reason = t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.toString = function () {
          return "SmaxParsingFailure: " + this.reason;
        }),
        t
      );
    })(babelHelpers.wrapNativeSuper(Error));
    i.SmaxParsingFailure = e;
  },
  66,
);
