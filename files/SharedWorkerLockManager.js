__d(
  "SharedWorkerLockManager",
  [
    "Deferred",
    "FBLogger",
    "WebStorageLockManager",
    "emptyFunction",
    "pageID",
    "promiseDone",
    "setTimeout",
    "supportsNativeWebLock",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "shared_worker_mutex",
      s = 6e5;
    function u(e) {
      var t,
        n =
          (t = window) == null || (t = t.navigator) == null ? void 0 : t.locks;
      if (n != null) return n;
      var a = o("WebStorageLockManager").make(r("pageID"));
      return a != null
        ? (e == null ||
            e.addAnnotations({ bool: { fallback_lock_manager: !0 } }),
          {
            request: function (t, n) {
              return a.request(t, n);
            },
          })
        : null;
    }
    function c(e, t, n) {
      r("setTimeout")(function () {
        e.isSettled() ||
          (t == null || t.endFailure("lock_timeout"),
          r("FBLogger")("worker").warn(
            "[SharedWorkerLockManager]: lock timed out in %s ms",
            s,
          ),
          e.resolve(),
          n == null || n());
      }, s);
    }
    function d(t, n) {
      var o = n.onLockFail,
        a = n.onLockTimeout,
        i = n.workerQPLLogger,
        l = u(i);
      if (
        (i == null ||
          i.addAnnotations({
            bool: {
              native_locks: l != null ? r("supportsNativeWebLock")() : null,
            },
          }),
        l == null)
      ) {
        (i == null || i.markPoint("no_lock_manager"),
          r("FBLogger")("worker").warn("Unable to initialize lock manager"),
          t(r("emptyFunction")));
        return;
      }
      i == null || i.markPoint("lock_requested");
      var s = new (r("Deferred"))();
      r("promiseDone")(
        l.request(e, function () {
          return (
            i == null || i.markPoint("lock_obtained"),
            c(s, i, a),
            t(function () {
              (i == null || i.markPoint("lock_released"), s.resolve());
            }),
            s.getPromise()
          );
        }),
        void 0,
        o,
      );
    }
    l.withWorkerLock = d;
  },
  98,
);
