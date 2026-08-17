__d(
  "WAWebChatThemeResetWithUndo",
  [
    "fbt",
    "WALogger",
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
      var n = t.activeWallpaperId,
        r = t.chatThemeModule,
        a = t.clearPinnedCustomizedTile,
        i = t.setActiveWallpaperId,
        l = t.store,
        u = l.values,
        d = u.doodleEnabled,
        m = u.colorSchemeId == null,
        p =
          u.chatThemeId == null &&
          (u.wallpaper == null ||
            u.wallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER) &&
          n == null &&
          l.activeWallpaperId == null &&
          d === !0,
        _ = p && m && l.minimalModeActive === !1,
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
            var o = (e = u.colorSchemeId) != null ? e : null,
              a = (t = u.chatThemeId) != null ? t : null,
              c = l.rawWallpaperValue,
              m = n,
              p = l.minimalModeActive;
            f(
              function () {
                (l.applyColor(null),
                  l.applyTheme(null),
                  l.applyWallpaper(null),
                  i(null),
                  l.applyActiveWallpaperId(null),
                  l.applyMinimalMode(!1),
                  l.isGlobal && !d && l.applyDoodle(!0));
              },
              function () {
                (l.applyColor(o),
                  l.applyTheme(a),
                  l.restoreWallpaperValue(c),
                  i(m),
                  l.applyMinimalMode(p));
              },
              s._(/*BTDS*/ "Chat theme reset"),
            );
          }
        },
        h = function () {
          var e;
          if (!m) {
            var t = (e = u.colorSchemeId) != null ? e : null;
            f(
              function () {
                l.applyColor(null);
              },
              function () {
                l.applyColor(t);
              },
              s._(/*BTDS*/ "Chat color reset"),
            );
          }
        },
        y = function () {
          var e;
          if (r != null && !p) {
            var t = (e = u.chatThemeId) != null ? e : null,
              o = l.rawWallpaperValue,
              a = n;
            f(
              function () {
                (l.applyTheme(null),
                  l.applyWallpaper(null),
                  i(null),
                  l.applyActiveWallpaperId(null),
                  l.isGlobal && !d && l.applyDoodle(!0));
              },
              function () {
                (l.applyTheme(t), l.restoreWallpaperValue(o), i(a));
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
        isColorAtDefault: m,
        isWallpaperAtDefault: p,
      };
    }
    l.createChatThemeResetWithUndo = d;
  },
  226,
);
