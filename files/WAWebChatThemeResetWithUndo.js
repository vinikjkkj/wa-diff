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
    function d(t, n, r, a) {
      var i = t.values,
        l = i.doodleEnabled,
        u = i.colorSchemeId == null,
        d =
          i.chatThemeId == null &&
          (i.wallpaper == null ||
            i.wallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER) &&
          r == null &&
          t.activeWallpaperId == null &&
          l === !0,
        m = d && u && t.minimalModeActive === !1,
        p = function (n, r, a) {
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
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: a,
              action: { actionText: s._(/*BTDS*/ "Undo"), onAction: r },
            }),
          );
        },
        _ = function () {
          var e, o;
          if (n != null && !m) {
            var u = (e = i.colorSchemeId) != null ? e : null,
              c = (o = i.chatThemeId) != null ? o : null,
              d = i.wallpaper,
              _ = r,
              f = l,
              g = t.minimalModeActive;
            p(
              function () {
                (t.applyColor(null),
                  t.applyTheme(null),
                  t.applyWallpaper(null),
                  a(null),
                  t.applyActiveWallpaperId(null),
                  t.applyMinimalMode(!1),
                  l || t.applyDoodle(!0));
              },
              function () {
                (t.applyColor(u),
                  t.applyTheme(c),
                  t.applyWallpaper(d),
                  a(_),
                  t.applyActiveWallpaperId(_),
                  t.applyMinimalMode(g),
                  t.applyDoodle(f));
              },
              s._(/*BTDS*/ "Chat theme reset"),
            );
          }
        },
        f = function () {
          var e;
          if (!u) {
            var n = (e = i.colorSchemeId) != null ? e : null;
            p(
              function () {
                t.applyColor(null);
              },
              function () {
                t.applyColor(n);
              },
              s._(/*BTDS*/ "Chat color reset"),
            );
          }
        },
        g = function () {
          var e;
          if (n != null && !d) {
            var o = (e = i.chatThemeId) != null ? e : null,
              u = i.wallpaper,
              c = r,
              m = l;
            p(
              function () {
                (t.applyTheme(null),
                  t.applyWallpaper(null),
                  a(null),
                  t.applyActiveWallpaperId(null),
                  l || t.applyDoodle(!0));
              },
              function () {
                (t.applyTheme(o),
                  t.applyWallpaper(u),
                  a(c),
                  t.applyActiveWallpaperId(c),
                  t.applyDoodle(m));
              },
              s._(/*BTDS*/ "Wallpaper reset"),
            );
          }
        };
      return {
        handleReset: _,
        handleColorReset: f,
        handleWallpaperReset: g,
        isAllAtDefault: m,
        isColorAtDefault: u,
        isWallpaperAtDefault: d,
      };
    }
    l.createChatThemeResetWithUndo = d;
  },
  226,
);
