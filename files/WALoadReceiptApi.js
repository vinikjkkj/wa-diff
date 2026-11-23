__d(
  "WALoadReceiptApi",
  ["WAMsg", "WAResultOrError", "WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      var e = o("WAMsg").craftWAMsgIdString(t),
        n = await o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["receipts"],
            "readonly",
            function (t) {
              return t.stores.receipts.readIndexRange("waMsgId+deviceJid", {
                only: [e],
              });
            },
            "loadReceiptFromSignalDb",
          );
      if (n.length === 0)
        return o("WAResultOrError").makeError("missing-receipt");
      var r = new Map(),
        a = new Set();
      for (var i of n)
        (r.set(i.deviceJid, i.deviceIdentity), a.add(i.deviceJid));
      return o("WAResultOrError").makeResult({
        id: t,
        permittedIdentitiesPerDevice: r,
        recipientDevices: a,
      });
    };
    l.loadReceipt = e;
  },
  98,
);
