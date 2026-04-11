__d(
  "WAWebSettingsClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSettingsClickEntryPoint",
    "WAWebWamEnumSettingsItemType",
    "WAWebWamEnumSettingsPageType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SettingsClick: [
          2214,
          {
            isBookmarkAppInstalled: [
              4,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            settingsClickEntryPoint: [
              2,
              o("WAWebWamEnumSettingsClickEntryPoint")
                .SETTINGS_CLICK_ENTRY_POINT,
            ],
            settingsItem: [
              1,
              o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE,
            ],
            settingsPageType: [
              3,
              o("WAWebWamEnumSettingsPageType").SETTINGS_PAGE_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SettingsClick: [] },
    );
    l.SettingsClickWamEvent = e;
  },
  98,
);
