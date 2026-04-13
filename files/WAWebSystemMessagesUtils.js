__d(
  "WAWebSystemMessagesUtils",
  [
    "WAWebEmojiText.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return (
        e instanceof r("WAWebWid") && o("WAWebUserPrefsMeUser").isMeAccount(e)
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.text,
        r;
      return (
        t[0] !== n
          ? ((r = s.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: n,
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    ((l.isMe = u), (l.FormattedText = c));
  },
  98,
);
