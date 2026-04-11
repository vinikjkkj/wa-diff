__d(
  "WAWebStickerCommonQueryToStaticServerWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumQueryType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StickerCommonQueryToStaticServer: [
            2740,
            {
              httpResponseCode: [2, e.TYPES.INTEGER],
              params: [3, e.TYPES.STRING],
              queryLatencyMs: [4, e.TYPES.TIMER],
              queryType: [1, o("WAWebWamEnumQueryType").QUERY_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StickerCommonQueryToStaticServer: [] },
      );
    l.StickerCommonQueryToStaticServerWamEvent = s;
  },
  98,
);
