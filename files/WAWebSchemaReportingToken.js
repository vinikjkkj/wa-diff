__d(
  "WAWebSchemaReportingToken",
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
      e.add("reporting-token")
        .version(o("WAWebModelStorageVersions").reportingTokenTable(), [
          a("id"),
          n("reportingTag"),
          n("reportingTokenContent"),
          n("version"),
        ])
        .version(o("WAWebModelStorageVersions").reportingTokenTableTsIndex(), [
          n("ts"),
          r("ts"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("reporting-token");
    }
    ((l.addTable = e), (l.getReportingTokenTable = s));
  },
  98,
);
