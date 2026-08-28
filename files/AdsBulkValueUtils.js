__d(
  "AdsBulkValueUtils",
  [
    "invariant",
    "AdsBulkValueTypes",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsEmptyValue",
    "AdsMixedValue",
    "AdsUniformValue",
    "FBLogger",
    "ImmutableObject",
    "StrSet",
    "areEqual",
    "areSpecsEqual",
    "curry",
    "deepCompare",
    "getByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = [],
      c = new (r("ImmutableObject"))(),
      d = "MIXED";
    function m(e) {
      var t = e.filter(M);
      t.length === 0 || t.length === e.length || s(0, 3999);
    }
    function p(e) {
      var t = e.filter(function (e) {
          return e instanceof r("AdsMixedValue");
        }),
        n = t[0] ? t[0].getValues().length : 0;
      t.forEach(function (e) {
        e.getValues().length === n || s(0, 4e3);
      });
    }
    function _(e, t) {
      for (
        var n = [],
          r = t.reduce(function (e, t) {
            return Math.max(e, t.getValues().length);
          }, 0),
          o = function (o) {
            n.push(
              e(
                t.map(function (e) {
                  return e.getValueForIndex(o);
                }),
              ),
            );
          },
          a = 0;
        a < r;
        a++
      )
        o(a);
      return R(n);
    }
    function f(e, t) {
      return R(e.getValues().map(t));
    }
    function g(e) {
      if (e instanceof r("AdsUniformValue")) return e.getValue();
      if (e instanceof r("AdsMixedValue")) return c;
      var t = new Error("Unknown value type");
      throw (t.stack, t);
    }
    function h(e, t) {
      if (!(e instanceof r("AdsEmptyValue")))
        return e instanceof r("AdsUniformValue") ? e.getValue() : t;
    }
    function y(t, n, o) {
      if (!(t == null || t.length === 0)) {
        var a = n(t[0]);
        for (var i of t.slice(1))
          if (!(e || (e = r("areEqual")))(a, n(i))) return o;
        return a;
      }
    }
    function C(e, t) {
      if (e instanceof r("AdsEmptyValue")) return t;
      if (e instanceof r("AdsUniformValue")) {
        var n;
        return (n = e.getValue()) != null ? n : t;
      } else return t;
    }
    function b(t, n, o) {
      if (t == null || t.length === 0) return o;
      var a = n(t[0]);
      for (var i of t.slice(1))
        if (!(e || (e = r("areEqual")))(a, n(i))) return o;
      return a != null ? a : o;
    }
    function v(e, t) {
      if (e instanceof r("AdsMixedValue")) {
        var n = e.getValues(),
          o = n[0];
        for (var a of n) if (!r("deepCompare")(o, a)) return t;
        return o;
      }
      return C(e, t);
    }
    function S(t, n, o) {
      if (!t) return o;
      var a = E(t, n);
      if (a.length <= 1) return a[0];
      var i = a[0];
      return a.every(function (t) {
        return (e || (e = r("areEqual")))(t, i);
      })
        ? i
        : o;
    }
    function R(e, t) {
      t === void 0 && (t = r("AdsEmptyUniformMixedBulkValueTypes"));
      for (var n of t.getTypes()) {
        var o = n.create(e);
        if (o != null) return o;
      }
      s(0, 4001);
    }
    function L(e, t) {
      var n = r("curry")(P, t),
        o = D(e, n);
      return o;
    }
    function E(e, t) {
      for (var n = [], o = 0; o < t; ) {
        var a = {},
          i = r("curry")(N, a, o);
        (D(e, i), (n[o] = a), o++);
      }
      return n;
    }
    function k(e) {
      return !e.id && !q(e)
        ? []
        : (X(e.id) || s(0, 4002), E(e, e.id.getValues().length));
    }
    function I(e) {
      var t = k(e),
        n = {};
      return (
        t.forEach(function (e) {
          n[e.id] = e;
        }),
        n
      );
    }
    function T(e, t) {
      var n = [];
      return (
        t.filter(Boolean).forEach(function (e) {
          return e.getValues().forEach(function (e, t) {
            n[t] = n[t] || e;
          });
        }),
        R(n, e)
      );
    }
    function D(e, t) {
      return x(e, t, {}, []);
    }
    function x(e, t, n, o) {
      if (
        ($(e) || s(0, 4003, o.join(".")),
        e instanceof r("AdsBulkValueTypes") || X(e))
      )
        return t(e, o);
      for (var a in e)
        e[a] !== void 0 && (o.push(a), (n[a] = x(e[a], t, {}, o)), o.pop());
      return (
        o.length > 5 &&
          r("FBLogger")("bulk_value").info(
            "Object values appears too deep to aggregate. Consider aggregate these values separately to avoid deep recursion which causes perf issues",
          ),
        n
      );
    }
    function $(e) {
      return !(!e || typeof e != "object" || Array.isArray(e));
    }
    function P(e, t, n) {
      var o = [],
        a = !1;
      e.forEach(function (e) {
        var t = r("getByPath")(e, n);
        (t !== void 0 && (a = !0), o.push(t));
      });
      var i;
      return (
        t.getTypes().some(function (e) {
          return !a && e !== r("AdsEmptyValue") ? !1 : ((i = e.create(o)), !!i);
        }),
        a
          ? i || s(0, 4004)
          : i === void 0 || i instanceof r("AdsEmptyValue") || s(0, 4005),
        i
      );
    }
    function N(e, t, n, o) {
      var a = n.getValueForIndex(t);
      a !== void 0 && r("setByPath")(e, o, n.getValueForIndex(t));
    }
    function M(e) {
      return e == null || e instanceof r("AdsEmptyValue");
    }
    function w(e, t) {
      if (e === t) return !0;
      var n = M(e),
        o = M(t);
      if (n || o) return n && o;
      var a = X(e) ? e.getValues() : u,
        i = X(t) ? t.getValues() : u;
      return a.length !== i.length
        ? !1
        : !i.some(function (e, t) {
            return !r("areSpecsEqual")(e, a[t]);
          });
    }
    function A(t, n, o) {
      if (t === n) return !0;
      var a = M(t),
        i = M(n);
      if (a || i) return a && i;
      if (!B(t) || !B(n)) return (e || (e = r("areEqual")))(t, n);
      var l = Object.keys(t).concat(Object.keys(n)),
        s = new Set(l);
      return Array.from(s).every(function (e) {
        if (o && o[e]) return !0;
        var r = t[e],
          a = n[e];
        if (X(r) || X(a)) {
          if (!w(r, a)) return !1;
        } else if (!A(r, a)) return !1;
        return !0;
      });
    }
    function F(e, t, n) {
      if (M(e) || M(t)) return e;
      var r = Object.keys(e).concat(Object.keys(t)),
        o = new Set(r),
        a = {};
      return (
        Array.from(o).forEach(function (r) {
          if (!(n && n[r])) {
            var o = t[r],
              i = e[r];
            X(o) || X(i) ? w(o, i) || (a[r] = i) : A(o, i) || (a[r] = i);
          }
        }),
        e.id && (a.id = e.id),
        a
      );
    }
    function O(e, t) {
      var n = e,
        o = t;
      if (
        n == null ||
        n instanceof r("AdsEmptyValue") ||
        o == null ||
        o instanceof r("AdsEmptyValue")
      )
        return n;
      var a = new Set(Object.keys(n).concat(Object.keys(o))),
        i = {};
      return (
        Array.from(a).forEach(function (e) {
          var t = o[e],
            r = n[e];
          if (X(t) || X(r)) w(t, r) || (i[e] = { new: r, old: t });
          else if (B(t) || B(r)) {
            var a = O(r, t);
            a && !W(a) && (i[e] = a);
          }
        }),
        n.id && (i.id = n.id),
        i
      );
    }
    function B(e) {
      return Object.prototype.toString.call(e) === "[object Object]";
    }
    function W(e) {
      for (var t in e) return !1;
      return !0;
    }
    function q(e) {
      var t, n;
      for (t in e)
        if (((n = e[t]), !(n === void 0 || n instanceof r("AdsEmptyValue")))) {
          if (X(n)) return !0;
          if (B(n) && n != null && typeof n == "object") {
            if (q(n)) return !0;
            continue;
          }
          s(0, 11824, n);
        }
      return !1;
    }
    function U(e) {
      var t, n;
      for (t in e)
        if (((n = e[t]), n !== void 0)) {
          if (X(n)) return !0;
          if (B(n) && n != null && typeof n == "object") {
            if (U(n)) return !0;
            continue;
          }
          s(0, 11824, n);
        }
      return !1;
    }
    function V(e, t) {
      var n = new (r("StrSet"))(e.getValues()),
        o = new (r("StrSet"))(t.getValues());
      return n.equals(o);
    }
    function H(e, t) {
      var n;
      return (
        t.length
          ? (n = function (n, o) {
              return !!t.some(function (e) {
                return r("getByPath")(e, o) !== void 0;
              });
            })
          : (n = function () {
              return !1;
            }),
        D(e, n)
      );
    }
    function G(e) {
      return X(e) ? e : new (r("AdsUniformValue"))(e);
    }
    function z(e, t) {
      Object.keys(e).forEach(function (n) {
        var r = e[n];
        X(r)
          ? t(r)
          : Object.prototype.toString.call(r) === "[object Object]" &&
            r != null &&
            typeof r == "object" &&
            z(r, t);
      });
    }
    function j(e) {
      var t = {},
        n = [],
        o = function (a) {
          X(a)
            ? M(a) || r("setByPath")(t, n, a)
            : B(a) &&
              a != null &&
              typeof a == "object" &&
              Object.keys(a).forEach(function (e) {
                (n.push(e), o(a[e]), n.pop());
              });
        };
      return (o(e), new (r("ImmutableObject"))(t));
    }
    function K(e) {
      function t(t) {
        return R(t, e || r("AdsEmptyUniformMixedBulkValueTypes"));
      }
      return t;
    }
    function Q(e) {
      return function (t) {
        return L(e, t);
      };
    }
    function X(e) {
      return (
        e instanceof r("AdsMixedValue") ||
        e instanceof r("AdsUniformValue") ||
        e instanceof r("AdsEmptyValue")
      );
    }
    function Y(e) {
      return e instanceof r("AdsMixedValue");
    }
    function J(e) {
      return e instanceof r("AdsUniformValue");
    }
    function Z(e) {
      return e instanceof r("AdsEmptyValue");
    }
    function ee(e) {
      return Z(e) || (J(e) && (e.getValue() == null || e.getValue() === ""));
    }
    ((l.MIXED_VALUE = c),
      (l.MIXED = d),
      (l.assertAllOrNothingNull = m),
      (l.assertAllSameLength = p),
      (l.parallelIterator = _),
      (l.mapBulkValue = f),
      (l.getValueOrMixed_DEPRECATED = g),
      (l.getUniformValue = h),
      (l.getUniformValueFrom = y),
      (l.getUniformValueOrDefault = C),
      (l.getUniformValueOrDefaultFrom = b),
      (l.getUniformValueForObject = v),
      (l.getUniformValueDeep = S),
      (l.aggregate = R),
      (l.aggregateDeep = L),
      (l.deaggregateDeep = E),
      (l.deaggregateDeepByID = k),
      (l.deaggregateDeepByIDToMap = I),
      (l.mergeBulkValues = T),
      (l.isNullValue = M),
      (l.areValuesEqual = w),
      (l.areObjectsEqual = A),
      (l.getObjectDiff = F),
      (l.getObjectDeepChanges = O),
      (l.hasBulkValue = U),
      (l.areBulkValuesEqual = V),
      (l.hasValueDeep = H),
      (l.wrapValue = G),
      (l.traverseSpec = z),
      (l.cleanBulkSpec = j),
      (l.createAggregator = K),
      (l.createDeepAggregator = Q),
      (l.isBulkValue = X),
      (l.isMixedValue = Y),
      (l.isUniformValue = J),
      (l.isEmptyValue = Z),
      (l.isEmptyBulkString = ee));
  },
  98,
);
