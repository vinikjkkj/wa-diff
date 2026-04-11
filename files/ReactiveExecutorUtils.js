__d(
  "ReactiveExecutorUtils",
  ["relay-runtime", "relay-runtime/store/RelayStoreUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.storageKey != null) return e.storageKey;
      var n = u(e),
        r = e.name;
      return n && n.length !== 0
        ? o("relay-runtime/store/RelayStoreUtils").formatStorageKey(
            r,
            o("relay-runtime").getArgumentValues(n, t),
          )
        : r;
    }
    function s(e) {
      if (e == null) return [];
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e[n];
        t.push({ kind: "Variable", name: r.name, variableName: r.name });
      }
      return t;
    }
    function u(e) {
      if (e.kind === "RelayResolver" || e.kind === "RelayLiveResolver") {
        var t, n;
        if (e.args == null) {
          var r;
          return s(
            (r = e.resolverInfo) == null || (r = r.rootFragment) == null
              ? void 0
              : r.argumentDefinitions,
          );
        }
        return ((t = e.resolverInfo) == null || (t = t.rootFragment) == null
          ? void 0
          : t.argumentDefinitions) == null
          ? e.args
          : e.args.concat(
              s(
                (n = e.resolverInfo) == null || (n = n.rootFragment) == null
                  ? void 0
                  : n.argumentDefinitions,
              ),
            );
      }
      return e.args;
    }
    ((l.getStorageKey = e),
      (l.convertLocalArgumentsToNormalizationVariableArguments = s));
  },
  98,
);
