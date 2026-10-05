__d(
  "WAWebSchemaExperienceId",
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
      e.add("experience-id")
        .version(o("WAWebModelStorageVersions").experienceIdCreateTable(), [
          r("msgKey"),
          n("experienceIds"),
          n("storedAtMs"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("experience-id");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").experienceIdCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getExperienceIdTable = s),
      (l.canUseExperienceIdTable = u));
  },
  98,
);
