__d(
  "WAGetLastPreKeyGenerationIdApi",
  ["WADbSignal", "WASignalDB", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function () {
      var e = await o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["meta"],
            "readonly",
            function (e) {
              return Promise.all([
                e.stores.meta
                  .get(o("WADbSignal").MetaKeysEnum.lastPrekeyId)
                  .then(function (e) {
                    return e == null ? void 0 : e.value.lastPrekeyId;
                  }),
                e.stores.meta
                  .get(o("WADbSignal").MetaKeysEnum.lastPrekeyGenerationId)
                  .then(function (e) {
                    return e == null ? void 0 : e.value.lastPrekeyGenerationId;
                  }),
              ]);
            },
            o("WASignalDB").signalOp("getLastPreKeyGenerationId"),
          ),
        t = e[0],
        n = e[1];
      if ((t == null && n != null) || (t != null && n == null))
        throw r("err")(
          "Last prekey id and Last prekey generation id should both be non-null",
        );
      return t != null && n != null
        ? { lastGenerationId: n, lastPreKeyId: t }
        : null;
    };
    l.getLastPreKeyGenerationId = e;
  },
  98,
);
