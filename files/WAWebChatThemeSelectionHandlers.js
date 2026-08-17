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
        u = i.effectiveDoodleEnabled,
        c = function (r, a) {
          if (t != null) {
            var e = r === o("WAWebChatThemeEnums").Theme.Default,
              s = t.isMinimalScheme(r),
              c = a != null;
            (i.applyChatThemeValue({
              chatThemeId: e
                ? o("WAWebChatThemeEnums").Theme.Default
                : t.getBaseTheme(r),
              colorSchemeId: e ? o("WAWebChatThemeEnums").Theme.Default : r,
            }),
              n(),
              i.applyActiveWallpaperId(c ? a : null),
              c ||
                i.applyWallpaper(
                  l ? null : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
                ));
            var d = !s;
            !c && (s || d !== u) && i.applyDoodle(d);
          }
        },
        d = function (r) {
          var e, a;
          if (t != null) {
            var l = r === o("WAWebChatThemeEnums").Theme.Default,
              u = s(i),
              c =
                ((e = i.resolvedWallpaper) == null ? void 0 : e.type) ===
                "solid",
              d =
                (a = i.effectiveChatThemeId) != null
                  ? a
                  : i.effectiveColorSchemeId,
              m =
                u != null ? u : l || c || d == null ? null : t.getBaseTheme(d);
            (i.applyColor(l ? null : r),
              m != null && i.values.chatThemeId !== m && i.applyTheme(m),
              n());
          }
        },
        m = function (n, a) {
          if (t != null) {
            var e = t.getBaseTheme(n);
            (i.applyTheme(
              o("WAWebChatThemeValue").keepMinimalOnFamilyChange(
                i.values.chatThemeId,
                e,
              ),
            ),
              r());
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
        p = function () {
          i.applyActiveWallpaperId(null);
        },
        _ = function (t) {
          var e = o("WAWebSolidColorPalette").isDefaultSolidColor(t)
            ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER
            : t;
          (p(),
            i.applyTheme(
              o("WAWebChatThemeValue").keepMinimalOnFamilyChange(
                i.values.chatThemeId,
                null,
              ),
            ),
            i.applyWallpaper(e),
            r(),
            a !== u && i.applyDoodle(a));
        },
        f = function (t) {
          (i.applyChatThemeValue({
            chatThemeId: t.chatThemeId,
            colorSchemeId: t.colorSchemeId,
          }),
            i.restoreWallpaperValue(t.wallpaperValue),
            n(),
            r());
        };
      return {
        handleSelect: c,
        handleColorSelect: d,
        handleWallpaperSelect: m,
        clearActiveWallpaperPreset: p,
        handleSolidColorSelect: _,
        restoreCustomTile: f,
      };
    }
    function s(e) {
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
