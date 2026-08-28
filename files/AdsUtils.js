__d(
  "AdsUtils",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      return e === Object(e);
    }
    function m(e) {
      return Array.isArray(e) || typeof e == "string"
        ? e.length
        : d(e)
          ? Object.keys(e).length
          : 0;
    }
    function p(e, t, n) {
      for (var r = {}, o = 0; o < e.length; ++o)
        r[e[o][t]] = n === void 0 ? e[o] : e[o][n];
      return r;
    }
    function _(e) {
      var t = e;
      return (
        Array.isArray(e)
          ? (t = e.map(_))
          : d(e) &&
            ((t = {}),
            Object.keys(e).forEach(function (n) {
              return (t[n] = _(e[n]));
            })),
        t
      );
    }
    function f(e) {
      return e.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
    }
    function g(e) {
      return e.replace(/_[a-z]/g, function (e) {
        return e.charAt(1).toUpperCase();
      });
    }
    function h(e, t, n) {
      for (
        var r = {}, o = Object.keys(babelHelpers.extends({}, e, t)), a = 0;
        a < o.length;
        a++
      ) {
        var i = o[a],
          l = n(
            Object.prototype.hasOwnProperty.call(e, i),
            Object.prototype.hasOwnProperty.call(t, i),
          );
        l < 0 ? (r[i] = e[i]) : l > 0 && (r[i] = t[i]);
      }
      return r;
    }
    function y(e, t) {
      return h(e, t, function (e, t) {
        return e && t ? -1 : 0;
      });
    }
    function C(e, t) {
      if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; ++n) if (!C(e[n], t[n])) return !1;
        return !0;
      }
      if (d(e) && d(t)) {
        for (var r = Object.keys(e), o = 0; o < r.length; o++) {
          var a = r[o];
          if (!Object.prototype.hasOwnProperty.call(t, a) || !C(e[a], t[a]))
            return !1;
        }
        return !0;
      }
      return e == t;
    }
    function b(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = g(n);
          t[r] = e[n];
        }),
        t
      );
    }
    function v(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = f(n);
          t[r] = e[n];
        }),
        t
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(3),
        n = c(!1),
        r,
        a;
      (t[0] !== e
        ? ((r = function () {
            n.current || (e(), (n.current = !0));
          }),
          (a = [e]),
          (t[0] = e),
          (t[1] = r),
          (t[2] = a))
        : ((r = t[1]), (a = t[2])),
        u(r, a));
    }
    ((l.isObject = d),
      (l.count = m),
      (l.indexedMap = p),
      (l.clone = _),
      (l.underscoreKey = f),
      (l.camelCaseKey = g),
      (l.mapIntersectKey = y),
      (l.isEqualWeak = C),
      (l.underscoreToCamelCaseKeys = b),
      (l.camelCaseToUnderscoreKeys = v),
      (l.useExecuteOnceBeforeRender = S));
  },
  98,
);
