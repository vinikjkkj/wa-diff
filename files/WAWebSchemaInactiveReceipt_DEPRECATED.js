__d(
  "WAWebSchemaInactiveReceipt_DEPRECATED",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("inactive-receipt")
        .version(o("WAWebModelStorageVersions").inactiveReceiptCreateTable(), [
          r("msgId"),
          n("chatId"),
          n("participantId"),
        ])
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
