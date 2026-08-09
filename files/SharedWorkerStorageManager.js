__d(
  "SharedWorkerStorageManager",
  [
    "Deferred",
    "FBLogger",
    "Promise",
    "WebAsyncStorage",
    "promiseDone",
    "validateSharedWorkerReference",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "__swbundle__",
      u = {};
    function c(e) {
      return "" + s + e;
    }
    function d(e) {
      var t = new (r("Deferred"))();
      return (
        r("WebAsyncStorage").removeItem(c(e), function (n) {
          if (n) return t.reject(n);
          ((u[e] = null), t.resolve());
        }),
        t.getPromise()
      );
    }
    function m(e, t) {
      var n = new (r("Deferred"))();
      return (
        r("WebAsyncStorage").setItem(c(e), t, function (r) {
          if (r != null) return n.reject(r);
          ((u[e] = t), n.resolve());
        }),
        n.getPromise()
      );
    }
    function p(e) {
      var t = new (r("Deferred"))();
      return (
        r("WebAsyncStorage").getItem(c(e), function (n, r) {
          if (n) return t.reject(n);
          ((u[e] = r), t.resolve(r));
        }),
        t.getPromise()
      );
    }
    function _() {
      return u;
    }
    function f(e, t) {
      return p(e)
        .then(function (e) {
          var t = r("validateSharedWorkerReference")(e);
          return t == null ? null : t;
        })
        .catch(function (n) {
          throw (
            r("FBLogger")("worker")
              .catching(n)
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
    function g(e, t) {
      return d(e).catch(function (n) {
        throw (
          r("FBLogger")("worker")
            .catching(n)
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
    function h(t, o, a) {
      var i = r("validateSharedWorkerReference")(o);
      return i == null
        ? (r("FBLogger")("worker").mustfix(
            'Failed to save worker reference for bundle "%s". Invalid reference: %s',
            t,
            JSON.stringify(o),
          ),
          (e || (e = n("Promise"))).resolve())
        : m(t, i).catch(function (e) {
            throw (
              r("FBLogger")("worker")
                .catching(e)
                .mustfix(
                  "Failed to saveSharedWorkerReference for bundleName %s",
                  t,
                ),
              a == null ||
                a.addAnnotations({
                  bool: { failedToSaveSharedWorkerResource: !0 },
                }),
              e
            );
          });
    }
    function y(e, t, n) {
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
          c(e),
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
            ((u[e] = o), a.resolve(o));
          },
        ),
        a.getPromise()
      );
    }
    ((l.SHARED_WORKER_STORAGE_KEY_BASE = s),
      (l.getDebugState = _),
      (l.getSharedWorkerReference = f),
      (l.removeSharedWorkerReference = g),
      (l.saveSharedWorkerReference = h),
      (l.getOrUpdateWorkerReference = y));
  },
  98,
);
