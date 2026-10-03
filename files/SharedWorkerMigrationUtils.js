__d(
  "SharedWorkerMigrationUtils",
  [
    "SharedWorkerStatusLock",
    "asyncToGeneratorRuntime",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("supportsNativeWebLock")();
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("supportsNativeWebLock")()) return !0;
          var t = yield self.navigator.locks.query();
          return t.held.some(function (t) {
            return t.name === o("SharedWorkerStatusLock").getStatusLockName(e);
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!r("supportsNativeWebLock")()) return !0;
          var n = yield self.navigator.locks.query();
          return n.held.some(function (n) {
            return (
              n.name ===
              o("SharedWorkerStatusLock").getWorkerIdStatusLockName(e, t)
            );
          });
        })),
        d.apply(this, arguments)
      );
    }
    ((l.supportsNativeWebLocks = e),
      (l.isStatusLockHeld = s),
      (l.isWorkerIdStatusLockHeld = c));
  },
  98,
);
