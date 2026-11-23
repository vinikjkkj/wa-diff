__d(
  "WAWebStoreQuotaManager",
  ["WAStorageEstimator", "WAWebABProps"],
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
          (t.getQuotaForStore = async function (t) {
            var e,
              n,
              r = await o("WAStorageEstimator").estimateStorage();
            if (!r.success) return 0;
            var a = r.value.quota;
            return Math.floor(
              (e = (n = this.$1.get(t)) == null ? void 0 : n.getQuota(a)) !=
                null
                ? e
                : 0,
            );
          }),
          e
        );
      })(),
      c = new u(s);
    l.storeQuotaManager = c;
  },
  98,
);
