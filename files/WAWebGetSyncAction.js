__d(
  "WAWebGetSyncAction",
  ["WASyncdConst", "WAWebRunInTransaction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (e) {
          var t = e.SyncActionStore;
          return t.count();
        },
      );
    }
    function s(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (t) {
          var n = t.SyncActionStore;
          return n.get(e);
        },
      );
    }
    function u(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (t) {
          var n = t.SyncActionStore;
          return n.getByCollections(e);
        },
      );
    }
    function c(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (t) {
          var n = t.SyncActionStore;
          return n.getByIndexMacs(e);
        },
      );
    }
    function d(e, t) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (n) {
          var r = n.SyncActionStore;
          return r.getByCollectionAndIndex(e, t);
        },
      );
    }
    function m(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (t) {
          var n = t.SyncActionStore;
          return n.getByActionStates(e);
        },
      );
    }
    function p(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (t) {
          var n = t.SyncActionStore;
          return n.getByModelInfos(e);
        },
      );
    }
    function _() {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (e) {
          var t = e.SyncActionStore;
          return t.getAll();
        },
      );
    }
    function f(e) {
      return o("WAWebRunInTransaction").runInTransaction(
        { SyncActionStore: !0 },
        function (t) {
          var n = t.SyncActionStore;
          return n
            .getByActionStates([o("WASyncdConst").SyncActionState.Orphan])
            .then(function (t) {
              return t.filter(function (t) {
                return (
                  t.modelType != null &&
                  o("WASyncdConst").SyncModelType.cast(t.modelType) === e
                );
              });
            });
        },
      );
    }
    ((l.countSyncActionsInTransaction = e),
      (l.getSyncActionInTransaction = s),
      (l.getSyncActionsByCollectionsInTransaction = u),
      (l.getSyncActionsByIndexMacsInTransaction = c),
      (l.getSyncActionsByCollectionAndIndexesInTransaction = d),
      (l.getSyncActionsByActionStatesInTransaction = m),
      (l.getSyncActionsByModelInfosInTransaction = p),
      (l.getAllSyncActions = _),
      (l.getOrphanSyncActionsByModelTypeInTransaction = f));
  },
  98,
);
