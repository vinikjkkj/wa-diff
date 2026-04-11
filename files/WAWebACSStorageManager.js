__d(
  "WAWebACSStorageManager",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map(),
      l = new Map(),
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.getCachedToken = function (n) {
            var t;
            return (t = e.get(n)) != null ? t : null;
          }),
          (n.storeCachedToken = function (n) {
            e.set(n.serverConfigId, n);
          }),
          (n.deleteCachedToken = function (n) {
            e.delete(n.serverConfigId);
          }),
          (n.getServerConfig = function (t) {
            var e;
            return (e = l.get(t)) != null ? e : null;
          }),
          (n.getServerConfigs = function () {
            return Array.from(l.values());
          }),
          (n.storeServerConfig = function (t) {
            l.set(t.configId, t);
          }),
          (n.removeServerConfig = function (t) {
            l.delete(t);
          }),
          (n.clearStorage = function () {
            (e.clear(), l.clear());
          }),
          t
        );
      })();
    i.WAWebACSStorageManager = s;
  },
  66,
);
