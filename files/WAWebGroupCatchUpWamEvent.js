__d(
  "WAWebGroupCatchUpWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GroupCatchUp: [
          3058,
          {
            mentionsCountPendingPercentage: [
              4,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GroupCatchUp: [] },
    );
    l.GroupCatchUpWamEvent = e;
  },
  98,
);
