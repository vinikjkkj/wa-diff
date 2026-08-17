__d(
  "WAWebChatThemeResetWithUndo",
  [
    "fbt",
    "WALogger",
    "WAWebChatThemeValue",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWallpaper",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        r = t.chatThemeModule,
        a = t.clearPinnedCustomizedTile,
        i = t.store,
        l = i.values,
        u = l.doodleEnabled,
        d = l.colorSchemeId == null,
        m = o("WAWebChatThemeValue").isWallpaperOwningChatThemeId(
          l.chatThemeId,
        ),
        p = i.isGlobal
          ? !m &&
            (l.wallpaper == null ||
              l.wallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER) &&
            ((n = i.rawWallpaperValue) == null ? void 0 : n.type) !== "stock" &&
            u === !0
          : !m &&
            !o("WAWebChatThemeValue").isWallpaperOverride(i.rawWallpaperValue),
        _ = p && d,
        f = function (n, r, i) {
          try {
            n();
          } catch (t) {
            (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "chat-theme-drawer: resetFn threw during performResetWithUndo",
                ])),
            ),
              r());
            return;
          }
          a();
          var t = o("WAWebToast.react").genId();
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              id: t,
              msg: i,
              action: {
                actionText: s._(/*BTDS*/ "Undo"),
                onAction: function () {
                  (r(), o("WAWebToastManager").ToastManager.close(t));
                },
              },
            }),
          );
        },
        g = function () {
          var e, t;
          if (r != null && !_) {
            var n = (e = l.colorSchemeId) != null ? e : null,
              o = (t = l.chatThemeId) != null ? t : null,
              a = i.rawWallpaperValue;
            f(
              function () {
                (i.applyChatThemeValue({
                  chatThemeId: null,
                  colorSchemeId: null,
                }),
                  i.applyWallpaper(null),
                  i.applyActiveWallpaperId(null),
                  i.isGlobal && !u && i.applyDoodle(!0));
              },
              function () {
                (i.applyChatThemeValue({ chatThemeId: o, colorSchemeId: n }),
                  i.restoreWallpaperValue(a));
              },
              s._(/*BTDS*/ "Chat theme reset"),
            );
          }
        },
        h = function () {
          var e;
          if (!d) {
            var t = (e = l.colorSchemeId) != null ? e : null;
            f(
              function () {
                i.applyColor(null);
              },
              function () {
                i.applyColor(t);
              },
              s._(/*BTDS*/ "Chat color reset"),
            );
          }
        },
        y = function () {
          var e;
          if (r != null && !p) {
            var t = (e = l.chatThemeId) != null ? e : null,
              n = i.rawWallpaperValue;
            f(
              function () {
                (i.applyTheme(
                  o("WAWebChatThemeValue").keepMinimalOnFamilyChange(t, null),
                ),
                  i.applyWallpaper(null),
                  i.applyActiveWallpaperId(null),
                  i.isGlobal && !u && i.applyDoodle(!0));
              },
              function () {
                (i.applyTheme(t), i.restoreWallpaperValue(n));
              },
              s._(/*BTDS*/ "Wallpaper reset"),
            );
          }
        };
      return {
        handleReset: g,
        handleColorReset: h,
        handleWallpaperReset: y,
        isAllAtDefault: _,
        isColorAtDefault: d,
        isWallpaperAtDefault: p,
      };
    }
    l.createChatThemeResetWithUndo = d;
  },
  226,
);
