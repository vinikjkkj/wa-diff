__d(
  "WAWebFavoriteStickerJob",
  [
    "Promise",
    "WAWebFavoriteStickerCollection",
    "WAWebStickersFavoriteSyncAction",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a, i) {
      var l = t.map(function (e) {
        return r(
          "WAWebStickersFavoriteSyncAction",
        ).generateFavoriteSyncMutation(e, a, i);
      });
      return o("WAWebSyncdCoreApi")
        .lockForSync([], l, function () {
          return (e || (e = n("Promise"))).resolve();
        })
        .then(function () {
          if (a)
            return o(
              "WAWebFavoriteStickerCollection",
            ).FavoriteStickerCollection.addOrUpdateStickers(t, i);
          o(
            "WAWebFavoriteStickerCollection",
          ).FavoriteStickerCollection.removeAndSave(
            t.map(function (e) {
              return e.filehash;
            }),
          );
        });
    }
    l.sendFavoriteStickerMutation = s;
  },
  98,
);
