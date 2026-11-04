__d(
  "WAWebLocalStickerSuggestions",
  [
    "WAWebEmoji",
    "WAWebFavoriteStickerCollection",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerDownloadCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [],
        n = new Set(),
        r = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e),
        a = function (a) {
          var e;
          n.has(a.id) ||
            !(
              (e = a.mediaData.emojis) != null &&
              e.some(function (e) {
                return (
                  o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e) === r
                );
              })
            ) ||
            (n.add(a.id), t.push(a));
        };
      return (
        o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.forEach(
          function (e) {
            return a(e.sticker);
          },
        ),
        o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.forEach(
          function (e) {
            return a(e.sticker);
          },
        ),
        o("WAWebStickerDownloadCollection").StickerDownloadCollection.forEach(
          function (e) {
            var t;
            return (t = e.stickers) == null ? void 0 : t.forEach(a);
          },
        ),
        t
      );
    }
    l.getLocalStickerSuggestions = e;
  },
  98,
);
