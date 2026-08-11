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
    function s(e) {
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
    ((l.wamWallpaperType = e), (l.wallpaperLoggingId = s));
  },
  98,
);
