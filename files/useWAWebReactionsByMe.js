__d(
  "useWAWebReactionsByMe",
  ["WAWebEmoji", "compactMap", "react", "useWAWebReactions"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = s([]),
        a = n[0],
        i = n[1],
        l = function (t) {
          var e = t.filter(function (e) {
              return e.reactionByMe != null;
            }),
            n = r("compactMap")(e, function (e) {
              if (e.reactionByMe != null) {
                var t = e.reactionByMe,
                  n = t.reactionText,
                  r = t.senderUserJid,
                  a = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(n),
                  i = e.getReactionSenderModel(a, r);
                return i;
              }
            });
          i(n);
        };
      return (
        r("useWAWebReactions")(
          e.map(function (e) {
            return e.toString();
          }),
          l,
          t,
        ),
        a
      );
    }
    l.default = u;
  },
  98,
);
