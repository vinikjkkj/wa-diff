__d(
  "WAWebSchemaUserPrefs",
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
      e.add("user-prefs")
        .version(o("WAWebModelStorageVersions").userPrefsCreateTable(), [
          r("key"),
          n("value"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("user-prefs");
    }
    ((l.addTable = e), (l.getUserPrefsTable = s));
  },
  98,
);
