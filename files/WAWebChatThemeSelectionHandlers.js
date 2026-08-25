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
        d = function (r, a, u) {
          if (t != null) {
            var e = r === o("WAWebChatThemeEnums").Theme.Default,
              d = t.isMinimalScheme(r),
              m = a != null,
              p = e
                ? o("WAWebChatThemeEnums").Theme.Default
                : t.getBaseTheme(r),
              _ = e ? o("WAWebChatThemeEnums").Theme.Default : r,
              f = u != null ? u : !d,
              g = m ? i.effectiveDoodlePreference : f;
            (i.applyChatThemeValue({
              chatThemeId: p,
              colorSchemeId: _,
              baseline: { themeId: p, colorSchemeId: _, wallpaper: s(a, g) },
            }),
              n(),
              i.applyActiveWallpaperId(m ? a : null),
              m ||
                i.applyWallpaper(
                  l ? null : o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
                ),
              !m && (d || f !== c) && i.applyDoodle(f));
          }
        },
        m = function (r) {
          var e, a;
          if (t != null) {
            var l = r === o("WAWebChatThemeEnums").Theme.Default,
              s = i.rawChatThemeValue,
              c =
                o("WAWebChatThemeValue").isChatThemeOverride(s) &&
                (s == null ? void 0 : s.inheritsTheme) !== !0,
              d = c ? u(i) : null,
              m =
                ((e = i.resolvedWallpaper) == null ? void 0 : e.type) ===
                "solid",
              p =
                (a = i.effectiveChatThemeId) != null
                  ? a
                  : i.effectiveColorSchemeId,
              _ =
                c && !l && !m && p != null
                  ? d != null
                    ? d
                    : t.getBaseTheme(p)
                  : null;
            (i.applyColor(l ? null : r),
              _ != null && i.values.chatThemeId !== _ && i.applyTheme(_),
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
          (i.applyChatThemeValue(
            babelHelpers.extends(
              {
                chatThemeId: t.chatThemeId,
                colorSchemeId: t.colorSchemeId,
                baseline: t.baseline,
              },
              t.inheritsTheme === !0 ? { inheritsTheme: !0 } : {},
            ),
          ),
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
    function s(e, t) {
      return e != null
        ? { type: "stock", stockImageId: e, isDoodleEnabled: t }
        : { type: "default", isDoodleEnabled: t };
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
