__d(
  "WAWebChatWallpaperRenderState",
  [
    "WAWebMinimalChatWallpaperOverrides",
    "WAWebStockWallpaper",
    "WAWebWallpaper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.effectiveMinimalMode,
        n = e.isDarkTheme,
        r = e.isMinimalScheme,
        a = e.rawShowDoodle,
        i = e.stockWallpaperImageId,
        l = e.storedWallpaper,
        s = e.suppressSolidWallpaper,
        u = e.wallpaperPreview,
        c =
          i != null
            ? o("WAWebStockWallpaper").getStockWallpaperUrlByImageId(i)
            : null,
        d = u != null ? u : l,
        m = n ? "dark" : "light",
        p = n ? "light" : "dark",
        _ =
          d != null &&
          d !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER &&
          !o("WAWebWallpaper").colorExistsInTheme(d, m)
            ? o("WAWebWallpaper").toggleWallpaperColor(d, p)
            : d != null
              ? d
              : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
        f = _ !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER && !s ? _ : null,
        g =
          c != null &&
          (_ === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER || s) &&
          !a,
        h = !g && a,
        y = o("WAWebMinimalChatWallpaperOverrides").getMinimalModeOverrides({
          effectiveMinimalMode: t,
          isMinimalScheme: r,
          isDarkTheme: n,
          showStockWallpaper: g,
        });
      return {
        displayWallpaper: _,
        solidWallpaperHex: f,
        stockWallpaperUrl: c,
        showStockWallpaper: g,
        showDoodle: h,
        cssVariableOverrides: y,
      };
    }
    l.deriveChatWallpaperRenderState = e;
  },
  98,
);
