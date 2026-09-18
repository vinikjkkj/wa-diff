__d(
  "WAWebStickerLatencyWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumStickerLatencyAction"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StickerLatency: [
            5026,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              size: [1, e.TYPES.INTEGER],
              stickerLatencyAction: [
                2,
                o("WAWebWamEnumStickerLatencyAction").STICKER_LATENCY_ACTION,
              ],
              stickerLatencyTtAction: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StickerLatency: [] },
      );
    l.StickerLatencyWamEvent = s;
  },
  98,
);
