__d(
  "WAWebSchemaAgent",
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
      e.add("agent")
        .version(o("WAWebModelStorageVersions").agentCreateTable(), [
          r("id"),
          n("deviceId"),
          n("name"),
          n("isDeleted"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("agent");
    }
    ((l.addTable = e), (l.getAgentTable = s));
  },
  98,
);
