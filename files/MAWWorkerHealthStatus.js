__d(
  "MAWWorkerHealthStatus",
  [
    "MAWWaitForBackendSetup",
    "MAWWorkerBundleResource",
    "Promise",
    "SharedWorkerMigrationUtils",
    "SharedWorkerV4MigrationUtils",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1;
    function u(e) {
      s = e;
    }
    function c() {
      var t = {
        isSharedWorker: o(
          "shouldUseMAWSharedWorker",
        ).shouldUseMAWSharedWorker(),
        nativeLocksSupported: o(
          "SharedWorkerMigrationUtils",
        ).supportsNativeWebLocks(),
        workerCreationPromiseExists: s,
      };
      if (t.isSharedWorker !== !0)
        return (e || (e = n("Promise"))).resolve(
          t.workerCreationPromiseExists === !0
            ? { data: t, tag: "dedicated_exists" }
            : { data: t, tag: "dedicated_not_exists" },
        );
      if (t.nativeLocksSupported !== !0)
        return (e || (e = n("Promise"))).resolve({
          data: t,
          tag: "shared_unknown_locks_not_supported",
        });
      var a = o("MAWWaitForBackendSetup").getCurrentWorkerID();
      return (e || (e = n("Promise")))
        .all([
          o("SharedWorkerMigrationUtils").isStatusLockHeld(
            r("MAWWorkerBundleResource").name,
          ),
          a != null
            ? o("SharedWorkerMigrationUtils").isWorkerIdStatusLockHeld(
                r("MAWWorkerBundleResource").name,
                a,
              )
            : (e || (e = n("Promise"))).resolve(!1),
          o("SharedWorkerV4MigrationUtils").isV4WorkerRunning(
            r("MAWWorkerBundleResource").name,
          ),
        ])
        .then(function (e) {
          var n = e[0],
            r = e[1],
            o = e[2];
          return (
            (t.sharedLockHeld = n),
            (t.workerIdLockHeld = r),
            (t.v4Running = o),
            n && r
              ? { data: t, tag: "shared_exists_and_connected" }
              : n
                ? { data: t, tag: "shared_exists_not_connected" }
                : r
                  ? { data: t, tag: "shared_only_unique_lock_held" }
                  : o
                    ? { data: t, tag: "shared_v4_running" }
                    : { data: t, tag: "shared_not_exists" }
          );
        });
    }
    ((l.markWorkerCreationPromiseExists = u), (l.getWorkerHealthStatus = c));
  },
  98,
);
