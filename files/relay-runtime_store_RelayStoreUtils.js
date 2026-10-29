__d(
  "relay-runtime/store/RelayStoreUtils",
  [
    "invariant",
    "relay-runtime/util/RelayConcreteNode",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/getRelayHandleKey",
    "relay-runtime/util/stableCopy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = n("relay-runtime/util/stableCopy"))).stableCopy,
      u = n("relay-runtime/util/RelayConcreteNode").VARIABLE,
      c = n("relay-runtime/util/RelayConcreteNode").LITERAL,
      d = n("relay-runtime/util/RelayConcreteNode").OBJECT_VALUE,
      m = n("relay-runtime/util/RelayConcreteNode").LIST_VALUE,
      p = "__errors",
      _ = "__fieldGranularNotifications",
      f = "__module_component_",
      g = "__module_operation_",
      h = "$r:";
    function y(e, t) {
      if (e.kind === u) return k(e.variableName, t);
      if (e.kind === c) return e.value;
      if (e.kind === d) {
        var n = {};
        return (
          e.fields.forEach(function (e) {
            n[e.name] = y(e, t);
          }),
          n
        );
      } else if (e.kind === m) {
        var r = [];
        return (
          e.items.forEach(function (e) {
            e != null && r.push(y(e, t));
          }),
          r
        );
      }
    }
    function C(e, t, n) {
      var r = {};
      return (
        n && (r[x.FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT] = !0),
        e &&
          e.forEach(function (e) {
            r[e.name] = y(e, t);
          }),
        r
      );
    }
    function b(e, t) {
      if (n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_STORAGE_KEYS)
        return $(e, t);
      var r = e.dynamicKey,
        o = e.handle,
        a = e.key,
        i = e.name,
        l = e.args,
        s = e.filters,
        u = n("relay-runtime/util/getRelayHandleKey")(o, a, i),
        c = null;
      return (
        l &&
          s &&
          l.length !== 0 &&
          s.length !== 0 &&
          (c = l.filter(function (e) {
            return s.indexOf(e.name) > -1;
          })),
        r && (c = c != null ? [r].concat(c) : [r]),
        c === null ? u : E(u, C(c, t))
      );
    }
    function v(e, t) {
      if (e.storageKey) return e.storageKey;
      var r = R(e),
        o = e.name;
      return !r || r.length === 0
        ? o
        : n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_STORAGE_KEYS
          ? F(e, r, o, t)
          : E(o, C(r, t));
    }
    function S(e, t) {
      if (n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_STORAGE_KEYS)
        return K(e, t);
      var r = v(e, t);
      return n("relay-runtime/util/RelayFeatureFlags")
        .ENABLE_READ_TIME_RESOLVER_STORAGE_KEY_PREFIX
        ? "$r:" + r
        : r;
    }
    function R(e) {
      if (e.kind === "RelayResolver" || e.kind === "RelayLiveResolver") {
        var t;
        if (e.args == null) {
          var n;
          return (n = e.fragment) == null ? void 0 : n.args;
        }
        return ((t = e.fragment) == null ? void 0 : t.args) == null
          ? e.args
          : e.args.concat(e.fragment.args);
      }
      var r = typeof e.args == "undefined" ? void 0 : e.args;
      return r;
    }
    function L(e, t) {
      return E(e, s(t));
    }
    function E(e, t) {
      if (!t) return e;
      for (var n = [], r = Object.keys(t), o = 0; o < r.length; o++) {
        var a = r[o],
          i = t[a];
        if (i != null) {
          var l;
          n.push(a + ":" + ((l = JSON.stringify(i)) != null ? l : "undefined"));
        }
      }
      return n.length === 0 ? e : e + ("(" + n.join(",") + ")");
    }
    function k(e, t) {
      return (
        Object.prototype.hasOwnProperty.call(t, e) || l(0, 5557, e),
        s(t[e])
      );
    }
    function I(e) {
      return n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_STORAGE_KEYS
        ? w(e)
        : "" + f + e;
    }
    function T(e) {
      return n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_STORAGE_KEYS
        ? A(e)
        : "" + g + e;
    }
    function D(e, t) {
      return "__fn:" + e + ":" + t;
    }
    var x = {
      ACTOR_IDENTIFIER_KEY: "__actorIdentifier",
      PARENT_CLIENT_EDGE: "__parentClientEdge",
      FRAGMENTS_KEY: "__fragments",
      FRAGMENT_OWNER_KEY: "__fragmentOwner",
      FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT:
        "$isWithinUnmatchedTypeRefinement",
      FRAGMENT_PROP_NAME_KEY: "__fragmentPropName",
      MODULE_COMPONENT_KEY: "__module_component",
      ERRORS_KEY: p,
      FIELD_GRANULAR_NOTIFICATIONS_KEY: _,
      ID_KEY: "__id",
      REF_KEY: "__ref",
      REFS_KEY: "__refs",
      ROOT_ID: "client:root",
      ROOT_TYPE: "__Root",
      TYPENAME_KEY: "__typename",
      INVALIDATED_AT_KEY: "__invalidated_at",
      RELAY_RESOLVER_VALUE_KEY: "__resolverValue",
      RELAY_RESOLVER_INVALIDATION_KEY: "__resolverValueMayBeInvalid",
      RELAY_RESOLVER_SNAPSHOT_KEY: "__resolverSnapshot",
      RELAY_RESOLVER_ERROR_KEY: "__resolverError",
      RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS: "__resolverOutputTypeRecordIDs",
      RELAY_RESOLVER_RECORD_TYPENAME: "__RELAY_RESOLVER__",
      RELAY_READ_TIME_RESOLVER_KEY_PREFIX: h,
      formatStorageKey: E,
      getArgumentValue: y,
      getArgumentValues: C,
      getHandleStorageKey: b,
      getStorageKey: v,
      getReadTimeResolverStorageKey: S,
      getStableStorageKey: L,
      getModuleComponentKey: I,
      getModuleOperationKey: T,
      getFieldNotificationKey: D,
    };
    function $(e, t) {
      var r = P.get(e);
      if (r == null) {
        var o = e.dynamicKey,
          a = e.handle,
          i = e.key,
          l = e.name,
          s = e.args,
          u = e.filters,
          c = n("relay-runtime/util/getRelayHandleKey")(a, i, l),
          d = null;
        (s &&
          u &&
          s.length !== 0 &&
          u.length !== 0 &&
          (d = s.filter(function (e) {
            return u.indexOf(e.name) > -1;
          })),
          o && (d = d != null ? [o].concat(d) : [o]));
        var m = {
          filterArgs: d,
          handleName: c,
          key: c,
          values: null,
          variableNames: d != null ? q(d) : null,
        };
        ((r = m), P.set(e, m));
      }
      var p = r.filterArgs;
      if (p == null) return r.handleName;
      var _ = t != null ? r.variableNames : null;
      if (_ != null) {
        var f = r.values;
        if (f != null && H(_, t, f)) return r.key;
      }
      var g = E(r.handleName, C(p, t));
      return (_ != null && ((r.key = g), (r.values = V(_, t))), g);
    }
    var P = new WeakMap(),
      N = new Map(),
      M = new Map();
    function w(e) {
      var t = N.get(e);
      return (t === void 0 && ((t = "" + f + e), N.set(e, t)), t);
    }
    function A(e) {
      var t = M.get(e);
      return (t === void 0 && ((t = "" + g + e), M.set(e, t)), t);
    }
    function F(e, t, n, r) {
      if (r == null) return E(n, C(t, r));
      var o = j.get(e);
      o == null && ((o = O(t, n)), j.set(e, o));
      var a = o.variableNames;
      if (a != null) {
        var i = o.values;
        if (i != null && H(a, r, i)) return o.key;
      }
      return B(o, t, n, r);
    }
    function O(e, t) {
      var n = W(e);
      return {
        byValue: n != null ? new Map() : null,
        byVariables: new WeakMap(),
        key: t,
        values: null,
        variableName: n,
        variableNames: q(e),
      };
    }
    function B(e, t, n, r) {
      var o = e.variableName,
        a = e.byValue;
      if (o != null && a != null) {
        var i = r[o];
        if (
          typeof i == "string" ||
          typeof i == "number" ||
          typeof i == "boolean"
        ) {
          var l = a.get(i);
          return (
            l == null &&
              ((l = E(n, C(t, r))), a.size >= z && a.clear(), a.set(i, l)),
            (e.key = l),
            (e.values = e.variableNames != null ? V(e.variableNames, r) : null),
            l
          );
        }
      }
      var s = e.byVariables,
        u = s.get(r);
      u == null && ((u = E(n, C(t, r))), s.set(r, u));
      var c = e.variableNames;
      return (c != null && ((e.key = u), (e.values = V(c, r))), u);
    }
    function W(e) {
      for (var t = null, n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.kind === u) {
          if (t != null) return null;
          t = r.variableName;
        } else if (r.kind !== c) return null;
      }
      return t;
    }
    function q(e) {
      var t = [];
      return U(e, t) ? t : null;
    }
    function U(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (!(r == null || r.kind === c))
          if (r.kind === u) t.push(r.variableName);
          else if (r.kind === d) {
            if (!U(r.fields, t)) return !1;
          } else if (r.kind === m) {
            if (!U(r.items, t)) return !1;
          } else return !1;
      }
      return !0;
    }
    function V(e, t) {
      for (var n = new Array(e.length), r = 0; r < e.length; r++) {
        var o = t[e[r]];
        if (o === void 0) return null;
        n[r] = o;
      }
      return n;
    }
    function H(e, t, n) {
      for (var r = 0; r < e.length; r++) {
        var o = t[e[r]];
        if (o !== n[r] && !G(o, n[r])) return !1;
      }
      return !0;
    }
    function G(e, t) {
      if (
        e == null ||
        t == null ||
        typeof e != "object" ||
        typeof t != "object" ||
        Array.isArray(e) !== Array.isArray(t) ||
        (Array.isArray(e) && Array.isArray(t) && e.length !== t.length)
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var o = 0; o < n.length; o++) {
        var a = n[o],
          i = e[a];
        if (
          a !== r[o] ||
          (i != null && typeof i == "object") ||
          typeof i == "function" ||
          i !== t[a]
        )
          return !1;
      }
      return !0;
    }
    var z = 1024,
      j = new WeakMap();
    function K(e, t) {
      if (
        !n("relay-runtime/util/RelayFeatureFlags")
          .ENABLE_READ_TIME_RESOLVER_STORAGE_KEY_PREFIX
      )
        return v(e, t);
      var r = Q.get(e);
      if (r != null) return r;
      var o = "$r:" + v(e, t);
      return (r === void 0 && Q.set(e, X(R(e)) ? null : o), o);
    }
    var Q = new WeakMap();
    function X(e) {
      if (e == null) return !1;
      for (var t = 0; t < e.length; t++) if (Y(e[t])) return !0;
      return !1;
    }
    function Y(e) {
      return e == null || e.kind === c
        ? !1
        : e.kind === d
          ? X(e.fields)
          : e.kind === m
            ? X(e.items)
            : !0;
    }
    a.exports = x;
  },
  null,
);
