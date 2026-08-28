__d(
  "ZenonGenericLocalStorageStore",
  [
    "CacheStorage",
    "WebStorage",
    "ZenonODSLogger",
    "ZenonUserActionLogger",
    "areEqual",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 2e3,
      c = 3,
      d = (function () {
        function t(e, t, n) {
          ((this.$1 = e), (this.$2 = new (r("CacheStorage"))(t, n)));
        }
        var n = t.prototype;
        return (
          (n.getLocalStorageObjects = function () {
            return this.$2.get(this.$1) || {};
          }),
          (n.removeLocalStorageObjects = function (t) {
            this.mutateLocalStorageObjects(function (e) {
              return (
                t.forEach(function (t) {
                  var n = t.peerID,
                    r = t.signalingID;
                  e[n] &&
                    e[n][r] &&
                    (delete e[n][r],
                    Object.entries(e[n]).length === 0 && delete e[n]);
                }),
                e
              );
            });
          }),
          (n.mutateLocalStorageObjects = function (n, o, a, i) {
            var t = this;
            (o === void 0 && (o = c),
              a === void 0 && (a = !1),
              i === void 0 && (i = null));
            var l = this.getLocalStorageObjects(),
              s = this.getLocalStorageObjects(),
              d = n(l),
              m = this.getLocalStorageObjects();
            (e || (e = r("areEqual")))(s, m)
              ? (this.$2.set(this.$1, d),
                this.logStorageError(this.$2.getLastSetException(), i))
              : o > 0 &&
                (a
                  ? r("setTimeout")(function () {
                      t.mutateLocalStorageObjects(n, o - 1, !0);
                    }, u)
                  : this.mutateLocalStorageObjects(n, o - 1, !0));
          }),
          (n.logStorageError = function (t, n) {
            t != null &&
              (r("ZenonUserActionLogger").logError({
                call_id: n == null ? void 0 : n.signalingID,
                error_domain:
                  "ZenonGenericLocalStorageStore_storeLocalStorageObjects",
                error_type: t.name,
                peer_id: n == null ? void 0 : n.peerID,
              }),
              (s || (s = r("WebStorage"))).isLocalStorageQuotaExceeded() &&
                r("ZenonODSLogger").logCounter("local_storage_quota_exceeded"));
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
