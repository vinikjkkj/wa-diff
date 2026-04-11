__d(
  "WAWebAdvStoredTimestampExpiredWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        AdvStoredTimestampExpired: [
          3036,
          {
            advExpireTimeInHours: [1, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { AdvStoredTimestampExpired: [] },
    );
    l.AdvStoredTimestampExpiredWamEvent = e;
  },
  98,
);
