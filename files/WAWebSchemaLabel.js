__d(
  "WAWebSchemaLabel",
  [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      NONE: 0,
      UNREAD: 1,
      GROUPS: 2,
      FAVORITES: 3,
      PREDEFINED: 4,
      CUSTOM: 5,
      COMMUNITY: 6,
      SERVER_ASSIGNED: 7,
    });
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("label")
        .version(o("WAWebModelStorageVersions").labelCreateTable(), [
          r("id"),
          n("name"),
          n("colorIndex"),
          n("predefinedId"),
          n("orderIndex"),
          n("isActive"),
          n("type"),
          n("isImmutable"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table("label");
    }
    ((l.ListType = e), (l.addTable = s), (l.getLabelTable = u));
  },
  98,
);
