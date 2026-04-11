__d(
  "WARetryableError",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, "see error at this.source") || this),
          (n.name = "RetryableError"),
          (n.source = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WACustomError").CustomError);
    l.default = e;
  },
  98,
);
