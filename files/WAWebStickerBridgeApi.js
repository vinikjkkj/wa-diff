__d(
  "WAWebStickerBridgeApi",
  [
    "WAWebFavoriteStickerCollection",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaFavoriteStickers",
    "WAWebSchemaRecentStickers",
    "WAWebSchemaStickerDownload",
    "WAWebStickerDownloadCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      restoreFavoriteStickers: function () {
        return o("WAWebSchemaFavoriteStickers")
          .getFavoriteStickersTable()
          .all()
          .then(function (e) {
            return o(
              "WAWebFavoriteStickerCollection",
            ).FavoriteStickerCollection.initializeFromCache(e);
          });
      },
      restoreRecentStickers: function () {
        return o("WAWebSchemaRecentStickers")
          .getRecentStickersTable()
          .all()
          .then(function (e) {
            return o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.initializeFromCache(e);
          });
      },
      restoreStickerDownload: function () {
        return o("WAWebSchemaStickerDownload")
          .getStickerDownloadTable()
          .all()
          .then(function (e) {
            return o(
              "WAWebStickerDownloadCollection",
            ).StickerDownloadCollection.initializeFromCache(e);
          });
      },
    };
    l.StickerBridgeApi = e;
  },
  98,
);
