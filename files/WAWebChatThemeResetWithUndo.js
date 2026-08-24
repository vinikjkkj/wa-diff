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
      var n,
        r,
        a,
        i,
        l = t.chatThemeModule,
        u = t.clearPinnedCustomizedTile,
        d = t.store,
        p = d.values,
        _ = p.doodleEnabled,
        f = d.rawChatThemeValue,
        g =
          o("WAWebChatThemeValue").isWallpaperOwningChatThemeId(
            p.chatThemeId,
          ) && p.chatThemeId !== o("WAWebChatThemeEnums").Theme.Default,
        h = o("WAWebChatThemeValue").resolveBaseline(f),
        y = o("WAWebChatThemeValue").isBaselineAmbiguous(f),
        C = (n = h == null ? void 0 : h.colorSchemeId) != null ? n : null,
        b = !o("WAWebChatThemeValue").hasBubbleOverride(f),
        v = d.rawWallpaperValue,
        S =
          (v == null ? void 0 : v.type) !== "stock" &&
          (v == null ? void 0 : v.type) !== "solid" &&
          _ === !0 &&
          (p.wallpaper == null ||
            p.wallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER),
        R =
          (h == null || (r = h.wallpaper) == null ? void 0 : r.type) === "stock"
            ? h.wallpaper.stockImageId
            : null,
        L =
          (v == null ? void 0 : v.type) === "stock" &&
          R != null &&
          v.stockImageId === R,
        E =
          (h == null ? void 0 : h.wallpaper) == null && p.chatThemeId != null
            ? o("WAWebStockWallpaper").getDefaultWallpaperIdForTheme(
                p.chatThemeId,
              )
            : null,
        k =
          (v == null ? void 0 : v.type) === "stock" &&
          E != null &&
          v.stockImageId === E,
        I =
          (h == null || (a = h.wallpaper) == null ? void 0 : a.type) ===
          "default"
            ? (i = h.wallpaper.isDoodleEnabled) != null
              ? i
              : !0
            : null,
        T =
          (v == null ? void 0 : v.type) === "default" &&
          v.isDoodleEnabled != null &&
          I != null &&
          v.isDoodleEnabled === I,
        D = m({
          hasResolvedBaseline: h != null,
          hasWallpaperBaseline: (h == null ? void 0 : h.wallpaper) != null,
          isAmbiguous: y,
          wallpaperIsThemeDefault: S,
          wallpaperIsOwnThemeBackground: L || T,
          wallpaperIsLegacyThemeStock: k,
          isGlobal: d.isGlobal,
          hasWallpaperFamily: g,
          raw: v,
        }),
        x = p.colorSchemeId != null,
        $ = d.isGlobal
          ? g || !S
          : g || o("WAWebChatThemeValue").isWallpaperOverride(v),
        P = !x && !$,
        N = function (n, r, a) {
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
          u();
          var t = o("WAWebToast.react").genId();
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              id: t,
              msg: a,
              action: {
                actionText: s._(/*BTDS*/ "Undo"),
                testid: "chat_theme_undo_btn",
                onAction: function () {
                  (r(), o("WAWebToastManager").ToastManager.close(t));
                },
              },
            }),
          );
        },
        M = function () {
          var e, t, n;
          if (l != null && !P) {
            var r = (e = p.colorSchemeId) != null ? e : null,
              o = (t = p.chatThemeId) != null ? t : null,
              a = (n = f == null ? void 0 : f.baseline) != null ? n : null,
              i = d.rawWallpaperValue;
            N(
              function () {
                (d.applyChatThemeValue({
                  chatThemeId: null,
                  colorSchemeId: null,
                  baseline: null,
                }),
                  d.applyActiveWallpaperId(null),
                  d.applyWallpaper(null),
                  d.isGlobal && !_ && d.applyDoodle(!0));
              },
              function () {
                (d.applyChatThemeValue({
                  chatThemeId: o,
                  colorSchemeId: r,
                  baseline: a,
                }),
                  d.restoreWallpaperValue(i));
              },
              s._(/*BTDS*/ "Chat theme reset"),
            );
          }
        },
        w = function () {
          var e;
          if (!b) {
            var t = (e = p.colorSchemeId) != null ? e : null;
            N(
              function () {
                d.applyColor(C);
              },
              function () {
                d.applyColor(t);
              },
              s._(/*BTDS*/ "Chat color reset"),
            );
          }
        },
        A = function () {
          var e, t, n;
          if (l != null && !D) {
            var r = (e = p.chatThemeId) != null ? e : null,
              a = d.rawWallpaperValue,
              i = (t = h == null ? void 0 : h.wallpaper) != null ? t : null,
              u =
                ((f == null ? void 0 : f.baseline) != null ||
                  o("WAWebChatThemeValue").isMinimalChatTheme(f)) &&
                (n = h == null ? void 0 : h.themeId) != null
                  ? n
                  : null;
            N(
              function () {
                (d.applyTheme(
                  o("WAWebChatThemeValue").keepMinimalOnFamilyChange(r, u),
                ),
                  i != null
                    ? (i.type !== "stock" && d.applyActiveWallpaperId(null),
                      d.restoreWallpaperValue(i))
                    : (d.applyActiveWallpaperId(null),
                      d.applyWallpaper(null),
                      d.isGlobal && !_ && d.applyDoodle(!0)));
              },
              function () {
                (d.applyTheme(r),
                  (i == null ? void 0 : i.type) === "stock" &&
                    (a == null ? void 0 : a.type) !== "stock" &&
                    d.applyActiveWallpaperId(null),
                  d.restoreWallpaperValue(a));
              },
              s._(/*BTDS*/ "Wallpaper reset"),
            );
          }
        };
      return {
        handleReset: M,
        handleColorReset: w,
        handleWallpaperReset: A,
        isAllAtDefault: P,
        isColorAtDefault: b,
        isWallpaperAtDefault: D,
      };
    }
    function m(e) {
      var t = e.hasResolvedBaseline,
        n = e.hasWallpaperBaseline,
        r = e.hasWallpaperFamily,
        a = e.isAmbiguous,
        i = e.isGlobal,
        l = e.raw,
        s = e.wallpaperIsLegacyThemeStock,
        u = e.wallpaperIsOwnThemeBackground,
        c = e.wallpaperIsThemeDefault;
      return a
        ? !0
        : n
          ? u
          : t
            ? c || s
            : i
              ? !r && c
              : !r && !o("WAWebChatThemeValue").isWallpaperOverride(l);
    }
    l.createChatThemeResetWithUndo = d;
  },
  226,
);
