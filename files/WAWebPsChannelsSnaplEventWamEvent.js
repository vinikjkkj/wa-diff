__d(
  "WAWebPsChannelsSnaplEventWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PsChannelsSnaplEvent: [
          6254,
          {
            appId: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            videoEventJson: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "private",
          0,
        ],
      },
      { PsChannelsSnaplEvent: [] },
    );
    l.PsChannelsSnaplEventWamEvent = e;
  },
  98,
);
