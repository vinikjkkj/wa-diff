__d(
  "WAWebSyncdMdSyncFieldstatMeta",
  [
    "Promise",
    "WAStorageEstimator",
    "WAWebSyncdMdSession",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = -2,
      u = -1,
      c = (function () {
        function t() {
          ((this.$1 = { mdStorageQuotaBytes: -2, mdStorageQuotaUsedBytes: -2 }),
            (this.$2 = null));
        }
        var r = t.prototype;
        return (
          (r.getStorageEstimation = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$1.mdStorageQuotaBytes !== s)
                return (e || (e = n("Promise"))).resolve(this.$1);
              var t = yield o("WAStorageEstimator").estimateStorage();
              return (
                (this.$1 = {
                  mdStorageQuotaBytes: t.success ? t.value.quota : u,
                  mdStorageQuotaUsedBytes: t.success ? t.value.usage : u,
                }),
                this.$1
              );
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.getMdSessionId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$2 != null
                ? this.$2
                : ((this.$2 = yield o(
                    "WAWebSyncdMdSession",
                  ).genCurrentSessionId()),
                  this.$2);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      d = new c();
    ((l.STORAGE_QUOTA_UNAVAILABLE = u), (l.MdSyncFieldStatsMeta = d));
  },
  98,
);
