__d(
  "WAWebConvertToTextWithoutSpecialEmojis",
  ["WAWebEmojiCompile", "WAWebSpecialEmojisWithSkinTones"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      if (!e) {
        var n = r("WAWebEmojiCompile")(
          Object.keys(r("WAWebSpecialEmojisWithSkinTones")),
        );
        e = new RegExp("(" + n + ")", "g");
      }
      return (
        (e.lastIndex = 0),
        t.replace(e, function (e) {
          return r("WAWebSpecialEmojisWithSkinTones")[e];
        })
      );
    }
    l.convertToTextWithoutSpecialEmojis = s;
  },
  98,
);
