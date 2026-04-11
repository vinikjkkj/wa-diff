__d(
  "WAWebSchemaOptOutList",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addUserDefinedPrimaryKey;
      e.add("optoutlist")
        .version(o("WAWebModelStorageVersions").optOutListCreateTable(), [
          n("id"),
        ])
        .view(function (e) {
          return { id: e.id };
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("optoutlist");
    }
    ((l.addTable = e), (l.getOptOutListTable = s));
  },
  98,
);
