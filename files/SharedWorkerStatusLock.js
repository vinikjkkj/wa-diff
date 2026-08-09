__d(
  "SharedWorkerStatusLock",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "sw-lock",
      l = "sw-ds-lock";
    function s(t) {
      return e + "-" + t;
    }
    function u(e) {
      return l + "-" + e;
    }
    function c(t, n) {
      return e + "-" + t + "-" + n;
    }
    function d() {
      var e = null,
        t;
      function n(n) {
        var r = self,
          o = r.navigator.locks;
        r.LockManager != null &&
          o instanceof r.LockManager &&
          (t == null &&
            (t = new r.Promise(function (t) {
              e = t;
            })),
          o.request(s(r.name), function (e) {
            if (e != null) return t;
          }),
          n.requestDynamicStringLockToo === !0 &&
            o.request(u(r.name), function (e) {
              if (e != null) return t;
            }),
          n.requestWorkerIdStatusLockToo === !0 &&
            o.request(c(r.name, r.worker_id), function (e) {
              if (e != null)
                return (
                  n.onUniqueLockAckquired == null || n.onUniqueLockAckquired(),
                  t
                );
            }));
      }
      function r() {
        (e == null || e(), (t = null), (e = null));
      }
      return { init: n, release: r };
    }
    ((i.getStatusLockName = s),
      (i.getDynamicStringInitLockName = u),
      (i.getWorkerIdStatusLockName = c),
      (i.getStatusLock = d));
  },
  66,
);
