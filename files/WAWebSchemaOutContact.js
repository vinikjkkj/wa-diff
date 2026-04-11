__d(
  "WAWebSchemaOutContact",
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
      e.add("out-contact")
        .version(o("WAWebModelStorageVersions").outContactCreateTable(), [
          r("id"),
          n("fullName"),
          n("firstName"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("out-contact");
    }
    ((l.addTable = e), (l.getOutContactTable = s));
  },
  98,
);
