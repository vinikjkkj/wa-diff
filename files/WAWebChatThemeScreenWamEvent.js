__d(
  "WAWebChatThemeScreenWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatThemeEntryType",
    "WAWebWamEnumChatWallpaperType",
    "WAWebWamEnumDeviceAppearanceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatThemeScreen: [
            6036,
            {
              appearanceType: [
                1,
                o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE,
              ],
              chatThemeChangeApplied: [2, e.TYPES.BOOLEAN],
              chatThemeId: [3, e.TYPES.STRING],
              chatThemeSource: [
                4,
                o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE,
              ],
              chatWallpaperType: [
                5,
                o("WAWebWamEnumChatWallpaperType").CHAT_WALLPAPER_TYPE,
              ],
              colorSchemeId: [6, e.TYPES.STRING],
              wallpaperId: [7, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatThemeScreen: [] },
      );
    l.ChatThemeScreenWamEvent = s;
  },
  98,
);
