__d(
  "WADbHandlePermitedIdentitiesApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t) {
      t.size !== 0 &&
        (await o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["receipts"],
            "readwrite",
            async function (e) {
              var n = (
                  await Promise.all(
                    Array.from(t).map(function (t) {
                      var n = t[0],
                        r = t[1];
                      return e.stores.receipts.readIndexRange(
                        "waMsgId+deviceJid",
                        { only: [n] },
                      );
                    }),
                  )
                ).flat(),
                r = n
                  .filter(function (e) {
                    var n;
                    return (n = t.get(e.waMsgId)) == null
                      ? void 0
                      : n.has(e.deviceJid);
                  })
                  .map(function (e) {
                    return e.pk;
                  });
              r.length !== 0 && (await e.stores.receipts.bulkDelete(r));
            },
            "handlePermitedIdentitiesPerDeviceInSignalDb",
          ));
    };
    l.handlePermitedIdentitiesPerDevice = e;
  },
  98,
);
