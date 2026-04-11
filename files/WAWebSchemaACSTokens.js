__d(
  "WAWebSchemaACSTokens",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addIndex,
        a = t.addUserDefinedPrimaryKey;
      e.add("acs-tokens")
        .version(o("WAWebModelStorageVersions").acsTokenCreateTable(), [
          a("tokenName"),
          n("project"),
          r("project"),
          n("creationTs"),
          n("redeemCount"),
          n("token"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("acs-tokens");
    }
    ((l.addTable = e), (l.getACSTokensTable = s));
  },
  98,
);
