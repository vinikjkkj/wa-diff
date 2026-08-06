__d(
  "WAWebStickerErrorWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStickerErrorType",
    "WAWebWamEnumStickerSendMessageType",
  ],
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
            stickerMessageType: [
              2,
              o("WAWebWamEnumStickerSendMessageType").STICKER_SEND_MESSAGE_TYPE,
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
