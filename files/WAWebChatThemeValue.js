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
        var a = L(r);
        if (a != null)
          return g({
            type: "solid",
            colorLight: a.colorLight,
            colorDark: a.colorDark,
            isDoodleEnabled: t,
          });
      }
      return { type: "default", isDoodleEnabled: t };
    }
    function s(e) {
      var t = e.chatThemeId,
        n = e.colorSchemeId;
      return {
        chatThemeId: t == null ? null : A(t),
        colorSchemeId: n == null ? null : N(n),
      };
    }
    function u(e) {
      return e != null && o("WAWebChatThemeEnums").MinimalScheme.isValid(e);
    }
    function c(e) {
      return e != null && !u(e);
    }
    function d(e) {
      if (e == null) return null;
      if (e.baseline != null) return e.baseline;
      var t = e.chatThemeId,
        n = e.colorSchemeId;
      return t == null || n == null || !m(t, n)
        ? null
        : { themeId: t, colorSchemeId: n, wallpaper: null };
    }
    function m(e, t) {
      return u(e) ? !1 : p(t) === p(e);
    }
    function p(e) {
      return String(e).replace(/@.*$/, "");
    }
    function _(e) {
      return e == null ? !1 : u(e.colorSchemeId) || u(e.chatThemeId);
    }
    function f(e, t) {
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
    function g(e) {
      return e.type === "solid" &&
        h({ colorLight: e.colorLight, colorDark: e.colorDark })
        ? { type: "default", isDoodleEnabled: e.isDoodleEnabled }
        : e;
    }
    function h(e) {
      return (
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorLight) &&
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorDark)
      );
    }
    function y(e) {
      var t = e.replace("#", "").toUpperCase(),
        n = t.length === 8 ? t.slice(2) : t;
      return "#" + n;
    }
    function C(e) {
      return e != null && (e.chatThemeId != null || e.colorSchemeId != null);
    }
    function b(e) {
      return e == null
        ? !1
        : e.type !== "default"
          ? !0
          : e.isDoodleEnabled != null;
    }
    function v(e, t) {
      return e == null
        ? {
            wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            showDoodle: !0,
          }
        : {
            wallpaper: f(e, t),
            showDoodle: e.type === "stock" ? !1 : e.isDoodleEnabled !== !1,
          };
    }
    function S(e) {
      return e != null ? e.isDoodleEnabled : null;
    }
    function R(e, t) {
      return e != null && (e.type === "solid" || e.type === "stock")
        ? babelHelpers.extends({}, e, { isDoodleEnabled: t })
        : { type: "default", isDoodleEnabled: t };
    }
    function L(e) {
      var t = k(e);
      return t != null
        ? t
        : o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? $(e)
          : I(e);
    }
    function E(t) {
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
    function k(e) {
      var t = o("WAWebSolidColorPalette").findPaletteIndex(y(e));
      return t === -1
        ? null
        : {
            colorLight: y(
              o("WAWebSolidColorPalette").getSolidColors("light")[t],
            ),
            colorDark: y(o("WAWebSolidColorPalette").getSolidColors("dark")[t]),
          };
    }
    function I(e) {
      var t = y(e);
      return P(t, o("WAWebWallpaper").getWallpaperColors("light"))
        ? {
            colorLight: t,
            colorDark: y(o("WAWebWallpaper").toggleWallpaperColor(t, "light")),
          }
        : P(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? {
              colorLight: y(
                o("WAWebWallpaper").toggleWallpaperColor(t, "dark"),
              ),
              colorDark: t,
            }
          : null;
    }
    var T = o("WAWebWallpaper").getWallpaperColors("light"),
      D = o("WAWebSolidColorPalette").getSolidColors("light"),
      x = new Map([
        [T[0], D[0]],
        [T[1], D[2]],
        [T[2], D[6]],
        [T[3], D[17]],
        [T[4], D[4]],
        [T[5], D[5]],
        [T[6], D[16]],
        [T[7], D[33]],
        [T[8], D[8]],
        [T[9], D[9]],
        [T[10], D[11]],
        [T[11], D[13]],
        [T[12], D[20]],
        [T[13], D[23]],
        [T[14], D[23]],
        [T[15], D[25]],
        [T[16], D[24]],
        [T[17], D[26]],
        [T[18], D[32]],
        [T[19], D[30]],
        [T[20], D[29]],
        [T[21], D[32]],
        [T[22], D[35]],
        [T[23], D[25]],
        [T[24], D[36]],
        [T[25], D[11]],
        [T[26], D[9]],
      ]);
    function $(e) {
      var t = y(e),
        n = P(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? y(o("WAWebWallpaper").toggleWallpaperColor(t, "dark"))
          : t,
        r = x.get(n);
      return r == null ? I(e) : k(r);
    }
    function P(e, t) {
      return t.some(function (t) {
        return y(t) === e;
      });
    }
    function N(e) {
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
    function M(e, t, n) {
      return !u(n) && u(t) ? t : e;
    }
    function w(e, t) {
      return u(e) ? e : t;
    }
    function A(e) {
      var t, n;
      return (t =
        (n = o("WAWebChatThemeEnums").MinimalScheme.cast(e)) != null
          ? n
          : o("WAWebChatThemeEnums").Theme.cast(p(e))) != null
        ? t
        : null;
    }
    ((l.wallpaperValueFromFlat = e),
      (l.chatThemeValueFromFlat = s),
      (l.isMinimalScheme = u),
      (l.isWallpaperOwningChatThemeId = c),
      (l.resolveBaseline = d),
      (l.themeFamilyOf = p),
      (l.isMinimalChatTheme = _),
      (l.wallpaperValueToHex = f),
      (l.canonicalizeWallpaperValue = g),
      (l.isDefaultPair = h),
      (l.normalizeHex = y),
      (l.isChatThemeOverride = C),
      (l.isWallpaperOverride = b),
      (l.wallpaperBackgroundFromValue = v),
      (l.doodleFromWallpaperValue = S),
      (l.wallpaperValueWithDoodle = R),
      (l.migrateStoredSolidWallpaper = E),
      (l.promoteMinimalOnColorChange = M),
      (l.keepMinimalOnFamilyChange = w));
  },
  98,
);
