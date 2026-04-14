__d(
  "WAWebEmojiMutatorComponent.react",
  [
    "WAWebEmoji.react",
    "WAWebMessageLargeEmoji.react",
    "react",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.emoji,
        n = e.selectable,
        a = e.size,
        i = e.xstyle;
      return (
        o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji",
        ),
        o("useWAWebABPropConfigValue").useABPropConfigValue(
          "custom_racing_emoji_feb2025",
        ),
        a === "xlarge"
          ? s.jsx(o("WAWebMessageLargeEmoji.react").LargeEmoji, {
              emoji: t,
              xstyle: i,
              size: o("WAWebMessageLargeEmoji.react").SIZE.XLARGE,
              element: "span",
              selectable: n,
            })
          : s.jsx(r("WAWebEmoji.react"), {
              emoji: t,
              xstyle: i,
              selectable: n,
              size: a,
            })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
