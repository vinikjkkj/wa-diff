__d(
  "WAWebSchemaSubgroupSuggestion",
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
      e.add("subgroup-suggestion")
        .version(
          o("WAWebModelStorageVersions").subgroupSuggestionCreateTable(),
          [
            a("id"),
            n("parentGroupId"),
            r("parentGroupId"),
            n("subject"),
            n("desc"),
            n("owner"),
            n("t"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
