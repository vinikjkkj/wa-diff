__d(
  "WAWebStickerAddToFavoriteWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStickerAddToFavoriteOriginType",
    "WAWebWamEnumStickerMakerSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StickerAddToFavorite: [
            1842,
            {
              stickerAddToFavoriteOrigin: [
                1,
                o("WAWebWamEnumStickerAddToFavoriteOriginType")
                  .STICKER_ADD_TO_FAVORITE_ORIGIN_TYPE,
              ],
              stickerIsAi: [5, e.TYPES.BOOLEAN],
              stickerIsAnimated: [3, e.TYPES.BOOLEAN],
              stickerIsAvatar: [4, e.TYPES.BOOLEAN],
              stickerIsFirstParty: [2, e.TYPES.BOOLEAN],
              stickerIsFromStickerMaker: [6, e.TYPES.BOOLEAN],
              stickerIsFromUserCreatedPack: [10, e.TYPES.BOOLEAN],
              stickerIsGiphy: [8, e.TYPES.BOOLEAN],
              stickerIsKlipy: [11, e.TYPES.BOOLEAN],
              stickerIsPremium: [13, e.TYPES.BOOLEAN],
              stickerIsTenor: [9, e.TYPES.BOOLEAN],
              stickerIsText: [12, e.TYPES.BOOLEAN],
              stickerMakerSourceType: [
                7,
                o("WAWebWamEnumStickerMakerSourceType")
                  .STICKER_MAKER_SOURCE_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StickerAddToFavorite: [] },
      );
    l.StickerAddToFavoriteWamEvent = s;
  },
  98,
);
