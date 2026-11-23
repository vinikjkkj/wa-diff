__d(
  "WASignedKeyApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["signedPrekey"],
          "readonly",
          function (t) {
            return t.stores.signedPrekey.get(e);
          },
          o("WASignalDB").signalOp("getSignedKey"),
        );
    }
    l.getSignedKey = e;
  },
  98,
);
