__d(
  "WAWebEmojiSetup",
  [
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebEmojiJsonEmojiCategory",
    "WAWebEmojiJsonEmojiLegacy",
    "WAWebEmojiJsonEmojiUnicode",
    "WAWebEmojiJsonWaEmojiCategory",
    "WAWebEmojiJsonWaEmojiLegacy",
    "WAWebEmojiJsonWaEmojiUnicode",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (t !== e) {
        e = t;
        var n =
            t === o("WAWebEmojiConst").EMOJI_TYPE.APPLE
              ? [
                  r("WAWebEmojiJsonEmojiUnicode"),
                  r("WAWebEmojiJsonEmojiLegacy"),
                  r("WAWebEmojiJsonEmojiCategory"),
                ]
              : [
                  r("WAWebEmojiJsonWaEmojiUnicode"),
                  r("WAWebEmojiJsonWaEmojiLegacy"),
                  r("WAWebEmojiJsonWaEmojiCategory"),
                ],
          a = n[0],
          i = n[1],
          l = n[2];
        o("WAWebEmoji").EmojiUtil.configure({
          emojiType: t,
          orderedEmojis: a,
          legacyToEmoji: i,
          categorizedEmojis: l,
        });
      }
    }
    l.default = s;
  },
  98,
);
