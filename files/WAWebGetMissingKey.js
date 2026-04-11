__d(
  "WAWebGetMissingKey",
  ["WAWebRunInTransaction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebRunInTransaction").runInTransaction(
        { MissingKeyStore: !0 },
        function (e) {
          var t = e.MissingKeyStore;
          return t.getAll();
        },
      );
    }
    function s(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { MissingKeyStore: !0 },
        function (t) {
          var n = t.MissingKeyStore;
          return n.bulkGet(e);
        },
      );
    }
    function u() {
      return o("WAWebRunInTransaction").runInTransaction(
        { MissingKeyStore: !0 },
        function (e) {
          var t = e.MissingKeyStore;
          return t.count();
        },
      );
    }
    function c(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { MissingKeyStore: !0 },
        function (t) {
          var n = t.MissingKeyStore;
          return n.bulkUpdate(e);
        },
      );
    }
    ((l.getAllMissingKeysInTransaction = e),
      (l.bulkGetMissingKeysInTransaction = s),
      (l.getMissingKeyCountTransaction = u),
      (l.bulkUpdateMissingKeysInTransaction = c));
  },
  98,
);
