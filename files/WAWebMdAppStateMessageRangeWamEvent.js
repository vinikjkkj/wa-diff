__d(
  "WAWebMdAppStateMessageRangeWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MdAppStateMessageRange: [
          2522,
          {
            additionalMessagesCount: [
              1,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
          },
          [1, 20, 1e3],
          "regular",
        ],
      },
      { MdAppStateMessageRange: [] },
    );
    l.MdAppStateMessageRangeWamEvent = e;
  },
  98,
);
