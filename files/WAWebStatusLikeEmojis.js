__d(
  "WAWebStatusLikeEmojis",
  ["WAWebEmoji"],
  function (t, n, r, o, a, i, l) {
    var e = "\uD83D\uDC9A",
      s = new Set([e]);
    function u(e) {
      if (e == null) return 0;
      var t = 0;
      for (var n of s) {
        var r = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
        if (r != null) {
          var a;
          t += (a = e.get(r)) != null ? a : 0;
        }
      }
      return t;
    }
    function c(e) {
      var t = new Set();
      for (var n of s) t.add(o("WAWebEmoji").EmojiUtil.getEmojiAggregate(n));
      var r = 0;
      for (var a of e)
        t.has(a.reactionAggregate) && (r += a.reactionSenders.length);
      return r;
    }
    ((l.STATUS_LIKE_EMOJI = e), (l.countLikes = u), (l.countStatusLikes = c));
  },
  98,
);
