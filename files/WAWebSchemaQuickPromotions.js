__d(
  "WAWebSchemaQuickPromotions",
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
        r = t.addIndex,
        a = t.addUserDefinedPrimaryKey;
      e.add("quick-promotions")
        .version(o("WAWebModelStorageVersions").quickPromotionsCreateTable(), [
          a("id"),
          n("surfaceId"),
          r("surfaceId"),
          n("ts"),
          n("data"),
          n("tracking"),
          n("locale"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("quick-promotions");
    }
    ((l.addTable = e), (l.getQuickPromotionsTable = s));
  },
  98,
);
