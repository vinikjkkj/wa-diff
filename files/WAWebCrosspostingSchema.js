__d(
  "WAWebCrosspostingSchema",
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
        r = t.addCompositePrimaryKey,
        a = t.addIndex;
      e.add("status-crossposting")
        .version(
          o("WAWebModelStorageVersions").statusCrosspostingCreateTable(),
          [
            r(["statusMessageId", "crosspostingDestination"]),
            n("crosspostingSessionId"),
            n("crosspostingStatusUniqueId"),
            n("mediaFilePath"),
            n("directUrlPath"),
            n("crosspostingState"),
            a("crosspostingSessionId"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("status-crossposting");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
