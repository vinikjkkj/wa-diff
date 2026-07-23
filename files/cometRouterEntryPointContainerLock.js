__d(
  "cometRouterEntryPointContainerLock",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n, r, o;
      ((n = t.hosted) == null ||
        (n = n.entryPointContainer) == null ||
        n.lock(e),
        (r = t.main) == null ||
          (r = r.entryPointContainer) == null ||
          r.lock(e),
        (o = t.pushViewStack) == null ||
          o.forEach(function (t) {
            var n;
            return t == null || (n = t.entryPointContainer) == null
              ? void 0
              : n.lock(e);
          }));
    }
    function l(e, t) {
      var n, r, o;
      ((n = t.hosted) == null ||
        (n = n.entryPointContainer) == null ||
        n.unlock(e),
        (r = t.main) == null ||
          (r = r.entryPointContainer) == null ||
          r.unlock(e),
        (o = t.pushViewStack) == null ||
          o.forEach(function (t) {
            var n;
            return t == null || (n = t.entryPointContainer) == null
              ? void 0
              : n.unlock(e);
          }));
    }
    ((i.lockEntrypointContainers = e), (i.unlockEntrypointContainers = l));
  },
  66,
);
