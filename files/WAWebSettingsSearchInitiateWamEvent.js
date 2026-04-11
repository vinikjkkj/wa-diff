__d(
  "WAWebSettingsSearchInitiateWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumSettingsPageType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SettingsSearchInitiate: [
          4014,
          {
            settingsPageType: [
              1,
              o("WAWebWamEnumSettingsPageType").SETTINGS_PAGE_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SettingsSearchInitiate: [] },
    );
    l.SettingsSearchInitiateWamEvent = e;
  },
  98,
);
