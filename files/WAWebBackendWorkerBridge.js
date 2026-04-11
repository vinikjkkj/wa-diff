__d(
  "WAWebBackendWorkerBridge",
  ["WACrossWorkerPortal", "WADynamicRouterSync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = new (o("WADynamicRouterSync").DynamicRouterSync)();
      for (var a of n) {
        var i = a.handlers,
          l = a.namespace;
        r.setHandlers(l, i);
      }
      var s = o("WACrossWorkerPortal").attachPortal(
        r,
        t,
        function (e, t) {
          return (e.push(t), e);
        },
        "d1923",
      );
      return (s.setPort(e), r);
    }
    l.createBridge = e;
  },
  98,
);
