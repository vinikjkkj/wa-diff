__d(
  "WAWebChatKeptByMsgInfoCell.react",
  [
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.contact,
        n = e.kicTimestampMs,
        a = e.theme,
        i = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getName,
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebContactGetters").getNotifyName,
        ]),
        l = i[0],
        u = i[1],
        c = i[2],
        d = i[3],
        m = s.jsx(o("WAWebDetailImage.react").DetailImage, { id: l }),
        p;
      n != null && (p = o("WAWebClock").Clock.relativeDateAndTimeStr(n / 1e3));
      var _ = s.jsx("span", { title: p, children: p }),
        f;
      return (
        !u &&
          d &&
          (f = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: "xxayilr",
            direction: "auto",
            text: d,
          })),
        s.jsx(r("WAWebChatCell.react"), {
          contextEnabled: o("WAWebBoolFunc").returnFalse,
          image: m,
          primary: s.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: c,
            titlify: !0,
            ellipsify: !0,
          }),
          secondary: _,
          secondaryDetail: f,
          style: "x1sqbtui x1bnvlk4",
          theme: a,
          idle: !0,
          testid: void 0,
        })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
