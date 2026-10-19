__d(
  "WAWebFlagEmojiAssetLoader",
  ["WAMemoizeCache", "WAWebEmojiAssetLoader", "WAWebEmojiConst"],
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
    var s = o("WAMemoizeCache").memoizeWithArgs(
      function (t, n) {
        var r = new Map(),
          a = o("WAWebEmojiAssetLoader").getEmojiTypeFromPlatform(t),
          i = n.categorizedEmojis,
          l = n.orderedEmojis,
          s = n.selector,
          u = e(l, i);
        for (var c of u) {
          var d = "emoji-" + s + "-b" + c;
          r.set(d, {
            id: d,
            selectors: [".emoji." + s + ".b" + c, ".emojik." + s + ".b" + c],
            low: o("WAWebEmojiAssetLoader").getEmojiSpriteFiles(a, c, 40),
            high: o("WAWebEmojiAssetLoader").getEmojiSpriteFiles(a, c, 64),
          });
        }
        return r;
      },
      function (e, t) {
        return e;
      },
    );
    function u(e) {
      return function (t) {
        return s(t, e);
      };
    }
    l.flagEmojiAssetMapCreator = u;
  },
  98,
);
