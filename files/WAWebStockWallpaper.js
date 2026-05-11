__d(
  "WAWebStockWallpaper",
  ["WAWebChatThemeEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "https://static.whatsapp.net/downloadable",
      u = new Map([
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
      c = [
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
      d = new Set([]);
    function m(e) {
      var t,
        n = o("WAWebChatThemeEnums").Theme.cast(String(e));
      return n == null ? null : (t = u.get(n)) != null ? t : null;
    }
    function p(e) {
      var t = u.get(e);
      return t == null ? null : h(t);
    }
    function _(e) {
      return p(e);
    }
    function f(e) {
      return u.has(e);
    }
    function g() {
      return Array.from(u.keys());
    }
    function h(e) {
      return s + "?category=wallpaper&id=wallpaper-" + e + "_2x";
    }
    function y() {
      return c;
    }
    function C(e, t) {
      return t === "dark" ? !0 : !d.has(e);
    }
    ((l.getDefaultWallpaperIdForTheme = m),
      (l.getStockWallpaperUrl = p),
      (l.getStockWallpaperThumbnailUrl = _),
      (l.hasStockWallpaper = f),
      (l.getThemesWithStockWallpapers = g),
      (l.getStockWallpaperUrlByImageId = h),
      (l.getStockWallpaperPresets = y),
      (l.isLightSwatchBackground = C));
  },
  98,
);
