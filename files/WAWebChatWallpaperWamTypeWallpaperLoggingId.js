__d(
  "WAWebChatWallpaperWamTypeWallpaperLoggingId",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
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
    i.wallpaperLoggingId = e;
  },
  66,
);
