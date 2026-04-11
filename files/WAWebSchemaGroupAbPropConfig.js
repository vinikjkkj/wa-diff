__d(
  "WAWebSchemaGroupAbPropConfig",
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
        r = t.addCompositePrimaryKey;
      e.add("abpropGroupConfigs")
        .version(
          o("WAWebModelStorageVersions").groupAbpropsConfigCreateTable(),
          [
            r(["groupJid", "configCode"]),
            n("configValue"),
            n("configExpoKey"),
            n("hasAccessed"),
            n("overriddenConfigValue"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("abpropGroupConfigs");
    }
    ((l.addTable = e), (l.getGroupAbpropConfigsTable = s));
  },
  98,
);
