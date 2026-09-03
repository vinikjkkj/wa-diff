__d(
  "WAWebCreateEmojiIcon",
  ["WAWebReactionEmoji.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = 24,
      m = 22,
      p = 20,
      _ = "scale(0.8)",
      f = "scale(0.7333)",
      g = "scale(0.6667)",
      h = {
        scaledEmoji: {
          transform: "x12y6twl",
          transformOrigin: "x1g0ag68",
          $$css: !0,
        },
        scaledEmojiSmall: {
          transform: "x1stetx1",
          transformOrigin: "x1g0ag68",
          $$css: !0,
        },
        scaledEmojiExtraSmall: {
          transform: "x11qwu0y",
          transformOrigin: "x1g0ag68",
          $$css: !0,
        },
      },
      y =
        ((e = {}),
        (e[p] = h.scaledEmojiExtraSmall),
        (e[m] = h.scaledEmojiSmall),
        (e[d] = h.scaledEmoji),
        e),
      C = new Map();
    function b(e, t) {
      t === void 0 && (t = d);
      var n = e + ":" + t,
        a = C.get(n);
      return (
        a == null &&
          ((a = function () {
            return c.jsx(
              "span",
              babelHelpers.extends({}, (s || (s = r("stylex"))).props(y[t]), {
                children: c.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                  reaction: e,
                  size: "large",
                  scale: "tray",
                }),
              }),
            );
          }),
          C.set(n, a)),
        a
      );
    }
    l.default = b;
  },
  98,
);
