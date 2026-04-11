__d(
  "WAWebEmojiAssetLoader",
  [
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebMobilePlatforms",
    "distinctArray",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("lodash").memoize(function (t, n) {
        for (
          var a = new Map(),
            i = u(t),
            l = n[i],
            s = l.SELECTOR,
            c = Math.ceil(
              (e || (e = r("distinctArray")))(
                r("lodash").values(l.UNICODE_TO_EMOJI),
              ).length / o("WAWebEmojiConst").BUCKET_SIZE,
            ),
            d = 0;
          d < c;
          d += 1
        ) {
          var m,
            p = "emoji-" + s + "-b" + d,
            _ = 40;
          a.set(p, {
            id: p,
            selectors: [".emoji." + s + ".b" + d, ".emojik." + s + ".b" + d],
            low: {
              webp: (m = o("WAWebEmoji")).EmojiUtil.getSpritesPath(
                i,
                d,
                _,
                "webp",
              ),
              default: m.EmojiUtil.getSpritesPath(i, d, 40, "png"),
            },
            high: {
              default: m.EmojiUtil.getSpritesPath(i, d, 64, "png"),
              webp: m.EmojiUtil.getSpritesPath(i, d, 64, "webp"),
            },
          });
        }
        return a;
      });
    function u(e) {
      switch (e) {
        case o("WAWebMobilePlatforms").PLATFORMS.IPHONE:
        case o("WAWebMobilePlatforms").PLATFORMS.SMBI:
        case o("WAWebMobilePlatforms").PLATFORMS.IPAD:
          return o("WAWebEmojiConst").EMOJI_TYPE.APPLE;
        default:
          return o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP;
      }
    }
    function c(e) {
      return function (t) {
        return s(t, e);
      };
    }
    ((l.getEmojiTypeFromPlatform = u), (l.emojiAssetMapCreator = c));
  },
  98,
);
