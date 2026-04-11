__d(
  "react-relay/relay-hooks/loadEntryPoint",
  ["react-relay/relay-hooks/loadQuery"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("react-relay/relay-hooks/loadQuery").loadQuery;
    function l(t, n, r) {
      var o = null;
      n.root.getModuleIfRequired() == null && (o = n.root.load());
      var a = n.getPreloadProps(r),
        i = a.queries,
        s = a.entryPoints,
        u = a.extraProps,
        c = {},
        d = {};
      if (i != null) {
        var m = Object.keys(i);
        m.forEach(function (n) {
          var r = i[n];
          if (r != null) {
            var o = r.environmentProviderOptions,
              a = r.options,
              l = r.parameters,
              s = r.variables;
            if ((a == null ? void 0 : a.includeIf) !== !1) {
              var u = t.getEnvironment(o);
              c[n] = e(
                u,
                l,
                s,
                {
                  __nameForWarning: "loadEntryPoint",
                  fetchPolicy: a == null ? void 0 : a.fetchPolicy,
                  networkCacheConfig: a == null ? void 0 : a.networkCacheConfig,
                },
                o,
              );
            }
          }
        });
      }
      if (s != null) {
        var p = Object.keys(s);
        p.forEach(function (e) {
          var n = s[e];
          if (n != null) {
            var r = n.entryPoint,
              o = n.entryPointParams;
            d[e] = l(t, r, o);
          }
        });
      }
      var _ = !1;
      return {
        dispose: function () {
          _ ||
            (c != null &&
              Object.values(c).forEach(function (e) {
                var t = e.dispose;
                t();
              }),
            d != null &&
              Object.values(d).forEach(function (e) {
                var t = e.dispose;
                t();
              }),
            (_ = !0));
        },
        entryPoints: d,
        extraProps: u != null ? u : null,
        getComponent: function () {
          var e = n.root.getModuleIfRequired();
          if (e == null) throw ((o = o != null ? o : n.root.load()), o);
          var t = e.default != null ? e.default : e;
          return t;
        },
        get isDisposed() {
          return _;
        },
        queries: c,
        rootModuleID: n.root.getModuleId(),
      };
    }
    a.exports = l;
  },
  null,
);
