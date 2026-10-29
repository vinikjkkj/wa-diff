__d(
  "WAWebSchemaSharableEventChange",
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
      e.add("sharable-event-change")
        .version(
          o("WAWebModelStorageVersions").sharableEventChangeCreateTable(),
          [r("eventId"), n("changeFlags"), n("lastChangeTsUsec")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("sharable-event-change");
    }
    ((l.addTable = e), (l.getSharableEventChangeTable = s));
  },
  98,
);
