__d(
  "WAWebSchemaBlocklist",
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
      e.add("blocklist")
        .version(o("WAWebModelStorageVersions").blocklistCreateTable(), [
          n("id"),
        ])
        .view(function (e) {
          return { id: e.id };
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("blocklist");
    }
    ((l.addTable = e), (l.getBlocklistTable = s));
  },
  98,
);
