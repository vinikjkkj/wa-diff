__d(
  "WAWebBackendWorkerBridge",
  ["WACrossWorkerPortal", "WADynamicRouterSync"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (o("WADynamicRouterSync").DynamicRouterSync)();
      for (var n of e) {
        var r = n.handlers,
          a = n.namespace;
        t.setHandlers(a, r);
      }
      return t;
    }
    function s(e, t, n) {
      var r = o("WACrossWorkerPortal").attachPortal(
        e,
        n,
        function (e, t) {
          return (e.push(t), e);
        },
        "d1923",
      );
      r.setPort(t);
    }
    ((l.createBridge = e), (l.attachBridgeToPortal = s));
  },
  98,
);
