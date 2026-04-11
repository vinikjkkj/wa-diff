__d(
  "WAWebGetSyncKey",
  ["WAWebRunInTransaction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncKeyStore: !0 },
        function (t) {
          var n = t.SyncKeyStore;
          return n.get(e);
        },
      );
    }
    function s() {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncKeyStore: !0 },
        function (e) {
          var t = e.SyncKeyStore;
          return t.getAll();
        },
      );
    }
    function u(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncKeyStore: !0 },
        function (t) {
          var n = t.SyncKeyStore;
          return n.set(e);
        },
      );
    }
    function c(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncKeyStore: !0 },
        function (t) {
          var n = t.SyncKeyStore;
          return n.expire(e);
        },
      );
    }
    ((l.getSyncKeyInTransaction_DO_NOT_USE = e),
      (l.getAllSyncKeysInTransaction = s),
      (l.setSyncKeyInTransaction = u),
      (l.expireSyncKeyInTransaction = c));
  },
  98,
);
