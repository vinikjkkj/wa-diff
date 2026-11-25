__d(
  "SharedWorkerMigrationUtils",
  ["SharedWorkerStatusLock", "supportsNativeWebLock"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("supportsNativeWebLock")();
    }
    async function s(e) {
      if (!r("supportsNativeWebLock")()) return !0;
      var t = await self.navigator.locks.query();
      return t.held.some(function (t) {
        return t.name === o("SharedWorkerStatusLock").getStatusLockName(e);
      });
    }
    async function u(e, t) {
      if (!r("supportsNativeWebLock")()) return !0;
      var n = await self.navigator.locks.query();
      return n.held.some(function (n) {
        return (
          n.name === o("SharedWorkerStatusLock").getWorkerIdStatusLockName(e, t)
        );
      });
    }
    ((l.supportsNativeWebLocks = e),
      (l.isStatusLockHeld = s),
      (l.isWorkerIdStatusLockHeld = u));
  },
  98,
);
