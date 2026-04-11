__d(
  "WAWebSuspendedGroupDeleteWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumDeleteSuspendedGroupBtn"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SuspendedGroupDelete: [
          4342,
          {
            deleteBtnSource: [
              1,
              o("WAWebWamEnumDeleteSuspendedGroupBtn")
                .DELETE_SUSPENDED_GROUP_BTN,
            ],
          },
          [1, 1, 1],
          "private",
          0,
        ],
      },
      { SuspendedGroupDelete: [] },
    );
    l.SuspendedGroupDeleteWamEvent = e;
  },
  98,
);
