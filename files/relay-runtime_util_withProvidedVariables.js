__d(
  "relay-runtime/util/withProvidedVariables",
  ["areEqual", "warning"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = typeof WeakMap == "function",
      s = l ? new WeakMap() : new Map();
    function u(e, t) {
      if (t != null) {
        var n = {};
        return (
          Object.assign(n, e),
          Object.keys(t).forEach(function (e) {
            var r = t[e].get,
              o = r();
            if (!s.has(r)) (s.set(r, o), (n[e] = o));
            else {
              var a = s.get(r);
              n[e] = a;
            }
          }),
          n
        );
      } else return e;
    }
    ((u.tests_only_resetDebugCache = void 0), (a.exports = u));
  },
  null,
);
