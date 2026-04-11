__d(
  "relay-runtime/store/RelayModernRecord",
  [
    "invariant",
    "areEqual",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
    "relay-runtime/util/deepFreeze",
    "warning",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      var t = d(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function d(e, t) {
      if (typeof e != "object" || !e) return e;
      var n =
        e[typeof Symbol == "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    var m = n("relay-runtime/store/ClientID").generateClientObjectClientID,
      p = n("relay-runtime/store/ClientID").isClientID,
      _ = n(
        "relay-runtime/store/live-resolvers/LiveResolverSuspenseSentinel",
      ).isSuspenseSentinel,
      f = (u = n("relay-runtime/store/RelayStoreUtils")).ACTOR_IDENTIFIER_KEY,
      g = u.ERRORS_KEY,
      h = u.ID_KEY,
      y = u.INVALIDATED_AT_KEY,
      C = u.REF_KEY,
      b = u.REFS_KEY,
      v = u.RELAY_RESOLVER_VALUE_KEY,
      S = u.ROOT_ID,
      R = u.TYPENAME_KEY;
    function L(e) {
      return babelHelpers.extends({}, e);
    }
    function E(e, t) {
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          n !== h &&
          n !== R &&
          (t[n] = e[n]);
    }
    function k(e, t) {
      var n = {};
      return ((n[h] = e), (n[R] = t), n);
    }
    function I(e) {
      return e;
    }
    function T(e) {
      return e[h];
    }
    function D(e) {
      return g in e
        ? Object.keys(e).filter(function (e) {
            return e !== g;
          })
        : Object.keys(e);
    }
    function x(e) {
      return e[R];
    }
    function $(e, t) {
      var n;
      return (n = e[g]) == null ? void 0 : n[t];
    }
    function P(e, t) {
      var n = e[t];
      return (
        n &&
          typeof n == "object" &&
          ((!Object.prototype.hasOwnProperty.call(n, C) &&
            !Object.prototype.hasOwnProperty.call(n, b)) ||
            l(
              0,
              696,
              e[h],
              t,
              Object.prototype.hasOwnProperty.call(n, C)
                ? "a linked record"
                : "plural linked records",
            )),
        n
      );
    }
    function N(e, t) {
      return t in e;
    }
    function M(e, t) {
      var n = e[t];
      if (n == null) return n;
      var r = n;
      return (
        (typeof r == "object" && r && typeof r[C] == "string") ||
          l(
            0,
            53158,
            e[h],
            t,
            JSON.stringify(r),
            typeof r == "object" && r[b] !== void 0
              ? " It appears to be a plural linked record: did you mean to call getLinkedRecords() instead of getLinkedRecord()?"
              : "",
          ),
        r[C]
      );
    }
    function w(e, t) {
      var n = e[t];
      if (n == null) return !1;
      var r = n;
      return typeof r == "object" && r && typeof r[C] == "string";
    }
    function A(e, t) {
      var n = e[t];
      return n == null
        ? n
        : ((typeof n == "object" && Array.isArray(n[b])) ||
            l(
              0,
              53159,
              e[h],
              t,
              JSON.stringify(n),
              typeof n == "object" && n[C] !== void 0
                ? " It appears to be a singular linked record: did you mean to call getLinkedRecord() instead of getLinkedRecords()?"
                : "",
            ),
          n[b]);
    }
    function F(e, t) {
      var n = e[t];
      return n == null
        ? !1
        : typeof n == "object" &&
            Array.isArray(n[b]) &&
            n[b].every(function (e) {
              return typeof e == "string";
            });
    }
    function O(e) {
      if (e == null) return null;
      var t = e[y];
      return typeof t != "number" ? null : t;
    }
    function B(t, r) {
      var o = t[g],
        a = r[g],
        i = null;
      if (o == null && a == null) {
        for (var l in r)
          (i || !(e || (e = n("areEqual")))(t[l], r[l])) &&
            ((i = i !== null ? i : babelHelpers.extends({}, t)), (i[l] = r[l]));
        return i != null ? i : t;
      }
      for (var s in r)
        if (s !== g) {
          var u = r[s],
            c = a == null ? void 0 : a[s];
          if (i == null) {
            var d = t[s],
              m = o == null ? void 0 : o[s];
            if (
              (e || (e = n("areEqual")))(d, u) &&
              (e || (e = n("areEqual")))(m, c)
            )
              continue;
            ((i = babelHelpers.extends({}, t)),
              o != null && (i[g] = babelHelpers.extends({}, o)));
          }
          (V(i, s, u), U(i, s, c));
        }
      return i != null ? i : t;
    }
    function W(e, t) {
      if (g in e || g in t) {
        var n = e[g],
          r = babelHelpers.objectWithoutPropertiesLoose(e, [g].map(c)),
          o = t[g],
          a = babelHelpers.objectWithoutPropertiesLoose(t, [g].map(c)),
          i = babelHelpers.extends({}, r, a);
        if (n == null && o == null) return i;
        var l = {};
        for (var s in n)
          Object.prototype.hasOwnProperty.call(a, s) || (l[s] = n[s]);
        for (var u in o) l[u] = o[u];
        for (var d in l) {
          i[g] = l;
          break;
        }
        return i;
      } else return babelHelpers.extends({}, e, t);
    }
    function q(e) {
      (s || (s = n("relay-runtime/util/deepFreeze")))(e);
    }
    function U(e, t, n) {
      var r = e[g];
      if (n != null && n.length > 0)
        if (r == null) {
          var o;
          e[g] = ((o = {}), (o[t] = n), o);
        } else r[t] = n;
      else if (r != null && delete r[t]) {
        for (var a in r) if (Object.prototype.hasOwnProperty.call(r, a)) return;
        delete e[g];
      }
    }
    function V(e, t, n) {
      e[t] = n;
    }
    function H(e, t, n) {
      var r = {};
      ((r[C] = n), (e[t] = r));
    }
    function G(e, t, n) {
      var r = {};
      ((r[b] = n), (e[t] = r));
    }
    function z(e, t, n, r) {
      var o = {};
      ((o[C] = r), (o[f] = n), (e[t] = o));
    }
    function j(e, t) {
      var n = e[t];
      return n == null
        ? n
        : ((typeof n == "object" && typeof n[C] == "string" && n[f] != null) ||
            l(0, 45087, e[h], t, JSON.stringify(n)),
          [n[f], n[C]]);
    }
    function K(e, t) {
      var n = P(e, v);
      return n == null || _(n)
        ? null
        : (typeof n == "object" && (n = n.id),
          typeof n == "string" || l(0, 67949, JSON.stringify(n)),
          m(t, n));
    }
    function Q(e, t) {
      var n = P(e, v);
      return n == null || _(n)
        ? null
        : (Array.isArray(n) || l(0, 67947, JSON.stringify(n)),
          n.map(function (e) {
            return e == null
              ? null
              : (typeof e == "object" && (e = e.id),
                typeof e == "string" || l(0, 67948, JSON.stringify(e)),
                m(t, e));
          }));
    }
    function X(t, r, o) {
      var a, i;
      if (!(e || (e = n("areEqual")))(t[o], r[o])) return !0;
      var l = (a = t[g]) == null ? void 0 : a[o],
        s = (i = r[g]) == null ? void 0 : i[o];
      return !(e || (e = n("areEqual")))(l, s);
    }
    function Y(e) {
      return e;
    }
    a.exports = {
      clone: L,
      copyFields: E,
      create: k,
      freeze: q,
      fromObject: I,
      getActorLinkedRecordID: j,
      getDataID: T,
      getErrors: $,
      getFields: D,
      getInvalidationEpoch: O,
      getLinkedRecordID: M,
      getLinkedRecordIDs: A,
      getResolverLinkedRecordID: K,
      getResolverLinkedRecordIDs: Q,
      getType: x,
      getValue: P,
      hasFieldChanged: X,
      hasLinkedRecordID: w,
      hasLinkedRecordIDs: F,
      hasValue: N,
      merge: W,
      setActorLinkedRecordID: z,
      setErrors: U,
      setLinkedRecordID: H,
      setLinkedRecordIDs: G,
      setValue: V,
      toJSON: Y,
      update: B,
    };
  },
  null,
);
