__d(
  "WAWebSettingsSearchTapWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumSettingsItemType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SettingsSearchTap: [
          4016,
          {
            tapItemName: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            topLevelParentSetting: [
              2,
              o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SettingsSearchTap: [] },
    );
    l.SettingsSearchTapWamEvent = e;
  },
  98,
);
