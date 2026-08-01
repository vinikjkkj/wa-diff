__d(
  "WAWebMessageViewOnceSurprise",
  [
    "WAWebClassnames",
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
      c = "x1jfngxa-B";
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.isPeeking,
        a = e.onAnimationEnd,
        i = u(null),
        l = i[0],
        c = i[1],
        d;
      (t[0] !== a
        ? ((d = function () {
            a();
          }),
          (t[0] = a),
          (t[1] = d))
        : (d = t[1]),
        o("useWAWebListener").useListener(l, "animationend", d));
      var m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m =
            "x10l6tqk xepu288 x12xzxwr xh8yej3 x90ne7k xm77wn2 x6ikm8r x10wlt62 xd2xkou x47corl"),
          (t[2] = m))
        : (m = t[2]);
      var p;
      if (t[3] !== n) {
        var _;
        ((p = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((_ = {}),
          (_["xy6z7qb xxkxylk x1hs1qyz xuij49y xpz12be"] = n),
          (_["x1n2onr6 xs7f9wi"] = !0),
          _),
        )),
          (t[3] = n),
          (t[4] = p));
      } else p = t[4];
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
            emoji: r("nullthrows")(
              o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(
                "\uD83E\uDD2B",
              ),
            ),
            selectable: !1,
            size: o("WAWebEmojiConst").LargeEmojiSize.LARGE,
          })),
          (t[5] = f))
        : (f = t[5]);
      var g;
      return (
        t[6] !== p
          ? ((g = s.jsx(o("WAWebFlex.react").FlexRow, {
              className: m,
              align: "center",
              justify: "center",
              children: s.jsx("div", {
                className: p,
                ref: c,
                "aria-hidden": "true",
                children: f,
              }),
            })),
            (t[6] = p),
            (t[7] = g))
          : (g = t[7]),
        g
      );
    }
    l.default = d;
  },
  98,
);
