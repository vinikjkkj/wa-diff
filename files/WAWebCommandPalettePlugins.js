__d(
  "WAWebCommandPalettePlugins",
  ["WAWebThemeCommandPalettePlugin", "cr:8750", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = [o("WAWebThemeCommandPalettePlugin").ThemeCommandPalettePlugin];
      if (!r("gkx")("26258")) {
        var t,
          a =
            (t =
              n("cr:8750") == null ? void 0 : n("cr:8750").filter(Boolean)) !=
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
