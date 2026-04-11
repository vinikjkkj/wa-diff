__d(
  "WAWebSchemaSubgroupSuggestionV2",
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
      e.add("subgroup-suggestion-v2")
        .version(
          o("WAWebModelStorageVersions").subgroupSuggestionV2CreateTable(),
          [
            r(["parentGroupId", "id", "owner"]),
            a("parentGroupId"),
            n("subject"),
            n("desc"),
            n("t"),
            n("isExistingGroup"),
            n("participantCount"),
            n("hiddenSubgroup"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("subgroup-suggestion-v2");
    }
    ((l.addTable = e), (l.getSubgroupSuggestionTable = s));
  },
  98,
);
