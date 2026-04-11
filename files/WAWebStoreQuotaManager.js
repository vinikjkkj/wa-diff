__d(
  "WAWebStoreQuotaManager",
  ["WAStorageEstimator", "WAWebABProps", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = 1073741824,
      s = new Map([
        [
          "lru-media-store",
          {
            getQuota: function (n) {
              return n <=
                o("WAWebABProps").getABPropConfigValue(
                  "web_browser_quota_threshold",
                ) *
                  e
                ? Math.min(
                    n * 0.2,
                    o("WAWebABProps").getABPropConfigValue(
                      "web_browser_min_storage_quota",
                    ) * e,
                  )
                : 0.2 * n;
            },
          },
        ],
      ]),
      u = (function () {
        function e(e) {
          this.$1 = e;
        }
        var t = e.prototype;
        return (
          (t.getQuotaForStore = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  r = yield o("WAStorageEstimator").estimateStorage();
                if (!r.success) return 0;
                var a = r.value.quota;
                return Math.floor(
                  (t = (n = this.$1.get(e)) == null ? void 0 : n.getQuota(a)) !=
                    null
                    ? t
                    : 0,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      c = new u(s);
    l.storeQuotaManager = c;
  },
  98,
);
