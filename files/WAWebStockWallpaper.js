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
      ]);
    function c(e) {
      var t = u.get(e);
      return t == null
        ? null
        : s + "?category=wallpaper&id=wallpaper-" + t + "_2x";
    }
    function d(e) {
      return c(e);
    }
    function m(e) {
      return u.has(e);
    }
    function p() {
      return Array.from(u.keys());
    }
    ((l.getStockWallpaperUrl = c),
      (l.getStockWallpaperThumbnailUrl = d),
      (l.hasStockWallpaper = m),
      (l.getThemesWithStockWallpapers = p));
  },
  98,
);
