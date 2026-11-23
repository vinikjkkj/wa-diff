__d(
  "WASaveSignedPreKeyIfNewApi",
  ["WADbSignal", "WASignalDB", "WASignalSignatures"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta", "signedPrekey"],
          "readwrite",
          async function (e) {
            var r = await e.stores.signedPrekey.get(t);
            if (r != null) {
              var a = o("WASignalSignatures").deserializeSignedPreKey(
                r.encoded,
              );
              if (a != null) return { key: a, type: "duplicate" };
            }
            return (
              await Promise.all([
                e.stores.signedPrekey.bulkPut([{ encoded: n, keyId: t }]),
                e.stores.meta.bulkPut([
                  {
                    key: o("WADbSignal").MetaKeysEnum.lastSignedPrekeyId,
                    value: { lastSignedPrekeyId: t },
                  },
                ]),
              ]),
              { type: "success" }
            );
          },
          o("WASignalDB").signalOp("saveSignedPreKeyIfNew"),
        );
    };
    l.saveSignedPreKeyIfNew = e;
  },
  98,
);
