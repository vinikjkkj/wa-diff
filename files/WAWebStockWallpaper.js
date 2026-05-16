__d(
  "WAWebStockWallpaper",
  ["WAWebChatThemeEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "https://static.whatsapp.net/downloadable",
      u = "_hdpi",
      c = new Map([
        [(e = o("WAWebChatThemeEnums")).Theme.PearlIndigo, "00002"],
        [e.Theme.TyrianPurple, "00004"],
        [e.Theme.SunsetOrange, "00009"],
        [e.Theme.RoyalBlue, "00014"],
        [e.Theme.DarkCerulean, "00016"],
        [e.Theme.MerinoTeal, "00018"],
        [e.Theme.CharcoalGreen, "00021"],
        [e.Theme.PersianPlum, "00025"],
        [e.Theme.DuneMono, "00029"],
      ]),
      d = [
        { theme: e.Theme.PearlIndigo, wallpaperId: "00002" },
        { theme: e.Theme.TyrianPurple, wallpaperId: "00004" },
        { theme: e.Theme.SunsetOrange, wallpaperId: "00009" },
        { theme: e.Theme.MerinoTeal, wallpaperId: "00018" },
        { theme: e.Theme.RoyalBlue, wallpaperId: "00014" },
        { theme: e.Theme.DarkCerulean, wallpaperId: "00016" },
        { theme: e.Theme.CharcoalGreen, wallpaperId: "00021" },
        { theme: e.Theme.PersianPlum, wallpaperId: "00025" },
        { theme: e.Theme.PersianPlum, wallpaperId: "00027" },
        { theme: e.Theme.DuneMono, wallpaperId: "00029" },
        { theme: e.Theme.DuneMono, wallpaperId: "00030" },
      ],
      m = [
        { theme: e.Theme.PearlIndigo, wallpaperId: "00001" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00002" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00003" },
        { theme: e.Theme.TyrianPurple, wallpaperId: "00004" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00005" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00006" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00008" },
        { theme: e.Theme.SunsetOrange, wallpaperId: "00009" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00010" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00011" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00012" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00013" },
        { theme: e.Theme.RoyalBlue, wallpaperId: "00014" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00015" },
        { theme: e.Theme.DarkCerulean, wallpaperId: "00016" },
        { theme: e.Theme.MerinoTeal, wallpaperId: "00018" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00019" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00020" },
        { theme: e.Theme.CharcoalGreen, wallpaperId: "00021" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00022" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00023" },
        { theme: e.Theme.PersianPlum, wallpaperId: "00025" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00026" },
        { theme: e.Theme.PersianPlum, wallpaperId: "00027" },
        { theme: e.Theme.PearlIndigo, wallpaperId: "00028" },
        { theme: e.Theme.DuneMono, wallpaperId: "00029" },
        { theme: e.Theme.DuneMono, wallpaperId: "00030" },
      ],
      p = new Set([]);
    function _(e) {
      var t,
        n = o("WAWebChatThemeEnums").Theme.cast(String(e));
      return n == null ? null : (t = c.get(n)) != null ? t : null;
    }
    function f(e, t) {
      return s + "?category=wallpaper&id=wallpaper-" + e + t;
    }
    function g(e) {
      var t = c.get(e);
      return t == null ? null : v(t);
    }
    function h(e) {
      var t = c.get(e);
      return t == null ? null : y(t);
    }
    function y(e) {
      return f(e, u);
    }
    function C(e) {
      return c.has(e);
    }
    function b() {
      return Array.from(c.keys());
    }
    function v(e) {
      var t,
        n =
          typeof window != "undefined" &&
          ((t = window.devicePixelRatio) != null ? t : 1) >= 2
            ? "_web_3600"
            : "_web_2400";
      return f(e, n);
    }
    function S() {
      return d;
    }
    function R() {
      return m;
    }
    function L(e, t) {
      return t === "dark" ? !0 : !p.has(e);
    }
    ((l.getDefaultWallpaperIdForTheme = _),
      (l.getStockWallpaperUrl = g),
      (l.getStockWallpaperThumbnailUrl = h),
      (l.getStockWallpaperThumbnailUrlByImageId = y),
      (l.hasStockWallpaper = C),
      (l.getThemesWithStockWallpapers = b),
      (l.getStockWallpaperUrlByImageId = v),
      (l.getStockWallpaperPresets = S),
      (l.getAllStockWallpaperPresets = R),
      (l.isLightSwatchBackground = L));
  },
  98,
);
