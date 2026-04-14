__d(
  "WAWebSystemMessagesUtils",
  ["WAWebEmojiText.react", "WAWebUserPrefsMeUser", "WAWebWid", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return (
        e instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(e)
      );
    }
    function c(e) {
      var t = e.text;
      return s.jsx(o("WAWebEmojiText.react").EmojiText, {
        direction: "auto",
        text: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.isMe = u),
      (l.FormattedText = c));
  },
  98,
);
