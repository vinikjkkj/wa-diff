__d(
  "WAWebSchemaNote",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addIndex,
        a = t.addUserDefinedPrimaryKey;
      e.add("note")
        .version(o("WAWebModelStorageVersions").noteCreateTable(), [
          a("id"),
          n("type"),
          r("type"),
          n("chatJid"),
          r("chatJid"),
          n("content"),
          n("createdAt"),
          n("modifiedAt"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("note");
    }
    ((l.addTable = e), (l.getNoteTable = s));
  },
  98,
);
