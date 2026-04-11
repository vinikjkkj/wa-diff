__d(
  "WAWebSchemaOrphanRevoke",
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
      e.add("orphan-revoke")
        .version(o("WAWebModelStorageVersions").orphanRevokeCreateTable(), [
          r("msgKey"),
          n("sender"),
          n("timestamp"),
          n("subtype"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("orphan-revoke");
    }
    ((l.addTable = e), (l.getOrphanRevokeTable = s));
  },
  98,
);
