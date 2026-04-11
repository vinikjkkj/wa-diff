__d(
  "WAWebSchemaMessageInfo",
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
      e.add("message-info")
        .version(o("WAWebModelStorageVersions").messageInfoCreateTable(), [
          r(["msgKey", "receiverUserJid"]),
          n("delivery"),
          n("read"),
          n("played"),
          n("deviceDelivered"),
          n("deviceNotDelivered"),
          a("msgKey"),
        ])
        .version(
          o("WAWebModelStorageVersions").messageInfoAddDeliveryPrivacyMode(),
          [n("deliveryPrivacyMode")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("message-info");
    }
    ((l.addTable = e), (l.getMessageInfoTable = s));
  },
  98,
);
