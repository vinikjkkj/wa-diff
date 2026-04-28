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
      c = new Set([]);
    function d(e) {
      var t = u.get(e);
      return t == null
        ? null
        : s + "?category=wallpaper&id=wallpaper-" + t + "_2x";
    }
    function m(e) {
      return d(e);
    }
    function p(e) {
      return u.has(e);
    }
    function _() {
      return Array.from(u.keys());
    }
    function f(e, t) {
      return t === "dark" ? !0 : !c.has(e);
    }
    ((l.getStockWallpaperUrl = d),
      (l.getStockWallpaperThumbnailUrl = m),
      (l.hasStockWallpaper = p),
      (l.getThemesWithStockWallpapers = _),
      (l.isLightSwatchBackground = f));
  },
  98,
);
