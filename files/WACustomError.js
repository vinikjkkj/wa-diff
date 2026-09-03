__d(
  "WACustomError",
  ["fb-error"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return [
        r("fb-error").TAALOpcode.PREVIOUS_FRAME,
        r("fb-error").TAALOpcode.PREVIOUS_FRAME,
      ];
    }
    var s = (function (t) {
        function n(n) {
          var r;
          return (
            (r = t.call(this, n) || this),
            (r.message = n),
            (r.taalOpcodes = e()),
            r
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function (e) {
        function t(t, n) {
          var r,
            o = n != null && n.length > 0 ? n : m(t);
          return (
            (r = e.call(this, o) || this),
            (r.name = "AggregateError"),
            (r.errors = t),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "TimeoutError") || this),
            (n.name = "TimeoutError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "UnimplementedMethod") || this),
            (n.name = "UnimplementedMethod"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s);
    function m(e) {
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
    ((l.CustomError = s),
      (l.AggregateError = u),
      (l.TimeoutError = c),
      (l.UnimplementedMethod = d));
  },
  98,
);
