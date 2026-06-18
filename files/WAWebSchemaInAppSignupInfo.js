__d(
  "WAWebSchemaInAppSignupInfo",
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
      e.add("in-app-signup-info")
        .version(o("WAWebModelStorageVersions").inAppSignupInfoCreateTable(), [
          r("id"),
          n("isIasSubscriber"),
          n("iasOptinDs"),
          n("iasEntryPoint"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("in-app-signup-info");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").inAppSignupInfoCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getInAppSignupInfoTable = s),
      (l.canUseInAppSignupInfoTable = u));
  },
  98,
);
