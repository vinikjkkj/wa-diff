__d(
  "WAWebStickerLatencyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumStickerLatencyAction"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        StickerLatency: [
          5026,
          {
            size: [1, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            stickerLatencyAction: [
              2,
              o("WAWebWamEnumStickerLatencyAction").STICKER_LATENCY_ACTION,
            ],
            stickerLatencyTtAction: [
              3,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { StickerLatency: [] },
    );
    l.StickerLatencyWamEvent = e;
  },
  98,
);
