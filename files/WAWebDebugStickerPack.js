__d(
  "WAWebDebugStickerPack",
  [
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebMediaInMemoryBlobCache",
    "WAWebRecentStickerCollectionMd",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      r("vulture")("opxt5BS4vtTgqZltT0MUatnxhW0=");
      var e = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map(
          function (e) {
            return e.sticker;
          },
        ),
        t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e[0].mediaData.filehash,
        );
      if (t == null) return null;
      await o("WAWebFileSaver").FileSaver.downloadData(
        t,
        "sticker",
        o("WAWebFileSaverTypes").AllowedFileExtensions.WEBP,
      );
    }
    var s = { downloadRecentSticker: e };
    l.default = s;
  },
  98,
);
