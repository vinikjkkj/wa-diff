__d(
  "WAWebSettingsChangeWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumSettingType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SettingsChange: [
            6396,
            {
              currentSettingValue: [4, e.TYPES.STRING],
              dedupKey: [5, e.TYPES.INTEGER],
              previousSettingValue: [2, e.TYPES.STRING],
              settingType: [3, o("WAWebWamEnumSettingType").SETTING_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SettingsChange: [] },
      );
    l.SettingsChangeWamEvent = s;
  },
  98,
);
