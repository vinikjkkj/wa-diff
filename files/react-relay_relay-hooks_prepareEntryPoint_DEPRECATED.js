__d(
  "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED",
  ["react-relay/relay-hooks/preloadQuery_DEPRECATED"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, r, o) {
      r.root.getModuleIfRequired() == null && r.root.load();
      var a = r.getPreloadProps(o),
        i = a.queries,
        l = a.entryPoints,
        s = {},
        u = {};
      if (i != null) {
        var c = Object.keys(i);
        c.forEach(function (e) {
          var r = i[e],
            o = r.environmentProviderOptions,
            a = r.options,
            l = r.parameters,
            u = r.variables,
            c = t.getEnvironment(o);
          s[e] = n("react-relay/relay-hooks/preloadQuery_DEPRECATED")(
            c,
            l,
            u,
            a,
            o,
          );
        });
      }
      if (l != null) {
        var d = Object.keys(l);
        d.forEach(function (n) {
          var r = l[n];
          if (r != null) {
            var o = r.entryPoint,
              a = r.entryPointParams;
            u[n] = e(t, o, a);
          }
        });
      }
    }
    a.exports = e;
  },
  null,
);
