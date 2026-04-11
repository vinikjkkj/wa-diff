__d(
  "WAWebSchemaAbPropConfig",
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
      e.add("abpropConfigs")
        .version(o("WAWebModelStorageVersions").abpropsConfigCreateTable(), [
          r("configCode"),
          n("configValue"),
          n("configExpoKey"),
          n("overriddenConfigValue"),
        ])
        .version(
          o("WAWebModelStorageVersions").addHasAccessedToAbpropsConfigTable(),
          [n("hasAccessed")],
        )
        .view(function (e) {
          return {
            configCode: e.configCode,
            configValue: e.configValue,
            configExpoKey: e.configExpoKey,
            hasAccessed: e.hasAccessed,
            overriddenConfigValue: e.overriddenConfigValue,
          };
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("abpropConfigs");
    }
    ((l.addTable = e), (l.getAbpropConfigsTable = s));
  },
  98,
);
