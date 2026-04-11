__d(
  "WAWebMissingKeyStore",
  ["WAWebSchemaMissingKeys", "WAWebSyncdDb"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getAll = function () {
          return o("WAWebSyncdDb").getAllMissingKeys();
        }),
        (t.bulkGet = function (t) {
          return o("WAWebSyncdDb").bulkGetMissingKeys(t);
        }),
        (t.count = function () {
          return o("WAWebSyncdDb").getMissingKeyCount();
        }),
        (t.bulkUpdate = function (t) {
          return o("WAWebSyncdDb").createOrUpdateMissingKeys(t);
        }),
        (t.bulkRemove = function (t) {
          return o("WAWebSyncdDb").bulkRemoveMissingKeys(t);
        }),
        (t.clear = function () {
          return o("WAWebSchemaMissingKeys").getMissingKeysTable().clear();
        }),
        e
      );
    })();
    ((e.locks = ["missing-keys"]), (l.WAWebMissingKeyStore = e));
  },
  98,
);
