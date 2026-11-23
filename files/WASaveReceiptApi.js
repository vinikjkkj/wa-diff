__d(
  "WASaveReceiptApi",
  ["WAMsg", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      var e = o("WAMsg").craftWAMsgIdString(t.id),
        n = Array.from(t.permittedIdentitiesPerDevice).map(function (t) {
          var n = t[0],
            r = t[1];
          return { waMsgId: e, deviceJid: n, retryCount: 0, deviceIdentity: r };
        });
      n.length !== 0 &&
        (await o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["receipts"],
            "readwrite",
            function (e) {
              return e.stores.receipts.bulkAdd(n);
            },
            "saveReceiptInSignalDb",
          ));
    };
    l.saveReceipt = e;
  },
  98,
);
