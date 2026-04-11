__d(
  "WAWebGetPendingMutation",
  ["WAWebRunInTransaction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { PendingMutationStore: !0 },
        function (t) {
          var n = t.PendingMutationStore;
          return n.getByCollection(e);
        },
      );
    }
    function s() {
      return o("WAWebRunInTransaction").runInTransaction(
        { PendingMutationStore: !0 },
        function (e) {
          var t = e.PendingMutationStore;
          return t.getAll();
        },
      );
    }
    function u() {
      return o("WAWebRunInTransaction").runInTransaction(
        { PendingMutationStore: !0 },
        function (e) {
          var t = e.PendingMutationStore;
          return t.getCollectionsWithPendingMutations();
        },
      );
    }
    function c(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { PendingMutationStore: !0 },
        function (t) {
          var n = t.PendingMutationStore;
          return n.bulkCreate(e);
        },
      );
    }
    ((l.getSyncPendingMutationsByCollectionInTransaction = e),
      (l.getAllSyncPendingMutationsInTransaction = s),
      (l.getSyncdCollectionsWithPendingMutationsInTransaction = u),
      (l.bulkCreateSyncPendingMutationsInTransaction = c));
  },
  98,
);
