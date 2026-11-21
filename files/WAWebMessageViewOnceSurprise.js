__d(
  "WAWebMessageViewOnceSurprise",
  [
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebFlex.react",
    "WAWebMessageLargeEmoji.react",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = "x1jfngxa-B",
      d = {
        container: {
          position: "x10l6tqk",
          top: "xepu288",
          zIndex: "x12xzxwr",
          width: "xh8yej3",
          height: "x90ne7k",
          paddingTop: "xm77wn2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          clipPath: "xd2xkou",
          pointerEvents: "x47corl",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.isPeeking,
        a = e.onAnimationEnd,
        i = u(null),
        l = i[0],
        c = i[1],
        m;
      (t[0] !== a
        ? ((m = function () {
            a();
          }),
          (t[0] = a),
          (t[1] = m))
        : (m = t[1]),
        o("useWAWebListener").useListener(l, "animationend", m));
      var p;
      t[2] !== n
        ? ((p = {
            0: "x1n2onr6 xs7f9wi",
            1: "x1n2onr6 xs7f9wi xy6z7qb xxkxylk x1hs1qyz xuij49y xpz12be",
          }[!!n << 0]),
          (t[2] = n),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
            emoji: r("nullthrows")(
              o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(
                "\uD83E\uDD2B",
              ),
            ),
            selectable: !1,
            size: o("WAWebEmojiConst").LargeEmojiSize.LARGE,
          })),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== p
          ? ((f = s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.container,
              align: "center",
              justify: "center",
              children: s.jsx("div", {
                className: p,
                ref: c,
                "aria-hidden": "true",
                children: _,
              }),
            })),
            (t[5] = p),
            (t[6] = f))
          : (f = t[6]),
        f
      );
    }
    l.default = m;
  },
  98,
);
