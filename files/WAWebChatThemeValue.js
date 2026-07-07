__d(
  "WAWebChatThemeValue",
  [
    "WAWebChatThemeEnums",
    "WAWebChatThemeGatingUtils",
    "WAWebSolidColorPalette",
    "WAWebWallpaper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.showDoodle,
        n = e.stockWallpaperImageId,
        r = e.wallpaper;
      if (n != null && n !== "")
        return { type: "stock", stockImageId: n, isDoodleEnabled: t };
      if (
        typeof r == "string" &&
        r !== "" &&
        r !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER
      ) {
        var a = y(r);
        if (a != null)
          return c({
            type: "solid",
            colorLight: a.colorLight,
            colorDark: a.colorDark,
            isDoodleEnabled: t,
          });
      }
      return { type: "default", isDoodleEnabled: t };
    }
    function s(e) {
      var t,
        n = e.chatThemeId,
        r = e.colorSchemeId;
      return {
        chatThemeId:
          n == null
            ? null
            : (t = o("WAWebChatThemeEnums").Theme.cast(T(n))) != null
              ? t
              : null,
        colorSchemeId: r == null ? null : I(r),
      };
    }
    function u(e, t) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "solid" &&
          "colorLight" in e &&
          "colorDark" in e
        ) {
          var n = e.colorLight,
            r = e.colorDark;
          return t === "light" ? n : r;
        }
        return o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER;
      })(e);
    }
    function c(e) {
      return e.type === "solid" &&
        d({ colorLight: e.colorLight, colorDark: e.colorDark })
        ? { type: "default", isDoodleEnabled: e.isDoodleEnabled }
        : e;
    }
    function d(e) {
      return (
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorLight) &&
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorDark)
      );
    }
    function m(e) {
      var t = e.replace("#", "").toUpperCase(),
        n = t.length === 8 ? t.slice(2) : t;
      return "#" + n;
    }
    function p(e) {
      return e != null && (e.chatThemeId != null || e.colorSchemeId != null);
    }
    function _(e) {
      return e == null
        ? !1
        : e.type !== "default"
          ? !0
          : e.isDoodleEnabled != null;
    }
    function f(e, t) {
      return e == null
        ? {
            wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            showDoodle: !0,
          }
        : {
            wallpaper: u(e, t),
            showDoodle: e.type === "stock" ? !1 : e.isDoodleEnabled !== !1,
          };
    }
    function g(e) {
      return e != null ? e.isDoodleEnabled : null;
    }
    function h(e, t) {
      return e != null && (e.type === "solid" || e.type === "stock")
        ? babelHelpers.extends({}, e, { isDoodleEnabled: t })
        : { type: "default", isDoodleEnabled: t };
    }
    function y(e) {
      var t = b(e);
      return t != null
        ? t
        : o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? E(e)
          : v(e);
    }
    function C(t) {
      return t == null ||
        typeof t != "object" ||
        t.type !== "solid" ||
        typeof t.colorLight != "string"
        ? null
        : e({
            wallpaper: t.colorLight,
            showDoodle:
              typeof t.isDoodleEnabled == "boolean" ? t.isDoodleEnabled : null,
            stockWallpaperImageId: null,
          });
    }
    function b(e) {
      var t = o("WAWebSolidColorPalette").findPaletteIndex(m(e));
      return t === -1
        ? null
        : {
            colorLight: m(
              o("WAWebSolidColorPalette").getSolidColors("light")[t],
            ),
            colorDark: m(o("WAWebSolidColorPalette").getSolidColors("dark")[t]),
          };
    }
    function v(e) {
      var t = m(e);
      return k(t, o("WAWebWallpaper").getWallpaperColors("light"))
        ? {
            colorLight: t,
            colorDark: m(o("WAWebWallpaper").toggleWallpaperColor(t, "light")),
          }
        : k(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? {
              colorLight: m(
                o("WAWebWallpaper").toggleWallpaperColor(t, "dark"),
              ),
              colorDark: t,
            }
          : null;
    }
    var S = o("WAWebWallpaper").getWallpaperColors("light"),
      R = o("WAWebSolidColorPalette").getSolidColors("light"),
      L = new Map([
        [S[0], R[0]],
        [S[1], R[2]],
        [S[2], R[6]],
        [S[3], R[17]],
        [S[4], R[4]],
        [S[5], R[5]],
        [S[6], R[16]],
        [S[7], R[33]],
        [S[8], R[8]],
        [S[9], R[9]],
        [S[10], R[11]],
        [S[11], R[13]],
        [S[12], R[20]],
        [S[13], R[23]],
        [S[14], R[23]],
        [S[15], R[25]],
        [S[16], R[24]],
        [S[17], R[26]],
        [S[18], R[32]],
        [S[19], R[30]],
        [S[20], R[29]],
        [S[21], R[32]],
        [S[22], R[35]],
        [S[23], R[25]],
        [S[24], R[36]],
        [S[25], R[11]],
        [S[26], R[9]],
      ]);
    function E(e) {
      var t = m(e),
        n = k(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? m(o("WAWebWallpaper").toggleWallpaperColor(t, "dark"))
          : t,
        r = L.get(n);
      return r == null ? v(e) : b(r);
    }
    function k(e, t) {
      return t.some(function (t) {
        return m(t) === e;
      });
    }
    function I(e) {
      var t, n, r;
      return (t =
        (n =
          (r = o("WAWebChatThemeEnums").Theme.cast(e)) != null
            ? r
            : o("WAWebChatThemeEnums").TonalScheme.cast(e)) != null
          ? n
          : o("WAWebChatThemeEnums").MinimalScheme.cast(e)) != null
        ? t
        : null;
    }
    function T(e) {
      var t, n;
      return (t = (n = e.match(/^[^@]*/)) == null ? void 0 : n[0]) != null
        ? t
        : e;
    }
    ((l.wallpaperValueFromFlat = e),
      (l.chatThemeValueFromFlat = s),
      (l.wallpaperValueToHex = u),
      (l.canonicalizeWallpaperValue = c),
      (l.isDefaultPair = d),
      (l.normalizeHex = m),
      (l.isChatThemeOverride = p),
      (l.isWallpaperOverride = _),
      (l.wallpaperBackgroundFromValue = f),
      (l.doodleFromWallpaperValue = g),
      (l.wallpaperValueWithDoodle = h),
      (l.migrateStoredSolidWallpaper = C));
  },
  98,
);
