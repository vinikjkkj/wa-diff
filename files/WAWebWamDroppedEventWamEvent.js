__d(
  "WAWebWamDroppedEventWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WamDroppedEvent: [
            4358,
            {
              droppedEventCode: [1, e.TYPES.INTEGER],
              droppedEventCount: [2, e.TYPES.INTEGER],
              isFromWamsys: [3, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WamDroppedEvent: [] },
      );
    l.WamDroppedEventWamEvent = s;
  },
  98,
);
