__d(
  "WASentBytesCacheApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["sentBytesCache", "receipts"],
          "readwrite",
          async function (t) {
            var n = (
              await Promise.all(
                e.map(function (e) {
                  return t.stores.receipts.readIndexRange("waMsgId+deviceJid", {
                    only: [e],
                  });
                }),
              )
            ).flat();
            await Promise.all([
              n.length > 0
                ? t.stores.receipts.bulkDelete(
                    n.map(function (e) {
                      return e.pk;
                    }),
                  )
                : null,
              t.stores.sentBytesCache.bulkDelete(e),
            ]);
          },
          o("WASignalDB").signalOp("deleteSentBytesAndReceipts"),
        );
    }
    function s(e) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["sentBytesCache"],
          "readonly",
          async function (t) {
            var n = await t.stores.sentBytesCache.readIndexRange("ts", {
              lessThanOrEqual: [e],
            });
            return n.map(function (e) {
              return e.waMsgId;
            });
          },
          o("WASignalDB").signalOp("loadExpiredSentBytes"),
        );
    }
    function u(e) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["sentBytesCache"],
          "readonly",
          async function (t) {
            var n = await t.stores.sentBytesCache.bulkGet(e);
            return n.filter(Boolean);
          },
          o("WASignalDB").signalOp("loadSentBytes"),
        );
    }
    function c(e) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["sentBytesCache"],
          "readwrite",
          function (t) {
            return t.stores.sentBytesCache.bulkPut([e]);
          },
          o("WASignalDB").signalOp("saveSentBytes"),
        )
        .then(function () {});
    }
    ((l.deleteSentBytesAndReceipts = e),
      (l.loadExpired = s),
      (l.loadSentBytes = u),
      (l.saveSentBytes = c));
  },
  98,
);
