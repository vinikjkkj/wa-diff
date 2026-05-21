__d(
  "WAWebBackendWorkerClient",
  ["WAResolvable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (o("WAResolvable").Resolvable)();
    function s() {
      return e.promise;
    }
    function u() {
      return e.resolveWasCalled();
    }
    function c(t) {
      e.resolveWasCalled() || e.resolve(t);
    }
    ((l.getBackendWorkerBridge = s),
      (l.isBackendWorkerBridgeReady = u),
      (l.setBackendWorkerBridge = c));
  },
  98,
);
