__d(
  "relay-runtime/store/RelayConcreteVariables",
  ["invariant", "relay-runtime/store/RelayStoreUtils"],
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
    function c(t, n, r) {
      if (n == null) return t;
      var o = babelHelpers.extends({}, t),
        a = r ? e(r, t) : {};
      return (
        n.forEach(function (e) {
          var t,
            n = (t = a[e.name]) != null ? t : e.defaultValue;
          o[e.name] = n;
        }),
        o
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
