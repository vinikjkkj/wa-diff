__d(
  "WAGetPreKeyGenerationsTimestampsApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["prekeyGeneration"],
          "readonly",
          async function (e) {
            var t = await e.stores.prekeyGeneration.readAll();
            return t.map(function (e) {
              return { id: e.generationId, timestamp: e.createdTs };
            });
          },
          o("WASignalDB").signalOp("getPreKeyGenerationsTimestamps"),
        );
    };
    l.getPreKeyGenerationsTimestamps = e;
  },
  98,
);
