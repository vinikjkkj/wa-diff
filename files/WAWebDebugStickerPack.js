__d(
  "WAWebDebugStickerPack",
  [
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebMediaInMemoryBlobCache",
    "WAWebRecentStickerCollectionMd",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("opxt5BS4vtTgqZltT0MUatnxhW0=");
          var e = o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.map(function (e) {
              return e.sticker;
            }),
            t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
              e[0].mediaData.filehash,
            );
          if (t == null) return null;
          yield o("WAWebFileSaver").FileSaver.downloadData(
            t,
            "sticker",
            o("WAWebFileSaverTypes").AllowedFileExtensions.WEBP,
          );
        })),
        s.apply(this, arguments)
      );
    }
    var u = { downloadRecentSticker: e };
    l.default = u;
  },
  98,
);
