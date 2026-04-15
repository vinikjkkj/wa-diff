__d(
  "useWAWebReactionsByMe",
  [
    "WAWebEmoji",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebReactions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(4),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (n[0] = a))
        : (a = n[0]);
      var i = s(a),
        l = i[0],
        u = i[1],
        p;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function (t) {
            var e = t.filter(m),
              n = r("compactMap")(e, d);
            u(n);
          }),
          (n[1] = p))
        : (p = n[1]);
      var _ = p,
        f;
      return (
        n[2] !== e ? ((f = e.map(c)), (n[2] = e), (n[3] = f)) : (f = n[3]),
        r("useWAWebReactions")(f, _, t),
        l
      );
    }
    function c(e) {
      return e.toString();
    }
    function d(e) {
      if (e.reactionByMe != null) {
        var t = e.reactionByMe,
          n = t.reactionText,
          r = t.senderUserJid,
          a = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(n),
          i = e.getReactionSenderModel(a, r);
        return i;
      }
    }
    function m(e) {
      return e.reactionByMe != null;
    }
    l.default = u;
  },
  98,
);
