__d(
  "WAWebSchemaSharableEventCreatorPushName",
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
      e.add("sharable-event-creator-push-name")
        .version(
          o(
            "WAWebModelStorageVersions",
          ).sharableEventCreatorPushNameCreateTable(),
          [r("creatorLid"), n("pushName"), n("publishedTsUsec")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("sharable-event-creator-push-name");
    }
    ((l.addTable = e), (l.getSharableEventCreatorPushNameTable = s));
  },
  98,
);
