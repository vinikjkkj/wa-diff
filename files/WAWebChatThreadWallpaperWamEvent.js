__d(
  "WAWebChatThreadWallpaperWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatThemeEntryType",
    "WAWebWamEnumDeviceAppearanceType",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatThreadWallpaper: [
            5286,
            {
              appearanceType: [
                5,
                o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE,
              ],
              belongsToCommunity: [1, e.TYPES.BOOLEAN],
              chatThemeId: [6, e.TYPES.STRING],
              chatThemeSource: [
                7,
                o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE,
              ],
              chatType: [2, o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE],
              colorSchemeId: [8, e.TYPES.STRING],
              threadId: [3, e.TYPES.STRING],
              wallpaperApplied: [4, e.TYPES.BOOLEAN],
              wallpaperId: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatThreadWallpaper: [] },
      );
    l.ChatThreadWallpaperWamEvent = s;
  },
  98,
);
