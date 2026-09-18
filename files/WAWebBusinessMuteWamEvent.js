__d(
  "WAWebBusinessMuteWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BusinessMute: [
            1376,
            {
              dedupKey: [3, e.TYPES.INTEGER],
              muteT: [2, e.TYPES.TIMER],
              muteeId: [1, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BusinessMute: [] },
      );
    l.BusinessMuteWamEvent = s;
  },
  98,
);
