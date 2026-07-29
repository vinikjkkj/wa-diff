__d(
  "WAWebSchemaCoexV2RelayReceipt",
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
        r = t.addCompositePrimaryKey,
        a = t.addIndex;
      e.add("coexv2-relay-receipt")
        .version(
          o("WAWebModelStorageVersions").coexV2RelayReceiptCreateTable(),
          [
            r(["msgId", "representedLid"]),
            n("createdAt"),
            n("botJid"),
            n("delivered"),
            n("read"),
            n("played"),
            a("createdAt"),
            a("msgId"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("coexv2-relay-receipt");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").coexV2RelayReceiptCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getCoexV2RelayReceiptTable = s),
      (l.canUseCoexV2RelayReceiptTable = u));
  },
  98,
);
