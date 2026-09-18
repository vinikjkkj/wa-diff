__d(
  "WAWebChatWallpaperWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatWallpaperEntryType",
    "WAWebWamEnumChatWallpaperType",
    "WAWebWamEnumDeviceAppearanceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatWallpaper: [
            5264,
            {
              appearanceType: [
                5,
                o("WAWebWamEnumDeviceAppearanceType").DEVICE_APPEARANCE_TYPE,
              ],
              chatWallpaperChangeApplied: [1, e.TYPES.BOOLEAN],
              chatWallpaperSource: [
                2,
                o("WAWebWamEnumChatWallpaperEntryType")
                  .CHAT_WALLPAPER_ENTRY_TYPE,
              ],
              chatWallpaperType: [
                3,
                o("WAWebWamEnumChatWallpaperType").CHAT_WALLPAPER_TYPE,
              ],
              chatWallpaperVisit: [4, e.TYPES.BOOLEAN],
              dedupKey: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatWallpaper: [] },
      );
    l.ChatWallpaperWamEvent = s;
  },
  98,
);
