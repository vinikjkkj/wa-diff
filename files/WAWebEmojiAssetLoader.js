__d(
  "WAWebEmojiAssetLoader",
  [
    "WAMemoizeCache",
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebMobilePlatforms",
    "distinctArray",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAMemoizeCache").memoizeWithArgs(
        function (t, n) {
          for (
            var a = new Map(),
              i = c(t),
              l = n[i],
              s = l.SELECTOR,
              d = Math.ceil(
                (e || (e = r("distinctArray")))(l.UNICODE_TO_EMOJI).length /
                  o("WAWebEmojiConst").BUCKET_SIZE,
              ),
              m = 0;
            m < d;
            m += 1
          ) {
            var p = "emoji-" + s + "-b" + m;
            a.set(p, {
              id: p,
              selectors: [".emoji." + s + ".b" + m, ".emojik." + s + ".b" + m],
              low: u(i, m, 40),
              high: u(i, m, 64),
            });
          }
          return a;
        },
        function (e, t) {
          return e;
        },
      );
    function u(e, t, n) {
      var a = {
        default: o("WAWebEmoji").EmojiUtil.getSpritesPath(e, t, n, "png"),
        webp: o("WAWebEmoji").EmojiUtil.getSpritesPath(e, t, n, "webp"),
      };
      return (
        r("gkx")("13883") &&
          (a.avif = o("WAWebEmoji").EmojiUtil.getSpritesPath(e, t, n, "avif")),
        a
      );
    }
    function c(e) {
      switch (e) {
        case o("WAWebMobilePlatforms").PLATFORMS.IPHONE:
        case o("WAWebMobilePlatforms").PLATFORMS.SMBI:
        case o("WAWebMobilePlatforms").PLATFORMS.IPAD:
          return o("WAWebEmojiConst").EMOJI_TYPE.APPLE;
        default:
          return o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP;
      }
    }
    function d(e) {
      return function (t) {
        return s(t, e);
      };
    }
    ((l.getEmojiSpriteFiles = u),
      (l.getEmojiTypeFromPlatform = c),
      (l.emojiAssetMapCreator = d));
  },
  98,
);
