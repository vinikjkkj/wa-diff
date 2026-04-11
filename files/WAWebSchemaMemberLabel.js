__d(
  "WAWebSchemaMemberLabel",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "member-label";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addUserDefinedPrimaryKey;
      t.add(e)
        .version(o("WAWebModelStorageVersions").memberLabelCreateTable(), [
          a("chatId"),
          r("memberLabelMap"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.addTable = s), (l.getMemberLabelTable = u));
  },
  98,
);
