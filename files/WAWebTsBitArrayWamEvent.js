__d(
  "WAWebTsBitArrayWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          TsBitArray: [
            4332,
            {
              bitarrayHigh: [1, e.TYPES.INTEGER],
              bitarrayLength: [2, e.TYPES.INTEGER],
              bitarrayLow: [3, e.TYPES.INTEGER],
              cumulativeBits: [4, e.TYPES.INTEGER],
              relativeTimestampMs: [5, e.TYPES.INTEGER],
              sessionSeq: [6, e.TYPES.INTEGER],
              tsSessionId: [7, e.TYPES.INTEGER],
              tsTimestampMs: [8, e.TYPES.INTEGER],
              unifiedSessionId: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { TsBitArray: [] },
      );
    l.TsBitArrayWamEvent = s;
  },
  98,
);
