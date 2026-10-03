__d(
  "SharedWorkerStorageManager",
  [
    "Deferred",
    "FBLogger",
    "WebAsyncStorage",
    "getErrorSafe",
    "promiseDone",
    "validateSharedWorkerReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "__swbundle__",
      s = {};
    function u(t) {
      return "" + e + t;
    }
    function c(e) {
      var t = new (r("Deferred"))();
      return (
        r("WebAsyncStorage").removeItem(u(e), function (n) {
          if (n) return t.reject(n);
          ((s[e] = null), t.resolve());
        }),
        t.getPromise()
      );
    }
    function d(e) {
      var t = new (r("Deferred"))();
      return (
        r("WebAsyncStorage").getItem(u(e), function (n, r) {
          if (n) return t.reject(n);
          ((s[e] = r), t.resolve(r));
        }),
        t.getPromise()
      );
    }
    function m() {
      return s;
    }
    function p(e, t) {
      return d(e)
        .then(function (e) {
          var t = r("validateSharedWorkerReference")(e);
          return t == null ? null : t;
        })
        .catch(function (n) {
          throw (
            r("FBLogger")("worker")
              .catching(r("getErrorSafe")(n))
              .mustfix(
                "Failed to getSharedWorkerReference for bundleName %s",
                e,
              ),
            t == null ||
              t.addAnnotations({
                bool: { failedToGetSharedWorkerResource: !0 },
              }),
            n
          );
        });
    }
    function _(e, t) {
      return c(e).catch(function (n) {
        throw (
          r("FBLogger")("worker")
            .catching(r("getErrorSafe")(n))
            .mustfix(
              "Failed to removeSharedWorkerReference for bundleName %s",
              e,
            ),
          t == null ||
            t.addAnnotations({
              bool: { failedToDeleteSharedWorkerResource: !0 },
            }),
          n
        );
      });
    }
    function f(e, t, n) {
      var o = r("WebAsyncStorage").isOpenPromiseSettled();
      (n == null ||
        n.addAnnotations({ bool: { isWebAsyncStorageIndexedDBOpened: o } }),
        o &&
          r("promiseDone")(r("WebAsyncStorage").isOperational(), function (e) {
            n == null ||
              n.addAnnotations({
                string: {
                  idb_open_error:
                    e.success === !1 ? e.error.message : "No IDB open error",
                },
              });
          }));
      var a = new (r("Deferred"))();
      return (
        r("WebAsyncStorage").upsertAndSaveAtomic(
          u(e),
          function (e) {
            var n = r("validateSharedWorkerReference")(e);
            return t(n);
          },
          function (t, o) {
            if ((n == null || n.markPoint("worker_reference_db_response"), t))
              return (
                r("FBLogger")("worker")
                  .catching(t)
                  .mustfix(
                    "Failed to getOrUpdateWorkerReference for bundleName %s",
                    e,
                  ),
                a.reject(t)
              );
            ((s[e] = o), a.resolve(o));
          },
        ),
        a.getPromise()
      );
    }
    ((l.SHARED_WORKER_STORAGE_KEY_BASE = e),
      (l.getDebugState = m),
      (l.getSharedWorkerReference = p),
      (l.removeSharedWorkerReference = _),
      (l.getOrUpdateWorkerReference = f));
  },
  98,
);
