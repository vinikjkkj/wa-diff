__d(
  "WAWebReactionEmoji.react",
  ["WALogger", "WAWebEmoji", "WAWebEmoji.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = {
        listScale: { transform: "x1fuyojj", $$css: !0 },
        imageRendering: { imageRendering: "x1k0y4fr", $$css: !0 },
        bubbleScale: { transform: "xl79k7v", $$css: !0 },
        bubbleScale1PxSmaller: { transform: "x1j9g6uv", $$css: !0 },
        reactionCellDetailThumbScale: { transform: "xvbds7f", $$css: !0 },
        tabScale: { transform: "x1gqj70i", $$css: !0 },
        tray: { transform: "xd7h76d", $$css: !0 },
        trayScale2PxSmaller: { transform: "xhqu4j4", $$css: !0 },
      },
      m = d.tabScale;
    function p(t) {
      var n = t.reaction,
        a = t.scale,
        i = t.size,
        l = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
      if (l == null) {
        var u = Array.from(n)
          .map(function (e) {
            var t;
            return (t = e.codePointAt(0)) == null ? void 0 : t.toString(16);
          })
          .join(" ");
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[ReactionEmoji] emoji not in catalog cp=",
              " scale=",
              "",
            ])),
          u,
          a != null ? a : "none",
        );
      }
      var m = o("WAWebEmoji")
        .EmojiUtil.getHeartEmojis()
        .some(function (e) {
          return o("WAWebEmoji").EmojiUtil.normalizeEmoji(e) === l;
        });
      return l != null
        ? c.jsx(
            r("WAWebEmoji.react"),
            {
              DEPRECATED_className: (s || (s = r("stylex")))(
                a !== "tray" && d.imageRendering,
                a === "list" && d.listScale,
                a === "bubble" && d.bubbleScale,
                a === "tray" && d.tray,
                a === "reactionCellDetailThumb" &&
                  d.reactionCellDetailThumbScale,
                m && a === "tray" && d.trayScale2PxSmaller,
                m && a === "bubble" && d.bubbleScale1PxSmaller,
              ),
              emoji: l,
              size: i,
            },
            "low-res",
          )
        : c.jsx("span", {
            className: "x14ug900",
            children: o("WAWebEmoji").OPEN_BOX_CHAR,
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.tabScale = m),
      (l.ReactionEmoji = p));
  },
  98,
);
