__d(
  "SharedWorkerDevChangeManager",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = new Set();
    function u(e, t) {
      var n = t.storageWorkerResource,
        r = t.tabResource;
      return !0;
    }
    function c(e) {
      return !1;
    }
    function d(e) {}
    ((l.shouldUseStorageWorkerForDev = u),
      (l.shouldUpgradeWorkerForDevExperimental = c),
      (l.trackCreatedWorker = d));
  },
  98,
);
