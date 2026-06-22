__d(
  "WAWebChatThemeValue",
  ["WAWebChatThemeEnums", "WAWebSolidColorPalette", "WAWebWallpaper"],
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
            : (t = o("WAWebChatThemeEnums").Theme.cast(R(n))) != null
              ? t
              : null,
        colorSchemeId: r == null ? null : S(r),
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
      var t;
      return (t = C(e)) != null ? t : b(e);
    }
    function C(e) {
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
    function b(e) {
      var t = m(e);
      return v(t, o("WAWebWallpaper").getWallpaperColors("light"))
        ? {
            colorLight: t,
            colorDark: m(o("WAWebWallpaper").toggleWallpaperColor(t, "light")),
          }
        : v(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? {
              colorLight: m(
                o("WAWebWallpaper").toggleWallpaperColor(t, "dark"),
              ),
              colorDark: t,
            }
          : null;
    }
    function v(e, t) {
      return t.some(function (t) {
        return m(t) === e;
      });
    }
    function S(e) {
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
    function R(e) {
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
      (l.isThemeOverride = p),
      (l.isWallpaperOverride = _),
      (l.wallpaperBackgroundFromValue = f),
      (l.doodleFromWallpaperValue = g),
      (l.wallpaperValueWithDoodle = h));
  },
  98,
);
