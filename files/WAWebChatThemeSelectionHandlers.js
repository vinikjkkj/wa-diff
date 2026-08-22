__d(
  "WAWebChatThemeSelectionHandlers",
  [
    "WAWebChatThemeEnums",
    "WAWebChatThemeValue",
    "WAWebSolidColorPalette",
    "WAWebStockWallpaper",
    "WAWebWallpaper",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatThemeModule,
        n = e.markThemeChangeApplied,
        r = e.markWallpaperChangeApplied,
        a = e.snapshotDoodleEnabled,
        i = e.store,
        l = i.isGlobal,
        c = i.effectiveDoodleEnabled,
        d = function (r, a) {
          if (t != null) {
            var e = r === o("WAWebChatThemeEnums").Theme.Default,
              u = t.isMinimalScheme(r),
              d = a != null,
              m = e
                ? o("WAWebChatThemeEnums").Theme.Default
                : t.getBaseTheme(r),
              p = e ? o("WAWebChatThemeEnums").Theme.Default : r;
            (i.applyChatThemeValue({
              chatThemeId: m,
              colorSchemeId: p,
              baseline: {
                themeId: m,
                colorSchemeId: p,
                wallpaper: s(
                  a,
                  u,
                  o("WAWebChatThemeValue").doodleFromWallpaperValue(
                    i.rawWallpaperValue,
                  ),
                ),
              },
            }),
              n(),
              i.applyActiveWallpaperId(d ? a : null),
              d ||
                i.applyWallpaper(
                  l ? null : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
                ));
            var _ = !u;
            !d && (u || _ !== c) && i.applyDoodle(_);
          }
        },
        m = function (r) {
          var e, a;
          if (t != null) {
            var l = r === o("WAWebChatThemeEnums").Theme.Default,
              s = u(i),
              c =
                ((e = i.resolvedWallpaper) == null ? void 0 : e.type) ===
                "solid",
              d =
                (a = i.effectiveChatThemeId) != null
                  ? a
                  : i.effectiveColorSchemeId,
              m =
                s != null ? s : l || c || d == null ? null : t.getBaseTheme(d);
            (i.applyColor(l ? null : r),
              m != null && i.values.chatThemeId !== m && i.applyTheme(m),
              n());
          }
        },
        p = function (n, a) {
          if (t != null) {
            var e = t.getBaseTheme(n);
            r();
            var s =
              a != null
                ? a
                : o("WAWebStockWallpaper").getDefaultWallpaperIdForTheme(e);
            (i.applyActiveWallpaperId(s),
              s == null &&
                i.applyWallpaper(
                  l ? null : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
                ));
          }
        },
        _ = function () {
          i.applyActiveWallpaperId(null);
        },
        f = function (t) {
          var e = o("WAWebSolidColorPalette").isDefaultSolidColor(t)
            ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER
            : t;
          (_(),
            i.applyTheme(
              o("WAWebChatThemeValue").keepMinimalOnFamilyChange(
                i.values.chatThemeId,
                null,
              ),
            ),
            i.applyWallpaper(e),
            r(),
            a !== c && i.applyDoodle(a));
        },
        g = function (t) {
          (i.applyChatThemeValue({
            chatThemeId: t.chatThemeId,
            colorSchemeId: t.colorSchemeId,
            baseline: t.baseline,
          }),
            i.restoreWallpaperValue(t.wallpaperValue),
            n(),
            r());
        };
      return {
        handleSelect: d,
        handleColorSelect: m,
        handleWallpaperSelect: p,
        clearActiveWallpaperPreset: _,
        handleSolidColorSelect: f,
        restoreCustomTile: g,
      };
    }
    function s(e, t, n) {
      return e != null
        ? { type: "stock", stockImageId: e, isDoodleEnabled: n }
        : { type: "default", isDoodleEnabled: !t };
    }
    function u(e) {
      var t = e.effectiveChatThemeId,
        n = e.effectiveColorSchemeId;
      return o("WAWebChatThemeValue").isMinimalChatTheme({
        chatThemeId: t,
        colorSchemeId: n,
      })
        ? n != null && o("WAWebChatThemeEnums").MinimalScheme.isValid(n)
          ? n
          : t
        : null;
    }
    l.createChatThemeSelectionHandlers = e;
  },
  98,
);
