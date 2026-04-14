__d(
  "ReactiveExecutorUtils",
  ["relay-runtime", "relay-runtime/store/RelayStoreUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.storageKey != null) return e.storageKey;
      var n = u(e, t),
        r = e.name;
      return n && n.length !== 0
        ? o("relay-runtime/store/RelayStoreUtils").formatStorageKey(
            r,
            o("relay-runtime").getArgumentValues(n, t),
          )
        : r;
    }
    function s(e, t) {
      if (e == null) return [];
      for (var n = [], r = 0; r < e.length; r++) {
        var o = e[r];
        t != null && !(o.name in t)
          ? n.push({ kind: "Literal", name: o.name, value: o.defaultValue })
          : n.push({ kind: "Variable", name: o.name, variableName: o.name });
      }
      return n;
    }
    function u(e, t) {
      if (e.kind === "RelayResolver" || e.kind === "RelayLiveResolver") {
        var n;
        if (e.args == null) {
          var r;
          return s(
            (r = e.resolverInfo) == null || (r = r.rootFragment) == null
              ? void 0
              : r.argumentDefinitions,
            t,
          );
        }
        var o =
            (n = e.resolverInfo) == null || (n = n.rootFragment) == null
              ? void 0
              : n.argumentDefinitions,
          a = e.args;
        if (o == null || a == null) return a;
        var i = new Set(
            a.map(function (e) {
              return e.name;
            }),
          ),
          l = o.filter(function (e) {
            return !i.has(e.name);
          });
        return l.length > 0 ? a.concat(s(l, t)) : a;
      }
      return e.args;
    }
    ((l.getStorageKey = e),
      (l.convertLocalArgumentsToNormalizationVariableArguments = s));
  },
  98,
);
