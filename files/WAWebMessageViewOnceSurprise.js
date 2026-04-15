__d(
  "WAWebMessageViewOnceSurprise",
  [
    "WANullthrows",
    "WAWebClassnames",
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebFlex.react",
    "WAWebMessageLargeEmoji.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = "x1jfngxa-B";
    function d(e) {
      var t,
        n = e.isPeeking,
        a = e.onAnimationEnd,
        i = u(null),
        l = i[0],
        c = i[1];
      return (
        o("useWAWebListener").useListener(l, "animationend", function () {
          a();
        }),
        s.jsx(o("WAWebFlex.react").FlexRow, {
          className:
            "x10l6tqk xepu288 x12xzxwr xh8yej3 x90ne7k xm77wn2 x6ikm8r x10wlt62 xd2xkou x47corl",
          align: "center",
          justify: "center",
          children: s.jsx("div", {
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              ((t = {}),
              (t["xy6z7qb xxkxylk x1hs1qyz xuij49y xpz12be"] = n),
              (t["x1n2onr6 xs7f9wi"] = !0),
              t),
            ),
            ref: c,
            "aria-hidden": "true",
            children: s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
              emoji: r("WANullthrows")(
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
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
