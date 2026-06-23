__d(
  "WAWebChatWallpaperRenderState",
  [
    "WAWebChatThemeValue",
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
        a = e.wallpaperPreview,
        i = e.wallpaperValue,
        l = n ? "dark" : "light",
        c = (i == null ? void 0 : i.type) === "stock" ? i.stockImageId : null,
        d =
          c != null
            ? o("WAWebStockWallpaper").getStockWallpaperUrlByImageId(c)
            : null,
        m = s(i, a, l),
        p = m !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? m : null,
        _ = u(i),
        f = d != null && m === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
        g = !f && _,
        h = o("WAWebMinimalChatWallpaperOverrides").getMinimalModeOverrides({
          effectiveMinimalMode: t,
          isMinimalScheme: r,
          isDarkTheme: n,
          showStockWallpaper: f,
        });
      return {
        displayWallpaper: m,
        solidWallpaperHex: p,
        stockWallpaperUrl: d,
        showStockWallpaper: f,
        showDoodle: g,
        cssVariableOverrides: h,
      };
    }
    function s(e, t, n) {
      return t != null && t !== ""
        ? t
        : e != null && e.type === "solid"
          ? o("WAWebChatThemeValue").wallpaperValueToHex(e, n)
          : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
    }
    function u(e) {
      var t;
      return e == null
        ? !0
        : e.type === "stock"
          ? !1
          : (t = e.isDoodleEnabled) != null
            ? t
            : !0;
    }
    l.deriveChatWallpaperRenderState = e;
  },
  98,
);
