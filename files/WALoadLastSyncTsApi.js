__d(
  "WALoadLastSyncTsApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["contacts"],
          "readonly",
          function (e) {
            return e.stores.contacts.bulkGet([t]).then(function (e) {
              var t,
                n = e.filter(Boolean).length > 0 ? e[0] : null;
              return (t = n == null ? void 0 : n.lastSyncTs) != null ? t : null;
            });
          },
          o("WASignalDB").signalOp("loadLastSyncTs"),
        );
    };
    l.loadLastSyncTs = e;
  },
  98,
);
