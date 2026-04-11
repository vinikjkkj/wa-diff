__d(
  "WAWebSchemaRecentStickers",
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
      e.add("recent-stickers")
        .version(o("WAWebModelStorageVersions").recentStickersCreateTable(), [
          r("id"),
          n("timestamp"),
          n("sticker"),
          n("msgId"),
          n("weight"),
          n("isNewSticker"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("recent-stickers");
    }
    ((l.addTable = e), (l.getRecentStickersTable = s));
  },
  98,
);
