__d(
  "WAWebChatThemeResetWithUndo",
  [
    "fbt",
    "WALogger",
    "WAWebChatThemeEnums",
    "WAWebChatThemeValue",
    "WAWebStockWallpaper",
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
      var n = t.chatThemeModule,
        r = t.clearPinnedCustomizedTile,
        a = t.store,
        i = a.values,
        l = i.doodleEnabled,
        u =
          o("WAWebChatThemeValue").isWallpaperOwningChatThemeId(
            i.chatThemeId,
          ) && i.chatThemeId !== o("WAWebChatThemeEnums").Theme.Default,
        d = u && m(i.colorSchemeId) === String(i.chatThemeId),
        f = p({
          hasWallpaperFamily: u,
          isCoherentFullTheme: d,
          chatThemeId: i.chatThemeId,
          colorSchemeId: i.colorSchemeId,
        }),
        g = i.colorSchemeId == null || i.colorSchemeId === f,
        h = a.rawWallpaperValue,
        y =
          (h == null ? void 0 : h.type) !== "stock" &&
          (h == null ? void 0 : h.type) !== "solid" &&
          l === !0 &&
          (i.wallpaper == null ||
            i.wallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER),
        C =
          (h == null ? void 0 : h.type) === "stock" &&
          i.chatThemeId != null &&
          h.stockImageId ===
            o("WAWebStockWallpaper").getDefaultWallpaperIdForTheme(
              i.chatThemeId,
            ),
        b = _({
          isCoherentFullTheme: d,
          wallpaperIsThemeDefault: y,
          wallpaperIsOwnThemeStock: C,
          isGlobal: a.isGlobal,
          hasWallpaperFamily: u,
          raw: h,
        }),
        v = i.colorSchemeId != null,
        S = a.isGlobal
          ? u || !y
          : u || o("WAWebChatThemeValue").isWallpaperOverride(h),
        R = !v && !S,
        L = function (n, a, i) {
          try {
            n();
          } catch (t) {
            (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "chat-theme-drawer: resetFn threw during performResetWithUndo",
                ])),
            ),
              a());
            return;
          }
          r();
          var t = o("WAWebToast.react").genId();
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              id: t,
              msg: i,
              action: {
                actionText: s._(/*BTDS*/ "Undo"),
                testid: "chat_theme_undo_btn",
                onAction: function () {
                  (a(), o("WAWebToastManager").ToastManager.close(t));
                },
              },
            }),
          );
        },
        E = function () {
          var e, t;
          if (n != null && !R) {
            var r = (e = i.colorSchemeId) != null ? e : null,
              o = (t = i.chatThemeId) != null ? t : null,
              u = a.rawWallpaperValue;
            L(
              function () {
                (a.applyChatThemeValue({
                  chatThemeId: null,
                  colorSchemeId: null,
                }),
                  a.applyWallpaper(null),
                  a.applyActiveWallpaperId(null),
                  a.isGlobal && !l && a.applyDoodle(!0));
              },
              function () {
                (a.applyChatThemeValue({ chatThemeId: o, colorSchemeId: r }),
                  a.restoreWallpaperValue(u));
              },
              s._(/*BTDS*/ "Chat theme reset"),
            );
          }
        },
        k = function () {
          var e;
          if (!g) {
            var t = (e = i.colorSchemeId) != null ? e : null;
            L(
              function () {
                a.applyColor(f);
              },
              function () {
                a.applyColor(t);
              },
              s._(/*BTDS*/ "Chat color reset"),
            );
          }
        },
        I = function () {
          var e;
          if (n != null && !b) {
            var t = (e = i.chatThemeId) != null ? e : null,
              r = a.rawWallpaperValue;
            L(
              function () {
                (a.applyTheme(
                  o("WAWebChatThemeValue").keepMinimalOnFamilyChange(t, null),
                ),
                  a.applyWallpaper(null),
                  a.applyActiveWallpaperId(null),
                  a.isGlobal && !l && a.applyDoodle(!0));
              },
              function () {
                (a.applyTheme(t), a.restoreWallpaperValue(r));
              },
              s._(/*BTDS*/ "Wallpaper reset"),
            );
          }
        };
      return {
        handleReset: E,
        handleColorReset: k,
        handleWallpaperReset: I,
        isAllAtDefault: R,
        isColorAtDefault: g,
        isWallpaperAtDefault: b,
      };
    }
    function m(e) {
      return e != null ? String(e).replace(/@.*$/, "") : null;
    }
    function p(e) {
      var t = e.chatThemeId,
        n = e.colorSchemeId,
        r = e.hasWallpaperFamily,
        a = e.isCoherentFullTheme;
      return r
        ? a && o("WAWebChatThemeValue").isMinimalScheme(n)
          ? n
          : t
        : null;
    }
    function _(e) {
      var t = e.hasWallpaperFamily,
        n = e.isCoherentFullTheme,
        r = e.isGlobal,
        a = e.raw,
        i = e.wallpaperIsOwnThemeStock,
        l = e.wallpaperIsThemeDefault;
      return n
        ? l || i
        : r
          ? !t && l
          : !t && !o("WAWebChatThemeValue").isWallpaperOverride(a);
    }
    l.createChatThemeResetWithUndo = d;
  },
  226,
);
