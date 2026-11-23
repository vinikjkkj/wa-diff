__d(
  "makeCometRouteEntryPointContainer",
  [
    "CometRelay",
    "CometRouteResourceContainer",
    "CometRouterSSREntrypoint",
    "Promise",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = e.componentProps,
        n = e.entryPointReference;
      return u.jsx(o("CometRelay").EntryPointContainer, {
        entryPointReference: n,
        props: t,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = o(
      "CometRouteResourceContainer",
    ).createCometResourceContainerFactory({
      dispose: function (t) {
        t.dispose();
      },
      getHash: function (t) {
        var e = t.deferredEntryPoint.getModuleIfRequireable();
        if (!e) return null;
        var n = o(
            "CometRouterSSREntrypoint",
          ).processRootEntryPointDataWithExtraProps(e, t.preloadParams),
          r = n.extraProps,
          a = n.queries,
          i = n.roots;
        return JSON.stringify({ extraProps: r, queries: a, roots: i });
      },
      prepare: function (r, a) {
        function t(e) {
          var t = o("CometRelay").loadEntryPoint(
            r.environmentProvider,
            e,
            r.preloadParams,
          );
          return {
            dispose: function () {
              t.dispose();
            },
            getPreloadedEntryPoints: function () {
              return t.entryPoints;
            },
            render: function (n) {
              return u.jsx(c, { componentProps: n, entryPointReference: t });
            },
          };
        }
        var i = r.deferredEntryPoint.getModuleIfRequireable();
        return i != null
          ? { type: "resource", value: t(i) }
          : {
              type: "promise",
              value: new (e || (e = n("Promise")))(function (e) {
                r.deferredEntryPoint.onReady(function (n) {
                  if (a()) return e(null);
                  e(t(n));
                });
              }),
            };
      },
    });
    function m(e, t, n) {
      return t.entryPoint == null
        ? null
        : d({
            deferredEntryPoint: t.entryPoint,
            environmentProvider: e,
            preloadParams: n,
          });
    }
    l.default = m;
  },
  98,
);
