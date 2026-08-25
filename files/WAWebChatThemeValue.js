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
        var a = T(r);
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
        chatThemeId: t == null ? null : W(t),
        colorSchemeId: n == null ? null : F(n),
      };
    }
    function u(e, t) {
      var n = s(e),
        r =
          (t == null ? void 0 : t.inheritsTheme) === !0 &&
          n.chatThemeId == null &&
          n.colorSchemeId != null
            ? babelHelpers.extends({}, n, { inheritsTheme: !0 })
            : n,
        o = t == null ? void 0 : t.baseline;
      if (o == null) return r;
      var a =
        (n.chatThemeId == null && n.colorSchemeId != null) ||
        (n.chatThemeId != null && f(n.chatThemeId) === f(o.themeId));
      return a ? babelHelpers.extends({}, r, { baseline: o }) : r;
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
        var o = W(f(r));
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
    function R(e, t) {
      var n, r;
      return S(e)
        ? (e == null ? void 0 : e.inheritsTheme) !== !0
          ? e
          : babelHelpers.extends({}, e, {
              chatThemeId: O(
                (n = t == null ? void 0 : t.chatThemeId) != null ? n : null,
                (r = t == null ? void 0 : t.colorSchemeId) != null ? r : null,
                e.colorSchemeId,
              ),
            })
        : t;
    }
    function L(e) {
      return e == null
        ? !1
        : e.type !== "default"
          ? !0
          : e.isDoodleEnabled != null;
    }
    function E(e, t) {
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
    function k(e) {
      return e != null ? e.isDoodleEnabled : null;
    }
    function I(e, t) {
      return e != null && (e.type === "solid" || e.type === "stock")
        ? babelHelpers.extends({}, e, { isDoodleEnabled: t })
        : { type: "default", isDoodleEnabled: t };
    }
    function T(e) {
      var t = x(e);
      return t != null
        ? t
        : o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? w(e)
          : $(e);
    }
    function D(t) {
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
    function x(e) {
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
    function $(e) {
      var t = v(e);
      return A(t, o("WAWebWallpaper").getWallpaperColors("light"))
        ? {
            colorLight: t,
            colorDark: v(o("WAWebWallpaper").toggleWallpaperColor(t, "light")),
          }
        : A(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? {
              colorLight: v(
                o("WAWebWallpaper").toggleWallpaperColor(t, "dark"),
              ),
              colorDark: t,
            }
          : null;
    }
    var P = o("WAWebWallpaper").getWallpaperColors("light"),
      N = o("WAWebSolidColorPalette").getSolidColors("light"),
      M = new Map([
        [P[0], N[0]],
        [P[1], N[2]],
        [P[2], N[6]],
        [P[3], N[17]],
        [P[4], N[4]],
        [P[5], N[5]],
        [P[6], N[16]],
        [P[7], N[33]],
        [P[8], N[8]],
        [P[9], N[9]],
        [P[10], N[11]],
        [P[11], N[13]],
        [P[12], N[20]],
        [P[13], N[23]],
        [P[14], N[23]],
        [P[15], N[25]],
        [P[16], N[24]],
        [P[17], N[26]],
        [P[18], N[32]],
        [P[19], N[30]],
        [P[20], N[29]],
        [P[21], N[32]],
        [P[22], N[35]],
        [P[23], N[25]],
        [P[24], N[36]],
        [P[25], N[11]],
        [P[26], N[9]],
      ]);
    function w(e) {
      var t = v(e),
        n = A(t, o("WAWebWallpaper").getWallpaperColors("dark"))
          ? v(o("WAWebWallpaper").toggleWallpaperColor(t, "dark"))
          : t,
        r = M.get(n);
      return r == null ? $(e) : x(r);
    }
    function A(e, t) {
      return t.some(function (t) {
        return v(t) === e;
      });
    }
    function F(e) {
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
    function O(e, t, n) {
      return !c(n) && c(t) ? t : e;
    }
    function B(e, t) {
      return c(e) ? e : t;
    }
    function W(e) {
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
      (l.resolveEffectiveChatThemeValue = R),
      (l.isWallpaperOverride = L),
      (l.wallpaperBackgroundFromValue = E),
      (l.doodleFromWallpaperValue = k),
      (l.wallpaperValueWithDoodle = I),
      (l.migrateStoredSolidWallpaper = D),
      (l.promoteMinimalOnColorChange = O),
      (l.keepMinimalOnFamilyChange = B));
  },
  98,
);
