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
        var a = v(r);
        if (a != null)
          return p({
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
        chatThemeId: t == null ? null : N(t),
        colorSchemeId: n == null ? null : x(n),
      };
    }
    function u(e) {
      return e != null && o("WAWebChatThemeEnums").MinimalScheme.isValid(e);
    }
    function c(e) {
      return e != null && !u(e);
    }
    function d(e) {
      return e == null ? !1 : u(e.colorSchemeId) || u(e.chatThemeId);
    }
    function m(e, t) {
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
    function p(e) {
      return e.type === "solid" &&
        _({ colorLight: e.colorLight, colorDark: e.colorDark })
        ? { type: "default", isDoodleEnabled: e.isDoodleEnabled }
        : e;
    }
    function _(e) {
      return (
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorLight) &&
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorDark)
      );
    }
    function f(e) {
      var t = e.replace("#", "").toUpperCase(),
        n = t.length === 8 ? t.slice(2) : t;
      return "#" + n;
    }
    function g(e) {
      return e != null && (e.chatThemeId != null || e.colorSchemeId != null);
    }
    function h(e) {
      return e == null
        ? !1
        : e.type !== "default"
          ? !0
          : e.isDoodleEnabled != null;
    }
    function y(e, t) {
      return e == null
        ? {
            wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            showDoodle: !0,
          }
        : {
            wallpaper: m(e, t),
            showDoodle: e.type === "stock" ? !1 : e.isDoodleEnabled !== !1,
          };
    }
    function C(e) {
      return e != null ? e.isDoodleEnabled : null;
    }
    function b(e, t) {
      return e != null && (e.type === "solid" || e.type === "stock")
        ? babelHelpers.extends({}, e, { isDoodleEnabled: t })
        : { type: "default", isDoodleEnabled: t };
    }
    function v(e) {
      var t = R(e);
      return t != null
        ? t
        : o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? T(e)
          : L(e);
    }
    function S(t) {
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
    function R(e) {
      var t = o("WAWebSolidColorPalette").findPaletteIndex(f(e));
      return t === -1
        ? null
        : {
            colorLight: f(
              o("WAWebSolidColorPalette").getSolidColors("light")[t],
            ),
            colorDark: f(o("WAWebSolidColorPalette").getSolidColors("dark")[t]),
          };
    }
    function L(e) {
      var t = f(e);
      return D(t, o("WAWebWallpaper").getWallpaperColors("light"))
        ? {
            colorLight: t,
            colorDark: f(o("WAWebWallpaper").toggleWallpaperColor(t, "light")),
          }
        : D(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? {
              colorLight: f(
                o("WAWebWallpaper").toggleWallpaperColor(t, "dark"),
              ),
              colorDark: t,
            }
          : null;
    }
    var E = o("WAWebWallpaper").getWallpaperColors("light"),
      k = o("WAWebSolidColorPalette").getSolidColors("light"),
      I = new Map([
        [E[0], k[0]],
        [E[1], k[2]],
        [E[2], k[6]],
        [E[3], k[17]],
        [E[4], k[4]],
        [E[5], k[5]],
        [E[6], k[16]],
        [E[7], k[33]],
        [E[8], k[8]],
        [E[9], k[9]],
        [E[10], k[11]],
        [E[11], k[13]],
        [E[12], k[20]],
        [E[13], k[23]],
        [E[14], k[23]],
        [E[15], k[25]],
        [E[16], k[24]],
        [E[17], k[26]],
        [E[18], k[32]],
        [E[19], k[30]],
        [E[20], k[29]],
        [E[21], k[32]],
        [E[22], k[35]],
        [E[23], k[25]],
        [E[24], k[36]],
        [E[25], k[11]],
        [E[26], k[9]],
      ]);
    function T(e) {
      var t = f(e),
        n = D(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? f(o("WAWebWallpaper").toggleWallpaperColor(t, "dark"))
          : t,
        r = I.get(n);
      return r == null ? L(e) : R(r);
    }
    function D(e, t) {
      return t.some(function (t) {
        return f(t) === e;
      });
    }
    function x(e) {
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
    function $(e, t, n) {
      return !u(n) && u(t) ? t : e;
    }
    function P(e, t) {
      return u(e) ? e : t;
    }
    function N(e) {
      var t, n;
      return (t =
        (n = o("WAWebChatThemeEnums").MinimalScheme.cast(e)) != null
          ? n
          : o("WAWebChatThemeEnums").Theme.cast(M(e))) != null
        ? t
        : null;
    }
    function M(e) {
      var t, n;
      return (t = (n = e.match(/^[^@]*/)) == null ? void 0 : n[0]) != null
        ? t
        : e;
    }
    ((l.wallpaperValueFromFlat = e),
      (l.chatThemeValueFromFlat = s),
      (l.isMinimalScheme = u),
      (l.isWallpaperOwningChatThemeId = c),
      (l.isMinimalChatTheme = d),
      (l.wallpaperValueToHex = m),
      (l.canonicalizeWallpaperValue = p),
      (l.isDefaultPair = _),
      (l.normalizeHex = f),
      (l.isChatThemeOverride = g),
      (l.isWallpaperOverride = h),
      (l.wallpaperBackgroundFromValue = y),
      (l.doodleFromWallpaperValue = C),
      (l.wallpaperValueWithDoodle = b),
      (l.migrateStoredSolidWallpaper = S),
      (l.promoteMinimalOnColorChange = $),
      (l.keepMinimalOnFamilyChange = P));
  },
  98,
);
