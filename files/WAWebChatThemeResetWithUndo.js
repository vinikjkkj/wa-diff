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
        u = t.clearDoodlePreviews,
        d = t.clearPinnedCustomizedTile,
        p = t.store,
        _ = p.values,
        f = _.doodleEnabled,
        g = p.rawChatThemeValue,
        h =
          o("WAWebChatThemeValue").isWallpaperOwningChatThemeId(
            _.chatThemeId,
          ) && _.chatThemeId !== o("WAWebChatThemeEnums").Theme.Default,
        y = o("WAWebChatThemeValue").resolveBaseline(g),
        C = o("WAWebChatThemeValue").isBaselineAmbiguous(g),
        b = (n = y == null ? void 0 : y.colorSchemeId) != null ? n : null,
        v = !o("WAWebChatThemeValue").hasBubbleOverride(g),
        S = p.rawWallpaperValue,
        R =
          (S == null ? void 0 : S.type) !== "stock" &&
          (S == null ? void 0 : S.type) !== "solid" &&
          f === !0 &&
          (_.wallpaper == null ||
            _.wallpaper === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER),
        L =
          (y == null || (r = y.wallpaper) == null ? void 0 : r.type) === "stock"
            ? y.wallpaper.stockImageId
            : null,
        E =
          (S == null ? void 0 : S.type) === "stock" &&
          L != null &&
          S.stockImageId === L,
        k =
          (y == null ? void 0 : y.wallpaper) == null && _.chatThemeId != null
            ? o("WAWebStockWallpaper").getDefaultWallpaperIdForTheme(
                _.chatThemeId,
              )
            : null,
        I =
          (S == null ? void 0 : S.type) === "stock" &&
          k != null &&
          S.stockImageId === k,
        T =
          (y == null || (a = y.wallpaper) == null ? void 0 : a.type) ===
          "default"
            ? (i = y.wallpaper.isDoodleEnabled) != null
              ? i
              : !0
            : null,
        D =
          (S == null ? void 0 : S.type) === "default" &&
          S.isDoodleEnabled != null &&
          T != null &&
          S.isDoodleEnabled === T,
        x = m({
          hasResolvedBaseline: y != null,
          hasWallpaperBaseline: (y == null ? void 0 : y.wallpaper) != null,
          isAmbiguous: C,
          wallpaperIsThemeDefault: R,
          wallpaperIsOwnThemeBackground: E || D,
          wallpaperIsLegacyThemeStock: I,
          isGlobal: p.isGlobal,
          hasWallpaperFamily: h,
          raw: S,
        }),
        $ = _.colorSchemeId != null,
        P = p.isGlobal
          ? h || !R
          : h || o("WAWebChatThemeValue").isWallpaperOverride(S),
        N = !$ && !P,
        M = function (n, r, a) {
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
          d();
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
        w = function () {
          var e, t, n;
          if (l != null && !N) {
            var r = (e = _.colorSchemeId) != null ? e : null,
              o = (t = _.chatThemeId) != null ? t : null,
              a = (n = g == null ? void 0 : g.baseline) != null ? n : null,
              i = p.rawWallpaperValue;
            M(
              function () {
                (p.applyChatThemeValue({
                  chatThemeId: null,
                  colorSchemeId: null,
                  baseline: null,
                }),
                  p.applyActiveWallpaperId(null),
                  p.applyWallpaper(null),
                  p.isGlobal && !f && p.applyDoodle(!0),
                  u == null || u());
              },
              function () {
                (p.applyChatThemeValue(
                  babelHelpers.extends(
                    { chatThemeId: o, colorSchemeId: r, baseline: a },
                    (g == null ? void 0 : g.inheritsTheme) === !0
                      ? { inheritsTheme: !0 }
                      : {},
                  ),
                ),
                  p.restoreWallpaperValue(i));
              },
              s._(/*BTDS*/ "Chat theme reset"),
            );
          }
        },
        A = function () {
          var e, t;
          if (!v) {
            var n = (e = _.chatThemeId) != null ? e : null,
              r = (t = _.colorSchemeId) != null ? t : null,
              o = g == null ? void 0 : g.baseline;
            M(
              function () {
                p.applyColor(b);
              },
              function () {
                p.applyChatThemeValue(
                  babelHelpers.extends(
                    { chatThemeId: n, colorSchemeId: r, baseline: o },
                    (g == null ? void 0 : g.inheritsTheme) === !0
                      ? { inheritsTheme: !0 }
                      : {},
                  ),
                );
              },
              s._(/*BTDS*/ "Chat color reset"),
            );
          }
        },
        F = function () {
          var e, t, n;
          if (l != null && !x) {
            var r = (e = _.chatThemeId) != null ? e : null,
              a = p.rawWallpaperValue,
              i = (t = y == null ? void 0 : y.wallpaper) != null ? t : null,
              u =
                ((g == null ? void 0 : g.baseline) != null ||
                  o("WAWebChatThemeValue").isMinimalChatTheme(g)) &&
                (n = y == null ? void 0 : y.themeId) != null
                  ? n
                  : null,
              c = o("WAWebChatThemeValue").keepMinimalOnFamilyChange(r, u),
              d = c !== r || (g == null ? void 0 : g.inheritsTheme) !== !0;
            M(
              function () {
                (d && p.applyTheme(c),
                  i != null
                    ? (i.type !== "stock" && p.applyActiveWallpaperId(null),
                      p.restoreWallpaperValue(i))
                    : (p.applyActiveWallpaperId(null),
                      p.applyWallpaper(null),
                      p.isGlobal && !f && p.applyDoodle(!0)));
              },
              function () {
                (d && p.applyTheme(r),
                  (i == null ? void 0 : i.type) === "stock" &&
                    (a == null ? void 0 : a.type) !== "stock" &&
                    p.applyActiveWallpaperId(null),
                  p.restoreWallpaperValue(a));
              },
              s._(/*BTDS*/ "Wallpaper reset"),
            );
          }
        };
      return {
        handleReset: w,
        handleColorReset: A,
        handleWallpaperReset: F,
        isAllAtDefault: N,
        isColorAtDefault: v,
        isWallpaperAtDefault: x,
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
