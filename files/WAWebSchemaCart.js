__d(
  "WAWebSchemaCart",
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
      e.add("cart")
        .version(o("WAWebModelStorageVersions").cartCreateTable(), [
          r("id"),
          n("products"),
          n("message"),
          n("total"),
          n("currency"),
          n("itemCount"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("cart");
    }
    ((l.addTable = e), (l.getCartTable = s));
  },
  98,
);
