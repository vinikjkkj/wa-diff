__d(
  "WAWebStickerStoreOpenedWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumStickerStoreOpenedOriginType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        StickerStoreOpened: [
          3020,
          {
            stickerStoreOpenedOrigin: [
              1,
              o("WAWebWamEnumStickerStoreOpenedOriginType")
                .STICKER_STORE_OPENED_ORIGIN_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { StickerStoreOpened: [] },
    );
    l.StickerStoreOpenedWamEvent = e;
  },
  98,
);
