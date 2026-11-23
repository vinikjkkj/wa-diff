__d(
  "WASetMetaApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta"],
          "readwrite",
          function (e) {
            return e.stores.meta.bulkPut(
              Object.entries(t).map(function (e) {
                var t,
                  n = e[0],
                  r = e[1];
                return { key: n, value: ((t = {}), (t[n] = r), t) };
              }),
            );
          },
          o("WASignalDB").signalOp("setMeta"),
        )
        .then(function () {});
    };
    l.setMeta = e;
  },
  98,
);
