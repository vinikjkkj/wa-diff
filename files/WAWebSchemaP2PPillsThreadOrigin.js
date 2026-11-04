__d(
  "WAWebSchemaP2PPillsThreadOrigin",
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
      e.add("p2p-pills-thread-origin")
        .version(
          o("WAWebModelStorageVersions").p2pPillsThreadOriginCreateTable(),
          [r("accountLid"), n("pillEntryPoint")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("p2p-pills-thread-origin");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o("WAWebModelStorageVersions").p2pPillsThreadOriginCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getP2PPillsThreadOriginTable = s),
      (l.canUseP2PPillsThreadOriginTable = u));
  },
  98,
);
