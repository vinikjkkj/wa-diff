__d(
  "WASavePreKeysGenerationApi",
  [
    "WACryptoManager",
    "WADbSignal",
    "WAResultOrError",
    "WASignalDB",
    "WATimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      if (t.length === 0)
        throw r("err")(
          "Keys provided to savePreKeysGeneration cannot be empty",
        );
      var e = await o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta", "prekey", "prekeyGeneration"],
          "readwrite",
          async function (e) {
            var n,
              r = await e.stores.meta.get(
                o("WADbSignal").MetaKeysEnum.lastPrekeyGenerationId,
              ),
              a = o("WACryptoManager").castToPreKeyGenerationId(
                ((n = r == null ? void 0 : r.value.lastPrekeyGenerationId) !=
                null
                  ? n
                  : 0) + 1,
              ),
              i = t[0].keyId,
              l = t[t.length - 1].keyId,
              s = t.map(function (e) {
                return babelHelpers.extends({}, e, { isDeleted: !1 });
              });
            return (
              await Promise.all([
                e.stores.prekey.bulkPut(s),
                e.stores.meta.bulkPut([
                  {
                    key: o("WADbSignal").MetaKeysEnum.lastPrekeyId,
                    value: { lastPrekeyId: l },
                  },
                  {
                    key: o("WADbSignal").MetaKeysEnum.lastPrekeyGenerationId,
                    value: { lastPrekeyGenerationId: a },
                  },
                ]),
                e.stores.prekeyGeneration.bulkPut([
                  {
                    createdTs: o("WATimeUtils").unixTime(),
                    endingId: l,
                    generationId: a,
                    startingId: i,
                  },
                ]),
              ]),
              o("WAResultOrError").makeResult(a)
            );
          },
          o("WASignalDB").signalOp("savePreKeysGeneration"),
        );
      return e;
    };
    l.savePreKeysGeneration = e;
  },
  98,
);
