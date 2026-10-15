__d(
  "WAWebChatWallpaperWamType",
  ["WAWebWamEnumChatThemeEntryType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.isGlobal,
        n = e.isGroup;
      return t
        ? o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.APP_WIDE
        : n
          ? o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE.GROUP
          : o("WAWebWamEnumChatThemeEntryType").CHAT_THEME_ENTRY_TYPE
              .ONE_TO_ONE;
    }
    l.chatThemeSourceFor = e;
  },
  98,
);
