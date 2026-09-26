__d(
  "CometFormDateTimeConstraints",
  ["CometLocalDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = !1),
        function (n) {
          return t ? n.compareTo(e) <= 0 : n.compareTo(e) < 0;
        }
      );
    }
    function s(e, t) {
      return (
        t === void 0 && (t = !1),
        function (n) {
          return t ? n.compareTo(e) >= 0 : n.compareTo(e) > 0;
        }
      );
    }
    function u(e, t) {
      return (
        t === void 0 && (t = !1),
        function (n) {
          return t ? n <= e : n < e;
        }
      );
    }
    function c(e, t) {
      return (
        t === void 0 && (t = !1),
        function (n) {
          return t ? n >= e : n > e;
        }
      );
    }
    function d(t, n) {
      return (
        n === void 0 && (n = !1),
        function (o) {
          if (o instanceof Date) return n ? o <= t : o < t;
          if (o instanceof r("CometLocalDate")) {
            var a = r("CometLocalDate").fromDate(t),
              i = n || !h(t);
            return e(a, i)(o);
          } else return !0;
        }
      );
    }
    function m(e, t) {
      return (
        t === void 0 && (t = !1),
        function (n) {
          if (n instanceof Date) return t ? n >= e : n > e;
          if (n instanceof r("CometLocalDate")) {
            var o = r("CometLocalDate").fromDate(e),
              a = t || !y(e);
            return s(o, a)(n);
          } else return !0;
        }
      );
    }
    function p(t) {
      return (
        t === void 0 && (t = !1),
        function (n) {
          return e(r("CometLocalDate").fromDate(), t)(n);
        }
      );
    }
    function _(e) {
      return (
        e === void 0 && (e = !1),
        function (t) {
          return s(r("CometLocalDate").fromDate(), e)(t);
        }
      );
    }
    function f() {
      return function (e) {
        return e instanceof Date
          ? e < new Date()
          : e instanceof r("CometLocalDate")
            ? p(!0)(e)
            : !0;
      };
    }
    function g() {
      return function (e) {
        return e instanceof Date
          ? e > new Date()
          : e instanceof r("CometLocalDate")
            ? _(!0)(e)
            : !0;
      };
    }
    function h(e) {
      return e.getHours() === 0 && e.getMinutes() === 0 && e.getSeconds() === 0;
    }
    function y(e) {
      return (
        e.getHours() === 23 && e.getMinutes() === 59 && e.getSeconds() === 59
      );
    }
    ((l.beforeDate = e),
      (l.afterDate = s),
      (l.beforeTime = u),
      (l.afterTime = c),
      (l.beforeDateTime = d),
      (l.afterDateTime = m),
      (l.dateInThePast = p),
      (l.dateInTheFuture = _),
      (l.dateTimeInThePast = f),
      (l.dateTimeInTheFuture = g));
  },
  98,
);
