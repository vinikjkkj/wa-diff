__d(
  "WAWebChatAgentMsgInfoCell.react",
  [
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebClock",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.agentName,
        n = e.msg,
        a = e.theme,
        i = o("useWAWebMsgValues").useMsgValues(n.id, [
          o("WAWebMsgGetters").getFrom,
          o("WAWebMsgGetters").getT,
        ]),
        l = i[0],
        u = i[1],
        c = o("WAWebClock").Clock.relativeDateAndTimeStr(u),
        d = o("WAWebDetailImage.react").getSize(
          o("WAWebDetailImage.react").DetailImageSize.Small,
        );
      return s.jsx(r("WAWebChatCell.react"), {
        contextEnabled: o("WAWebBoolFunc").returnFalse,
        image: s.jsx("div", {
          className: "x1n2onr6",
          style: { height: d, width: d },
          children: s.jsx(o("WAWebDetailImage.react").DefaultIcon, { id: l }),
        }),
        primary: s.jsx(o("WAWebEmojiText.react").EmojiText, {
          direction: "auto",
          text: t,
          titlify: !0,
          ellipsify: !0,
        }),
        secondary: s.jsx("span", { title: c, children: c }),
        className: "x1sqbtui x1bnvlk4",
        theme: a,
        idle: !0,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
