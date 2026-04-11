__d(
  "WAWebUserActivityWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UserActivity: [
            1384,
            {
              userActivityBitmapHigh: [4, e.TYPES.INTEGER],
              userActivityBitmapLen: [5, e.TYPES.INTEGER],
              userActivityBitmapLow: [3, e.TYPES.INTEGER],
              userActivitySessionCum: [7, e.TYPES.INTEGER],
              userActivitySessionId: [1, e.TYPES.STRING],
              userActivitySessionSeq: [6, e.TYPES.INTEGER],
              userActivityStartTime: [2, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { UserActivity: [] },
      );
    l.UserActivityWamEvent = s;
  },
  98,
);
