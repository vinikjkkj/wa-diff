__d(
  "WAIdentityApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["identity"],
          "readwrite",
          function (e) {
            return e.stores.identity.bulkPut([t]);
          },
          o("WASignalDB").signalOp("saveIdentity"),
        )
        .then(function () {});
    };
    l.saveIdentity = e;
  },
  98,
);
