__d(
  "WALoadOneTimePreKeyApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["prekey"],
          "readonly",
          function (e) {
            return e.stores.prekey.get(t).then(function (e) {
              return e == null ? void 0 : e.encoded;
            });
          },
          o("WASignalDB").signalOp("loadOneTimePreKey"),
        );
    };
    l.loadOneTimePreKey = e;
  },
  98,
);
