__d(
  "WAWebACSStorageManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map(),
      l = (function () {
        function t(t, n) {
          var r = e.get(t);
          (r == null &&
            ((r = { tokens: new Map(), configs: new Map() }), e.set(t, r)),
            (this.$1 = r),
            (this.$2 = n));
        }
        var n = t.prototype;
        return (
          (n.getCachedToken = function (t) {
            var e = this.$1.tokens.get(t);
            return e != null && !this.$2(e)
              ? (this.$1.tokens.delete(t), null)
              : e != null
                ? e
                : null;
          }),
          (n.storeCachedToken = function (t) {
            this.$1.tokens.set(t.serverConfigId, t);
          }),
          (n.deleteCachedToken = function (t) {
            this.$1.tokens.delete(t.serverConfigId);
          }),
          (n.getServerConfig = function (t) {
            var e;
            return (e = this.$1.configs.get(t)) != null ? e : null;
          }),
          (n.getServerConfigs = function () {
            return Array.from(this.$1.configs.values());
          }),
          (n.storeServerConfig = function (t) {
            this.$1.configs.set(t.configId, t);
          }),
          (n.removeServerConfig = function (t) {
            this.$1.configs.delete(t);
          }),
          (n.clearStorage = function () {
            (this.$1.tokens.clear(), this.$1.configs.clear());
          }),
          t
        );
      })();
    i.WAWebACSStorageManager = l;
  },
  66,
);
