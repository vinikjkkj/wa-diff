__d(
  "WAWebChatListWallpaperWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatListWallpaper: [
            5284,
            {
              anyWallpaperApplied: [1, e.TYPES.BOOLEAN],
              chatThemesEnabled: [2, e.TYPES.BOOLEAN],
              dedupKey: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatListWallpaper: [] },
      );
    l.ChatListWallpaperWamEvent = s;
  },
  98,
);
