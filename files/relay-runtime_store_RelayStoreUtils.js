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
      var n = R(e),
        r = e.name;
      return n && n.length !== 0 ? E(r, C(n, t)) : r;
    }
    function S(e, t) {
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
      var n = [];
      for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          var o = t[r];
          if (o != null) {
            var a;
            n.push(
              r + ":" + ((a = JSON.stringify(o)) != null ? a : "undefined"),
            );
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
      return "" + f + e;
    }
    function T(e) {
      return "" + g + e;
    }
    function D(e, t) {
      return "__fn:" + e + ":" + t;
    }
    var x = {
      ACTOR_IDENTIFIER_KEY: "__actorIdentifier",
      CLIENT_EDGE_TRAVERSAL_PATH: "__clientEdgeTraversalPath",
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
    a.exports = x;
  },
  null,
);
