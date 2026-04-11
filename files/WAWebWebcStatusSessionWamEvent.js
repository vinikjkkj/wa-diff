__d(
  "WAWebWebcStatusSessionWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcStatusSession: [
            1880,
            {
              webcStatusMutedItemCount: [4, e.TYPES.INTEGER],
              webcStatusMutedRowCount: [7, e.TYPES.INTEGER],
              webcStatusRecentItemCount: [2, e.TYPES.INTEGER],
              webcStatusRecentRowCount: [5, e.TYPES.INTEGER],
              webcStatusSessionId: [1, e.TYPES.INTEGER],
              webcStatusViewedItemCount: [3, e.TYPES.INTEGER],
              webcStatusViewedRowCount: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcStatusSession: [] },
      );
    l.WebcStatusSessionWamEvent = s;
  },
  98,
);
