__d(
  "WAWebStatusViewerInfoCellImage.react",
  [
    "WANullthrows",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebReactionEmoji.react",
    "WAWebRound.react",
    "WAWebStatusLikeIcon.react",
    "WAWebThemeContext",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        absolutePosition: { position: "x10l6tqk", $$css: !0 },
        emojiBadgeWrapper: {
          top: "x12eol54",
          insetInlineStart: "xfwv6vp",
          left: null,
          right: null,
          height: "xxk0z11",
          width: "xvy4d1p",
          backgroundColor: "x1280gxy",
          transitionProperty: "x13b0p5u",
          boxShadow: "x1gnnqk1",
          $$css: !0,
        },
        lightIcon: { fill: "x1k3bfnh", $$css: !0 },
        darkIcon: { fill: "x1p9vlwm", $$css: !0 },
      };
    function c(e) {
      var t = e.contact,
        n = e.reactionText,
        a = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
        ]),
        i = a[0],
        l = o("WAWebThemeContext").useIsDarkTheme(),
        c = null;
      return (
        n &&
          (c =
            n === String.fromCodePoint(128154)
              ? s.jsx("span", {
                  className: "x10l6tqk x12mlbjr x4i5khs",
                  children: s.jsx(
                    o("WAWebStatusLikeIcon.react").StatusLikeIcon,
                    { innerStyles: { border: l ? u.darkIcon : u.lightIcon } },
                  ),
                })
              : s.jsx(o("WAWebRound.react").Round, {
                  xstyle: [u.absolutePosition, u.emojiBadgeWrapper],
                  children: s.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                    scale: "bubble",
                    reaction: r("WANullthrows")(n),
                  }),
                })),
        s.jsxs("div", {
          className: "x1n2onr6 xvni27 xdd8jsf",
          children: [
            s.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: i,
              size: 52,
              shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
            }),
            c,
          ],
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
