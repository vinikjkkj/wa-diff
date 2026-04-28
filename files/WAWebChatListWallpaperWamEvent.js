__d(
  "WAWebChatListWallpaperWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ChatListWallpaper: [
          5284,
          {
            anyWallpaperApplied: [1, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            chatThemesEnabled: [2, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ChatListWallpaper: [] },
    );
    l.ChatListWallpaperWamEvent = e;
  },
  98,
);
