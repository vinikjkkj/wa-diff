__d(
  "WAGetStorageQplAnnotations",
  [
    "Promise",
    "WAExceededStorageQuota",
    "WALogger",
    "WAPromiseCacheWithTtl",
    "WAStorageEstimator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 6e4,
      d = 1e3 * 60 * 5,
      m = o("WAPromiseCacheWithTtl").cacheWithTtl(
        c,
        o("WAStorageEstimator").estimateStorage,
      ),
      p = o("WAPromiseCacheWithTtl").cacheWithTtl(
        d,
        o("WAExceededStorageQuota").checkStorageQuota,
      );
    function _() {
      return (u || (u = n("Promise")))
        .all([m(), p()])
        .then(function (t) {
          var n = t[0],
            r = t[1];
          n.success ||
            n.error.type === "not-support" ||
            (n.error.type,
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to get storage info. runtime-error: ",
                  "",
                ])),
              n.error.runtimeError,
            ));
          var a = n.success ? n.value : {},
            i = a.quota,
            l = a.usage,
            s = a.usageDetails;
          return {
            bool: {
              exceededStorageQuota: o(
                "WAExceededStorageQuota",
              ).getExceededStorageQuota(),
            },
            int: {
              storageCache: s == null ? void 0 : s.caches,
              storageIndexedDB: s == null ? void 0 : s.indexedDB,
              storageQuota: i,
              storageServiceWorkerRegistrations:
                s == null ? void 0 : s.serviceWorkerRegistrations,
              storageUsage: l,
            },
          };
        })
        .catch(function (e) {
          throw (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to get storage info. unexpected-runtimer-error: ",
                  "",
                ])),
              e,
            ),
            e
          );
        });
    }
    l.getStorageQplAnnotations = _;
  },
  98,
);
