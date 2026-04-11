__d(
  "WAWebSchemaCTWASuggestion",
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
      e.add("ctwa-suggestion")
        .version(o("WAWebModelStorageVersions").ctwaSuggestionsCreateTable(), [
          a("id"),
          n("type"),
          n("expiresAt"),
          r("expiresAt"),
          n("heading"),
          n("body"),
          n("highlight"),
          n("actionLink"),
          n("display"),
          n("ts"),
        ])
        .version(
          o("WAWebModelStorageVersions").ctwaSuggestionsAddTrackingData(),
          [n("nuxData"), n("coolOffData")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("ctwa-suggestion");
    }
    ((l.addTable = e), (l.getCTWASuggestionTable = s));
  },
  98,
);
