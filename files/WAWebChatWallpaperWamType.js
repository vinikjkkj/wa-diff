__d(
  "WAWebChatWallpaperWamType",
  ["WAWebWamEnumChatThemeEntryType", "WAWebWamEnumChatWallpaperType"],
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
    function s(e, t) {
      return e === "solid"
        ? o("WAWebWamEnumChatWallpaperType").CHAT_WALLPAPER_TYPE.SOLID
        : e === "stock"
          ? t === "dark"
            ? o("WAWebWamEnumChatWallpaperType").CHAT_WALLPAPER_TYPE.DARK
            : o("WAWebWamEnumChatWallpaperType").CHAT_WALLPAPER_TYPE.LIGHT
          : e === "default" || e == null
            ? o("WAWebWamEnumChatWallpaperType").CHAT_WALLPAPER_TYPE.DEFAULT
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "solid"
        )
          return "solid";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "stock" &&
          "stockImageId" in e
        ) {
          var t = e.stockImageId;
          return "wallpaper-" + t;
        }
        if (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.type === "default") ||
          e == null
        )
          return "doodle";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    ((l.chatThemeSourceFor = e),
      (l.wamWallpaperType = s),
      (l.wallpaperLoggingId = u));
  },
  98,
);
