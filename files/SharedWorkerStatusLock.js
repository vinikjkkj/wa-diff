__d(
  "SharedWorkerStatusLock",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "sw-lock";
    function l(t) {
      return e + "-" + t;
    }
    function s(t, n) {
      return e + "-" + t + "-" + n;
    }
    function u() {
      var e = null,
        t;
      function n(n) {
        var r = self,
          o = r.navigator.locks;
        if (r.LockManager != null && o instanceof r.LockManager) {
          t == null &&
            (t = new r.Promise(function (t) {
              e = t;
            }));
          var a = o.request(l(r.name), function (e) {
            if (e != null) return t;
          });
          if (n.requestWorkerIdStatusLockToo === !0)
            var i = o.request(s(r.name, r.worker_id), function (e) {
              if (e != null)
                return (
                  n.onUniqueLockAckquired == null || n.onUniqueLockAckquired(),
                  t
                );
            });
        }
      }
      function r() {
        (e == null || e(), (t = null), (e = null));
      }
      return { init: n, release: r };
    }
    ((i.getStatusLockName = l),
      (i.getWorkerIdStatusLockName = s),
      (i.getStatusLock = u));
  },
  66,
);
