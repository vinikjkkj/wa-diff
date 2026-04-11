__d(
  "WAWebWebcStickerMakerEventsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcStickerMakerEventNameType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcStickerMakerEvents: [
          3104,
          {
            stickerMakerEventName: [
              1,
              o("WAWebWamEnumWebcStickerMakerEventNameType")
                .WEBC_STICKER_MAKER_EVENT_NAME_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcStickerMakerEvents: [] },
    );
    l.WebcStickerMakerEventsWamEvent = e;
  },
  98,
);
