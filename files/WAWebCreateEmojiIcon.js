__d(
  "WAWebCreateEmojiIcon",
  ["WAWebReactionEmoji.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 24,
      c = 22,
      d = "scale(0.8)",
      m = "scale(0.7333)",
      p = new Map();
    function _(e, t) {
      t === void 0 && (t = u);
      var n = e + ":" + t,
        r = p.get(n);
      return (
        r == null &&
          ((r = function () {
            return s.jsx(
              "span",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x12y6twl x1g0ag68" },
                  1: { className: "x1stetx1 x1g0ag68" },
                }[(t === c) << 0],
                {
                  children: s.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                    reaction: e,
                    size: "large",
                    scale: "tray",
                  }),
                },
              ),
            );
          }),
          p.set(n, r)),
        r
      );
    }
    l.default = _;
  },
  98,
);
