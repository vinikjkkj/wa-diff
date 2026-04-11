__d(
  "WAWebBusinessMuteWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        BusinessMute: [
          1376,
          {
            muteT: [2, o("WAWebWamCodegenUtils").TYPES.TIMER],
            muteeId: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { BusinessMute: [] },
    );
    l.BusinessMuteWamEvent = e;
  },
  98,
);
