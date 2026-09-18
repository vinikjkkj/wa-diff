__d(
  "WAWebBusinessUnmuteWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        BusinessUnmute: [
          1378,
          {
            dedupKey: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            muteeId: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { BusinessUnmute: [] },
    );
    l.BusinessUnmuteWamEvent = e;
  },
  98,
);
