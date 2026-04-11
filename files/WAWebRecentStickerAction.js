__d(
  "WAWebRecentStickerAction",
  ["WANullthrows", "WAWebRecentStickerCollectionMd", "WAWebRemoveStickerJob"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebRemoveStickerJob").sendRemoveStickerFromRecent(
        r("WANullthrows")(
          o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.get(
            e.id,
          ),
        ),
      );
    }
    function s(e) {
      return (
        o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.get(
          e.id,
        ) != null
      );
    }
    ((l.removeStickerFromRecent = e), (l.isStickerIdInRecent = s));
  },
  98,
);
