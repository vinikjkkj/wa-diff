__d(
  "WAWebChatWallpaperWamType",
  ["WAWebWamEnumChatWallpaperType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
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
    l.wamWallpaperType = e;
  },
  98,
);
