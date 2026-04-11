__d(
  "WAWebRunInTransaction",
  [
    "Promise",
    "WAWeb-dexie",
    "WAWebCollectionVersionStore",
    "WAWebMissingKeyStore",
    "WAWebModelStorageUtils",
    "WAWebPendingMutationStore",
    "WAWebSyncActionStore",
    "WAWebSyncKeyStore",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        SyncActionStore: o("WAWebSyncActionStore").WAWebSyncActionStore,
        CollectionVersionStore: o("WAWebCollectionVersionStore")
          .WAWebCollectionVersionStore,
        PendingMutationStore: o("WAWebPendingMutationStore")
          .WAWebPendingMutationStore,
        MissingKeyStore: o("WAWebMissingKeyStore").WAWebMissingKeyStore,
        SyncKeyStore: o("WAWebSyncKeyStore").WAWebSyncKeyStore,
      },
      u = function (a, i) {
        if (r("WAWeb-dexie").currentTransaction != null)
          return (e || (e = n("Promise"))).reject(
            r("err")(
              "Calling runInTransaction recursively. This is not allowed.",
            ),
          );
        var t = Object.keys(a),
          l = t.flatMap(function (e) {
            return s[e].locks;
          });
        return o("WAWebModelStorageUtils")
          .getStorage()
          .lock(l, function () {
            var e = {};
            for (var n of t) e[n] = new s[n]();
            return i(e);
          });
      };
    l.runInTransaction = u;
  },
  98,
);
