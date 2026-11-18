__d(
  "WAAbortError",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "AbortError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      s = "AbortError";
    function u(e) {
      return e != null && typeof e == "object" && "name" in e && e.name === s;
    }
    function c(e) {
      return function (t) {
        if (t.name === s) return e(t);
        throw t;
      };
    }
    ((l.AbortError = e),
      (l.ABORT_ERROR = s),
      (l.isAbortError = u),
      (l.catchAbort = c));
  },
  98,
);
