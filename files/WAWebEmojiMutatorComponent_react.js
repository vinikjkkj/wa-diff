__d(
  "WAWebEmojiMutatorComponent.react",
  [
    "WAWebEmoji.react",
    "WAWebMessageLargeEmoji.react",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.emoji,
        a = e.selectable,
        i = e.size,
        l = e.xstyle;
      if (
        (o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji",
        ),
        o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji_feb2025",
        ),
        i === "xlarge")
      ) {
        var u;
        return (
          t[0] !== n || t[1] !== a || t[2] !== l
            ? ((u = s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
                emoji: n,
                xstyle: l,
                size: o("WAWebMessageLargeEmoji.react").SIZE.XLARGE,
                element: "span",
                selectable: a,
              })),
              (t[0] = n),
              (t[1] = a),
              (t[2] = l),
              (t[3] = u))
            : (u = t[3]),
          u
        );
      }
      var c;
      return (
        t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== l
          ? ((c = s.jsx(r("WAWebEmoji.react"), {
              emoji: n,
              xstyle: l,
              selectable: a,
              size: i,
            })),
            (t[4] = n),
            (t[5] = a),
            (t[6] = i),
            (t[7] = l),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    l.default = u;
  },
  98,
);
