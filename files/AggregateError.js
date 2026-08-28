__d(
  "AggregateError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(n, r) {
        var o,
          a = r != null ? r : l(n);
        return (
          (o = e.call(this, a) || this),
          (o.name = "AggregateError"),
          (o.errors = n),
          (o.message = a),
          Error.captureStackTrace && Error.captureStackTrace(o, t),
          o
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function l(e) {
      return e.length === 0
        ? "No errors"
        : e.length === 1
          ? e[0].message
          : e
              .map(function (e) {
                return "- " + e.message;
              })
              .join("\n");
    }
    i.default = e;
  },
  66,
);
