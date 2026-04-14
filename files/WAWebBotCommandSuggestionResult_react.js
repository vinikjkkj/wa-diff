__d(
  "WAWebBotCommandSuggestionResult.react",
  [
    "cx",
    "WAWebBotCommandSuggestions.react",
    "WAWebClassnames",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.command,
        r = e.imageWid,
        a = e.onMouseDown,
        i = e.onMouseEnter,
        l = e.onMouseUp,
        s = e.query,
        c = e.selected,
        d = n.description,
        m = n.name,
        p = m.slice(0, s.length),
        _ = m.slice(s.length);
      return u.jsxs("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}), (t._aopp = !0), t),
          {
            0: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz",
            1: "x78zum5 x6s0dn4 x1qx5ct2 xyamay9 xl3akx1 x1l90r2v x11ahuha x6ikm8r x10wlt62 x1f6kntn xhslqc4 xlyipyv xuxw1ft xxymvpz x1ru9bj0",
          }[!!c << 0],
        ),
        onMouseDown: a,
        onMouseUp: l,
        onMouseEnter: i,
        children: [
          r != null &&
            u.jsx("div", {
              className: "x17pgkn5 xav9cv8 x1sa5p1d",
              children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: r,
                size: 32,
              }),
            }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: "xyqdw3p x14ug900",
            text: o("WAWebBotCommandSuggestions.react").QUERY_TRIGGER,
          }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: "xyqdw3p x117nqv4 x1v5yvga",
            text: p,
          }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: "xyqdw3p x14ug900",
            text: _,
          }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: "xyqdw3p x1hm9lzh xhslqc4 x1yc453h",
            testid: void 0,
            ellipsify: !0,
            text: d,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
