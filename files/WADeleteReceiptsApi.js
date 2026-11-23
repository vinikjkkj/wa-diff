__d(
  "WADeleteReceiptsApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      t.length !== 0 &&
        (await o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["receipts"],
            "readwrite",
            async function (e) {
              var n = (
                await Promise.all(
                  t.map(function (t) {
                    return e.stores.receipts.readIndexRange(
                      "waMsgId+deviceJid",
                      { only: [t] },
                    );
                  }),
                )
              ).flat();
              n.length !== 0 &&
                (await e.stores.receipts.bulkDelete(
                  n.map(function (e) {
                    return e.pk;
                  }),
                ));
            },
            "deleteReceiptsInSignalDb",
          ));
    };
    l.deleteReceipts = e;
  },
  98,
);
