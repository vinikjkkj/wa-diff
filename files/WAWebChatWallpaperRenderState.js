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
        d = (i == null ? void 0 : i.type) === "stock" ? i.stockImageId : null,
        m =
          d != null
            ? o("WAWebStockWallpaper").getStockWallpaperUrlByImageId(d)
            : null,
        p =
          d != null
            ? o("WAWebStockWallpaper").getStockWallpaperThumbnailUrlByImageId(d)
            : null,
        _ = u(i, a, l),
        f = _ !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER ? _ : null,
        g = c(i),
        h = m != null && _ === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
        y = !h && g,
        C = o("WAWebMinimalChatWallpaperOverrides").getMinimalModeOverrides({
          effectiveMinimalMode: t,
          isMinimalScheme: r,
          isDarkTheme: n,
          showStockWallpaper: h,
        }),
        b = s({
          showStockWallpaper: h,
          solidWallpaperHex: f,
          isMinimal: t || r,
        });
      return {
        displayWallpaper: _,
        solidWallpaperHex: f,
        stockWallpaperUrl: m,
        stockWallpaperThumbnailUrl: p,
        showStockWallpaper: h,
        showDoodle: y,
        cssVariableOverrides: C,
        backgroundKind: b,
      };
    }
    function s(e) {
      var t = e.isMinimal,
        n = e.showStockWallpaper,
        r = e.solidWallpaperHex;
      return n ? "stock" : r != null ? "solid" : t ? "minimal" : "default";
    }
    function u(e, t, n) {
      return t != null && t !== ""
        ? t
        : e != null && e.type === "solid"
          ? o("WAWebChatThemeValue").wallpaperValueToHex(e, n)
          : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
    }
    function c(e) {
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
