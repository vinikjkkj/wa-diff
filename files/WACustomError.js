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
            o = n != null && n.length > 0 ? n : p(t);
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
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "HttpError"),
            (r.code = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(s),
      m = (function (e) {
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
    function p(e) {
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
    var _ = !1;
    function f(e) {
      if (e == null || e.name !== "QuotaExceededError") throw e;
      _ = !0;
    }
    function g() {
      return _;
    }
    function h(e) {
      return JSON.stringify(e, Object.getOwnPropertyNames(e));
    }
    var y = (function (e) {
      function t(t, n) {
        var r;
        return ((r = e.call(this, t) || this), (r.inner = n), r);
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    ((l.adjustTaalOpcodes = e),
      (l.CustomError = s),
      (l.AggregateError = u),
      (l.TimeoutError = c),
      (l.HttpError = d),
      (l.UnimplementedMethod = m),
      (l.supressQuotaExceededError = f),
      (l.hasSupressedQuotaExceededError = g),
      (l.obtainErrorSummary = h),
      (l.WrappedError = y));
  },
  98,
);
