__d(
  "WAWebGifPanelGifInfo",
  ["WAWebABProps", "WAWebGifPanelConstants"],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = function (n) {
        var t = n.accessibilityLabel,
          r = n.attribution,
          a = n.nonVideoUrl,
          i = n.previewUrl,
          l = n.rank,
          s = n.size,
          u = n.trending,
          c = n.url,
          d = n.width;
        ((this.rank = l),
          (this.gifId = ++e),
          (this.url = c),
          (this.size = s),
          (this.previewUrl = i || c),
          (this.nonVideoUrl = a),
          (this.width = d),
          (this.widthStr = d + "px"),
          (this.ratioStr =
            Math.ceil(
              (100 * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT) / d,
            ) + "%"),
          (this.attribution = r),
          (this.trending = u),
          (this.accessibilityLabel = t));
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
