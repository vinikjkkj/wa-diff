__d(
  "WAWebSyncKeyStore",
  ["WAWebNoop", "WAWebSchemaSyncKeys", "WAWebSyncdDb"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.get = function (t) {
          return o("WAWebSyncdDb").getSyncKey(t);
        }),
        (t.getAll = function () {
          return o("WAWebSyncdDb").getAllSyncKeys();
        }),
        (t.set = function (t) {
          return o("WAWebSyncdDb").createSyncKey(t).then(r("WAWebNoop"));
        }),
        (t.expire = function (t) {
          return o("WAWebSyncdDb").expireSyncKey(t);
        }),
        (t.clear = function () {
          return o("WAWebSchemaSyncKeys").getSyncKeysTable().clear();
        }),
        e
      );
    })();
    ((e.locks = ["sync-keys"]), (l.WAWebSyncKeyStore = e));
  },
  98,
);
