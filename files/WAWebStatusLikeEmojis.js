__d(
  "WAWebStatusLikeEmojis",
  ["WAWebEmoji"],
  function (t, n, r, o, a, i, l) {
    var e = "\uD83D\uDC9A",
      s = new Set([e]);
    function u(e, t) {
      var n =
          t != null
            ? o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t)
            : null,
        r = 0;
      for (var a of s) {
        var i = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(a);
        if (i != null) {
          var l = e == null ? void 0 : e.get(i);
          l != null ? (r += l) : n === i && (r += 1);
        }
      }
      return r;
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
