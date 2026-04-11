__d(
  "WAWebStickerSendWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStickerMakerSourceType",
    "WAWebWamEnumStickerSendMessageType",
    "WAWebWamEnumStickerSendOriginType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StickerSend: [
            1840,
            {
              stickerIsAi: [7, e.TYPES.BOOLEAN],
              stickerIsAnimated: [3, e.TYPES.BOOLEAN],
              stickerIsAvatar: [6, e.TYPES.BOOLEAN],
              stickerIsFirstParty: [2, e.TYPES.BOOLEAN],
              stickerIsFromStickerMaker: [5, e.TYPES.BOOLEAN],
              stickerIsFromUserCreatedPack: [12, e.TYPES.BOOLEAN],
              stickerIsGiphy: [10, e.TYPES.BOOLEAN],
              stickerIsKlipy: [13, e.TYPES.BOOLEAN],
              stickerIsLottie: [9, e.TYPES.BOOLEAN],
              stickerIsPremium: [15, e.TYPES.BOOLEAN],
              stickerIsTenor: [11, e.TYPES.BOOLEAN],
              stickerIsText: [14, e.TYPES.BOOLEAN],
              stickerMakerSourceType: [
                8,
                o("WAWebWamEnumStickerMakerSourceType")
                  .STICKER_MAKER_SOURCE_TYPE,
              ],
              stickerSendMessageType: [
                4,
                o("WAWebWamEnumStickerSendMessageType")
                  .STICKER_SEND_MESSAGE_TYPE,
              ],
              stickerSendOrigin: [
                1,
                o("WAWebWamEnumStickerSendOriginType").STICKER_SEND_ORIGIN_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StickerSend: [] },
      );
    l.StickerSendWamEvent = s;
  },
  98,
);
