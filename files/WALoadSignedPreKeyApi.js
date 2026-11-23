__d(
  "WALoadSignedPreKeyApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["signedPrekey"],
          "readonly",
          function (e) {
            return e.stores.signedPrekey.get(t).then(function (e) {
              return e == null ? void 0 : e.encoded;
            });
          },
          o("WASignalDB").signalOp("loadSignedPreKey"),
        );
    };
    l.loadSignedPreKey = e;
  },
  98,
);
