__d(
  "WAWebChatContactMsgInfoCell.react",
  [
    "WAWebCellFrame.react",
    "WAWebClock",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.icon,
        n = e.t,
        a = e.title,
        i = n != null ? o("WAWebClock").Clock.relativeDateAndTimeStr(n) : "-",
        l = s.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          className: "x6ikm8r x10wlt62 xlyipyv xeaf4i8",
          testid: void 0,
          children: [
            t,
            s.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: a,
              titlify: !0,
              ellipsify: !0,
            }),
          ],
        });
      return s.jsx(r("WAWebCellFrame.react"), {
        primary: l,
        secondary: i,
        theme: "plain",
        idle: !0,
        testid: void 0,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
