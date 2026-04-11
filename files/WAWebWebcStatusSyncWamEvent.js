__d(
  "WAWebWebcStatusSyncWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcStatusSync: [
            1878,
            {
              webcStatusMutedItemCount: [4, e.TYPES.INTEGER],
              webcStatusMutedRowCount: [7, e.TYPES.INTEGER],
              webcStatusRecentItemCount: [2, e.TYPES.INTEGER],
              webcStatusRecentRowCount: [5, e.TYPES.INTEGER],
              webcStatusSyncT: [1, e.TYPES.TIMER],
              webcStatusViewedItemCount: [3, e.TYPES.INTEGER],
              webcStatusViewedRowCount: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcStatusSync: [] },
      );
    l.WebcStatusSyncWamEvent = s;
  },
  98,
);
