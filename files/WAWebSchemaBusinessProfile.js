__d(
  "WAWebSchemaBusinessProfile",
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
      e.add("business-profile")
        .version(o("WAWebModelStorageVersions").businessProfileCreateTable(), [
          r("id"),
          n("commandsDescription"),
          n("commands"),
          n("prompts"),
          n("automatedType"),
          n("welcomeMsgProtocolMode"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("business-profile");
    }
    ((l.addTable = e), (l.getBusinessProfileTable = s));
  },
  98,
);
