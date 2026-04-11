__d(
  "WAWebScreenLockSettingsDataWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ScreenLockSettingsData: [
          4802,
          {
            screenAutoLockDuration: [
              1,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ScreenLockSettingsData: [] },
    );
    l.ScreenLockSettingsDataWamEvent = e;
  },
  98,
);
