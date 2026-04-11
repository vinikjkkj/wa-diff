__d(
  "WAWebStickerErrorWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumStickerErrorType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        StickerError: [
          5024,
          {
            stickerErrorType: [
              1,
              o("WAWebWamEnumStickerErrorType").STICKER_ERROR_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { StickerError: [] },
    );
    l.StickerErrorWamEvent = e;
  },
  98,
);
