__d(
  "WAWebCreateEmojiIcon",
  ["WAWebReactionEmoji.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = new Map();
    function c(e) {
      var t = u.get(e);
      return (
        t == null &&
          ((t = function () {
            return s.jsx("span", {
              className: "x12y6twl x1g0ag68",
              children: s.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                reaction: e,
                size: "large",
                scale: "tray",
              }),
            });
          }),
          u.set(e, t)),
        t
      );
    }
    l.default = c;
  },
  98,
);
