__d(
  "relay-runtime/store/RelayConcreteVariables",
  [
    "invariant",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayFeatureFlags",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/store/RelayStoreUtils").getArgumentValues;
    function s(e, t, n) {
      if (e.argumentDefinitions == null) return n;
      var r;
      return (
        e.argumentDefinitions.forEach(function (o) {
          if (!Object.prototype.hasOwnProperty.call(n, o.name))
            switch (((r = r || babelHelpers.extends({}, n)), o.kind)) {
              case "LocalArgument":
                r[o.name] = o.defaultValue;
                break;
              case "RootArgument":
                if (!Object.prototype.hasOwnProperty.call(t, o.name)) {
                  r[o.name] = void 0;
                  break;
                }
                r[o.name] = t[o.name];
                break;
              default:
                l(0, 3322, o.kind, e.name);
            }
        }),
        r || n
      );
    }
    function u(e, t, n) {
      var r = {};
      return (
        e.argumentDefinitions.forEach(function (e) {
          var t = e.defaultValue;
          (n[e.name] != null && (t = n[e.name]), (r[e.name] = t));
        }),
        t != null &&
          Object.keys(t).forEach(function (e) {
            r[e] = t[e].get();
          }),
        r
      );
    }
    function c(t, r, o) {
      if (r == null) return t;
      var a = babelHelpers.extends({}, t),
        i = o ? e(o, t) : {};
      return (
        r.forEach(function (e) {
          var t = i[e.name];
          a[e.name] =
            t !== void 0 &&
            (t !== null ||
              n("relay-runtime/util/RelayFeatureFlags")
                .ENABLE_EXPLICIT_NULL_FRAGMENT_ARGUMENTS)
              ? t
              : e.defaultValue;
        }),
        a
      );
    }
    a.exports = {
      getFragmentVariables: s,
      getLocalVariables: c,
      getOperationVariables: u,
    };
  },
  null,
);
