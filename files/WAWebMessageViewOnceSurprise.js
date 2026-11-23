__d(
  "WAWebMessageViewOnceSurprise",
  [
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebFlex.react",
    "WAWebMessageLargeEmoji.react",
    "nullthrows",
    "react",
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
      var t = e.isPeeking,
        n = e.onAnimationEnd,
        a = u(null),
        i = a[0],
        l = a[1];
      return (
        o("useWAWebListener").useListener(i, "animationend", function () {
          n();
        }),
        s.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: d.container,
          align: "center",
          justify: "center",
          children: s.jsx("div", {
            className: {
              0: "x1n2onr6 xs7f9wi",
              1: "x1n2onr6 xs7f9wi xy6z7qb xxkxylk x1hs1qyz xuij49y xpz12be",
            }[!!t << 0],
            ref: l,
            "aria-hidden": "true",
            children: s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
              emoji: r("nullthrows")(
                o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(
                  "\uD83E\uDD2B",
                ),
              ),
              selectable: !1,
              size: o("WAWebEmojiConst").LargeEmojiSize.LARGE,
            }),
          }),
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
