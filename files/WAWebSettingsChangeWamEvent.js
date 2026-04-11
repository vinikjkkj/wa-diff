__d(
  "WAWebSettingsChangeWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumSettingType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SettingsChange: [
          6396,
          {
            currentSettingValue: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
            previousSettingValue: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
            settingType: [3, o("WAWebWamEnumSettingType").SETTING_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SettingsChange: [] },
    );
    l.SettingsChangeWamEvent = e;
  },
  98,
);
