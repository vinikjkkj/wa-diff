__d(
  "WALoadLatestSignedPreKeyApi",
  ["WADbSignedPrekeyTxns", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta", "signedPrekey"],
          "readonly",
          function (e) {
            return o("WADbSignedPrekeyTxns").getLatestSignedPreKey(e.stores);
          },
          o("WASignalDB").signalOp("loadLatestSignedPreKey"),
        );
    };
    l.loadLatestSignedPreKey = e;
  },
  98,
);
