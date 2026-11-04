__d(
  "WAWebGifPanelGifInfo",
  ["WAWebGifPanelConstants", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = r("gkx")("26258")
        ? "3o85xmWDYKgihhIKSA"
        : "SPCZpy9mSOFVRbCLsuM5xWGUgcefkuCn",
      s = 0,
      u = function (t) {
        var e = t.accessibilityLabel,
          n = t.nonVideoUrl,
          r = t.previewUrl,
          a = t.rank,
          i = t.trending,
          l = t.url,
          u = t.width;
        ((this.rank = a),
          (this.gifId = ++s),
          (this.url = l),
          (this.previewUrl = r != null && r !== "" ? r : l),
          (this.nonVideoUrl = n),
          (this.width = u),
          (this.widthStr = u + "px"),
          (this.ratioStr =
            Math.ceil(
              (100 * o("WAWebGifPanelConstants").TARGET_GIF_HEIGHT) / u,
            ) + "%"),
          (this.trending = i),
          (this.accessibilityLabel = e));
      },
      c = [
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
    ((l.GIPHY_KEY = e), (l.GifInfo = u), (l.GIPHY_LOCALES = c));
  },
  98,
);
