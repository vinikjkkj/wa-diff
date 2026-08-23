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
        var a = I(r);
        if (a != null)
          return C({
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
        chatThemeId: t == null ? null : B(t),
        colorSchemeId: n == null ? null : A(n),
      };
    }
    function u(e, t) {
      var n = s(e),
        r = t == null ? void 0 : t.baseline;
      if (r == null) return n;
      var o =
        (n.chatThemeId == null && n.colorSchemeId != null) ||
        (n.chatThemeId != null && f(n.chatThemeId) === f(r.themeId));
      return o ? babelHelpers.extends({}, n, { baseline: r }) : n;
    }
    function c(e) {
      return e != null && o("WAWebChatThemeEnums").MinimalScheme.isValid(e);
    }
    function d(e) {
      return e != null && !c(e);
    }
    function m(e) {
      if (e == null || e.baseline != null) return !1;
      var t = e.chatThemeId,
        n = e.colorSchemeId;
      return t == null || c(t) ? !1 : n != null && !_(t, n);
    }
    function p(e) {
      if (e == null) return null;
      if (e.baseline != null) return e.baseline;
      var t = e.chatThemeId,
        n = e.colorSchemeId;
      if (t == null) return null;
      var r = c(n) ? n : t;
      if (r != null && c(r)) {
        var o = B(f(r));
        return o == null
          ? null
          : {
              themeId: o,
              colorSchemeId: r,
              wallpaper: { type: "default", isDoodleEnabled: !1 },
            };
      }
      return n == null || !_(t, n)
        ? null
        : { themeId: t, colorSchemeId: n, wallpaper: null };
    }
    function _(e, t) {
      return c(e) ? !1 : f(t) === f(e);
    }
    function f(e) {
      return String(e).replace(/@.*$/, "");
    }
    function g(e) {
      var t, n;
      if (e == null || m(e)) return !1;
      var r = p(e);
      return (
        ((t = e.colorSchemeId) != null ? t : null) !==
        ((n = r == null ? void 0 : r.colorSchemeId) != null ? n : null)
      );
    }
    function h(e) {
      return e == null ? !1 : c(e.colorSchemeId) || c(e.chatThemeId);
    }
    function y(e, t) {
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
    function C(e) {
      return e.type === "solid" &&
        b({ colorLight: e.colorLight, colorDark: e.colorDark })
        ? { type: "default", isDoodleEnabled: e.isDoodleEnabled }
        : e;
    }
    function b(e) {
      return (
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorLight) &&
        o("WAWebSolidColorPalette").isDefaultSolidColor(e.colorDark)
      );
    }
    function v(e) {
      var t = e.replace("#", "").toUpperCase(),
        n = t.length === 8 ? t.slice(2) : t;
      return "#" + n;
    }
    function S(e) {
      return e != null && (e.chatThemeId != null || e.colorSchemeId != null);
    }
    function R(e) {
      return e == null
        ? !1
        : e.type !== "default"
          ? !0
          : e.isDoodleEnabled != null;
    }
    function L(e, t) {
      return e == null
        ? {
            wallpaper: o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
            showDoodle: !0,
          }
        : {
            wallpaper: y(e, t),
            showDoodle: e.type === "stock" ? !1 : e.isDoodleEnabled !== !1,
          };
    }
    function E(e) {
      return e != null ? e.isDoodleEnabled : null;
    }
    function k(e, t) {
      return e != null && (e.type === "solid" || e.type === "stock")
        ? babelHelpers.extends({}, e, { isDoodleEnabled: t })
        : { type: "default", isDoodleEnabled: t };
    }
    function I(e) {
      var t = D(e);
      return t != null
        ? t
        : o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? M(e)
          : x(e);
    }
    function T(t) {
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
    function D(e) {
      var t = o("WAWebSolidColorPalette").findPaletteIndex(v(e));
      return t === -1
        ? null
        : {
            colorLight: v(
              o("WAWebSolidColorPalette").getSolidColors("light")[t],
            ),
            colorDark: v(o("WAWebSolidColorPalette").getSolidColors("dark")[t]),
          };
    }
    function x(e) {
      var t = v(e);
      return w(t, o("WAWebWallpaper").getWallpaperColors("light"))
        ? {
            colorLight: t,
            colorDark: v(o("WAWebWallpaper").toggleWallpaperColor(t, "light")),
          }
        : w(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? {
              colorLight: v(
                o("WAWebWallpaper").toggleWallpaperColor(t, "dark"),
              ),
              colorDark: t,
            }
          : null;
    }
    var $ = o("WAWebWallpaper").getWallpaperColors("light"),
      P = o("WAWebSolidColorPalette").getSolidColors("light"),
      N = new Map([
        [$[0], P[0]],
        [$[1], P[2]],
        [$[2], P[6]],
        [$[3], P[17]],
        [$[4], P[4]],
        [$[5], P[5]],
        [$[6], P[16]],
        [$[7], P[33]],
        [$[8], P[8]],
        [$[9], P[9]],
        [$[10], P[11]],
        [$[11], P[13]],
        [$[12], P[20]],
        [$[13], P[23]],
        [$[14], P[23]],
        [$[15], P[25]],
        [$[16], P[24]],
        [$[17], P[26]],
        [$[18], P[32]],
        [$[19], P[30]],
        [$[20], P[29]],
        [$[21], P[32]],
        [$[22], P[35]],
        [$[23], P[25]],
        [$[24], P[36]],
        [$[25], P[11]],
        [$[26], P[9]],
      ]);
    function M(e) {
      var t = v(e),
        n = w(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? v(o("WAWebWallpaper").toggleWallpaperColor(t, "dark"))
          : t,
        r = N.get(n);
      return r == null ? x(e) : D(r);
    }
    function w(e, t) {
      return t.some(function (t) {
        return v(t) === e;
      });
    }
    function A(e) {
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
    function F(e, t, n) {
      return !c(n) && c(t) ? t : e;
    }
    function O(e, t) {
      return c(e) ? e : t;
    }
    function B(e) {
      var t, n;
      return (t =
        (n = o("WAWebChatThemeEnums").MinimalScheme.cast(e)) != null
          ? n
          : o("WAWebChatThemeEnums").Theme.cast(f(e))) != null
        ? t
        : null;
    }
    ((l.wallpaperValueFromFlat = e),
      (l.chatThemeValueFromFlat = s),
      (l.chatThemeValueFromSyncedFields = u),
      (l.isMinimalScheme = c),
      (l.isWallpaperOwningChatThemeId = d),
      (l.isBaselineAmbiguous = m),
      (l.resolveBaseline = p),
      (l.themeFamilyOf = f),
      (l.hasBubbleOverride = g),
      (l.isMinimalChatTheme = h),
      (l.wallpaperValueToHex = y),
      (l.canonicalizeWallpaperValue = C),
      (l.isDefaultPair = b),
      (l.normalizeHex = v),
      (l.isChatThemeOverride = S),
      (l.isWallpaperOverride = R),
      (l.wallpaperBackgroundFromValue = L),
      (l.doodleFromWallpaperValue = E),
      (l.wallpaperValueWithDoodle = k),
      (l.migrateStoredSolidWallpaper = T),
      (l.promoteMinimalOnColorChange = F),
      (l.keepMinimalOnFamilyChange = O));
  },
  98,
);
