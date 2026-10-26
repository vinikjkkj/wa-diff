__d(
  "WAWebCommandPalettePlugins",
  ["WAWebThemeCommandPalettePlugin", "cr:17800", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = [o("WAWebThemeCommandPalettePlugin").ThemeCommandPalettePlugin];
      if (r("gkx")("16539")) {
        var t,
          a =
            (t =
              n("cr:17800") == null ? void 0 : n("cr:17800").filter(Boolean)) !=
            null
              ? t
              : [];
        e.unshift.apply(e, a);
      }
      return e;
    }
    l.getAvailablePlugins = e;
  },
  98,
);
