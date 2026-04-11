__d(
  "WAWebFlagEmojiAssetLoader",
  ["WAWebEmoji", "WAWebEmojiAssetLoader", "WAWebEmojiConst", "lodash"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = (n = t[o("WAWebEmojiConst").CATEGORIES.FLAGS]) != null ? n : [],
        a = new Set(),
        i = new Map();
      return (
        e.forEach(function (e, t) {
          typeof e == "string"
            ? i.set(e, t)
            : e.forEach(function (e) {
                i.set(e, t);
              });
        }),
        r.forEach(function (e) {
          var t = i.get(e);
          if (t != null) {
            var n = Math.floor(t / o("WAWebEmojiConst").BUCKET_SIZE);
            a.add(n);
          }
        }),
        a
      );
    }
    var s = r("lodash").memoize(function (t, n) {
      var r = new Map(),
        a = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t),
        i = n.categorizedEmojis,
        l = n.orderedEmojis,
        s = n.selector,
        u = e(l, i);
      for (var c of u) {
        var d,
          m = "emoji-" + s + "-b" + c,
          p = 40;
        r.set(m, {
          id: m,
          selectors: [".emoji." + s + ".b" + c, ".emojik." + s + ".b" + c],
          low: {
            webp: (d = o("WAWebEmoji")).EmojiUtil.getSpritesPath(
              a,
              c,
              p,
              "webp",
            ),
            default: d.EmojiUtil.getSpritesPath(a, c, 40, "png"),
          },
          high: {
            default: d.EmojiUtil.getSpritesPath(a, c, 64, "png"),
            webp: d.EmojiUtil.getSpritesPath(a, c, 64, "webp"),
          },
        });
      }
      return r;
    });
    function u(e) {
      return function (t) {
        return s(t, e);
      };
    }
    l.flagEmojiAssetMapCreator = u;
  },
  98,
);
