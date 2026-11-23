__d(
  "WAWebSyncdMdSyncFieldstatMeta",
  ["WAStorageEstimator", "WAWebSyncdMdSession"],
  function (t, n, r, o, a, i, l) {
    var e = -2,
      s = -1,
      u = (function () {
        function t() {
          ((this.$1 = { mdStorageQuotaBytes: -2, mdStorageQuotaUsedBytes: -2 }),
            (this.$2 = null));
        }
        var n = t.prototype;
        return (
          (n.getStorageEstimation = async function () {
            if (this.$1.mdStorageQuotaBytes !== e)
              return Promise.resolve(this.$1);
            var t = await o("WAStorageEstimator").estimateStorage();
            return (
              (this.$1 = {
                mdStorageQuotaBytes: t.success ? t.value.quota : s,
                mdStorageQuotaUsedBytes: t.success ? t.value.usage : s,
              }),
              this.$1
            );
          }),
          (n.getMdSessionId = async function () {
            return this.$2 != null
              ? this.$2
              : ((this.$2 = await o(
                  "WAWebSyncdMdSession",
                ).genCurrentSessionId()),
                this.$2);
          }),
          t
        );
      })(),
      c = new u();
    ((l.STORAGE_QUOTA_UNAVAILABLE = s), (l.MdSyncFieldStatsMeta = c));
  },
  98,
);
