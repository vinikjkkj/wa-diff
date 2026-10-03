__d(
  "WAWebSchemaContactManagerMetadata",
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
      e.add("contact_manager_metadata")
        .version(
          o("WAWebModelStorageVersions").contactManagerMetadataCreateTable(),
          [r("id"), n("isHidden")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("contact_manager_metadata");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").contactManagerMetadataCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getContactManagerMetadataTable = s),
      (l.canUseContactManagerMetadataTable = u));
  },
  98,
);
