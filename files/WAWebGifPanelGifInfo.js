__d(
  "WAWebGifPanelGifInfo",
  ["WAWebABProps", "WAWebGifPanelConstants"],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = function (n, r, a, i, l, s, u, c, d) {
        ((this.rank = n),
          (this.gifId = ++e),
          (this.url = r),
          (this.size = a),
          (this.previewUrl = i || r),
          (this.nonVideoUrl = l),
          (this.width = s),
          (this.widthStr = s + "px"),
          (this.ratioStr =
            Math.ceil(
              (100 * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT) / s,
            ) + "%"),
          (this.attribution = u),
          (this.trending = c),
          (this.accessibilityLabel = d));
      },
      u = { giphy: "GIPHY", tenor: "Tenor" },
      c = { GIPHY: 1, TENOR: 2 };
    function d() {
      switch (o("WAWebABProps").getABPropConfigValue("gif_provider")) {
        case c.GIPHY:
          return o("WAWebGifPanelConstants").GIPHY;
        case c.TENOR:
        default:
          return o("WAWebGifPanelConstants").TENOR;
      }
    }
    var m = [
      "en",
      "es",
      "pt",
      "id",
      "fr",
      "ar",
      "tr",
      "th",
      "vi",
      "de",
      "it",
      "ja",
      "zh-CN",
      "zh-TW",
      "ru",
      "ko",
      "pl",
      "nl",
      "ro",
      "hu",
      "sv",
      "cs",
      "hi",
      "bn",
      "da",
      "fa",
      "tl",
      "fi",
      "iw",
      "ms",
      "no",
      "uk",
    ];
    ((l.GifInfo = s),
      (l.BRAND_NAMES = u),
      (l.getGifProvider = d),
      (l.GIPHY_LOCALES = m));
  },
  98,
);
