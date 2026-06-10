__d(
  "WAWebChatThemeSelectionHandlers",
  ["WAWebSolidColorPalette", "WAWebStockWallpaper", "WAWebWallpaper"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatThemeModule,
        n = e.markThemeChangeApplied,
        r = e.markWallpaperChangeApplied,
        a = e.setActiveWallpaperId,
        i = e.snapshotDoodleEnabled,
        l = e.store,
        s = l.isGlobal,
        u = l.values.doodleEnabled,
        c = function (r, i) {
          if (t != null) {
            var e = r === t.Theme.Default,
              c = t.isMinimalScheme(r),
              d = i != null;
            (l.applyColor(e ? t.Theme.Default : r),
              l.applyTheme(e ? t.Theme.Default : t.getBaseTheme(r)),
              l.applyWallpaper(
                s ? null : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              ),
              n(),
              a(i != null ? i : null),
              l.applyActiveWallpaperId(d ? i : null));
            var m = !c && !d;
            (m !== u && l.applyDoodle(m),
              l.minimalModeActive !== c && l.applyMinimalMode(c));
          }
        },
        d = function (r) {
          if (t != null) {
            var e = r === t.Theme.Default;
            (l.applyColor(e ? null : r), n());
          }
        },
        m = function (n, i) {
          if (t != null) {
            var e = t.getBaseTheme(n);
            (l.applyTheme(e),
              l.applyWallpaper(
                s ? null : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
              ),
              r(),
              u && l.applyDoodle(!1));
            var c =
              i != null
                ? i
                : o("WAWebStockWallpaper").getDefaultWallpaperIdForTheme(e);
            (a(c), l.applyActiveWallpaperId(c));
          }
        },
        p = function () {
          (a(null), l.applyActiveWallpaperId(null));
        },
        _ = function (t) {
          var e = o("WAWebSolidColorPalette").isDefaultSolidColor(t)
            ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER
            : t;
          (p(),
            l.applyTheme(null),
            l.applyWallpaper(e),
            r(),
            i !== u && l.applyDoodle(i));
        };
      return {
        handleSelect: c,
        handleColorSelect: d,
        handleWallpaperSelect: m,
        clearActiveWallpaperPreset: p,
        handleSolidColorSelect: _,
      };
    }
    l.createChatThemeSelectionHandlers = e;
  },
  98,
);
